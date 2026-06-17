import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Factory,
  Building2,
  Shield,
  Hammer,
  CheckCircle,
  Briefcase,
  Clock,
  Award,
  PhoneCall,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import ManpowerHero from "../images/manpowerout.webp";
import IndustrialManpower from "../images/industrrialmanpower.png";
import FacilityStaff from "../images/integratedcom.jpg";
import SecurityManpower from "../images/securityacuity.jpg";
import ConstructionLabour from "../images/labours.jpg";
import StaffingSolutions from "../images/staffing.jpg";
import PayrollSupport from "../images/now.jpg";

const ManpowerOutsourcing = () => {
  const services = [
    {
      image: IndustrialManpower,
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
      image: FacilityStaff,
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
      image: SecurityManpower,
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
      image: ConstructionLabour,
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
      image: StaffingSolutions,
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
      image: PayrollSupport,
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
    { text: "Trained & Verified Staff", icon: Users },
    { text: "Quick Replacement Policy", icon: Clock },
    { text: "Flexible Contract Terms", icon: Briefcase },
    { text: "PAN India Service Network", icon: Building2 },
    { text: "Compliance & PF Support", icon: Shield },
    { text: "24/7 Deployment Support", icon: Award },
  ];

  const stats = [
    { label: "Staff Deployed", value: "2000+", icon: Users },
    { label: "Active Clients", value: "150+", icon: Award },
    { label: "Industries Served", value: "15+", icon: Factory },
    { label: "Replacement Guarantee", value: "24 Hrs", icon: Clock },
  ];

  const whyChoose = [
    "Trained & verified workforce",
    "Quick replacement policy",
    "Flexible contract options",
    "PAN India deployment support",
    "PF, ESI & compliance management",
    "24/7 workforce assistance",
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
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={ManpowerHero}
            alt="Manpower Outsourcing Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Briefcase size={16} className="text-yellow-300" />
              <span>MANPOWER OUTSOURCING</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Professional Manpower Outsourcing Services
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
              Skilled, semi-skilled, and unskilled workforce solutions for
              industries, offices, construction projects, and facility
              operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contactus"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition flex items-center gap-2"
              >
                Hire Manpower <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="-mt-20 relative z-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center">
                <stat.icon size={26} />
              </div>
              <h3 className="text-3xl font-black text-gray-900">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-full text-blue-900 text-sm font-bold mb-5">
              <Sparkles size={15} />
              <span>RELIABLE WORKFORCE SOLUTIONS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Professional Staffing for Every Need
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We provide trained manpower to support businesses in operations,
              maintenance, security, facility support, construction, and
              industrial work.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              From temporary staff for seasonal requirements to permanent
              workforce for long-term projects, we offer flexible outsourcing
              solutions that reduce HR burden and improve operational
              efficiency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900">{benefit.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-5 py-2 rounded-full text-blue-900 text-sm font-bold mb-5">
              <Briefcase size={15} />
              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Manpower Solutions
            </h2>

            <p className="text-gray-500 text-lg">
              Comprehensive staffing solutions for industries, offices,
              security, facility support, and construction needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-5">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle size={15} className="text-blue-900" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contactus"
                    className="text-blue-900 font-bold inline-flex items-center gap-2"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-blue-950 rounded-[40px] p-8 md:p-14 text-white grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Why Choose Acuity Groups?
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              We help businesses reduce hiring challenges with trained,
              verified, compliant, and professionally managed manpower
              solutions.
            </p>

            <Link
              to="/contactus"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-2xl p-5"
              >
                <CheckCircle className="text-yellow-300 mb-3" size={24} />
                <h3 className="font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-5 py-2 rounded-full text-blue-900 text-sm font-bold mb-5">
              <Building2 size={15} />
              <span>INDUSTRIES WE SERVE</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Trusted Across Sectors
            </h2>

            <p className="text-gray-500 text-lg">
              We provide manpower outsourcing solutions for a wide range of
              business sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-5 text-center hover:shadow-lg transition"
              >
                <span className="font-bold text-gray-800 text-sm">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Need Reliable Manpower?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Let us handle your staffing needs with trained, verified, and
            professionally managed workforce solutions.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link
              to="/contactus"
              className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition inline-flex items-center gap-2"
            >
              Hire Manpower <ArrowRight size={18} />
            </Link>

            <a
              href="tel:9941229005"
              className="border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-blue-900 hover:text-white transition inline-flex items-center gap-2"
            >
              <PhoneCall size={18} />
              +91 99412 29005
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManpowerOutsourcing;