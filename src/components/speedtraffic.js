import * as React from "react"

export default function Benefits() {
  return (
    <div className="max-w-xl container mx-auto mt-24 mb-6 rounded-3xl bg-slate-900">
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 lg:px-8 xl:grid-cols-3">
        <div className="md:col-span-1">
          <div className="justify-around pb-0 pt-6 sm:py-0 md:flex md:flex-row md:py-12">
            <div className="sm:flex-shrink">
              <div className="flow-root">
                <h1 className="mt-2 text-5xl font-black text-slate-50 sm:mt-12 sm:text-6xl md:mt-0 lg:mt-2 lg:text-7xl">
                  Speed:
                </h1>
                <h1 className="mt-5 text-4xl font-black text-amber-500 sm:mt-10 sm:text-5xl lg:mt-20 lg:text-6xl">
                  10%
                </h1>
                <h2 className="mt-2 text-3xl font-bold text-slate-50 sm:text-4xl lg:text-5xl">
                  increase in
                </h2>
                <h2 className="mt-2 text-3xl font-bold text-slate-50 sm:text-4xl lg:text-5xl">
                  site traffic
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <div className="md:py-15 lg:pt-25 justify-around pt-0 pb-6 sm:flex md:flex-row">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <div className="flex justify-around">
                  <div className="grid grid-cols-1">
                    <h2 className="mt-20 mb-20 text-3xl font-black text-slate-50 sm:text-5xl">
                      Legacy Stack
                    </h2>
                    <h3 className="text-regular mb-5 font-mono uppercase tracking-tighter text-slate-400 sm:text-2xl md:text-2xl lg:text-3xl">
                      Mobile Lighthouse: +63
                    </h3>
                    <h3 className="text-regular font-mono uppercase tracking-tight text-slate-400 sm:text-2xl md:text-2xl lg:text-3xl">
                      Desktop Lighthouse: +35
                    </h3>
                  </div>
                  <h2 className="mt-20 text-3xl font-black text-slate-50 sm:text-5xl">
                    JamStack
                  </h2>
                </div>
                <img
                  className="h-950 inline"
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1656372032/bar-chart_twraww.png"
                  alt="Bar Graph with rise from JamStack"
                />
                <p className="text-regular mx-auto mt-2 mb-5 text-slate-50">
                  Source: Netlify "Quantifying the Value of Modern Web
                  Development" slides (May '22).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
