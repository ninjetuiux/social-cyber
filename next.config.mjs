/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other Next.js configuration ...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'social-cyber.co.il',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'youtu.be',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  sitemap: {
    hostname: 'https://social-cyber.co.il', // Updated hostname


    // Exclude specific paths or file types
    exclude: [
      '/private/*',
      '/admin/*',
      '/api/*',   // Usually exclude API routes
    ],
  },
};
export default nextConfig;
