import React, { useEffect, useState } from "react";

import Banner1 from "../../images/banner1.avif";
import Banner2 from "../../images/banner2.avif";
import Banner3 from "../../images/banner3.avif";

export default function HeroCarousel() {
  const slides = [
    {
      image: Banner1,
      title: "Professional Security Services",
      desc: "Reliable and trained security personnel for industries, apartments, offices and commercial properties.",
    },

    {
      image: Banner2,
      title: "Complete Facility Management",
      desc: "Integrated housekeeping, maintenance and facility solutions tailored for modern businesses.",
    },

    {
      image: Banner3,
      title: "Trusted Manpower Solutions",
      desc: "Skilled workforce outsourcing and operational support services for all business sectors.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img
            src={slide.image}
            alt="banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* CONTENT */}
      <div className="absolute inset-0 z-30 flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-yellow-400 uppercase tracking-[5px] mb-5">
              ACUITY GROUPS
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-white">
              {slides[currentSlide].title}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              {slides[currentSlide].desc}
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-semibold transition duration-300">
                Explore Services
              </button>

              <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition duration-300 ${
              currentSlide === index ? "bg-yellow-400 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
