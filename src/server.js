
const express = require("express");
const app = express();
const env = require("dotenv");
const userRouter = require("./router/userRouter");
const logger = require("morgan");
const fileUpload = require("express-fileupload");

env.config({ path: "./.env" })
const PORT = process.env.PORT || 8000;

app.use(logger("combined"))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(fileUpload())

app.use("/", userRouter)

app.use((err, req, res, next) => {
    console.log(err);
    console.log("error occured");
    // console.log(err);
})


app.listen(PORT, () => {
    console.log(`Server start listen @ port : ${PORT}`);
})