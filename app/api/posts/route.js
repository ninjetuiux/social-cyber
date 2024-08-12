import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";



export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const  
   page = parseInt(searchParams.get('page')) || 1; // Ensure 'page' is a number, default to 1
    const POST_PER_PAGE = 2;
  
    try {
      const posts = await prisma.post.findMany({
        take: POST_PER_PAGE,
        skip: Math.max(0, POST_PER_PAGE * (page - 1)) // Use Math.max to prevent negative skip
      });
  
      return new NextResponse(
        JSON.stringify(posts, { status: 200 })
      );
    } catch (err) {
      console.error('Error fetching posts:', err);
      return new NextResponse(
        JSON.stringify({ error: 'Failed to fetch data' }, { status: 500 })
      );
    }
  };