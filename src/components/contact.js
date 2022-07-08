import React from "react"
import { MailIcon, PhoneIcon } from "@heroicons/react/outline"

export default function Contact() {
  return (
    <div className="bg-black" id="contact">
      <div className="max-w-xl container mx-auto rounded-3xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-700 shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden rounded-l-3xl bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656977320/blue-background-lt-right_tq1sdp.jpg')] bg-cover py-10 px-6 sm:px-10 xl:p-12">
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
              ></div>
              <div>
                <img
                  className="mx-auto mb-4 max-h-40"
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png"
                  alt="Gravital Digital Logo"
                />
              </div>
              <h2 className="pt-2 text-center lg:pt-4 xl:pt-6">
                <span className="font-logo text-3xl font-bold tracking-tighter text-sky-600 md:text-4xl">
                  Gravital
                </span>
                {""}
                <span className="font-logo text-3xl font-bold tracking-tighter text-amber-600 md:text-4xl">
                  Digital
                </span>
              </h2>
              <p className="font-body max-w-3xl mt-6 font-body text-base text-sky-200">
                For quickest response, please use the contact us form. If calling, please leave a message and we'll return your call ASAP. Thank you!
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-sky-200">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-blue-500"
                    aria-hidden="true"
                  />
                  <span className="font-body ml-3">407-710-5497</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-sky-200">
                  <MailIcon
                    className="h-6 w-6 flex-shrink-0 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="font-body ml-3">go@gravitaldigital.com</span>
                </dd>
              </dl>
            </div>

            {/* Contact form */}
            <div className="rounded-r-3xl bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1656977680/orange-background-lt-right_csemyb.jpg')] bg-cover bg-right py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <form
                name="contact"
                form
                id="gravital-netlify-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label
                    htmlFor="first-name"
                    className="text-medium block pl-2 font-medium text-blue-200"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="text-medium block pl-2 font-medium text-blue-200"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-medium block pl-2 font-medium text-blue-200"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="text-medium block pl-2 font-medium text-blue-200"
                    >
                      Phone
                    </label>
                    <span
                      id="phone-optional"
                      className="text-medium pl-2 text-amber-200"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="text-medium block pl-2 font-medium text-blue-200"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="text-medium block pl-2 font-medium text-blue-200"
                    >
                      Message
                    </label>
                    <span
                      id="message-max"
                      className="text-medium pl-2 text-amber-200"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="inline-block rounded-full border border-transparent bg-amber-500 py-2 px-4 text-base font-medium text-slate-50 transition duration-500 hover:bg-amber-800 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
