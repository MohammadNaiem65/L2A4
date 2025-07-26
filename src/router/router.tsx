import App from "@/App";
import BookForm from "@/pages/BookForm";
import Books from "@/pages/Books";
import BorrowSummary from "@/pages/BorrowSummary";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Books,
      },
      {
        path: "/create-book",
        Component: BookForm,
      },
      {
        path: "/edit-book/:bookId",
        Component: BookForm,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);

export default router;
