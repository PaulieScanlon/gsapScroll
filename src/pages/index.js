import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <Layout>
      <section className="text-center">
        <div>
          <img
            className="mx-auto max-h-60 pt-12"
            src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png"
            alt="Gravital Digital Logo"
          />
        </div>
        <div className="pt-6 pb-12 font-sans text-7xl font-black tracking-tighter">
          <span className="text-sky-600">Gravital</span>{" "}
          <span className="text-amber-600">Digital</span>{" "}
          <span className="text-sky-600">Branding</span>
        </div>

        {/* Divider */}
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-slate-500" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white py-3 px-3 text-lg font-medium text-slate-900">
              FONTS
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 divide-y divide-neutral-200 overflow-hidden rounded-lg bg-white pb-6 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-sans text-4xl font-medium">
                <span className="font-bold underline underline-offset-4">
                  Sans
                </span>
                : Interstate medium 4xl h1
              </h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="font-sans text-base font-medium">
                font-sans font-medium (500) text-base
              </div>
              <div className="font-sans text-2xl font-bold">
                font-sans font-bold (700) text-2xl
              </div>
              <div className="font-sans text-5xl font-black tracking-tight">
                font-sans font-black (900) text-5xl tracking-tight
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 divide-y divide-neutral-200 overflow-hidden rounded-lg bg-white pb-6 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-serif text-4xl font-bold">
                <span className="font-bold underline underline-offset-4">
                  Serif
                </span>
                : FF Meta Serif Pro bold 4xl h1
              </h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="font-book font-serif text-base">
                font-serif font-book (500) text-base
              </div>
              <div className="font-book font-serif text-base italic">
                font-serif font-book (500) text-2xl italic
              </div>
              <div className="font-serif text-5xl font-bold italic tracking-tight">
                font-serif font-bold (700) text-5xl tracking-tight italic
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 divide-y divide-neutral-200 overflow-hidden rounded-lg bg-white pb-6 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-Container text-4xl font-bold">
                <span className="font-bold underline underline-offset-4">
                  Body
                </span>
                : Open Sans bold (700) 4xl h1
              </h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="font-body text-base font-normal">
                font-body font-normal (400) text-base
              </div>
              <div className="font-body text-base font-normal italic">
                font-body font-normal (400) text-2xl italic
              </div>
              <div className="font-body text-5xl font-bold italic tracking-tight">
                font-body font-bold (700) text-5xl tracking-tight italic
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 divide-y divide-neutral-200 overflow-hidden rounded-lg bg-white pb-6 shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-regular font-mono text-4xl">
                <span className="font-bold underline underline-offset-4">
                  Mono
                </span>
                : Regular (400) 4xl h1
              </h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="font-regular font-mono text-base tracking-tight">
                font-mono font-regular (400) text-base tracking-tight
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtitle */}
      <div className="py-12 text-center font-sans text-5xl font-black tracking-tighter">
        Color Palette
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white py-3 px-3 text-lg font-medium text-slate-900">
            Neutrals
          </span>
        </div>
      </div>

      {/* Color Palette - Slate */}
      <div className="max-w-7xl mx-auto bg-white py-12 sm:px-6 lg:px-8">
        <p className="mx-24 text-center font-serif text-2xl">
          These are the colors you will use the most and will make up the
          majority of your UI. Use them for most of your text, backgrounds, and
          borders, as well as for things like secondary buttons and links.
        </p>

        <div className="shrink-0">
          <div className="flex h-10 flex-col justify-center">
            <div className="text-xl font-bold text-slate-900">
              Slate-[number]
            </div>
          </div>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                50
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FAFAFA</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                100
              </div>
              <div className="font-mono lowercase text-slate-500 ">#F5F5F5</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-200"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                200
              </div>
              <div className="font-mono lowercase text-slate-500 ">#E5E5E5</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-300"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                300
              </div>
              <div className="font-mono lowercase text-slate-500 ">#D4D4D4</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-400"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                400
              </div>
              <div className="font-mono lowercase text-slate-500 ">#A3A3A3</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-500"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                500
              </div>
              <div className="font-mono lowercase text-slate-500 ">#737373</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-600"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                600
              </div>
              <div className="font-mono lowercase text-slate-500 ">#525252</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-700"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                700
              </div>
              <div className="font-mono lowercase text-slate-500 ">#404040</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-800"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                800
              </div>
              <div className="font-mono lowercase text-slate-500 ">#262626</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-slate-900"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                900
              </div>
              <div className="font-mono lowercase text-slate-500 ">#171717</div>
            </div>
          </div>
        </div>
        <p className="mx-48 mt-12 text-center font-mono text-xl">
          <span className="font-bold underline underline-offset-4">
            Section Container 1.
          </span>{" "}
          Full-width on mobile, constrained with padded content above.
          "max-w-7xl mx-auto sm:px-6 lg:px-8" NOTE: Added py-12'
        </p>
      </div>

      {/* Divider - Primary Amber*/}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white py-3 px-3 text-lg font-medium text-slate-900">
            Amber Primary
          </span>
        </div>
      </div>

      {/* Color Palette - Primary Amber */}
      <div className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
        <p className="mx-24 text-center font-serif text-2xl">
          These are the splashes of color that should appear the most in your
          UI, and are the ones that determine the overall "look" of the site.
          Use these for things like primary actions, links, navigation items,
          icons, accent borders, or text you want to emphasize.
        </p>

        <div className="shrink-0">
          <div className="flex h-10 flex-col justify-center">
            <div className="text-xl font-bold text-slate-900">
              Amber-[number]
            </div>
          </div>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                50
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FEFCE8</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                100
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FEF9C3</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-200"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                200
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FEF08A</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-300"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                300
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FDE047</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-400"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                400
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FACC15</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-500"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full">
                500
              </div>
              <div className="font-mono lowercase text-slate-500 ">#EAB308</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-600"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                600
              </div>
              <div className="font-mono lowercase text-slate-500 ">#CA8A04</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-700"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                700
              </div>
              <div className="font-mono lowercase text-slate-500 ">#A16207</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-800"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                800
              </div>
              <div className="font-mono lowercase text-slate-500 ">#854D0E</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-amber-900"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                900
              </div>
              <div className="font-mono lowercase text-slate-500 ">#713F12</div>
            </div>
          </div>
        </div>
        <p className="mx-48 mt-12 text-center font-mono text-xl">
          <span className="font-bold underline underline-offset-4">
            Section Container 2.
          </span>{" "}
          Constrained with padded content. "max-w-7xl mx-auto px-4 sm:px-6
          lg:px-8" NOTE: Added py-12.
        </p>
      </div>

      {/* Divider - Primary Sky Blues*/}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white py-3 px-3 text-lg font-medium text-slate-900">
            Blue Primary
          </span>
        </div>
      </div>

      {/* Color Palette - Primary Sky Blues */}
      <div className="container mx-auto bg-white py-12 sm:px-6 lg:px-8">
        <p className="mx-24 text-center font-serif text-2xl">
          These are the splashes of color that should appear the most in your
          UI, and are the ones that determine the overall "look" of the site.
          Use these for things like primary actions, links, navigation items,
          icons, accent borders, or text you want to emphasize.
        </p>

        <div className="w-16 shrink-0">
          <div className="flex h-10 flex-col justify-center">
            <div className="text-xl font-bold text-slate-900">Sky-[number]</div>
          </div>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                50
              </div>
              <div className="font-mono lowercase text-slate-500 ">#F0F9FF</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                100
              </div>
              <div className="font-mono lowercase text-slate-500 ">#E0F2FE</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-200"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                200
              </div>
              <div className="font-mono lowercase text-slate-500 ">#BAE6FD</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-300"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                300
              </div>
              <div className="font-mono lowercase text-slate-500 ">#7DD3FC</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-400"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                400
              </div>
              <div className="font-mono lowercase text-slate-500 ">#38BDF8</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-500"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full">
                500
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0EA5E9</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-600"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                600
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0284C7</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-700"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                700
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0369A1</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-800"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                800
              </div>
              <div className="font-mono lowercase text-slate-500 ">#075985</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-sky-900"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                900
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0C4A6E</div>
            </div>
          </div>
        </div>
        <p className="mx-48 mt-12 text-center font-mono text-xl">
          <span className="font-bold underline underline-offset-4">
            Section Container 3.
          </span>{" "}
          Full-width on mobile, constrained to breakpoint with padded content
          above mobile. This keeps everything to the same width at each
          breakpoint vs. smoothly increasing and decreasing the size of elements
          enclosed by the container. "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          NOTE: Added pt-12.
        </p>
      </div>

      {/* Divider - Supporting Reds */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white py-3 px-3 text-lg font-medium text-slate-900">
            Supporting Reds
          </span>
        </div>
      </div>

      {/* Color Palette - Supporting Reds */}
      <div className="container mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
        <p className="mx-24 text-center font-serif text-2xl">
          These colors should be used fairly conservatively throughout your UI
          to avoid overpowering your primary colors. Use them when you need an
          element to stand out, or to reinforce things like error states or
          positive trends with the appropriate semantic color.
        </p>
        <div className="shrink-0">
          <div className="flex h-10 flex-col justify-center">
            <div className="text-xl font-bold text-slate-900">Red-[number]</div>
          </div>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                50
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FEF2F2</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                100
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FEE2E2</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-200"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                200
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FECACA</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-300"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                300
              </div>
              <div className="font-mono lowercase text-slate-500 ">#FCA5A5</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-400"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                400
              </div>
              <div className="font-mono lowercase text-slate-500 ">#F87171</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-500"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full">
                500
              </div>
              <div className="font-mono lowercase text-slate-500 ">#EF4444</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-600"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                600
              </div>
              <div className="font-mono lowercase text-slate-500 ">#DC2626</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-700"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                700
              </div>
              <div className="font-mono lowercase text-slate-500 ">#B91C1C</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-800"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                800
              </div>
              <div className="font-mono lowercase text-slate-500 ">#991B1B</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-red-900"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                900
              </div>
              <div className="font-mono lowercase text-slate-500 ">#7F1D1D</div>
            </div>
          </div>
        </div>
        <p className="mx-48 mt-12 text-center font-mono text-xl">
          <span className="font-bold underline underline-offset-4">
            Section Container 4.
          </span>{" "}
          Constrained to breakpoint with padded content. See notes above. Just
          adds padding to mobile. "container mx-auto px-4 sm:px-6 lg:px-8" NOTE:
          Added py-12
        </p>
      </div>

      {/* Divider - Supporting Purples*/}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white py-3 px-3 text-lg font-medium text-slate-900">
            Supporting Purples
          </span>
        </div>
      </div>

      {/* Color Palette - Supporting Purples */}
      <div className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
        <p className="mx-24 text-center font-serif text-2xl">
          These colors should be used fairly conservatively throughout your UI
          to avoid overpowering your primary colors. Use them when you need an
          element to stand out, or to reinforce things like error states or
          positive trends with the appropriate semantic color.
        </p>

        <div className="shrink-0">
          <div className="flex h-10 flex-col justify-center">
            <div className="text-xl font-bold text-slate-900">
              Purple-[number]
            </div>
          </div>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2">
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-50"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                50
              </div>
              <div className="font-mono lowercase text-slate-500 ">#F0FDFA</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-100"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                100
              </div>
              <div className="font-mono lowercase text-slate-500 ">#CCFBF1</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-200"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                200
              </div>
              <div className="font-mono lowercase text-slate-500 ">#99F6E4</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-300"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                300
              </div>
              <div className="font-mono lowercase text-slate-500 ">#5EEAD4</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-400"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                400
              </div>
              <div className="font-mono lowercase text-slate-500 ">#2DD4BF</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-500"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full">
                500
              </div>
              <div className="font-mono lowercase text-slate-500 ">#14B8A6</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-600"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                600
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0D9488</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-700"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                700
              </div>
              <div className="font-mono lowercase text-slate-500 ">#0F766E</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-800"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                800
              </div>
              <div className="font-mono lowercase text-slate-500 ">#115E59</div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-10 w-full rounded bg-purple-900"></div>
            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
              <div className="w-6 font-medium text-slate-900 2xl:w-full ">
                900
              </div>
              <div className="font-mono lowercase text-slate-500 ">#134E4A</div>
            </div>
          </div>
        </div>
        <p className="mx-48 mt-12 text-center font-mono text-xl">
          <span className="font-bold underline underline-offset-4">
            Section Container 5.
          </span>{" "}
          Narrow constrained with padded content. Not a container, so goes down
          to mobile smoothly from what looks like iPad size "max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8" NOTE: Added py-12
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
