import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BEER_API_URL } from '../../app/consts';
import { ListItemProps } from './model';

export const beerApi = createApi({
  reducerPath: 'beerApi',
  baseQuery: fetchBaseQuery({ baseUrl: BEER_API_URL }),
  endpoints: (builder) => ({
    getBeers: builder.query<Array<ListItemProps>, { url: string }>({
      query: ({ url }) => `/beers/?${url}`,
    }),
  }),
});

export const { useGetBeersQuery, useLazyGetBeersQuery } = beerApi;
