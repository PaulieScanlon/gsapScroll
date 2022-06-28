import * as React from "react"

export default function Benefits() {
  return (
    <div className="max-w-xl container mx-auto my-24 rounded-3xl bg-slate-900">
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 lg:px-8 xl:grid-cols-3">
        <div className="md:col-span-1">
          <div className="justify-around pb-0 pt-6 sm:flex sm:flex-row md:py-6">
            <div className="sm:flex-shrink">
              <div className="flow-root">
                <h1 className="mt-2 pt-7 text-7xl font-black text-slate-50">
                  Speed:
                </h1>
                <h1 className="mt-20 text-5xl font-black text-slate-50">10%</h1>
                <h2 className="mt-2 text-5xl font-bold text-slate-50">
                  increase
                </h2>
                <h2 className="mt-2 text-5xl font-bold text-slate-50">
                  in traffic
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
                    <h2 className="mt-20 mb-20 text-5xl font-black text-slate-50">
                      Legacy Stack
                    </h2>
                    <h3 className="font-regular mb-5 font-mono text-3xl tracking-tighter text-slate-400">
                      Mobile Lighthouse: +63
                    </h3>
                    <h3 className="font-regular font-mono text-3xl tracking-tight text-slate-400">
                      Desktop Lighthouse: +35
                    </h3>
                  </div>
                  <h2 className="mt-20 text-5xl font-black text-slate-50">
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
