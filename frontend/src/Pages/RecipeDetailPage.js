import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import RecipeDetail from "../Components/Recipes/RecipeDetail";

function RecipeDetailPage() {
  const params = useParams(); // get the recipeID

  // get all the recipes
  const recipes = useSelector((state) => state.recipes);

  // Find the recipe with same recipeID
  const recipe = recipes.find((recipe) => recipe.recipeID === params.recipeId);

  return <RecipeDetail recipe={recipe} />;
}

export default RecipeDetailPage;
