import * as React from "react"

export default function Benefits() {
  return (
    <div className="max-w-xl container mx-auto mb-6 mt-6 rounded-3xl bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656977286/blue-background-lt-left_vzcl5v.jpg')] bg-cover">
      <div className="grid grid-cols-1 gap-x-6 py-6 sm:py-8 md:grid-cols-1 md:py-10 lg:grid-cols-3 lg:gap-x-8 lg:py-0 lg:pl-16 xl:grid-cols-3">
        <div className="grid-row-2 2xl:py-62 min-h-full auto-rows-min px-8 md:col-span-1 py-12 lg:py-24">
          <h1 className="mb-5 justify-self-end text-4xl font-black text-white md:justify-self-end lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Flexibility.
          </h1>
          <h3 className="mb-6 text-xl font-bold text-white lg:text-2xl">
            Content from anywhere
          </h3>
          <p className="mr-15 text-base font-medium text-white md:text-lg">
            <span className="bg-gradient-to-br from-purple-400 to-red-400 bg-clip-text text-transparent">
              Jamstack
            </span>{" "}
            sites are built for modern content development, decoupling content
            from the rest of the framework, allowing content and data to be
            cached and updated at the edge, giving you real-time updates from
            your CMS. We can pull content from traditional CMSs like WordPress
            or Drupal or you can choose to migrate to a modern headless solution
            like Contentful.
          </p>
        </div>

        <div className="grid-row-2 col-span-1 lg:col-span-2">
          <div className="justify-around sm:flex md:flex-row pt-0 lg:py-24">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <img
                  className="h-950 inline h-max"
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1656985313/content-logos-white-331x670_rlxblz.png"
                  alt="CMS logos with Jamstack"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
