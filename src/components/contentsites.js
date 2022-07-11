import * as React from "react"
import { LinkIcon } from "@heroicons/react/outline"

const supportLinks = [
  {
    name: "Science Museum of Minnesota",
    href: "https://new.smm.org/",
    img: "https://res.cloudinary.com/gravital-digital/image/upload/v1657369529/science-museum-bottom_wztyie.jpg",
  },
  {
    name: "Patreon Blog",
    href: "https://blog.patreon.com//",
    img: "https://res.cloudinary.com/gravital-digital/image/upload/v1657367739/patreon-blog-bottom_kmeduw.jpg",
  },
  {
    name: "Cloudflare Developer Docs",
    href: "https://developers.cloudflare.com//",
    img: "https://res.cloudinary.com/gravital-digital/image/upload/v1657370305/cloudflare-bottom_cwmk6i.jpg",
  },
]

/* This example requires Tailwind CSS v2.0+ */
export default function Contentsites() {
  return (
    <div
      className="max-w-xl container mx-auto my-24 rounded-3xl bg-slate-900"
    >
      <div className="max-w-md sm:max-w-3xl lg:max-w-7xl mx-auto px-4 pt-6 text-center sm:px-6 lg:px-8">
        <div>
          <h2 className="my-6 bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text font-logo font-bold uppercase tracking-wider text-transparent">
            JamStack Showcase
          </h2>
          <p className="lg:text6xl mt-2 font-serif text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
            Content Platforms
          </p>
          <p className="max-w-prose mx-auto mt-5 px-20 font-body text-xl text-slate-50 sm:px-40 md:px-60">
            Content platforms benefit greatly from JamStack's ability to source
            content from almost anywhere making it easy for publishers to edit,
            publish and unpublish on demand.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-12">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="https://res.cloudinary.com/gravital-digital/image/upload/v1657367730/patreon-blog-top_nvfm60.jpg"
            alt="Patreon Blog Homepage"
          />
        </div>
      </div>
      <section
        className="max-w-7xl relative z-10 mx-auto -mt-8 px-4 pb-8 sm:-mt-12 sm:px-6 lg:-mt-16 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
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
