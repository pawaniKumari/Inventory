/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-stockmanager.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
