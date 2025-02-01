import React from "react";
import Logo from '../../images/logo1.png'

export default function section2() {
  return (
    <div>
      <section
        class="relative pt-20 pb-24 sm:px-24 bg-orange-50 overflow-hidden"
        style={{ fontFamily: "Figtree" }}
      >
        <img
          class="absolute h-16 left-1/2 top-0 transform -translate-x-1/2"
          src={Logo}
          alt="Urban Nest Propertiess"
        />
        <div class="relative z-10 container px-4 mx-auto">
          <p class="mb-6 text-sm text-orange-600 text-center font-semibold uppercase tracking-px">
            Our Process
          </p>
          <h2 class="mb-20 text-3xl md:text-5xl text-center font-bold font-heading tracking-px-n leading-tight text-gray-800">
            Transparency at every stage
          </h2>
          <div class="flex flex-wrap -m-8">
            <div class="w-full md:w-1/2 lg:w-1/5 p-8">
              <div class="text-center">
                <div class="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
                  <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      width="22"
                      height="22"
                      viewbox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.75 9.16658H19.25M6.41667 13.7499H7.33333M11 13.7499H11.9167M5.5 17.4166H16.5C18.0188 17.4166 19.25 16.1854 19.25 14.6666V7.33325C19.25 5.81447 18.0188 4.58325 16.5 4.58325H5.5C3.98122 4.58325 2.75 5.81447 2.75 7.33325V14.6666C2.75 16.1854 3.98122 17.4166 5.5 17.4166Z"
                        stroke="red"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div class="hidden lg:block absolute left-12 top-1/2 transform -translate-y-1/2 w-96 h-px bg-gray-200"></div>
                </div>
                <div class="md:max-w-xs mx-auto">
                  <h3 class="mb-4 font-heading text-gray-800 text-2xl sm:text-lg font-bold font-heading leading-normal">
                    Site Visit
                  </h3>
                  <p class="text-gray-600 font-medium leading-relaxed">
                    Assessing your location, understanding your needs.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/5 p-8">
              <div class="text-center">
                <div class="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
                  <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                        stroke="red"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div class="hidden lg:block absolute left-12 top-1/2 transform -translate-y-1/2 w-96 h-px bg-gray-200"></div>
                </div>
                <div class="md:max-w-xs mx-auto">
                  <h3 class="mb-4 font-heading text-2xl sm:text-lg text-gray-800 font-bold font-heading leading-normal">
                    Plan & Estimation
                  </h3>
                  <p class="text-gray-600 font-medium leading-relaxed">
                    Detailed plan, accurate cost assessment.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/5 p-8">
              <div class="text-center">
                <div class="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
                  <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      width="19"
                      height="16"
                      viewbox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.66717 2.54545V10.0455C8.66717 10.7841 8.52335 11.489 8.23571 12.1602C7.94807 12.8313 7.55922 13.4119 7.06916 13.902C6.5791 14.392 5.99849 14.7809 5.32733 15.0685C4.65616 15.3562 3.95126 15.5 3.21262 15.5H2.53081C2.34615 15.5 2.18635 15.4325 2.0514 15.2976C1.91646 15.1626 1.84899 15.0028 1.84899 14.8182V13.4545C1.84899 13.2699 1.91646 13.1101 2.0514 12.9751C2.18635 12.8402 2.34615 12.7727 2.53081 12.7727H3.21262C3.96547 12.7727 4.60822 12.5064 5.14089 11.9737C5.67356 11.4411 5.9399 10.7983 5.9399 10.0455V9.70455C5.9399 9.42046 5.84047 9.17898 5.6416 8.98011C5.44274 8.78125 5.20126 8.68182 4.91717 8.68182H2.53081C1.96262 8.68182 1.47967 8.48295 1.08194 8.08523C0.684215 7.6875 0.485352 7.20455 0.485352 6.63636V2.54545C0.485352 1.97727 0.684215 1.49432 1.08194 1.09659C1.47967 0.698864 1.96262 0.5 2.53081 0.5H6.62172C7.1899 0.5 7.67285 0.698864 8.07058 1.09659C8.46831 1.49432 8.66717 1.97727 8.66717 2.54545ZM18.2126 2.54545V10.0455C18.2126 10.7841 18.0688 11.489 17.7812 12.1602C17.4935 12.8313 17.1047 13.4119 16.6146 13.902C16.1246 14.392 15.5439 14.7809 14.8728 15.0685C14.2016 15.3562 13.4967 15.5 12.7581 15.5H12.0763C11.8916 15.5 11.7318 15.4325 11.5969 15.2976C11.4619 15.1626 11.3944 15.0028 11.3944 14.8182V13.4545C11.3944 13.2699 11.4619 13.1101 11.5969 12.9751C11.7318 12.8402 11.8916 12.7727 12.0763 12.7727H12.7581C13.5109 12.7727 14.1537 12.5064 14.6863 11.9737C15.219 11.4411 15.4854 10.7983 15.4854 10.0455V9.70455C15.4854 9.42046 15.3859 9.17898 15.1871 8.98011C14.9882 8.78125 14.7467 8.68182 14.4626 8.68182H12.0763C11.5081 8.68182 11.0251 8.48295 10.6274 8.08523C10.2297 7.6875 10.0308 7.20455 10.0308 6.63636V2.54545C10.0308 1.97727 10.2297 1.49432 10.6274 1.09659C11.0251 0.698864 11.5081 0.5 12.0763 0.5H16.1672C16.7354 0.5 17.2183 0.698864 17.616 1.09659C18.0138 1.49432 18.2126 1.97727 18.2126 2.54545Z"
                        fill="red"
                      ></path>
                    </svg>
                  </div>
                  <div class="hidden lg:block absolute left-12 top-1/2 transform -translate-y-1/2 w-96 h-px bg-gray-200"></div>
                </div>
                <div class="md:max-w-xs mx-auto">
                  <h3 class="mb-4 font-heading text-2xl sm:text-lg text-gray-800 font-bold font-heading leading-normal">
                    Quotation & Advance
                  </h3>
                  <p class="text-gray-600 font-medium leading-relaxed">
                    Transparent pricing, competitive rates.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/5 p-8">
              <div class="text-center">
                <div class="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
                  <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      width="19"
                      height="16"
                      viewbox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.66717 2.54545V10.0455C8.66717 10.7841 8.52335 11.489 8.23571 12.1602C7.94807 12.8313 7.55922 13.4119 7.06916 13.902C6.5791 14.392 5.99849 14.7809 5.32733 15.0685C4.65616 15.3562 3.95126 15.5 3.21262 15.5H2.53081C2.34615 15.5 2.18635 15.4325 2.0514 15.2976C1.91646 15.1626 1.84899 15.0028 1.84899 14.8182V13.4545C1.84899 13.2699 1.91646 13.1101 2.0514 12.9751C2.18635 12.8402 2.34615 12.7727 2.53081 12.7727H3.21262C3.96547 12.7727 4.60822 12.5064 5.14089 11.9737C5.67356 11.4411 5.9399 10.7983 5.9399 10.0455V9.70455C5.9399 9.42046 5.84047 9.17898 5.6416 8.98011C5.44274 8.78125 5.20126 8.68182 4.91717 8.68182H2.53081C1.96262 8.68182 1.47967 8.48295 1.08194 8.08523C0.684215 7.6875 0.485352 7.20455 0.485352 6.63636V2.54545C0.485352 1.97727 0.684215 1.49432 1.08194 1.09659C1.47967 0.698864 1.96262 0.5 2.53081 0.5H6.62172C7.1899 0.5 7.67285 0.698864 8.07058 1.09659C8.46831 1.49432 8.66717 1.97727 8.66717 2.54545ZM18.2126 2.54545V10.0455C18.2126 10.7841 18.0688 11.489 17.7812 12.1602C17.4935 12.8313 17.1047 13.4119 16.6146 13.902C16.1246 14.392 15.5439 14.7809 14.8728 15.0685C14.2016 15.3562 13.4967 15.5 12.7581 15.5H12.0763C11.8916 15.5 11.7318 15.4325 11.5969 15.2976C11.4619 15.1626 11.3944 15.0028 11.3944 14.8182V13.4545C11.3944 13.2699 11.4619 13.1101 11.5969 12.9751C11.7318 12.8402 11.8916 12.7727 12.0763 12.7727H12.7581C13.5109 12.7727 14.1537 12.5064 14.6863 11.9737C15.219 11.4411 15.4854 10.7983 15.4854 10.0455V9.70455C15.4854 9.42046 15.3859 9.17898 15.1871 8.98011C14.9882 8.78125 14.7467 8.68182 14.4626 8.68182H12.0763C11.5081 8.68182 11.0251 8.48295 10.6274 8.08523C10.2297 7.6875 10.0308 7.20455 10.0308 6.63636V2.54545C10.0308 1.97727 10.2297 1.49432 10.6274 1.09659C11.0251 0.698864 11.5081 0.5 12.0763 0.5H16.1672C16.7354 0.5 17.2183 0.698864 17.616 1.09659C18.0138 1.49432 18.2126 1.97727 18.2126 2.54545Z"
                        fill="red"
                      ></path>
                    </svg>
                  </div>
                  <div class="hidden lg:block absolute left-12 top-1/2 transform -translate-y-1/2 w-96 h-px bg-gray-200"></div>
                </div>
                <div class="md:max-w-xs mx-auto">
                  <h3 class="mb-4 font-heading text-2xl sm:text-lg text-gray-800 font-bold font-heading leading-normal">
                    Work Commencement
                  </h3>
                  <p class="text-gray-600 font-medium leading-relaxed">
                    {" "}
                    Initiating construction, bringing your vision to life.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/5 p-8">
              <div class="text-center">
                <div class="relative z-10 bg-red-500 w-12 h-12 mb-8 mx-auto border border-blueGray-200 rounded-full">
                  <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      width="22"
                      height="16"
                      viewbox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5734 0.93934C21.1591 1.52513 21.1591 2.47487 20.5734 3.06066L8.57336 15.0607C7.98757 15.6464 7.03782 15.6464 6.45204 15.0607L0.452035 9.06066C-0.133751 8.47487 -0.133751 7.52513 0.452035 6.93934C1.03782 6.35355 1.98757 6.35355 2.57336 6.93934L7.5127 11.8787L18.452 0.93934C19.0378 0.353553 19.9876 0.353553 20.5734 0.93934Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="md:max-w-xs mx-auto">
                  <h3 class="mb-4 font-heading text-2xl sm:text-lg text-gray-800  font-bold font-heading leading-normal">
                    Completion & Handover
                  </h3>
                  <p class="text-gray-600 font-medium leading-relaxed">
                    Finalizing project, delivering your dream space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


   



      </section>

      {/* .................................................................green part....................... */}

      {/* <div class="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-teal-900 rounded-3xl mx-20">
    <div class="container mx-auto px-4">
      <div class="flex mb-4 items-center">
        <svg width="8" height="8" viewbox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#BEF264"></circle></svg>
        <span class="inline-block ml-2 text-sm font-medium text-white">Solutions</span>
      </div>
      <div class="border-t border-white border-opacity-25 pt-14">
        <h1 class="font-heading text-4xl sm:text-6xl text-white mb-24">Key to clean future</h1>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12 lg:mb-0">
            <div class="flex flex-col h-full">
              <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                <circle cx="16" cy="16" r="4" fill="#022C22"></circle><circle cx="24" cy="32" r="4" fill="#022C22"></circle><circle cx="32" cy="16" r="4" fill="#022C22"></circle>
              </svg>
              <h5 class="text-2xl font-medium text-white mt-6 mb-3">EV charging</h5>
              <p class="text-white opacity-80 mb-6">EVs use electricity as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transportation sector.</p>
              <a href="#" class="inline-block mt-auto text-lg font-medium text-white hover:text-lime-500">Read more</a>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12 lg:mb-0">
            <div class="flex flex-col h-full">
              <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22"></rect><rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22"></rect><rect x="34.6066" y="11.9792" width="2" height="12" rx="1" transform="rotate(45 34.6066 11.9792)" fill="#022C22"></rect><rect x="20.4645" y="26.1213" width="2" height="12" rx="1" transform="rotate(45 20.4645 26.1213)" fill="#022C22"></rect><rect x="28" y="25" width="2" height="12" rx="1" transform="rotate(-90 28 25)" fill="#022C22"></rect><rect x="8" y="25" width="2" height="12" rx="1" transform="rotate(-90 8 25)" fill="#022C22"></rect><rect x="26.1213" y="27.5356" width="2" height="12" rx="1" transform="rotate(-45 26.1213 27.5356)" fill="#022C22"></rect><rect x="11.9792" y="13.3936" width="2" height="12" rx="1" transform="rotate(-45 11.9792 13.3936)" fill="#022C22"></rect>
              </svg>
              <h5 class="text-2xl font-medium text-white mt-6 mb-3">Solar Energy</h5>
              <p class="text-white opacity-80 mb-6">Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p>
              <a href="#" class="inline-block mt-auto text-lg font-medium text-white hover:text-lime-500">Read more</a>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12 sm:mb-0">
            <div class="flex flex-col h-full">
              <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                <path d="M25 24C25 24.5523 24.5523 25 24 25C23.4477 25 23 24.5523 23 24C23 23.4477 23.4477 23 24 23C24.5523 23 25 23.4477 25 24Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 25C24.5523 25 25 24.5523 25 24C25 23.4477 24.5523 23 24 23C23.4477 23 23 23.4477 23 24C23 24.5523 23.4477 25 24 25Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40 23C40.5523 23 41 23.4477 41 24C41 33.3888 33.3888 41 24 41C23.4477 41 23 40.5523 23 40C23 39.4477 23.4477 39 24 39C32.2843 39 39 32.2843 39 24C39 23.4477 39.4477 23 40 23Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 9C15.7157 9 9 15.7157 9 24C9 24.5523 8.55228 25 8 25C7.44772 25 7 24.5523 7 24C7 14.6112 14.6112 7 24 7C24.5523 7 25 7.44772 25 8C25 8.55228 24.5523 9 24 9Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M36 23C36.5523 23 37 23.4477 37 24C37 31.1797 31.1797 37 24 37C23.4477 37 23 36.5523 23 36C23 35.4477 23.4477 35 24 35C30.0751 35 35 30.0751 35 24C35 23.4477 35.4477 23 36 23Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 13C17.9249 13 13 17.9249 13 24C13 24.5523 12.5523 25 12 25C11.4477 25 11 24.5523 11 24C11 16.8203 16.8203 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 23C32.5523 23 33 23.4477 33 24C33 28.9706 28.9706 33 24 33C23.4477 33 23 32.5523 23 32C23 31.4477 23.4477 31 24 31C27.866 31 31 27.866 31 24C31 23.4477 31.4477 23 32 23Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 17C20.134 17 17 20.134 17 24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24C15 19.0294 19.0294 15 24 15C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17Z" fill="#022C22"></path>
              </svg>
              <h5 class="text-2xl font-medium text-white mt-6 mb-3">Wind Energy</h5>
              <p class="text-white opacity-80 mb-6">Wind turbines harness the kinetic energy of the wind to generate electricity. Wind farms with multiple turbines are commonly used to produce large amounts of clean energy.</p>
              <a href="#" class="inline-block mt-auto text-lg font-medium text-white hover:text-lime-500">Read more</a>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 px-4">
            <div class="flex flex-col h-full">
              <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                <path d="M23.8425 12.3779C23.9008 12.238 24.0992 12.238 24.1575 12.3779L30.1538 26.7692C31.9835 31.1605 28.7572 36 24 36Lnan nanL24 36C19.2428 36 16.0165 31.1605 17.8462 26.7692L23.8425 12.3779Z" fill="#022C22"></path>
              </svg>
              <h5 class="text-2xl font-medium text-white mt-6 mb-3">Hydropower</h5>
              <p class="text-white opacity-80 mb-6">This technology uses the energy from flowing water, such as rivers and dams, to turn turbines and generate electricity. It's one of the oldest forms of renewable energy.</p>
              <a href="#" class="inline-block mt-auto text-lg font-medium text-white hover:text-lime-500">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
    </div>
  );
}
