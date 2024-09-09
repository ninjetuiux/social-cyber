import prisma from "@/app/utils/connect";

export async function POST(request) {
    try {
      const { signed_request } = await request.json();
      
      // TODO: Verify the signed_request from Facebook
      
      // Extract the user ID from the verified request
      const facebookUserId = JSON.parse(signed_request.split('.')[1]).user_id;

      // Find the user in your database
      const user = await prisma.user.findFirst({
        where: { facebookId: facebookUserId },
      });

      if (user) {
        // Delete or anonymize user data
        await prisma.user.delete({
          where: { id: user.id },
        });
        // TODO: Delete or anonymize related data (posts, comments, etc.)

        return new Response(JSON.stringify({ success: true, message: 'User deleted successfully' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        return new Response(JSON.stringify({ success: false, message: 'User not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) {
      console.error('Error processing Facebook user deletion request:', error);
      return new Response(JSON.stringify({ success: false, message: 'Error processing deletion request' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
}

export async function GET() {
    // Handle any GET requests (optional, for testing purposes)
    return new Response('Facebook User Deletion Endpoint', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
}