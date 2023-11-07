import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import NewRecipePage from "./Pages/NewRecipePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomePage /> },
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
