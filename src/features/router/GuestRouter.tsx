import { Navigate, Outlet } from 'react-router-dom';

import { HOME_PAGE_PATH } from '../../app/consts';
import { useIsAuthenticated } from "../auth"

export const GuestRouter = () => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to={HOME_PAGE_PATH} />;
};
