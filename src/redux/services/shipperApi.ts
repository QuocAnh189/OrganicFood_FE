import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IShipper } from '@/interfaces';

export const apiShipper = createApi({
  reducerPath: 'apiShipper',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllShipper: builder.query<IShipper[], void>({
      query: () => ({
        url: '/shipper',
        method: 'GET'
      })
    }),

    getShipperById: builder.query<IShipper[], string>({
      query: id => ({
        url: `/shipper/${id}`,
        method: 'GET'
      })
    }),

    createShipper: builder.mutation<IShipper[], Partial<IShipper>>({
      query: data => ({
        url: `/shipper`,
        method: 'POST',
        body: data
      })
    }),

    updateShipper: builder.mutation<IShipper[], Partial<IShipper>>({
      query: update => ({
        url: `/shipper`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteShipper: builder.mutation<IShipper[], string>({
      query: id => ({
        url: `/shipper/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllShipperQuery,
  useGetShipperByIdQuery,
  useCreateShipperMutation,
  useUpdateShipperMutation,
  useDeleteShipperMutation
} = apiShipper;
