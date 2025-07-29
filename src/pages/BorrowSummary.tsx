import BorrowCard from "@/components/book-summary/BorrowCard";
import BorrowedCardLoader from "@/components/loaders/BorrowedCardLoader";
import { useGetBorrowedBooksSummaryQuery } from "@/features/api/apiSlice";
import type { BorrowedBook } from "@/interfaces/borrow.interface";

export default function BorrowSummary() {
  const { data, isLoading, isSuccess, isError } =
    useGetBorrowedBooksSummaryQuery(undefined);

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
  } else if (isSuccess && data?.data?.length === 0) {
    content = <p>An Error Occurred.</p>;
  } else if (isSuccess && data?.data?.length > 0) {
    content = (
      <>
        {data?.data?.map((book: BorrowedBook, index: number) => (
          <BorrowCard key={index} data={book} />
        ))}
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {content}
    </div>
  );
}
