import { useContext } from "react"
import { UserContext } from "../../lib/context"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProfiles } from "../../lib/constants";
import { companyRoutes, customerRoutes } from "../../lib/routes";

const MainPage = () => {
    const { user, theme } = useContext(UserContext);
    const bgURL = theme
      ? "src/assets/dark_bg.jpg"
    : "src/assets/light_bg.jpg";
  
  const router = createBrowserRouter(
    user == UserProfiles.CUSTOMER ? customerRoutes : companyRoutes
  );
  
  return (
    <main
      style={{ backgroundImage: `url(${bgURL})` }}
      className="w-screen h-screen bg-cover"
    >
      <RouterProvider router={router} />
    </main>
  );
}

export default MainPage