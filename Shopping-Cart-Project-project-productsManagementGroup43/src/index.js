const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const router = require("./routers/route");
const multer = require("multer");

app.use(bodyparser.json()); //👈ConvertObject to JSON Form
app.use(multer().any());

//***********************[🔗MongoDB & Node.JS Connected🔗]***********************//
mongoose
  .connect(
    "mongodb+srv://shilpikumari:shilpi1234@cluster0.phpas.mongodb.net/group-20_ProductProject",
    {
      useNewUrlParser: true,
    }
  )
  .then((result) => console.log("Hello Shilpi Kumari MongoDb is connected 👌"))
  .catch((err) => console.log(err));

//**************************[👇It is Global Api's👇]*****************************//
app.use("/", router);

//******************************[👇Port Created👇]*******************************//
app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port 🏃 " + (process.env.PORT || 3000));
});

//👌👌👌👌👌👌👌👌[Thank You Shilpi kumari Index-File End]👌👌👌👌👌👌👌👌👌//
