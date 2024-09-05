import { headers } from 'next/headers';
import prisma from "@/app/utils/connect";

async function getPostViewInfo(postId) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: { views: true, PostViews: { select: { ip: true } } }
    });
    return post;
  } catch (error) {
    console.error('Error getting post view info:', error);
    return null;
  }
}

async function incrementViewCount(postId, ip) {
  try {
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        views: { increment: 1 },
        PostViews: {
          create: { ip: ip }
        }
      },
      select: { views: true }
    });
    return updatedPost.views;
  } catch (error) {
    console.error('Error updating view count:', error);
    return null;
  }
}

export async function handleViewCount() {
  const headersList = headers();
  const postId = headersList.get('X-Post-Id');
  const ip = headersList.get('x-forwarded-for')?.split(',')[0] || 'unknown';

  if (!postId) {
    console.log('Missing postId, returning 0');
    return 0;
  }

  const postInfo = await getPostViewInfo(postId);
  
  if (!postInfo) {
    console.log('Post not found, returning 0');
    return 0;
  }

  const hasViewed = postInfo.PostViews.some(view => view.ip === ip);

  if (!hasViewed) {
    console.log('New view detected. Updating view count for post:', postId);
    return await incrementViewCount(postId, ip);
  } else {
    console.log('Existing view. Returning current view count for post:', postId);
    return postInfo.views;
  }
}