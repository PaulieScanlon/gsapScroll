import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ScrollButton from "../components/scrollup"
import Hero from "../components/hero"
import Potential from "../components/potential"
import Speed from "../components/speed"
import Flexibility from "../components/flexibility"
import Reliability from "../components/reliability"
import Webuild from "../components/webuild"
import Migrate from "../components/migrate"
import Grid2Equal from "../components/grid2equal"
import Grid2left1right from "../components/grid2left1right"
import Grid1left2right from "../components/grid1left2right"
import Speedtraffic from "../components/speedtraffic"
import Speedconversions from "../components/speedconversions"
import Servicesanywhere from "../components/servicesanywhere"
import Contentanywhere from "../components/contentanywhere"
import Perfectmarketers from "../components/perfectmarketers"
import Zerodowntime from "../components/zerodowntime"
import Zerozero from "../components/zerozero"
import Zerocosts from "../components/zerocosts"
import Supercharge from "../components/supercharge"
import Contentsites from "../components/contentsites"
import Ecommsites from "../components/ecommsites"
import Servicesites from "../components/servicesites"
import Technologies from "../components/technologies"
import Services from "../components/services"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout>
      <>
        <div className="max-w-xl bg-black">
          <Hero className="z-index-2" />
          <ScrollButton />
          <Potential />
          <Speed />
          <Flexibility />
          <Reliability />
          <Webuild />
          <Speedtraffic />
          <Speedconversions />
          <Perfectmarketers />
          <Contentanywhere />
          <Servicesanywhere />
          <Zerodowntime />
          <Zerozero />
          <Zerocosts />
          <Supercharge />
          <Contentsites />
          <Ecommsites />
          <Servicesites />
          <Migrate />
          <Grid2Equal />
          <Grid2left1right />
          <Grid1left2right />
          <Technologies />
          <Services />
          <Testimonials />
          <Contact />
        </div>
      </>
    </Layout>
  )
}

export default IndexPage
