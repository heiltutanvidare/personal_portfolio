import React from "react"
import * as styles from "../styles/navbar.module.css"
import { Link } from "gatsby"
import Hamburger from "./Hamburger"
import MainLogo from "./MainLogo"

export default function Navbar({ toggleNav, navOpen }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <MainLogo />
        <Link to="/" className={styles.name}>
          Vidar Håland
        </Link>
        <Hamburger toggleNav={toggleNav} navOpen={navOpen} />
        <div
          className={`${styles.navLinks} ${
            navOpen === true ? styles.open : ""
          }`}
        >
          <Link to="/">Heim</Link>
          <Link to="/projects">Prosjekt</Link>
          <Link to="/about">Om meg</Link>
          <Link to="/contact">Kontakt</Link>
        </div>
      </div>
    </nav>
  )
}

// `${navOpen === true ? styles.open : ""}`
