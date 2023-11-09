import { useState, useEffect } from "react";
import { fetchRecipes } from "../../API/api";

import RecipesList from "./RecipesList";

function Recipes() {
  const [recipe, setRecipe] = useState([]);

  // Fetch data to show all the recipes in homePage
  useEffect(() => {
    async function fetchData() {
      try {
        const recipesData = await fetchRecipes();
        setRecipe(recipesData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (!recipe) {
    return;
  }

  return <RecipesList recipes={recipe} />;
}

export default Recipes;
