export default function BorrowedCardLoader() {
  return (
    <div
      role="status"
      className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60 animate-pulse"
    >
      <div className="h-7 w-2/3 bg-gray-200 rounded-full dark:bg-gray-700 my-4" />

      <div className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5 mt-6" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px] mb-2.5" />
    </div>
  );
}
