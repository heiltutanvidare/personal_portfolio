import React, { useEffect } from "react"
import { gsap } from "gsap"
import * as heroStyles from "../styles/hero.module.css"

export default function Hero({ children }) {
  // GSAP Animations
  useEffect(() => {
    gsap.fromTo(
      "h1",
      {
        opacity: 0,
        y: "100px",
        rotate: "7deg",
      },
      {
        opacity: 1,
        y: "0px",
        rotate: "0deg",
        delay: 1,
      }
    )
  }, [])

  return <section className={heroStyles.hero}>{children}</section>
}
