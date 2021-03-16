import React from "react"
import * as hamburgerStyles from "../styles/hamburger.module.css"

export default function Hamburger({ toggleNav, navOpen }) {
  return (
    <div
      className={`mobileOnly ${hamburgerStyles.hamburger} ${
        navOpen === true ? hamburgerStyles.open : ""
      }`}
      onClick={toggleNav}
    >
      <div
        className={`${hamburgerStyles.line} ${hamburgerStyles.line01}`}
      ></div>
      <div
        className={`${hamburgerStyles.line} ${hamburgerStyles.line02}`}
      ></div>
    </div>
  )
}
