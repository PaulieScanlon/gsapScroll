import * as React from "react"

export default function Example() {
  return (
    <div className="max-w-xl container mx-auto mt-24 mb-6 h-150 rounded-3xl bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656886634/moc-backdrop_rj3wal.jpg')] bg-cover">
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 lg:px-8 xl:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <div className="md:py-15 lg:pt-25 justify-around pt-0 pb-6 sm:flex md:flex-row">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1"></div>
            </div>
          </div>
        </div>

        <div className="md:ml-15 min-h-full md:col-span-1">
          <div className="pb-0 pt-6 sm:py-0 md:flex md:flex-row md:py-12 md:pr-12">
            <div className="sm:flex-shrink">
              <div className="grid grid-cols-1">
                <div className="flex justify-start">
                  <div className="grid grid-cols-1">
                    <h1 className="mt-2 text-4xl font-black text-purple-400 sm:mt-12 sm:text-5xl md:mt-0 lg:mt-2 lg:text-6xl">
                      Flexibility:
                    </h1>
                    <p className="mr-15 mt-8 text-2xl font-semibold text-white">
                      If you've been involved with building complex web
                      projects, you understand how hard it can be to choose the
                      right platforms and technologies for the task. Now, with
                      Jamstack, you can have a website with a clear separation
                      of services. The front end and backend are decoupled and
                      we use ARPs to run server-side processes. You can pick
                      what you need when you need it.
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
