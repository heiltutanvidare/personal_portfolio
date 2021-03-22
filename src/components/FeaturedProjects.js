import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { animationColor } from "./variables/Colors"
import { transitionSpeed } from "./variables/Speed"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/featuredProjects.module.css"
import ArrowRight from "./icons/ArrowRight"

export default function FeaturedProjects() {
  return (
    <StaticQuery
      query={graphql`
        {
          allStrapiProject(
            filter: { featured: { eq: true } }
            sort: { fields: strapiId, order: DESC }
          ) {
            edges {
              node {
                slug
                cover {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
                title
                type
                strapiId
              }
            }
          }
        }
      `}
      render={data => (
        <section className={styles.featured}>
          <header>
            <h2>Utvalde prosjekt</h2>
            <AniLink
              paintDrip
              duration={transitionSpeed}
              to="/projects"
              hex={animationColor}
              bg={animationColor}
            >
              Sjå alle <ArrowRight />
            </AniLink>
          </header>
          <div className={styles.projectContainer}>
            {data.allStrapiProject.edges.map(project => (
              <AniLink
                to={`/projects/${project.node.slug}`}
                className={styles.projectCard}
                paintDrip
                duration={transitionSpeed}
                key={project.node.strapiId}
                hex={animationColor}
                bg={animationColor}
              >
                <GatsbyImage
                  image={getImage(project.node.cover)}
                  alt={project.node.title}
                />
                <p className={styles.type}>{project.node.type}</p>
                <h2 className={styles.title}>{project.node.title}</h2>
              </AniLink>
            ))}
          </div>
        </section>
      )}
    />
  )
}
