import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Facility from "../images/facility.jpg";
import {
  Building,
  Wrench,
  Sparkles,
  HardHat,
  Users,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";

const FacilityManagement = () => {
  const services = [
    {
      icon: Building,
      title: "Integrated Facility Management",
      desc: "Complete facility management solutions for commercial buildings, offices, residential properties, and industrial facilities.",
      features: [
        "24/7 Operations",
        "Preventive Maintenance",
        "Energy Management",
      ],
    },
    {
      icon: Wrench,
      title: "Building Maintenance",
      desc: "Routine building inspections, repairs, preventive maintenance, and operational support services.",
      features: [
        "Structural Inspections",
        "Repair Services",
        "Safety Compliance",
      ],
    },
    {
      icon: Sparkles,
      title: "Housekeeping Management",
      desc: "Professional housekeeping supervision, cleaning coordination, and hygiene maintenance services.",
      features: ["Staff Supervision", "Quality Audits", "Inventory Management"],
    },
    {
      icon: HardHat,
      title: "Technical Support Services",
      desc: "Electrical, plumbing, HVAC, and technical maintenance support for smooth facility operations.",
      features: ["Electrical Systems", "Plumbing", "HVAC Maintenance"],
    },
    {
      icon: Users,
      title: "Vendor Management",
      desc: "Efficient coordination and supervision of third-party vendors and service providers.",
      features: [
        "Contract Management",
        "Performance Tracking",
        "Cost Optimization",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Asset Management",
      desc: "Facility asset tracking, maintenance scheduling, and operational monitoring support services.",
      features: [
        "Asset Inventory",
        "Maintenance Scheduling",
        "Lifecycle Tracking",
      ],
    },
  ];

  const industries = [
    "Corporate Offices",
    "Commercial Buildings",
    "Residential Apartments",
    "Industrial Facilities",
    "Hospitals & Healthcare",
    "Educational Institutions",
    "Shopping Malls",
    "Warehouses",
    "Hotels & Hospitality",
  ];

  const benefits = [
    "Professional Facility Management Team",
    "Customized Operational Solutions",
    "Reliable Maintenance Support",
    "Improved Operational Efficiency",
    "Cost-effective Service Management",
    "High Standards of Safety & Hygiene",
  ];

  // JSON-LD for WebPage
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Integrated Facility Management Services | Acuity Groups",
    description:
      "Maximize your asset value. Discover professional facility management for commercial, residential, & industrial properties from Acuity Groups. Apply today.",
    url: "https://acuitygroups.in/facilitymanagment1",
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
        <link
          rel="canonical"
          href="https://acuitygroups.in/facilitymanagment1"
        />
        <title>
          Integrated Facility Management Services | Acuity Groups Bangalore
        </title>
        <meta
          name="description"
          content="Professional facility management services including building maintenance, housekeeping, technical support, vendor management, and asset management for commercial, residential, and industrial properties in Bangalore."
        />
        <meta
          name="keywords"
          content="facility management services, integrated facility management, building maintenance, housekeeping management, technical support, vendor management, asset management, Bangalore, Acuity Groups"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://acuitygroups.in/facilitymanagment1"
        />
        <meta
          property="og:title"
          content="Integrated Facility Management Services | Acuity Groups Bangalore"
        />
        <meta
          property="og:description"
          content="Professional facility management services including building maintenance, housekeeping, technical support, vendor management, and asset management for commercial, residential, and industrial properties."
        />
        <meta
          property="og:image"
          content="https://acuitygroups.in/static/media/facility.jpg"
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Integrated Facility Management Services | Acuity Groups Bangalore"
        />
        <meta
          name="twitter:description"
          content="Professional facility management services including building maintenance, housekeeping, technical support, vendor management, and asset management."
        />
        <meta
          name="twitter:image"
          content="https://acuitygroups.in/static/media/facility.jpg"
        />
      </Helmet>

      {/* JSON-LD for WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      <div className="bg-white text-gray-800 overflow-hidden font-['Poppins',system-ui,sans-serif]">
        {/* HERO SECTION with gradient background */}
        <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <img
              src={Facility}
              alt="Facility Management"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-blue-950/50" />
          </div>

          {/* SOFT GLOW */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          {/* CONTENT */}
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-blue-100 tracking-[4px] text-sm mb-6">
              <Building size={14} />
              FACILITY MANAGEMENT
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Integrated{" "}
              <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                Facility Management
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Complete facility management solutions for commercial,
              residential, industrial, and corporate properties with
              professional operational support.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contactus"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Get a Quote
              </Link>

              <Link
                to="/services"
                className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition"
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
                  Why Facility Management Matters
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Improve Operational Efficiency & Safety
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Acuity Groups provides complete facility management services
                  designed to improve operational efficiency, workplace
                  maintenance, safety, and business productivity.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our integrated facility management solutions help
                  organizations maintain high operational standards while
                  ensuring smooth day-to-day facility operations.
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
                  Why Partner With Us
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Years of Experience</span>
                    <span className="text-2xl font-semibold text-blue-900">
                      19+
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Facilities Managed</span>
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
                    <span className="text-gray-600">Client Satisfaction</span>
                    <span className="text-2xl font-semibold text-blue-900">
                      98%
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
                <Building size={14} />
                <span>WHAT WE OFFER</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Our Facility{" "}
                <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                  Management Services
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                Comprehensive solutions to keep your facilities running smoothly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                We provide facility management solutions for a wide range of
                industries
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((industry, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 p-5 rounded-xl text-center hover:border-blue-300 hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <span className="text-gray-800 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-800 to-blue-700">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Reliable Facility Management Solutions
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Partner with Acuity Groups for professional facility management
              services designed to improve operational efficiency and workplace
              maintenance standards.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contactus"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Contact Us
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

export default FacilityManagement;
