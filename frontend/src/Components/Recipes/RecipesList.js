import { Link } from "react-router-dom";

function RecipesList(props) {
  if (!props.recipes.data) {
    return;
  }
  return (
    <div className="mt-24 ml-8 mr-8 mb-8 max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {props.recipes.data.map((recipe) => (
        <div
          key={recipe.recipeID}
          className="bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 hover:border-gray-200 "
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
              <div>
                <button
                  type="button"
                  className="inline-block mr-5 rounded-lg border border-blue-700 px-2.5 py-1.5 text-center text-base font-semibold text-black transition hover:bg-blue-600  hover:text-white"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="inline-block rounded-lg border border-red-700 px-2.5 py-1.5 text-center text-base font-semibold text-black transition hover:bg-red-600 hover:border-red-600 hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;