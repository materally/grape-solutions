import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AUTH_API_URL } from '../../app/consts';
import { AuthResponse } from './model';

const transformResponse = (response: { answer: AuthResponse }) => response.answer;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: AUTH_API_URL }),
  endpoints: (builder) => ({
    getAuthState: builder.query<AuthResponse, void>({
      query: () => '',
      transformResponse,
    }),
  }),
});

export const { useLazyGetAuthStateQuery } = authApi;
