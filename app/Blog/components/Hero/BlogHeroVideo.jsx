import React from 'react';

const BlogHeroVideo = () => {
  return (
    <div className='flex justify-center w-full'>
      <div className='hero-video-container flex justify-center max-h-[900px]'> {/* Adjust container width */}
        <div className='relative rounded-2xl w-full justify-center flex my-10 overflow-hidden'> {/* Add overflow-hidden */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className='w-full h-auto flex justify-center rounded-2xl m-0 p-0' // Make video responsive
          >
            <source src="./Blog/blog-hero-video.mp4" type="video/mp4" />
            {/* Add more <source> elements for different video formats if needed */}
            Your browser does not support the video tag.
          </video>

          <div className='absolute top-0 z-10 text-white w-full h-full bg-black/30 rounded-2xl flex flex-col justify-center items-center'> {/* Make overlay responsive */}
            <h1 className='text-4xl font-sans'>SC-בלוג</h1> {/* Adjust heading size */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroVideo;
