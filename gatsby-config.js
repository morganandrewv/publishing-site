module.exports = {
  siteMetadata: {
    title: `Morgan VanDerLeest`,
    name: `Morgan VanDerLeest`,
    siteUrl: `https://www.morganvanderleest.com`,
    description: `The personal website of Morgan VanDerLeest. Thoughts and writings are my own.`,
    hero: {
      heading: `Hi, I'm Morgan. Welcome to my little corner of the internet.`,
      maxWidth: 800,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/morganandrewv`,
      },
      {
        name: `github`,
        url: `https://github.com/morganandrewv`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/morganvanderleest/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
