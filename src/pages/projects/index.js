import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "../../components/Hero"
import * as styles from "../../styles/featuredProjects.module.css"
import { graphql } from "gatsby"
import { animationColor } from "../../components/variables/Colors"
import { transitionSpeed } from "../../components/variables/Speed"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../../components/SEO"

export default function Project({ data }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(".animProjectCard", {
      opacity: 0,
      x: -100,
      y: 100,
    })

    const cards = gsap.utils.toArray(".animProjectCard")
    cards.forEach(card => {
      gsap.to(card, {
        opacity: 1,
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: card,
          scrub: 1,
          toggleActions: "restart pause reverse pause",
          start: "top bottom",
          end: "top center",
        },
      })
    })
  }, [])

  const projects = data.allStrapiProject.nodes

  return (
    <>
      <SEO
        title="Prosjekt"
        description="Oversikt over prosjekt Vidar Håland har arbeidd med"
      />
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
          <div
            key={project.strapiId}
            className={`${styles.projectCard} animProjectCard`}
          >
            <AniLink
              paintDrip
              to={`/projects/${project.slug}`}
              hex={animationColor}
              bg={animationColor}
              duration={transitionSpeed}
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
