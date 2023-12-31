import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import NewRecipePage from "./Pages/NewRecipePage";
import ErrorPage from "./Pages/ErrorPage";
import RecipeDetailPage from "./Pages/RecipeDetailPage";
import EditRecipePage from "./Pages/EditRecipePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/:recipeId",
          element: <RecipeDetailPage />,
        },
        { path: "/newrecipe", element: <NewRecipePage /> },
        { path: "/editrecipe/:recipeId", element: <EditRecipePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
