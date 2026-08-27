import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Pic from "../images/nfacility.jpg";
import HEROIMAGE from "../images/choose1.jpg";

const PHONE = "919941229005";
const DISPLAY_PHONE = "+91 99412 29005";
const EMAIL = "info@acuitygroups.in";
const LANDING_URL =
  "https://www.acuitygroups.in/integrated-facility-management-bangalore";

/* =========================================================
   ICONS
========================================================= */

const ICON_PATHS = {
  arrow: "M5 12h14 M13 6l6 6-6 6",
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z",
  mail: "M3 5h18v14H3z M3 7l9 6 9-6",
  check: "M5 12l4 4L19 6",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4",
  building:
    "M3 21h18 M5 21V5l7-3 7 3v16 M9 9h1 M14 9h1 M9 13h1 M14 13h1 M9 17h1 M14 17h1",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  settings:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.41 1.41-.06-.06A1.7 1.7 0 0 0 16.45 18a1.7 1.7 0 0 0-1.4 1.7V20h-2v-.09a1.7 1.7 0 0 0-1.1-1.59 1.7 1.7 0 0 0-1.88.34l-.06.06-1.41-1.41.06-.06A1.7 1.7 0 0 0 9 15.55a1.7 1.7 0 0 0-1.7-1.4H7v-2h.09a1.7 1.7 0 0 0 1.59-1.1 1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.41-1.41.06.06A1.7 1.7 0 0 0 11.55 9a1.7 1.7 0 0 0 1.4-1.7V7h2v.09a1.7 1.7 0 0 0 1.1 1.59 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.41 1.41-.06.06A1.7 1.7 0 0 0 18 11.55a1.7 1.7 0 0 0 1.7 1.4H20v2h-.09a1.7 1.7 0 0 0-.51.05z",
  map: "M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z M9 3v15 M15 6v15",
  star: "M12 3l2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17.2l-5.56 2.92 1.06-6.2L3 9.53l6.22-.9L12 3z",
  menuDown: "M6 9l6 6 6-6",
  droplet: "M12 2s7 7.58 7 12a7 7 0 1 1-14 0c0-4.42 7-12 7-12z",
  sparkle:
    "M12 3v4 M12 17v4 M3 12h4 M17 12h4 M5.6 5.6l2.8 2.8 M15.6 15.6l2.8 2.8 M18.4 5.6l-2.8 2.8 M8.4 15.6l-2.8 2.8",
  bug: "M8 7h8v12a4 4 0 0 1-8 0z M8 12H3 M21 12h-5 M9 4l1.5 2 M15 4l-1.5 2 M9 21l1.5-2 M15 21l-1.5-2 M4 8l3 1.5 M20 8l-3 1.5 M4 17l3-1.5 M20 17l-3-1.5",
  home: "M3 11l9-8 9 8 M5 10v10h14V10",
};

const Icon = ({ name, size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {(ICON_PATHS[name] || ICON_PATHS.arrow).split(" M").map((d, i) => (
      <path key={i} d={i === 0 ? d : `M${d}`} />
    ))}
  </svg>
);

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};



const viewport = {
  once: true,
  amount: 0.1,
};

/* =========================================================
   SERVICE DATA
========================================================= */

