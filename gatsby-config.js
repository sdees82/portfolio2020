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
        siteName: `Sean Dees`,
        siteShortName: `SD`,
        siteDescription: `This cool App contains information about my work experience as a software developer.`,
        siteKeywords: `Sean Dees, Web developer windsor, Web dev windsor, Software developer, Full Stack Developer`,

        useMozJpeg: true,
        email: `contact@seandees.dev`,
        social: {
            // Usernames
            twitter: `taydees`,
            gitHub: `sdees82`,
            stackOverflow: `8222431/SeanD`,
            linkedIn: `in/sean-dees-666475105/`,
            resumeInPdf: `/CV-19.pdf`, // url or local link
          },
        homePage: {
            availableToHire: true,
            dotColors: ["#0e3e1e", "#6CC551"],
            h1Text: `Hi!, I'm Sean Dees`,
            h2Text: `I'm a Full Stack Developer who loves working in Backend, I have
                worked as a software developer since 2006.`,
            typewriter: [
              `Coding is my passion 😎`,
              `I'm a 🍕 lover`,
              `I'm a pretty fast learner and always interested in learning new technologies 🤓`,
              `I think one of my values is the <strong>ability to resolve problems<strong>`,
              `I like to share what I know 👨‍🏫`,
              `In my non-coding hours, I'm at the 🏋‍`,
              `I also do design and UX work <span style='color: #27ae60;'>occasionally</span>`,
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
      }
    ],
  }