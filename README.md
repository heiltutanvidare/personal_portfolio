# My personal portfolio site

**This is my the repo for my personal portfolio site.**

## 🖼 FrontEnd

It is built using [GatsbyJS](https://www.gatsbyjs.com), a framework for [React](https://reactjs.org) for the FrontEnd.
I used the [hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world) starter in order to start with only the basic configurations.

### 🪄 Plugins

Gatsby let's you use plugins to enhance the developer experience and add features to your site. Here are the ones used on my site:

- [gatsby-source-strapi](https://www.gatsbyjs.com/plugins/gatsby-source-strapi/?=source%20strapi) | Source plugin for pulling documents into Gatsby from a Strapi API.
- [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=react%20helmet) | React Helmet is a component which lets you control your document head using their React component. This plugin provides drop-in support for server rendering data added with React Helmet.
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/?=gatsby-plugin-image) | Adding responsive images to your site while maintaining high performance scores can be difficult to do manually. The Gatsby Image plugin handles the hard parts of producing images in multiple sizes and formats for you!
- [gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/?=gatsby-plugin-sharp) | Exposes several image processing functions built on the Sharp image processing library. This is a low-level helper plugin generally used by other Gatsby plugins. You generally shouldn’t be using this directly but might find it helpful if doing very custom image processing.
- [gatsby-transformer-sharp](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/?=transformer) | Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images. -[Gatsby Plugin Transition Link](https://www.gatsbyjs.com/plugins/gatsby-plugin-transition-link/?=transition-link) | TransitionLink provides a simple api for describing expressive transitions between pages in Gatsbyjs. Page links are used to determine which transition should fire, making page transitions flexible and easy to use.

## 🗃 Backend

The site is is pulling data from a [Strapi](https://strapi.io) backend where I host all my project data, contact info and my CV.
Using GatsbyJS's templating function, each project-details page is created using data and markdown from the Strapi backend.

## ⚙️ Deployment

When i push any updates on the repo to GitHub, the site will rebuild and deploy on [Netlify](https://www.netlify.com).
If any conent is updated on the backend (like new projects, or changes to my contact info) a webhook will trigger a rebuild on netlify.

## ✨ Advantages

The setup ensures good SEO and speed of a static website, while keeping it super easy to update and maintain the site.
