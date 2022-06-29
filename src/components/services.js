import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import {
  LightBulbIcon,
  CursorClickIcon,
  DocumentSearchIcon,
} from "@heroicons/react/outline"

const supportLinks = [
  {
    name: "Website Design & Build",
    href: "/#contact",
    description:
      "Have your website designed and built using the latest proven front-end design and development technology. We’re happy to show you how it’s done.",
    icon: LightBulbIcon,
  },
  {
    name: "CMS & API Management",
    href: "/#contact",
    description:
      "Modern websites and apps rely on many services including content systems and third-party data. We help manage these resources effectively.",
    icon: CursorClickIcon,
  },
  {
    name: "Analytics & Data Analysis",
    href: "/#contact",
    description:
      "Collecting and analyzing website and app data is critically important to making informed digital marketing decisions. We’re data experts.",
    icon: DocumentSearchIcon,
  },
]

export default function Services() {
  return (
    <div className="mt-1000 bg-gravital-darker-blue" id="services">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://res.cloudinary.com/gravital-digital/image/upload/v1654196155/gravital-logo-bg_tblilz.jpg"
            alt="Gravital Digital Website Services"
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl relative mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="mt-4 bg-gradient-to-br from-white to-yellow-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block leading-tight">
              Put the power of{" "}
              <span className="lg:text7xl bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text font-sans text-5xl font-black text-transparent sm:text-6xl">
                JamStack{" "}
              </span>
            </span>
            <span className="mb-4 block bg-gradient-to-br from-white via-yellow-500 to-orange-500 bg-clip-text pb-4 leading-tight text-transparent">
              to work on your next project.
            </span>
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-gray-300">
            Realize the potential of your website to deliver blazing speed,
            higher Google rankings, a great user experience, and higher
            conversion rates. We have the full range of services to support
            content marketing and eCommerce driven sites.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="max-w-7xl relative z-10 mx-auto -mt-32 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map(link => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-sky-600 shadow-xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-slate-50 p-5 shadow-lg">
                  <link.icon
                    className="h-6 w-6 text-red-700"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">{link.name}</h3>
                <p className="mt-4 text-base text-sky-200">
                  {link.description}
                </p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gradient-to-r from-purple-900 via-amber-400 to-amber-600 p-6 text-right md:px-8">
                <AnchorLink
                  to={link.href}
                  className="text-base font-bold text-sky-900 hover:text-slate-50"
                >
                  Learn more<span aria-hidden="true"> &rarr;</span>
                </AnchorLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
