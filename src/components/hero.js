import * as React from "react"
import { Link } from "gatsby"

{
  /* Based on https://tailwindui.com/components/marketing/sections/heroes the 7th component from the top. */
}

export default function Hero3() {
  return (
    <div className="z-index-0 container relative mx-auto bg-black py-12 px-6 sm:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <div className="relative sm:overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-598 w-full object-cover"
            src="https://res.cloudinary.com/gravital-digital/image/upload/v1656279796/warp_lbfmqf.jpg"
            alt="People working on laptops"
          />
        </div>
        <div className="relative px-4 pt-40 sm:px-6 sm:pt-36 lg:px-8 lg:pt-48">
          <h1 className="pt-6 text-center sm:pt-16 md:pt-28 lg:pt-36 xl:pt-48 2xl:pt-60">
            <span className="block bg-gradient-to-br from-purple-700 to-red-700 bg-clip-text pb-2 text-5xl font-black tracking-tight text-transparent sm:pb-4 sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl">
              Blazing Fast!
            </span>
          </h1>
          <h2 className="pt-2 text-center sm:pt-4 md:pt-6 lg:pt-6 xl:pt-8 2xl:pt-12">
            <span className="font-sans text-xl font-bold tracking-tighter text-sky-600 sm:text-2xl md:text-3xl lg:text-4xl">
              Gravital
            </span>
            {""}
            <span className="font-sans text-xl text-4xl font-bold tracking-tighter text-amber-600 sm:text-2xl md:text-3xl lg:text-4xl">
              Digital
            </span>
          </h2>
          <h3 className="mx-4 mt-6 text-center font-body text-xl italic text-slate-200 sm:mx-12 sm:text-2xl md:mx-16 lg:text-3xl xl:mx-24 2xl:mx-36">
            Whether you have a content marketing website or a full eCommerce
            app, Gravital Digital can help you realize faster load times that
            crush SEO and serve the best user experience with proven JamStack
            technology.
          </h3>
          {/* <div className="max-w-sm sm:max-w-none mx-auto mt-10 sm:flex sm:justify-center">
            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
              >
                Get started
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
              >
                Live demo
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
