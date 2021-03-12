import React from "react"
import { bio } from "../styles/bio.module.css"
import { Link } from "gatsby"

function Bio() {
  return (
    <article className={bio}>
      <h2>Om Vidar</h2>
      <p>
        Eg har bakgrunn som designer i lokalavisa Kvinnheringen, der eg etter 12
        fantastiske år tok valet om å slutta i jobben for å satse på ei framtid
        innan Frontend-utvikling.
      </p>
      <p>
        Samarbeidet med den dyktige redaksjonen i Kvinnheringen gav grobotn for
        kreativitet og utvikling eg berre kunne drøyma om – noko som resulterte
        i at vi vann prisar i fleire konkurransar i hos mellom andre: "European
        Newspaper Awards", "Society for News Design", "Mediebedriftene" og
        "Landslaget for Lokalaviser"
      </p>
      <p>
        Eg har òg fått mykje erfaring med design og produksjon av anna grafisk
        materiell utanfor den redaksjonelle verda. Eksempel er:
      </p>
      <ul>
        <li>Magasin (både redaksjonelle og marknad</li>
        <li>Prosjektrapportar</li>
        <li>Øl-etikettar</li>
        <li>Logo og profilering</li>
        <li>Logo og profilering</li>
      </ul>
      <p>
        Eg er for tida aktiv jobbsøkar og tar svært gjerne ein uforpliktande
        prat.
      </p>
      <Link to="/" className="btn">
        Ta gjerne kontakt
      </Link>
    </article>
  )
}

export default Bio
