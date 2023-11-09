import axios from "axios";

// get data from server and return to so this can you in other places
export async function fetchRecipes() {
  try {
    const response = await axios.get("http://localhost:4000/recipes");
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
