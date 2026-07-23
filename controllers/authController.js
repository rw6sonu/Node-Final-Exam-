const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


const showLogin = (req, res) => {
res.render("login", {
success: [],
error: []
});
};


const showRegister = (req, res) => {
  res.render("register");
};



const registerUser = async (req, res) => {
  try {
    const {
      username,

      email,

      password,
      role,
    } = req.body;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.send("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(
      password,

      10,
    );

    await User.create({
      username,

      email,

      password: hashedPassword,

      role,
    });

    res.redirect("/login");
  } catch (error) {
    console.log(error);

    res.send("Registration Failed");
  }
};


const loginUser = async (req, res) => {
  try {
    const {
      email,

      password,
    } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.send("Invalid Email or Password");
    }

    const isMatch = await bcrypt.compare(
      password,

      user.password,
    );

    if (!isMatch) {
      return res.send("Invalid Email or Password");
    }

    const token = jwt.sign(
      {
        userId: user._id,

        username: user.username,

        email: user.email,

        role: user.role,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "1d",
      },
    );

    res.cookie(
      "token",

      token,

      {
        httpOnly: true,

        maxAge: 24 * 60 * 60 * 1000,
      },
    );

    res.redirect("/recipes/dashboard");
  } catch (error) {
    console.log(error);

    res.send("Login Failed");
  }
};


const logoutUser = (req, res) => {
  res.clearCookie("token");

  res.redirect("/login");
};

module.exports = {
  showLogin,

  loginUser,

  showRegister,

  registerUser,

  logoutUser,
};
