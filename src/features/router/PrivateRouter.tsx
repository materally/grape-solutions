import { Navigate, Outlet } from 'react-router-dom';

import { AUTH_PAGE_PATH } from '../../app/consts';
import { useIsAuthenticated } from '../auth';

export const PrivateRouter = () => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={AUTH_PAGE_PATH} />;
  }

  return <Outlet />;
};
