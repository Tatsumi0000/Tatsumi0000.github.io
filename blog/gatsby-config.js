const { resolve } = require("path");

module.exports = {
  siteMetadata: {
    title: `私的歌詞倉庫`,
    author: {
      name: `Tatsumi0000`,
      summary: `モバイル開発が好きなエンジニアのブログです．`,
    },
    description: `プログラミングや日常について書くブログです。`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      github: `Tatsumi0000`
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
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
            // 新規タブで開く
            resolve: "gatsby-remark-external-links",
            options: {
              rel: "noopener noreferrer",
            }
          },
          // コードにタイトルを付ける
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
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
        //trackingId: `G-WC9223ENN9`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    // {
    //   // 設定方法が不明なので脳死で使わせていただく
    //   // https://qiita.com/AumyF/items/a6a8400cf9f5f2ce488f#purgecss%E3%81%A7%EF%BE%8A%EF%BE%9E%EF%BE%81%EF%BD%AD%EF%BD%AF%E3%81%A8
    //   resolve: "gatsby-plugin-purgecss",
    //   options: {
    //     printRejected: true,
    //     develop: false,
    //     tailwind: false,
    //     ignore: ['normalize.css', 'style.css', 'code-highlight.css', 'prism-okaidia.css', 'prism-line-numbers.css', 'index.css'],
    //   },
    // },
  ],
}
