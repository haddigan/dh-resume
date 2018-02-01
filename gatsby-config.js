module.exports = {
  siteMetadata: {
    title: `Dan Haddigan's resume`,
    author: `Dan Haddigan`,
    description: `Dan Haddigan - Web Developer`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
