import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRate } from '@/interfaces';

export const apiRate = createApi({
  reducerPath: 'apiRate',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllRate: builder.query<IRate[], void>({
      query: () => ({
        url: '/rate',
        method: 'GET'
      })
    }),

    getRateById: builder.query<IRate[], string>({
      query: id => ({
        url: `/rate/${id}`,
        method: 'GET'
      })
    }),

    createRate: builder.mutation<IRate[], Partial<IRate>>({
      query: data => ({
        url: `/rate`,
        method: 'POST',
        body: data
      })
    }),

    updateRate: builder.mutation<IRate[], Partial<IRate>>({
      query: update => ({
        url: `/rate`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteRate: builder.mutation<IRate[], string>({
      query: id => ({
        url: `/rate/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllRateQuery,
  useGetRateByIdQuery,
  useCreateRateMutation,
  useUpdateRateMutation,
  useDeleteRateMutation
} = apiRate;
