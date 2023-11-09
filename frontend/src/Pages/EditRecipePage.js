import { useParams } from "react-router-dom";
import EditRecipe from "../Components/Recipes/EditRecipe";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditRecipePage() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await Axios.get("http://localhost:4000/recipes");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipes();
  }, []);

  function EditRecipeHandler(updatedRecipe) {
    //content
    console.log(`edited redipe ${updatedRecipe.redipeID}`);
    Axios.put(`/recipes/${updatedRecipe.recipeID}`, updatedRecipe)
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

  const recipe = data.find((recipe) => recipe.recipeID === params.recipeId);
  return <EditRecipe recipe={recipe} onEditRecipe={EditRecipeHandler} />;
}

export default EditRecipePage;
