import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAddress } from '@/interfaces';

export const apIAddress = createApi({
  reducerPath: 'apIAddress',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: builder => ({
    getAllAddress: builder.query<IAddress[], void>({
      query: () => ({
        url: '/address',
        method: 'GET'
      })
    }),

    getAddressByUserId: builder.query<IAddress[], string>({
      query: userId => ({
        url: `/address/user/${userId}`,
        method: 'GET'
      })
    }),

    getAddressById: builder.query<void, string>({
      query: id => ({
        url: `/address/${id}`,
        method: 'GET'
      })
    }),

    createAddress: builder.mutation<IAddress, string>({
      query: userId => ({
        url: `/address`,
        method: 'POST',
        body: { userId }
      })
    }),

    updateAddress: builder.mutation<
      IAddress,
      { id: string; update: Partial<IAddress> }
    >({
      query: data => ({
        url: `/address/${data.id}`,
        method: 'PATCH',
        body: data.update
      })
    }),

    deleteAddress: builder.mutation<void, string>({
      query: id => ({
        url: `/address/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllAddressQuery,
  useGetAddressByUserIdQuery,
  useGetAddressByIdQuery,
  useCreateAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation
} = apIAddress;
