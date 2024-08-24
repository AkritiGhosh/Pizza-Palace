import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// const AuthPage = lazy(() => import("../page/user/AuthPage"));
// const ComingSoon = lazy(() => import("../page/user/ComingSoon"));
const PageNotFound = lazy(() => import("../page/user/404"));
const Dashboard = lazy(() => import("../page/company/Dashboard"));
const LandingPage = lazy(() => import("../page/user/LandingPage"));

export const customerRoutes: RouteObject[] = [
  { path: "/", Component: LandingPage },
  { path: "/create-profile", Component: LandingPage },
  { path: "/profile/:id", Component: LandingPage },
  { path: "/orders", Component: LandingPage },
  { path: "/orders/:orderId", Component: LandingPage },
  { path: "/settings", Component: LandingPage },
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
