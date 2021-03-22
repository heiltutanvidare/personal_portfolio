import React from "react"
import { useContactData } from "../hooks/use-contact-data"
import { transitionSpeed } from "./variables/Speed"
import { animationColor } from "./variables/Colors"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
          <h4>Navigasjon</h4>
          <div className={styles.links}>
            <AniLink
              paintDrip
              duration={transitionSpeed}
              hex={animationColor}
              bg={animationColor}
              to="/"
            >
              Heim
            </AniLink>
            <AniLink
              paintDrip
              duration={transitionSpeed}
              hex={animationColor}
              bg={animationColor}
              to="/projects"
            >
              Prosjekt
            </AniLink>
            <AniLink
              paintDrip
              duration={transitionSpeed}
              hex={animationColor}
              bg={animationColor}
              to="/about"
            >
              Om meg
            </AniLink>
            <AniLink
              paintDrip
              duration={transitionSpeed}
              hex={animationColor}
              bg={animationColor}
              to="/contact"
            >
              Kontakt
            </AniLink>
          </div>
        </div>
        <div className={styles.footerPart}>
          <h4>Kontakt</h4>
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
