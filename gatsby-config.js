module.exports = {
  siteMetadata: {
    title: `Dan and the Wildfire`,
    description: `Dan and the Wildfire is a Rock Americana band from Boston Massachusetts`,
    author: `Andy Cousineau`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/styles'],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan and the Wildfire Band Site`,
        short_name: `DatW`,
        start_url: `/`,
        background_color: `#7f9a57`,
        theme_color: `#7f9a57`,
        display: `minimal-ui`,
        icon: `src/images/DATW-flame-badge.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
