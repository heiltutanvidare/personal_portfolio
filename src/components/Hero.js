import React from "react"
import * as heroStyles from "../styles/hero.module.css"

export default function Hero({ children }) {
  return <section className={heroStyles.hero}>{children}</section>
}
