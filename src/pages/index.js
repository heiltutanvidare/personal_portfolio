import React from "react"
import Hero from "../components/Hero"
import FeaturedProjects from "../components/FeaturedProjects"
import IntroAbout from "../components/IntroAbout"
import * as heroStyles from "../styles/hero.module.css"

export default function Home() {
  return (
    <>
      <Hero>
        <h1 className="bankar">
          Vidar sitt hjarte <span className={heroStyles.bankar}>bankar</span>{" "}
          for digital design og visuell historieforteljing – pakka inn i ryddig
          og oversiktleg kode
        </h1>
      </Hero>
      <FeaturedProjects />
      <IntroAbout />
    </>
  )
}
