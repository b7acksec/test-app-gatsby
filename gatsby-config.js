module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "test-app-gatsby",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-styletron",
      options: {
        prefix: "_",
        debug: false,
      },
    },
  ],
};
