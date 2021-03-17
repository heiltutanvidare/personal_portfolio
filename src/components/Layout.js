import React from "react"
import "../styles/global.css"
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"

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
