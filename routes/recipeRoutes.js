const express = require("express");

const router = express.Router();

const authMiddleware =
    require("../middleware/authMiddleware");

const roleMiddleware =
    require("../middleware/roleMiddleware");

const upload =
    require("../middleware/upload");


const {

    dashboard,

    addRecipe,

    viewRecipes,

    showEditRecipe,

    updateRecipe,

    deleteRecipe

} = require("../controllers/recipeController");


router.get(

    "/dashboard",

    authMiddleware,

    roleMiddleware(["admin","user"]),

    dashboard

);



router.get(

    "/add",

    authMiddleware,

    roleMiddleware(["admin"]),

    (req, res) => {

        res.render("addRecipe", {

            user: req.user

        });

    }

);

router.post(

    "/add",

    authMiddleware,

    roleMiddleware(["admin"]),

    upload.single("image"),

    addRecipe

);

router.get(

    "/view",

    authMiddleware,

    roleMiddleware(["admin","user"]),

    viewRecipes

);

router.get(

    "/edit/:id",

    authMiddleware,

    roleMiddleware(["admin"]),

    showEditRecipe

);

router.post(

    "/edit/:id",

    authMiddleware,

    roleMiddleware(["admin"]),

    upload.single("image"),

    updateRecipe

);
router.get(

    "/delete/:id",

    authMiddleware,

    roleMiddleware(["admin"]),

    deleteRecipe

);


module.exports = router;