'use client'

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Pagination from '../pagination/Pagination';
import PopularPosts from '../PopularPosts/PopularPosts';
import PostCard from './PostCard/PostCard';

const FeaturedPosts = () => {
    const pathname = usePathname();
    const router = useRouter();

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);  

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);  


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        const newUrl = `${pathname}?page=${newPage}`;
        router.push(newUrl);
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`/api/posts?page=${currentPage}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setPosts(data.posts);
                setTotalPages(Math.ceil(data.count / 4));

            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
    <div className='max-w-max flex-col flex justify-center items-center mx-3 my-5 overflow-hidden' dir='rtl'>
        <div className='flex flex-col max-w-[1536px] justify-center items-center flex-1'>
            <div className='flex'>
                <h1 className='text-3xl font-sans mb-5'>פוסטים מומלצים</h1>
            </div>
            <div className='flex-col md:flex-row flex w-full flex-[0.7] mx-auto justify-center'>
                <div className='flex flex-col gap-5 w-full'>
                {posts?.map((post) => ( 
                    <PostCard key={post.id}
                    post={post}
                     />
                ))}
                <div className='flex w-full text-center justify-center'>
                    <span>דף {currentPage} מתוך {totalPages}</span>
                </div>
                <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
                </div>
                <div className='flex flex-[0.3] w-full'>
                    <div className='flex flex-col w-full'>

                        <PopularPosts />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedPosts
