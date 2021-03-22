import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Hero from "../components/Hero"
import * as styles from "../styles/project-details.module.css"
import { animationColor } from "../components/variables/Colors"
import { transitionSpeed } from "../components/variables/Speed"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowRight from "../components/icons/ArrowRight"
import SEO from "../components/SEO"

export default function ProjectDetails({ data }) {
  const {
    description,
    title,
    type,
    tagline,
    cover,
    stack,
    blurb,
  } = data.project
  return (
    <>
      <SEO title={title} description={blurb} />
      <Hero>
        <p>{type}</p>
        <h1>{tagline}</h1>
      </Hero>
      <div className={styles.details}>
        <GatsbyImage
          image={getImage(cover)}
          alt={title}
          className={styles.coverImg}
        />
        <article>
          <header>
            <div>
              <h3>Oppgåva</h3>
              <p>{blurb}.</p>
            </div>
            <div>
              <h3>Sentrale tema</h3>
              <div className={styles.stack}>
                {stack.map(item => (
                  <small key={item.id}>{item.title}</small>
                ))}
              </div>
            </div>
          </header>
          <div className={styles.content}>
            <h3>Om prosjektet</h3>
            <ReactMarkdown source={description} allowDangerousHtml={true} />
          </div>
          <AniLink
            paintDrip
            to="/projects"
            hex={animationColor}
            bg={animationColor}
            className={styles.returnLink}
            duration={transitionSpeed}
          >
            Sjå alle prosjekt <ArrowRight />
          </AniLink>
        </article>
      </div>
    </>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProject(slug: { eq: $slug }) {
      description
      title
      type
      tagline
      cover {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
      stack {
        title
        id
      }
      blurb
    }
  }
`
