/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: [
      "localhost",
      "the-baobab-discourses-strapi.onrender.com",
      "res.cloudinary.com",
      "the-baobab-discourses.com",
    ],
  },
};

module.exports = nextConfig;
