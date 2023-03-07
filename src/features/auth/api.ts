import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH_API_URL } from '../../app/consts';

const transformResponse = (response: { answer: string }) => response.answer;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: AUTH_API_URL }),
  endpoints: (builder) => ({
    getAuthState: builder.query({
      query: () => '',
      transformResponse,
    }),
  }),
});

export const { useLazyGetAuthStateQuery } = authApi;
