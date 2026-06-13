import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Maintenance from "../images/RepairingMaintenance.jpg";
import {
  Zap,
  Droplets,
  Hammer,
  Building,
  CheckCircle,
  Wrench,
} from "lucide-react";

const RepairMaintenance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Zap,
      title: "Electrical Services",
      desc: "Wiring & rewiring, lighting installation, switchboard maintenance, and power troubleshooting.",
      features: [
        "Wiring & Rewiring",
        "Lighting Installation",
        "Switchboard Repair",
        "Power Troubleshooting",
      ],
    },
    {
      icon: Droplets,
      title: "Plumbing Services",
      desc: "Pipe leakage repair, drain cleaning, bathroom fittings, and water system maintenance.",
      features: [
        "Leakage Repair",
        "Drain Cleaning",
        "Bathroom Fittings",
        "Water System Maintenance",
      ],
    },
    {
      icon: Hammer,
      title: "Carpentry Services",
      desc: "Furniture repair, door & window fixing, cabinet installation, and wood polishing.",
      features: [
        "Furniture Repair",
        "Door/Window Fixing",
        "Cabinet Installation",
        "Wood Polishing",
      ],
    },
    {
      icon: Building,
      title: "Building Maintenance",
      desc: "Wall & floor repairs, painting & finishing, and structural maintenance.",
      features: [
        "Wall & Floor Repairs",
        "Painting & Finishing",
        "Structural Maintenance",
        "Waterproofing",
      ],
    },
  ];

  const benefits = [
    "Experienced & Certified Technicians",
    "Same-Day Service Available",
    "Quality Spare Parts Used",
    "Transparent Pricing",
    "Emergency Support",
    "Warranty on Repairs",
  ];

  const industries = [
    "Residential Complexes",
    "Corporate Offices",
    "Retail Stores",
    "Industrial Facilities",
    "Hotels & Restaurants",
    "Educational Institutions",
    "Hospitals",
    "Warehouses",
  ];

  // JSON-LD for WebPage
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Repairing & Maintenance Services | Electrical & Plumbing Solutions",
    description:
      "Professional repair and maintenance services including electrical, plumbing, carpentry, and building maintenance for residential and commercial properties.",
    url: "https://acuitygroups.in/repair",
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
        <link rel="canonical" href="https://acuitygroups.in/repair" />
        <title>Property Repair & Maintenance | Acuity Groups Bangalore</title>
        <meta
          name="description"
          content="Need fast property repairs? Get professional plumbing, electrical, and carpentry maintenance for Bangalore homes and commercial spaces. Book today!"
        />
        <meta
          name="keywords"
          content="repair services, maintenance services, electrical repair, plumbing services, carpentry, building maintenance, Bangalore, Acuity Groups"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acuitygroups.in/repair" />
        <meta
          property="og:title"
          content="Repairing & Maintenance Services | Electrical & Plumbing Solutions | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Professional repair and maintenance services including electrical, plumbing, carpentry, and building maintenance for residential and commercial properties."
        />
        <meta
          property="og:image"
          content="https://acuitygroups.in/static/media/RepairingMaintenance.jpg"
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Repairing & Maintenance Services | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Fast and reliable repair and maintenance services – electrical, plumbing, carpentry, and building maintenance."
        />
        <meta
          name="twitter:image"
          content="https://acuitygroups.in/static/media/RepairingMaintenance.jpg"
        />
      </Helmet>

      {/* JSON-LD for WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      <div className="bg-white text-gray-800 overflow-hidden font-['Poppins',system-ui,sans-serif]">
        {/* HERO SECTION with gradient background */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 md:py-32 overflow-hidden h-[550px]">
          {/* BACKGROUND IMAGE LAYER (makes it look like real service banner) */}
          <div className="absolute inset-0">
            <img
              src={Maintenance}
              alt="Repair and Maintenance Services"
              className="w-full h-[550px] object-cover opacity-40"
            />
          </div>

          {/* Glow effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-blue-100 tracking-[4px] text-sm mb-6">
              <Wrench size={14} />
              <span>REPAIR & MAINTENANCE</span>
            </div>

            {/* Heading (banner style) */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-wide">
              Repairing &{" "}
              <span className="text-white">Maintenance Services</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Reliable electrical, plumbing, carpentry, and building maintenance
              services for residential and commercial properties.
            </p>

            {/* BUTTONS */}
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
                  Complete Maintenance Solutions
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Professional Repair & Maintenance
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  We provide complete repair and maintenance support to ensure
                  smooth functioning of your property and infrastructure. Our
                  experienced technicians handle everything from minor fixes to
                  major repairs.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  From electrical faults and plumbing leaks to carpentry work
                  and building upkeep, we deliver fast, reliable, and affordable
                  solutions for homes and businesses.
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
                    <span className="text-gray-600">Technicians</span>
                    <span className="text-2xl font-semibold text-blue-900">
                      50+
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Service Calls / Month</span>
                    <span className="text-2xl font-semibold text-blue-900">
                      1000+
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
                <Wrench size={14} />
                <span>WHAT WE OFFER</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Our Repair &{" "}
                <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                  Maintenance Services
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                Comprehensive solutions to keep your property in perfect
                condition
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100"
                >
                  <div className="w-14 h-14 rounded-xl  flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
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
                We deliver excellence through quality, reliability, and
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
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full text-black tracking-[5px] text-sm font-thin mb-5">
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
                We provide repair & maintenance solutions for a wide range of
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
              Need Repair or Maintenance?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get fast, reliable service from our expert technicians today.
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
          `}
        </style>
      </div>
    </>
  );
};

export default RepairMaintenance;
