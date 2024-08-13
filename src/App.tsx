import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkAuth } from "./lib/core";
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
        user: UserProfiles.CUSTOMER,
        theme: darkTheme,
        setTheme: setDarkTheme,
      }}
    >
      <RouterProvider router={checkAuth() ? privateRouter : publicRouter} />
    </UserContext.Provider>
  );
}

export default App;
