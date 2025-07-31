import Books from '@/components/home/books/Books';
import Header from '@/components/home/header/Header';
import BookLoader from '@/components/loaders/BookLoader';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { useGetBooksQuery } from '@/features/api/apiSlice';
import { useSearchParams } from 'react-router';

export default function Home() {
    const [searchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1');
    const genre = searchParams.get('genre') || undefined;
    const sortby = searchParams.get('sortby') || undefined;
    const sort = searchParams.get('sort') || undefined;

    const params = {
        genre,
        sortby,
        sort,
        page: currentPage,
    };

    const { data, isLoading, isSuccess, isError } = useGetBooksQuery(params);

    const { data: books, meta } = data || {};

    // Calculate total pages
    const totalPages = meta ? Math.ceil(meta.total / meta.limit) : 0;

    // Create URL with query params
    const createPageUrl = (pageNumber: number) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('page', pageNumber.toString());
        return `?${newSearchParams.toString()}`;
    };

    // Create array of page numbers to render
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    // Decide what to render
    let content;
    if (isLoading) {
        content = (
            <>
                <BookLoader />
                <BookLoader />
                <BookLoader />
                <BookLoader />
            </>
        );
    } else if (isError) {
        content = (
            <p className='text-red-500 text-center mt-5'>An Error Occurred.</p>
        );
    } else if (isSuccess && books?.length === 0) {
        content = <p className='text-center mt-5 w-full'>No content found.</p>;
    } else if (isSuccess && books?.length > 0) {
        content = (
            <>
                <Books books={books} searchParams={params} />

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                to={createPageUrl(currentPage - 1)}
                                className={
                                    currentPage <= 1
                                        ? 'pointer-events-none opacity-50'
                                        : 'cursor-pointer'
                                }
                            />
                        </PaginationItem>

                        {getPageNumbers().map((pageNum) => (
                            <PaginationItem key={pageNum}>
                                <PaginationLink
                                    to={createPageUrl(pageNum)}
                                    className={
                                        pageNum === currentPage
                                            ? 'bg-blue-700 text-primary-foreground hover:bg-blue-700/90 hover:text-primary-foreground'
                                            : 'cursor-pointer'
                                    }
                                >
                                    {pageNum}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        <PaginationItem>
                            <PaginationNext
                                to={createPageUrl(currentPage + 1)}
                                className={
                                    currentPage >= totalPages
                                        ? 'pointer-events-none opacity-50'
                                        : 'cursor-pointer'
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </>
        );
    }

    return (
        <>
            <Header />

            <div className='flex flex-wrap -m-12'>{content}</div>
        </>
    );
}
