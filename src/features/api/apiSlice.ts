import type { IBook } from "@/interfaces/book.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (params) => {
        const {
          genre = "NON_FICTION",
          sortby = "updatedAt",
          page = 1,
        } = params;
        return {
          url: `/books?filter=${genre}&sortby=${sortby}&page=${page}`,
        };
      },
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getBooks", {}, (draft) => {
            draft.data.pop();
            draft.data.unshift({
              ...arg,
              _id: "it's-101-101",
            });
          })
        );

        try {
          const data = await queryFulfilled;

          dispatch(
            apiSlice.util.updateQueryData(
              "getBooks",
              { genre: "NON_FICTION", sortby: "updatedAt", page: "1" },
              (draft) => {
                const index = draft.data.findIndex(
                  (book: IBook) => book._id === "it's-101-101"
                );
                draft.meta.total++;
                draft.data.splice(
                  index,
                  1,
                  {
                    ...arg,
                    _id: data.data._id,
                  },
                  ...draft.data.slice(index + 1)
                );
              }
            )
          );
          console.log("🚀 ~ onQueryStarted ~ data:", data);
        } catch (error) {
          console.log("🚀 ~ onQueryStarted ~ error:", error);
          patchResult.undo();
        }
      },
    }),
    getBorrowedBooksSummary: builder.query({
      query: () => "/borrow",
    }),
  }),
});

export default apiSlice;
export const {
  useGetBooksQuery,
  useGetBorrowedBooksSummaryQuery,
  usePostBookMutation,
} = apiSlice;
