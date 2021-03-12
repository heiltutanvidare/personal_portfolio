import React from "react"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import { projectsContainer } from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Project({ data }) {
  const projects = data.allStrapiProject.edges
  console.log(projects)

  return (
    <Layout>
      <Hero>
        <h1>Projects in which Vidar has been involved in recent years.</h1>
      </Hero>
      <div className={projectsContainer}>
        {projects.map(project => (
          <Link
            to={`/projects/${project.node.slug}`}
            key={project.node.strapiId}
          >
            <GatsbyImage
              image={getImage(project.node.cover)}
              alt={project.node.title}
            />
            <p>{project.node.tagline}</p>
            <h1>{project.node.title}</h1>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      edges {
        node {
          featured
          slug
          cover {
            childImageSharp {
              gatsbyImageData(formats: AUTO, placeholder: BLURRED)
            }
          }
          tagline
          title
          type
          strapiId
        }
      }
    }
  }
`
