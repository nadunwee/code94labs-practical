function RecipeDetail(props) {
  if (!props.recipe) {
    console.log("done");
    return;
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-xl p-4 mt-20 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-6 md:p-8">
          <h1>{props.recipe.name}</h1>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
