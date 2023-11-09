import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import EditRecipe from "../Components/Recipes/EditRecipe";

function EditRecipePage() {
  const params = useParams();
  const [data, setData] = useState([]);

  // add redux here

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

  function EditRecipeHandler(updatedRecipe) {
    //content
    axios
      .put(`/recipes/${updatedRecipe.recipeID}`, updatedRecipe)
      .then((response) => {
        if (response.status === 200) {
          // Recipe updated successfully
          console.log("Recipe updated successfully");
        } else {
          // Handle error
          console.log("Recipe update failed");
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

  // Find the Recipe with same recipeID
  const recipe = data.find((recipe) => recipe.recipeID === params.recipeId);

  return <EditRecipe recipe={recipe} onEditRecipe={EditRecipeHandler} />;
}

export default EditRecipePage;
