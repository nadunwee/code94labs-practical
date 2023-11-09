import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import EditRecipe from "../Components/Recipes/EditRecipe";
import { fetchRecipes } from "../API/api";

function EditRecipePage() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // Fetch the data to fill the input values in editRecipe Page
  useEffect(() => {
    async function fetchData() {
      try {
        const recipes = await fetchRecipes();
        setData(recipes.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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

  // Find the Recipe with same recipeID
  const recipe = data.find((recipe) => recipe.recipeID === params.recipeId);

  return <EditRecipe recipe={recipe} onEditRecipe={EditRecipeHandler} />;
}

export default EditRecipePage;
