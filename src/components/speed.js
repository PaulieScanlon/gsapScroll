import * as React from "react"
import { Link } from "gatsby"
import { ArrowCircleDownIcon } from "@heroicons/react/solid"
import { AnchorLink } from "gatsby-plugin-anchor-links"

{
  /* Based on https://tailwindui.com/components/marketing/sections/heroes the 7th component from the top. */
}

export default function Speed() {
  return (
    <div className="z-index-0 xlg:my-16 container relative mx-auto my-6 bg-black px-6 sm:my-10 sm:px-12 lg:my-12 lg:px-24 xl:px-36 2xl:px-48">
      <div className="relative sm:overflow-hidden">
        <div className="relative px-4 py-2 sm:px-6 sm:py-4 lg:py-6 lg:px-8">
          <h1 className="md:pt-18 pt-6 text-center sm:pt-12 lg:pt-24 xl:pt-36 2xl:pt-48">
            <span className="block pb-2 text-5xl font-bold tracking-tight text-slate-50 sm:pb-4 sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
              Speed.
            </span>
          </h1>
        </div>
        <div class="px-8 py-8">
          <div class="grid items-start justify-center gap-8">
            <div class="group relative">
              <div class="animate-tilt group-hover:duration-50 absolute -inset-4 rounded-lg bg-gradient-to-r from-pink-600 to-sky-600 opacity-60 blur transition duration-1000 group-hover:opacity-100"></div>
              <div class="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black leading-none">
                <span class="flex items-center space-x-5">
                  <img
                    className="h-240 mx-auto"
                    src="https://res.cloudinary.com/gravital-digital/image/upload/v1656296469/speed-final-240_tkkamc.jpg"
                    alt="People working on laptops"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative px-4 py-2 sm:px-8 sm:py-6 lg:py-10 lg:px-8">
          <h3 className="mt-6 text-center font-body text-xl italic text-slate-200 sm:text-xl lg:text-2xl xl:text-3xl">
            <span className="bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text text-transparent">
              JamStack{" "}
            </span>
            gives us the tools needed to push site performance to sub-three-second load
            times for the highest Google rankings and smoothest content & data loading
            interfaces possible while hosted on the Edge throughout world.
          </h3>
          <div className="max-w-sm sm:max-w-none mx-auto mt-10 sm:flex sm:justify-center">
            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:gap-5 sm:space-y-0">
              <AnchorLink
                to="./#speed"
                title="Speed"
                className="group flex items-center justify-center rounded-full border border-transparent bg-sky-500 px-4 py-3 text-base font-bold text-sky-200 shadow-xl shadow-sky-700/30 transition duration-700 hover:bg-pink-500 hover:text-slate-200 hover:shadow-red-700/30 sm:px-8"
              >
                <span className="mr-1">SPEED</span>
                <span>
                  <ArrowCircleDownIcon className="mb-1 h-5 w-5 group-hover:animate-bounce group-hover:text-sky-50" />
                </span>
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
