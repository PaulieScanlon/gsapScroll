import * as React from "react"

export default function Example() {
  return (
    <div className="max-w-xl h-156 container row-start-1 mx-auto mb-6 rounded-3xl bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656900309/flexible-bg-1540_nshjr8.jpg')] bg-cover">
      <div className="grid grid-cols-1 gap-x-6 pb-6 pr-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:pr-8 xl:grid-cols-3">
        <div className="grid-row-2 col-span-1 lg:col-span-2">
          <div className="md:py-15 lg:pt-25 justify-around pt-8 sm:flex md:flex-row">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <img
                  className="h-950 inline"
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1656901674/computer-logos-605x1071_xzlemo.png"
                  alt="Bar Graph with rise from JamStack"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:ml-15 grid-row-2 min-h-full auto-rows-min px-8 md:col-span-1">
          <div className="pb-6 pt-6 sm:py-0 md:flex md:flex-row md:py-12 md:pr-12">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <div className="flex justify-start">
                  <div className="grid grid-cols-1">
                    <h1 className="xlg:text-6xl mt-2 mb-5 text-3xl font-black text-purple-400 sm:mt-12 md:mt-0 md:text-4xl lg:mt-2 lg:text-5xl">
                      Flexibility:
                    </h1>
                    <p className="mr-15 text-medium font-semibold text-white md:text-2xl">
                      If you've been involved with building complex web
                      projects, you understand how hard it can be to choose the
                      right platforms and technologies for the task. Now, with{" "}
                      <span className="bg-gradient-to-br from-purple-500 to-red-500 bg-clip-text text-transparent">
                        Jamstack
                      </span>
                      , you can have a website with a clear separation of
                      services. The front end and backend are decoupled and we
                      use ARPs to run server-side processes. You can pick what
                      you need when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
