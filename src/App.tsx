import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkAuth } from "./lib/core";
import MainPage from "./page/user/MainPage";
import ComingSoon from "./page/user/ComingSoon";
import PageNotFound from "./page/user/404";

function App() {
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

  const router = createBrowserRouter(
    checkAuth() ? privateRoutes : publicRoutes
  );
  return <RouterProvider router={router} />;
}

export default App;
