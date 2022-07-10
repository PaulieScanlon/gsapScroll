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
import Grid2Equal from "../components/grid2equal"
import Grid2left1right from "../components/grid2left1right"
import Grid1left2right from "../components/grid1left2right"
import Traffic from "../components/speedtraffic"
import Conversions from "../components/speedconversions2"
import Servicesanywhere from "../components/servicesanywhere"
import Contentanywhere from "../components/contentanywhere"
import Perfectmarketers from "../components/perfectmarketers"
import ReliableCDN from "../components/reliableCDN"
import Zerozero from "../components/zerozero"
import Zerocosts from "../components/zerocosts"
import Supercharge from "../components/supercharge"
import Contentsites from "../components/contentsites"
import Ecommsites from "../components/ecommsites"
import Servicesites from "../components/servicesites"
import Upgrade from "../components/upgrade"
import Technologies from "../components/technologies"
import Services from "../components/services"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"

const JamstackWebsiteDevelopers = () => {
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
          <Traffic />
          <Conversions />
          <Perfectmarketers />
          <Contentanywhere />
          <Servicesanywhere />
          <ReliableCDN />
          <Zerozero />
          <Zerocosts />
          <Supercharge />
          <Ecommsites />
          <Contentsites />
          <Servicesites />
          <Upgrade />
          <Technologies />
          <Services />
          <Testimonials />
          <Contact />
        </div>
      </>
    </Layout>
  )
}

export default JamstackWebsiteDevelopers
