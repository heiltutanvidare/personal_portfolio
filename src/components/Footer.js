import { Link } from "gatsby"
import React from "react"
import { useContactData } from "../hooks/use-contact-data"
import * as styles from "../styles/footer.module.css"

function Footer() {
  const { email, github, instagram, linkedin, phone } = useContactData()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.watermark}>
          <img src="/logo_white.svg" alt="logo watermark" />
        </div>
        <div className={styles.footerPart}>
          <h4>Navigation</h4>
          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/projects">Prosjekt</Link>
            <Link to="/about">Om meg</Link>
            <Link to="/contact">Kontakt</Link>
          </div>
        </div>
        <div className={styles.footerPart}>
          <h4>Contact</h4>
          <div className={styles.links}>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </div>
        <div className={styles.footerPart}>
          <h4>SoMe</h4>
          <div className={styles.links}>
            <a href={`https://www.${github}`} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href={`https://www.${linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={`https://www.${instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.footerPart}>
          <h4>Målet mitt</h4>
          <p className="footer__goal">
            Å bidra til å kunne fortelje historier, informere lesarane, gjere
            dei klokare, og meir engasjerte – med teknologi og design som
            verkemiddel.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
