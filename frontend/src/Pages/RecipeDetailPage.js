import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import RecipeDetail from "../Components/Recipes/RecipeDetail";

function RecipeDetailPage() {
  const params = useParams();
  const [data, setData] = useState([]);

  // add redux

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await axios.get("http://localhost:4000/recipes");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipes();
  }, []);

  // Find the recipe with same recipeID
  const recipe = data.find((recipe) => recipe.recipeID === params.recipeId);

  return <RecipeDetail recipe={recipe} />;
}

export default RecipeDetailPage;
