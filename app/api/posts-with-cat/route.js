import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const catSlug = searchParams.get('catSlug');

    let query = {};  // Initialize an empty query object

    if (catSlug) {
        try {
            // Fetch the category to ensure it exists
            const category = await prisma.category.findUnique({
                where: { slug: catSlug }
            });

            if (!category) {
                return new NextResponse(
                    JSON.stringify({ error: 'Invalid category slug' }, { status: 400 })
                );
            }

            query.where = { catSlug };  // Apply category slug filter if provided

        } catch (err) {
            console.error('Error fetching category:', err);
            return new NextResponse(
                JSON.stringify({ error: 'Failed to fetch data' }, { status: 500 })
            );
        }
    }

    try {
        // Fetch all posts with their categories included
        const posts = await prisma.post.findMany({
            ...query,
            include: {
                cat: true,  // Include the category data
            },
        });

        return new NextResponse(
            JSON.stringify({ posts }, { status: 200 })
        );
    } catch (err) {
        console.error('Error fetching posts:', err);
        return new NextResponse(
            JSON.stringify({ error: 'Failed to fetch data' }, { status: 500 })
        );
    }
};
