import React from "react"
import * as styles from "../styles/navbar.module.css"
import { animationColor } from "./variables/Colors"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Hamburger from "./Hamburger"
import MainLogo from "./MainLogo"

export default function Navbar({ toggleNav, navOpen }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <MainLogo />
        <AniLink
          paintDrip
          to="/"
          hex={animationColor}
          bg={animationColor}
          className={styles.name}
        >
          Vidar Håland
        </AniLink>
        <Hamburger toggleNav={toggleNav} navOpen={navOpen} />
        <div
          className={`${styles.navLinks} ${
            navOpen === true ? styles.open : ""
          }`}
        >
          <AniLink paintDrip to="/" hex={animationColor} bg={animationColor}>
            Heim
          </AniLink>
          <AniLink
            paintDrip
            to="/projects"
            hex={animationColor}
            bg={animationColor}
          >
            Prosjekt
          </AniLink>
          <AniLink
            paintDrip
            to="/about"
            hex={animationColor}
            bg={animationColor}
          >
            Om meg
          </AniLink>
          <AniLink
            paintDrip
            to="/contact"
            hex={animationColor}
            bg={animationColor}
          >
            Kontakt
          </AniLink>
        </div>
      </div>
    </nav>
  )
}

// `${navOpen === true ? styles.open : ""}`
