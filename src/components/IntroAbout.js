import React from "react"
import { introAbout } from "../styles/introAbout.module.css"
import { transitionSpeed } from "./variables/Speed"
import { animationColor } from "./variables/Colors"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function IntroAbout() {
  return (
    <section className={introAbout}>
      <h2>Om meg</h2>
      <p>
        Designer med over 12 års erfaring i mediebransjen. Utdanna mediegrafikar og frontend-utviklar – Med mål om å
        kunne få jobbe med digital design og utvikling.
      </p>
      <AniLink
        paintDrip
        duration={transitionSpeed}
        hex={animationColor}
        bg={animationColor}
        to="/about"
        className="btn"
      >
        Meir om meg
      </AniLink>
    </section>
  )
}
