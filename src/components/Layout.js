import React from "react"
import Header from "./shared/header"
import Footer from "./shared/footer"
import { Helmet } from "react-helmet-async"
import FlashMessages from "./FlashMessages"

import "bootswatch/dist/lux/bootstrap.css"

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title + " - Leanback" : "Welcome"}</title>
        <meta name="description" content={description || "Welcome"} />
      </Helmet>
      <Header />

      <main className="container">
        {children}
        <FlashMessages />
      </main>
      <Footer />
    </>
  )
}

export default Layout
