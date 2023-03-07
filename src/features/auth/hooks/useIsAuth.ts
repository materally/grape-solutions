import { useSelector } from "react-redux"
import { selectAuth } from "../selector"

export const useIsAuthenticated = () => {
  const authenticated = useSelector(selectAuth);

  return !!authenticated.username;
};
