// import prisma from "@/app/utils/connect";
// import { NextResponse } from "next/server";

// export const GET = async (req) => {
//     const { searchParams } = new URL(req.url);
//     console.log('logging searchParams in route to verify request url:', searchParams)
//     const page = parseInt(searchParams.get('page') || '1', 10);
//     console.log('logging page in route to verify url:', page)
//     const catSlug = searchParams.get('catSlug');

//     const POST_PER_PAGE = 4;
//     const offset = (page - 1) * POST_PER_PAGE;

//     let query = {
//         take: POST_PER_PAGE,
//         skip: offset,
//     };

//     if (catSlug) {
//         try {
//             const category = await prisma.category.findUnique({
//                 where: { slug: catSlug }
//             });

//             if (!category) {
//                 return new NextResponse(
//                     JSON.stringify({ error: 'Invalid category slug' }),
//                     { status: 400 }
//                 );
//             }

//             query.where = { catSlug };

//         } catch (err) {
//             console.error('Error fetching category:', err);
//             return new NextResponse(
//                 JSON.stringify({ error: 'Failed to fetch data' }),
//                 { status: 500 }
//             );
//         }
//     }

//     try {
//         const [posts, count] = await prisma.$transaction([
//             prisma.post.findMany({
//                 ...query,
//                 include: { cat: true },
//             }),
//             prisma.post.count({ where: query.where }),
//         ]);

//         return new NextResponse(
//             JSON.stringify({ posts, totalPosts: count }),
//             { status: 200 }
//         );
//     } catch (err) {
//         console.error('Error fetching posts:', err);
//         return new NextResponse(
//             JSON.stringify({ error: 'Failed to fetch data' }),
//             { status: 500 }
//         );
//     }
// };
