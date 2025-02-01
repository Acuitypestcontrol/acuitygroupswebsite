import React from "react";
import Images from "../../images/villa image.jpeg";

export default function section1() {
  return (
    <div>
      <section
        class="relative py-16 lg:py-20 overflow-hidden bg-white"
        style={{ fontFamily: "Figtree" }}
      >
        <div class="relative container px-4 mx-auto">
          <div class="max-w-5xl mx-auto">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-1/2 px-4 mb-14 lg:mb-0">
                <div class="max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  <h1 class="font-heading text-xl md:text-3xl font-bold text-gray-800 mb-6">
                    <span>Urban Nest Properties & Green Wood –<span className="italic text-green-700"> Premium Farm Land & Luxury Villas </span>for a Serene Lifestyle</span>
                  </h1>
                  <div class="max-w-lg mb-10">
                    <p class="text-gray-800 font-semibold">
                    At Urban Nest Properties, we specialize in offering luxury farm villas and agricultural land for sale near Bangalore. With a strong commitment to quality, sustainability, and premium living, we provide exclusive farm villa properties that cater to those seeking a perfect balance between nature and modern comforts. Whether you are looking to buy agricultural land in Bangalore for investment or construct a farm villa, our expertly curated projects ensure a seamless experience from selection to ownership.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-4">
                <div class="relative max-w-md lg:max-w-sm mx-auto lg:mr-0">
                  <img
                    class="w-full h-96 rounded-lg"
                    src={Images}
                    alt="Urban Nest Propertiess | Construction Services "
                  />
                  <div class="absolute bottom-0 left-0 p-4">
                    <div class="inline-block p-5 bg-white rounded-lg">
                      <svg
                        width="10"
                        height="8"
                        viewbox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.80666 3.52664L5.47333 0.193305C5.40993 0.132611 5.33516 0.0850345 5.25333 0.0533049C5.09102 -0.0133738 4.90897 -0.0133738 4.74666 0.0533049C4.66483 0.0850345 4.59007 0.132611 4.52666 0.193305L1.19333 3.52664C1.13117 3.5888 1.08186 3.66259 1.04822 3.74381C1.01458 3.82502 0.997269 3.91207 0.997269 3.99997C0.997269 4.17751 1.06779 4.34777 1.19333 4.47331C1.31887 4.59884 1.48913 4.66937 1.66666 4.66937C1.8442 4.66937 2.01446 4.59884 2.14 4.47331L4.33333 2.2733V7.3333C4.33333 7.51012 4.40357 7.67969 4.52859 7.80471C4.65362 7.92973 4.82319 7.99997 5 7.99997C5.17681 7.99997 5.34638 7.92973 5.4714 7.80471C5.59642 7.67969 5.66666 7.51012 5.66666 7.3333V2.2733L7.86 4.47331C7.92197 4.53579 7.99571 4.58539 8.07694 4.61923C8.15818 4.65308 8.24532 4.6705 8.33333 4.6705C8.42134 4.6705 8.50847 4.65308 8.58971 4.61923C8.67095 4.58539 8.74469 4.53579 8.80666 4.47331C8.86915 4.41133 8.91874 4.3376 8.95259 4.25636C8.98644 4.17512 9.00386 4.08798 9.00386 3.99997C9.00386 3.91196 8.98644 3.82483 8.95259 3.74359C8.91874 3.66235 8.86915 3.58861 8.80666 3.52664Z"
                          fill="#00AD6F"
                        ></path>
                      </svg>
                      <span class="block mb-2 text-lg text-gray-500">
                        Starting from
                      </span>

                      <span class="block mb-2 text-2xl font-semibold">
                        Rs.1099/sqt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
