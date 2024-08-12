import React from 'react';
import BlogHeroVideo from './components/Hero/BlogHeroVideo.jsx';
import FeaturedPosts from './components/featuredPosts/FeaturedPosts.jsx';
import PopularCategories from './components/PopularCategories/PopularCategories.jsx';




const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1
  return (
    <>
    <div className='w-full flex justify-center overflow-hidden'>
        <div className='max-w-[1536px] justify-center flex flex-col items-center'>
          <div className='w-full text-right'>
            <h1 className='text-3xl w-full justify-center font-sans mt-10' dir='rtl'>
            <span className='font-serif text-5xl px-2'>SC-Medium</span><br />
            <span className='p-1 text-2xl lg:text-3xl 2xl:text-4xl'>
            הבלוג שיעזור לכם לישון בשקט 😴: טיפים חמים מעולם הסייבר 🛡️
            </span>
            </h1>
          </div>
          <div className="">
            <BlogHeroVideo className='' />
            <PopularCategories />
            <FeaturedPosts page={page} className=''/>
          </div>
        </div>
    </div>
    </>
  );
};

export default Blog;
