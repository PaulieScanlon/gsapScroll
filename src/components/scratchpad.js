/* This example of mapping through object properties to create markup */
const perks = [
  {
    name: "Free delivery",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
    description:
      "Order now and you'll get delivery absolutely free. Well, it's not actually free, we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "10-year warranty",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg",
    description:
      "We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we'll stand behind it.",
  },
]

;<div className="max-w-2xl lg:max-w-none mx-auto grid grid-cols-1 gap-y-12 gap-x-8 px-4 lg:grid-cols-2 lg:gap-y-16">
  {perks.map(perk => (
    <div key={perk.name} className="sm:flex">
      <div className="sm:flex-shrink-0">
        <div className="flow-root">
          <img className="h-24 w-28" src={perk.imageSrc} alt="" />
        </div>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <h3 className="text-sm font-medium text-gray-900">{perk.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
      </div>
    </div>
  ))}
</div>
