import * as React from "react"

export default function Zerocosts() {
  return (
    <div className="max-w-xl container mx-auto my-6 rounded-3xl bg-slate-900 bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656980624/background-light-right_xfsxax.jpg')] bg-cover bg-right">
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 lg:px-8 xl:grid-cols-3">
        <div className="md:col-span-1">
          <div className="pb-0 pt-6 sm:px-6 md:flex md:flex-row md:py-12">
            <div className="sm:flex-shrink">
              <div className="flow-root">
                <h1 className="text-5xl font-black text-sky-50 sm:mt-12 md:mt-0 md:text-6xl xl:text-7xl">
                  Reliability.
                </h1>
                <h1 className="mt-5 font-sans text-4xl font-bold text-amber-500 sm:mt-10 lg:mt-20 lg:text-5xl xl:text-6xl 2xl:text-7xl ">
                  $0
                </h1>
                <h2 className="mt-2 font-sans text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  CDN host / mo.
                </h2>
                <h1 className="lg:mt-15 mt-3 font-sans text-3xl font-bold text-amber-700 sm:mt-7 sm:text-4xl lg:text-5xl">
                  $19
                </h1>
                <h2 className="mt-2 font-sans text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  CDN at scale / mo.
                </h2>
                <h1 className="lg:mt-15 mt-3 font-sans text-3xl font-bold text-red-500 sm:mt-7 sm:text-4xl lg:text-5xl">
                  40%
                </h1>
                <h2 className="font-regular mt-2 font-sans text-2xl text-slate-50 sm:text-3xl lg:text-4xl">
                  savings on IT budget
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
                    <h2 className="my-1 font-body text-xl font-bold text-sky-50 sm:my-16 sm:mt-12 sm:text-3xl lg:my-14 lg:text-4xl">
                      Legacy Stack
                    </h2>
                  </div>
                  <h2 className="lg:ml-22 my-0 ml-24 text-xl font-bold text-sky-50 sm:my-11 sm:ml-44 sm:text-2xl md:ml-24 lg:my-12 lg:text-3xl xl:ml-10">
                    vs.{" "}
                    <span className="bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text pr-1 font-logo text-2xl font-black tracking-normal text-transparent sm:text-4xl lg:text-5xl">
                      JamStack{" "}
                    </span>
                  </h2>
                </div>
                <img
                  className="h-950 inline"
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1656980493/stack-comparison_wla4zz.png"
                  alt="Legacy hosting vs. Jamstack"
                />
                <p className="sm:text-regular mx-auto mt-2 mb-5 font-body text-sm text-slate-50">
                  Source: Enterprise MACHified report Developed in January 2022,
                  commissioned by the MACH Alliance Executed by M·E·L Research
                  as presented in the Netlify "Quantifying the Value of Modern
                  Web Development" slides (May '22) and special thanks to
                  jamstack.org for the stack comparison image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
