import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

/* =========================================================
   ACUITY GROUPS
   INTEGRATED FACILITY MANAGEMENT LANDING PAGE
   ========================================================= */

const PHONE = "919941229005";
const DISPLAY_PHONE = "+91 99412 29005";
const EMAIL = "info@acuitygroups.in";

const LANDING_URL =
  "https://www.acuitygroups.in/integrated-facility-management-bangalore";

/* =========================================================
   ICON COMPONENT
   ========================================================= */

const Icon = ({ name, size = 22 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),

    phone: (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
      </svg>
    ),

    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),

    menu: (
      <svg {...common}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    ),

    close: (
      <svg {...common}>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </svg>
    ),

    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),

    shield: (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),

    building: (
      <svg {...common}>
        <path d="M3 21h18" />
        <path d="M5 21V5l7-3 7 3v16" />
        <path d="M9 9h1" />
        <path d="M14 9h1" />
        <path d="M9 13h1" />
        <path d="M14 13h1" />
        <path d="M9 17h1" />
        <path d="M14 17h1" />
      </svg>
    ),

    users: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),

    settings: (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.41 1.41-.06-.06A1.7 1.7 0 0 0 16.45 18a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V20h-2v-.09a1.7 1.7 0 0 0-1.1-1.59 1.7 1.7 0 0 0-1.88.34l-.06.06-1.41-1.41.06-.06A1.7 1.7 0 0 0 9 15.55a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H7v-2h.09a1.7 1.7 0 0 0 1.59-1.1 1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.41-1.41.06.06A1.7 1.7 0 0 0 11.55 9a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V7h2v.09a1.7 1.7 0 0 0 1.1 1.59 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.41 1.41-.06.06A1.7 1.7 0 0 0 18 11.55a1.7 1.7 0 0 0 .6 1 1.7 1.7 0 0 0 1.1.4H20v2h-.09a1.7 1.7 0 0 0-.51.05z" />
      </svg>
    ),

    map: (
      <svg {...common}>
        <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </svg>
    ),

    star: (
      <svg {...common}>
        <path d="m12 3 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17.2l-5.56 2.92 1.06-6.2L3 9.53l6.22-.9L12 3z" />
      </svg>
    ),

    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),

    menuDown: (
      <svg {...common}>
        <path d="m6 9 6 6 6-6" />
      </svg>
    ),

    droplet: (
      <svg {...common}>
        <path d="M12 2s7 7.58 7 12a7 7 0 1 1-14 0c0-4.42 7-12 7-12z" />
      </svg>
    ),

    sparkle: (
      <svg {...common}>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
      </svg>
    ),

    bug: (
      <svg {...common}>
        <rect x="8" y="7" width="8" height="12" rx="4" />
        <path d="M8 12H3M21 12h-5M9 4l1.5 2M15 4l-1.5 2M9 21l1.5-2M15 21l-1.5-2M4 8l3 1.5M20 8l-3 1.5M4 17l3-1.5M20 17l-3-1.5" />
      </svg>
    ),

    home: (
      <svg {...common}>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
      </svg>
    ),
  };

  return icons[name] || icons.arrow;
};

/* =========================================================
   ANIMATION VARIANTS
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

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
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

/* Elements animate in on scroll-down AND reverse-animate on scroll-up,
   instead of only playing once. This is applied via viewport={{ once: false }}
   on every scroll-triggered motion element below. */
const twoWayViewport = { once: false, amount: 0.2 };
const twoWayViewportTight = { once: false, amount: 0.1 };

/* =========================================================
   SERVICE DATA
   Each service links to its own page (for SEO deep-linking)
   and cross-links to 3 related services (internal linking /
   topical clustering for both users and search engines).
   ========================================================= */

