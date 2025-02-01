import React from 'react'
import Image from '../../images/image2.webp'
import Banner from '../../images/banner 23.jpg'

export default function section1() {
  return (
    <div>
      <section>
        <img className='w-full object-cover' src={Banner}/>
      </section>
<section class="relative py-16 overflow-hidden bg-white"  style={{fontFamily:'Figtree'}}>
  <div class="relative container px-4 mx-auto">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap -mx-4 mb-10 items-center">
        <div class="w-full lg:w-2/3 xl:w-1/2 px-4 mb-12 lg:mb-0">
          <div >
            <span class="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">Services</span>
            <h1 class="font-heading text-5xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              <span>Crafting Homes that Reflect Your Style</span>
             
            </h1>
          </div>
        </div>
     
      </div>
      {/* <div class="flex flex-wrap -mx-4">
        <div class="w-full xl:w-1/2 px-4  mb-8 xl:mb-0">
          <div class="relative h-100 md:h-125">
            <img class="block h-full w-full rounded-3xl object-cover" src={Image} alt=""/>
            <div class="absolute top-0 left-0 h-full w-full p-8 md:p-12">
              <div class="flex flex-col items-start justify-between h-full max-w-sm">
                <div>
                  <span class="block mb-3 text-sm text-orange-500 font-semibold uppercase">Scenic Landscape Pathways</span>
                  <h3 class="text-3xl md:text-4xl text-white font-semibold">Thoughtfully designed paths leading to each unit for a picturesque living experience.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full xl:w-1/2 px-4">
          <div class="flex flex-wrap h-full -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div class="flex flex-col h-full">
                <div>
                <div class="relative h-100 md:h-full pb-5">
            <img class="block h-full w-full rounded-3xl object-cover" src={Image} alt=""/>
            <div class="absolute top-0 left-0 h-full w-full p-8 md:p-12">
              <div class="flex flex-col items-start justify-between h-full max-w-sm">
                <div>
                  <span class="block mb-3 text-sm text-orange-500 font-semibold uppercase">Granite Stone Boundaries</span>
                  <h3 class="text-xl md:text-2xl text-white font-semibold bg-blend-normal">Elegant and durable markers ensuring clear property demarcation.</h3>
                </div>
              </div>
            </div>
          </div>
                </div>
                <div>
                <div class="relative h-120 md:h-full">
            <img class="block h-full w-full rounded-3xl object-cover" src={Image} alt=""/>
            <div class="absolute top-0 left-0 h-full w-full p-8 md:p-12">
              <div class="flex flex-col items-start justify-between h-full max-w-sm">
                <div>
                  <span class="block mb-3 text-sm text-orange-500 font-semibold uppercase">Premium Clubhouse</span>
                  <h3 class="text-xl md:text-2xl text-white font-semibold"> A perfect space for social gatherings, celebrations, and community events.</h3>
                </div>
              </div>
            </div>
          </div>
                </div>
              </div>
            </div>
            <div class="w-full xl:w-1/2 px-4 mb-8 xl:mb-0">
          <div class="relative h-100 md:h-full">
            <img class="block h-full w-full rounded-3xl object-cover" src={Image} alt=""/>
            <div class="absolute top-0 left-0 h-full w-full p-8 md:p-12">
              <div class="flex flex-col items-start justify-between h-full max-w-sm">
                <div>
                  <span class="block mb-3 text-sm text-orange-500 font-semibold uppercase">Consultation & Design</span>
                  <h3 class="text-xl md:text-2xl text-white font-semibold">Leveraging tech to drive a better IT experience</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div> */}


      {/* ...................................................shuffel */}

      <div className=''>
      <section class="p-4 bg-white ">
  <div class="pt-16 pb-16 px-5 xs:px-8 xl:px-12 bg-teal-900 rounded-3xl h-96">
    <div class="container mx-auto px-4">
      <div class="flex mb-4 items-center">
        <svg width="8" height="8" viewbox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#BEF264"></circle></svg>
        <span class="inline-block ml-2 text-sm font-medium text-white"></span>
      </div>
      <div class="border-t border-white border-opacity-25 pt-6">
        <h1 class="font-heading text-4xl sm:text-6xl text-white ">Our Services</h1>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12 lg:mb-0">
            <div class="flex flex-col h-full">
              
              {/* <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                <circle cx="16" cy="16" r="4" fill="#022C22"></circle><circle cx="24" cy="32" r="4" fill="#022C22"></circle><circle cx="32" cy="16" r="4" fill="#022C22"></circle>
              </svg> */}
              <h5 class="text-2xl font-medium text-white mt-6 mb-3">Scenic Landscape Pathways</h5>
              
              <p class="text-white opacity-80 mb-6">Thoughtfully designed paths leading to each unit for a picturesque living experience.</p>
              
              
              {/* <a href="#" class="inline-block mt-auto text-lg font-medium text-white hover:text-lime-500">Read more</a> */}
            </div>
            
            
          </div>
          
          <div class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12 lg:mb-0">
            <div class="flex flex-col h-full">
              {/* <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22"></rect><rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22"></rect><rect x="34.6066" y="11.9792" width="2" height="12" rx="1" transform="rotate(45 34.6066 11.9792)" fill="#022C22"></rect><rect x="20.4645" y="26.1213" width="2" height="12" rx="1" transform="rotate(45 20.4645 26.1213)" fill="#022C22"></rect><rect x="28" y="25" width="2" height="12" rx="1" transform="rotate(-90 28 25)" fill="#022C22"></rect><rect x="8" y="25" width="2" height="12" rx="1" transform="rotate(-90 8 25)" fill="#022C22"></rect><rect x="26.1213" y="27.5356" width="2" height="12" rx="1" transform="rotate(-45 26.1213 27.5356)" fill="#022C22"></rect><rect x="11.9792" y="13.3936" width="2" height="12" rx="1" transform="rotate(-45 11.9792 13.3936)" fill="#022C22"></rect>
              </svg> */}
              <h5 class="text-2xl font-medium text-white mt-6 mb-3">Granite Stone Boundaries</h5>
              <p class="text-white opacity-80 mb-6">A perfect space for social gatherings, celebrations, and community events.</p>
              {/* <a href="#" class="inline-block mt-auto text-lg font-medium text-white hover:text-lime-500">Read more</a> */}
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12 sm:mb-0">
            <div class="flex flex-col h-full">
              {/* <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                <path d="M25 24C25 24.5523 24.5523 25 24 25C23.4477 25 23 24.5523 23 24C23 23.4477 23.4477 23 24 23C24.5523 23 25 23.4477 25 24Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 25C24.5523 25 25 24.5523 25 24C25 23.4477 24.5523 23 24 23C23.4477 23 23 23.4477 23 24C23 24.5523 23.4477 25 24 25Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40 23C40.5523 23 41 23.4477 41 24C41 33.3888 33.3888 41 24 41C23.4477 41 23 40.5523 23 40C23 39.4477 23.4477 39 24 39C32.2843 39 39 32.2843 39 24C39 23.4477 39.4477 23 40 23Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 9C15.7157 9 9 15.7157 9 24C9 24.5523 8.55228 25 8 25C7.44772 25 7 24.5523 7 24C7 14.6112 14.6112 7 24 7C24.5523 7 25 7.44772 25 8C25 8.55228 24.5523 9 24 9Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M36 23C36.5523 23 37 23.4477 37 24C37 31.1797 31.1797 37 24 37C23.4477 37 23 36.5523 23 36C23 35.4477 23.4477 35 24 35C30.0751 35 35 30.0751 35 24C35 23.4477 35.4477 23 36 23Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 13C17.9249 13 13 17.9249 13 24C13 24.5523 12.5523 25 12 25C11.4477 25 11 24.5523 11 24C11 16.8203 16.8203 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 23C32.5523 23 33 23.4477 33 24C33 28.9706 28.9706 33 24 33C23.4477 33 23 32.5523 23 32C23 31.4477 23.4477 31 24 31C27.866 31 31 27.866 31 24C31 23.4477 31.4477 23 32 23Z" fill="#022C22"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 17C20.134 17 17 20.134 17 24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24C15 19.0294 19.0294 15 24 15C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17Z" fill="#022C22"></path>
              </svg> */}
              <h5 class="text-2xl font-medium text-white mt-6 mb-3">Lush Avenue Plantation</h5>
              <p class="text-white opacity-80 mb-6">Roadside greenery for a refreshing and eco-friendly ambiance.</p>
              {/* <a href="#" class="inline-block mt-auto text-lg font-medium text-white hover:text-lime-500">Read more</a> */}
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 px-4">
            <div class="flex flex-col h-full">
              {/* <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                <path d="M23.8425 12.3779C23.9008 12.238 24.0992 12.238 24.1575 12.3779L30.1538 26.7692C31.9835 31.1605 28.7572 36 24 36Lnan nanL24 36C19.2428 36 16.0165 31.1605 17.8462 26.7692L23.8425 12.3779Z" fill="#022C22"></path>
              </svg> */}
              <h5 class="text-2xl font-medium text-white mt-6 mb-3">Personal Fruit Plantation</h5>
              <p class="text-white opacity-80 mb-6">Grow and enjoy fresh fruits right in your own backyard.</p>
              {/* <a href="#" class="inline-block mt-auto text-lg font-medium text-white hover:text-lime-500">Read more</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

    </div>
  </div>
</section>
    </div>
  )
}
