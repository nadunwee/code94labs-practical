import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RecipesList() {
  const recipes = useSelector((state) => state.recipes);
  let navigate = useNavigate();

  if (!recipes) {
    console.log(recipes);
    console.log("no recipe data");
    return;
  }

  // Handler that send delete data to backend
  function deleteBtnHandler(recipeID) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (confirmDelete) {
      try {
        axios.delete(`/recipes/${recipeID}`);
        window.location.reload(); // Reload the page
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  }

  // Redirect to edit route when click on edit
  function routeChange(ID) {
    let path = `/editrecipe/${ID}`;
    navigate(path);
  }

  return (
    <div className="mt-24 ml-8 mr-8 mb-8 max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <div
          key={recipe.recipeID}
          className="bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 hover:border-gray-200  "
        >
          <Link to={recipe.recipeID}>
            <div className="p-5">
              <Link to={recipe.recipeID}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {recipe.name}
                </h5>
              </Link>
              <p className="mb-2 font-normal text-gray-700">
                {recipe.description}
              </p>
            </div>
          </Link>
          <hr />
          <div className="p-5 pt-3 pb-3">
            <button
              type="button"
              className="inline-block mr-5 rounded-lg border border-blue-700 px-2.5 py-1.5 text-center text-base font-semibold text-black transition hover:bg-blue-600  hover:text-white"
              onClick={() => routeChange(recipe.recipeID)}
            >
              Edit
            </button>
            <button
              type="button"
              className="inline-block rounded-lg border border-red-700 px-2.5 py-1.5 text-center text-base font-semibold text-black transition hover:bg-red-600 hover:border-red-600 hover:text-white"
              onClick={() => deleteBtnHandler(recipe.recipeID)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
