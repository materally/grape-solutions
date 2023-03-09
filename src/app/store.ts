import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../features/auth/api';
import authReducer from '../features/auth/slice';
import { beerApi } from '../features/beers/api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [beerApi.reducerPath]: beerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, beerApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
