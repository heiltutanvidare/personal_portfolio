import React from "react"
import Hero from "../../components/Hero"
import * as styles from "../../styles/featuredProjects.module.css"
import { graphql } from "gatsby"
import { animationColor } from "../../components/variables/Colors"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Project({ data }) {
  const projects = data.allStrapiProject.nodes

  return (
    <>
      <Hero>
        <p>
          <em>
            – Find a job you enjoy doing, and you will never have to work a day
            in your life.
          </em>
        </p>
        <h1>
          Her kan du sjå nokre av prosjekta eg har vore heldig å få jobba med
        </h1>
      </Hero>
      <div className={styles.projectContainer}>
        {projects.map(project => (
          <div key={project.strapiId} className={styles.projectCard}>
            <AniLink
              paintDrip
              to={`/projects/${project.slug}`}
              hex={animationColor}
              bg={animationColor}
            >
              <GatsbyImage
                image={getImage(project.cover)}
                alt={project.title}
              />
              <p className={styles.type}>{project.type}</p>
              <h2 className={styles.title}>{project.title}</h2>
            </AniLink>
          </div>
        ))}
      </div>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(sort: { fields: strapiId, order: ASC }) {
      nodes {
        cover {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
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
