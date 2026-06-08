import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MAn from "../images/manpowerout.webp"
import {
  Users,
  Factory,
  Building,
  Shield,
  Hammer,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";

const ManpowerOutsourcing = () => {
  useEffect(() => {
    document.title =
      "Manpower Outsourcing Services | Skilled & Unskilled Staffing";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Factory,
      title: "Industrial Manpower",
      desc: "Skilled and semi-skilled workers for manufacturing, production, and industrial operations.",
      features: [
        "Machine Operators",
        "Production Workers",
        "Packing Staff",
        "Quality Control",
      ],
    },
    {
      icon: Building,
      title: "Facility Management Staff",
      desc: "Trained workforce for housekeeping, cleaning, maintenance, and facility support services.",
      features: [
        "Housekeeping Staff",
        "Cleaning Supervisors",
        "Office Assistants",
        "Maintenance Helpers",
      ],
    },
    {
      icon: Shield,
      title: "Security Manpower",
      desc: "Professional security guards, CCTV operators, and gate supervisors for comprehensive safety.",
      features: [
        "Security Guards",
        "CCTV Operators",
        "Gate Supervisors",
        "Patrol Staff",
      ],
    },
    {
      icon: Hammer,
      title: "Construction Labour",
      desc: "Experienced workers for construction projects including masons, electricians, plumbers, and helpers.",
      features: [
        "Masons & Helpers",
        "Electricians",
        "Plumbers",
        "Site Workers",
      ],
    },
    {
      icon: Users,
      title: "Staffing Solutions",
      desc: "Temporary and permanent staffing for offices, retail, hospitality, and events.",
      features: [
        "Office Staff",
        "Retail Associates",
        "Event Staff",
        "Temp Placements",
      ],
    },
    {
      icon: Briefcase,
      title: "HR & Payroll Support",
      desc: "Complete HR management, payroll processing, and compliance support for outsourced workforce.",
      features: [
        "Payroll Processing",
        "Compliance Management",
        "Attendance Tracking",
        "Statutory Compliance",
      ],
    },
  ];

  const benefits = [
    "Trained & Verified Staff",
    "Quick Replacement Policy",
    "Flexible Contract Terms",
    "PAN India Service Network",
    "Compliance & PF Support",
    "24/7 Deployment Support",
  ];

  const industries = [
    "Manufacturing Units",
    "Corporate Offices",
    "Residential Complexes",
    "Hospitals & Clinics",
    "Educational Institutions",
    "Hotels & Hospitality",
    "Warehouses & Logistics",
    "Construction Sites",
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden font-['Poppins',system-ui,sans-serif]">
      {/* HERO SECTION with gradient background */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 md:py-32 overflow-hidden h-[550px]">
        {/* BACKGROUND IMAGE (real workforce feel) */}
        <div className="absolute inset-0">
          <img
            src={MAn}
            alt="Manpower Outsourcing Services"
            className="w-full object-cover opacity-50 h-[550px]"
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
            <Briefcase size={14} />
            <span>MANPOWER OUTSOURCING</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-wide">
            Manpower{" "}
            <span className="text-white">Outsourcing Services</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Skilled, semi-skilled, and unskilled workforce solutions for
            industries, offices, and construction projects. Reliable staffing
            tailored to your business needs.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contactus"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Hire Manpower
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
                Reliable Workforce Solutions
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Professional Staffing for Every Need
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We provide trained manpower to support businesses in operations,
                maintenance, security, and industrial work. Our rigorous
                screening and training process ensures you get reliable, skilled
                professionals.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From temporary staff for seasonal peaks to permanent workforce
                for long-term projects, we offer flexible outsourcing solutions
                that reduce your HR burden and improve operational efficiency.
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
                Our Impact
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Staff Deployed</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    2000+
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Active Clients</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    150+
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Industries Served</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    15+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Replacement Guarantee</span>
                  <span className="text-2xl font-semibold text-blue-900">
                    24 Hrs
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
              <Briefcase size={14} />
              <span>WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Our Manpower{" "}
              <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Comprehensive staffing solutions across industries
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
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full text-blue-900 tracking-[5px] text-sm font-thin mb-5">
              <Building size={14} />
              <span>INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Trusted Across{" "}
              <span className="bg-gradient-to-r from-blue-900 blue-900 bg-clip-text text-transparent">
                Sectors
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              We provide manpower solutions for a wide range of industries
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
            Need Reliable Manpower?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let us handle your staffing needs with trained, verified
            professionals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contactus"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Hire Manpower
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

export default ManpowerOutsourcing;
