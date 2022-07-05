import * as React from "react"

export default function Example() {
  return (
    <div className="max-w-xl container mx-auto mb-6 rounded-3xl bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656977320/blue-background-lt-right_tq1sdp.jpg')] bg-cover">
      <div className="grid grid-cols-1 gap-x-6 py-6 sm:py-8 md:grid-cols-1 md:py-10 lg:grid-cols-3 lg:gap-x-8 lg:py-0 lg:pr-16 xl:grid-cols-3">
        <div className="grid-row-2 col-span-1 lg:col-span-2">
          <div className="justify-around py-12 sm:flex md:flex-row lg:py-24">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <img
                  className="h-950 inline h-max"
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1656987503/computer-logos-605x1071_aq9wg7.png"
                  alt="Cloud of Web Services around a MacBook Pro"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid-row-2 2xl:py-62 min-h-full auto-rows-min px-8 pt-0 md:col-span-1 lg:py-24">
          <h1 className="mb-5 justify-self-end text-5xl font-black text-white md:justify-self-end md:text-6xl xl:text-7xl 2xl:text-8xl">
            Flexibility.
          </h1>
          <h3 className="mb-6 text-2xl font-bold text-white lg:text-3xl">
            Services from anywhere
          </h3>
          <p className="mr-15 text-base font-medium text-white md:text-lg">
            If you've been involved with building complex web projects, you
            understand how hard it can be to choose the right platforms and
            technologies for the task. Now, with{" "}
            <span className="bg-gradient-to-br from-purple-400 to-red-400 bg-clip-text text-transparent">
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
