
const express = require("express");
const UserController = require("../controller/userController");
const userRouter = express.Router();
const userController = new UserController()
const multer = require("multer");
const storage = multer.memoryStorage()
const multerStorage = multer({ storage })

userRouter.put("/upload_image", multerStorage.single("image"), userController.uploadImage)
userRouter.post("/generate_presigned_url", userController.generatePresignedUrl)

module.exports = userRouter