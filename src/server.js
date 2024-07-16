
const express = require("express");
const app = express();
const env = require("dotenv");
const logger = require("morgan");
const fileUpload = require("express-fileupload");
// require("./.env")


env.config({ path: "./.env" }) 
const PORT = process.env.PORT || 8000;


const userRouter = require("./router/userRouter");


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