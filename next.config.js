/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

const nextConfig = {
  reactStrictMode: false,

  images: {
    loader: "default",
    domains: [
      "localhost",
      "mwsun-strapi.onrender.com",
      "mwsun-strapi-fd02b01d853c.herokuapp.com",
      "res.cloudinary.com",
      "malawisunhotel.com",
      "vercel.com/kond94/mwsun-react-website",
    ],
  },
  async headers() {
    return [
      {
        // Routes this applies to
        source: "/Home",
        // Headers
        headers: [
          // Allow for specific domains to have access or * for all
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000",
            // DOES NOT WORK
            // value: process.env.ALLOWED_ORIGIN,
          },
          // Allows for specific methods accepted
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          // Allows for specific headers accepted (These are a few standard ones)
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
