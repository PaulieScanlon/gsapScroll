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
        <div className="relative px-4 sm:px-6 sm:py-36 lg:py-48 lg:px-8">
          <h1 className="pt-48 text-center text-4xl font-extrabold tracking-tight sm:pt-16 sm:text-4xl md:pt-28 lg:pt-36 lg:text-6xl xl:pt-48 2xl:pt-60">
            <span className="block bg-gradient-to-br from-purple-400 to-red-500 bg-clip-text pb-12 text-9xl font-black tracking-tight text-transparent">
              Blazing Fast!
            </span>
          </h1>
          <h2 className="pt-12 text-center">
            <span className="font-sans text-4xl font-bold tracking-tighter text-sky-600">
              Gravital
            </span>
            {""}
            <span className="font-sans text-4xl font-bold tracking-tighter text-amber-600">
              Digital
            </span>
          </h2>
          <h3 className="mx-6 mx-auto mt-6 text-center font-body text-2xl italic text-slate-200 sm:mx-12 xl:mx-48 2xl:mx-60">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </h3>
          <div className="max-w-sm sm:max-w-none mx-auto mt-10 sm:flex sm:justify-center">
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
          </div>
        </div>
      </div>
    </div>
  )
}
