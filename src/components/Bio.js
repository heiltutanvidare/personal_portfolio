import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/bio.module.css"
import { Link } from "gatsby"

function Bio() {
  return (
    <article className={styles.bio}>
      <h2>Om Vidar</h2>
      <div className={styles.grid}>
        <figure>
          <StaticImage
            src="../../static/vidar_som_robot.jpg"
            alt="Vidar teikna som ein robot."
            placeholder="blurred"
            layout="fullWidth"
            loading="eager"
          />
          <figcaption>Teikning: Lars Slettebø</figcaption>
        </figure>
        <div className={styles.bioText}>
          <p>
            Eg har bakgrunn som designer i lokalavisa Kvinnheringen, der eg
            etter 12 fantastiske år tok valet om å slutta i jobben for å satse
            på ei digital framtid.
          </p>
          <p>
            Første steget på den nye vegen vart difor studiet
            «FrontEnd-utvikling».
          </p>
          <p>
            Samarbeidet med den dyktige redaksjonen i Kvinnheringen gav grobotn
            for kreativitet og utvikling eg berre kunne drøyma om – noko som
            resulterte i at vi vann prisar i fleire konkurransar i hos mellom
            andre: "European Newspaper Awards", "Society for News Design",
            "Mediebedriftene" og "Landslaget for Lokalaviser"
          </p>
          <p>
            Eg har òg fått mykje erfaring med design og produksjon av anna
            grafisk materiell utanfor den redaksjonelle verda. Eksempel er:
          </p>
          <ul>
            <li>📚 Magasin og bøker</li>
            <li>📃 Prosjektrapportar</li>
            <li>🍻 Øl-etikettar</li>
            <li>🎨 Logo og profilering</li>
            <li>📸 Fotografering</li>
          </ul>
        </div>
        <div className={styles.bioText}>
          <p>
            Eg vaks opp på 90-talet på vestlandet, mellom fjord og fjell i
            idylliske Kvinnherad kommune.
          </p>
          <p>
            Så lenge eg kan hugsa har eg vore glad både det visuelle og det
            tekniske. Helst i kombinasjon. Å seia at eg elskar «gadgets og
            duppedittar» er inga overdriving.
          </p>
          <p>
            Eg bur saman med kjærasten min – Mona – og til hausten skal me to
            blir til tre. Noko me gler oss svært mykje til 👶🏻
          </p>
          <p>
            Eg er for tida aktiv jobbsøkar og tar{" "}
            <Link to="/contact">svært gjerne ein prat.</Link>
          </p>
        </div>

        <figure>
          <StaticImage
            src="../../static/vidar_fjes_02.jpg"
            alt="Vidar sitt fjes"
            placeholder="blurred"
            layout="fullWidth"
            loading="eager"
          />
          <figcaption>
            Eit godt triks for å sjula at håret byrja bli grått: Konverter
            bildet til svart/kvit.
          </figcaption>
        </figure>
      </div>
    </article>
  )
}

export default Bio
