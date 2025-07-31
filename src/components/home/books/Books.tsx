import { AlertDialog } from '@/components/ui/alert-dialog';
import type { IBook } from '@/interfaces/book.interface';
import { useState } from 'react';
import Book from './Book';
import BorrowBookModal from './BorrowBookModal';

type BooksProps = {
    books: IBook[];
    searchParams: { [key: string]: string | number | undefined };
};

export default function Books({ books, searchParams }: BooksProps) {
    const [selectedBook, setSelectedBook] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    const selectedBookData: IBook | undefined = selectedBook
        ? books.find((book) => book._id === selectedBook)
        : undefined;

    const handleSelectBook = (_id: string) => {
        setSelectedBook(_id);
    };

    const handleRemoveSelectBook = () => {
        setSelectedBook(null);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            {books?.map((book: IBook, index: number) => (
                <Book
                    key={index}
                    data={book}
                    handleSelectBook={handleSelectBook}
                />
            ))}

            {selectedBookData && (
                <BorrowBookModal
                    searchParams={searchParams}
                    bookData={selectedBookData}
                    closeModal={closeModal}
                    handleRemoveSelectBook={handleRemoveSelectBook}
                />
            )}
        </AlertDialog>
    );
}
