import { useRef } from "react";

function RecipeForm(props) {
  const nameRef = useRef();
  const ingredientsRef = useRef();
  const descriptionRef = useRef();
  const idRef = useRef();

  function saveRecipeHandler(e) {
    e.preventDefault();

    // save all the user entered values in newRecipe
    const newRecipe = {
      recipeID: idRef.current.value,
      name: nameRef.current.value,
      ingredients: ingredientsRef.current.value,
      description: descriptionRef.current.value,
    };

    // Send newRecipe to NewRecipePage
    props.onAddRecipe(newRecipe);

    // Change all the values after sending data
    idRef.current.value = "";
    nameRef.current.value = "";
    ingredientsRef.current.value = "";
    descriptionRef.current.value = "";
  }

  return (
    <div className="flex justify-center items-center h-screen mt-10 mb-10">
      <div className="w-full max-w-xl p-4 mt-20 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-6 md:p-8">
        <form onSubmit={saveRecipeHandler}>
          <div className="grid gap-6 mb-6 md:grid-cols-2"></div>
          <div className="mb-6">
            <label
              for="id"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              ID:
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Unique Identifier (only numbers and alphabetic letters)"
              pattern="[A-Za-z0-9]+"
              autoComplete="off"
              ref={idRef}
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Recipe Name"
              autoComplete="off"
              ref={nameRef}
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Ingredients:
            </label>
            <textarea
              id="description"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   "
              placeholder="2 Carrots, Tomato..."
              ref={ingredientsRef}
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description:
            </label>
            <textarea
              id="description"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   "
              placeholder="This Recipe is special..."
              ref={descriptionRef}
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block rounded-lg border border-blue-700 px-2.5 py-1.5 text-center text-base font-semibold text-black transition hover:bg-blue-600 hover:border-blue-600 hover:text-white"
          >
            Add the Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default RecipeForm;
