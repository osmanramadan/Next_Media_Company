/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['example.com', 'anotherdomain.com'], // Add domains you want to allow for image loading
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'example.com',
          pathname: '/path/to/images/**',
        }
      ],
    },
  };
  
  export default nextConfig;
  