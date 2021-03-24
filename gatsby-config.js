/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Vidar Håland",
    description:
      "Vidar Håland er nyutdanna FrontEnd-utviklar med bakgrunn som designer i lokalavisa Kvinnheringen.",
    url: "https://vidarh.no",
    author: "Vidar Håland",
    image: "/vidar_som_robot.jpg",
    twitterUsername: "@ividaren",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://mysterious-gorge-95122.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`project`, `job`, `edu`, `skill`],
        //If using single types place them in this array.
        singleTypes: [`contact`],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout.js`),
      },
    },
  ],
}
