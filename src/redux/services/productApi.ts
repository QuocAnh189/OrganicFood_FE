import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '@/interfaces';

export const apiProduct = createApi({
  reducerPath: 'apiProduct',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllProduct: builder.query<IProduct[], void>({
      query: () => ({
        url: '/product',
        method: 'GET'
      })
    }),

    getProductById: builder.query<IProduct[], string>({
      query: id => ({
        url: `/product/${id}`,
        method: 'GET'
      })
    }),

    createProduct: builder.mutation<IProduct[], Partial<IProduct>>({
      query: data => ({
        url: `/product`,
        method: 'POST',
        body: data
      })
    }),

    updateProduct: builder.mutation<IProduct[], Partial<IProduct>>({
      query: update => ({
        url: `/product`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteProduct: builder.mutation<IProduct[], string>({
      query: id => ({
        url: `/product/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = apiProduct;
