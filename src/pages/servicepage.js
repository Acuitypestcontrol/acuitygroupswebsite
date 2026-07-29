import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

import Ourservices from "../images/oursevices.jpg";
import FacilityImg from "../images/facility.jpg";
import SecurityImg from "../images/security iamge1.jpg";
import HousekeepingImg from "../images/housekeeping.jpg";
import PestImg from "../images/pest7889.jpg";
import ManpowerImg from "../images/manpowerout.webp";
import MaintenanceImg from "../images/repair.jpg";

const services = [
  {
    number: "01",
    title: "Integrated Facility Management",
    description:
      "Complete facility management solutions for commercial, residential, industrial, and corporate properties including operations, maintenance, housekeeping, and vendor coordination.",
    image: FacilityImg,
    link: "/integrated-facility-management",
    label: "Complete Operations",
  },
  {
    number: "02",
    title: "Security Guard Services",
    description:
      "Professional security guard services, access control support, patrolling, CCTV monitoring, and trained manpower for offices, apartments, industries, and commercial spaces.",
    image: SecurityImg,
    link: "/security-services",
    label: "Protection & Safety",
  },
  {
    number: "03",
    title: "Housekeeping Services",
    description:
      "Professional housekeeping, cleaning, sanitization, washroom hygiene, and daily facility cleaning services for offices, hospitals, hotels, apartments, and commercial properties.",
    image: HousekeepingImg,
    link: "/housekeeping-services",
    label: "Hygiene & Cleaning",
  },
  {
    number: "04",
    title: "Facility Soft Services",
    description:
      "Reliable soft services including housekeeping support, cleaning staff, pantry support, hygiene management, and facility support staff for business operations.",
    image: HousekeepingImg,
    link: "/soft-services",
    label: "Daily Facility Support",
  },
  {
    number: "05",
    title: "Pest Control Services",
    description:
      "Safe and effective pest management solutions for termites, rodents, cockroaches, mosquitoes, bed bugs, and commercial pest control requirements.",
    image: PestImg,
    link: "/pest-management",
    label: "Safe Pest Management",
  },
  {
    number: "06",
    title: "Manpower Outsourcing",
    description:
      "Skilled, semi-skilled, and unskilled manpower outsourcing services for industries, offices, warehouses, commercial facilities, and project-based staffing.",
    image: ManpowerImg,
    link: "/manpower-outsourcing",
    label: "Skilled Workforce",
  },
  {
    number: "07",
    title: "Repair and Maintenance Services",
    description:
      "Electrical, plumbing, carpentry, preventive maintenance, and general repair services to keep your building infrastructure safe and operational.",
    image: MaintenanceImg,
    link: "/repair-maintenance",
    label: "Technical Maintenance",
  },
];

const serviceAreas = [
  {
    name: "Whitefield",
    path: "/integrated-facility-management-whitefield",
  },
  {
    name: "Electronic City",
    path: "/integrated-facility-management-electronic-city",
  },
  {
    name: "Koramangala",
    path: "/integrated-facility-management-koramangala",
  },
  {
    name: "HSR Layout",
    path: "/integrated-facility-management-hsr-layout",
  },
  {
    name: "JP Nagar",
    path: "/integrated-facility-management-jp-nagar",
  },
  {
    name: "Peenya",
    path: "/integrated-facility-management-peenya",
  },
  {
    name: "Hebbal",
    path: "/integrated-facility-management-hebbal",
  },
  {
    name: "BEML Layout",
    path: "/integrated-facility-management-beml",
  },
  {
    name: "Dabaspet",
    path: "/integrated-facility-management-dabaspet",
  },
  {
    name: "Doddaballapur",
    path: "/integrated-facility-management-doddaballapur",
  },
  {
    name: "Attibele",
    path: "/integrated-facility-management-attibele",
  },
  {
    name: "Kumbalgodu",
    path: "/integrated-facility-management-kumbalgodu",
  },
];

