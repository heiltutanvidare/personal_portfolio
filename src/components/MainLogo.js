import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { animationColor } from "./variables/Colors"
import * as styles from "../styles/mainLogo.module.css"

export default function MainLogo() {
  return (
    <AniLink paintDrip to="/" hex={animationColor} bg={animationColor}>
      <img
        className={styles.logo}
        src="/logo_white.svg"
        alt="Vidar Håland logo"
      />
    </AniLink>
  )
}
