"use server"
import Image from "next/image";
import Link from "next/link";

export const getPosts = async () => {
    try {
      const data = await prisma.post.findMany();
      return data;
    } catch (err) {
      console.error('Failed to fetch data:', err);
      return null;
    }
  };


export default async function FilteredCategoryPage({ params }) {
    const { slug } = params;
    const encodedSlug = decodeURIComponent(slug)
    console.log('slug params object:', encodedSlug)
    const posts = await getPosts();

    //    checking if there is posts
    if (!posts) return console.log('couldnt fetch posts')
    // filtering only matching category posts
    const filteredPosts = posts?.filter(post => post.catSlug === encodedSlug);
    // console.log('filtered posts:', filteredPosts)
    return(
        <div className="font-sans">
            <div className="flex flex-col items-center py-10">
                <p>מציג נתונים עבור: {encodedSlug}</p>
            </div>
            <div className="mx-3">
                {filteredPosts.map(post => (
                    <div key={post.id} className='flex my-5' dir='rtl'>
                        <div className='max-w-[300px] max-h-[300px] flex gap-5'>
                            <Image src={post.img} alt='post-image.png' width={1000} height={1000} />
                        </div>
                    <div className='flex flex-col justify-center py-3 pr-3 pl-16 gap-6'>
                        <div className="flex gap-5 text-sm items-center">
                            <span>{post.createdAt.toISOString().substring(0, 10)}</span>
                            <span className="bg-red-300 p-2 rounded-full">#{post.catSlug}</span>
                        </div>
                        <div>
                            <h2>{post.title}</h2>
                        </div>
                        <div>
                            <p>{post.desc}</p>
                        </div>
                        <div className="w-full text-end px-16">
                            <Link href={`/Blog/post/${post.id}`}>קרא עוד...</Link>
                        </div>
                    </div>
                    </div>
                        ))}
            
            </div>
        </div>
    )
}