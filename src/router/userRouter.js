
const express = require("express");
const UserController = require("../controller/userController");
const userRouter = express.Router();
const userController= new UserController()

userRouter.post("/upload_image", userController.uploadImage)
userRouter.post("/generate_presigned_url", userController.generatePresignedUrl)

module.exports = userRouter