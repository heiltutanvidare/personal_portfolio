import React from "react"
import * as hamburgerStyles from "../styles/hamburger.module.css"

export default function Hamburger({ toggleNav, navOpen }) {
  return (
    <div
      className={`mobileOnly ${hamburgerStyles.hamburger} ${
        navOpen === true ? hamburgerStyles.open : ""
      }`}
      onClick={toggleNav}
      onKeyDown={toggleNav}
      role="button"
      tabIndex="0"
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
