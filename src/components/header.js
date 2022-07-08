import * as React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Speed", href: "./#speed" },
  { name: "Flexibility", href: "./#flexibility" },
  { name: "Reliability", href: "./#reliability" },
  { name: "Services", href: "./#services" },
]

export default function Header() {
  return (
    <header className="relative top-0 bg-slate-900">
      <nav
        className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="flex w-full items-center justify-between border-b border-slate-700 py-3 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only font-logo">Gravital Digital</span>
              <img
                className="h-10 w-auto"
                src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png"
                alt="Gravital Digital Logo"
              />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map(link => (
                <AnchorLink
                  key={link.name}
                  title={link.name}
                  to={link.href}
                  className="font-body text-base font-bold text-blue-400 hover:text-amber-500"
                >
                  {link.name}
                </AnchorLink>
              ))}
            </div>
          </div>
          <div className="space-x-4">
            <div className="inline-block">
              <h2 className="ml-4 font-logo text-base font-black uppercase tracking-wider text-sky-500">
                GRAVITAL<span className="text-amber-500">DIGITAL</span>
              </h2>
            </div>
            <AnchorLink
              to="./#showcase"
              title="Showcase"
              className="font-body sm:content hidden rounded-full border border-transparent bg-sky-500 py-2 px-4 text-base font-normal text-slate-50 transition duration-500 hover:bg-sky-800 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 sm:inline-block sm:w-auto"
            >
              Showcase
            </AnchorLink>
            <AnchorLink
              to="./#contact"
              title="Contact"
              className="font-body inline-block rounded-full border border-transparent bg-amber-500 py-2 px-4 text-base font-normal text-slate-50 transition duration-500 hover:bg-amber-800 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 sm:w-auto"
            >
              Contact
            </AnchorLink>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map(link => (
            <AnchorLink
              key={link.name}
              title={link.name}
              to={link.href}
              className="font-body text-base font-bold text-blue-400 hover:text-amber-500"
            >
              {link.name}
            </AnchorLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
