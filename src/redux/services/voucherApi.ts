import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVoucher } from '@/interfaces';

export const apiVoucher = createApi({
  reducerPath: 'apiVoucher',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllVoucher: builder.query<IVoucher[], void>({
      query: () => ({
        url: '/voucher',
        method: 'GET'
      })
    }),

    getVoucherById: builder.query<IVoucher[], string>({
      query: id => ({
        url: `/voucher/${id}`,
        method: 'GET'
      })
    }),

    createVoucher: builder.mutation<IVoucher[], Partial<IVoucher>>({
      query: data => ({
        url: `/voucher`,
        method: 'POST',
        body: data
      })
    }),

    updateVoucher: builder.mutation<IVoucher[], Partial<IVoucher>>({
      query: update => ({
        url: `/voucher`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteVoucher: builder.mutation<IVoucher[], string>({
      query: id => ({
        url: `/voucher/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllVoucherQuery,
  useGetVoucherByIdQuery,
  useCreateVoucherMutation,
  useUpdateVoucherMutation,
  useDeleteVoucherMutation
} = apiVoucher;