const services = [
  {
    title: "Integrated Facility Management",
    icon: "building",
    link: "/integrated-facility-management",
    description:
      "Complete facility management solutions combining housekeeping, security, technical maintenance, manpower and operational support.",
  },
  {
    title: "Property Management Services",
    icon: "building",
    link: "/property-management-services",
    description:
      "Professional property management services for residential communities, commercial buildings, offices and managed properties.",
  },
  {
    title: "Apartment Facility Management",
    icon: "building",
    link: "/facility-management-services-apartments",
    description:
      "End-to-end facility management for apartments and gated communities including housekeeping, security, maintenance and common-area management.",
  },
  {
    title: "Housekeeping Services",
    icon: "star",
    link: "/housekeeping-services",
    description:
      "Trained housekeeping teams for offices, apartments, commercial buildings, institutions and residential properties.",
  },
  {
    title: "Deep Cleaning Services",
    icon: "star",
    link: "/deep-cleaning-services",
    description:
      "Professional deep cleaning for offices, homes, apartments, commercial properties and common areas.",
  },
  {
    title: "Carpet Shampooing",
    icon: "sparkle",
    link: "/carpet-shampooing-services",
    description:
      "Carpet and upholstery shampooing for offices, hotels, apartments and commercial spaces.",
  },
  {
    title: "Swimming Pool Cleaning",
    icon: "droplet",
    link: "/swimming-pool-cleaning-services",
    description:
      "Routine swimming pool cleaning and upkeep for apartments, gated communities, hotels and clubhouses.",
  },
  {
    title: "Security Guard Services",
    icon: "shield",
    link: "/security-services",
    description:
      "Reliable security guards, security supervisors and trained security manpower for residential and commercial properties.",
  },
  {
    title: "Home Guard Services",
    icon: "shield",
    link: "/home-guard-services",
    description:
      "Trained home guards for residences, villas and small properties needing dedicated watch and access support.",
  },
  {
    title: "Office Boy & Pantry Services",
    icon: "users",
    link: "/office-boy-pantry-services",
    description:
      "Professional office boys, pantry staff and support personnel for corporate and commercial workplaces.",
  },
  {
    title: "Steward Services",
    icon: "users",
    link: "/steward-services",
    description:
      "Trained stewards for corporate offices, hotels, hospitality venues and events.",
  },
  {
    title: "Janitorial Services",
    icon: "star",
    link: "/janitorial-services",
    description:
      "Structured janitorial and cleaning support for offices, commercial properties, apartments and institutions.",
  },
  {
    title: "Picker & Packer Services",
    icon: "users",
    link: "/picker-packer-services",
    description:
      "Flexible picker and packer manpower for warehouses, logistics operations, e-commerce and distribution facilities.",
  },
  {
    title: "Loading & Unloading",
    icon: "users",
    link: "/loading-unloading-services",
    description:
      "Trained manpower for loading, unloading, shifting and material-handling requirements.",
  },
  {
    title: "Repair & Maintenance",
    icon: "settings",
    link: "/repair-maintenance-services",
    description:
      "Multi-skilled maintenance teams covering electrical, plumbing, carpentry, painting, AC and general repair requirements.",
  },
  {
    title: "Multi Technician Services",
    icon: "settings",
    link: "/multi-technician-services",
    description:
      "Multi-skilled technicians handling electrical, plumbing, carpentry and general repair needs.",
  },
  {
    title: "Electrical Maintenance",
    icon: "settings",
    link: "/electrical-maintenance-services",
    description:
      "Electrical maintenance support for commercial buildings, apartments, offices and industrial facilities.",
  },
  {
    title: "Plumbing Services",
    icon: "settings",
    link: "/plumbing-services",
    description:
      "Professional plumbing maintenance and repair services for residential and commercial properties.",
  },
  {
    title: "AC Technician Services",
    icon: "settings",
    link: "/ac-technician-services",
    description:
      "AC technician support for preventive maintenance, troubleshooting and air-conditioning requirements.",
  },
  {
    title: "Carpentry & Painting",
    icon: "settings",
    link: "/carpentry-painting-services",
    description:
      "Skilled carpenters and painters for property repair, maintenance, refurbishment and improvement works.",
  },
  {
    title: "Facility Supervisor Staffing",
    icon: "users",
    link: "/facility-supervisor-services",
    description:
      "Facility supervisors who oversee day-to-day operations, manpower coordination and vendor management.",
  },
  {
    title: "Pest Management",
    icon: "bug",
    link: "/pest-management-services",
    description:
      "General pest control, rodent control, reptile management, termite treatment and integrated pest management.",
  },
];

/* =========================================================
   LOCATIONS & INDUSTRIES
========================================================= */

const locations = [
  "Bangalore",
  "Whitefield",
  "Electronic City",
  "Koramangala",
  "HSR Layout",
  "JP Nagar",
  "Jayanagar",
  "Bannerghatta Road",
  "Bellandur",
  "Marathahalli",
  "Indiranagar",
  "Hebbal",
  "Peenya",
  "Dabaspet",
  "Doddaballapur",
  "Attibele",
  "Kumbalgodu",
  "BEML",
];

