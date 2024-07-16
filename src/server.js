
const express = require("express");
const app = express();
const env = require("dotenv");

env.config({ path: "./.env" })

const PORT = process.env.PORT || 8000;

app.use("/", )

app.listen(PORT, () => {
    console.log(`Server start listen @ port : ${PORT}`);
})