const services = [
  {
    title: "Integrated Facility Management",
    description:
      "Complete facility management solutions combining housekeeping, security, technical maintenance, manpower and operational support.",
    icon: "building",
    link: "/integrated-facility-management",
    cluster: "management",
    related: [
      "Property Management Services",
      "Apartment Facility Management",
      "Repair & Maintenance",
    ],
  },
  {
    title: "Property Management Services",
    description:
      "Professional property management services for residential communities, commercial buildings, offices and managed properties.",
    icon: "building",
    link: "/repair-maintenance",
    cluster: "management",
    related: [
      "Integrated Facility Management",
      "Apartment Facility Management",
      "Security Guard Services",
    ],
  },
  {
    title: "Apartment Facility Management",
    description:
      "End-to-end facility management for apartments and gated communities including housekeeping, security, maintenance and common-area management.",
    icon: "building",
    link: "/housekeeping-services",
    cluster: "management",
    related: [
      "Housekeeping Services",
      "Security Guard Services",
      "Swimming Pool Cleaning",
    ],
  },
  {
    title: "Housekeeping Services",
    description:
      "Trained housekeeping teams for offices, apartments, commercial buildings, institutions and residential properties.",
    icon: "star",
    link: "/housekeeping-services",
    cluster: "cleaning",
    related: ["Deep Cleaning Services", "Janitorial Services", "Carpet Shampooing"],
  },
  {
    title: "Deep Cleaning Services",
    description:
      "Professional deep cleaning for offices, homes, apartments, commercial properties and common areas.",
    icon: "star",
    link: "/integrated-facility-management",
    cluster: "cleaning",
    related: ["Housekeeping Services", "Carpet Shampooing", "Swimming Pool Cleaning"],
  },
  {
    title: "Carpet Shampooing",
    description:
      "Carpet and upholstery shampooing for offices, hotels, apartments and commercial spaces to keep interiors fresh and hygienic.",
    icon: "sparkle",
    link: "/services",
    cluster: "cleaning",
    related: ["Deep Cleaning Services", "Housekeeping Services", "Janitorial Services"],
  },
  {
    title: "Swimming Pool Cleaning",
    description:
      "Routine swimming pool cleaning and upkeep for apartments, gated communities, hotels and clubhouses.",
    icon: "droplet",
    link: "/services",
    cluster: "cleaning",
    related: [
      "Apartment Facility Management",
      "Housekeeping Services",
      "Repair & Maintenance",
    ],
  },
  {
    title: "Security Guard Services",
    description:
      "Reliable security guards, security supervisors and trained security manpower for residential and commercial properties.",
    icon: "shield",
    link: "/security-services",
    cluster: "security",
    related: ["Home Guard Services", "Apartment Facility Management", "Property Management Services"],
  },
  {
    title: "Home Guard Services",
    description:
      "Trained home guards for residences, villas and small properties needing dedicated watch and access support.",
    icon: "shield",
    link: "/security-services",
    cluster: "security",
    related: ["Security Guard Services", "Apartment Facility Management", "Housekeeping Services"],
  },
  {
    title: "Office Boy & Pantry Services",
    description:
      "Professional office boys, pantry staff and support personnel for corporate and commercial workplaces.",
    icon: "users",
    link: "/soft-services",
    cluster: "staffing",
    related: ["Janitorial Services", "Steward Services", "Corporate Facility Management"],
  },
  {
    title: "Steward Services",
    description:
      "Trained stewards for corporate offices, hotels, hospitality venues and events requiring front-facing support staff.",
    icon: "users",
    link: "/soft-services",
    cluster: "staffing",
    related: ["Office Boy & Pantry Services", "Housekeeping Services", "Janitorial Services"],
  },
  {
    title: "Janitorial Services",
    description:
      "Structured janitorial and cleaning support for offices, commercial properties, apartments and institutions.",
    icon: "star",
    link: "/repair-maintenance",
    cluster: "cleaning",
    related: ["Housekeeping Services", "Deep Cleaning Services", "Office Boy & Pantry Services"],
  },
  {
    title: "Picker & Packer Services",
    description:
      "Flexible picker and packer manpower for warehouses, logistics operations, e-commerce and distribution facilities.",
    icon: "users",
    link: "/soft-services",
    cluster: "staffing",
    related: ["Loading & Unloading", "Manpower Outsourcing", "Multi Technician Services"],
  },
  {
    title: "Loading & Unloading",
    description:
      "Trained manpower for loading, unloading, shifting and material-handling requirements.",
    icon: "users",
    link: "/soft-services",
    cluster: "staffing",
    related: ["Picker & Packer Services", "Manpower Outsourcing", "Repair & Maintenance"],
  },
  {
    title: "Repair & Maintenance",
    description:
      "Multi-skilled maintenance teams covering electrical, plumbing, carpentry, painting, AC and general repair requirements.",
    icon: "settings",
    link: "/repair-maintenance",
    cluster: "maintenance",
    related: ["Multi Technician Services", "Electrical Maintenance", "Plumbing Services"],
  },
  {
    title: "Multi Technician Services",
    description:
      "Multi-skilled technicians who handle electrical, plumbing, carpentry and general repair needs through a single point of contact.",
    icon: "settings",
    link: "/integrated-facility-management",
    cluster: "maintenance",
    related: ["Repair & Maintenance", "Electrical Maintenance", "AC Technician Services"],
  },
  {
    title: "Electrical Maintenance",
    description:
      "Electrical maintenance support for commercial buildings, apartments, offices and industrial facilities.",
    icon: "settings",
    link: "/repair-maintenance",
    cluster: "maintenance",
    related: ["Repair & Maintenance", "AC Technician Services", "Multi Technician Services"],
  },
  {
    title: "Plumbing Services",
    description:
      "Professional plumbing maintenance and repair services for residential and commercial properties.",
    icon: "settings",
    link: "/repair-maintenance",
    cluster: "maintenance",
    related: ["Repair & Maintenance", "Electrical Maintenance", "Multi Technician Services"],
  },
  {
    title: "AC Technician Services",
    description:
      "AC technician support for preventive maintenance, troubleshooting and general air-conditioning requirements.",
    icon: "settings",
    link: "/repair-maintenance",
    cluster: "maintenance",
    related: ["Electrical Maintenance", "Multi Technician Services", "Repair & Maintenance"],
  },
  {
    title: "Carpentry & Painting",
    description:
      "Skilled carpenters and painters for property repair, maintenance, refurbishment and improvement works.",
    icon: "settings",
    link: "/repair-maintenance",
    cluster: "maintenance",
    related: ["Repair & Maintenance", "Multi Technician Services", "Facility Supervisor Staffing"],
  },
  {
    title: "Facility Supervisor Staffing",
    description:
      "Facility supervisors and executives who oversee day-to-day operations, manpower coordination and vendor management on site.",
    icon: "users",
    link: "/manpower-outsourcing",
    cluster: "maintenance",
    related: ["Repair & Maintenance", "Integrated Facility Management", "Manpower Outsourcing"],
  },
  {
    title: "Pest Management",
    description:
      "General pest control, rodent control, reptile management, termite treatment and integrated pest management.",
    icon: "bug",
    link: "/pest-management-services",
    cluster: "pest",
    related: ["Housekeeping Services", "Deep Cleaning Services", "Apartment Facility Management"],
  },
];

/* Lookup so "related" titles above can resolve to a real link */
const linkByTitle = services.reduce((map, service) => {
  map[service.title] = service.link;
  return map;
}, {});

/* Generic manpower outsourcing service used as a related-link target
   even though it doesn't have its own card (covered across staffing roles) */
linkByTitle["Manpower Outsourcing"] = "/manpower-outsourcing-services";
linkByTitle["Corporate Facility Management"] = "/integrated-facility-management";

/* =========================================================
   SERVICE KEYWORDS — now rendered as real internal links
   ========================================================= */

