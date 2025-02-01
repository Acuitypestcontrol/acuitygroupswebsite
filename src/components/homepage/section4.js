// import React from "react";

// export default function section4() {
//   return (
//     <div>
      /* <section
        class="relative pb-12 overflow-hidden bg-orange-50"
        style={{ fontFamily: "Figtree" }}
      >
        <div class="pt-8 sm:pt-28 pb-40 bg-orange-50">
          <div class="container px-4 mx-auto">
            <div class="max-w-2xl lg:max-w-5xl mx-auto mb-24 text-center">
              <span class="inline-block py-1 px-3 mb-4 text-md font-semibold bg-gradient-to-r from-orange-500  to-red-600 text-orange-100 rounded-full uppercase">
                Pricing
              </span>
              <h1 class="font-heading text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span>Affordable Excellence</span>
              </h1>
              <p class="text-lg text-gray-700 sm:px-20 font-semibold">
                Urban Nest Properties: Crafting Premium Farm Villas for Every
                Budget. Experience Uncompromised Craftsmanship Without
                Compromising Affordability.
              </p>
            </div>
          </div>
        </div>
        <div class="container px-4 mx-auto">
          <div class="max-w-md lg:max-w-4xl mx-auto">
            <div class="-mt-52 sm:mb-16 lg:mb-8 py-9 px-8 sm:px-14 bg-white rounded-3xl shadow-xl">
              <div class="flex flex-wrap -mx-4 items-center">
                <div class="w-full lg:w-2/5 sm:mb-8 lg:mb-0 px-4 pb-12 lg:py-4 border-b lg:border-0 lg:border-r border-gray-100">
                  <div class="text-center">
                    <span class="block text-2xl font-semibold mb-4">
                      5000+sqft (Land)
                    </span>
                    <span class="block text-3xl font-bold text-gray-900 mb-5">
                      Rs.1099/Per Sq Ft
                    </span>
                    <a
                      class="relative group inline-block py-4 px-10 text-center text-orange-50 bg-gradient-to-r from-orange-500  to-red-600 font-semibold rounded-full overflow-hidden transition duration-200"
                      href="#"
                    >
                      <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span class="relative">Get Started</span>
                    </a>
                  </div>
                </div>
                <div class="w-full lg:w-2/5 sm:mb-8 lg:mb-0 px-4 pb-12 lg:py-4 border-b lg:border-0 lg:border-r border-gray-100">
                  <div class="text-center">
                    <span class="block text-2xl font-semibold mb-4">
                      2BHK Villa
                    </span>
                    <span class="block text-5xl font-bold text-gray-900 mb-5">
                      Rs.1499/Per Sqft
                    </span>
                    <a
                      class="relative group inline-block py-4 px-10 text-center text-orange-50 bg-gradient-to-r from-orange-500  to-red-600 font-semibold rounded-full overflow-hidden transition duration-200"
                      href="#"
                    >
                      <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span class="relative">Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */


      /* ...................... */




      /* <section className="relative pb-12 overflow-hidden bg-green-50" style={{ fontFamily: 'Figtree' }}>
        <div className="pt-8 sm:pt-28 pb-40 bg-green-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl lg:max-w-5xl mx-auto mb-24 text-center">
              <span className="inline-block py-1 px-3 mb-4 text-md font-semibold bg-gradient-to-r from-green-500 to-green-700 text-green-100 rounded-full uppercase shadow-lg animate-pulse">
                Pricing
              </span>
              <h1 className="font-heading text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
                  Affordable Excellence
                </span>
              </h1>
              <p className="text-lg text-gray-700 sm:px-20 font-semibold">
                Urban Nest Properties: Crafting Premium Farm Villas for Every Budget. Experience Uncompromised Craftsmanship Without Compromising Affordability.
              </p>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="max-w-md lg:max-w-4xl mx-auto">
            <div className="-mt-52 sm:mb-16 lg:mb-8 py-9 px-8 sm:px-14 bg-white rounded-3xl shadow-2xl hover:shadow-green-500 transition duration-500">
              <div className="flex flex-wrap -mx-4 items-center">
                {[{ title: '5000+sqft (Villa Plot)', price: 'Rs.1099/Per Sq Ft' }, { title: '2BHK Villa', price: 'Rs.1499/Per Sq Ft' }].map((item, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-1/2 sm:mb-8 lg:mb-0 px-4 pb-12 lg:py-4 border-b lg:border-0 lg:border-r border-gray-100 transition-transform transform hover:scale-105 hover:bg-green-100 rounded-lg p-4 shadow-md hover:shadow-lg"
                  >
                    <div className="text-center">
                      <span className="block text-2xl font-semibold mb-4 text-green-700">{item.title}</span>
                      <span className="block text-3xl font-bold text-gray-900 mb-5">{item.price}</span>
                      <a
                        className="relative group inline-block py-4 px-10 text-center text-green-50 bg-gradient-to-r from-green-500 to-green-700 font-semibold rounded-full overflow-hidden transition duration-300 hover:shadow-xl hover:from-green-600 hover:to-green-800"
                        href="#"
                      >
                        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                        <span className="relative">Get Started</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */


      /* .............................. *

 
      /* <section className="relative pb-12 overflow-hidden bg-green-50" style={{ fontFamily: 'Figtree' }}>
        <div className="pt-8 sm:pt-28 pb-40 bg-green-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl lg:max-w-5xl mx-auto mb-24 text-center">
              <span className="inline-block py-1 px-3 mb-4 text-md font-semibold bg-gradient-to-r from-green-500 to-green-700 text-green-100 rounded-full uppercase shadow-lg animate-pulse">
                Pricing
              </span>
              <h1 className="font-heading text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
                  Affordable Excellence
                </span>
              </h1>
              <p className="text-lg text-gray-700 sm:px-20 font-semibold">
                Urban Nest Properties: Crafting Premium Farm Villas for Every Budget. Experience Uncompromised Craftsmanship Without Compromising Affordability.
              </p>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="max-w-md lg:max-w-4xl mx-auto">
            <div className="-mt-52 sm:mb-16 lg:mb-8 py-9 px-8 sm:px-14 bg-white rounded-3xl shadow-2xl hover:shadow-green-500 transition duration-500">
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="w-full lg:w-1/2 px-4 pb-12 lg:py-4 border-b lg:border-0 lg:border-r border-gray-100 transition-transform transform hover:scale-105 hover:bg-green-100 rounded-lg p-4 shadow-md hover:shadow-lg">
                  <div className="text-center">
                    <span className="block text-2xl font-semibold mb-4 text-green-700">5000+sqft (Land)</span>
                    <span className="block text-xl font-semibold mb-4">Prelaunch  Offer</span>

                    <span className="block text-3xl font-bold text-gray-900 mb-5">Rs.1099/Per Sq Ft</span>
                    <a
                      className="relative group inline-block py-4 px-10 text-center text-green-50 bg-gradient-to-r from-green-500 to-green-700 font-semibold rounded-full overflow-hidden transition duration-300 hover:shadow-xl hover:from-green-600 hover:to-green-800"
                      href="/contact"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative">Enquiry Now</span>
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 pb-12 lg:py-4 border-b lg:border-0 border-gray-100 transition-transform transform hover:scale-105 hover:bg-green-100 rounded-lg p-4 shadow-md hover:shadow-lg">
                  <div className="text-center">
                    <span className="block text-2xl font-semibold mb-4 text-green-700">2BHK Villa</span>
                    <span className="block text-xl font-semibold mb-4">Prelaunch  Offer</span>

                    <span className="block text-3xl font-bold text-gray-900 mb-5">Rs.1499/Per Sq Ft</span>
                    <a
                      className="relative group inline-block py-4 px-10 text-center text-green-50 bg-gradient-to-r from-green-500 to-green-700 font-semibold rounded-full overflow-hidden transition duration-300 hover:shadow-xl hover:from-green-600 hover:to-green-800"
                      href="/contact"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative">Enquiry Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */
    /* </div>
  );
} */



