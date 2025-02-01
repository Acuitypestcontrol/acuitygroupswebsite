import React from 'react'

export default function section3() {
  return (
    <><section class="bg-green-900 text-white py-20">
          <div class="max-w-6xl mx-auto text-center animate-fade-in">
              <h1 class="text-5xl font-bold mb-6">Farm Villa Development in Bangalore</h1>
              <p class="text-xl mb-8">Modern Designs | High ROI | Sustainable Living</p>
              <a href="#services" class="bg-white text-green-900 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300">
                  Explore Our Services
              </a>
          </div>
      </section>
          {/* //   <!-- Services Section --> */}
          <section id="services" class="py-16 px-4">
              <div class="max-w-6xl mx-auto">
                  <h2 class="text-3xl font-bold text-center text-green-900 mb-12 animate-fade-in">Why Choose Us?</h2>

                  {/* <!-- Grid Layout --> */}
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* <!-- Expertise in Farm Villa Development --> */}
                      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                          <h3 class="text-2xl font-bold text-green-900 mb-4">Expertise in Farm Villa Development</h3>
                          <p class="text-gray-600">We specialize in farm villas in Bangalore, ensuring the highest quality and modern designs.</p>
                      </div>

                      {/* <!-- High ROI on Agricultural Land Investment --> */}
                      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                          <h3 class="text-2xl font-bold text-green-900 mb-4">High ROI on Agricultural Land Investment</h3>
                          <p class="text-gray-600">Our agricultural land for sale near Bangalore is located in high-appreciation zones, making it an ideal choice for investors.</p>
                      </div>

                      {/* <!-- Premium Amenities --> */}
                      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" >
                          <h3 class="text-2xl font-bold text-green-900 mb-4">Premium Amenities</h3>
                          <p class="text-gray-600">Our farm villas near Bangalore include clubhouses, swimming pools, spacious roads, 24/7 security, and individual water connections.</p>
                      </div>

                      {/* <!-- Sustainable & Eco-Friendly Living --> */}
                      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" >
                          <h3 class="text-2xl font-bold text-green-900 mb-4">Sustainable & Eco-Friendly Living</h3>
                          <p class="text-gray-600">Our farm villa projects integrate drip irrigation systems, fruit plantations, and green spaces to promote a healthier lifestyle.</p>
                      </div>

                      {/* <!-- Seamless Buying Experience --> */}
                      <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" >
                          <h3 class="text-2xl font-bold text-green-900 mb-4">Seamless Buying Experience</h3>
                          <p class="text-gray-600">We ensure a hassle-free process, from selecting the right farm villa property to legal documentation and villa construction.</p>
                      </div>
                  </div>
              </div>
          </section>
          {/* //   <!-- Call to Action Section --> */}
          <section class="bg-green-900 text-white py-16">
              <div class="max-w-6xl mx-auto text-center animate-fade-in">
                  <h2 class="text-4xl font-bold mb-6">Ready to Invest in Your Dream Farm Villa?</h2>
                  <p class="text-xl mb-8">Contact us today to get started on your journey to sustainable and luxurious living.</p>
                  <a href="#contact" class="bg-white text-green-900 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300">
                      Get in Touch
                  </a>
              </div>
          </section></>
  )
}
