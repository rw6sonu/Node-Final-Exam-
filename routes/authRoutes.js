const express = require("express");

const router = express.Router();

const {

    showLogin,

    loginUser,

    showRegister,

    registerUser,

    logoutUser

} = require("../controllers/authController");


// =====================================
// LOGIN PAGE
// =====================================

router.get(

    "/login",

    showLogin

);


// =====================================
// LOGIN
// =====================================

router.post(

    "/login",

    loginUser

);


// =====================================
// REGISTER PAGE
// =====================================

router.get(

    "/register",

    showRegister

);


// =====================================
// REGISTER
// =====================================

router.post(

    "/register",

    registerUser

);


// =====================================
// LOGOUT
// =====================================

router.get(

    "/logout",

    logoutUser

);


module.exports = router;