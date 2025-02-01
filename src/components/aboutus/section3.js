import React from "react";
import Image from "../../images/image2.webp";

export default function section3() {
  return (
    <div>
      <section
        class="relative py-10 lg:py-16 overflow-hidden bg-orange-50"
        style={{ fontFamily: "Figtree" }}
      >
        <div class="relative container px-4 mx-auto">
          <div class="max-w-lg lg:max-w-7xl mx-auto">
            <div class="flex flex-wrap -mx-4 mb-18 items-center">
              <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div class="max-w-md xl:max-w-2xl">
                  <h1 class="font-heading text-4xl md:text-5xl font-bold text-gray-800">
                    <span>Our</span>
                    <span class="">happy</span>
                    <span>
                      clients
                      <br /> says about us
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-4 items-center">
              <div class="w-full lg:w-1/2 px-4 mb-8 sm:mt-8 lg:mb-0">
                <div class="lg:max-w-md xl:max-w-lg ">
                  <img
                    class="block w-full rounded-lg"
                    src={Image}
                    alt="Urban Nest Propertiess | New Home Construction | Home builders"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-4">
                <div class="max-w-lg">
                  <p class="text-2xl font-semibold text-gray-900 mb-5">
                    &ldquo;They are able to help a startup like mine scale and
                    are very responsive to all our unique needs&rdquo;
                  </p>
                  <span class="block text-gray-900 font-semibold mb-1">
                    &mdash; Yacob Sudarmaji
                  </span>
                  <span class="block text-gray-500 mb-10">
                    Product Manager, XYZ Tech
                  </span>
                  <div>
                    <button class="inline-block mr-3 w-3 h-3 rounded-full bg-orange-700"></button>
                    <button class="inline-block mr-3 w-3 h-3 rounded-full bg-gray-200 hover:bg-orange-200"></button>
                    <button class="inline-block mr-3 w-3 h-3 rounded-full bg-gray-200 hover:bg-orange-200"></button>
                    <button class="inline-block w-3 h-3 rounded-full bg-gray-200 hover:bg-orange-200"></button>
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
