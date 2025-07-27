import BorrowCard from "@/components/book-summary/BorrowCard";

export default function BorrowSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
      <BorrowCard />
      <BorrowCard />
      <BorrowCard />
      <BorrowCard />
      <BorrowCard />
      <BorrowCard />
    </div>
  );
}
