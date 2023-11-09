import RecipeForm from "../Components/Recipes/RecipeForm";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function NewRecipePage() {
  const navigate = useNavigate();

  function AddRecipeHandler(newRecipe) {
    // Send newRecipe data to backend
    Axios.post("http://localhost:4000/insert", newRecipe)
      .then((response) => {
        if (response.status === 200) {
          navigate("/"); // navigate to home page if successfull
        } else {
          console.log("No Recipe Added");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return <RecipeForm onAddRecipe={AddRecipeHandler} />;
}

export default NewRecipePage;
