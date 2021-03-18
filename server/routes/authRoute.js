const {login, register, getCurrentUser} = require("./../controllers/authController");

const express = require("express");
const { checkCurrentUser } = require("../middlewares/checkCurrentUser");

const Router = express.Router();

Router.route("/register").post(register);
Router.route("/login").post(login);
Router.route("/").get(checkCurrentUser, getCurrentUser);

module.exports = Router;
