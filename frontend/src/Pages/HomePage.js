import Recipes from "../Components/Recipes/Recipes";
import { useEffect } from "react";

import { fetchRecipes } from "../API/api";
import { useDispatch } from "react-redux";
import { recipeAction } from "../Store/recipe_slice";

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

  return <Recipes />;
}

export default HomePage;
