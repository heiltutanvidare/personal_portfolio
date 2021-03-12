import React from "react"
import { introAbout } from "../styles/introAbout.module.css"
import { Link } from "gatsby"

export default function IntroAbout() {
  return (
    <section className={introAbout}>
      <h2>Om meg</h2>
      <p>
        Eg er ein redaksjonell designer og front-end utviklar som etter 12 år i
        papiravisbransjen tok steget over i FrontEnd-verda, men mål om å ein dag
        kunne få jobbe med digital historieforteljing
      </p>
      <Link to="/about" className="btn">
        Meir om meg
      </Link>
    </section>
  )
}
