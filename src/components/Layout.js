import React from "react"
import "../styles/global.css"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
