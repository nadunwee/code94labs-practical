import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchRecipes } from "../API/api";
import { recipeAction } from "../Store/recipe_slice";
import RecipesList from "../Components/Recipes/RecipesList";

function HomePage() {
  const dispatch = useDispatch();

  // Fetch data to show all the recipes in homePage
  useEffect(() => {
    async function fetchData() {
      try {
        const recipesData = await fetchRecipes();
        dispatch(recipeAction.allRecipes(recipesData));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);

  return <RecipesList />;
}

export default HomePage;
