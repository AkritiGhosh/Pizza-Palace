import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const Offer = lazy(() => import("../consumer/menu/Offer"));
const VegMenu = lazy(() => import("../consumer/menu/VegMenu"));
const NonVegMenu = lazy(() => import("../consumer/menu/NonVegMenu"));
const Sides = lazy(() => import("../consumer/menu/Sides"));
const Combo = lazy(() => import("../consumer/menu/Combo"));
const Menu = lazy(() => import("../consumer/menu/Menu"));
const Cart = lazy(() => import("../../components/consumer/Cart"));
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
        { path: "offer", Component: Offer },
        { path: "veg", Component: VegMenu },
        { path: "non-veg", Component: NonVegMenu },
        { path: "sides", Component: Sides },
        { path: "combos", Component: Combo },
      ],
    },
    { path: "/build-custom-pizza", Component: BuildCustom },
    { path: "cart", Component: Cart },
    { path: "*", Component: PageNotFound },
  ];
};

export default PublicRoutes;
