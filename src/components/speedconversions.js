import * as React from "react"

export default function Conversions() {
  return (
    <div className="max-w-xl container mx-auto my-6 rounded-3xl bg-slate-900 bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656977680/orange-background-lt-right_csemyb.jpg')] bg-cover bg-right">
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 lg:px-8 xl:grid-cols-3">
        <div className="md:col-span-1">
          <div className="justify-around pb-0 pt-6 sm:px-6 md:flex md:flex-row md:py-12">
            <div className="sm:flex-shrink">
              <div className="flow-root">
                <h1 className="mt-2 text-5xl font-black text-sky-50 sm:mt-12 md:mt-0 md:text-6xl lg:mt-2 xl:text-7xl">
                  Speed.
                </h1>
                <h1 className="mt-5 text-4xl font-black text-amber-500 sm:mt-10 lg:mt-20 lg:text-5xl xl:text-6xl 2xl:text-7xl ">
                  8%
                </h1>
                <h2 className="font-regular mt-2 text-2xl text-slate-50 sm:text-4xl lg:text-4xl">
                  increase in conversions
                </h2>
                <h1 className="lg:mt-15 mt-3 text-3xl font-bold text-amber-700 sm:mt-7 sm:text-4xl lg:text-5xl">
                  8.4%
                </h1>
                <h2 className="font-regular mt-2 text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  conversions per 100ms for retail sites
                </h2>
                <h1 className="lg:mt-15 mt-3 text-3xl font-bold text-red-500 sm:mt-7 sm:text-4xl lg:text-5xl">
                  10.1%
                </h1>
                <h2 className="font-regular mt-2 text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  conversions per 100ms for travel sites
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <div className="md:py-15 lg:pt-25 justify-around pt-0 pb-6 sm:flex md:flex-row">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <div className="flex justify-start md:justify-around">
                  <div className="grid grid-cols-1">
                    <div className="sm:my-15 my-10 lg:my-20">
                      <img
                        className="h-12"
                        src="https://res.cloudinary.com/gravital-digital/image/upload/v1656384845/small-pan-macmillan-logo-white_yjljlc.svg"
                        alt="Pan Macmillan Logo"
                      />
                    </div>
                    <h3 className="text-regular mb-5 font-mono uppercase tracking-tighter text-slate-50 md:text-2xl lg:text-3xl">
                      Pan Macmillan: +25%
                    </h3>
                    <h3 className="text-regular font-mono uppercase tracking-tight text-slate-50 md:text-2xl lg:text-3xl">
                      Sennheiser: +137%
                    </h3>
                  </div>
                  <div className="sm:mt-15 ml-5 mt-10 lg:ml-0 lg:mt-20">
                    <img
                      className="h-12"
                      src="https://res.cloudinary.com/gravital-digital/image/upload/v1656382519/sennheiser-3-white_es4caj.svg"
                      alt="Pan Macmillan Logo"
                    />
                  </div>
                </div>
                <img
                  className="h-950 inline"
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1656385773/bar-chart-2_i1x6de.png"
                  alt="Bar Graph with rise from JamStack"
                />
                <p className="sm:text-regular mx-auto mt-2 mb-5 text-sm text-slate-50">
                  Source: Netlify "Quantifying the Value of Modern Web
                  Development" slides (May '22). Over a 4 week period and 30M
                  sessions, Google & Deloitte analyzed mobile site data and
                  analytics from 37 retail, travel, luxury and lead generation
                  brands across Europe and the US.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
