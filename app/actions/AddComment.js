'use server';

import prisma from "@/app/utils/connect";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/auth";
import { revalidatePath } from 'next/cache';

export async function addComment(postId, content) {
    const session = await getServerSession(authOptions);
    if (!session) {
        throw new Error('You must be logged in to comment');
    }

    try {
        // First, fetch the post to get its slug
        const post = await prisma.post.findUnique({
            where: { id: postId },
            select: { slug: true }
        });

        if (!post) {
            throw new Error('Post not found');
        }

        const comment = await prisma.comment.create({
            data: {
                desc: content,
                user: {
                    connect: {
                        email: session.user.email
                    }
                },
                post: {
                    connect: {
                        id: postId // Use id instead of slug
                    }
                }
            },
        });

        console.log('Created comment:', comment); // For debugging

        revalidatePath(`/Blog/post/${postId}`);

        return comment;
    } catch (error) {
        console.error('Error creating comment:', error);
        throw error;
    }
}