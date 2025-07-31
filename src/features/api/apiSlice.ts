import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type IBook } from './../../interfaces/book.interface';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://l2a3-sepia.vercel.app/api',
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: ({
                genre,
                sortby = 'updatedAt',
                sort = 'desc',
                page = 1,
            }) => {
                const params: {
                    filter?: string;
                    sortby?: string;
                    sort?: string;
                    page?: number;
                } = { filter: genre, sortby, sort, page };
                const searchParams = new URLSearchParams();

                for (const key in params) {
                    const val = params[key as keyof typeof params];

                    if (val !== undefined && val !== null) {
                        searchParams.set(key, String(val));
                    }
                }

                return {
                    url: `/books?${searchParams.toString()}`,
                };
            },
        }),
        getBook: builder.query({
            query: (id) => ({
                url: `/books/${id}`,
            }),
        }),
        postBook: builder.mutation({
            query: (data) => ({
                url: '/books',
                method: 'POST',
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const cacheKey = { page: 1 };

                const patchResult = dispatch(
                    apiSlice.util.updateQueryData(
                        'getBooks',
                        cacheKey,
                        (draft) => {
                            console.log(JSON.parse(JSON.stringify(draft)));
                            draft.meta.total++;
                            draft.data.pop();
                            draft.data.unshift({
                                ...arg,
                                _id: "it's-101-101",
                            });
                        }
                    )
                );

                try {
                    const data = await queryFulfilled;

                    dispatch(
                        apiSlice.util.updateQueryData(
                            'getBooks',
                            cacheKey,
                            (draft) => {
                                const index = draft.data.findIndex(
                                    (book: IBook) => book._id === "it's-101-101"
                                );

                                draft.data.splice(
                                    index,
                                    1,
                                    {
                                        ...arg,
                                        _id: data.data.data._id,
                                    },
                                    ...draft.data.slice(index + 1)
                                );
                            }
                        )
                    );
                } catch (error) {
                    console.log('🚀 ~ onQueryStarted ~ error:', error);
                    patchResult.undo();
                }
            },
        }),
        updateBook: builder.mutation({
            query: (data) => ({
                url: `/books/${data._id}`,
                method: 'PUT',
                body: data,
            }),

            async onQueryStarted(arg: IBook, { queryFulfilled, dispatch }) {
                const cacheKey = { page: 1 };

                const patchResult = dispatch(
                    apiSlice.util.updateQueryData(
                        'getBooks',
                        cacheKey,
                        (draft) => {
                            const index = draft.data.findIndex(
                                (book: IBook) => book._id === arg._id
                            );

                            draft.data.splice(
                                index,
                                1,
                                {
                                    ...arg,
                                },
                                ...draft.data.slice(index + 1)
                            );
                        }
                    )
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log('🚀 ~ onQueryStarted ~ error:', error);
                    patchResult.undo();
                }
            },
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const cacheKey = { page: 1 };

                // Optimistic - Update books cache
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData(
                        'getBooks',
                        cacheKey,
                        (draft) => {
                            const index = draft.data.findIndex(
                                (book: IBook) => book._id === arg
                            );
                            draft.data.splice(index, 1);
                        }
                    )
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    console.log('🚀 ~ onQueryStarted ~ error:', error);
                    patchResult.undo();
                }
            },
        }),
        borrowBook: builder.mutation({
            query: ({ data }) => ({
                url: '/borrow',
                method: 'POST',
                body: data,
            }),

            async onQueryStarted(
                { params, data },
                { queryFulfilled, dispatch }
            ) {
                try {
                    await queryFulfilled;

                    // Pessimistic - Update books summary cache
                    dispatch(
                        apiSlice.util.updateQueryData(
                            'getBooks',
                            params,
                            (draft) => {
                                const index = draft.data.findIndex(
                                    (book: IBook) => book._id === data.book
                                );

                                draft.data[index].copies -= data.quantity;

                                // Mark book as not available if all copies are borrowed
                                if (draft.data[index].copies === 0) {
                                    draft.data[index].available = false;
                                }
                            }
                        )
                    );
                } catch (error) {
                    console.log('🚀 ~ onQueryStarted ~ error:', error);
                }
            },
        }),
        getBorrowedBooksSummary: builder.query({
            query: (props) => {
                const { page } = props;
                return {
                    url: `/borrow?page=${page}&limit=9`,
                };
            },
        }),
    }),
});

export default apiSlice;
export const {
    useGetBooksQuery,
    useGetBookQuery,
    usePostBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
    useBorrowBookMutation,
    useGetBorrowedBooksSummaryQuery,
} = apiSlice;
