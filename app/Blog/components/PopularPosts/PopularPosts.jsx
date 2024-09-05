import React from 'react'
import prisma from "@/app/utils/connect";
import Link from 'next/link';

export async function getPopularPosts() {
  try {
    const popularPosts = await prisma.post.findMany({
      take: 10,
      orderBy: {
        views: 'desc'
      },
      select: {
        id: true,
        title: true,
        catSlug: true,
        authorName: true,
        views: true
      }
    });

    return popularPosts;
  } catch (error) {
    console.error('Error fetching popular posts:', error);
    return [];
  }
}
const PopularPosts = async () => {
  const popularPosts = await getPopularPosts();
  console.log('popularPosts:', popularPosts)
  return (
    <div className='w-full flex flex-col min-w-[300px] mb-5 mt-3'>
      <h2 className="text-xl font-bold mb-4">פוסטים פופולריים</h2>
      <div className="space-y-4">
        {popularPosts.map((post) => (
          <Link href={`/Blog/post/${post.id}`} key={post.id}>
            <div className="flex flex-col gap-2 hover:bg-gray-100 p-2 rounded">
              <div>
                <span className="bg-red-100 rounded-full px-2 py-1 text-sm">{post.catSlug}</span>
              </div>
              <div>
                <p className='p-0 m-0 text-sm font-semibold'>{post.title}</p>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{post.authorName}</span>
                <span>צפיות: {post.views}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PopularPosts
