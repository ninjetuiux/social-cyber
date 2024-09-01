import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const { title, content, htmlContent, authorId } = await request.json();

        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                htmlContent,
                authorId,
            },
        });

        return NextResponse.json({ message: 'Post created successfully', post: newPost }, { status: 201 });
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ message: 'Error creating post', error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
