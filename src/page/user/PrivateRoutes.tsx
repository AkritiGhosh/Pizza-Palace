import { companyRoutes, customerRoutes } from "../../lib/routes";
import { RouteObject } from "react-router-dom";
import { getUser } from "../../lib/core";
import { UserProfiles } from "../../lib/constants";

const PrivateRoutes = (): RouteObject[] => {
  const user = getUser();
  return user?.profile == UserProfiles?.CUSTOMER ? customerRoutes : companyRoutes;
};

export default PrivateRoutes;
