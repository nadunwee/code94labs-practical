const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");
const recipesModel = require("./models/schemas");

const app = express();

app.use(express.json());
app.use(cors());
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

// send data to mongoDB
app.post("/insert", async (req, res) => {
  const { recipeID, name, ingredients, description } = req.body;

  const formData = new recipesModel({
    name: name,
    ingredients: ingredients,
    description: description,
    recipeID: recipeID,
  });

  try {
    await formData.save();
    res.send("inserted data..");
  } catch (err) {
    console.log(err);
  }
});

// get data from mongoDB
app.get("/recipes", (req, res) => {
  recipesModel
    .find()
    .then((recipe) => res.json(recipe))
    .catch((err) => res.json(err));
});

// Add this route to delete a recipe by recipeID
app.delete("/recipes/:recipeID", async (req, res) => {
  const { recipeID } = req.params;
  console.log(`Received DELETE request for recipe with ID: ${recipeID}`);

  try {
    const deletedRecipe = await recipesModel.findOneAndDelete({ recipeID });
    if (deletedRecipe) {
      res.status(200).json({ message: "Recipe deleted successfully" });
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
