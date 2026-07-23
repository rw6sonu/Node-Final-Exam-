const Comment = require("../models/Comment");

const addComment = async (req, res) => {

    try {

        const { text } = req.body;

        await Comment.create({

            text,

            recipe: req.params.recipeId,

            user: req.user.userId

        });

        res.redirect(
            `/recipes/${req.params.recipeId}`
        );

    } catch (error) {
        console.log(error);
        res.send("Comment Failed");
    }
};


const deleteComment = async (req, res) => {

    try {

        const comment = await Comment.findById(
            req.params.id
        );

        if (
            comment.user.toString() !== req.user.userId &&
            req.user.role !== "admin"
        ) {
            return res.status(403).send("Access Denied");
        }

        await Comment.findByIdAndDelete(
            req.params.id
        );

        res.redirect(
            `/recipes/${comment.recipe}`
        );

    } catch (error) {
        console.log(error);
        res.send("Delete Failed");
    }
};


module.exports = {
    addComment,
    deleteComment
};