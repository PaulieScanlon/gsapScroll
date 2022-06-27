import * as React from "react"
import { Link } from "gatsby"

{
  /* Based on https://tailwindui.com/components/marketing/sections/heroes the 7th component from the top. */
}

export default function Hero3() {
  return (
    <div className="z-index-0 container relative mx-auto bg-black py-12 px-6 sm:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <div className="relative sm:overflow-hidden">
        <div className="relative px-4 py-2 sm:px-6 sm:py-4 lg:py-6 lg:px-8">
          <h1 className="md:pt-18 pt-6 text-center sm:pt-12 lg:pt-24 xl:pt-36 2xl:pt-48">
            <span className="block pb-2 text-5xl font-bold tracking-tight text-slate-50 sm:pb-4 sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
              Reliability.
            </span>
          </h1>
        </div>
        <div class="px-8 py-8">
          <div class="grid items-start justify-center gap-8">
            <div class="group relative">
              <div class="animate-tilt group-hover:duration-50 absolute -inset-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur transition duration-1000 group-hover:opacity-100"></div>
              <div class="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black leading-none">
                <span class="flex items-center space-x-5">
                  <img
                    className="h-260 mx-auto"
                    src="https://res.cloudinary.com/gravital-digital/image/upload/v1656296903/reliability-final-240_ayaojl.jpg"
                    alt="People working on laptops"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative px-4 py-2 sm:px-8 sm:py-6 lg:py-10 lg:px-8">
          <h3 className="mx-4 mt-6 text-center font-body text-xl italic text-slate-200 sm:mx-12 sm:text-2xl md:mx-16 lg:text-3xl xl:mx-24 2xl:mx-36">
            Our JamStack websites and apps provide a stress-free solution for
            businesses that rely on high uptime, high security yet affordable
            edge hosting on worldwide CDNs to deliver your customers only the
            latest published content.
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
