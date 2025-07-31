import { postBookAction, updateBookAction } from '@/actions/bookActions';
import App from '@/App';
import { loadBook } from '@/loaders/bookLoaders';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

const Home = lazy(() => import('@/pages/Home'));
const AddBook = lazy(() => import('@/pages/AddBook'));
const EditBook = lazy(() => import('@/pages/EditBook'));
const BorrowSummary = lazy(() => import('@/pages/BorrowSummary'));

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/create-book',
                Component: AddBook,
                action: postBookAction,
            },
            {
                path: '/edit-book/:bookId',
                Component: EditBook,
                loader: loadBook,
                action: updateBookAction,
            },
            {
                path: '/borrow-summary',
                Component: BorrowSummary,
            },
        ],
    },
]);

export default router;
