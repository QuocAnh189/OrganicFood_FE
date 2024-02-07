import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/interfaces';

export const apiUser = createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  endpoints: builder => ({
    getAllUser: builder.query<IUser[], void>({
      query: () => ({
        url: '/user',
        method: 'GET'
      })
    }),

    getUserById: builder.query<IUser[], string>({
      query: id => ({
        url: `/user/${id}`,
        method: 'GET'
      })
    }),

    createUser: builder.mutation<IUser[], Partial<IUser>>({
      query: data => ({
        url: `/user`,
        method: 'POST',
        body: data
      })
    }),

    updateUser: builder.mutation<IUser[], Partial<IUser>>({
      query: update => ({
        url: `/user`,
        method: 'PATCH',
        body: update
      })
    }),

    deleteUser: builder.mutation<IUser[], string>({
      query: id => ({
        url: `/user/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllUserQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} = apiUser;
