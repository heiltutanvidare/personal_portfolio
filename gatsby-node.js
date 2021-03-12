const path = require("path")

// Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allStrapiProject {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve("src/templates/project-details.js"),
      context: {
        slug: project.slug,
      },
    })
  })
}
