import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  featured,
  projectContainer,
  projectCard,
  type,
  title,
} from "../styles/featuredProjects.module.css"

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
                    gatsbyImageData(formats: AUTO, placeholder: BLURRED)
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
        <section className={featured}>
          <header>
            <h2>Utvalde prosjekt</h2>
            <Link to="/projects">Sjå alle</Link>
          </header>
          <div className={projectContainer}>
            {data.allStrapiProject.edges.map(project => (
              <Link
                to={`/projects/${project.node.slug}`}
                className={projectCard}
                key={project.node.strapiId}
              >
                <GatsbyImage
                  image={getImage(project.node.cover)}
                  alt={project.node.title}
                />
                <p className={type}>{project.node.type}</p>
                <h2 className={title}>{project.node.title}</h2>
              </Link>
            ))}
          </div>
        </section>
      )}
    />
  )
}
