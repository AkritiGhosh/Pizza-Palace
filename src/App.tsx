import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, useState } from "react";
import { checkAuth } from "./lib/core";
import { UserContext } from "./lib/context";
const MainPage = lazy(() => import("./page/user/MainPage"));
const ComingSoon = lazy(() => import("./page/user/ComingSoon"));
const PageNotFound = lazy(() => import("./page/user/404"));

type RouteType = {
  path: string;
  element: JSX.Element;
  loader?: any;
  action?: any;
};

const privateRoutes: RouteType[] = [
  { path: "/", element: <MainPage /> },
  { path: "*", element: <PageNotFound /> },
];

const publicRoutes: RouteType[] = [
  { path: "/", element: <ComingSoon /> },
  { path: "*", element: <PageNotFound /> },
];

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const router = createBrowserRouter(
    checkAuth() ? privateRoutes : publicRoutes
  );
  return (
    <UserContext.Provider value={{ darkTheme, setDarkTheme }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
