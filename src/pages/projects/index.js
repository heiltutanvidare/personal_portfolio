import React from "react"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import * as styles from "../../styles/featuredProjects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Project({ data }) {
  const projects = data.allStrapiProject.nodes

  return (
    <Layout>
      <Hero>
        <p>
          <em>
            – Find a job you enjoy doing, and you will never have to work a day
            in your life.
          </em>
        </p>
        <h1>Eit utval av dei mange ulike prosjekta eg har arbeidd med</h1>
      </Hero>
      <div className={styles.projectContainer}>
        {projects.map(project => (
          <div key={project.strapiId} className={styles.projectCard}>
            <Link to={`/projects/${project.slug}`}>
              <GatsbyImage
                image={getImage(project.cover)}
                alt={project.title}
              />
              <p className={styles.type}>{project.type}</p>
              <h2 className={styles.title}>{project.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProject(sort: { fields: strapiId, order: ASC }) {
      nodes {
        cover {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              formats: AUTO
              placeholder: BLURRED
            )
          }
        }
        slug
        title
        type
        strapiId
      }
    }
  }
`
