import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import CreateProfile from "../page/consumer/CreateProfile";
import Profile from "../page/consumer/Profile";
import Orders from "../page/consumer/Orders";
import Settings from "../page/consumer/Settings";

// const AuthPage = lazy(() => import("../page/user/AuthPage"));
// const ComingSoon = lazy(() => import("../page/user/ComingSoon"));
const PageNotFound = lazy(() => import("../page/user/404"));
const Dashboard = lazy(() => import("../page/company/Dashboard"));
const LandingPage = lazy(() => import("../page/user/LandingPage"));

export const customerRoutes: RouteObject[] = [
  { path: "/", Component: LandingPage },
  { path: "/create-profile", Component: CreateProfile },
  { path: "/profile/:id", Component: Profile },
  { path: "/orders", Component: Orders },
  { path: "/orders/:orderId", Component: Orders },
  { path: "/settings", Component: Settings },
  { path: "*", Component: PageNotFound },
];

export const companyRoutes: RouteObject[] = [
  { path: "/", Component: Dashboard },
  {
    path: "/menu",
    Component: Dashboard,
    children: [
      { path: "add", Component: Dashboard },
      { path: "edit", Component: Dashboard },
      { path: "delete", Component: Dashboard },
    ],
  },
  { path: "/orders", Component: Dashboard },
  {
    path: "/employee-list",
    Component: Dashboard,
    children: [
      // Admin accessible pages
      { path: "add", Component: Dashboard },
      { path: "edit", Component: Dashboard },
      { path: "delete", Component: Dashboard },
    ],
  },
  { path: "/profile/:id", Component: LandingPage },
  { path: "*", Component: PageNotFound },
];
