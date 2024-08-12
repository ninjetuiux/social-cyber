'use server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories')

  if(!res.ok){
    throw new Error('failed')
  }
  return res.json()
}

const PopularCategories = async () => {
  const data = await getData();
  return (
    <div>
      <div className='w-full text-center flex justify-center'>
        <h1 className='text-3xl font-sans'>קטגוריות פופולריות</h1> {/* Fixed typo in className */}
      </div>
      <div className='flex w-full m-3 gap-5 justify-center'>
        {/* Map over data and render categories */}
        {data.map((category) => (
          <div key={category?.id} className='flex overflow-x-scroll items-center bg-yellow-400 rounded-lg p-3 min-w-[180px]'>
            <Link  
              href={`/Blog/category/${category?.slug}`}  // Assuming you have a category page with dynamic routing
              className='rounded-full flex flex-row-reverse justify-center w-full gap-2'
            >
                <Image 
                  src={category?.img || '/Blog/CategoryImages/PhishingScams.png'} // Use category image or fallback
                  alt={category?.title} 
                  width={30} // Set width and height for better performance
                  height={30}
                  className='rounded-full w-[30px] h-[30px]' 
                />  
              <h2 dir='rtl' className='text-sm font-sans whitespace-nowrap overflow-hidden w-full flex items-center justify-start'>{category?.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories
