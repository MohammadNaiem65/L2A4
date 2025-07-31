import BorrowCard from "@/components/book-summary/BorrowCard";
import BorrowedCardLoader from "@/components/loaders/BorrowedCardLoader";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetBorrowedBooksSummaryQuery } from "@/features/api/apiSlice";
import type { BorrowedBook } from "@/interfaces/borrow.interface";
import { useSearchParams } from "react-router";

export default function BorrowSummary() {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  const { data, isLoading, isSuccess, isError } =
    useGetBorrowedBooksSummaryQuery({
      page: currentPage,
    });

  const { data: books, meta } = data || {};

  // Calculate total pages
  const totalPages = meta ? Math.ceil(meta.total / meta.limit) : 0;

  // Create URL with query params
  const createPageUrl = (pageNumber: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", pageNumber.toString());
    return `?${newSearchParams.toString()}`;
  };

  // Create array of page numbers to render
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  // Decide what to render
  let content;
  if (isLoading) {
    content = (
      <>
        {Array.from({ length: 5 }, (_, index) => (
          <BorrowedCardLoader key={index} />
        ))}
      </>
    );
  } else if (isError) {
    content = <p className="text-red-500">An Error Occurred.</p>;
  } else if (isSuccess && books?.length === 0) {
    content = <p>No borrowed books found.</p>;
  } else if (isSuccess && books?.length > 0) {
    content = (
      <>
        {books?.map((book: BorrowedBook, index: number) => (
          <BorrowCard key={index} data={book} />
        ))}

        <div className="col-span-full">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  to={createPageUrl(currentPage - 1)}
                  className={
                    currentPage <= 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {getPageNumbers().map((pageNum) => (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    to={createPageUrl(pageNum)}
                    className={
                      pageNum === currentPage
                        ? "bg-blue-700 text-primary-foreground hover:bg-blue-700/90 hover:text-primary-foreground"
                        : "cursor-pointer"
                    }
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  to={createPageUrl(currentPage + 1)}
                  className={
                    currentPage >= totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {content}
    </div>
  );
}
