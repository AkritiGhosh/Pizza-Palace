import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { checkAuth } from "./lib/core";
import { UserContext } from "./lib/context";
const AuthPage = lazy(() => import("./page/user/AuthPage"));
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
  { path: "/authenticate", element: <AuthPage /> },
  { path: "*", element: <PageNotFound /> },
];

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    document.getElementById("body")?.toggleAttribute("dark", darkTheme);
  }, [darkTheme]);

  const router = createBrowserRouter(
    checkAuth() ? privateRoutes : publicRoutes
  );
  return (
    <UserContext.Provider value={{ theme: darkTheme, setTheme: setDarkTheme }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
