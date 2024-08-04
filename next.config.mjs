/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other Next.js configuration ...
  sitemap: {
    hostname: 'https://www.social-cyber.co.il',

    // Exclude specific paths or file types
    exclude: [
      '/private/*',
      '/admin/*',
      '/api/*',  // Usually exclude API routes
    ],
  },
};

export default nextConfig;
