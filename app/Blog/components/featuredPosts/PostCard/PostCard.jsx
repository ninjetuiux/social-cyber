'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';


const PostCard = ({post}) => {
    const [smallScreen, setSmallScreen] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
          setSmallScreen(window.innerWidth < 1024);
        };
    
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    
        return () => {
          window.removeEventListener('resize', checkScreenSize);  
     
    
        };
      }, []);

    
  return (
      <div className='flex flex-col overflow-hidden'>
      {!smallScreen ? 
      <div className='flex flex-1 max-h-[350px] mx-3'>
            <div className=' flex-1 flex w-full gap-3'>
                {/* Post Image */}
                <div className='flex flex-[0.4] w-full max-w-[350px] max-h-[350px]'>
                    <Image src={post.img} alt='Post-Image' width={1000} height={1000} />
                </div>
                {/* Post Text */}
                <div className='flex flex-col flex-[0.6]  gap-6 w-full justify-center'>
                    <div className='flex gap-3 text-sm items-center'>
                    {post.createdAt &&
                        <span>{post.createdAt.toISOString().substring(0, 10)}</span>
                    }
                        <span className='rounded-full bg-red-100 p-2'>
                            #{post.catSlug}
                        </span>     
                    </div>
                    <div className='text-3xl'>
                        <h1>
                            {post.title}
                        </h1>
                    </div>
                    <div className='text-md'>
                    <p>
                        {post.desc.substring(0, 120)}...
                    </p>
                        
                    </div>
                    <div className='flex justify-end text-sm'>
                        <Link href={`/Blog/post/${post.id}`}>קרא עוד...</Link>
                    </div>
                </div>
            </div>
      </div>
            :
        <div className='flex flex-col my-3 w-full rounded-xl'>
            <div className='flex flex-col relative gap-5 rounded-xl overflow-y-auto'>
                <div className='w-full max-w-[500px] min-w-[400px] rounded-xl overflow-y-auto'>
                    <Image src={post.img} alt='Post-Image' width={1000} height={1000} style={{ objectFit: 'cover' }} />
                <div className='
                flex
                flex-col
                absolute
                top-0  
                flex-shrink-0
                text-white
                z-10
                bg-black/60
                p-3
                w-full
                h-full
                max-w-[500px]
                min-w-[400px]
                gap-6
                justify-center
                items-center
                rounded-xl
                '>
                    <div className='flex gap-3 text-sm items-center text-right w-full overflow-y-auto'>
                        {post.createdAt &&
                            <span>{post.createdAt.toISOString().substring(0, 10)}</span>
                        }
                        <span className='rounded-full bg-red-400 p-2'>#{post.catSlug}</span>     
                    </div>
                    <div className='text-3xl'>
                        <h1>{post.title}</h1>
                    </div>
                    <div className='text-md'>
                    <p>
                    {post.desc}
                    </p>
                        
                    </div>
                    <div className='flex justify-end text-sm w-full'>
                        <Link href='#'>קרא עוד...</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    }
    </div>
  )
}

export default PostCard
