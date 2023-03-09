import { useDispatch } from 'react-redux';
import { logout } from '../slice';

export const useLogout = () => {
  const dispatch = useDispatch();

  return () => dispatch(logout());
}