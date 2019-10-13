module.exports = {
  siteMetadata: {
    title: `Daniel Head`,
    author: `Daniel Head`,
    email: `me@danielhead.com`,
    description: `Web developer`,
    siteUrl: `https://danielhead.dev/`,
    social: {
      twitter: `danhead`,
      instagram: `suburbanme`,
    },
    nav: [
      { title: `Home`, to: `/` },
      { title: `About`, to: `/about` },
      { title: `Work`, to: `/work` },
      { title: `Uses`, to: `/uses` },
      { title: `Blog`, to: `/blog` },
      { title: `Contact`, to: `/contact` },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-reading-time`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-20070613-5`,
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://589c77bd18a04b3d8be8fe01f4aeed98@sentry.io/1778139",
        environment: process.env.NODE_ENV,
        enabled: process.env.NODE_ENV === "production",
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Head`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `danielhead`,
      },
    },
  ],
}
