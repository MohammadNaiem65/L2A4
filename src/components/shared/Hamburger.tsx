import { useState } from "react";
import { Link } from "react-router";

export default function Hamburger() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className="inline-flex lg:hidden items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-hamburger"
        aria-expanded={showNavbar}
        onClick={() => setShowNavbar(!showNavbar)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div
        className={`absolute left-0 right-0 top-16 w-full mt-2 bg-white shadow-lg lg:hidden z-10 ${
          showNavbar ? "block" : "hidden"
        }`}
        id="navbar-hamburger"
      >
        <ul
          className="flex flex-col font-medium p-4"
          onClick={() => setShowNavbar(false)}
        >
          <li className="mb-2">
            <Link
              to="/borrow-summary"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
            >
              Borrow Summary
            </Link>
          </li>
          <li>
            <Link
              to="/create-book"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
            >
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
