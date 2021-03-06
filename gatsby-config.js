// gatsby-config.js
module.exports = {
    plugins: [
      {
        resolve: `@christiandavid/gatsby-theme-byfolio`,
        options: {
          // pathPrefix: `src/`,
        // basePath: ``,
        // path: `src/`,
        // imagesPath: `src/images/`,
        siteTitle: `Portfolio`,
        siteUrl: `https://seandees.dev`,
        siteName: `Sean Dees Portfolio`,
        siteShortName: `Sean Dees Portfolio`,
        siteDescription: `Sean Dees Full-Stack Web Developer. He works with HTML, CSS, JavaScript, React, and Node.`,
        siteKeywords: `Sean Dees, Web developer windsor, Web dev windsor, Software developer, Full Stack Developer`,

        useMozJpeg: true,
        email: `contact@seandees.dev`,
        social: {
            // Usernames
            twitter: `taydees`,
            gitHub: `sdees82`,
            stackOverflow: `8222431/SeanD`,
            linkedIn: `in/sean-dees-666475105/`,
            resumeInPdf: `https://seandees.dev`, // url or local link
          },
        homePage: {
            availableToHire: true,
            dotColors: ["#0e3e1e", "#6CC551"],
            h1Text: `Hi!, I'm Sean Dees`,
            h2Text: "I'm a Full-Stack Web Developer focused on crafting great web experiences.",
            typewriter: [
              `Coding is my passion 😎`,
              `I'm a ☕ and 🐕 lover`,
              `I love learning new technologies 🤓`,
              `I love problem solving`,
              `I love to share what I know 👨‍🏫`,
            ],
          },
          shapeColor: {
            link: { color: "#171616", hover: "#fff" },
            shape1: {
              color: `#000 !important`,
              opacity: `0.7`,
            },
            shape2: {
              color: `#b957ce`,
              opacity: `0.1`,
            },
            shape3: {
              color: `#5c58b6`,
              opacity: `0.7`,
            },
          },
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // name:"experience",
          path: `${__dirname}/src`
        }
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-twitter-cards`,
              options: {
                title: 'Sean Dees - Full-Stack Web Developer', // website title
                separator: '|', // default
                author: 'Sean Dees',
                // background: require.resolve('./content/assets/base.png') // path to 1200x630px file or hex code, defaults to black (#000000)
                fontColor: '#228B22', // defaults to white (#ffffff)
                titleFontSize: 96, // default
                subtitleFontSize: 60, // default
                fontStyle: 'monospace', // default
                // fontFile: require.resolve('./assets/fonts/someFont.ttf') // will override fontStyle - path to custom TTF font
              },
            },
          ],
        },
      },
    ],
  }