const serviceKeywords = [
  { label: "Facility Management Services in Bangalore", link: "/integrated-facility-management" },
  { label: "Integrated Facility Management", link: "/integrated-facility-management" },
  { label: "Top Facility Management Companies in Bangalore", link: "/integrated-facility-management" },
  { label: "Facility Management Services Near Me", link: "/integrated-facility-management" },
  { label: "Facility Management Company", link: "/integrated-facility-management" },
  { label: "Facility Management Company Profile", link: "/about" },
  { label: "Property Management Services", link: "/property-management-services" },
  { label: "Property Management Company", link: "/property-management-services" },
  { label: "Facility Management for Apartments in Bangalore", link: "/facility-management-services-apartments" },
  { label: "Apartment Facility Management", link: "/facility-management-services-apartments" },
  { label: "Corporate Facility Management", link: "/integrated-facility-management" },
  { label: "Commercial Facility Management", link: "/integrated-facility-management" },
  { label: "Housekeeping Services", link: "/housekeeping-services" },
  { label: "Deep Cleaning Services", link: "/deep-cleaning-services" },
  { label: "Carpet Shampooing Services", link: "/carpet-shampooing-services" },
  { label: "Swimming Pool Cleaning Services", link: "/swimming-pool-cleaning-services" },
  { label: "Security Guard Services", link: "/security-services" },
  { label: "Security Supervisor Services", link: "/security-services" },
  { label: "Home Guard Services", link: "/home-guard-services" },
  { label: "Office Boy Services", link: "/office-boy-pantry-services" },
  { label: "Pantry Services", link: "/office-boy-pantry-services" },
  { label: "Steward Services", link: "/steward-services" },
  { label: "Janitorial Services", link: "/janitorial-services" },
  { label: "Picker & Packer Services", link: "/picker-packer-services" },
  { label: "Loading & Unloading Services", link: "/loading-unloading-services" },
  { label: "Manpower Outsourcing", link: "/manpower-outsourcing-services" },
  { label: "Repair & Maintenance Services", link: "/repair-maintenance-services" },
  { label: "Multi Technician Services", link: "/multi-technician-services" },
  { label: "Electrical Maintenance", link: "/electrical-maintenance-services" },
  { label: "Plumbing Services", link: "/plumbing-services" },
  { label: "Carpentry Services", link: "/carpentry-painting-services" },
  { label: "Painting Services", link: "/carpentry-painting-services" },
  { label: "AC Technician Services", link: "/ac-technician-services" },
  { label: "Facility Supervisor Services", link: "/facility-supervisor-services" },
  { label: "Pest Control Services", link: "/pest-management-services" },
  { label: "Rodent Control", link: "/pest-management-services" },
  { label: "Reptile Control", link: "/pest-management-services" },
  { label: "Integrated Pest Management", link: "/pest-management-services" },
];

/* =========================================================
   PRIMARY NAVIGATION
   ========================================================= */

const navLinks = [
  { label: "Home", type: "route", to: "/" },
  { label: "Services", type: "section", id: "services" },
  { label: "Industries", type: "section", id: "industries" },
  { label: "Areas We Serve", type: "section", id: "areas" },
  { label: "FAQs", type: "section", id: "faq" },
];

/* =========================================================
   LOCATIONS
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

/* =========================================================
   FAQ DATA — now includes internal links in answers
   ========================================================= */

