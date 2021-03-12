import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Bio from "../components/Bio"
import CurricumVitae from "../components/CurricumVitae"

export default function About() {
  return (
    <Layout>
      <Hero>
        <h1>
          Eg er ein teknologi- og design-glad nerd, som etter mange år i
          avisbransjen har starta på reisa mot å bli FrontEnd-utviklar.
        </h1>
      </Hero>
      <Bio />
      <CurricumVitae />
    </Layout>
  )
}
