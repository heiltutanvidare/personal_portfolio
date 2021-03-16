import React, { useState } from "react"
import "../styles/global.css"
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  // Toggle nav menu
  const [navOpen, setNavOpen] = useState(false)

  function toggleNav() {
    setNavOpen(!navOpen)
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