import React from "react";

export default function Section4() {
  return (
    <section className="relative pb-12 overflow-hidden bg-green-50">
      <div className="pt-8 sm:pt-28 pb-40 bg-green-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto mb-24 text-center">
            <span className="inline-block py-1 px-3 mb-4 text-md font-semibold bg-gradient-to-r from-green-500 to-green-700 text-green-100 rounded-full uppercase shadow-lg animate-pulse">
              Pricing
            </span>
            <h1 className="font-heading text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
                Affordable Excellence
              </span>
            </h1>
            <p className="text-lg text-gray-700 sm:px-20 font-semibold">
              Urban Nest Properties: Crafting Premium Farm Villas for Every Budget.
            </p>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="max-w-md lg:max-w-4xl mx-auto">
          <div className="-mt-52 sm:mb-16 lg:mb-8 py-9 px-8 sm:px-14 bg-white rounded-3xl shadow-2xl hover:shadow-green-500 transition duration-500">
            <div className="flex flex-wrap -mx-4 items-center">
              {[
                { title: "5000+sqft (Land)", price: "Rs.1099/Per Sq Ft" },
                { title: "2BHK Villa", price: "Rs.1499/Per Sq Ft" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full lg:w-1/2 px-4 pb-12 lg:py-4 border-b lg:border-0 lg:border-r border-gray-100 transition-transform transform hover:scale-105 hover:bg-green-100 rounded-lg p-4 shadow-md hover:shadow-lg"
                >
                  <div className="text-center">
                    <span className="block text-2xl font-semibold mb-4 text-green-700">{item.title}</span>
                    <span className="block text-3xl font-bold text-gray-900 mb-5">{item.price}</span>
                    <a
                      className="relative group inline-block py-4 px-10 text-center text-green-50 bg-gradient-to-r from-green-500 to-green-700 font-semibold rounded-full overflow-hidden transition duration-300 hover:shadow-xl hover:from-green-600 hover:to-green-800"
                      href="/contact"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative">Enquiry Now</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


