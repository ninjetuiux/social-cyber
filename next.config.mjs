/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other Next.js configuration ...
  images: {
    // If you are using images from external domains, add them here
    domains: ['https://social-cyber.co.il', 'lh3.googleusercontent.com'], 
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
