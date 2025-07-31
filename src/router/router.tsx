import { postBookAction } from '@/actions/bookActions';
import App from '@/App';
import BookForm from '@/components/shared/BookForm';
import AddBook from '@/pages/AddBook';
import BorrowSummary from '@/pages/BorrowSummary';
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
                Component: BookForm,
            },
            {
                path: '/borrow-summary',
                Component: BorrowSummary,
            },
        ],
    },
]);

export default router;
