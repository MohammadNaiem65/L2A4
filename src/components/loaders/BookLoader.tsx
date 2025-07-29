export default function BookLoader() {
  return (
    <div
      role="status"
      className="p-12 md:w-1/2 flex flex-col items-start animate-pulse"
    >
      <div className="h-5 w-20 bg-gray-200 rounded-full dark:bg-gray-700" />

      <div className="h-9 w-4/5 mt-4 bg-gray-200 rounded-full dark:bg-gray-700" />
      <div className="h-3.5 w-[25%] mt-4 bg-gray-200 rounded-full dark:bg-gray-700" />
      <div className="h-3.5 w-[30%] mt-2 mb-4 bg-gray-200 rounded-full dark:bg-gray-700" />

      <div className="h-4 w-full mt-6 bg-gray-200 rounded-full dark:bg-gray-700" />
      <div className="h-4 w-full mt-2 bg-gray-200 rounded-full dark:bg-gray-700" />
      <div className="h-4 w-3/5 mt-2 mb-8 bg-gray-200 rounded-full dark:bg-gray-700" />

      <div className="w-full flex items-center justify-between border-t-2 border-gray-100 pt-5">
        <div className="flex items-center flex-wrap divide-x-2 gap-x-3">
          <div className="h-3.5 w-20 bg-gray-200 rounded-full dark:bg-gray-700" />
          <span className="inline-block w-[2px] h-[25px] bg-gray-200" />
          <div className="h-3.5 w-16 bg-gray-200 rounded-full dark:bg-gray-700" />
        </div>

        <div className="flex items-center flex-wrap gap-x-3">
          <div className="h-9 w-20 bg-gray-200 rounded-sm dark:bg-gray-700" />
          <div className="h-9 w-20 bg-gray-200 rounded-sm dark:bg-gray-700" />
          <div className="h-9 w-20 bg-gray-200 rounded-sm dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}
