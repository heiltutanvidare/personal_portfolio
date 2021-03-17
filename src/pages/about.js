import React from "react"
import Hero from "../components/Hero"
import Bio from "../components/Bio"
import CurricumVitae from "../components/CurricumVitae"
import Skills from "../components/Skills"
import { animationColor } from "../components/variables/Colors"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function About() {
  return (
    <>
      <Hero>
        <h1>
          Eg er ein teknologi- og design-glad nerd, som etter mange år i
          avisbransjen har starta på reisa mot å bli FrontEnd-utviklar
        </h1>
      </Hero>
      <Bio />
      <CurricumVitae />
      <Skills />
      <AniLink
        paintDrip
        to="/contact"
        className="btn btn--bio"
        hex={animationColor}
        bg={animationColor}
      >
        Ta gjerne kontakt
      </AniLink>
    </>
  )
}
