import Book from "@/components/home/Book";
import Header from "@/components/home/Header";

export default function Books() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 pt-14 pb-24 mx-auto">
        <Header />

        <div className="flex flex-wrap -m-12">
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </section>
  );
}
