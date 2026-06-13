import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Pest from "../images/pest.webp";
import {
  Bug,
  Home,
  Building,
  Trees,
  Mouse,
  Droplets,
  CheckCircle,
  Shield,
} from "lucide-react";

const PestManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Home,
      title: "Residential Pest Control",
      desc: "Complete pest control for homes including cockroach, ant, mosquito, bed bug, termite, and rodent removal.",
      features: [
        "Cockroach Control",
        "Ant & Mosquito",
        "Bed Bug Removal",
        "Termite Prevention",
      ],
    },
    {
      icon: Building,
      title: "Commercial Pest Control",
      desc: "Effective pest management for offices, hotels, restaurants, warehouses, and commercial establishments.",
      features: [
        "Office Pest Control",
        "Hotel & Restaurant",
        "Warehouse Treatment",
        "Regular Inspections",
      ],
    },
    {
      icon: Trees,
      title: "Termite Control",
      desc: "Pre and post construction termite treatment, soil treatment, and wood protection for long-term safety.",
      features: [
        "Pre-construction",
        "Post-construction",
        "Soil Treatment",
        "Wood Protection",
      ],
    },
    {
      icon: Mouse,
      title: "Rodent Control",
      desc: "Trapping, baiting, entry sealing, and monitoring systems to eliminate rats and mice.",
      features: [
        "Trapping & Baiting",
        "Entry Sealing",
        "Monitoring System",
        "Prevention Plans",
      ],
    },
    {
      icon: Droplets,
      title: "Mosquito Control",
      desc: "Fogging services, larvicide treatment, and breeding source elimination for mosquito-free environment.",
      features: [
        "Fogging Service",
        "Larvicide Treatment",
        "Breeding Control",
        "Adult Mosquito Control",
      ],
    },
    {
      icon: Shield,
      title: "Integrated Pest Management",
      desc: "Eco-friendly, chemical-free pest management solutions with regular monitoring and prevention.",
      features: [
        "Eco-friendly",
        "Chemical-free",
        "Regular Monitoring",
        "Prevention Focus",
      ],
    },
  ];

  const benefits = [
    "Eco-friendly & Safe Products",
    "Trained & Certified Technicians",
    "Same-Day Service Available",
    "Affordable Pricing",
    "Long-term Prevention Plans",
    "Guaranteed Results",
  ];

  const industries = [
    "Residential Homes",
    "Corporate Offices",
    "Hotels & Restaurants",
    "Hospitals & Clinics",
    "Educational Institutions",
    "Warehouses & Factories",
    "Retail Stores",
    "Food Processing Units",
  ];

  // JSON-LD for WebPage
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pest Management Services | Termite, Rodent & Mosquito Control",
    description:
      "Safe and effective pest control solutions for homes, offices, and commercial spaces. Eco-friendly treatments for termites, rodents, mosquitoes, and more.",
    url: "https://acuitygroups.in/pest",
    publisher: {
      "@type": "Organization",
      name: "Acuity Groups",
      logo: {
        "@type": "ImageObject",
        url: "https://acuitygroups.in/logo.png",
      },
    },
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://acuitygroups.in/pest" />
        <title>
         Commercial & Home Pest Control | Acuity Groups Bangalore
        </title>
        <meta
          name="description"
          content="Struggling with pests? We offer professional, safe treatments for cockroaches, bed bugs, termites, and rodents. Secure your inspection now."
        />
        <meta
          name="keywords"
          content="pest control services, termite treatment, rodent control, mosquito fogging, cockroach control, bed bug removal, integrated pest management, Bangalore, Acuity Groups"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acuitygroups.in/pest" />
        <meta
          property="og:title"
          content="Pest Management Services | Termite, Rodent & Mosquito Control | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Safe and effective pest control solutions for homes, offices, and commercial spaces. Eco-friendly treatments for termites, rodents, mosquitoes, and more."
        />
        <meta
          property="og:image"
          content="https://acuitygroups.in/static/media/pest.webp"
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pest Management Services | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Safe and effective pest control solutions – eco-friendly treatments for termites, rodents, mosquitoes, and more."
        />
        <meta
          name="twitter:image"
          content="https://acuitygroups.in/static/media/pest.webp"
        />
      </Helmet>

      {/* JSON-LD for WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      <div className="bg-white text-gray-800 overflow-hidden font-['Poppins',system-ui,sans-serif]">
        {/* HERO SECTION with gradient background */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 md:py-32 overflow-hidden h-[500px]">
          {/* BACKGROUND IMAGE (pest control real-life feel) */}
          <div className="absolute inset-0">
            <img
              src={Pest}
              alt="Pest Management Services"
              className="w-full h-[500px] object-cover opacity-50"
            />
          </div>

          {/* Animated Spray Can Character */}
          <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 z-10 animate-bounce-slow opacity-90">
            <div className="relative">
              {/* Can */}
              <div className="w-16 h-24 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-lg relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-gray-700 rounded"></div>

                {/* nozzle */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gray-500 rounded-t-md"></div>
              </div>

              {/* Spray particles */}
              <div className="absolute -right-8 top-8">
                <div className="spray-particle particle1"></div>
                <div className="spray-particle particle2"></div>
                <div className="spray-particle particle3"></div>
                <div className="spray-particle particle4"></div>
              </div>

              {/* Face */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-1">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Glow effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-blue-100 tracking-[4px] text-sm mb-6">
              <Bug size={14} />
              <span>PEST MANAGEMENT</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-wide">
              Pest <span className="text-white">Management Services</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Safe and effective pest control solutions for homes, offices, and
              commercial spaces. Eco-friendly treatments for a healthy
              environment.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contactus"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Book Service
              </Link>

              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition"
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
                  Safe & Effective Pest Control
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Professional Pest Management Solutions
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  We provide complete pest management services to eliminate
                  harmful pests and ensure a safe and hygienic environment. Our
                  integrated approach combines prevention, monitoring, and
                  targeted treatments.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Using eco-friendly products and advanced techniques, we
                  protect your property from cockroaches, termites, rodents,
                  mosquitoes, bed bugs, and other pests while ensuring the
                  safety of your family, employees, and pets.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {benefits.slice(0, 4).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-blue-900" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Why Choose Us
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Years Experience</span>
                    <span className="text-2xl font-semibold text-blue-900">
                      19+
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Properties Treated</span>
                    <span className="text-2xl font-semibold text-blue-900">
                      5000+
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Service Calls / Month</span>
                    <span className="text-2xl font-semibold text-blue-900">
                      800+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Satisfaction Rate</span>
                    <span className="text-2xl font-semibold text-blue-900">
                      97%
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
                <Bug size={14} />
                <span>WHAT WE OFFER</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Our Pest{" "}
                <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                  Management Services
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                Comprehensive pest control solutions for every environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <service.icon size={28} className="text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
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
                We deliver excellence through quality, safety, and
                professionalism
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* INDUSTRIES WE SERVE */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full text-blue-900 tracking-[5px] text-sm font-thin mb-5">
                <Building size={14} />
                <span>INDUSTRIES WE SERVE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Trusted Across{" "}
                <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                  Sectors
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                We provide pest management solutions for a wide range of
                industries
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {industries.map((industry, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 p-4 rounded-xl text-center hover:border-blue-300 hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <span className="text-gray-800 font-medium text-sm">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Need Pest Control Services?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get a free inspection and quote from our pest control experts
              today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contactus"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Book Service
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>

        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
            
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .animate-bounce-slow {
              animation: bounce-slow 3s ease-in-out infinite;
            }
            
            @keyframes spray1 {
              0% { transform: translate(0, 0) scale(1); opacity: 1; }
              100% { transform: translate(30px, -20px) scale(0); opacity: 0; }
            }
            @keyframes spray2 {
              0% { transform: translate(0, 0) scale(1); opacity: 1; }
              100% { transform: translate(50px, -10px) scale(0); opacity: 0; }
            }
            @keyframes spray3 {
              0% { transform: translate(0, 0) scale(1); opacity: 1; }
              100% { transform: translate(40px, 10px) scale(0); opacity: 0; }
            }
            @keyframes spray4 {
              0% { transform: translate(0, 0) scale(1); opacity: 1; }
              100% { transform: translate(60px, -30px) scale(0); opacity: 0; }
            }
            @keyframes spray5 {
              0% { transform: translate(0, 0) scale(1); opacity: 1; }
              100% { transform: translate(45px, 20px) scale(0); opacity: 0; }
            }
            .spray-particle {
              position: absolute;
              width: 8px;
              height: 8px;
              background-color: rgba(255,255,255,0.8);
              border-radius: 50%;
              pointer-events: none;
            }
            .particle1 { animation: spray1 1.5s infinite; top: 20px; left: 0; }
            .particle2 { animation: spray2 1.8s infinite 0.3s; top: 15px; left: -5px; }
            .particle3 { animation: spray3 1.6s infinite 0.6s; top: 30px; left: -2px; }
            .particle4 { animation: spray4 2s infinite 0.2s; top: 25px; left: -3px; }
            .particle5 { animation: spray5 1.7s infinite 0.8s; top: 18px; left: -8px; }
          `}
        </style>
      </div>
    </>
  );
};

export default PestManagement;
