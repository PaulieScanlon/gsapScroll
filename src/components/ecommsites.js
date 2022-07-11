import * as React from "react"
import {
  LinkIcon,
} from "@heroicons/react/outline"

const supportLinks = [
  {
    name: "Preston Studios",
    href: "https://prestonstudios.com/",
    img: "https://res.cloudinary.com/gravital-digital/image/upload/v1657374725/preston-studios-bottom_kphnvm.jpg",
  },
  {
    name: "Little Caesars",
    href: "https://littlecaesars.com/en-us/",
    img: "https://res.cloudinary.com/gravital-digital/image/upload/v1657372307/little-caesars-bottom_ghcfz0.jpg",
  },
  {
    name: "Bear Archery",
    href: "https://www.beararchery.com/",
    img: "https://res.cloudinary.com/gravital-digital/image/upload/v1657374295/bear-archery-bottom_ezprv2.jpg",
  },
]

/* This example requires Tailwind CSS v2.0+ */
export default function Ecommsites() {
  return (
    <div
      className="max-w-xl container mx-auto my-24 rounded-3xl bg-slate-900"
      id="showcase"
    >
      <div className="max-w-md sm:max-w-3xl lg:max-w-7xl mx-auto px-4 pt-6 text-center sm:px-6 lg:px-8">
        <div>
          <h2 className="my-6 bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text font-logo font-bold uppercase tracking-wider text-transparent">
            JamStack Showcase
          </h2>
          <p className="lg:text6xl mt-2 font-serif text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
            Ecommerce Platforms
          </p>
          <p className="max-w-prose mx-auto mt-5 px-20 font-body text-xl text-slate-50 sm:px-40 md:px-60">
            Speed is essential on Ecommerce sites. Studies have consistently
            shown that fast page speed will result in a better conversion rate.
            47% expect the page to load in 2 seconds or less.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-12">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="https://res.cloudinary.com/gravital-digital/image/upload/v1657375237/uag-top_jzfss2.jpg"
            alt="UAB by https://www.vincit.com/"
          />
        </div>
      </div>
      <section
        className="max-w-7xl relative z-10 mx-auto -mt-8 px-4 pb-8 sm:-mt-12 sm:px-6 lg:-mt-16 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <ul
          className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          {supportLinks.map(link => (
            <li key={link.name}>
              <div className="rounded-br-2x l group grid grid-cols-1 gap-y-4 space-y-4 rounded-bl-2xl bg-slate-500 p-4 transition-colors duration-500 hover:bg-slate-400 md:px-8">
                <a
                  href={link.href}
                  className="font-serif text-xl font-bold text-slate-200 transition-colors duration-200 group-hover:text-slate-800"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="rounded-lg object-cover shadow-lg hover:shadow-xl"
                      src={link.img}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center pt-6">
                    <div>{link.name}</div>
                    <LinkIcon className="ml-2 h-6 w-6 transition-colors group-hover:animate-pulse group-hover:text-purple-500" />
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
