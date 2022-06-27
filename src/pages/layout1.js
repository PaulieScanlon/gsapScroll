import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Speed from "../components/speed"
import Flexibility from "../components/flexibility"
import Reliability from "../components/reliability"

const Layout1 = () => {
  return (
    <Layout>
      <>
        <div className="bg-black">
          <Hero className="z-index-2" />
          <Speed />
          <Flexibility />
          <Reliability />
        </div>
      </>
    </Layout>
  )
}

export default Layout1
