const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  name: { type: String },
  ingredients: { type: String },
  description: { type: String },
  recipeID: { type: String },
});

const recipesModel = mongoose.model("Recipes", recipesSchema, "recipes");

module.exports = recipesModel;
