import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/logo_white.svg" alt="Vidar Håland logo" />
      </Link>
      <div className={styles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>
        Frontend-utviklar <br />& redaksjonell designer
      </p>
    </header>
  )
}
