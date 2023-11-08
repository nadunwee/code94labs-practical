import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import NewRecipePage from "./Pages/NewRecipePage";
import ErrorPage from "./Pages/ErrorPage";
import RecipeDetail from "./Components/Recipes/RecipeDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/:recipeId", element: <RecipeDetail /> },
        { path: "/newrecipe", element: <NewRecipePage /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
