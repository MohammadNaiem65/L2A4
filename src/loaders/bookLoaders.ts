import store from '@/app/store';
import apiSlice from '@/features/api/apiSlice';
import type { LoaderFunctionArgs } from 'react-router';

export async function loadBook({ params }: LoaderFunctionArgs) {
    const res = await store.dispatch(
        apiSlice.endpoints.getBook.initiate(params.bookId, {
            forceRefetch: true,
        })
    );

    return res;
}
