import type { IBorrowedBookResponse } from '@/interfaces/borrow.interface';

interface PropsType {
    data: IBorrowedBookResponse;
}

export default function BorrowCard({ data }: PropsType) {
    const {
        book: { title, isbn },
        totalQuantity,
    } = data || {};
    return (
        <div className='px-8 py-6 border-l-2 border-gray-200 border-opacity-60 flex flex-col justify-center'>
            <h2 className='text-lg sm:text-xl text-gray-900 font-medium title-font mb-2'>
                {title}
            </h2>

            <p>
                ISBN: <span className='text-indigo-500'>{isbn}</span>
            </p>
            <p>
                Total Borrowed:{' '}
                <span className='text-indigo-500'>{totalQuantity}</span>
            </p>
        </div>
    );
}
