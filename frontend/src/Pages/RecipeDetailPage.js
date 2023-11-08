import axios from "axios";

import RecipeDetail from "../Components/Recipes/RecipeDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetailPage() {
  const params = useParams();
  const [data, setData] = useState([]);

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

  const recipe = data.find((recipe) => recipe.recipeID === params.recipeId);
  console.log(recipe);
  return (
    <>
      <RecipeDetail recipe={recipe} />
    </>
  );
}

export default RecipeDetailPage;
