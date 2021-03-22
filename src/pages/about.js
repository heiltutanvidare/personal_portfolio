import React from "react"
import Hero from "../components/Hero"
import Bio from "../components/Bio"
import CurricumVitae from "../components/CurricumVitae"
import Skills from "../components/Skills"
import { animationColor } from "../components/variables/Colors"
import { transitionSpeed } from "../components/variables/Speed"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

export default function About() {
  return (
    <>
      <SEO
        title="Om"
        description="Om Vidar Håland – Frontend-utviklar og designar"
      />
      <Hero>
        <h1>
          Eg er ein teknologi- og design-glad nerd, som etter fleire år i
          avisbransjen har starta på reisa mot å bli Frontend-utviklar
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
        duration={transitionSpeed}
      >
        Ta gjerne kontakt
      </AniLink>
    </>
  )
}
