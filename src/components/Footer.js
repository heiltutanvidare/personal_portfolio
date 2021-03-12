import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
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
            <a href="mailto:vusvol@icloud.com">vusvol@icloud.com</a>
            <a href="tel:91607947">916 07 947</a>
          </div>
        </div>
        <div className={styles.footerPart}>
          <h4>SoMe</h4>
          <div className={styles.links}>
            <a href="mailto:vusvol@icloud.com">GitHub</a>
            <a href="mailto:vusvol@icloud.com">LinkedIn</a>
            <a href="tel:91607947">Instagram</a>
          </div>
        </div>
        <div className={styles.footerPart}>
          <h4>Målet mitt</h4>
          <p className="footer__goal">
            Fortelje historier, informere lesarane, gjere dei klokare, og meir
            engasjerte – med teknologi og design som verkemiddel.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
