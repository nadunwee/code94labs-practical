import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import RecipeDetail from "../Components/Recipes/RecipeDetail";
import { fetchRecipes } from "../API/api";

function RecipeDetailPage() {
  const params = useParams(); // get the recipeID
  const [data, setData] = useState([]);

  // Fetch data to show data in recipeDetail page
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchRecipes();
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // Find the recipe with same recipeID
  const recipe = data.find((recipe) => recipe.recipeID === params.recipeId);

  return <RecipeDetail recipe={recipe} />;
}

export default RecipeDetailPage;
