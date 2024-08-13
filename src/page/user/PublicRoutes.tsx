import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const PageNotFound = lazy(() => import("./404"));
const AuthPage = lazy(() => import("./AuthPage"));
const LandingPage = lazy(() => import("./LandingPage"));

const PublicRoutes = (): RouteObject => {
  return {
    element: <LandingPage />,
    children: [
      { path: "auth", element: <AuthPage /> },
      { path: "*", element: <PageNotFound /> },
    ],
  };
};

export default PublicRoutes;
