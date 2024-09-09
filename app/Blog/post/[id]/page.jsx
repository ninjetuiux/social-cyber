'use server'
import prisma from "@/app/utils/connect";
import Image from "next/image";
import PopularPosts from "../../components/PopularPosts/PopularPosts";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { handleViewCount } from "./utils/ViewCounter";


export default async function SinglePost({ params }) {
    const { id } = params; // Extract ID from params
    
    const viewCount = await handleViewCount();
   // Fetch the post data from the database (implementation not shown)
   
   // Debugging: Check the received headers in the component
   console.log('Received X-View-Count:', viewCount);
//    console.log('Document Cookies:', document.cookie);  // Check if 'viewedPosts' or 'testCookie' is set
    // Fetch the post data from the database
    const post = await prisma.post.findUnique({
        where: { id: id },
        include: {
            comments: {
                include: {
                    user: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            }
        }
    });

    // If no post is found, return a message or handle accordingly
    if (!post) {
        return <div>Post not found</div>;
    }


        // Function to extract the first image from the post content
        const getFirstImage = (content) => {
            if (!content || !content.content) return null;
    
            const findImage = (nodes) => {
                for (const node of nodes) {
                    if (node.type === 'image') {
                        return node.attrs.src;
                    }
                    if (node.content) {
                        const nestedImage = findImage(node.content);
                        if (nestedImage) return nestedImage;
                    }
                }
                return null;
            };
    
            return findImage(content.content);
        };
    
        // Extract the first image URL
        const firstImageUrl = getFirstImage(post.content);

        // Function to render HTML content safely
        const createMarkup = (htmlContent) => {
            return { __html: htmlContent };
        };
    return (
        <div className="flex flex-col gap-5 w-full py-10 px-5 justify-center items-center" dir='rtl'>
            <div className="flex flex-col lg:flex-row w-full justify-center">
                <div className="flex w-full max-w-[1536px] items-center justify-center">
                    {firstImageUrl ? (
                        <Image 
                            src={firstImageUrl} 
                            alt='single-post-image' 
                            width={550} 
                            height={400} 
                            className="object-cover max-h-[400px] rounded-xl"
                        />
                    ) : (
                        <div className="w-[550px] h-[400px] bg-gray-200 flex items-center justify-center">
                            No image available
                        </div>
                    )}
                </div>
                <div className="flex flex-col lg:items-start items-center justify-around w-full">
                    <div className="lg:text-5xl text-2xl py-5 lg:py-0">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="flex gap-5 justify-between items-center">
                        <div className="flex gap-3">
                            <div className="w-[50px]">
                                <Image src='https://avatar.iran.liara.run/public' alt="" width={50} height={50} />
                            </div>
                            <div className="flex flex-col-reverse text-sm justify-center">
                                <span>{post.authorName}</span>
                                <span>{post.createdAt.toISOString().substring(0,10)}</span>
                            </div>    
                        </div>
                        <div className="text-xs text-center w-full flex flex-col gap-2">
                            <div>צפיות: {viewCount}</div> {/* Display unique viewers count */}
                            <span>
                                קטגוריה: {post.catSlug}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 max-w-[1536px] w-full justify-center">
                <div className="flex gap-5 w-full">
                    <div className="bg-gray-100 p-3 hidden lg:flex">
                        <PopularPosts />
                    </div>
                    <div className="bg-gray-50 p-5 "  dangerouslySetInnerHTML={createMarkup(post.desc)} />
                </div>
                    <div className="flex flex-col gap-5 w-full">
                        <div className="bg-gray-50 items-center flex rounded-xl">
                            <div className="flex lg:justify-between flex-1 rounded-xl">
                                <CommentForm postId={post.id} />
                            </div>
                        </div>
                        <div className="bg-gray-50 p-5">
                            <div className="w-full flex gap-3 items-center">
                                <CommentList postId={id} />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}