'use server'
import { headers } from "next/headers";
import PostCard from "../components/featuredPosts/PostCard/PostCard";
import Pagination from "../components/pagination/Pagination";
import PopularPosts from "../components/PopularPosts/PopularPosts";
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';



// Define the number of posts per page
const POSTS_PER_PAGE = 4;

// Function to get posts with pagination
export const getPosts = async (page = 1, limit = POSTS_PER_PAGE) => {

  const offset = (page - 1) * parseInt(limit);
  try {
    const data = await prisma.post.findMany({
      skip: offset,
      take: limit,
    });
    console.log('data: ', data)
    const totalPosts = await prisma.post.count();
    const totalPages = Math.ceil(totalPosts / limit);
    const hasNextPage = page < totalPages;
    revalidatePath('/Blog')
    return { data, totalPosts, totalPages, hasNextPage };
  } catch (err) {
    console.error('Failed to fetch data:', err);
    return { data: [], totalPosts: 0, totalPages: 0, hasNextPage: false };
  }
};


export default async function PostsPage(props) {
    // Use parseInt and provide a default value of 1 as a number, not a string
    const page = parseInt(props?.searchParams?.page || '1', 10) || 1;

    const { data, totalPosts, totalPages, hasNextPage } = await getPosts(page);
    const posts = data
    console.log('posts: ', posts)
    return (
        <div className='w-[100dvw] flex-col flex px-8 my-5 overflow-hidden' dir='rtl'>
        <div className='flex flex-col flex-1 max-w[1536px]'>
            <div className='flex justify-center w-full items-center'>
                <h1 className='text-3xl font-sans mb-5'>פוסטים מומלצים</h1>
                {/* <h2>{page}</h2> */}
            </div>
            <div className='flex-col md:flex-row flex w-full flex-grow justify-between flex-[0.7]'>
                <div dir='rtl' className='flex flex-col gap-5 w-full bg-gray-50 p-2 mx-2'>
                {posts?.map((post) => ( 
                    <PostCard
                    key={post.id}
                    post={post}
                    />
                ))}
                <Pagination 
                    page={page} 
                    totalPages={totalPages} 
                    hasNextPage={hasNextPage} 
                    totalPosts={totalPosts}
                />
                </div>
                <div className='flex flex-[0.3] w-full'>
                    <div className='flex flex-col w-full'>
                        <div>
                            <span className='text-gray-400 text-sm'>מה חדש?</span>
                            <h2 className='text-xl font-sans'>פוסטים טרנדיים</h2>
                        </div>
                        <PopularPosts />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}