const industries = [
  "Apartment Communities",
  "Gated Communities",
  "Corporate Offices",
  "IT Parks",
  "Commercial Buildings",
  "Warehouses",
  "Factories",
  "Hotels",
  "Hospitals",
  "Educational Institutions",
  "Retail & Shopping Centres",
  "Construction Projects",
];

/* =========================================================
   MANPOWER
========================================================= */

const manpowerRoles = [
  ["Housekeeping Staff", "/housekeeping-services"],
  ["Security Guards", "/security-services"],
  ["Security Supervisors", "/security-services"],
  ["Home Guards", "/home-guard-services"],
  ["Office Boys", "/office-boy-pantry-services"],
  ["Pantry Staff", "/office-boy-pantry-services"],
  ["Stewards", "/steward-services"],
  ["Janitors", "/janitorial-services"],
  ["Picker & Packers", "/picker-packer-services"],
  ["Loading & Unloading Staff", "/loading-unloading-services"],
  ["Multi Technicians", "/multi-technician-services"],
  ["Electricians", "/electrical-maintenance-services"],
  ["Plumbers", "/plumbing-services"],
  ["Carpenters", "/carpentry-painting-services"],
  ["Painters", "/carpentry-painting-services"],
  ["AC Technicians", "/ac-technician-services"],
  ["Facility Supervisors & Executives", "/facility-supervisor-services"],
  ["General Support Staff", "/manpower-outsourcing-services"],
];

/* =========================================================
   FORM OPTIONS
========================================================= */

const serviceSelectOptions = [
  "Integrated Facility Management",
  "Property Management Services",
  "Apartment Facility Management",
  "Corporate Facility Management",
  "Commercial Facility Management",
  "Housekeeping Services",
  "Deep Cleaning",
  "Carpet Shampooing",
  "Swimming Pool Cleaning",
  "Office Boy Services",
  "Pantry Services",
  "Steward Services",
  "Janitorial Services",
  "Security Guard Services",
  "Security Supervisor",
  "Home Guard Services",
  "Picker & Packer Services",
  "Loading & Unloading Services",
  "Manpower Outsourcing",
  "Repair & Maintenance",
  "Multi Technician Services",
  "Electrical Maintenance",
  "Plumbing Services",
  "Carpentry Services",
  "Painting Services",
  "AC Technician Services",
  "Facility Supervisor / Executive",
  "General Pest Control",
  "Rodent Control",
  "Termite Control",
  "Reptile Control",
  "Integrated Pest Management",
  "Other Requirement",
];

const propertyTypeOptions = [
  "Apartment / Residential Community",
  "Villa / Gated Community",
  "Corporate Office",
  "IT Park / Tech Park",
  "Commercial Building",
  "Factory / Industrial Facility",
  "Warehouse / Logistics",
  "Hotel / Hospitality",
  "Hospital / Healthcare",
  "School / Educational Institution",
  "Retail / Shopping Centre",
  "Construction Site",
  "Other",
];

const manpowerRangeOptions = [
  "1-5 Staff",
  "6-10 Staff",
  "11-25 Staff",
  "26-50 Staff",
  "51-100 Staff",
  "100+ Staff",
  "Not Sure",
  "Service Only",
];

/* =========================================================
   FAQ
========================================================= */

const faqLink = (to, label) => (
  <Link to={to} className="font-semibold text-emerald-600 hover:underline">
    {label}
  </Link>
);

