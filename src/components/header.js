import * as React from "react"
import { Link } from "gatsby"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Layout 1", href: "/layout1/" },
  { name: "Layout 2", href: "/layout2/" },
  { name: "Layout 3", href: "/layout3/" },
  { name: "Layout 4", href: "/layout4/" },
]

export default function Header() {
  return (
    <header className="z-index-1 relative sticky top-0 bg-slate-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-slate-700 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Gravital</span>
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
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-slate-500 py-2 px-4 text-base font-medium text-slate-50 hover:bg-slate-50 hover:text-amber-500"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-slate-50 py-2 px-4 text-base font-medium text-slate-600 hover:bg-slate-500 hover:text-sky-400"
            >
              Sign up
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
