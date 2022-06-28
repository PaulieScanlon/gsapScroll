import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Potential from "../components/potential"
import Speed from "../components/speed"
import Flexibility from "../components/flexibility"
import Reliability from "../components/reliability"
import Migrate from "../components/migrate"
import Benefits from "../components/benefits"
import Grid2left1right from "../components/grid2left1right"
import Grid1left2right from "../components/grid1left2right"
import Full1left2right from "../components/full1left2right"
import Conversions from "../components/conversion"

const Layout1 = () => {
  return (
    <Layout>
      <>
        <div className="max-w-xl bg-black">
          <Hero className="z-index-2" />
          <Potential />
          <Speed />
          <Flexibility />
          <Reliability />
          <Migrate />
          <Full1left2right />
          <Conversions />
          <Migrate />
          <Benefits />
          <Migrate />
          <Grid2left1right />
          <Migrate />
          <Grid1left2right />
          <Migrate />
        </div>
      </>
    </Layout>
  )
}

export default Layout1
