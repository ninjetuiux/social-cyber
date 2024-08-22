import prisma from "@/app/utils/connect";
import Image from "next/image";
import PopularPosts from "../../components/PopularPosts/PopularPosts";



export default async function SinglePost({ params }) {
    const { id } = params; // Extract ID from params

    // Fetch the post data from the database
    const post = await prisma.post.findUnique({
        where: { id: id },
    });

    // If no post is found, return a message or handle accordingly
    if (!post) {
        return <div>Post not found</div>;
    }
    console.log('single post data:', post)
    // Render the post data
    return (
        <div className="flex flex-col gap-5 w-full py-10 px-5" dir='rtl'>
            <div className="flex w-full justify-center">
                <div className="flex w-full">
                    <img src={post.img} alt='single-post-image' className="w-[550px] h-[400px]"
                    />    
                </div>
                <div className="flex flex-col items-start justify-around w-full">
                    <div className="text-5xl">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="flex gap-3 justify-between w-full">
                        <div className="flex gap-3">
                            <div className="w-[50px]">
                                <img src='https://avatar.iran.liara.run/public' alt="" />
                            </div>
                            <div className="flex flex-col-reverse text-sm justify-center">
                                <span>{post.userEmail}</span>
                                <span>{post.createdAt.toISOString().substring(0,10)}</span>
                            </div>    
                        </div>
                        <div className="text-xs text-center w-full flex flex-col gap-2">
                            <span>
                                צפיות בפוסט זה: {post.views}
                            </span>
                            <span>
                                קטגוריה: {post.catSlug}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                    <div className="bg-gray-100 p-3 flex">
                        <PopularPosts />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <div className="bg-gray-50 p-5">
                            <h1>{post.desc}</h1>
                        </div>
                        <div className="bg-gray-50 items-center flex rounded-xl">
                            <form className="flex w-full justify-between flex-1 rounded-xl">
                                <div className='flex items-center justify-center flex-[0.2] w-full'>
                                    <button type='submit' className="bg-orange-300 py-4 px-16 rounded-full flex justify-center">שלח</button>
                                </div>
                                <textarea
                                rows='3'
                                placeholder="השאר תגובה לפוסט זה."
                                className="flex-[0.8] w-full border-2 rounded-xl border-gray-100 outline-none placeholder:mx-3 placeholder:text-black p-2 resize-none"
                                />
                            </form>
                        </div>
                        <div className="bg-gray-50 p-5">
                            <div className="w-full flex gap-3 items-center">
                                <div className="flex">
                                    <img src='https://avatar.iran.liara.run/public' alt="" style={{width: '50px'}} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs">גוני כמוני</span>
                                    <span className="text-xs">18/3/2024</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-xl p-2">
                                    comment
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}