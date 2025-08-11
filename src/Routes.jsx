import React from "react";
import { useRoutes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ArticlesPage from "./Pages/ArticlesPage";
import ArticleDetails from "./Components/Articles/ArticleDetails";
import TermsConditions from "./Pages/TermsConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ScrollToTop from "./Components/ScrollToTop";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/articles",
      element: <ArticlesPage />,
    },
    {
      path: "/article-details",
      element: <ArticleDetails />,
    },
    {
      path: "/terms-conditions",
      element: <TermsConditions />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    }
  ]);
  
  return (
    <>
      <ScrollToTop />
      {element}
    </>
  );
};
export default ProjectRoutes;
