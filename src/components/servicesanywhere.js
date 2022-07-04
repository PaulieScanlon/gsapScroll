import * as React from "react"

export default function Example() {
  return (
    <div className="max-w-xl container mx-auto mb-24 mb-6 rounded-3xl bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656900309/flexible-bg-1540_nshjr8.jpg')] bg-cover">
      <div className="grid grid-cols-1 gap-x-6 pt-6 pb-12 md:grid-cols-1 md:pb-16 md:pt-8 lg:grid-cols-3 lg:gap-x-8 lg:py-20 lg:pl-8 xl:grid-cols-3">
        <div className="grid-row-2 col-span-1 lg:col-span-2">
          <div className="md:py-15 lg:pt-25 justify-around pt-8 sm:flex md:flex-row">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <img
                  className="h-950 inline h-max"
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1656901674/computer-logos-605x1071_xzlemo.png"
                  alt="Bar Graph with rise from JamStack"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid-row-2 min-h-full auto-rows-min content-center px-8 md:col-span-1 lg:py-24 2xl:py-40">
          <h1 className="xlg:text-7xl mb-5 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Flexibility.
          </h1>
          <p className="mr-15 text-base font-medium text-white md:text-lg">
            If you've been involved with building complex web projects, you
            understand how hard it can be to choose the right platforms and
            technologies for the task. Now, with{" "}
            <span className="bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text text-transparent">
              Jamstack
            </span>
            , you can have a website with a clear separation of services. The
            front end and backend are decoupled and we use ARPs to run
            server-side processes. You can pick what you need when you need it.
          </p>
        </div>
      </div>
    </div>
  )
}
