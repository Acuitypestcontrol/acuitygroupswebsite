import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Building,
  Users,
  Droplets,
  Wrench,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const SoftServices = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Housekeeping Services",
      desc: "Complete housekeeping solutions for offices, apartments, hospitals, malls, and industrial facilities.",
      features: ["Daily cleaning", "Waste management", "Floor care"],
    },
    {
      icon: Building,
      title: "Corporate Cleaning",
      desc: "Professional office cleaning including workstation cleaning, washroom sanitation, pantry cleaning, and floor maintenance.",
      features: [
        "Workstation cleaning",
        "Washroom sanitation",
        "Pantry maintenance",
      ],
    },
    {
      icon: Droplets,
      title: "Deep Cleaning Services",
      desc: "Advanced deep cleaning for commercial, residential, and industrial spaces using modern equipment.",
      features: [
        "High-pressure cleaning",
        "Carpet shampooing",
        "Upholstery cleaning",
      ],
    },
    {
      icon: CheckCircle,
      title: "Washroom Hygiene",
      desc: "Complete washroom hygiene management with sanitization, odor control, and hygiene monitoring.",
      features: ["Sanitization", "Odor control", "Hygiene monitoring"],
    },
  ];

  const benefits = [
    "Trained & Certified Staff",
    "Eco-friendly Products",
    "Modern Equipment",
    "Flexible Scheduling",
    "Quality Assurance",
    "24/7 Support",
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden font-['Poppins',system-ui,sans-serif]">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-blue-100 tracking-[5px] text-sm font-thin mb-6">
            <Sparkles size={14} />
            <span>SOFT SERVICES</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
              Soft Services
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive housekeeping, corporate cleaning, and hygiene
            solutions for corporate offices, residential properties, industrial
            facilities, and institutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contactus"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </Link>
            <Link
              to="/pest"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:text-blue-900 transition"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-900 uppercase tracking-[5px] mb-4 font-thin">
                Why Soft Services Matter
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Maintaining Clean & Productive Environments
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At Acuity Groups, we provide reliable and professional soft
                services designed to maintain clean, hygienic, organized, and
                productive environments for commercial, residential, industrial,
                and corporate facilities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our trained workforce, modern equipment, and quality-focused
                approach help businesses maintain high operational standards
                while creating a safe and comfortable atmosphere for employees,
                clients, and visitors.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-blue-900" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Satisfied Clients</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    500+
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Trained Staff</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    200+
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Service Locations</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    Pan India
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Response Time</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    &lt; 2 Hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full text-black tracking-[5px] text-sm font-thin mb-5">
              <Sparkles size={14} />
              <span>WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Our Soft{" "}
              <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Comprehensive solutions tailored to your facility needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon size={28} className="text-blue-900" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                Acuity Groups
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              We deliver excellence through quality, reliability, and
              professionalism
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-sm"
              >
                <CheckCircle className="text-blue-900 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-800 to-blue-700">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Need Professional Soft Services?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today for a free consultation and customized service plan
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="//contactus"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Request a Quote
            </Link>
            <a
              href="tel:9941229005"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT INFO BAR */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        `}
      </style>
    </div>
  );
};

export default SoftServices;
