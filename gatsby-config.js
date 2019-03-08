if (process.env.LOCAL_BUILD || process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.dev" })
}

const plugins = [
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "content",
      path: `${__dirname}/src/data/content`,
    },
  },
  "gatsby-transformer-remark",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "San Diego Tech Hub",
      short_name: "SD Tech Hub",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "./src/images/ciricle-logo.png",
    },
  },
  {
    resolve: "gatsby-plugin-typography",
    options: {
      pathToConfigModule: "src/utils/typography.js",
    },
  },
  {
    resolve: "gatsby-plugin-google-fonts",
    options: {
      fonts: ["roboto"],
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint: process.env.MAILCHIMP,
    },
  },
  "gatsby-plugin-remove-trailing-slashes",
  "gatsby-plugin-remove-serviceworker",
  "gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-meetup",
    options: {
      key: process.env.MEETUP_API_KEY,
      groupUrlName: "sandiegojs",
      status: "upcoming,past",
      desc: "true",
      page: 200,
    },
  },
  {
    resolve: "gatsby-source-eventbrite",
    options: {
      organizationId: process.env.EVENTBRITE_ORG_ID,
      accessToken: process.env.EVENTBRITE_OAUTH_TOKEN,
      entities: ["events", "venues"],
    },
  },
  "gatsby-plugin-netlify-cms"
]

if (process.env.NODE_ENV === "production") {
  plugins.push({
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: process.env.GA,
    },
  })
}

if (process.env.NODE_ENV === "development") {
  plugins.push({
    resolve: "gatsby-plugin-eslint",
    options: {
      test: /\.js$|\.jsx$/,
      exclude: /(node_modules|.cache|public)/,
      stages: ["develop"],
      options: {
        emitWarning: true,
        failOnError: false,
      },
    },
  })
}

const config = {
  siteMetadata: {
    title: "San Diego Tech Hub",
    description:
      "San Diego Tech Hub represents a movement aimed at changing the perception of the San Diego tech ecosystem. Our focus is to be a conduit for change connecting businesses, organizations, and individuals, leveraging their resources and talents to build a stronger San Diego tech community through collaboration.",
    author: "Claude Jones",
  },
  plugins,
}

module.exports = config
