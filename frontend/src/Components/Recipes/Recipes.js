import RecipesList from "./RecipesList";
import { useState, useEffect } from "react";
import axios from "axios";

function Recipes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/recipes")
      .then((recipe) => setRecipe(recipe))
      .catch((err) => console.log(err));
  }, []);

  if (!recipe) {
    return;
  }

  return (
    <div className="mt-20">
      <RecipesList recipes={recipe} />
    </div>
  );
}

export default Recipes;
