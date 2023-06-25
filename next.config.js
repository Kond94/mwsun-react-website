/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: "build",

  images: {
    loader: "default",
    domains: [
      "localhost",
      "mwsun-strapi.onrender.com",
      "res.cloudinary.com",
      "malawisunhotel.com.com",
    ],
  },
};

module.exports = nextConfig;
