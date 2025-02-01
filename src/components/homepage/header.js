// import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css"; // Import Splide styles
// import One from "../../images/1.jpg";
// import Two from "../../images/2.jpg";
// import Three from "../../images/3.jpg";

// export default function Header() {
//   return (
//     <div className="w-full mx-auto">
//       <Splide
//         options={{
//           perPage: 1, // Show 3 images at a time
//           gap: "1rem", // Space between images
//           pagination: false,
//           arrows: true,
//           autoplay: true,
//           interval: 3000,
//           type: "loop",
//         }}
//         aria-label="Image Slider"
//       >
//         <SplideSlide>
//           <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
//             <img src={Two} alt="Image 1" className="w-full h-auto rounded-lg" />
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
//             <img src={Three} alt="Image 1" className="w-full h-auto rounded-lg" />
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
//             <img src={One} alt="Image 1" className="w-full h-auto rounded-lg" />
//           </div>
//         </SplideSlide>
//       </Splide>
//     </div>
//   );
// }
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import One from "../../images/1.jpg";
import Two from "../../images/2.jpg";
import Three from "../../images/3.jpg";

export default function Header() {
  return (
    <div className="w-full mx-auto relative overflow-hidden">
      <Splide
        options={{
          perPage: 1,
          gap: "1rem",
          pagination: false,
          arrows: true,
          autoplay: true,
          interval: 3000,
          type: "loop",
        }}
        aria-label="Image Slider"
      >
        <SplideSlide>
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg hover:shadow-glow transition-all duration-500">
            <img src={Two} alt="Image 1" className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg hover:shadow-glow transition-all duration-500">
            <img src={Three} alt="Image 2" className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg hover:shadow-glow transition-all duration-500">
            <img src={One} alt="Image 3" className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}