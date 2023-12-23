// 웹 프레임워크
const express = require("express");
// mongoDB 라이브러리
const mongoose = require("mongoose");
// env variables 라이브러리
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors()); // 접근 허용

mongoose
    .connect(process.env.DB)
    .then(() => console.log("Connected to database"));

module.exports = app;