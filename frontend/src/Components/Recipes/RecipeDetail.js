function RecipeDetail(props) {
  if (!props.recipe) {
    return;
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-xl p-4 mt-20 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-6 md:p-8">
          <h1 className="text-3xl font-semibold text-center">
            {props.recipe.name}
          </h1>
          <p className="font-normal mt-5 text-center">
            {props.recipe.description}
          </p>
          <p className="font-medium mt-4">Ingredients:</p>
          <p>{props.recipe.ingredients}</p>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
