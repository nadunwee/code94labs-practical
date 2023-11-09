import RecipeForm from "../Components/Recipes/RecipeForm";
import Axios from "axios";
import { redirect } from "react-router-dom";

function NewRecipePage() {
  function AddRecipeHandler(newRecipe) {
    // post newRecipe to backend
    Axios.post("http://localhost:4000/insert", newRecipe)
      .then((response) => {
        if (response.status === 200) {
          // redirect to another route
          redirect("/");
        } else {
          // Handle error
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }
  return <RecipeForm onAddRecipe={AddRecipeHandler} />;
}

export default NewRecipePage;
