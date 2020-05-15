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
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ae81ff`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ae81ff`,
        theme_color: `#ae81ff`,
        display: `standalone`,
        icon: `${__dirname}/src/assets/svg/vini.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`400`, `700`],
          },
          {
            family: `Montserrat`,
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
        path: `${__dirname}/src/components/Pages`,
        ignore: [`**/*.!(tsx)`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/assets/posts`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-buttons`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-intl`,
    //   options: {
    //     path: `${__dirname}/src/assets/lang`,
    //     languages: [`en`, `pt`],
    //     defaultLanguage: `pt`,
    //     redirect: true,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-minify-html',
      options: {
        debug: true,
        config: {
          caseSensitive: true,
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          continueOnParseError: true,
          decodeEntities: true,
          html5: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          preventAttributesEscaping: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeTagWhitespace: true,
          trimCustomFragments: true,
          useShortDoctype: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
  ],
};
