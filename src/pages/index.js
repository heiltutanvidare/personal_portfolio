import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import FeaturedProjects from "../components/FeaturedProjects"
import IntroAbout from "../components/IntroAbout"

export default function Home() {
  return (
    <Layout>
      <Hero>
        <h1>
          Vidar sitt hjarte <span>bankar</span> for digital design og visuell
          historieforteljing – pakka inn i ryddig og oversiktleg kode
        </h1>
      </Hero>
      <FeaturedProjects />
      <IntroAbout />
    </Layout>
  )
}
