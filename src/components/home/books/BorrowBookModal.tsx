import {
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useBorrowBookMutation } from '@/features/api/apiSlice';
import type { IBook } from '@/interfaces/book.interface';
import { useState } from 'react';
import toast from 'react-hot-toast';

type BorrowBookModalProps = {
    bookData: IBook;
    searchParams: { [key: string]: string | number | undefined };
    closeModal: () => void;
    handleRemoveSelectBook: () => void;
};

export default function BorrowBookModal({
    bookData,
    closeModal,
    searchParams,
    handleRemoveSelectBook,
}: BorrowBookModalProps) {
    const [date, setDate] = useState<Date>(new Date());
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState('');

    const [borrowBook] = useBorrowBookMutation();

    const onBorrowBook = async () => {
        if (quantity < 1 || quantity > bookData.copies) {
            setError(
                `Please enter a valid quantity between 1 and ${bookData.copies}.`
            );
            return;
        }

        const data = {
            book: bookData._id,
            quantity,
            dueDate: date.toISOString(),
        };

        try {
            await borrowBook({
                data,
                params: searchParams,
            }).unwrap();

            toast.success('Book borrowed successfully');
            closeModal();
            handleRemoveSelectBook();
        } catch (error) {
            console.error('Error borrowing book:', error);
            setError('Failed to borrow the book. Please try again.');
            return;
        }
    };

    return (
        <AlertDialogContent
            className='sm:max-w-sm'
            onCloseAutoFocus={(event) => event.preventDefault()}
        >
            <AlertDialogHeader>
                <AlertDialogTitle className='font-normal'>
                    Book:{' '}
                    <span className='font-semibold'>{bookData?.title}</span>
                </AlertDialogTitle>
                <section>
                    <div>
                        <Label htmlFor='quantity' className='mt-2'>
                            Enter the number of copies to borrow
                        </Label>
                        <Input
                            type='number'
                            id='quantity'
                            name='quantity'
                            placeholder='Enter quantity'
                            value={quantity}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                if (value < 0 || value > bookData.copies) {
                                    setError(
                                        `Please enter a valid quantity between 1 and ${bookData.copies}.`
                                    );
                                } else {
                                    setError('');
                                }
                                setQuantity(value);
                            }}
                            className='mt-2'
                        />
                    </div>

                    <div className='mt-4'>
                        <Label htmlFor='returnDate' className='mt-2'>
                            Enter the return date
                        </Label>
                        <Calendar
                            mode='single'
                            defaultMonth={date}
                            selected={date}
                            onSelect={setDate}
                            disabled={{
                                before: new Date(),
                            }}
                            required={true}
                            className='rounded-lg border shadow-sm mt-3 mx-auto'
                        />
                    </div>
                </section>
            </AlertDialogHeader>
            {error && <p className='text-red-500'>{error}</p>}
            <AlertDialogFooter>
                <AlertDialogCancel
                    onClick={handleRemoveSelectBook}
                    className='cursor-pointer'
                >
                    Cancel
                </AlertDialogCancel>
                <Button
                    className='bg-[#6366F1] hover:bg-[#6365f1ce] cursor-pointer'
                    onClick={onBorrowBook}
                >
                    Borrow
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
}
