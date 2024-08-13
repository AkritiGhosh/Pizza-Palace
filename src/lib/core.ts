import { UserProfiles } from "./constants";

export const checkAuth = () => {
  return true;
};

export const getUser = () => {
  return {
    profile: UserProfiles?.CUSTOMER,
  };
};
