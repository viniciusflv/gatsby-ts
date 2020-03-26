// Only commonjs
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.example.com`,
    siteName: `GatsbyTS`,
    titleTemplate: `GatsbyTS | %s`,
    title: `Gatsby with Typescript`,
    description: 'Gatsby with Typescript',
    keywords: 'gatsby typescript setup',
    author: 'Vinícius Victorino',
    locale: 'en',
    image: {
      path: 'icons/icon-512x512.png',
      type: 'image/png',
      size: '512',
    },
    titles: [
      ['/', 'Home'],
      ['/blog/', 'Blog'],
      ['/blog/gatsby/', 'Blog gatsby'],
      ['/blog/react/', 'Blog react'],
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#fa4616`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#fa4616`,
        theme_color: `#fa4616`,
        display: `standalone`,
        icon: './static/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.example.com`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `./src/components/Pages`,
        ignore: [`**/*.!(tsx)`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./src/assets/posts`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
  ],
};
