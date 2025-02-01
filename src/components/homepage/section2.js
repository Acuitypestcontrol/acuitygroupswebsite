// import React from "react";
// import Icon1 from "../../images/icon1.png";
// import Icon2 from "../../images/icon3.png";
// import Icon3 from "../../images/icon5.png";
// import Icon4 from "../../images/icon2.png";
// import Icon5 from "../../images/icon4.png";
// import Icon6 from "../../images/icon6.png";
// import Image from "../../images/2.png";
// import { Video } from "react-feather";
// import Videos from "../../images/video.mp4";

// export default function section2() {
//   return (
    // <div>
      /* <section class="relative sm:pt-20 md:pb-16 lg:py-18 overflow-hidden bg-green-100" style={{fontFamily:'Figtree'}}>
        
  <div class="relative container px-2 sm:px-4 sm:mx-auto mt-6 sm:mt-4">
    <div class="sm:max-w-7xl  mx-auto">
      <div class="flex flex-wrap items-center -mx-4 mb-24">
        <div class="w-full lg:w-1/2 sm:mr-24 px-8 sm:px-4 mb-16 lg:mb-0">
          <div class="max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
            <h1 class="font-heading text-3xl  md:text-5xl font-bold text-gray-800 mb-8">
              
              <div><span>Urban Nest Properties</span></div>
              <div class='text-2xl'><span>Escape to Luxury, <span className='italic text-green-600'>Embrace Nature @ Nelamangala</span> </span></div>

              

            
            </h1>
            <p class="max-w-xl text-lg md:text-xl font-semibold text-gray-800">Looking for premium real estate opportunities? At Urban Nest Property, we bring you a seamless and secure way to find the perfect villa, farm villa, or luxury home—all from the comfort of your space. No more time-consuming visits—our platform helps you explore and invest in prime land properties with confidence.
            </p>
          </div>
          <div class='mt-6 text-xl font-bold'>Farm Land Specifications:</div>
          <div><li>Grand Entrance Arch with Gate</li></div>
          <div><li>Security at Entrance Gate</li></div>
          <div><li>CCTV Surveillance</li></div>
          <div><li>Landscape Garden & Park</li></div>
          <div><li>Children's Play Area</li></div>
          <div><li>Yoga & Meditation Centre</li></div>






        </div>
        <div class=" hidden sm:block w-full lg:w-1/3 sm:px-2 lg:h-96 ">
        <video width="800"  controls>
      <source src={Videos} type="video/mp4" />
    </video>
     
        </div>
        
    
      </div>
      
    </div>
  </div>
  <div>
        <div class="flex flex-wrap -mx-4 sm:mb-8">
        <div class="w-full lg:w-1/3 px-4 mb-4 sm:mb-12 lg:mb-0 lg:border-r border-gray-100">
          <div class="max-w-xs mx-auto pb-10 lg:pb-5 text-center border-b border-gray-100 lg:border-b-0">
            <div class="flex mx-auto mb-5 items-center justify-center w-14 h-14 rounded-full ">
              <img src={Icon1} alt="Best Construction company in Kengeri"/>
            </div>
            <h4 class="text-2xl text-gray-900 font-semibold">Experience and Expertise</h4>
            <p class="text-orange-800 font-semibold">Proven track record in residential construction and design</p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 px-4 mb-4 sm:mb-12 lg:mb-0 lg:border-r border-gray-100">
          <div class="max-w-xs mx-auto pb-10 lg:pb-5 text-center border-b border-gray-100 lg:border-b-0">
            <div class="flex mx-auto mb-5 items-center justify-center w-14 h-14 rounded-full">
              <img src={Icon2}  alt="Best Construction company in Bangalore"/>
            </div>
            <h4 class="text-2xl text-gray-900 font-semibold">Commitment to Quality</h4>
            <p class="text-orange-800 font-semibold">Uncompromising commitment to quality and attention to detail</p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 mb-4 px-4 lg:pb-5">
          <div class="max-w-xs mx-auto text-center">
            <div class="flex mx-auto mb-5 items-center justify-center w-14 h-14 rounded-full ">
              <img src={Icon3} alt="Best Construction company in Nagarbhavi"/>
            </div>
            <h4 class="text-2xl text-gray-900 font-semibold">Personalized Approach</h4>
            <p class="text-orange-800 font-semibold"> Tailored solutions to your unique needs and Preferences</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mb-4 -mx-4">
        <div class="w-full lg:w-1/3 px-4 my-12 sm:mt-4 lg:mb-0 lg:border-r border-gray-100">
          <div class="max-w-xs mx-auto pb-2 sm:pb-10 lg:pb-5 text-center border-b border-gray-100 lg:border-b-0">
            <div class="flex mx-auto mb-5 items-center justify-center rounded-full w-14 h-14">
              <img src={Icon4} alt="Best Construction company in RR Nagar"/>
            </div>
            <h4 class="text-2xl text-gray-900 font-semibold">Turnkey Solutions</h4>
            <p class="text-orange-800 font-semibold">Managing every aspect of the construction process</p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 px-4 mb-8 sm:my-12 sm:mt-4 lg:mb-0 lg:border-r border-gray-100">
          <div class="max-w-xs mx-auto pb-2 sm:pb-10 lg:pb-5 text-center border-b border-gray-100 lg:border-b-0">
            <div class="flex mx-auto mb-5 items-center justify-center w-14 h-14 rounded-full">
              <img src={Icon5} alt="Best Construction company in Vijaynagar"/>
            </div>
            <h4 class="text-2xl text-gray-900 font-semibold">Attention to Customer Satisfaction</h4>
            <p class="text-orange-800 font-semibold">Building long-term relationships based on trust</p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 px-4 pb-2 sm:my-12 sm:mt-4 sm:pb-5 ">
          <div class="max-w-xs mx-auto text-center">
            <div class="flex mx-auto mb-5 items-center justify-center w-14 h-14 rounded-full ">
              <img src={Icon6} alt="Best Construction company in Jnanabharathi"/>
            </div>
            <h4 class="text-2xl text-gray-900 font-semibold">Integrity and Professionalism</h4>
            <p class="text-orange-800 font-semibold">Adherence to ethical business Practice & Standards</p>
          </div>
        </div>
      </div>
      </div>
</section> */

      /* <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
     
            <div class="flex-1">
              <h1 class="text-3xl font-bold text-green-900 mb-6 transition-all duration-300 hover:text-shadow-lg hover:text-shadow-green-500/50">
                Urban Nest Propertiess
              </h1>
              <p class="text-gray-600 mb-6">
                At Urban Nest Property, we bring you a seamless and secure way
                to find the perfect villa, farm villa, or luxury home—all from
                the comfort of your space. No more time-consuming visits—our
                platform helps you explore and invest in prime land properties
                with confidence.
              </p>
              <h3 class="text-2xl font-bold text-green-900 mb-4">
                Farm Land Specifications
              </h3>
              <ul class="text-gray-600 list-disc list-inside space-y-2">
                <li>Grand Entrance Arch with Gate</li>
                <li>Security at Entrance Gate</li>
                <li>CCTV Surveillance</li>
                <li>Landscape Garden & Park</li>
                <li>Children's Play Area</li>
                <li>Yoga & Meditation Centre</li>
              </ul>
            </div>

            <div class="flex-1">
              <div class=" h-96 rounded-lg flex items-center justify-center">
                <video class="h-full w-full rounded-lg" controls>
                  <source src={Videos} type="video/mp4" />
             
                </video>
              </div>
            </div>
          </div>
        </div>
      </section> */

      /* <!-- Call to Action Section --> */
      /* <section class="bg-green-900 text-white py-16">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6">
            Ready to Invest in Your Dream Property?
          </h2>
          <p class="text-xl mb-8">
            Contact us today to explore premium real estate opportunities.
          </p>
          <a
            href="/contact"
            class="bg-white text-green-900 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section> */
    // </div>
