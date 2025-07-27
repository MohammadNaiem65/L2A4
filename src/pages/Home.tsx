import Book from "@/components/home/Book";
import Header from "@/components/home/Header";

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex flex-wrap -m-12">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
}
