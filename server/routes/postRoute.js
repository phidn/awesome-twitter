const express = require("express");

const { getAllPosts, createOnePost, updateOnePost, deleteOnePost } = require("./../controllers/postController");
const { verifyToken } = require("./../middlewares/verifyToken");

const Router = express.Router();

Router.route("/").get(getAllPosts);
Router.route("/").post(verifyToken, createOnePost);

Router.route("/:postId").put(verifyToken, updateOnePost);
Router.route("/:postId").delete(verifyToken, deleteOnePost);

module.exports = Router;
