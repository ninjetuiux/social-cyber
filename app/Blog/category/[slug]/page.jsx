"use server"
import Image from "next/image";
import Link from "next/link";
import { JSDOM } from 'jsdom';
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
    // console.log('slug params object:', encodedSlug)
    const posts = await getPosts();

    //    checking if there is posts
    if (!posts) return console.log('couldnt fetch posts')
    // filtering only matching category posts
    const filteredPosts = posts?.filter(post => post.catSlug === encodedSlug);
    // console.log('filtered posts:', filteredPosts)
    const extractImage = posts?.reduce((firstImage, post) => {
        if (firstImage) return firstImage; // If we've already found an image, return it
        const match = post.desc.match(/<img[^>]+src="([^">]+)"/);
        return match ? match[1] : null;
    }, null);

    console.log('extract image:', extractImage)
    // Function to render HTML content safely
    const createMarkup = (htmlContent) => {
        // Extract the first title (h1-h6)
        const titleMatch = htmlContent.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/i);
        const title = titleMatch ? titleMatch[0] : '';

        // Extract up to 5 paragraphs
        const paragraphs = htmlContent.match(/<p[^>]*>.*?<\/p>/gi) || [];
        const limitedParagraphs = paragraphs.slice(0, 5).join('');

        const preview = title + limitedParagraphs;

        return { __html: preview };
    };
    return(
        <div className="font-sans">
            <div className="flex flex-col items-center py-10">
                <p>מציג נתונים עבור: {encodedSlug}</p>
            </div>
            <div className="mx-3">
                {filteredPosts.map(post => (
                    <div key={post.id} className='flex my-5' dir='rtl'>
                        {
                            extractImage &&
                            <div className='max-w-[300px] max-h-[300px] flex gap-5'>
                                <Image src={extractImage} alt='post-image.png' width={1000} height={1000} />
                            </div>
                        }
                    <div className='flex flex-col justify-center py-3 pr-3 pl-16 gap-6'>
                        <div className="flex gap-5 text-sm items-center">
                            <span>{post.createdAt.toISOString().substring(0, 10)}</span>
                            <span className="bg-red-300 p-2 rounded-full">#{post.catSlug}</span>
                        </div>
                        <div>
                            <h2>{post.title}</h2>
                        </div>
                        <div>
                        <div className="bg-gray-50 p-5"  dangerouslySetInnerHTML={createMarkup(post.desc)} />
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