
const express = require("express");
const UserController = require("../controller/userController");
const userRouter = express.Router();
const userController= new UserController()

userRouter.post("/upload_image", userController.uploadImage)

