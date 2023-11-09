import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import EditRecipe from "../Components/Recipes/EditRecipe";
import { fetchRecipes } from "../API/api";
import { recipeAction } from "../Store/recipe_slice";

function EditRecipePage() {
  const dispatch = useDispatch();

  const params = useParams(); // Get the recipeID
  const navigate = useNavigate();

  // Fetch the data to fill the input values in editRecipe Page
  useEffect(() => {
    async function fetchData() {
      try {
        const recipes = await fetchRecipes();
        dispatch(recipeAction.allRecipes(recipes));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);

  // Send updated data to backend
  function EditRecipeHandler(updatedRecipe) {
    axios
      .put(`/recipes/${updatedRecipe.recipeID}`, updatedRecipe)
      .then((response) => {
        if (response.status === 200) {
          navigate("/"); // navigate to home page if successfull
        } else {
          console.log("Recipe update failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return <EditRecipe params={params} onEditRecipe={EditRecipeHandler} />;
}

export default EditRecipePage;
