import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AUTH_PAGE_PATH } from '../../app/consts';
import { GuestRouter } from './GuestRouter';
import { PrivateRouter } from './PrivateRouter';
import { Auth } from '../auth/Auth';
import { NotFound } from '../../components/not-found/NotFound';
import { List } from '../beers/List';

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    path: '/',
    element: <PrivateRouter />,
    children: [
      {
        path: '/',
        element: <List />,
      },
      {
        path: '/beer/:id',
        element: null,
      }
    ],
  },
  {
    path: '/',
    element: <GuestRouter />,
    children: [
      {
        path: AUTH_PAGE_PATH,
        element: <Auth />,
      },
    ],
    errorElement: <NotFound />
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
