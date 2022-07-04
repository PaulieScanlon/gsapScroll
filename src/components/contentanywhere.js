import * as React from "react"

export default function Benefits() {
  return (
    <div className="max-w-xl container mx-auto mb-24 mt-6 rounded-3xl bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656950328/mesh-gradient_ml0g9s.png')]">
      <div className="grid grid-cols-1 gap-x-6 py-12 sm:py-16 md:grid-cols-1 md:py-16 lg:grid-cols-3 lg:gap-x-8 lg:pl-16 xl:grid-cols-3">
        <div className="grid-row-2 min-h-full auto-rows-min justify-self-start px-8 md:col-span-1 lg:py-24 2xl:py-40">
          <h1 className="xlg:text-7xl mb-5 justify-self-end text-4xl font-black text-white md:justify-self-end md:text-5xl lg:text-6xl">
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

        <div className="grid-row-2 col-span-1 lg:col-span-2">
          <div className="justify-around sm:flex md:flex-row lg:pt-12">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <img
                  className="h-950 inline"
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1656951155/content-logos-331x670_tflqmw.png"
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
