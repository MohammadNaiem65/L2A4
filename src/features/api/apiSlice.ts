import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
    getBorrowedBooksSummary: builder.query({
      query: () => "/borrow",
    }),
  }),
});

export default apiSlice;
export const { useGetBooksQuery, useGetBorrowedBooksSummaryQuery } = apiSlice;
