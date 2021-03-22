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
        Eg er ein redaksjonell designar og frontend-utviklar – som etter 12 år i
        papiravisbransjen – tok steget over i den digitale verda, med mål om å
        ein dag kunne få jobbe med digital historieforteljing
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
