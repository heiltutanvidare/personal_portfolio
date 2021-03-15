import React, { useState } from "react"
import "../styles/global.css"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  // Toggle nav menu
  const [navOpen, setNavOpen] = useState(false)

  function toggleNav() {
    setNavOpen(!navOpen)
    console.log(navOpen)
  }

  return (
    <div className="layout">
      <Navbar toggleNav={toggleNav} navOpen={navOpen} />
      <Header toggleNav={toggleNav} navOpen={navOpen} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
