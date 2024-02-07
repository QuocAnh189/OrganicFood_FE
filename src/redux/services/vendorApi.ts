import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVendor } from '@/interfaces';

export const apiVendor = createApi({
  reducerPath: 'apiVendor',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllVendor: builder.query<IVendor[], void>({
      query: () => ({
        url: '/vendor',
        method: 'GET'
      })
    }),

    getVendorById: builder.query<IVendor[], string>({
      query: id => ({
        url: `/vendor/${id}`,
        method: 'GET'
      })
    }),

    createVendor: builder.mutation<IVendor[], Partial<IVendor>>({
      query: data => ({
        url: `/Vendor`,
        method: 'POST',
        body: data
      })
    }),

    updateVendor: builder.mutation<IVendor[], Partial<IVendor>>({
      query: update => ({
        url: `/vendor`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteVendor: builder.mutation<IVendor[], string>({
      query: id => ({
        url: `/vendor/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllVendorQuery,
  useGetVendorByIdQuery,
  useCreateVendorMutation,
  useUpdateVendorMutation,
  useDeleteVendorMutation
} = apiVendor;
