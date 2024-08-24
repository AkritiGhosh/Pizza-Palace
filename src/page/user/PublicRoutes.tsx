import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Menu from "../consumer/Menu";
import Cart from "../../components/consumer/Cart";
const PlaceOrder = lazy(() => import("../consumer/PlaceOrder"));
const BuildCustom = lazy(() => import("../consumer/BuildCustom"));
const PageNotFound = lazy(() => import("./404"));
const AuthPage = lazy(() => import("./AuthPage"));
const LandingPage = lazy(() => import("./LandingPage"));

const PublicRoutes = (): RouteObject[] => {
  return [
    { path: "/", Component: LandingPage },
    { path: "/auth", Component: AuthPage },
    { path: "/menu", Component: Menu },
    { path: "/place-order", Component: PlaceOrder },
    { path: "/build-custom-pizza", Component: BuildCustom },
    { path: "cart", Component: Cart },
    { path: "*", Component: PageNotFound },
  ];
};

export default PublicRoutes;
