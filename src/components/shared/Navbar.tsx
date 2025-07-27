import { IoLibraryOutline } from "react-icons/io5";
import { Link } from "react-router";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="text-white bg-[#6366F1] body-font">
      <div className="container mx-auto flex p-5  items-center justify-between">
        <Link to="/" className="flex font-medium items-center text-white">
          <IoLibraryOutline className="text-3xl" />
          <span className="ml-3 text-xl">E Library</span>
        </Link>

        <div className="space-x-10">
          <Link to="/borrow-summary">Borrow Summary</Link>

          <Link to="/create-book">
            <Button
              variant="outline"
              className="inline-flex items-center rounded text-base bg-transparent cursor-pointer"
            >
              Add Book
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
