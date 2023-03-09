import { useDispatch } from "react-redux";
import { saveUser } from "../slice";

export const useSaveUser = () => {
  const dispatch = useDispatch();

  return (username: string) => dispatch(saveUser(username));
}