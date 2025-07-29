export interface BorrowedBook {
  _id: string;
  book: { title: string; isbn: string };
  totalQuantity: number;
}
