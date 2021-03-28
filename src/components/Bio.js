import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/bio.module.css"
import { Link } from "gatsby"

function Bio() {
  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(".animImg--one, .animImg--three", {
      opacity: 0,
      x: 150,
    })

    var tl = gsap.timeline()

    tl.to(".animImg--one", {
      scrollTrigger: {
        trigger: ".animImg--one",
        start: "top center", // when the top of the trigger hits the center of the viewport
        end: "top top",
        toggleActions: "restart pause reverse pause",
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      rotate: "-4",
      opacity: 1,
      scale: 0.9,
      x: 0,
    })
      .to(".animImg--two", {
        scrollTrigger: {
          trigger: ".animImg--two",
          start: "top bottom", // when the top of the trigger hits the center of the viewport
          end: "center center",
          toggleActions: "restart pause reverse pause",
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
        rotate: "4",
        opacity: 1,
        scale: 0.9,
      })
      .to(".animImg--three", {
        scrollTrigger: {
          trigger: ".animImg--three",
          start: "top center", // when the top of the trigger hits the center of the viewport
          end: "top top",
          toggleActions: "restart pause reverse pause",
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
        rotate: "-4",
        opacity: 1,
        scale: 0.9,
        x: 0,
      })

    const bioTexts = gsap.utils.toArray(".animBioText")
    bioTexts.forEach(bio => {
      gsap.set(bio, {
        opacity: 0,
      })
      gsap.to(bio, {
        opacity: 1,
        scrollTrigger: {
          trigger: bio,
          scrub: 1,
          toggleActions: "restart pause reverse pause",
          end: "top center",
        },
      })
    })
  }, [])

  return (
    <article className={styles.bio}>
      <h2>Om Vidar</h2>
      <div className={styles.grid}>
        <figure className="animImg--one">
          <StaticImage
            src="../../static/vidar_som_robot.jpg"
            alt="Vidar teikna som ein robot."
            placeholder="blurred"
            loading="eager"
          />
          <figcaption>Teikning: Lars Slettebø</figcaption>
        </figure>
        <div className={`${styles.bioText} animBioText`}>
          <p>
            Eg har bakgrunn som designar i lokalavisa Kvinnheringen, der eg
            etter 12 fantastiske år tok valet om å slutte i jobben for å satse
            på ei meir digital framtid. Første steget på den nye vegen vart
            difor studiet «Frontend-utvikling».
          </p>
          <p>
            Samarbeidet med den dyktige redaksjonen i Kvinnheringen gav grobotn
            for kreativitet og utvikling eg berre kunne drøyma om – noko som
            resulterte i at me vann prisar i fleire konkurransar hos mellom
            andre: "European Newspaper Awards", "Society for News Design",
            "Mediebedriftene" og "Landslaget for Lokalaviser"
          </p>
        </div>
        <div className={`${styles.bioText} animBioText`}>
          <p>
            Eg har òg fått mykje erfaring med design og produksjon av anna
            grafisk materiell. Eksempel er:
          </p>
          <ul>
            <li>
              <span role="img" aria-label="stacked books emoji">
                📚
              </span>{" "}
              Magasin og bøker
            </li>
            <li>
              <span role="img" aria-label="curled paper emoji">
                📃
              </span>{" "}
              Prosjektrapportar
            </li>
            <li>
              <span role="img" aria-label="Beer glasses emoji">
                🍻
              </span>{" "}
              Etikettar
            </li>
            <li>
              <span role="img" aria-label="color palette emoji">
                🎨
              </span>{" "}
              Logo og profilering
            </li>
            <li>
              <span role="img" aria-label="camera emoji">
                📸
              </span>{" "}
              Fotografering
            </li>
          </ul>
        </div>

        <figure className="animImg--two">
          <StaticImage
            src="../../static/vidaristudio.jpg"
            alt="Vidar i fotostudio, der han ofte fotograferte noko til å bruka kreativt i ein reportasje eller eit prosjekt"
            placeholder="blurred"
            loading="lazy"
          />
          <figcaption>
            Eit fotostudio kom svært godt med i fleire av prosjekta.
          </figcaption>
        </figure>

        <figure className="animImg--three">
          <StaticImage
            src="../../static/vidar_fjes_02.jpg"
            alt="Vidar sitt fjes"
            placeholder="blurred"
            loading="lazy"
          />
          <figcaption>
            Eit godt triks for å skjula at håret byrja bli grått: Konverter
            bildet til svart/kvit.
          </figcaption>
        </figure>
        <div className={`${styles.bioText} animBioText`}>
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
            Eg håpar å kunne jobbe med – og utvikla meg – innan design og ny
            teknologi i resten av mitt yrkesaktive liv.
          </p>
          <p>
            Eg bur saman med kjærasten min – Mona – og til hausten skal me to
            bli til tre. Noko me gler oss svært mykje til{" "}
            <span role="img" aria-label="baby emoji">
              👶🏻
            </span>
          </p>
          <p>
            Eg er for tida aktiv jobbsøkjar og tar{" "}
            <Link to="/contact">svært gjerne ein prat.</Link>
          </p>
        </div>
      </div>
    </article>
  )
}

export default Bio
