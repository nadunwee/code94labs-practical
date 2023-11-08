const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");
const recipesModel = require("./models/schemas");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/recipes", (req, res) => {
  recipesModel
    .find()
    .then((recipe) => res.json(recipe))
    .catch((err) => res.json(err));
});

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log("server is running");
});
