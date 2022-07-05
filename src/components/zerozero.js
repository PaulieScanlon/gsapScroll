import * as React from "react"

export default function Benefits() {
  return (
    <div className="container mx-auto mt-24 mb-6 rounded-3xl bg-slate-900">
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 px-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8 lg:px-8">
        <div className=" justify-around pb-0 pt-6 sm:flex lg:py-6">
          <div className="sm:flex-shrink">
            <div className="block rounded-2xl rounded-tl-none border border-slate-400 bg-gradient-to-r from-sky-500 to-purple-400 text-center">
              <div className="flow-root">
                <div class="rounded-xl-embed my-3 rounded-t-none py-8 px-12 md:shadow-red-500">
                  <h2 className="mt-2 mb-6 text-3xl font-black text-slate-50 lg:text-4xl xl:text-5xl 2xl:text-6xl">
                    Zero Hacks
                  </h2>
                  <span className="mt-2 text-xl text-slate-50">
                    With server-side processes abstracted into microservice
                    APIs, surface areas for attacks are reduced. You can also
                    leverage the domain expertise of specialist third-party
                    services.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-around pt-0 pb-6 sm:flex lg:py-6">
          <div className="sm:flex-shrink">
            <div className="flow-root">
              <div className="block rounded-2xl rounded-tl-none border border-gray-400 bg-gradient-to-r from-purple-400 to-sky-500 text-center">
                <div class="rounded-xl-embed my-3 rounded-t-none py-8 px-12">
                  <h2 className="mt-2 mb-6 text-3xl font-black text-slate-50 lg:text-4xl xl:text-5xl 2xl:text-6xl">
                    Zero Downtime
                  </h2>
                  <span className="mt-2 text-xl text-slate-50">
                    When deployment becomes a set of static files served
                    anywhere, scaling is simply serving those files in more
                    places. CDNs are perfect for this, typically with scaling
                    in their plans and zero downtime.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
