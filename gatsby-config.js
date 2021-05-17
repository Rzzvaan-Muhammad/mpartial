module.exports = {
  siteMetadata: {
    title: `Vetementco`,
    description: ``,
    author: `@CipherSavvy`,
    siteUrl: `https://yourrepairexperts.com/`,
  },
  plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`],
  plugins: [
    {
      resolve: "gatsby-source-googlemaps-static",
      options: {
        key: "AIzaSyBU6aCNN1oOp3NkCn-JGXjzQ6UDDF1EU6c",
        center: `Boston, MA`,
      },
    },
  ],
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://efw.360connect.com/v2/widget.js",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
