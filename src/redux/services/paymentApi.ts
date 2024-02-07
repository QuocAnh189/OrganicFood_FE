import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPayment } from '@/interfaces';

export const apiPayment = createApi({
  reducerPath: 'apiPayment',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllPayment: builder.query<IPayment[], void>({
      query: () => ({
        url: '/payment',
        method: 'GET'
      })
    }),

    getPaymentById: builder.query<IPayment[], string>({
      query: id => ({
        url: `/payment/${id}`,
        method: 'GET'
      })
    }),

    createPayment: builder.mutation<IPayment[], Partial<IPayment>>({
      query: data => ({
        url: `/payment`,
        method: 'POST',
        body: data
      })
    }),

    updatePayment: builder.mutation<IPayment[], Partial<IPayment>>({
      query: update => ({
        url: `/payment`,
        method: 'PATCH',
        body: update
      })
    }),

    deletePayment: builder.mutation<IPayment[], string>({
      query: id => ({
        url: `/payment/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllPaymentQuery,
  useGetPaymentByIdQuery,
  useCreatePaymentMutation,
  useUpdatePaymentMutation,
  useDeletePaymentMutation
} = apiPayment;
