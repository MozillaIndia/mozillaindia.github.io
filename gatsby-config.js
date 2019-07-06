module.exports = {
  siteMetadata: {
    title: `Mozilla India Website`,
    description: `Mozilla India is community driven my Mozillian Volunteers`,
    author: `@harshil1712`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Zilla Slab`,
            variants: [`400`, `600`,`700`]
          },
          {
            family: `Fira Sans`,
            variants: [`400`, `700`]
          },
          {
            family: `Zilla Slab Highlight`,
            variants:[`700`]
          }
        ],
      },
    },
    {
      resolve:"gatsby-source-filesystem",
      options: {
        path:"./data/"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
