export interface IBorrowedBook {
    book: string;
    quantity: number;
    dueDate: Date;
}

export interface IBorrowedBookResponse {
    book: {
        title: string;
        isbn: string;
    };
    totalQuantity: number;
}
