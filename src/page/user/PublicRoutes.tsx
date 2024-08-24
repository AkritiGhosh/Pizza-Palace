import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const PlaceOrder = lazy(() => import("../consumer/PlaceOrder"));
const BuildCustom = lazy(() => import("../consumer/BuildCustom"));
const PageNotFound = lazy(() => import("./404"));
const AuthPage = lazy(() => import("./AuthPage"));
const LandingPage = lazy(() => import("./LandingPage"));

const PublicRoutes = (): RouteObject[] => {
  return [
    { path: "/", element: <LandingPage /> },
    { path: "/auth", element: <AuthPage /> },
    { path: "/menu", element: <></> },
    { path: "/place-order", element: <PlaceOrder /> },
    { path: "/build-custom-pizza", element: <BuildCustom /> },
    { path: "cart", element: <></> },
    { path: "*", element: <PageNotFound /> },
  ];
};

export default PublicRoutes;
