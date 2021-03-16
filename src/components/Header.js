import React from "react"
import * as styles from "../styles/header.module.css"
import Hamburger from "./Hamburger"

export default function Header({ toggleNav, navOpen }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoPlaceholder}></div>
      <p>
        Frontend-utviklar <br />& redaksjonell designer
      </p>
    </header>
  )
}