const faqs = [
  {
    question: "What is integrated facility management?",
    answer: (
      <>
        Integrated facility management combines multiple property-support functions under one coordinated service model. Depending on the property requirement, this can include{" "}
        <Link to="/housekeeping-services" className="font-semibold text-emerald-600 hover:underline">housekeeping</Link>,{" "}
        <Link to="/security-services" className="font-semibold text-emerald-600 hover:underline">security</Link>,{" "}
        <Link to="/repair-maintenance-services" className="font-semibold text-emerald-600 hover:underline">technical maintenance</Link>,{" "}
        <Link to="/manpower-outsourcing-services" className="font-semibold text-emerald-600 hover:underline">manpower outsourcing</Link>,{" "}
        cleaning, pest management and operational support.
      </>
    ),
  },
  {
    question: "What facility management services do you provide in Bangalore?",
    answer: (
      <>
        Acuity Groups provides{" "}
        <Link to="/integrated-facility-management" className="font-semibold text-emerald-600 hover:underline">integrated facility management</Link>,{" "}
        <Link to="/property-management-services" className="font-semibold text-emerald-600 hover:underline">property management</Link>,{" "}
        apartment facility management,{" "}
        <Link to="/housekeeping-services" className="font-semibold text-emerald-600 hover:underline">housekeeping</Link>,{" "}
        <Link to="/security-services" className="font-semibold text-emerald-600 hover:underline">security</Link>,{" "}
        office boy and pantry services, janitorial services, picker and packer manpower, loading and unloading,{" "}
        <Link to="/repair-maintenance-services" className="font-semibold text-emerald-600 hover:underline">repair and maintenance</Link>,{" "}
        electrical, plumbing, AC, carpentry, painting and pest management solutions.
      </>
    ),
  },
  {
    question:
      "Do you provide facility management services for apartments in Bangalore?",
    answer: (
      <>
        Yes. Apartment and gated-community facility management can include housekeeping, security guards, supervisors, common-area cleaning, technical maintenance, pest management, manpower coordination and day-to-day facility operations. See our{" "}
        <Link to="/facility-management-services-apartments" className="font-semibold text-emerald-600 hover:underline">apartment facility management</Link> page.
      </>
    ),
  },
  {
    question: "Do you provide property management services?",
    answer: (
      <>
        Yes. Acuity Groups provides{" "}
        <Link to="/property-management-services" className="font-semibold text-emerald-600 hover:underline">property management support</Link>{" "}
        for residential and commercial properties, helping coordinate manpower, housekeeping, security, maintenance and other operational requirements.
      </>
    ),
  },
  {
    question: "Do you provide security guards and security supervisors?",
    answer: (
      <>
        Yes. Security manpower can be arranged for apartments, offices, commercial properties, warehouses, institutions and other facilities based on the required deployment. Explore our{" "}
        <Link to="/security-services" className="font-semibold text-emerald-600 hover:underline">security guard services</Link>.
      </>
    ),
  },
  {
    question: "Can you provide housekeeping and janitorial manpower?",
    answer: (
      <>
        Yes. Housekeeping and janitorial manpower can be provided for offices, apartments, commercial properties, institutions and other facilities. See our{" "}
        <Link to="/housekeeping-services" className="font-semibold text-emerald-600 hover:underline">housekeeping services</Link> and{" "}
        <Link to="/janitorial-services" className="font-semibold text-emerald-600 hover:underline">janitorial services</Link>.
      </>
    ),
  },
  {
    question: "Do you provide picker and packer manpower?",
    answer: (
      <>
        Yes. Picker and packer manpower can support warehouses, logistics operations, distribution centres and e-commerce-related operations. Learn more about our{" "}
        <Link to="/picker-packer-services" className="font-semibold text-emerald-600 hover:underline">picker & packer services</Link>.
      </>
    ),
  },
  {
    question: "Do you provide repair and maintenance teams?",
    answer: (
      <>
        Yes. Maintenance support can include multi-technicians, electricians, plumbers, carpenters, painters, AC technicians and general repair and maintenance personnel. Check our{" "}
        <Link to="/repair-maintenance-services" className="font-semibold text-emerald-600 hover:underline">repair & maintenance services</Link>.
      </>
    ),
  },
  {
    question: "Do you provide pest management services?",
    answer: (
      <>
        Yes. Pest management services can include general pest control, rodent control, termite treatment, reptile management and integrated pest management solutions. See our{" "}
        <Link to="/pest-management-services" className="font-semibold text-emerald-600 hover:underline">pest management services</Link>.
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [formLoading, setFormLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  /* =======================================================
     SCROLL HEADER
     ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  /* =======================================================
     SCROLL TO SECTION
     ======================================================= */

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileMenu(false);
  };

  /* =======================================================
     FORM SUBMISSION
     ======================================================= */

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

        window.scrollTo({
          top: document.getElementById("enquiry")?.offsetTop - 100 || 0,
          behavior: "smooth",
        });
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

  /* =======================================================
     SEO SCHEMA
     ======================================================= */

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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Facility Management Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `https://www.acuitygroups.in${service.link}`,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof faq.answer === "string" ? faq.answer : "See our FAQ section for detailed answers.",
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

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <>
      {/* ===================================================
          SEO
          =================================================== */}

      <Helmet>
        <title>Facility Management Services in Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Acuity Groups provides integrated facility management services in Bangalore including property management, apartment facility management, housekeeping, security, manpower outsourcing, cleaning, repair & maintenance and pest management."
        />

        <meta
          name="keywords"
          content="facility management services in Bangalore, top facility management companies in Bangalore, facility management services near me, facility management services for apartments in Bangalore, facility management company profile, property management company, property management services, integrated facility management, housekeeping services, security services, picker packer services, manpower outsourcing, repair maintenance services, pest management"
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

      {/* Added overflow-x-hidden to prevent any horizontal scroll on small devices */}
      <div className="min-h-screen overflow-x-hidden bg-white text-slate-950">
        {/* =================================================
            HEADER
            ================================================= */}

        <header
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-slate-950/95 py-3 shadow-lg backdrop-blur-md"
              : "bg-transparent py-5"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-base font-black text-slate-950">
                A
              </div>

              <div className="leading-none">
                <p className="text-sm font-black tracking-wide text-white">
                  ACUITY
                </p>

                <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-slate-400">
                  Groups LLP
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              {navLinks.map((item) =>
                item.type === "route" ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-sm font-bold text-slate-300 transition hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-bold text-slate-300 transition hover:text-emerald-400"
                  >
                    {item.label}
                  </button>
                )
              )}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-sm font-bold text-slate-200 transition hover:text-emerald-400"
              >
                <Icon name="phone" size={16} />
                {DISPLAY_PHONE}
              </a>

              <button
                type="button"
                onClick={() => scrollToSection("enquiry")}
                className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Get a Quote
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenu((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenu}
            >
              <Icon name={mobileMenu ? "close" : "menu"} size={20} />
            </button>
          </div>

          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 border-t border-white/10 bg-slate-950 px-5 pb-6 pt-4 lg:hidden"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((item) =>
                  item.type === "route" ? (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setMobileMenu(false)}
                      className="rounded-lg px-2 py-3 text-sm font-bold text-slate-200 hover:bg-white/5 hover:text-emerald-400"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="rounded-lg px-2 py-3 text-left text-sm font-bold text-slate-200 hover:bg-white/5 hover:text-emerald-400"
                    >
                      {item.label}
                    </button>
                  )
                )}
              </nav>

              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 text-sm font-bold text-slate-200"
                >
                  <Icon name="phone" size={16} />
                  {DISPLAY_PHONE}
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection("enquiry")}
                  className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-slate-950"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </header>

        {/* =================================================
            BREADCRUMB (SEO + orientation)
            ================================================= */}

        <div className="border-b border-slate-100 bg-slate-950 px-5 pb-3 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto flex max-w-7xl items-center gap-2 text-xs font-semibold text-slate-500"
          >
            <Link
              to="/"
              className="flex items-center gap-1.5 transition hover:text-emerald-400"
            >
              <Icon name="home" size={13} />
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <span className="text-slate-300">
              Facility Management Services in Bangalore
            </span>
          </nav>
        </div>

        {/* =================================================
            HERO
            ================================================= */}

        <main>
          <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-14 sm:px-6 sm:pt-16 lg:min-h-[760px] lg:px-8 lg:pb-28">
            {/* Background */}

            <div className="absolute inset-0">
              <div className="absolute left-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-3xl" />

              <div className="absolute right-[-10%] top-[25%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                  backgroundSize: "55px 55px",
                }}
              />
            </div>

            <div className="relative mx-auto max-w-7xl">
              <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                {/* HERO CONTENT */}

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeUp}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Bangalore Facility Management Experts
                    </span>
                  </motion.div>

                  <motion.h1
                    variants={fadeUp}
                    className="mt-7 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
                  >
                    Integrated Facility Management Services in{" "}
                    <span className="text-emerald-400">Bangalore</span>
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
                  >
                    Professional{" "}
                    <Link to="/integrated-facility-management" className="font-semibold text-emerald-400 hover:underline">
                      facility management
                    </Link>{" "}
                    and{" "}
                    <Link to="/property-management-services" className="font-semibold text-emerald-400 hover:underline">
                      property management
                    </Link>{" "}
                    solutions for apartments, offices, commercial buildings,
                    warehouses, institutions and other properties. From
                    housekeeping and security to technical maintenance, manpower
                    outsourcing, cleaning and pest management — Acuity Groups
                    brings multiple services together under one reliable team.
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="mt-9 flex flex-col gap-3 sm:flex-row"
                  >
                    <button
                      type="button"
                      onClick={() => scrollToSection("enquiry")}
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 font-black text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-400"
                    >
                      Request a Free Consultation
                      <Icon name="arrow" size={18} />
                    </button>

                    <a
                      href={`tel:${PHONE}`}
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                    >
                      <Icon name="phone" size={18} />
                      Call {DISPLAY_PHONE}
                    </a>
                  </motion.div>

                  {/* STATS */}

                  <motion.div
                    variants={fadeUp}
                    className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-7"
                  >
                    <div>
                      <p className="text-2xl font-black text-white sm:text-3xl">
                        19+
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Years Experience
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-black text-white sm:text-3xl">
                        10K+
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Clients Served
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-black text-white sm:text-3xl">
                        500+
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Team Members
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* HERO CARD */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                  }}
                  className="relative max-w-full"
                >
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                    <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl" />

                    <div className="relative">
                      <div className="mb-7 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                            One Partner
                          </p>

                          <h2 className="mt-2 text-2xl font-black text-white">
                            Complete Facility Support
                          </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                          <Icon name="shield" size={24} />
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          { label: "Housekeeping & Janitorial", link: "/housekeeping-services" },
                          { label: "Security Guards & Supervisors", link: "/security-services" },
                          { label: "Property Management", link: "/property-management-services" },
                          { label: "Technical Repair & Maintenance", link: "/repair-maintenance-services" },
                          { label: "Picker & Packer Manpower", link: "/picker-packer-services" },
                          { label: "Deep Cleaning & Carpet Cleaning", link: "/deep-cleaning-services" },
                          { label: "Electrical, Plumbing & AC", link: "/electrical-maintenance-services" },
                          { label: "Pest & Rodent Management", link: "/pest-management-services" },
                        ].map((item, index) => (
                          <motion.div
                            key={item.label}
                            initial={{
                              opacity: 0,
                              x: 20,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: 0.5 + index * 0.08,
                            }}
                          >
                            <Link
                              to={item.link}
                              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] px-4 py-3 transition hover:border-emerald-400/30 hover:bg-white/[0.08]"
                            >
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                                <Icon name="check" size={15} />
                              </span>

                              <span className="text-sm font-semibold text-slate-200">
                                {item.label}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => scrollToSection("enquiry")}
                        className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-slate-950 transition hover:bg-emerald-400"
                      >
                        Discuss Your Requirement
                        <Icon name="arrow" size={17} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* =================================================
              TRUST STRIP
              ================================================= */}

          <section className="border-b border-slate-100 bg-white px-5 py-7 sm:px-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center sm:justify-between">
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

          {/* =================================================
              INTRODUCTION — added internal links
              ================================================= */}

          <section className="px-5 py-10 sm:px-6 lg:py-28">
            <div className="mx-auto max-w-7xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={twoWayViewport}
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
                  Acuity Groups provides coordinated{" "}
                  <Link to="/integrated-facility-management" className="font-semibold text-emerald-600 hover:underline">
                    integrated facility management
                  </Link>{" "}
                  services designed to simplify day-to-day operations, manpower
                  management, cleaning, security, maintenance and property
                  support. From{" "}
                  <Link to="/housekeeping-services" className="font-semibold text-emerald-600 hover:underline">
                    housekeeping
                  </Link>{" "}
                  and{" "}
                  <Link to="/security-services" className="font-semibold text-emerald-600 hover:underline">
                    security
                  </Link>{" "}
                  to{" "}
                  <Link to="/repair-maintenance-services" className="font-semibold text-emerald-600 hover:underline">
                    maintenance
                  </Link>
                  , we cover all your facility needs.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={twoWayViewportTight}
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
                    text: "Deploy suitable manpower based on your property, service and operational requirements.",
                  },
                  {
                    icon: "settings",
                    title: "Technical Support",
                    text: "Support for electrical, plumbing, AC, carpentry, painting and general maintenance.",
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

          {/* =================================================
              SERVICES — fixed grid + interlinks (already present)
              ================================================= */}

          <section
            id="services"
            className="scroll-mt-24 bg-slate-50 px-5 py-10 sm:px-6 lg:py-28"
          >
            <div className="mx-auto max-w-7xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={twoWayViewport}
                className="max-w-3xl"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                  Our Services
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Complete facility management services under one roof
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  From daily housekeeping and security to technical maintenance,
                  property management, manpower outsourcing, cleaning and pest
                  management, our service portfolio is designed for modern
                  properties and businesses.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="visible"
                animate="visible"
                whileInView="visible"
                viewport={{ once: false, amount: 0.05 }}
                className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              >
                {services.map((service) => (
                  <motion.div
                    key={service.title}
                    variants={fadeUp}
                    className="group flex h-full w-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl"
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
                      className="mt-5 inline-flex items-center gap-2 text-sm font-black text-emerald-700 transition hover:text-emerald-500"
                    >
                      Explore Service
                      <Icon name="arrow" size={16} />
                    </Link>

                    {/* Related-service interlinks for topical clustering */}
                    {service.related && service.related.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                        {service.related.map((relatedTitle) =>
                          linkByTitle[relatedTitle] ? (
                            <Link
                              key={relatedTitle}
                              to={linkByTitle[relatedTitle]}
                              className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-700"
                            >
                              {relatedTitle}
                            </Link>
                          ) : null
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Added “View All Services” link for better navigation */}
              <div className="mt-10 text-center">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-500"
                >
                  View All Services
                  <Icon name="arrow" size={18} />
                </Link>
              </div>
            </div>
          </section>

          {/* =================================================
              FACILITY MANAGEMENT KEYWORD SECTION
              ================================================= */}

          <section className="px-5 py-10 sm:px-6 lg:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={twoWayViewport}
                >
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                    Why Acuity Groups
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                    A dependable facility management company for Bangalore
                  </h2>

                  <p className="mt-6 text-base leading-8 text-slate-600">
                    Businesses, apartment communities and property owners need
                    reliable service partners who understand people, processes
                    and property operations. Acuity Groups combines multiple
                    support functions into a structured facility management
                    model.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      { label: "Integrated facility management solutions", link: "/integrated-facility-management" },
                      { label: "Property management support", link: "/property-management-services" },
                      { label: "Professional housekeeping and cleaning teams", link: "/housekeeping-services" },
                      { label: "Security guards and supervisors", link: "/security-services" },
                      { label: "Technical repair and maintenance manpower", link: "/repair-maintenance-services" },
                      { label: "Flexible manpower outsourcing", link: "/manpower-outsourcing-services" },
                      { label: "Picker and packer manpower", link: "/picker-packer-services" },
                      { label: "Pest and rodent management", link: "/pest-management-services" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={item.link}
                        className="group flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Icon name="check" size={14} />
                        </span>

                        <span className="text-sm font-semibold leading-6 text-slate-700 transition group-hover:text-emerald-700">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={twoWayViewport}
                  className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl sm:p-10"
                >
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
                    Built For
                  </p>

                  <h3 className="mt-4 text-3xl font-black">
                    Different properties. One coordinated solution.
                  </h3>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Apartments",
                      "Gated Communities",
                      "Corporate Offices",
                      "IT Parks",
                      "Commercial Buildings",
                      "Warehouses",
                      "Factories",
                      "Hotels",
                      "Hospitals",
                      "Schools",
                      "Retail Properties",
                      "Construction Sites",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* =================================================
              INDUSTRIES
              ================================================= */}

          <section
            id="industries"
            className="scroll-mt-24 bg-slate-950 px-5 py-10 sm:px-6 lg:py-28"
          >
            <div className="mx-auto max-w-7xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={twoWayViewport}
                className="mx-auto max-w-3xl text-center"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
                  Industries We Serve
                </p>

                <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                  Facility management for residential and commercial properties
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-400">
                  Our facility management approach can be tailored to the
                  operational needs of different property types.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={twoWayViewportTight}
                className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {[
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
                ].map((item) => (
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

          {/* =================================================
              MANPOWER SERVICES
              ================================================= */}

          <section className="px-5 py-10 sm:px-6 lg:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={twoWayViewport}
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
                  viewport={twoWayViewportTight}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {[
                    { label: "Housekeeping Staff", link: "/housekeeping-services" },
                    { label: "Security Guards", link: "/security-services" },
                    { label: "Security Supervisors", link: "/security-services" },
                    { label: "Home Guards", link: "/home-guard-services" },
                    { label: "Office Boys", link: "/office-boy-pantry-services" },
                    { label: "Pantry Staff", link: "/office-boy-pantry-services" },
                    { label: "Stewards", link: "/steward-services" },
                    { label: "Janitors", link: "/janitorial-services" },
                    { label: "Picker & Packers", link: "/picker-packer-services" },
                    { label: "Loading & Unloading Staff", link: "/loading-unloading-services" },
                    { label: "Multi Technicians", link: "/multi-technician-services" },
                    { label: "Electricians", link: "/electrical-maintenance-services" },
                    { label: "Plumbers", link: "/plumbing-services" },
                    { label: "Carpenters", link: "/carpentry-painting-services" },
                    { label: "Painters", link: "/carpentry-painting-services" },
                    { label: "AC Technicians", link: "/ac-technician-services" },
                    { label: "Facility Supervisors & Executives", link: "/facility-supervisor-services" },
                    { label: "General Support Staff", link: "/manpower-outsourcing-services" },
                  ].map((item) => (
                    <motion.div key={item.label} variants={fadeUp}>
                      <Link
                        to={item.link}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                          <Icon name="users" size={17} />
                        </span>

                        <span className="text-sm font-bold text-slate-800">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* =================================================
              AREAS
              ================================================= */}

          <section
            id="areas"
            className="scroll-mt-24 bg-slate-50 px-5 py-10 sm:px-6 lg:py-28"
          >
            <div className="mx-auto max-w-7xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={twoWayViewport}
                className="max-w-3xl"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                  Service Areas
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Facility management services across Bangalore
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Looking for facility management services near you? Acuity
                  Groups serves Bangalore and surrounding business and
                  residential locations based on project requirements.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={twoWayViewportTight}
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

          {/* =================================================
              KEYWORD / SERVICE DISCOVERY (now real internal links)
              ================================================= */}

          <section className="px-5 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                  Our Facility Services
                </p>

                <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">
                  Facility management, property management and support services
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
                  Explore our complete range of facility management and property
                  support services for residential, commercial, industrial and
                  institutional properties.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {serviceKeywords.map((keyword) => (
                    <Link
                      key={keyword.label}
                      to={keyword.link}
                      className="rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {keyword.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              ENQUIRY FORM
              ================================================= */}

          <section
            id="enquiry"
            className="scroll-mt-24 relative overflow-hidden bg-slate-950 px-5 py-10 sm:px-6 lg:py-28"
          >
            <div className="absolute left-[-100px] top-20 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="absolute bottom-0 right-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
              <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                {/* FORM INTRO */}

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={twoWayViewportTight}
                  className="lg:sticky lg:top-28"
                >
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
                    Get In Touch
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                    Let&apos;s discuss your
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
                    <a
                      href={`tel:${PHONE}`}
                      className="flex items-center gap-4"
                    >
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

                  <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-bold text-white">
                      Services you can enquire about
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Facility Management",
                        "Property Management",
                        "Housekeeping",
                        "Security",
                        "Manpower",
                        "Picker Packer",
                        "Maintenance",
                        "Cleaning",
                        "Pest Management",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-400"
                        >
                          {item}
                        </span>
                      ))}
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
                  viewport={twoWayViewportTight}
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
                    {/* FORMSPREE SUBJECT */}

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

                    {/* NAME + PHONE */}

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
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
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
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                        />
                      </div>
                    </div>

                    {/* EMAIL + LOCATION */}

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
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
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
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                        />
                      </div>
                    </div>

                    {/* SERVICE */}

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Service Required *
                      </label>

                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        <option value="Integrated Facility Management">
                          Integrated Facility Management
                        </option>

                        <option value="Facility Management Services">
                          Facility Management Services
                        </option>

                        <option value="Property Management Services">
                          Property Management Services
                        </option>

                        <option value="Apartment Facility Management">
                          Facility Management for Apartments
                        </option>

                        <option value="Corporate Facility Management">
                          Corporate Facility Management
                        </option>

                        <option value="Commercial Facility Management">
                          Commercial Facility Management
                        </option>

                        <option value="Housekeeping Services">
                          Housekeeping Services
                        </option>

                        <option value="House Cleaning">House Cleaning</option>

                        <option value="Deep Cleaning">
                          Deep Cleaning Services
                        </option>

                        <option value="Carpet Shampooing">
                          Carpet Shampooing
                        </option>

                        <option value="Swimming Pool Cleaning">
                          Swimming Pool Cleaning
                        </option>

                        <option value="Office Boy Services">
                          Office Boy Services
                        </option>

                        <option value="Pantry Services">Pantry Services</option>

                        <option value="Steward Services">
                          Steward Services
                        </option>

                        <option value="Janitorial Services">
                          Janitorial Services
                        </option>

                        <option value="Security Guard Services">
                          Security Guard Services
                        </option>

                        <option value="Security Supervisor">
                          Security Supervisor
                        </option>

                        <option value="Home Guard Services">
                          Home Guard Services
                        </option>

                        <option value="Picker & Packer Services">
                          Picker & Packer Services
                        </option>

                        <option value="Loading & Unloading Services">
                          Loading & Unloading Services
                        </option>

                        <option value="Manpower Outsourcing">
                          Manpower Outsourcing
                        </option>

                        <option value="Repair & Maintenance">
                          Repair & Maintenance
                        </option>

                        <option value="Multi Technician Services">
                          Multi Technician Services
                        </option>

                        <option value="Electrical Maintenance">
                          Electrical Maintenance
                        </option>

                        <option value="Plumbing Services">
                          Plumbing Services
                        </option>

                        <option value="Carpentry Services">
                          Carpentry Services
                        </option>

                        <option value="Painting Services">
                          Painting Services
                        </option>

                        <option value="AC Technician Services">
                          AC Technician Services
                        </option>

                        <option value="Facility Supervisor / Executive">
                          Facility Supervisor / Executive
                        </option>

                        <option value="General Pest Control">
                          General Pest Control
                        </option>

                        <option value="Rodent Control">Rodent Control</option>

                        <option value="Termite Control">Termite Control</option>

                        <option value="Reptile Control">Reptile Control</option>

                        <option value="Integrated Pest Management">
                          Integrated Pest Management
                        </option>

                        <option value="Other Requirement">
                          Other Requirement
                        </option>
                      </select>
                    </div>

                    {/* PROPERTY TYPE */}

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Property / Business Type
                      </label>

                      <select
                        name="property_type"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      >
                        <option value="" disabled>
                          Select property type
                        </option>

                        <option value="Apartment / Residential Community">
                          Apartment / Residential Community
                        </option>

                        <option value="Villa / Gated Community">
                          Villa / Gated Community
                        </option>

                        <option value="Corporate Office">
                          Corporate Office
                        </option>

                        <option value="IT Park / Tech Park">
                          IT Park / Tech Park
                        </option>

                        <option value="Commercial Building">
                          Commercial Building
                        </option>

                        <option value="Factory / Industrial Facility">
                          Factory / Industrial Facility
                        </option>

                        <option value="Warehouse / Logistics">
                          Warehouse / Logistics
                        </option>

                        <option value="Hotel / Hospitality">
                          Hotel / Hospitality
                        </option>

                        <option value="Hospital / Healthcare">
                          Hospital / Healthcare
                        </option>

                        <option value="School / Educational Institution">
                          School / Educational Institution
                        </option>

                        <option value="Retail / Shopping Centre">
                          Retail / Shopping Centre
                        </option>

                        <option value="Construction Site">
                          Construction Site
                        </option>

                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* MANPOWER */}

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Approximate Manpower Required
                      </label>

                      <select
                        name="manpower_required"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      >
                        <option value="" disabled>
                          Select manpower requirement
                        </option>

                        <option value="1-5 Staff">1 - 5 Staff</option>

                        <option value="6-10 Staff">6 - 10 Staff</option>

                        <option value="11-25 Staff">11 - 25 Staff</option>

                        <option value="26-50 Staff">26 - 50 Staff</option>

                        <option value="51-100 Staff">51 - 100 Staff</option>

                        <option value="100+ Staff">100+ Staff</option>

                        <option value="Not Sure">Not Sure</option>

                        <option value="Service Only">
                          Service Only / No Manpower Estimate
                        </option>
                      </select>
                    </div>

                    {/* MESSAGE */}

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Tell Us About Your Requirement
                      </label>

                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Example: We need facility management for a 200-unit apartment including security, housekeeping, maintenance and pest control..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>

                    {/* CONSENT */}

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

                    {/* SUCCESS MESSAGE */}

                    {formStatus === "success" && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm font-bold text-emerald-700"
                      >
                        ✓ Thank you! Your enquiry has been submitted
                        successfully. Our team will contact you shortly.
                      </motion.div>
                    )}

                    {/* ERROR MESSAGE */}

                    {formStatus === "error" && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm font-bold text-red-700"
                      >
                        Something went wrong while submitting your enquiry.
                        Please try again or call {DISPLAY_PHONE}.
                      </motion.div>
                    )}

                    {/* SUBMIT BUTTON */}

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 font-black text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {formLoading
                        ? "Sending Enquiry..."
                        : "Request Free Consultation"}

                      {!formLoading && <Icon name="arrow" size={18} />}
                    </button>

                    <p className="text-center text-[11px] leading-5 text-slate-400">
                      Your information is kept confidential and will only be
                      used to respond to your enquiry.
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>

          {/* =================================================
              FAQ — now with internal links
              ================================================= */}

          <section
            id="faq"
            className="scroll-mt-24 px-5 py-10 sm:px-6 lg:py-28"
          >
            <div className="mx-auto max-w-4xl">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={twoWayViewport}
                className="text-center"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
                  Frequently Asked Questions
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Facility management FAQs
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Answers to common questions about facility management,
                  property management, manpower and support services.
                </p>
              </motion.div>

              <div className="mt-10 space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <motion.div
                      key={faq.question}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={twoWayViewportTight}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.03,
                      }}
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
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          className="px-5 pb-6 sm:px-6"
                        >
                          <div className="border-t border-slate-100 pt-5 text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =================================================
              FINAL CTA
              ================================================= */}

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
                viewport={twoWayViewport}
                className="overflow-hidden rounded-[2rem] bg-emerald-600 px-6 py-12 text-center shadow-2xl sm:px-10 lg:px-16 lg:py-16"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-950/70">
                  Ready to get started?
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Build a better-managed property with Acuity Groups
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-emerald-950/80 sm:text-base">
                  Talk to our team about integrated facility management,
                  property management, housekeeping, security, manpower,
                  maintenance, cleaning or pest management.
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

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-950/20 bg-white/20 px-7 py-4 font-black text-slate-950 transition hover:bg-white/30"
                  >
                    View All Services
                    <Icon name="arrow" size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* =================================================
            FOOTER (sitemap-style interlinking for SEO + UX)
            ================================================= */}

        <footer className="bg-slate-950 px-5 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-4">
              <div className="md:col-span-1">
                <Link to="/" className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-lg font-black text-slate-950">
                    A
                  </div>

                  <div>
                    <p className="text-lg font-black">ACUITY</p>

                    <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-slate-500">
                      Groups LLP
                    </p>
                  </div>
                </Link>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                  Integrated facility management, property management,
                  housekeeping, security, manpower outsourcing, cleaning, repair
                  & maintenance and pest management services in Bangalore.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-emerald-400"
                  >
                    <Icon name="phone" size={17} />
                    <span>{DISPLAY_PHONE}</span>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-start gap-3 break-all text-sm text-slate-400 transition hover:text-emerald-400"
                  >
                    <Icon name="mail" size={17} />
                    <span>{EMAIL}</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-white">
                  Management & Cleaning
                </h3>

                <div className="mt-4 space-y-3">
                  {services
                    .filter((s) => s.cluster === "management" || s.cluster === "cleaning")
                    .map((service) => (
                      <Link
                        key={service.link}
                        to={service.link}
                        className="block text-sm text-slate-400 transition hover:text-emerald-400"
                      >
                        {service.title}
                      </Link>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-white">
                  Staffing & Security
                </h3>

                <div className="mt-4 space-y-3">
                  {services
                    .filter((s) => s.cluster === "staffing" || s.cluster === "security")
                    .map((service) => (
                      <Link
                        key={service.link}
                        to={service.link}
                        className="block text-sm text-slate-400 transition hover:text-emerald-400"
                      >
                        {service.title}
                      </Link>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-white">
                  Maintenance & Pest Control
                </h3>

                <div className="mt-4 space-y-3">
                  {services
                    .filter((s) => s.cluster === "maintenance" || s.cluster === "pest")
                    .map((service) => (
                      <Link
                        key={service.link}
                        to={service.link}
                        className="block text-sm text-slate-400 transition hover:text-emerald-400"
                      >
                        {service.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-7 text-xs text-slate-500">
              <Link to="/" className="transition hover:text-emerald-400">
                Home
              </Link>
              <Link to="/services" className="transition hover:text-emerald-400">
                All Services
              </Link>
              <Link to="/about" className="transition hover:text-emerald-400">
                About Acuity Groups
              </Link>
              <Link to="/contact" className="transition hover:text-emerald-400">
                Contact
              </Link>
              <Link to="/integrated-facility-management" className="transition hover:text-emerald-400">
                Integrated Facility Management
              </Link>
              <Link to="/property-management-services" className="transition hover:text-emerald-400">
                Property Management
              </Link>
              <Link to="/housekeeping-services" className="transition hover:text-emerald-400">
                Housekeeping
              </Link>
              <Link to="/security-services" className="transition hover:text-emerald-400">
                Security
              </Link>
            </div>

            <div className="mt-6 border-t border-white/10 pt-7 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Acuity Groups LLP. All Rights
              Reserved.
            </div>
          </div>
        </footer>

        {/* =================================================
            MOBILE CALL BUTTON
            ================================================= */}

        <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
          <div className="flex gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur">
            <a
              href={`tel:${PHONE}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-sm font-black text-white"
            >
              <Icon name="phone" size={17} />
              Call
            </a>

            <button
              type="button"
              onClick={() => scrollToSection("enquiry")}
              className="flex flex-[1.5] items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-black text-white"
            >
              Get Quote
              <Icon name="arrow" size={17} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegratedFacilityManagementLandingPage;