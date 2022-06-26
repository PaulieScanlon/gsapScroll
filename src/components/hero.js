import * as React from "react"
import { Link } from "gatsby"

{/* Based on https://tailwindui.com/components/marketing/sections/heroes the 7th component from the top. */}

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black" />
      <div className="max-w-6xl mx-auto">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/gravital-digital/image/upload/v1656214904/macbookpro_fexkdx.jpg"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-sky-50 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-22 sm:px-6 sm:py-36 lg:py-48 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Take control of your</span>
              <span className="block text-indigo-200">customer support</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
