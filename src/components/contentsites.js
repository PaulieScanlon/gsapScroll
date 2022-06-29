import * as React from "react"

/* This example requires Tailwind CSS v2.0+ */
export default function Contentsites() {
  return (
    <div className="max-w-xl container mx-auto my-24 rounded-3xl bg-slate-900">
      <div className="max-w-md sm:max-w-3xl lg:max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div>
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">
            Serverless
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            No server? No problem.
          </p>
          <p className="max-w-prose mx-auto mt-5 text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
