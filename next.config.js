/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    loader: "default",
    domains: [
      "localhost",
      "mwsun-strapi.onrender.com",
      "res.cloudinary.com",
      "malawisunhotel.com",
      "vercel.com/kond94/mwsun-react-website",
    ],
  },
};

module.exports = nextConfig;
