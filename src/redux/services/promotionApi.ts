import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPromotion } from '@/interfaces';

export const apiPromotion = createApi({
  reducerPath: 'apiPromotion',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllPromotion: builder.query<IPromotion[], void>({
      query: () => ({
        url: '/promotion',
        method: 'GET'
      })
    }),

    getPromotionById: builder.query<IPromotion[], string>({
      query: id => ({
        url: `/promotion/${id}`,
        method: 'GET'
      })
    }),

    createPromotion: builder.mutation<IPromotion[], Partial<IPromotion>>({
      query: data => ({
        url: `/promotion`,
        method: 'POST',
        body: data
      })
    }),

    updatePromotion: builder.mutation<IPromotion[], Partial<IPromotion>>({
      query: update => ({
        url: `/promotion`,
        method: 'PATCH',
        body: update
      })
    }),

    deletePromotion: builder.mutation<IPromotion[], string>({
      query: id => ({
        url: `/promotion/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllPromotionQuery,
  useGetPromotionByIdQuery,
  useCreatePromotionMutation,
  useUpdatePromotionMutation,
  useDeletePromotionMutation
} = apiPromotion;
