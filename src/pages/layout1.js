import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"

const Layout1 = () => {
  return (
    <Layout>
      <>
        <div className="bg-black">
          <Hero className="z-index-2" />
        </div>
      </>
    </Layout>
  )
}

export default Layout1
