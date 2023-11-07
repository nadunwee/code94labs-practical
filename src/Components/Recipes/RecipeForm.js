function RecipeForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xl p-4 mt-20 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-6 md:p-8">
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2"></div>
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
              placeholder="Recipe 1"
              autoComplete="off"
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
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block rounded-lg border border-blue-700 px-2.5 py-1.5 text-center text-base font-semibold text-black transition hover:bg-blue-600 hover:border-blue-600 hover:text-white"
          >
            Save the Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default RecipeForm;
