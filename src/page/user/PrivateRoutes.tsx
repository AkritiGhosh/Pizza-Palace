import { useContext } from "react";
import LandingPage from "../consumer/LandingPage";
import { UserContext } from "../../lib/context";
import { companyRoutes, customerRoutes } from "../../lib/routes";
import { RouteObject } from "react-router-dom";

const PrivateRoutes = () : RouteObject => {
  const { user } = useContext(UserContext);

  return {
    element: <LandingPage />,
    children: user ? customerRoutes : companyRoutes,
  };
};

export default PrivateRoutes;
