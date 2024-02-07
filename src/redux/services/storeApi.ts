import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IStore } from '@/interfaces';

export const apiStore = createApi({
  reducerPath: 'apiStore',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllStore: builder.query<IStore[], void>({
      query: () => ({
        url: '/store',
        method: 'GET'
      })
    }),

    getStoreById: builder.query<IStore[], string>({
      query: id => ({
        url: `/store/${id}`,
        method: 'GET'
      })
    }),

    createStore: builder.mutation<IStore[], Partial<IStore>>({
      query: data => ({
        url: `/store`,
        method: 'POST',
        body: data
      })
    }),

    updateStore: builder.mutation<IStore[], Partial<IStore>>({
      query: update => ({
        url: `/store`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteStore: builder.mutation<IStore[], string>({
      query: id => ({
        url: `/store/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllStoreQuery,
  useGetStoreByIdQuery,
  useCreateStoreMutation,
  useUpdateStoreMutation,
  useDeleteStoreMutation
} = apiStore;
