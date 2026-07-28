import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
  MessageCircle,
  MapPin,
  Shield,
  Wrench,
  Bug,
  UserRoundCheck,
} from "lucide-react";

import FacilityHero from "../images/facility.jpg";
import IntegratedFM from "../images/Integrated Facility Management.jpg";
import BuildingMaintenance from "../images/buildingmantain.webp";
import HousekeepingManagement from "../images/housekeepingmanagment.jpg";
import TechnicalSupport from "../images/electrical.jpg";
import VendorManagement from "../images/Vendor Management.jpg";
import AssetManagement from "../images/Asset Management.jpg";

const FacilityManagement = () => {
  const canonicalUrl =
    "https://www.acuitygroups.in/integrated-facility-management";

  const faqs = [
    {
      question: "What are integrated facility management services?",
      answer:
        "Integrated facility management combines housekeeping, security, building maintenance, technical support, vendor management and manpower services under one professional management system.",
    },
    {
      question: "Do you provide facility management services across Bangalore?",
      answer:
        "Yes. Acuity Groups provides facility management services across Whitefield, Electronic City, Koramangala, HSR Layout, JP Nagar, Peenya, Hebbal and other major Bangalore locations.",
    },
    {
      question: "Which properties can use your facility management services?",
      answer:
        "Our services are available for corporate offices, apartments, industries, hospitals, schools, warehouses, hotels and commercial properties.",
    },
    {
      question: "How can I get a facility management quotation?",
      answer:
        "Contact Acuity Groups by phone, WhatsApp or through the website contact form with your property type, location and service requirements. Our team will prepare a customized facility management proposal.",
    },
    {
      question: "Do you provide dedicated facility managers?",
      answer:
        "Yes. Depending on the property size and service agreement, we can deploy dedicated facility managers, supervisors and trained operational staff.",
    },
    {
      question: "Can your services be customized for one property?",
      answer:
        "Yes. We create customized facility management plans based on the property type, operating hours, manpower requirements, maintenance needs and compliance standards.",
    },
  ];

  const services = [
    {
      image: IntegratedFM,
      title: "Integrated Facility Management",
      desc: "Complete integrated facility management services in Bangalore for commercial buildings, offices, residential properties and industrial facilities.",
      features: [
        "24/7 Operations",
        "Preventive Maintenance",
        "Energy Management",
      ],
    },
    {
      image: BuildingMaintenance,
      title: "Building Maintenance",
      desc: "Routine building inspections, repair support, preventive maintenance and operational facility support services.",
      features: [
        "Structural Inspections",
        "Repair Services",
        "Safety Compliance",
      ],
    },
    {
      image: HousekeepingManagement,
      title: "Housekeeping Management",
      desc: "Professional housekeeping supervision, cleaning coordination, hygiene maintenance and workplace cleanliness management.",
      features: ["Staff Supervision", "Quality Audits", "Inventory Management"],
    },
    {
      image: TechnicalSupport,
      title: "Technical Support Services",
      desc: "Electrical, plumbing, HVAC and technical maintenance support for smooth facility operations across Bangalore.",
      features: ["Electrical Systems", "Plumbing", "HVAC Maintenance"],
    },
    {
      image: VendorManagement,
      title: "Vendor Management",
      desc: "Efficient coordination and supervision of third-party vendors, contractors and service providers.",
      features: [
        "Contract Management",
        "Performance Tracking",
        "Cost Optimization",
      ],
    },
    {
      image: AssetManagement,
      title: "Asset Management",
      desc: "Facility asset tracking, maintenance scheduling, asset monitoring and lifecycle management support services.",
      features: [
        "Asset Inventory",
        "Maintenance Scheduling",
        "Lifecycle Tracking",
      ],
    },
  ];

  const benefits = [
    {
      text: "Professional Facility Management Team",
      icon: Users,
    },
    {
      text: "Customized Operational Solutions",
      icon: Building2,
    },
    {
      text: "Reliable Maintenance Support",
      icon: ShieldCheck,
    },
    {
      text: "Improved Operational Efficiency",
      icon: Award,
    },
    {
      text: "Cost-effective Service Management",
      icon: CheckCircle,
    },
    {
      text: "High Standards of Safety and Hygiene",
      icon: Sparkles,
    },
  ];

  const stats = [
    {
      label: "Core Facility Services",
      value: "6+",
      icon: Building2,
    },
    {
      label: "Operational Support",
      value: "24/7",
      icon: Clock,
    },
    {
      label: "Primary Service Area",
      value: "Bengaluru",
      icon: MapPin,
    },
    {
      label: "Service Planning",
      value: "Custom",
      icon: CheckCircle,
    },
  ];

  const whyChoose = [
    "24/7 facility operations support",
    "Preventive maintenance planning",
    "Dedicated facility managers",
    "Vendor coordination support",
    "Cost optimization strategies",
    "Safety and compliance management",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Inspection",
      desc: "We review the property type, operating hours, service areas, current challenges and expected standards.",
    },
    {
      step: "02",
      title: "Requirement Planning",
      desc: "We estimate manpower, shifts, supervision, equipment, maintenance schedules and reporting requirements.",
    },
    {
      step: "03",
      title: "Customized Proposal",
      desc: "A clear scope of work is prepared for housekeeping, security, maintenance, pest management and support services.",
    },
    {
      step: "04",
      title: "Team Deployment",
      desc: "Suitable operational staff and supervisors are deployed according to the approved service plan.",
    },
    {
      step: "05",
      title: "Monitoring and Reporting",
      desc: "Attendance, completed tasks, service quality, complaints and corrective actions are reviewed regularly.",
    },
    {
      step: "06",
      title: "Continuous Improvement",
      desc: "The service plan is refined according to site feedback, operational changes and performance reviews.",
    },
  ];

  const industries = [
    "Corporate Offices",
    "Commercial Buildings",
    "Residential Apartments",
    "Industrial Facilities",
    "Hospitals and Healthcare",
    "Educational Institutions",
    "Shopping Malls",
    "Warehouses",
    "Hotels and Hospitality",
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
      path: "/seofolder/peenya",
    },
    {
      name: "Hebbal",
      path: "/seofolder/hebbal",
    },
    {
      name: "BEML Layout",
      path: "/seofolder/beml",
    },
    {
      name: "Dabaspet",
      path: "/integrated-facility-management-dabaspet",
    },
    {
      name: "Doddaballapur",
      path: "/seofolder/doddaballapur",
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

  const relatedServices = [
    {
      title: "Housekeeping Services",
      desc: "Professional housekeeping teams, cleaning supervision and hygiene management for all property types.",
      link: "/housekeeping",
      icon: Sparkles,
    },
    {
      title: "Security Services",
      desc: "Trained security guards, CCTV monitoring and property protection solutions.",
      link: "/securityservice",
      icon: Shield,
    },
    {
      title: "Repair and Maintenance",
      desc: "Electrical, plumbing, carpentry and building maintenance support.",
      link: "/repair",
      icon: Wrench,
    },
    {
      title: "Manpower Outsourcing",
      desc: "Skilled, semi-skilled and unskilled workforce deployment with compliance support.",
      link: "/manpower",
      icon: UserRoundCheck,
    },
    {
      title: "Soft Services",
      desc: "Cleaning, sanitation, workplace hygiene and support services.",
      link: "/softservices",
      icon: CheckCircle,
    },
    {
      title: "Pest Management",
      desc: "Professional pest management services for residential, commercial and industrial properties.",
      link: "/pest-management",
      icon: Bug,
    },
  ];
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.acuitygroups.in/#organization",
    name: "Acuity Groups LLP",
    url: "https://www.acuitygroups.in/",
    logo: "https://www.acuitygroups.in/logo192.png",
    telephone: "+919941229005",
    email: "info@acuitygroups.in",
    image: "https://www.acuitygroups.in/logo192.png",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar 6th Phase, Yelachenahalli",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560078",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919941229005",
      contactType: "customer service",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: "Integrated Facility Management Services in Bangalore",
    alternateName: "Facility Management Services in Bengaluru",
    serviceType: "Integrated Facility Management",
    url: canonicalUrl,
    description:
      "Acuity Groups LLP provides integrated facility management services in Bangalore, including housekeeping, security, repair and maintenance, pest management, manpower outsourcing, technical support and vendor coordination.",
    provider: {
      "@id": "https://www.acuitygroups.in/#organization",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area.name}, Bengaluru, Karnataka`,
      url: `https://www.acuitygroups.in${area.path}`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Integrated Facility Management Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
        },
      })),
    },
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
        name: "Services",
        item: "https://www.acuitygroups.in/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Integrated Facility Management",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="overflow-hidden bg-white font-sans text-gray-800">
      <Helmet>
        <title>Integrated Facility Management Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Integrated facility management services in Bangalore for offices, apartments and industries. Get housekeeping, security, maintenance and manpower support."
        />

        <meta
          name="keywords"
          content="integrated facility management Bangalore, facility management company Bangalore, facility management services Bangalore, housekeeping services Bangalore, security services Bangalore"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups LLP" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management"
        />

        <meta
          property="og:title"
          content="Integrated Facility Management Bangalore | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Professional facility management solutions for offices, apartments, industries, hospitals, warehouses and commercial properties across Bangalore."
        />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/integrated-facility-management"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups LLP" />

        <meta
          property="og:image"
          content="https://www.acuitygroups.in/images/integrated-facility-management-bangalore.jpg"
        />

        <meta
          property="og:image:alt"
          content="Integrated facility management services in Bangalore"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Integrated Facility Management Bangalore | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Housekeeping, security, maintenance, pest management and manpower services for properties across Bangalore."
        />

        <meta
          name="twitter:image"
          content="https://www.acuitygroups.in/images/integrated-facility-management-bangalore.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      {/* VISIBLE BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-gray-100 bg-white px-6 py-3 text-sm md:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-gray-600">
          <Link to="/" className="font-medium hover:text-blue-900">
            Home
          </Link>

          <span aria-hidden="true">/</span>

          <Link to="/services" className="font-medium hover:text-blue-900">
            Services
          </Link>

          <span aria-hidden="true">/</span>

          <span className="font-semibold text-gray-900">
            Integrated Facility Management
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section
        aria-labelledby="facility-management-heading"
        className="relative flex min-h-[88vh] items-center"
      >
        <div className="absolute inset-0">
          <img
            src={FacilityHero}
            alt="Integrated facility management services in Bangalore"
            className="h-full w-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              <Building2 size={16} className="text-yellow-300" />

              <span>FACILITY MANAGEMENT COMPANY IN BANGALORE</span>
            </div>

            <h1
              id="facility-management-heading"
              className="mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-7xl"
            >
              Integrated Facility Management Services in Bangalore
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-blue-100 md:text-xl">
              Acuity Groups LLP provides integrated facility management services
              including housekeeping, security, repair and maintenance, pest
              management and manpower support for offices, apartments,
              commercial buildings, industries and institutions across
              Bengaluru.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900 transition hover:bg-blue-50"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20integrated%20facility%20management%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-green-400 bg-green-500/20 px-8 py-4 font-bold text-white transition hover:bg-green-500"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

              <Link
                to="/services"
                className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-900"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-20 -mt-16 px-6 md:-mt-20 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-xl md:p-6"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-900 md:h-14 md:w-14">
                <Icon size={26} />
              </div>

              <p className="break-words text-2xl font-black text-gray-900 md:text-3xl">
                {value}
              </p>

              <p className="mt-1 text-xs text-gray-500 md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              <Sparkles size={15} />

              <span>COMPLETE FACILITY SUPPORT</span>
            </div>

            <h2 className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Professional Facility Management for Bangalore Properties
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              Acuity Groups LLP is an integrated facility management company in
              Bangalore providing coordinated housekeeping, security, repair and
              maintenance, pest management and manpower support for offices,
              apartments, commercial buildings, industries, warehouses,
              hospitals and educational institutions.
            </p>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              Our team studies the property, operating hours, manpower needs,
              hygiene requirements, safety priorities and maintenance schedules
              before preparing a customized facility management plan.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              We combine{" "}
              <Link
                to="/housekeeping"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                housekeeping services
              </Link>
              ,{" "}
              <Link
                to="/securityservice"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                security services
              </Link>
              ,{" "}
              <Link
                to="/repair"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                repair and maintenance
              </Link>
              ,{" "}
              <Link
                to="/manpower"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                manpower outsourcing
              </Link>{" "}
              and{" "}
              <Link
                to="/pest-management"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                pest management
              </Link>{" "}
              under one coordinated service system.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ text, icon: Icon }) => (
              <div
                key={text}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white">
                  <Icon size={24} />
                </div>

                <h3 className="font-bold text-gray-900">{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-bold text-blue-900">
              <Building2 size={15} />

              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Our Facility Management Services
            </h2>

            <p className="text-lg leading-relaxed text-gray-500">
              Complete operational support to keep your property clean, safe,
              functional and professionally managed.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} services in Bangalore`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-black text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-gray-600">
                    {service.desc}
                  </p>

                  <div className="mb-5 space-y-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={15}
                          className="flex-shrink-0 text-blue-900"
                        />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    aria-label={`Enquire about ${service.title}`}
                    className="inline-flex items-center gap-2 font-bold text-blue-900 hover:text-blue-700"
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[40px] bg-blue-950 p-8 text-white md:p-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold">
              <ShieldCheck size={16} />

              <span>WHY CHOOSE ACUITY GROUPS</span>
            </div>

            <h2 className="mb-6 text-4xl font-black md:text-5xl">
              One Reliable Partner for Complete Facility Operations
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-blue-100">
              We manage facility operations through planned supervision,
              preventive maintenance, vendor coordination, trained manpower and
              regular reporting. Our aim is to improve workplace hygiene,
              safety, service consistency and operational efficiency.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900 transition hover:bg-blue-50"
              >
                Request a Site Inspection
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+919941229005"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-900"
              >
                <PhoneCall size={18} />
                Call Our Team
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 transition hover:bg-white/15"
              >
                <CheckCircle className="mb-3 text-yellow-300" size={24} />

                <h3 className="font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-bold text-blue-900">
              <MapPin size={15} />

              <span>FACILITY MANAGEMENT ACROSS BANGALORE</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Facility Management Services Across Bengaluru
            </h2>

            <p className="text-lg leading-relaxed text-gray-500">
              We support commercial, residential, institutional and industrial
              properties across major business and residential areas in
              Bangalore.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                aria-label={`Integrated facility management services in ${area.name}`}
                className="group rounded-2xl border border-gray-100 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <MapPin
                  className="mx-auto mb-3 text-blue-900 transition group-hover:scale-110"
                  size={22}
                />

                <span className="font-bold leading-relaxed text-gray-800 group-hover:text-blue-900">
                  Facility Management Services in {area.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-blue-100 bg-blue-50 p-7 text-center">
            <h3 className="mb-3 text-2xl font-black text-gray-900">
              Need Facility Services in Another Bangalore Location?
            </h3>

            <p className="mb-5 leading-relaxed text-gray-600">
              Contact our team with your property location and service
              requirements. We will confirm availability and arrange a site
              assessment.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              Check Service Availability
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              <Building2 size={15} />

              <span>INDUSTRIES WE SERVE</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Facility Management for Different Property Types
            </h2>

            <p className="text-lg leading-relaxed text-gray-500">
              Our service plans are customized according to the property size,
              operating schedule, manpower needs, safety requirements and
              service standards.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <Building2 className="mx-auto mb-3 text-blue-900" size={25} />

                <h3 className="font-bold text-gray-800">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-bold text-blue-900">
              <Sparkles size={15} />

              <span>RELATED SERVICES</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Complete Facility Support Solutions
            </h2>

            <p className="text-lg leading-relaxed text-gray-500">
              Explore the specialized services included within our integrated
              facility management solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mb-3 text-xl font-black text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mb-5 leading-relaxed text-gray-600">
                    {service.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 font-bold text-blue-900">
                    View Service
                    <ArrowRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* WORK PROCESS */}
      <section className="bg-blue-950 px-6 py-24 text-white md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold">
              <CheckCircle size={15} />

              <span>OUR WORK PROCESS</span>
            </div>

            <h2 className="mb-4 text-4xl font-black md:text-5xl">
              How We Plan and Manage Your Facility
            </h2>

            <p className="text-lg leading-relaxed text-blue-100">
              Every property receives a site-based service plan instead of a
              one-size-fits-all facility management package.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 transition hover:bg-white/15"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white font-black text-blue-950">
                  {item.step}
                </span>

                <h3 className="mb-3 text-xl font-black">{item.title}</h3>

                <p className="leading-relaxed text-blue-100">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Facility Management FAQs
            </h2>

            <p className="text-lg leading-relaxed text-gray-500">
              Common questions about our integrated facility management services
              in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-900">
                  <span>{faq.question}</span>

                  <span className="text-2xl text-blue-900 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-gray-200 pt-4 leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BANGALORE OFFICE */}
      <section className="bg-gray-50 px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] border border-gray-100 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              <MapPin size={16} />

              <span>BANGALORE OFFICE</span>
            </div>

            <h2 className="mb-5 text-3xl font-black text-gray-900 md:text-4xl">
              Speak With Our Facility Management Team
            </h2>

            <p className="mb-6 leading-relaxed text-gray-600">
              Share your property type, Bangalore location, required services,
              working hours and expected manpower. Our team can arrange a site
              inspection and prepare a customized facility management proposal.
            </p>

            <address className="not-italic leading-8 text-gray-700">
              <strong className="text-gray-900">Acuity Groups LLP</strong>
              <br />
              2nd Floor, KVO-08, No. 28/2, near Sun Jupiter School,
              <br />
              JP Nagar 6th Phase, Yelachenahalli,
              <br />
              Bengaluru, Karnataka – 560078
            </address>
          </div>

          <div className="grid gap-4 self-center">
            <a
              href="tel:+919941229005"
              aria-label="Call Acuity Groups LLP"
              className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 transition hover:border-blue-200 hover:shadow-md"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-900">
                <PhoneCall size={22} />
              </span>

              <span>
                <span className="block text-sm text-gray-500">Call us</span>

                <strong className="text-gray-900">+91 99412 29005</strong>
              </span>
            </a>

            <a
              href="mailto:info@acuitygroups.in"
              aria-label="Email Acuity Groups LLP"
              className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 transition hover:border-blue-200 hover:shadow-md"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-900">
                <MessageCircle size={22} />
              </span>

              <span>
                <span className="block text-sm text-gray-500">Email us</span>

                <strong className="break-all text-gray-900">
                  info@acuitygroups.in
                </strong>
              </span>
            </a>

            <a
              href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20a%20site%20inspection%20for%20facility%20management%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Acuity Groups LLP"
              className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 transition hover:border-green-200 hover:shadow-md"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                <MessageCircle size={22} />
              </span>

              <span>
                <span className="block text-sm text-gray-500">WhatsApp us</span>

                <strong className="text-gray-900">
                  Request a Site Inspection
                </strong>
              </span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-900 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Request a Site Inspection
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-50 px-6 pb-24 pt-8 md:px-12">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-white px-7 py-16 text-center shadow-sm md:px-12">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
            <Building2 size={16} />

            <span>REQUEST A CUSTOMIZED PROPOSAL</span>
          </div>

          <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl">
            Need Reliable Facility Management in Bangalore?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600">
            Partner with Acuity Groups LLP for professional facility management
            services designed to improve safety, hygiene, maintenance standards,
            manpower coordination and daily workplace operations.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-10 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+919941229005"
              aria-label="Call Acuity Groups for facility management services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-900 px-10 py-4 font-bold text-blue-900 transition hover:bg-blue-900 hover:text-white"
            >
              <PhoneCall size={18} />
              +91 99412 29005
            </a>

            <a
              href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20integrated%20facility%20management%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Acuity Groups for facility management services"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-10 py-4 font-bold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilityManagement;
