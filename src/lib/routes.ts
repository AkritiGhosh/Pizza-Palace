import { lazy } from "react";

const AuthPage = lazy(() => import("../page/user/AuthPage"));
const MainPage = lazy(() => import("../page/user/MainPage"));
const ComingSoon = lazy(() => import("../page/user/ComingSoon"));
const PageNotFound = lazy(() => import("../page/user/404"));

type RouteType = {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  loader?: any;
  action?: any;
};

export const privateRoutes: RouteType[] = [
  { path: "/", component: MainPage },
  { path: "*", component: PageNotFound },
];

export const publicRoutes: RouteType[] = [
  { path: "/", component: ComingSoon },
  { path: "/authenticate", component: AuthPage },
  { path: "*", component: PageNotFound },
];

export const customerRoutes: RouteType[] = [
  { path: "/", component: MainPage },
  { path: "*", component: PageNotFound },
];
export const companyRoutes: RouteType[] = [
  { path: "/", component: MainPage },
  { path: "*", component: PageNotFound },
];
