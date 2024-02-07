import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory } from '@/interfaces';

export const apiCategory = createApi({
  reducerPath: 'apiCategory',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllCategories: builder.query<ICategory[], void>({
      query: () => ({
        url: '/category',
        method: 'GET'
      })
    }),

    getCategoryById: builder.query<ICategory[], string>({
      query: id => ({
        url: `/category/${id}`,
        method: 'GET'
      })
    }),

    createCategory: builder.mutation<ICategory[], Partial<ICategory>>({
      query: data => ({
        url: `/category`,
        method: 'POST',
        body: data
      })
    }),

    updateCategory: builder.mutation<ICategory[], Partial<ICategory>>({
      query: update => ({
        url: `/category`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteCategory: builder.mutation<ICategory[], string>({
      query: id => ({
        url: `/category/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = apiCategory;
