import React from "react"

export default function Testimonials() {
  return (
    <section className="bg-slate-900" id="clients">
      <div className="max-w-7xl container mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-8 md:flex md:flex-col md:border-r md:border-sky-200 md:py-16 md:pl-0 md:pr-10 lg:pr-16">
          <div className="md:flex-shrink-0">
            <img
              className="h-15"
              src="https://res.cloudinary.com/gravital-digital/image/upload/v1651513945/bss-325w-trans_ka4hmc.png"
              alt="Benevolent Senior Services"
            />
          </div>
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-amber-500"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Working with Gravital Digital is awesome. They were able to take
                my concepts and build a fast landing page that just works. I'm
                also pleased that we can update our team members and create blog
                posts with an easy-to-use editor online quickly and easily!
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://res.cloudinary.com/gravital-digital/image/upload/v1651515070/Dawn_Bare_oyx0rr.jpg"
                    alt="Benevolent Senior Services"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    Dawn Bare
                  </div>
                  <div className="text-base font-medium text-indigo-200">
                    CEO, Benevolent Senior Services
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="border-t-2 border-amber-500 px-8 py-12 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
          <div className="mb-6 md:flex-shrink-0">
            <img
              className="h-15"
              src="https://res.cloudinary.com/gravital-digital/image/upload/v1651514105/ps_logo-trans-310x92_ttrilw.png"
              alt="Preston Studios"
            />
          </div>
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-amber-500"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                PRESTON STUDIOS has been working with Gravital Digital for many
                years and our website has brought us the business we sought. The
                way it works and presents our products and services worldwide is
                instantaneous and attention getting. We couldn't be more
                pleased.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://res.cloudinary.com/gravital-digital/image/upload/v1651514726/john-emery_gigw8a.jpg"
                    alt="John Emery"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    John Emery
                  </div>
                  <div className="text-base font-medium text-indigo-200">
                    Partner, Preston Studios
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
