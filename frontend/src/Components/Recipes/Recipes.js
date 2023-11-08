import { useState, useEffect } from "react";
import axios from "axios";

import RecipesList from "./RecipesList";

function Recipes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await axios.get("http://localhost:4000/recipes");
        setRecipe(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipes();
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