//   );
// }

// import React from "react";
// import Icon1 from "../../images/icon1.png";
// import Icon2 from "../../images/icon3.png";
// import Icon3 from "../../images/icon5.png";
// import Icon4 from "../../images/icon2.png";
// import Icon5 from "../../images/icon4.png";
// import Icon6 from "../../images/icon6.png";
// import Image from "../../images/2.png";
// import { Video } from "react-feather";
// import Videos from "../../images/video.mp4";

// export default function Section2() {
//   return (
//     <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           <div className="flex-1">
//             <h1 className="text-3xl font-bold text-green-900 mb-6 transition-all duration-300 hover:text-shadow-lg hover:text-shadow-green-500/50">
//               Urban Nest Properties
//             </h1>
//             <p className="text-gray-600 mb-6">
//               At Urban Nest Property, we bring you a seamless and secure way to find the perfect villa, farm villa, or luxury home—all from the comfort of your space.
//             </p>
//             <h3 className="text-2xl font-bold text-green-900 mb-4">
//               Farm Land Specifications
//             </h3>
//             <ul className="text-gray-600 list-disc list-inside space-y-2">
//               <li>Grand Entrance Arch with Gate</li>
//               <li>Security at Entrance Gate</li>
//               <li>CCTV Surveillance</li>
//               <li>Landscape Garden & Park</li>
//               <li>Children's Play Area</li>
//               <li>Yoga & Meditation Centre</li>
//             </ul>
//           </div>
//           <div className="flex-1">
//             <div className="h-96 rounded-lg flex items-center justify-center relative">
//               <video
//                 className="h-full w-full rounded-lg hover:shadow-glow transition-all duration-500"
//                 controls
//               >
//                 <source src={Videos} type="video/mp4" />
//               </video>
//               <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect } from "react";
import { Video } from "react-feather";
import Videos from "../../images/video.mp4";
import "../../../src/section2.css"; // Custom CSS for cursor and animations
import "../../../src/App.css"; // Custom CSS for cursor and animations


