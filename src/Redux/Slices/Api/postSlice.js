import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),

  endpoints: (builder) => ({
    getpost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    addpost: builder.mutation({
      query: (data) => ({
        url: "posts",
        method: "POST",
        body: data
      }),
    }),
  }),
});



export const { useGetpostQuery, useAddpostMutation, useGetUserQuery } = postApi