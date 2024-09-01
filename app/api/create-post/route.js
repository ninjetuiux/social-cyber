import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/app/utils/auth';

const prisma = new PrismaClient();

export async function POST(request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        console.log('failed to access session instance from create-post route: ', session);
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    try {
        const { title, content, desc } = await request.json();
    // Provide a temporary slug
    const tempSlug = 'temp-slug';
        // Create the post without the slug first
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                desc,
                slug: tempSlug,
                userEmail: session.user.email,
                authorName: session.user.name,
            },
        });

        // Generate the slug using the post ID and the first 50 characters of the title
        const slug = generateSlug(newPost.id, title);

        // Update the post with the generated slug
        const updatedPost = await prisma.post.update({
            where: { id: newPost.id },
            data: { slug },
        });

        return NextResponse.json({ message: 'Post created successfully', post: updatedPost }, { status: 201 });
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ message: 'Error creating post', error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

// Helper function to generate a slug
function generateSlug(id, title) {
    const truncatedTitle = title.substring(0, 50);
    const slug = `${id}-${truncatedTitle}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, '');    // Remove leading and trailing hyphens
    return slug;
}