import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const Menu = lazy(() => import("../consumer/Menu"));
const Cart = lazy(() => import("../../components/consumer/Cart"));
const PlaceOrder = lazy(() => import("../consumer/PlaceOrder"));
const BuildCustom = lazy(() => import("../consumer/BuildCustom"));
const PageNotFound = lazy(() => import("./404"));
const AuthPage = lazy(() => import("./AuthPage"));
const LandingPage = lazy(() => import("./LandingPage"));

const PublicRoutes = (): RouteObject[] => {
  return [
    { path: "/", Component: LandingPage },
    { path: "/auth", Component: AuthPage },
    {
      path: "/menu",
      Component: Menu,
      children: [
        { path: "offer", Component: Menu },
        { path: "veg", Component: Menu },
        { path: "non-veg", Component: Menu },
        { path: "sides", Component: Menu },
        { path: "combos", Component: Menu },
      ],
    },
    { path: "/place-order", Component: PlaceOrder },
    { path: "/build-custom-pizza", Component: BuildCustom },
    { path: "cart", Component: Cart },
    { path: "*", Component: PageNotFound },
  ];
};

export default PublicRoutes;
