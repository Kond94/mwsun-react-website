/** @type {import('next-sitemap').IConfig} */
module.exports = {
  generateIndexSitemap: false,
  siteUrl: process.env.SITE_URL || "https://www.malawisunhotel.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.the-baobab-discourses.com/server-sitemap.xml", // <==== Add here
    ],
  },
  additionalPaths: async (config) => {
    const result = [];

    // required value only
    result.push({
      loc: "/Home",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });
    // required value only
    result.push({
      loc: "/Accommodation",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    // required value only
    result.push({
      loc: "/Conferencing",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    // required value only
    result.push({
      loc: "/Banqueting",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    // required value only
    result.push({
      loc: "/Catering",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    // required value only
    result.push({
      loc: "/Aamari-Order-Menu",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    return result;
  },
};
