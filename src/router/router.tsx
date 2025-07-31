import { postBookAction, updateBookAction } from '@/actions/bookActions';
import App from '@/App';
import { loadBook } from '@/loaders/bookLoaders';
import AddBook from '@/pages/AddBook';
import BorrowSummary from '@/pages/BorrowSummary';
import EditBook from '@/pages/EditBook';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router';

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
