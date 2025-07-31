import BookForm from '@/components/shared/BookForm';
import type { IBook } from '@/interfaces/book.interface';
import { useSubmit } from 'react-router';

type FormValues = Omit<IBook, '_id' | 'available'>;

export default function AddBook() {
    const submit = useSubmit();

    const handleSubmit = (data: FormValues) => {
        submit(data, { encType: 'application/json', method: 'POST' });
    };
    return <BookForm handleSubmitForm={handleSubmit} />;
}
