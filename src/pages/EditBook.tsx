import BookForm, { type FormValues } from '@/components/shared/BookForm';
import type { IBook } from '@/interfaces/book.interface';
import { useLoaderData, useSubmit } from 'react-router';

export default function EditBook() {
    const response = useLoaderData();

    // Handle any state but fulfilled
    if (response.status !== 'fulfilled') {
        <div className='h-[calc(100vh-13rem)] grid place-items-center'>
            <h2 className='text-2xl text-red-500'>
                {response.error?.data?.message}
            </h2>
        </div>;
    }

    const bookData = response.data.data as IBook;

    const submit = useSubmit();

    const handleSubmit = (data: FormValues) => {
        const nextState = {
            ...data,
            _id: bookData._id,
        };

        submit(nextState, { encType: 'application/json', method: 'PUT' });
    };

    return <BookForm handleSubmitForm={handleSubmit} initialData={bookData} />;
}
