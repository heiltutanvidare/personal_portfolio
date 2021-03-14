import React from "react"
import { Link } from "gatsby"
import { header } from "../styles/header.module.css"

export default function Header() {
  return (
    <header className={header}>
      <Link to="/">
        <img src="/logo_white.svg" alt="Vidar Håland logo" />
      </Link>
      <p>
        Frontend-utviklar <br />& redaksjonell designer
      </p>
    </header>
  )
}
