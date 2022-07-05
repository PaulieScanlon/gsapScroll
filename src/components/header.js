import * as React from "react"
import { Link } from "gatsby"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Speed", href: "/layout1/" },
  { name: "Flexibility", href: "/layout2/" },
  { name: "Reliability", href: "/layout3/" },
  { name: "Services", href: "/layout4/" },
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
              <span className="sr-only">Gravital Digital</span>
              <img
                className="h-10 w-auto"
                src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png"
                alt="Gravital Digital Logo"
              />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-blue-400 hover:text-amber-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="space-x-4">
            <div className="inline-block">
              <h2 className="ml-4 text-base font-bold uppercase tracking-wider text-sky-500">
                GRAVITAL <span className="text-amber-500">DIGITAL</span>
              </h2>
            </div>
            <a
              href="#"
              className="sm:content hidden rounded-full border border-transparent bg-sky-500 py-2 px-4 text-base font-medium text-slate-50 transition duration-500 hover:bg-sky-800 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 sm:inline-block sm:w-auto"
            >
              Showcase
            </a>
            <a
              href="#"
              className="inline-block rounded-full border border-transparent bg-amber-500 py-2 px-4 text-base font-medium text-slate-50 transition duration-500 hover:bg-amber-800 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 sm:w-auto"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-blue-400 hover:bg-opacity-75 hover:text-amber-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
