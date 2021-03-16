import React from "react"
import * as styles from "../styles/header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoPlaceholder}></div>
      <p>
        Frontend-utviklar <br />& redaksjonell designer
      </p>
    </header>
  )
}
