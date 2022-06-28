import * as React from "react"
import { Link } from "gatsby"
import { ArrowCircleDownIcon } from "@heroicons/react/solid"

{
  /* Based on https://tailwindui.com/components/marketing/sections/heroes the 7th component from the top. */
}

export default function Hero3() {
  return (
    <div className="container relative mx-auto bg-black px-6 pt-12 pb-48 sm:px-12 lg:px-24 xl:px-36 2xl:px-48">
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
          <h3 className="mt-6 text-center font-body text-xl italic text-slate-200 sm:text-xl lg:text-2xl">
            Our{" "}
            <span className="bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text text-transparent">
              JamStack{" "}
            </span>
            websites and apps provide a stress-free solution for businesses that
            rely on high uptime, tight security yet require affordable edge
            hosting on worldwide CDNs to deliver customers only the latest
            published content.
          </h3>
          <div className="max-w-sm sm:max-w-none mx-auto mt-10 sm:flex sm:justify-center">
            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:gap-5 sm:space-y-0">
              <a
                href="#"
                className="group flex items-center justify-center rounded-full border border-transparent bg-pink-500 px-4 py-3 text-base font-bold text-red-200 shadow-xl shadow-red-700/30 transition-colors duration-300 hover:bg-purple-500 hover:text-slate-200 hover:shadow-purple-700/30 sm:px-8"
              >
                <span className="mr-1">RELIABILITY</span>
                <span>
                  <ArrowCircleDownIcon className="mb-1 h-5 w-5 group-hover:animate-bounce" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
