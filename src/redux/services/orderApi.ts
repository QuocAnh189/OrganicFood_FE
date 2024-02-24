import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOrder } from '@/interfaces';

export const apiOrder = createApi({
  reducerPath: 'apiOrder',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllOrder: builder.query<IOrder[], void>({
      query: () => ({
        url: '/order',
        method: 'GET'
      })
    }),

    getOrderById: builder.query<IOrder[], string>({
      query: id => ({
        url: `/order/${id}`,
        method: 'GET'
      })
    }),

    createOrder: builder.mutation<IOrder[], Partial<IOrder>>({
      query: data => ({
        url: `/order`,
        method: 'POST',
        body: data
      })
    }),

    updateOrder: builder.mutation<IOrder[], Partial<IOrder>>({
      query: update => ({
        url: `/order`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteOrder: builder.mutation<IOrder[], string>({
      query: id => ({
        url: `/order/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllOrderQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation
} = apiOrder;
