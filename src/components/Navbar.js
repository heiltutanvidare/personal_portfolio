import React, { useState } from "react"
import * as styles from "../styles/navbar.module.css"
import { animationColor } from "./variables/Colors"
import { transitionSpeed } from "./variables/Speed"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Hamburger from "./Hamburger"
import MainLogo from "./MainLogo"

export default function Navbar() {
  // Toggle nav menu
  const [navOpen, setNavOpen] = useState(false)
  console.log(navOpen)

  function toggleNav() {
    setNavOpen(!navOpen)
  }

  // Close nav as link if mobile nav is clicked
  function handleNavClick() {
    if (window.innerWidth < 768) {
      setTimeout(toggleNav, 1000)
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <MainLogo />
        <AniLink
          paintDrip
          duration={transitionSpeed}
          hex={animationColor}
          bg={animationColor}
          to="/"
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
          <AniLink
            paintDrip
            duration={transitionSpeed}
            to="/"
            hex={animationColor}
            bg={animationColor}
            onClick={handleNavClick}
          >
            Heim
          </AniLink>
          <AniLink
            paintDrip
            duration={transitionSpeed}
            to="/projects"
            hex={animationColor}
            bg={animationColor}
            onClick={handleNavClick}
          >
            Prosjekt
          </AniLink>
          <AniLink
            paintDrip
            duration={transitionSpeed}
            to="/about"
            hex={animationColor}
            bg={animationColor}
            onClick={handleNavClick}
          >
            Om meg
          </AniLink>
          <AniLink
            paintDrip
            duration={transitionSpeed}
            to="/contact"
            hex={animationColor}
            bg={animationColor}
            onClick={handleNavClick}
          >
            Kontakt
          </AniLink>
        </div>
      </div>
    </nav>
  )
}

// `${navOpen === true ? styles.open : ""}`