export default function Section2() {
  // Cursor animation logic
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const hoverElements = document.querySelectorAll(".hover-effect");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHoverEffect = () => {
      cursor.classList.add("cursor-hover");
    };

    const removeHoverEffect = () => {
      cursor.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", moveCursor);
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", addHoverEffect);
      element.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", addHoverEffect);
        element.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-white relative overflow-hidden">
      {/* Custom Cursor */}
      <div className="custom-cursor">
        <span className="cursor-icon">🏠</span> {/* House icon */}
        <span className="cursor-hover-icon">🔑</span> {/* Key icon */}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content on the Left */}
          <div className="flex-1 animate-fade-in">
            <h1 className="text-3xl font-bold text-green-900 mb-6 transition-all duration-300 hover:text-shadow-lg hover:text-shadow-green-500/50">
              Urban Nest Properties
            </h1>
            <p className="text-gray-600 mb-6">
              At Urban Nest Property, we bring you a seamless and secure way to find the perfect villa, farm villa, or luxury home—all from the comfort of your space.
            </p>
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Farm Land Specifications
            </h3>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li>Grand Entrance Arch with Gate</li>
              <li>Security at Entrance Gate</li>
              <li>CCTV Surveillance</li>
              <li>Landscape Garden & Park</li>
              <li>Children's Play Area</li>
              <li>Yoga & Meditation Centre</li>
            </ul>
          </div>

          {/* Video on the Right */}
          <div className="flex-1 hover-effect">
            <div className="h-96 rounded-lg flex items-center justify-center relative">
              <video
                className="h-full w-full rounded-lg hover:shadow-glow transition-all duration-500"
                controls
              >
                <source src={Videos} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}