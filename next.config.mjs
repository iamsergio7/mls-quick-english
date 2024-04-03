/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "us-east-1-shared-usea1-02.graphassets.com",

    ],
  },
  
};

export default nextConfig;
