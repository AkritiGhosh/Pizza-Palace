import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// const AuthPage = lazy(() => import("../page/user/AuthPage"));
// const ComingSoon = lazy(() => import("../page/user/ComingSoon"));
const PageNotFound = lazy(() => import("../page/user/404"));
const Dashboard = lazy(() => import("../page/company/Dashboard"));
const LandingPage = lazy(() => import("../page/user/LandingPage"));

export const customerRoutes: RouteObject[] = [
  { path: "/", Component: LandingPage },
  { path: "*", Component: PageNotFound },
];
export const companyRoutes: RouteObject[] = [
  { path: "/", Component: Dashboard },
  { path: "*", Component: PageNotFound },
];
