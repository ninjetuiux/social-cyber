'use server'
// import Image from 'next/image';
import PopularPosts from '../PopularPosts/PopularPosts';
import PostCard from './PostCard/PostCard';


export const getData = async (page) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`);
  
    if (!res.ok) {
      throw new Error('failed');
    }
  
    // Extract the JSON data from the response
    const data = await res.json(); 
    return data;
  }

const FeaturedPosts = async ({page}) => {
    const data = await getData(page);
    console.log(data)
  return (
    <div className='max-w-max flex-col flex justify-center items-center mx-3 my-5 overflow-hidden' dir='rtl'>
        <div className='flex flex-col max-w-[1536px] justify-center items-center flex-1'>
            <div className='flex'>
                <h1 className='text-3xl font-sans mb-5'>פוסטים מומלצים</h1>
            </div>
            <div className='flex-col md:flex-row flex w-full flex-[0.7] mx-auto justify-center'>
                <div className='flex flex-col gap-5 w-full'>
                {data.map((post) => ( 
                    <PostCard key={post.id}
                    id={post?.id}
                    createdAt={post?.createdAt}
                    slug={post?.slug}
                    title={post?.title}
                    desc={post?.desc}
                    img={post?.img}
                    views={post?.views}
                    catSlug={post?.catSlug}
                    userEmail={post?.userEmail}
                     />
                ))}
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

export default FeaturedPosts
