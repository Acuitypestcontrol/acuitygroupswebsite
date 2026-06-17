import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,

} from "react-icons/fa";


const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group hidden md:block lg:block">
      <div className="bg-gray-100/90 backdrop-blur-sm py-6 px-3 rounded-l-xl shadow-lg transform translate-x-8 group-hover:translate-x-0 transition-all duration-500">
        <div className="flex flex-col gap-4">
          <Link
            to="https://www.facebook.com/acuity.pest.9"
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <FaFacebookF className="text-[#1877F2] text-xl" />
          </Link>

          <Link
            to="https://www.instagram.com/acuity_pest_control/"
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <FaInstagram className="text-[#E1306C] text-xl" />
          </Link>

          <Link
            to="https://www.youtube.com/@acuityGROUPS"
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <FaYoutube className="text-[#FF0000] text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;
