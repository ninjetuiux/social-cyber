'use server';
import prisma from "@/app/utils/connect";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
import { authOptions } from "@/app/utils/auth";
import { revalidatePath } from "next/cache";
import { unstable_cache } from 'next/cache';

async function deleteComment(formData) {
    'use server';
    const commentId = formData.get('commentId');
    const postId = formData.get('postId');
    const session = await getServerSession(authOptions);
    if (!session) {
        throw new Error('You must be logged in to delete a comment');
    }

    try {
        const comment = await prisma.comment.findUnique({
            where: { id: commentId },
            include: { user: true, post: true }
        });

        if (!comment) {
            console.log('Comment not found, it may have been already deleted');
            return;
        }

        if (comment.user.email !== session.user.email) {
            throw new Error('Unauthorized to delete this comment');
        }

        await prisma.comment.delete({
            where: { id: commentId }
        });

        if (comment.postSlug) {
            revalidatePath(`/Blog/post/${comment.postSlug}`);
        } else if (postId) {
            revalidatePath(`/Blog/post/${postId}`);
        } else {
            console.log('Unable to revalidate path, postSlug not available');
        }
    } catch (error) {
        console.error('Error deleting comment:', error);
        throw error;
    }
}

export default async function CommentList({ postId }) {
    const getComments = unstable_cache(
        async (id) => {
            // First, fetch the post to get its slug
            const post = await prisma.post.findUnique({
                where: { id: id },
                select: { slug: true }
            });

            if (!post) {
                throw new Error('Post not found');
            }

            return await prisma.comment.findMany({
                where: { postSlug: post.slug },
                include: { user: true },
                orderBy: { createdAt: 'desc' }
            });
        },
        [`comments-${postId}`],
        { tags: [`comments-${postId}`] }
    );

    const fetchedComments = await getComments(postId);
    console.log('comments', fetchedComments);

    if (!fetchedComments) return <div>Loading comments...</div>;
    if (fetchedComments.length === 0) return <div>No comments yet</div>;

    return (
        <div className="bg-gray-50 p-5 w-full">
            {fetchedComments.map((comment) => (
                <div key={comment.id} className="w-full flex gap-3 items-center mb-4">
                    <div className="flex">
                        <Image 
                        src={comment.user.image || 'https://avatar.iran.liara.run/public'} 
                        alt="user-avatar" 
                        width={30} 
                        height={30} 
                        className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs flex-nowrap whitespace-nowrap">{comment.user.name}</span>
                        <span className="text-xs">{new Date(comment.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="w-full relative min-h-10 items-center flex flex-1 bg-gray-100 rounded-xl p-2">
                        {comment.desc}
                        <div className="absolute top-0 left-0 flex min-h-10 min-w-10 items-center justify-center">
                        <form action={deleteComment}>
                            <input type="hidden" name="commentId" value={comment.id} />
                            <input type="hidden" name="postId" value={postId} />
                            <button type="submit">
                                <TiDeleteOutline className="text-red-500 h-6 w-6 flex justify-center items-center" />
                            </button>
                        </form>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
