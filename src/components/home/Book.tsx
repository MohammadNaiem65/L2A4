import type { IBook } from "@/interfaces/book.interface";
import { cn } from "@/lib/utils";
import { FaBook } from "react-icons/fa";

export default function Book({ data }: { data: IBook }) {
  const { author, available, copies, genre, isbn, title, description } = data;

  console.log("🚀 ~ Book ~ data:", data);
  return (
    <div className="p-12 md:w-1/2 flex flex-col items-start">
      {/* Availability status */}
      <span
        className={cn(
          "inline-block py-1 px-2 rounded text-xs font-medium tracking-widest",
          available ? "bg-indigo-50 text-indigo-500" : "bg-red-50 text-red-500"
        )}
      >
        {available ? "Available" : "Stock Out"}
      </span>

      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4">
        {title}
      </h2>

      <p className="inline-flex items-center mt-1">
        <span className="flex-grow flex flex-col">
          <span className="title-font font-medium text-gray-900">{author}</span>
          <span className="text-gray-400 text-xs tracking-widest mt-0.5">
            ISBN: {isbn}
          </span>
        </span>
      </p>

      <p className="leading-relaxed mt-4 mb-8">{description}</p>

      <div className="w-full flex items-center justify-between border-t-2 border-gray-100 pt-5">
        <div className="flex items-center flex-wrap ">
          <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            {genre.replace("_", " ")}
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm gap-x-1">
            <FaBook />
            {copies}
          </span>
        </div>

        <div className="space-x-3">
          <button
            type="button"
            disabled={!available}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer dark:bg-blue-600 disabled:bg-blue-800 focus:outline-none"
          >
            Borrow
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Edit
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  disabled:bg-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
