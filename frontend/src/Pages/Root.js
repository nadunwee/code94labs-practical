import { Outlet } from "react-router-dom";

import Navigation from "../Components/Layout/Navigation";

function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default Root;
