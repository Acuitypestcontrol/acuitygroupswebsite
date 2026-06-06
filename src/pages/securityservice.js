import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Building,
  Home,
  Factory,
  Users,
  Camera,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const SecurityServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Manned Guarding Services",
      desc: "Trained and disciplined security guards for offices, apartments, hospitals, industrial units, educational institutions, and retail spaces.",
      features: ["24/7 Availability", "Quick Response", "Regular Patrols"],
    },
    {
      icon: Building,
      title: "Corporate Security Services",
      desc: "Visitor management, employee access monitoring, lobby security, asset protection, and emergency response support for corporate environments.",
      features: ["Access Control", "Visitor Management", "Emergency Response"],
    },
    {
      icon: Home,
      title: "Residential Security Services",
      desc: "Reliable residential security solutions for gated communities, apartments, villas, and residential layouts.",
      features: ["Community Safety", "Gate Management", "Night Patrols"],
    },
    {
      icon: Factory,
      title: "Industrial Security Services",
      desc: "Industrial protection including gate management, patrol services, material movement monitoring, and unauthorized access prevention.",
      features: [
        "Material Monitoring",
        "Perimeter Security",
        "Shift Management",
      ],
    },
    {
      icon: Users,
      title: "Event Security Management",
      desc: "Professional event security solutions for exhibitions, conferences, public gatherings, and private events.",
      features: ["Crowd Control", "VIP Protection", "Emergency Planning"],
    },
    {
      icon: Camera,
      title: "CCTV Monitoring Support",
      desc: "Surveillance monitoring assistance and security coordination support for enhanced safety management.",
      features: [
        "Real-time Monitoring",
        "Incident Reporting",
        "Coordinated Response",
      ],
    },
  ];

  const benefits = [
    "Professionally Trained Security Personnel",
    "Background Verified Security Staff",
    "24/7 Security Support Solutions",
    "Customized Security Planning",
    "Strong Supervision and Monitoring",
    "Reliable and Disciplined Workforce",
  ];

  const industries = [
    "Corporate Offices",
    "Residential Apartments",
    "Industrial Facilities",
    "Warehouses & Logistics",
    "Hospitals & Healthcare",
    "Educational Institutions",
    "Shopping Malls",
    "Hotels & Hospitality",
    "Retail Stores & Showrooms",
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden font-['Poppins',system-ui,sans-serif]">
      {/* HERO SECTION with gradient background */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-blue-100 tracking-[5px] text-sm font-thin mb-6">
            <Shield size={14} />
            <span>SECURITY SERVICES</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
              Security Services
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Professional security services for commercial, residential,
            industrial, and corporate facilities with trained security personnel
            and reliable safety management solutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contactus"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Get a Quote
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
                Why Security Matters
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Protecting People, Property & Assets
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Acuity Groups provides reliable and professional security
                services designed to protect people, property, assets, and
                business operations. Our trained security personnel, modern
                security practices, and customer-focused approach help
                organizations maintain safe, secure, and well-monitored
                environments.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that every organization has unique security
                requirements. Our security solutions are customized based on
                business operations, property size, risk levels, and client
                expectations.
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
                Security Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Security Personnel</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    300+
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Client Sites</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    150+
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Response Time</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    &lt; 15 Mins
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Training Hours/Year</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    100+
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
              <Shield size={14} />
              <span>WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Our Security{" "}
              <span className="bg-gradient-to-r from-blue-900  to-blue-900 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Comprehensive security solutions tailored to your specific needs
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

      {/* WHY CHOOSE US */}
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
              We provide security solutions for a wide range of industries
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
            Reliable Security Solutions
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Partner with Acuity Groups for professional, dependable, and
            cost-effective security services tailored to your organizational
            needs.
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

      {/* CONTACT INFO BAR */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        `}
      </style>
    </div>
  );
};

export default SecurityServices;