const benefits = [
  {
    title: "19+ Years Experience",
    description: "Proven operational experience across multiple industries.",
    icon: Clock3,
  },
  {
    title: "Trained Professionals",
    description: "Reliable teams trained for professional facility operations.",
    icon: Users,
  },
  {
    title: "24/7 Support",
    description: "Responsive support for daily and emergency requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Customized Solutions",
    description: "Service plans designed around each facility and business.",
    icon: Sparkles,
  },
  {
    title: "Quality Supervision",
    description: "Regular monitoring to maintain service quality standards.",
    icon: CheckCircle2,
  },
  {
    title: "Cost-effective Packages",
    description: "Practical service packages aligned with business needs.",
    icon: Wrench,
  },
  {
    title: "Reliable Manpower",
    description: "Dependable skilled, semi-skilled and support workforce.",
    icon: Users,
  },
  {
    title: "Bangalore-wide Service",
    description: "Facility support across key locations in Bangalore.",
    icon: MapPin,
  },
];

const viewportSettings = {
  once: false,
  amount: 0.18,
  margin: "-30px 0px -30px 0px",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  return (
    <div className="overflow-hidden bg-[#F5F2EB] text-[#132238]">
      <Helmet>
        <title>
          Facility Management & Support Services in Bangalore | Acuity Groups
        </title>

        <meta
          name="description"
          content="Explore Acuity Groups LLP services in Bangalore, including facility management, housekeeping, security, pest control, manpower and maintenance."
        />

        <meta
          name="keywords"
          content="facility management services in Bangalore, integrated facility management Bangalore, security services Bangalore, housekeeping services Bangalore, soft services Bangalore, pest management Bangalore, manpower outsourcing Bangalore, repair maintenance Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.acuitygroups.in/services" />

        <meta
          property="og:title"
          content="Facility Management & Support Services in Bangalore | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Acuity Groups offers integrated facility management, security, housekeeping, pest management, manpower outsourcing, and repair maintenance services across Bangalore."
        />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/services"
        />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Facility Management & Support Services in Bangalore | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Professional facility management, security, housekeeping, manpower outsourcing, pest management, and maintenance services in Bangalore."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": "https://www.acuitygroups.in/services/#services",
            name: "Acuity Groups Services",
            description:
              "Integrated facility management, security, housekeeping, pest management, manpower outsourcing, soft services, and repair maintenance services in Bangalore.",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
              url: `https://www.acuitygroups.in${service.link}`,
            })),
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.acuitygroups.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://www.acuitygroups.in/services",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#0B1C2C] text-white lg:min-h-[820px]">
        <div className="absolute inset-0">
          <img
            src={Ourservices}
            alt="Facility Management Services in Bangalore"
            loading="eager"
            className="h-full w-full object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#081724] via-[#081724]/95 to-[#081724]/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081724] via-transparent to-[#081724]/30" />
        </div>

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#E8A33D]/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 45, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-36 bottom-20 h-[470px] w-[470px] rounded-full bg-blue-500/20 blur-[130px]"
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto grid min-h-[720px] max-w-[1450px] items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:min-h-[820px] lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-36">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10"
          >
            <div className="mb-7 inline-flex items-center gap-3 border-l-2 border-[#E8A33D] pl-4">
              <span className="text-xs font-bold uppercase tracking-[4px] text-[#F4C067]">
                Our Services
              </span>
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-[1.05] tracking-[-1.5px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px]">
              Facility support
              <span className="block font-light text-white/60">
                built around your
              </span>
              <span className="block text-[#F4C067]">operations.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Acuity Groups provides integrated facility management, security,
              housekeeping, pest management, manpower outsourcing, soft
              services, and repair maintenance solutions for businesses and
              properties across Bangalore.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#E8A33D] px-7 py-4 font-bold text-[#0B1C2C] shadow-[0_18px_45px_rgba(232,163,61,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4C067]"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/integrated-facility-management"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.07] px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.12]"
              >
                Facility Management
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-3xl font-black text-white">07</p>
                <p className="mt-1 text-xs uppercase tracking-[2px] text-white/40">
                  Core Services
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-white">19+</p>
                <p className="mt-1 text-xs uppercase tracking-[2px] text-white/40">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-white">24/7</p>
                <p className="mt-1 text-xs uppercase tracking-[2px] text-white/40">
                  Service Support
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              rotate: 2,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative hidden lg:block"
          >
            <div className="relative ml-auto max-w-[500px]">
              <div className="absolute -left-8 -top-8 h-full w-full rounded-[38px] border border-white/10" />

              <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.07] p-3 shadow-[0_35px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                <img
                  src={FacilityImg}
                  alt="Integrated Facility Management Services"
                  className="h-[500px] w-full rounded-[28px] object-cover"
                />

                <div className="absolute inset-x-8 bottom-8 rounded-[24px] border border-white/15 bg-[#081724]/80 p-5 backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[3px] text-[#F4C067]">
                    Complete Facility Support
                  </p>

                  <p className="mt-2 text-lg font-semibold leading-7 text-white">
                    One trusted partner for people, property and daily
                    operations.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-10 rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8A33D] text-[#0B1C2C]">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">Trusted Operations</p>
                    <p className="text-xs text-white/50">
                      Reliable service systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#services-list"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors duration-300 hover:text-[#F4C067]"
        >
          <span className="text-[10px] font-bold uppercase tracking-[3px]">
            Explore Services
          </span>

          <motion.span
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={19} />
          </motion.span>
        </motion.a>
      </section>

      {/* INTRO */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto grid max-w-[1450px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:px-8">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="text-xs font-bold uppercase tracking-[4px] text-[#C57E16]">
              What We Offer
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-1px] text-[#132238] sm:text-5xl lg:text-6xl">
              One partner.
              <span className="block font-light text-[#132238]/45">
                Every facility need.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="border-l border-[#132238]/15 pl-6 sm:pl-8"
          >
            <p className="max-w-3xl text-base leading-8 text-[#536170] sm:text-lg">
              We help offices, apartments, hospitals, hotels, industries,
              warehouses, malls, and commercial properties manage daily
              operations with trained teams and reliable service systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Commercial Properties",
                "Residential Communities",
                "Industrial Facilities",
                "Corporate Offices",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#132238]/10 bg-white/60 px-4 py-2 text-sm font-semibold text-[#344353]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section id="services-list" className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={service.link}
                  initial={{
                    opacity: 0,
                    y: 70,
                    x: isEven ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                  }}
                  viewport={viewportSettings}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative overflow-hidden rounded-[34px] border border-[#132238]/10 ${
                    index % 2 === 0
                      ? "bg-[#132238] text-white"
                      : "bg-white text-[#132238]"
                  }`}
                >
                  <div
                    className={`grid min-h-[460px] lg:grid-cols-2 ${
                      isEven ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
                      <img
                        src={service.image}
                        alt={`${service.title} in Bangalore`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />

                      <div
                        className={`absolute inset-0 ${
                          index % 2 === 0
                            ? "bg-gradient-to-t from-[#132238]/75 via-transparent to-transparent"
                            : "bg-gradient-to-t from-black/60 via-transparent to-transparent"
                        }`}
                      />

                      <div className="absolute left-6 top-6 flex items-center gap-3">
                        <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-white backdrop-blur-xl">
                          {service.label}
                        </span>
                      </div>

                      <div className="absolute bottom-6 left-6">
                        <p className="text-6xl font-black tracking-tight text-white/90 sm:text-7xl">
                          {service.number}
                        </p>
                      </div>
                    </div>

                    <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                      <div
                        className={`pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full blur-3xl ${
                          index % 2 === 0 ? "bg-[#E8A33D]/10" : "bg-blue-100"
                        }`}
                      />

                      <div className="relative">
                        <div className="mb-6 flex items-center gap-3">
                          <span
                            className={`h-px w-10 ${
                              index % 2 === 0 ? "bg-[#E8A33D]" : "bg-[#C57E16]"
                            }`}
                          />

                          <span
                            className={`text-xs font-bold uppercase tracking-[3px] ${
                              index % 2 === 0
                                ? "text-[#F4C067]"
                                : "text-[#C57E16]"
                            }`}
                          >
                            Service {service.number}
                          </span>
                        </div>

                        <h3 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.8px] sm:text-4xl lg:text-5xl">
                          {service.title}
                        </h3>

                        <p
                          className={`mt-6 max-w-xl text-base leading-8 ${
                            index % 2 === 0 ? "text-white/60" : "text-[#5A6877]"
                          }`}
                        >
                          {service.description}
                        </p>

                        <Link
                          to={service.link}
                          className={`mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-bold transition-all duration-300 hover:-translate-y-1 ${
                            index % 2 === 0
                              ? "bg-[#E8A33D] text-[#132238] hover:bg-[#F4C067]"
                              : "bg-[#132238] text-white hover:bg-[#1D334D]"
                          }`}
                        >
                          Explore Service
                          <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative overflow-hidden bg-[#ECE7DE] py-20 md:py-28">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full border border-[#132238]/5"
        />

        <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[4px] text-[#C57E16]">
                Why Acuity Groups
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-1px] text-[#132238] sm:text-5xl lg:text-6xl">
                Built for consistent
                <span className="block font-light text-[#132238]/45">
                  service delivery.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl border-l border-[#132238]/15 pl-6 text-base leading-8 text-[#536170] sm:pl-8 sm:text-lg">
              We combine trained manpower, quality supervision, responsive
              support and practical operating systems to help facilities run
              safely and efficiently.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-[24px] border border-white/70 bg-white/70 p-6 shadow-[0_14px_40px_rgba(19,34,56,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_24px_60px_rgba(19,34,56,0.12)]"
                >
                  <div className="absolute right-4 top-4 text-5xl font-black text-[#132238]/[0.04]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#132238] text-[#F4C067] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#E8A33D] group-hover:text-[#132238]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-black text-[#132238]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#64717F]">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[4px] text-[#C57E16]">
              Service Areas
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-1px] text-[#132238] sm:text-5xl lg:text-6xl">
              Facility management
              <span className="block font-light text-[#132238]/45">
                across Bangalore.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5D6A78] sm:text-lg">
              We provide facility management services across major business,
              residential, and industrial locations in Bangalore.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {serviceAreas.map((area, index) => (
              <motion.div key={area.path} variants={fadeUp}>
                <Link
                  to={area.path}
                  className="group flex min-h-[120px] items-center justify-between rounded-[22px] border border-[#132238]/10 bg-[#F8F6F1] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8A33D]/50 hover:bg-[#132238] hover:shadow-[0_18px_45px_rgba(19,34,56,0.14)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#C57E16] shadow-sm transition-all duration-300 group-hover:bg-[#E8A33D] group-hover:text-[#132238]">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#132238]/35 transition-colors duration-300 group-hover:text-white/35">
                        Location {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mt-1 font-black leading-6 text-[#132238] transition-colors duration-300 group-hover:text-white">
                        Integrated Facility Management in {area.name}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    size={18}
                    className="shrink-0 text-[#132238]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F4C067]"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0B1C2C] py-20 text-white md:py-28">
        <motion.div
          animate={{
            x: [0, 55, 0],
            y: [0, -35, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-36 top-10 h-[430px] w-[430px] rounded-full bg-[#E8A33D]/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 bottom-0 h-[470px] w-[470px] rounded-full bg-blue-500/20 blur-[130px]"
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={viewportSettings}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06] px-6 py-12 backdrop-blur-2xl sm:px-10 md:py-16 lg:px-16"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#E8A33D]/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-3 border-l-2 border-[#E8A33D] pl-4">
                  <span className="text-xs font-bold uppercase tracking-[4px] text-[#F4C067]">
                    Let’s Work Together
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-1px] sm:text-5xl lg:text-6xl">
                  Ready to optimize
                  <span className="block font-light text-white/50">
                    your facility operations?
                  </span>
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                  Contact Acuity Groups today for a free consultation and a
                  customized facility management service plan designed for your
                  property, workforce and daily operations.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Free Consultation",
                    "Customized Service Plan",
                    "Bangalore-wide Support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white/70"
                    >
                      <CheckCircle2 size={15} className="text-[#F4C067]" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E8A33D] px-8 py-4 font-black text-[#0B1C2C] shadow-[0_20px_50px_rgba(232,163,61,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4C067] hover:shadow-[0_26px_60px_rgba(232,163,61,0.35)]"
                >
                  Get a Free Quote
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/integrated-facility-management"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
                >
                  Explore Facility Management
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-14 grid gap-5 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                number: "19+",
                label: "Years of Experience",
              },
              {
                number: "07",
                label: "Core Facility Services",
              },
              {
                number: "24/7",
                label: "Service Support",
              },
              {
                number: "12+",
                label: "Bangalore Locations",
              },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="rounded-[22px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <p className="text-4xl font-black text-[#F4C067]">
                  {stat.number}
                </p>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[2px] text-white/45">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
