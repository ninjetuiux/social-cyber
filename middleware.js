import { NextResponse } from "next/server";
// THIS IS THE MIDDLEWARE THAT COUNTS VIEWS AND RELATED TO COOKIES 
// AND CONNECTED TO THE POST ViewCounter.js IN THE POST FOLDER
export function middleware(request) {
  console.log('Middleware executed for URL:', request.url);

  const url = new URL(request.url);
  const postId = url.pathname.split('/').pop();

  // Get existing viewedPosts cookie or initialize an empty array
  let viewedPosts = request.cookies.get('viewedPosts')?.value;
  let viewedPostsArray = viewedPosts ? JSON.parse(viewedPosts) : [];
  // Check if this post has been viewed
  const hasViewed = viewedPostsArray.includes(postId);

  // Create a new response
  const response = NextResponse.next();

  // If it's a new view, add the postId to the cookie
  if (!hasViewed) {
    viewedPostsArray.push(postId);

    // Set the updated viewedPosts cookie
    response.cookies.set('viewedPosts', JSON.stringify(viewedPostsArray), {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    // Set header to trigger view count update
    response.headers.set('X-Update-View-Count', 'true');
    
  } else {
    console.log('Existing view for post:', postId);
  }
  // Always set the post ID header
  response.headers.set('X-Post-Id', postId);
  return response;
}

export const config = {
  matcher: ['/Blog/post/:path*', '/blog/post/:path*'],
}
// END OF VIEW COUNTER MIDDLEWARE
