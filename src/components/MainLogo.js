import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/mainLogo.module.css"

export default function MainLogo() {
  return (
    <Link to="/">
      <img
        className={styles.logo}
        src="/logo_white.svg"
        alt="Vidar Håland logo"
      />
    </Link>
  )
}
