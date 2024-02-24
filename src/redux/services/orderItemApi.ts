import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOrderItem } from '@/interfaces';

export const apiOrderItem = createApi({
  reducerPath: 'apiOrderItem',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllOrderItem: builder.query<IOrderItem[], void>({
      query: () => ({
        url: '/orderItem',
        method: 'GET'
      })
    }),

    getOrderItemById: builder.query<IOrderItem[], string>({
      query: id => ({
        url: `/orderItem/${id}`,
        method: 'GET'
      })
    }),

    createOrderItem: builder.mutation<IOrderItem[], Partial<IOrderItem>>({
      query: data => ({
        url: `/orderItem`,
        method: 'POST',
        body: data
      })
    }),

    updateOrderItem: builder.mutation<IOrderItem[], Partial<IOrderItem>>({
      query: update => ({
        url: `/orderItem`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteOrderItem: builder.mutation<IOrderItem[], string>({
      query: id => ({
        url: `/orderItem/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllOrderItemQuery,
  useGetOrderItemByIdQuery,
  useCreateOrderItemMutation,
  useUpdateOrderItemMutation,
  useDeleteOrderItemMutation
} = apiOrderItem;
