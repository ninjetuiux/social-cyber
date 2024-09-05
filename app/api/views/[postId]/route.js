import { NextResponse } from 'next/server';
import prisma from "@/app/utils/connect";
import { v4 as uuidv4 } from 'uuid';

export async function GET(request, { params }) {
    const { postId } = params;

    if (!postId) {
        return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
    }

    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const cookies = request.cookies;
    let viewerCookie = cookies.get('post_viewer_id');

    // Generate a new cookie if it doesn't exist
    if (!viewerCookie) {
        const newCookieValue = uuidv4();
        const response = NextResponse.next();
        response.cookies.set('post_viewer_id', newCookieValue, { maxAge: 365 * 24 * 60 * 60 }); // 1 year expiry
        viewerCookie = { value: newCookieValue };
        return response;
    }

    const existingIpView = await prisma.postView.findFirst({
        where: {
            postId: postId,
            ipAddress: ip,
        },
    });

    const existingCookieView = await prisma.postView.findFirst({
        where: {
            postId: postId,
            cookie: viewerCookie.value,
        },
    });

    if (!existingIpView && !existingCookieView) {
        await prisma.postView.create({
            data: {
                postId: postId,
                ipAddress: ip,
                cookie: viewerCookie.value,
            },
        });

        await prisma.post.update({
            where: { id: postId },
            data: { views: { increment: 1 } },
        });
    }

    const updatedPost = await prisma.post.findUnique({
        where: { id: postId },
        select: { views: true },
    });

    return NextResponse.json({ views: updatedPost.views });
}