const faqs = [
  {
    question: "What is integrated facility management?",
    answer: (
      <>
        Integrated facility management combines multiple property-support
        functions under one coordinated service model. This can include{" "}
        {faqLink("/housekeeping-services", "housekeeping")},{" "}
        {faqLink("/security-services", "security")},{" "}
        {faqLink("/repair-maintenance-services", "technical maintenance")},{" "}
        {faqLink("/manpower-outsourcing-services", "manpower outsourcing")},
        cleaning, pest management and operational support.
      </>
    ),
  },
  {
    question: "What facility management services do you provide in Bangalore?",
    answer: (
      <>
        Acuity Groups provides{" "}
        {faqLink(
          "/integrated-facility-management",
          "integrated facility management",
        )}
        , {faqLink("/property-management-services", "property management")},
        apartment facility management,{" "}
        {faqLink("/housekeeping-services", "housekeeping")},{" "}
        {faqLink("/security-services", "security")}, office boy and pantry
        services, janitorial services, manpower outsourcing, repair and
        maintenance, electrical, plumbing, AC, carpentry, painting and pest
        management solutions.
      </>
    ),
  },
  {
    question:
      "Do you provide facility management services for apartments in Bangalore?",
    answer: (
      <>
        Yes. Apartment and gated-community facility management can include
        housekeeping, security, supervisors, common-area cleaning, technical
        maintenance, pest management and manpower coordination. See our{" "}
        {faqLink(
          "/facility-management-services-apartments",
          "apartment facility management",
        )}{" "}
        page.
      </>
    ),
  },
  {
    question: "Do you provide property management services?",
    answer: (
      <>
        Yes. Acuity Groups provides{" "}
        {faqLink(
          "/property-management-services",
          "property management support",
        )}{" "}
        for residential and commercial properties.
      </>
    ),
  },
  {
    question: "Do you provide security guards and security supervisors?",
    answer: (
      <>
        Yes. Security manpower can be arranged for apartments, offices,
        commercial properties, warehouses, institutions and other facilities.
        Explore our {faqLink("/security-services", "security guard services")}.
      </>
    ),
  },
  {
    question: "Can you provide housekeeping and janitorial manpower?",
    answer: (
      <>
        Yes. Housekeeping and janitorial manpower can be provided for offices,
        apartments, commercial properties and institutions.
      </>
    ),
  },
  {
    question: "Do you provide picker and packer manpower?",
    answer: (
      <>
        Yes. Picker and packer manpower can support warehouses, logistics,
        distribution centres and e-commerce operations.
      </>
    ),
  },
  {
    question: "Do you provide repair and maintenance teams?",
    answer: (
      <>
        Yes. Maintenance support can include multi-technicians, electricians,
        plumbers, carpenters, painters, AC technicians and general maintenance
        personnel.
      </>
    ),
  },
  {
    question: "Do you provide pest management services?",
    answer: (
      <>
        Yes. Pest management can include general pest control, rodent control,
        termite treatment, reptile management and integrated pest management.
      </>
    ),
  },
  {
    question: "Which areas in Bangalore do you serve?",
    answer:
      "Acuity Groups serves Bangalore and major surrounding areas including Whitefield, Electronic City, Koramangala, HSR Layout, JP Nagar, Jayanagar, Bannerghatta Road, Bellandur, Marathahalli, Indiranagar, Hebbal, Peenya and other locations based on project requirements.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const IntegratedFacilityManagementLandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleEnquirySubmit = async (event) => {
    event.preventDefault();

    setFormLoading(true);
    setFormStatus("");

    try {
      const form = event.currentTarget;

      const response = await fetch("https://formspree.io/f/mzeppdwo", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();

        setTimeout(() => {
          setFormStatus("");
        }, 8000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    } finally {
      setFormLoading(false);
    }
  };

  /* =========================================================
     SEO SCHEMA
  ========================================================= */

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Acuity Groups LLP",
    url: "https://www.acuitygroups.in/",
    telephone: `+${PHONE}`,
    email: EMAIL,
    description:
      "Acuity Groups provides integrated facility management, property management, housekeeping, security, manpower outsourcing, repair and maintenance, cleaning and pest management services in Bangalore.",
    areaServed: locations.map((location) => ({
      "@type": "City",
      name: location,
    })),
    serviceType: services.map((service) => service.title),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Integrated Facility Management Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Acuity Groups LLP",
      url: "https://www.acuitygroups.in/",
      telephone: `+${PHONE}`,
      email: EMAIL,
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    description:
      "Integrated facility management and property management services in Bangalore covering housekeeping, security, maintenance, manpower outsourcing, cleaning and pest management.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text:
          typeof faq.answer === "string"
            ? faq.answer
            : "See our FAQ section for detailed answers.",
      },
    })),
  };

  const breadcrumbSchema = {
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
        name: "Facility Management Services in Bangalore",
        item: LANDING_URL,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Facility Management Services in Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Acuity Groups provides integrated facility management services in Bangalore including property management, apartment facility management, housekeeping, security, manpower outsourcing, cleaning, repair & maintenance and pest management."
        />

        <link rel="canonical" href={LANDING_URL} />

        <meta
          property="og:title"
          content="Facility Management Services in Bangalore | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Integrated facility management, property management, housekeeping, security, manpower, maintenance, cleaning and pest management services in Bangalore."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={LANDING_URL} />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Facility Management Services in Bangalore | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Integrated facility management, property management, housekeeping, security, manpower, maintenance, cleaning and pest management services in Bangalore."
        />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen overflow-x-hidden bg-white text-slate-950">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          {/* Background Image */}
          <img
            src={Pic}
            alt="Professional pest control services in Bangalore"
            className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
            <div className="max-w-3xl">
              <p className="text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                Facility Management Service in Bangalore
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Integrated Facility Management Services in Bangalore
              </h1>

              <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                Simplify your business operations with reliable facility
                management solutions from Acuity Groups. We provide professional
                integrated facility management, housekeeping, security services,
                technical maintenance, manpower outsourcing, landscaping, pest
                control, commercial buildings, residential communities, and
                industrial facilities across Bangalore.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-7 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition"
                >
                  Get Free Quotation
                </a>

                <a
                  href="tel:+919941229005"
                  className="px-7 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition"
                >
                  Call +91 99412 29005
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TRUST
        ====================================================== */}

        <section className="border-b border-slate-100 bg-white px-5 py-7">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:justify-between">
            {[
              "Professional Teams",
              "Integrated Solutions",
              "Multiple Services",
              "Bangalore Coverage",
              "Dedicated Support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                <span className="text-emerald-600">
                  <Icon name="check" size={15} />
                </span>

                {item}
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mx-auto max-w-4xl text-center"
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                Facility Management Company in Bangalore
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                One professional partner for your complete property
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Managing a property requires more than individual vendors.
                Acuity Groups provides coordinated facility management services
                designed to simplify daily operations, manpower, cleaning,
                security, maintenance and property support.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-12 grid gap-5 md:grid-cols-3"
            >
              {[
                {
                  icon: "building",
                  title: "Integrated Operations",
                  text: "Coordinate multiple facility services through one professional management partner.",
                },
                {
                  icon: "users",
                  title: "Trained Manpower",
                  text: "Deploy suitable manpower based on your property and operational requirements.",
                },
                {
                  icon: "settings",
                  title: "Technical Support",
                  text: "Electrical, plumbing, AC, carpentry, painting and general maintenance support.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Icon name={item.icon} size={23} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section
          id="services"
          className="scroll-mt-24 bg-slate-50 px-5 py-16 sm:px-6 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="max-w-3xl"
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                Our Services
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Complete facility management services under one roof
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                From housekeeping and security to technical maintenance,
                property management, manpower outsourcing, cleaning and pest
                management.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-emerald-400 transition group-hover:bg-emerald-500 group-hover:text-slate-950">
                    <Icon name={service.icon} size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-black leading-snug text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-emerald-700 hover:text-emerald-500"
                  >
                    Explore Service
                    <Icon name="arrow" size={16} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          
          </div>
        </section>

        {/* =====================================================
            WHY ACUITY
        ====================================================== */}

        <section className="px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                  Why Acuity Groups
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  A dependable facility management company for Bangalore
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Businesses, apartment communities and property owners need
                  reliable service partners who understand people, processes and
                  property operations.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    [
                      "Integrated facility management",
                      "/integrated-facility-management",
                    ],
                    [
                      "Property management support",
                      "/property-management-services",
                    ],
                    ["Professional housekeeping", "/housekeeping-services"],
                    ["Security guards and supervisors", "/security-services"],
                    [
                      "Technical repair and maintenance",
                      "/repair-maintenance-services",
                    ],
                    [
                      "Flexible manpower outsourcing",
                      "/manpower-outsourcing-services",
                    ],
                    ["Picker and packer manpower", "/picker-packer-services"],
                    ["Pest and rodent management", "/pest-management-services"],
                  ].map(([label, link]) => (
                    <Link
                      key={label}
                      to={link}
                      className="group flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Icon name="check" size={14} />
                      </span>

                      <span className="text-sm font-semibold leading-6 text-slate-700 group-hover:text-emerald-700">
                        {label}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* SIMPLE IMAGE / CTA CARD */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="relative overflow-hidden rounded-[2rem]"
              >
                <img
                  src={HEROIMAGE}
                  alt="Acuity Groups facility management"
                  className="h-[600px] w-full"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
                    Acuity Groups
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-white">
                    One coordinated solution for your property
                  </h3>

                  <button
                    type="button"
                    onClick={() => scrollToSection("enquiry")}
                    className="mt-6 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-6 py-3.5 font-black text-slate-950 hover:bg-emerald-400"
                  >
                    Discuss Your Requirement
                    <Icon name="arrow" size={17} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INDUSTRIES
        ====================================================== */}

        <section
          id="industries"
          className="scroll-mt-24 bg-slate-950 px-5 py-16 sm:px-6 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
                Industries We Serve
              </p>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Facility management for residential and commercial properties
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Our facility management approach can be tailored to different
                property types and operational requirements.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {industries.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/30 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Icon name="building" size={19} />
                    </span>

                    <span className="text-sm font-bold text-slate-200">
                      {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            MANPOWER
        ====================================================== */}

        <section className="px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                  Manpower Outsourcing
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Flexible manpower for your operational requirements
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  From facility support staff to picker packers, housekeeping
                  teams and maintenance technicians, Acuity Groups can help
                  businesses manage manpower requirements through a structured
                  outsourcing model.
                </p>

                <button
                  type="button"
                  onClick={() => scrollToSection("enquiry")}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 font-black text-white transition hover:bg-emerald-600"
                >
                  Discuss Manpower Requirement
                  <Icon name="arrow" size={17} />
                </button>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="grid gap-4 sm:grid-cols-2"
              >
                {manpowerRoles.map(([label, link]) => (
                  <motion.div key={label} variants={fadeUp}>
                    <Link
                      to={link}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                        <Icon name="users" size={17} />
                      </span>

                      <span className="text-sm font-bold text-slate-800">
                        {label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            AREAS
        ====================================================== */}

        <section
          id="areas"
          className="scroll-mt-24 bg-slate-50 px-5 py-16 sm:px-6 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="max-w-3xl"
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                Service Areas
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Facility management services across Bangalore
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Looking for facility management services near you? Acuity Groups
                serves Bangalore and surrounding business and residential
                locations based on project requirements.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-10 flex flex-wrap gap-3"
            >
              {locations.map((location) => (
                <motion.div
                  key={location}
                  variants={fadeUp}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm"
                >
                  <span className="text-emerald-600">
                    <Icon name="map" size={16} />
                  </span>

                  {location}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            ENQUIRY FORM
        ====================================================== */}

        <section
          id="enquiry"
          className="scroll-mt-24 relative overflow-hidden bg-slate-950 px-5 py-16 sm:px-6 lg:py-24"
        >
          <div className="absolute left-[-100px] top-20 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              {/* CONTACT INFO */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="lg:sticky lg:top-28"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
                  Get In Touch
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Let's discuss your
                  <span className="block text-emerald-400">
                    facility requirement
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                  Tell us about your property, manpower requirement or service
                  requirement. Our team will review your enquiry and get in
                  touch with you.
                </p>

                <div className="mt-9 space-y-5">
                  <a href={`tel:${PHONE}`} className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                      <Icon name="phone" size={21} />
                    </span>

                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                        Call Us
                      </span>

                      <span className="mt-1 block font-bold text-white">
                        {DISPLAY_PHONE}
                      </span>
                    </span>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                      <Icon name="mail" size={21} />
                    </span>

                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                        Email
                      </span>

                      <span className="mt-1 block font-bold text-white">
                        {EMAIL}
                      </span>
                    </span>
                  </a>

                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                      <Icon name="map" size={21} />
                    </span>

                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                        Service Area
                      </span>

                      <span className="mt-1 block font-bold text-white">
                        Bangalore & Surrounding Areas
                      </span>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* FORM */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewport}
                transition={{
                  duration: 0.7,
                }}
                className="rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-8">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">
                    Free Consultation
                  </span>

                  <h3 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
                    Tell us what you need
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Fill in your details and our team will contact you about
                    your facility management or service requirement.
                  </p>
                </div>

                <form onSubmit={handleEnquirySubmit} className="space-y-5">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Acuity Groups Facility Management Enquiry"
                  />

                  <input
                    type="hidden"
                    name="_source"
                    value="Acuity Groups Integrated Facility Management Landing Page"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Full Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Email Address *
                      </label>

                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Location *
                      </label>

                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="Whitefield, JP Nagar..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Service Required *
                    </label>

                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {serviceSelectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Property / Business Type
                    </label>

                    <select
                      name="property_type"
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    >
                      <option value="" disabled>
                        Select property type
                      </option>

                      {propertyTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Approximate Manpower Required
                    </label>

                    <select
                      name="manpower_required"
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    >
                      <option value="" disabled>
                        Select manpower requirement
                      </option>

                      {manpowerRangeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Tell Us About Your Requirement
                    </label>

                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Example: We need facility management for a 200-unit apartment including security, housekeeping, maintenance and pest control..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </div>

                  <label className="flex items-start gap-3 text-xs leading-5 text-slate-500">
                    <input
                      type="checkbox"
                      name="consent"
                      value="I agree to be contacted by Acuity Groups"
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-emerald-600"
                    />

                    <span>
                      I agree to be contacted by Acuity Groups regarding my
                      facility management, property management or service
                      enquiry.
                    </span>
                  </label>

                  {formStatus === "success" && (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm font-bold text-emerald-700">
                      ✓ Thank you! Your enquiry has been submitted successfully.
                      Our team will contact you shortly.
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm font-bold text-red-700">
                      Something went wrong while submitting your enquiry. Please
                      try again or call {DISPLAY_PHONE}.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {formLoading
                      ? "Sending Enquiry..."
                      : "Request Free Consultation"}

                    {!formLoading && <Icon name="arrow" size={18} />}
                  </button>

                  <p className="text-center text-[11px] leading-5 text-slate-400">
                    Your information is kept confidential and will only be used
                    to respond to your enquiry.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section id="faq" className="scroll-mt-24 px-5 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="text-center"
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Facility management FAQs
              </h2>
            </motion.div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-sm font-black leading-6 text-slate-900 sm:text-base">
                        {faq.question}
                      </span>

                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        className="shrink-0 text-emerald-600"
                      >
                        <Icon name="menuDown" size={19} />
                      </motion.span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6">
                        <div className="border-t border-slate-100 pt-5 text-sm leading-7 text-slate-600">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="px-5 pb-20 sm:px-6 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={viewport}
              className="overflow-hidden rounded-[2rem] bg-emerald-600 px-6 py-12 text-center shadow-2xl sm:px-10 lg:px-16 lg:py-16"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-950/70">
                Ready to get started?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                Build a better-managed property with Acuity Groups
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-950/80 sm:text-base">
                Talk to our team about integrated facility management, property
                management, housekeeping, security, manpower, maintenance,
                cleaning or pest management.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => scrollToSection("enquiry")}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-slate-800"
                >
                  Get a Free Consultation
                  <Icon name="arrow" size={18} />
                </button>

                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-950/20 bg-white/20 px-7 py-4 font-black text-slate-950 transition hover:bg-white/30"
                >
                  <Icon name="phone" size={18} />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IntegratedFacilityManagementLandingPage;
