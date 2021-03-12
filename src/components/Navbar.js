import React from "react"
import { navbar } from "../styles/navbar.module.css"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className={navbar}>
      <Link to="/">Vidar Håland</Link>
      <div>
        <Link to="/">Heim</Link>
        <Link to="/projects">Prosjekt</Link>
        <Link to="/about">Om meg</Link>
        <Link to="/contact">Kontakt</Link>
      </div>
    </nav>
  )
}
