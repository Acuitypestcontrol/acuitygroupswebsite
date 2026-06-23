import React, { useEffect, useState, useRef } from "react";
import AboutImage from "../../images/AboutImage.avif";
import SecurityImage from "../../images/security123.avif";
import SoftServices1 from "../../images/softservices.jpg";
import Housekeeping1 from "../../images/home.png";
import FacilityManagement1 from "../../images/facilitymangmentjpg.jpg";
import Pestcontrol from "../../images/pestcontrol.jpg";
import MAnpowerout from "../../images/manpowerout.webp";
import LeadPopup from "../../components/popup";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  Zap,
  Users,
  Building,
  ChevronRight,
  Award,
  Clock,
  Star,
  TrendingUp,
  Headphones,
  CheckCircle,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

import Banner1 from "../../images/banner3.jpg";
import Banner2 from "../../images/banner2.png";
import Banner3 from "../../images/banner1.jpg";

export default function Homepage() {
  const banners = [Banner1, Banner2, Banner3];
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    employees: 0,
  });
  // Add this before the return
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const areas = [
    {
      name: "Integrated Facility Services in Whitefield",
      path: "/integrated-facility-management-whitefield",
    },
    {
      name: "Integrated Facility Services in Electronic City",
      path: "/integrated-facility-management-electronic-city",
    },
    {
      name: "Integrated Facility Services in Koramangala",
      path: "/integrated-facility-management-koramangala",
    },
    {
      name: "Integrated Facility Services in HSR Layout",
      path: "/integrated-facility-management-hsr-layout",
    },
    {
      name: "Integrated Facility Services in JP Nagar",
      path: "/integrated-facility-management-jp-nagar",
    },
    {
      name: "Integrated Facility Services in Dabaspet",
      path: "/integrated-facility-management-dabaspet",
    },
    {
      name: "Integrated Facility Services in Peenya",
      path: "/integrated-facility-management-peenya",
    },
    {
      name: "Integrated Facility Services in Hebbal",
      path: "/integrated-facility-management-hebbal",
    },
    {
      name: "Integrated Facility Services in BEML Layout",
      path: "/integrated-facility-management-beml",
    },
    {
      name: "Integrated Facility Services in Doddaballapur",
      path: "/integrated-facility-management-doddaballapur",
    },
    {
      name: "Integrated Facility Services in Attibele",
      path: "/integrated-facility-management-attibele",
    },
    {
      name: "Integrated Facility Services in Kumbalagodu",
      path: "/integrated-facility-management-kumbalgodu",
    },
  ];
  const faqs = [
    {
      q: "Do you offer cost-effective facility management packages?",
      a: "Yes, we offer flexible service packages suitable for different budgets.",
    },

    {
      q: "Do you provide facility management services in Bangalore?",
      a: "Yes, Acuity Groups provides professional facility management services for residential, commercial and industrial properties across Bangalore.",
    },
    {
      q: "What services are included in facility management?",
      a: "Housekeeping, security services, pest management, maintenance solutions and manpower outsourcing services.",
    },
    {
      q: "Do you provide security guard services?",
      a: "Yes, we provide trained security guards for apartments, offices, hospitals, industries and commercial establishments.",
    },
    {
      q: "Do you offer pest control services?",
      a: "Yes, we provide termite control, rodent control and complete pest management solutions.",
    },
    {
      q: "Do you provide manpower outsourcing services?",
      a: "Yes, we offer skilled and unskilled manpower outsourcing solutions for various industries.",
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowVideo(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statsRef = useRef(null);
  // Auto slide with Ken Burns syncyt
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsTransitioning(false), 1200);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length, isTransitioning]);

  // Animated counters on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const targetYears = 19;
          const targetClients = 10000;
          const targetEmployees = 500;
          const duration = 2000;
          const stepTime = 20;
          const stepsYears = targetYears / (duration / stepTime);
          const stepsClients = targetClients / (duration / stepTime);
          const stepsEmployees = targetEmployees / (duration / stepTime);
          let currentYears = 0;
          let currentClients = 0;
          let currentEmployees = 0;

          const timer = setInterval(() => {
            if (currentYears < targetYears) {
              currentYears = Math.min(currentYears + stepsYears, targetYears);
              setCounters((prev) => ({
                ...prev,
                years: Math.floor(currentYears),
              }));
            }
            if (currentClients < targetClients) {
              currentClients = Math.min(
                currentClients + stepsClients,
                targetClients,
              );
              setCounters((prev) => ({
                ...prev,
                clients: Math.floor(currentClients),
              }));
            }
            if (currentEmployees < targetEmployees) {
              currentEmployees = Math.min(
                currentEmployees + stepsEmployees,
                targetEmployees,
              );
              setCounters((prev) => ({
                ...prev,
                employees: Math.floor(currentEmployees),
              }));
            }
            if (
              currentYears >= targetYears &&
              currentClients >= targetClients &&
              currentEmployees >= targetEmployees
            ) {
              clearInterval(timer);
            }
          }, stepTime);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Services with individual paths
  const services = [
    {
      title: "Security Services",
      desc: "Professional security guard services for apartments, offices, industries, hospitals and commercial establishments.",
      image: SecurityImage,
      path: "/securityservice",
    },
    {
      title: "Soft Services",
      desc: "Comprehensive housekeeping, cleaning and facility support services for commercial and residential properties.",
      image: SoftServices1,
      path: "/softservices",
    },
    {
      title: "Repair and Maintance",
      desc: "Professional repair and maintenance services in Bangalore for offices, residential buildings, hospitals, and industrial facilities, ensuring smooth operations, safety, and long-lasting infrastructure performance.",
      image: Housekeeping1,
      path: "/repair",
    },
    {
      title: "Facility Management",
      desc: "Integrated facility management services including maintenance, operations, support staff and building management solutions.",
      image: FacilityManagement1,
      path: "/facilitymanagment1",
    },
    {
      title: "Pest Management",
      desc: "Safe and effective pest control services including termite, rodent and cockroach management.",
      image: Pestcontrol,
      path: "/pest",
    },
    {
      title: "Manpower Outsourcing",
      desc: "Skilled and unskilled manpower outsourcing solutions for businesses across multiple industries.",
      image: MAnpowerout,
      path: "/manpower",
    },
  ];

  const industries = [
    "Corporate Offices",
    "Industries",
    "Hospitals",
    "Hotels",
    "Apartments",
    "Warehouses",
    "Shopping Malls",
    "IT Companies",
  ];

  return (
    <>
      {/* <LeadPopup /> */}

      {/* Bangalore Areas Grid */}
      {/* <div className="bg-white rounded-2xl p-8 shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          📍 Service Areas in Bangalore
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {areas.map((area, index) => (
            <Link
              key={index}
              to={area.path}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-lg transition-all group"
            >
              <span className="text-yellow-500 group-hover:translate-x-1 transition">
                📍
              </span>
              {area.name}
            </Link>
          ))}
        </div>
      </div> */}
      <div className="bg-white text-black overflow-hidden font-['Poppins',system-ui,sans-serif]">
        <Helmet>
          <link rel="canonical" href="https://www.acuitygroups.in/" />
          <title>
            Acuity Groups | Facility Management & Security Services in Bangalore
          </title>
          <meta
            name="description"
            content="Acuity Groups Bangalore: Security, housekeeping, pest control, manpower, electrical maintenance for residential, commercial & industrial properties."
          />
        </Helmet>
        <section className="relative w-90 h-48 md:w-full md:h-screen overflow-hidden bg-black">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
                currentSlide === index
                  ? "opacity-100 scale-100 z-20"
                  : "opacity-0 scale-105 z-10"
              }`}
            >
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}

          {/* Buttons Only */}

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning && index !== currentSlide) {
                    setIsTransitioning(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsTransitioning(false), 1200);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-lime-400 w-8"
                      : "bg-white/60 w-2"
                  }`}
                />
              </button>
            ))}
          </div>
        </section>

        {/* <div className="">
        <Link
          to="/pages/servicepage"
          className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-blue-800 transition-all"
        >
          Explore Services
        </Link>

        <Link
          to="/contactus"
          className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-gray-100 transition-all"
        >
          Contact Us
        </Link>
      </div> */}

        {/* STATS SECTION */}
        <section
          ref={statsRef}
          className="relative z-40 px-6 md:px-12 md:py-20 lg:py-20 hidden lg:block md:block"
        >
          <div className="md:max-w-7xl mx-auto">
            <div className="grid grid-cols-4 lg:grid-cols-4 lg:gap-6 gap-10">
              <div className="group bg-white border border-gray-200 rounded-3xl md:p-8 text-center hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2">
                <Award className="w-12 h-12 text-blue-900 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl md:text-5xl font-black text-black mb-3">
                  {counters.years}+
                </h2>
                <p className="text-gray-600 md:text-lg font-medium">
                  Years Experience
                </p>
              </div>
              <div className="group bg-white border border-gray-200 rounded-3xl md:p-8 text-center hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2">
                <Star className="w-12 h-12 text-blue-900 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl md:text-5xl lg:text-5xl font-black text-black mb-3">
                  {counters.clients}+
                </h2>
                <p className="text-gray-600 md:text-lg font-medium">
                  Happy Clients
                </p>
              </div>
              <div className="group bg-white border border-gray-200 rounded-3xl md:p-8 text-center hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2">
                <Users className="w-12 h-12 text-blue-900 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl md:text-5xl lg:text-5xl font-black text-black mb-3">
                  {counters.employees}+
                </h2>
                <p className="text-gray-600 md:text-lg font-medium">
                  Skilled Employees
                </p>
              </div>
              <div className="group bg-white border border-gray-200 rounded-3xl md:p-8 text-center hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2">
                <Clock className="w-12 h-12 text-blue-900 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl md:text-5xl lg:text-5xl font-black text-black mb-3">
                  24/7
                </h2>
                <p className="text-gray-600 md:text-lg font-medium">
                  Support Service
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className="bg-gray-50 py:12 md:py-24 px-6 md:px-12 overflow-hidden pt-10 md:pt-0 lg:pt-0">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative hidden md:block lg:block">
              <img
                src={AboutImage}
                alt="Acuity Groups Facility Management Services"
                className="rounded-3xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-8 md:-right-8  bg-blue-900 text-white px-4 md:px-8 py-6 rounded-3xl shadow-2xl">
                <h2 className="text-5xl text-white">19+</h2>
                <p className="font-thin text-lg text-white">Years Experience</p>
              </div>
            </div>

            <div>
              <p className="text-black uppercase tracking-[5px] mb-5 font-thin">
                About Acuity Groups
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                Trusted
                <span className="text-blue-900"> Facility Management </span>&
                Security Services Company
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Acuity Groups is one of the leading facility management and
                security service providers in India, delivering reliable,
                professional and cost-effective solutions for residential,
                commercial and industrial spaces.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We specialize in integrated facility management services
                including housekeeping services, security guard services,
                manpower outsourcing, pest management, electrical maintenance,
                repair & maintenance solutions and corporate support services.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                With advanced operational systems, trained professionals and
                24/7 customer support, Acuity Groups has become a trusted
                partner for apartments, IT companies, factories, hospitals,
                warehouses, educational institutions and commercial
                establishments across India.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-blue-900"></div>
                  <p className="text-gray-800 text-lg">
                    Professional Security Services
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-blue-900"></div>
                  <p className="text-gray-800 text-lg">
                    Expert Facility Management
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-blue-900"></div>
                  <p className="text-gray-800 text-lg">
                    Pest Control Solutions
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-blue-900"></div>
                  <p className="text-gray-800 text-lg">
                    Electrical Maintenance
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-blue-900"></div>
                  <p className="text-gray-800 text-lg">Manpower Outsourcing</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-blue-900"></div>
                  <p className="text-gray-800 text-lg">24/7 Customer Support</p>
                </div>
              </div>

              <Link to="/aboutus">
                <button className="bg-blue-900 hover:bg-blue-700 text-white hover:text-white px-10 py-4 rounded-full font-thin text-lg transition duration-300 hover:scale-105 shadow-md mb-10 md:mb-10 lg:mb-10">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION with proper links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-28">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/40 group-hover:to-indigo-50/30 transition-all duration-500 z-0 rounded-2xl" />

              {/* Image container with rounded top corners */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className=" w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Decorative overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="relative z-10 p-6">
                {/* Title with accent bar */}
                <div className="flex items-start gap-2 mb-4">
                  <div className="w-1 h-7 bg-blue-500 rounded-full group-hover:h-9 transition-all duration-300" />
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {service.desc}
                </p>

                {/* Enhanced "Learn More" button */}
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 text-blue-800 text-sm font-semibold border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Learn More
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_0_2px_rgba(59,130,246,0.2)]" />
              </div>
            </div>
          ))}
        </div>
        {/* Why choose us  */}

        <section className="py-10 md:py-20 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-4">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Why Choose Acuity Groups?
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6 "></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto sm:text-start ">
                We provide reliable facility management, security, housekeeping,
                pest management and manpower outsourcing services with a
                commitment to quality and customer satisfaction.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "19+ Years of Industry Experience",
                  Icon: TrendingUp,
                  color: "blue",
                },
                {
                  title: "Trained & Verified Workforce",
                  Icon: Users,
                  color: "green",
                },
                {
                  title: "24/7 Customer Support",
                  Icon: Headphones,
                  color: "orange",
                },
                {
                  title: "Customized Facility Solutions",
                  Icon: Shield,
                  color: "purple",
                },
                {
                  title: "Competitive Pricing",
                  Icon: TrendingUp,
                  color: "teal",
                },
                { title: "Quick Response Time", Icon: Zap, color: "red" },
                {
                  title: "Quality Assurance & Compliance",
                  Icon: Award,
                  color: "indigo",
                },
                {
                  title: "Professional Service Delivery",
                  Icon: CheckCircle,
                  color: "emerald",
                },
              ].map((item, idx) => {
                const colorMap = {
                  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
                  green: "bg-green-50 text-green-600 group-hover:bg-green-600",
                  orange:
                    "bg-orange-50 text-orange-600 group-hover:bg-orange-600",
                  purple:
                    "bg-purple-50 text-purple-600 group-hover:bg-purple-600",
                  teal: "bg-teal-50 text-teal-600 group-hover:bg-teal-600",
                  red: "bg-red-50 text-red-600 group-hover:bg-red-600",
                  indigo:
                    "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600",
                  emerald:
                    "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600",
                };
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  >
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${colorMap[item.color]} group-hover:text-white`}
                    >
                      <item.Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Optional CTA */}
            <div className="text-center mt-12">
              <Link
                to="/contactus"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
              >
                Get Started Today
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE - Animated Marquee */}
        <section className="py-10 md:py-20 lg:py-20 px-6 md:px-12 bg-gray-50">
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
            </div>

            <div className="relative overflow-hidden py-6">
              <div className="flex animate-marquee whitespace-nowrap gap-8">
                {[...industries, ...industries].map((industry, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-3 bg-white border border-gray-200 px-8 py-4 rounded-full text-gray-700 font-medium text-lg hover:border-blue-300 hover:text-blue-900 transition-all duration-300 shadow-sm"
                  >
                    <Building size={18} className="text-blue-900" />
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-10 md:py-24 bg-white px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-blue-900 uppercase tracking-[5px] mb-4 font-thin">
                TESTIMONIALS
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Acuity Groups provides excellent security and facility
                  management services. Their staff is professional and reliable.
                </p>
                <h3 className="text-blue-900 font-thin text-xl">
                  Corporate Client
                </h3>
              </div>
              <div className="bg-gray-50 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Their housekeeping and maintenance services helped our
                  business operations run smoothly and efficiently.
                </p>
                <h3 className="text-blue-900 font-thin text-xl">
                  Facility Manager
                </h3>
              </div>
              <div className="bg-gray-50 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Highly trained security personnel and quick support. Strongly
                  recommended for commercial properties.
                </p>
                <h3 className="text-blue-900 font-thin text-xl">
                  Business Owner
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="py-10 md:py-20 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.q}
                    </h3>
                    <div className="flex-shrink-0 text-blue-600">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "pb-6 max-h-96" : "max-h-0 pb-0"}`}
                  >
                    <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Link
                to="/contactus"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md"
              >
                Contact Us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        {/* VIDEO SECTION (YOUTUBE) */}
        <section
          ref={videoRef}
          className="py-10 md:py-20 px-6 md:px-12 bg-white"
        >
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Our Company <span className="text-blue-900">Overview</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            {showVideo && (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/t4mzk3InKrI?autoplay=1&mute=1"
                title="Company Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </section>
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Facility Management Services Across Bangalore
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We provide professional facility management solutions across all
                major areas of Bangalore.
              </p>
            </div>

            {/* Service Cards (optional – adds more visuals) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: "Commercial Cleaning",
                  icon: "🧹",
                  desc: "Office, mall, bank cleaning",
                },
                {
                  title: "Home Services",
                  icon: "🏠",
                  desc: "Deep cleaning, mopping, sweeping",
                },
                {
                  title: "Hotel Housekeeping",
                  icon: "🏨",
                  desc: "Room & lobby maintenance",
                },
                {
                  title: "Facility Maintenance",
                  icon: "🔧",
                  desc: "Electrical, plumbing, repairs",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
                >
                  <div className="text-5xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Bangalore Areas Grid */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Service Areas in Bangalore
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {areas.map((area, index) => (
                  <Link
                    key={index}
                    to={area.path}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 p-4 rounded-lg border border-gray-100 transition-all group"
                  >
                    <span className="text-yellow-500">📍</span>
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-14">
              <a
                href="/pages/servicepage"
                className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                View All Services in Bangalore →
              </a>
            </div>
          </div>
        </section>
        {/* Custom CSS for marquee animation */}
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
            width: fit-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
        </style>
      </div>
    </>
  );
}
