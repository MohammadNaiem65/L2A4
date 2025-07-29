import Book from "@/components/home/Book";
import Header from "@/components/home/header/Header";
import BookLoader from "@/components/loaders/BookLoader";
import { useGetBooksQuery } from "@/features/api/apiSlice";
import type { IBook } from "@/interfaces/book.interface";

export default function Home() {
  const { data, isLoading, isSuccess, isError } = useGetBooksQuery({});

  // Decide what to render
  let content;
  if (isLoading) {
    content = (
      <>
        <BookLoader />
        <BookLoader />
        <BookLoader />
        <BookLoader />
      </>
    );
  } else if (isError) {
    content = <p className="text-red-500">An Error Occurred.</p>;
  } else if (isSuccess && data?.data?.length === 0) {
    content = <p>No content found.</p>;
  } else if (isSuccess && data?.data?.length > 0) {
    content = data?.data?.map((book: IBook, index: number) => (
      <Book key={index} data={book} />
    ));
  }

  return (
    <>
      <Header />

      <div className="flex flex-wrap -m-12">{content}</div>
    </>
  );
}
