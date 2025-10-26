/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://s3-stockmanager.s3.ap-south-1.amazonaws.com/assets",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
