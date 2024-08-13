import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { checkAuth, getUser } from "./lib/core";
import { UserContext } from "./lib/context";
import { UserProfiles } from "./lib/constants";
import PrivateRoutes from "./page/user/PrivateRoutes";
import PublicRoutes from "./page/user/PublicRoutes";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    document.getElementById("body")?.toggleAttribute("dark", darkTheme);
  }, [darkTheme]);

  const privateRouter = createBrowserRouter([
    ...PrivateRoutes(),
    PublicRoutes(),
  ]);
  const publicRouter = createBrowserRouter([PublicRoutes()]);

  return (
    <UserContext.Provider
      value={{
        user: getUser()?.profile,
        theme: darkTheme,
        setTheme: setDarkTheme,
      }}
    >
      <RouterProvider router={checkAuth() ? privateRouter : publicRouter} />
    </UserContext.Provider>
  );
}

export default App;
