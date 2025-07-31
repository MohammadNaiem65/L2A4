import { IoLibraryOutline } from 'react-icons/io5';
import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer className='text-gray-600 body-font border-t-2'>
            <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
                <Link
                    to='/'
                    className='flex font-medium items-center text-[#6366F1]'
                >
                    <IoLibraryOutline className='text-3xl' />
                    <span className='ml-3 text-xl'>E Library</span>
                </Link>
                <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
                    © 2025 E Library —
                    <a
                        href='https://x.com/ahmedrtusar71'
                        className='text-gray-600 ml-1'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        @ahmedrtusar71
                    </a>
                </p>
                <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                    <a
                        href='https://www.facebook.com/share/178q5Y6UUv/'
                        className='text-gray-500'
                    >
                        <svg
                            fill='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                        >
                            <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                        </svg>
                    </a>
                    <a
                        href='https://x.com/ahmedrtusar71'
                        className='ml-3 text-gray-500'
                    >
                        <svg
                            fill='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                        >
                            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                        </svg>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/rifat-ahmed-tusar/'
                        className='ml-3 text-gray-500'
                    >
                        <svg
                            fill='currentColor'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='0'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                        >
                            <path
                                stroke='none'
                                d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                            ></path>
                            <circle cx='4' cy='4' r='2' stroke='none'></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    );
}
