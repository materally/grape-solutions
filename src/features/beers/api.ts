import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BEER_API_URL } from '../../app/consts';
import { ListItemProps } from './components/model';

export const beerApi = createApi({
  reducerPath: 'beerApi',
  baseQuery: fetchBaseQuery({ baseUrl: BEER_API_URL }),
  endpoints: (builder) => ({
    getBeers: builder.query<Array<ListItemProps>, void>({
      query: () => '',
    }),
  }),
});

export const { useGetBeersQuery } = beerApi;
