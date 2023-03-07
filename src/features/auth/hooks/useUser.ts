import { useSelector } from "react-redux";
import { selectAuth } from "../selector";

export const useUser = () => {
  const user = useSelector(selectAuth);

  return user.username;
};
