const Recipe = require("../models/Recipe");
const User = require("../models/User");

const dashboard = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalRecipes = await Recipe.countDocuments();


        res.render("dashboard", {

            totalUsers,

            totalRecipes,

            user: req.user

        });


    } catch (error) {

        console.log(error);

        res.send("Dashboard Error");

    }

};



// =====================================
// ADD RECIPE
// =====================================

const addRecipe = async (req, res) => {

    try {


        const {

            title,

            description,

            category,

            ingredients,

            price,

            quantity

        } = req.body;


        const recipe = await Recipe.create({

            title,

            description,

            category,

            ingredients,

            price,

            quantity,

            image: req.file
                ? req.file.filename
                : ""

        });


        res.redirect("/recipes/dashboard");


    } catch (error) {

        console.log(

            "ADD RECIPE ERROR:",

            error

        );

        res.send("Recipe Add Failed");

    }

};


// =====================================
// VIEW ALL RECIPES
// =====================================

const viewRecipes = async (req, res) => {

    try {


        const recipes = await Recipe.find()

            .sort({

                createdAt: -1

            });


        res.render("viewRecipe", {

            recipes,

            user: req.user

        });


    } catch (error) {

        console.log(error);

        res.send("Error Fetching Recipes");

    }

};


// =====================================
// SHOW EDIT RECIPE PAGE
// =====================================

const showEditRecipe = async (req, res) => {

    try {


        const recipe = await Recipe.findById(

            req.params.id

        );


        if (!recipe) {

            return res.send(

                "Recipe Not Found"

            );

        }


        res.render("editRecipe", {

            recipe,

            user: req.user

        });


    } catch (error) {

        console.log(error);

        res.send("Error");

    }

};


// =====================================
// UPDATE RECIPE
// =====================================

const updateRecipe = async (req, res) => {

    try {


        const updateData = {

            title: req.body.title,

            description: req.body.description,

            category: req.body.category,

            ingredients: req.body.ingredients,

            price: req.body.price,

            quantity: req.body.quantity

        };


        if (req.file) {

            updateData.image =

                req.file.filename;

        }


        await Recipe.findByIdAndUpdate(

            req.params.id,

            updateData

        );


        res.redirect("/recipes/view");


    } catch (error) {

        console.log(error);

        res.send("Recipe Update Failed");

    }

};


// =====================================
// DELETE RECIPE
// =====================================

const deleteRecipe = async (req, res) => {

    try {


        await Recipe.findByIdAndDelete(

            req.params.id

        );


        res.redirect("/recipes/view");


    } catch (error) {

        console.log(error);

        res.send("Recipe Delete Failed");

    }

};


module.exports = {

    dashboard,

    addRecipe,

    viewRecipes,

    showEditRecipe,

    updateRecipe,

    deleteRecipe

};