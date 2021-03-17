import React from "react"
import Hero from "../components/Hero"
import { animationColor } from "../components/variables/Colors"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowRight from "../components/icons/ArrowRight"

export default function NotFound() {
  return (
    <>
      <Hero>
        <h1>
          Noko gjekk gale{" "}
          <span role="img" aria-label="shocked face emoji">
            🤭
          </span>
        </h1>
      </Hero>
      <h2>404</h2>
      <p>Beklager, men den sida er ikkje å finne.</p>
      <AniLink paintDrip to="/" hex={animationColor} bg={animationColor}>
        Gå tilbake til framsida <ArrowRight />
      </AniLink>
    </>
  )
}
