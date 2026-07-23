const express = require("express");

const cookieParser = require("cookie-parser");

const path = require("path");

require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

connectDB();

app.set(
  "view engine",

  "ejs",
);

app.set(
  "views",

  path.join(
    __dirname,

    "views",
  ),
);

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(cookieParser());

app.use(
  express.static(
    path.join(
      __dirname,

      "public",
    ),
  ),
);


app.get(
  "/",

  (req, res) => {

    res.redirect("/login");

  },
);


app.use(
  "/",

  authRoutes,
);


app.use(
  "/recipes",

  recipeRoutes,
);


app.use((req, res) => {

  res.status(404).send("Page Not Found");

});


const PORT = process.env.PORT || 8000;

app.listen(
  PORT,

  () => {

    console.log(
      `Server running at http://localhost:${PORT}`
    );

  },
);