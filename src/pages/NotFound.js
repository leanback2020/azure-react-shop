import React from "react"
import Layout from "../components/Layout"

const NotFound = () => {
  const center = {
    textAlign: "center",
  }

  return (
    <Layout>
      <div style={center}>
        <h1>404</h1>
        <p>Whoops.. can't find this page</p>
      </div>
    </Layout>
  )
}

export default NotFound
