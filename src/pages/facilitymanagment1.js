import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  Clock,
  Award,
  PhoneCall,
  ArrowRight,
  CheckCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import FacilityHero from "../images/facility.jpg";
import IntegratedFM from "../images/Integrated Facility Management.jpg";
import BuildingMaintenance from "../images/buildingmantain.webp"
import HousekeepingManagement from "../images/housekeepingmanagment.jpg";
import TechnicalSupport from "../images/electrical.jpg";
import VendorManagement from "../images/Vendor Management.jpg";
import AssetManagement from "../images/Asset Management.jpg";

const FacilityManagement = () => {
  const services = [
    {
      image: IntegratedFM,
      title: "Integrated Facility Management",
      desc: "Complete facility management solutions for commercial buildings, offices, residential properties, and industrial facilities.",
      features: ["24/7 Operations", "Preventive Maintenance", "Energy Management"],
    },
    {
      image: BuildingMaintenance,
      title: "Building Maintenance",
      desc: "Routine building inspections, repairs, preventive maintenance, and operational support services.",
      features: ["Structural Inspections", "Repair Services", "Safety Compliance"],
    },
    {
      image: HousekeepingManagement,
      title: "Housekeeping Management",
      desc: "Professional housekeeping supervision, cleaning coordination, and hygiene maintenance services.",
      features: ["Staff Supervision", "Quality Audits", "Inventory Management"],
    },
    {
      image: TechnicalSupport,
      title: "Technical Support Services",
      desc: "Electrical, plumbing, HVAC, and technical maintenance support for smooth facility operations.",
      features: ["Electrical Systems", "Plumbing", "HVAC Maintenance"],
    },
    {
      image: VendorManagement,
      title: "Vendor Management",
      desc: "Efficient coordination and supervision of third-party vendors and service providers.",
      features: ["Contract Management", "Performance Tracking", "Cost Optimization"],
    },
    {
      image: AssetManagement,
      title: "Asset Management",
      desc: "Facility asset tracking, maintenance scheduling, and operational monitoring support services.",
      features: ["Asset Inventory", "Maintenance Scheduling", "Lifecycle Tracking"],
    },
  ];

  const benefits = [
    { text: "Professional Facility Management Team", icon: Users },
    { text: "Customized Operational Solutions", icon: Building2 },
    { text: "Reliable Maintenance Support", icon: ShieldCheck },
    { text: "Improved Operational Efficiency", icon: Award },
    { text: "Cost-effective Service Management", icon: CheckCircle },
    { text: "High Standards of Safety & Hygiene", icon: Sparkles },
  ];

  const stats = [
    { label: "Years Experience", value: "19+", icon: Award },
    { label: "Facilities Managed", value: "200+", icon: Building2 },
    { label: "Service Locations", value: "Pan India", icon: Users },
    { label: "Client Satisfaction", value: "98%", icon: Clock },
  ];

  const whyChoose = [
    "24/7 facility operations support",
    "Preventive maintenance planning",
    "Dedicated facility managers",
    "Vendor coordination support",
    "Cost optimization strategies",
    "Safety and compliance management",
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

  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={FacilityHero}
            alt="Facility Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Building2 size={16} className="text-yellow-300" />
              <span>FACILITY MANAGEMENT</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Integrated Facility Management Services
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
              Complete facility management solutions for commercial,
              residential, industrial, and corporate properties with
              professional operational support.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contactus"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition flex items-center gap-2"
              >
                Get a Quote <ArrowRight size={18} />
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
              <span>WHY FACILITY MANAGEMENT MATTERS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Improve Operational Efficiency & Safety
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Acuity Groups provides complete facility management services
              designed to improve workplace maintenance, safety, productivity,
              and daily business operations.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our integrated facility management solutions help organizations
              maintain high operational standards while ensuring smooth
              day-to-day facility performance.
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
              <Building2 size={15} />
              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Facility Management Services
            </h2>

            <p className="text-gray-500 text-lg">
              Comprehensive solutions to keep your facilities running smoothly
              and professionally.
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
              We manage your facilities with trained teams, planned operations,
              preventive maintenance, and professional supervision.
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
              We provide facility management solutions for different business
              environments and property types.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-5 text-center hover:shadow-lg transition"
              >
                <span className="font-bold text-gray-800">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Need Reliable Facility Management?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Partner with Acuity Groups for professional facility management
            services designed to improve efficiency, safety, and maintenance
            standards.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link
              to="/contactus"
              className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition inline-flex items-center gap-2"
            >
              Request a Quote <ArrowRight size={18} />
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

export default FacilityManagement;