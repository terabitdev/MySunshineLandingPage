import React from "react";
import { useRoutes } from "react-router-dom";
import MainPage from "./Pages/MainPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);
  return element;
};
export default ProjectRoutes;
