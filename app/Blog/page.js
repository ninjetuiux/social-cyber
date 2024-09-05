'use server'
import BlogHeroVideo from './components/Hero/BlogHeroVideo.jsx';
import PopularCategories from './PopularCategories/PopularCategories.jsx';
import PostsPage from './posts/page.js';


const Blog = async (props) => {

  return (
    <>
    <div className='w-full flex justify-center overflow-hidden'>
        <div className='max-w-[1536px] justify-center flex flex-col items-center'>
          <div className='text-right p-4'>
            <h1 className='text-3xl w-full justify-center font-sans mt-10' dir='rtl'>
            <span className='font-serif text-5xl px-2'>SC-Medium</span><br />
            <span className='p-1 text-2xl lg:text-3xl 2xl:text-4xl'>
            הבלוג שיעזור לכם לישון בשקט 😴: טיפים חמים מעולם הסייבר 🛡️
            </span>
            </h1>
          </div>
          <div className="">
            <BlogHeroVideo  />
            <PopularCategories />
            <PostsPage {...props} />
          </div>
        </div>
    </div>
    </>
  );
};

export default Blog;
