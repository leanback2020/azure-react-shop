import React from "react"
import Layout from "../components/Layout"
import { GitHubIcon } from "../components/icons"

const About = () => {
  return (
    <Layout title="About" description="This is the About page">
      <div className="text-center mt-5">
        <h1>About</h1>

        <p>
          This project was built for practice purposes using <strong>Context API</strong> by React.
        </p>
        <p className="lead text-muted">Lorem Ipsum</p>

        <a className="btn btn-primary" href="https://github.com/leanback2020/azure-react-shop">
          <GitHubIcon width={"18px"} /> <span className="ml-2 mr-4">Visit Repo</span>
        </a>
      </div>
    </Layout>
  )
}

export default About
