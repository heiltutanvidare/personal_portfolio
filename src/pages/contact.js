import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useContactData } from "../hooks/use-contact-data"
import Hero from "../components/Hero"
import * as styles from "../styles/contact.module.css"
import SEO from "../components/SEO"

export default function Contact({ data }) {
  const image = getImage(data.allStrapiContact.nodes[0].contact_photo)

  const { email, github, instagram, linkedin, phone } = useContactData()

  return (
    <>
      <SEO title="Kontakt" description="Slik får kontakt med Vidar Håland" />
      <Hero>
        <p>På jakt etter nye eventyr</p>
        <h1>
          Eg er for tida jobbsøkjar og tar svært gjerne ein uforpliktande prat
        </h1>
      </Hero>
      <div className={styles.contact}>
        <div>
          {/* <h2>Kontaktinformasjon:</h2> */}
          <div className={styles.contactItem}>
            <h4>E-post</h4>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className={styles.contactItem}>
            <h4>Telefon</h4>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div className={styles.contactItem}>
            <h4>GitHub</h4>
            <a href={`http://www.${github}`} target="_blank" rel="noreferrer">
              {github}
            </a>
          </div>
          <div className={styles.contactItem}>
            <h4>Instagram</h4>
            <a
              href={`http://www.${instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              {instagram}
            </a>
          </div>
          <div className={styles.contactItem}>
            <h4>LinkedIn</h4>
            <a href={`http://www.${linkedin}`} target="_blank" rel="noreferrer">
              {linkedin}
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="mailto:vusvol@icoud.com" className="btn">
              Send ein epost
            </a>
          </div>
        </div>
        <GatsbyImage
          image={image}
          alt="Vidar Håland"
          className={styles.contactImg}
        />
      </div>
    </>
  )
}

export const query = graphql`
  {
    allStrapiContact {
      nodes {
        contact_photo {
          childImageSharp {
            gatsbyImageData(
              formats: AUTO
              placeholder: BLURRED
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`
