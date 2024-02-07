import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICart } from '@/interfaces';

export const apiCart = createApi({
  reducerPath: 'apiCart',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllCart: builder.query<ICart[], void>({
      query: () => ({
        url: '/cart',
        method: 'GET'
      })
    }),

    getCartById: builder.query<ICart[], string>({
      query: id => ({
        url: `/cart/${id}`,
        method: 'GET'
      })
    }),

    createCart: builder.mutation<ICart[], Partial<ICart>>({
      query: data => ({
        url: `/cart`,
        method: 'POST',
        body: data
      })
    }),

    updateCart: builder.mutation<ICart[], Partial<ICart>>({
      query: update => ({
        url: `/cart`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteCart: builder.mutation<ICart[], string>({
      query: id => ({
        url: `/cart/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllCartQuery,
  useGetCartByIdQuery,
  useCreateCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation
} = apiCart;
