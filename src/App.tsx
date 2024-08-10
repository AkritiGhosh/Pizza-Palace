import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {  useEffect, useState } from "react";
import { checkAuth } from "./lib/core";
import { UserContext } from "./lib/context";
import { privateRoutes, publicRoutes } from "./lib/routes";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    document.getElementById("body")?.toggleAttribute("dark", darkTheme);
  }, [darkTheme]);

  const router = createBrowserRouter(
    checkAuth() ? privateRoutes : publicRoutes
  );
  return (
    <UserContext.Provider
      value={{ user: "consumer", theme: darkTheme, setTheme: setDarkTheme }}
    >
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
