// app/api/get-api-key/route.js
export async function GET() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;
    return Response.json({ apiKey }); // Ensure it's a JSON response
  }
  