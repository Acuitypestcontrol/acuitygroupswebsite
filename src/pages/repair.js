import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Building2,
  CheckCircle,
  Wrench,
  Users,
  Clock,
  Award,
  PhoneCall,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  MapPin,
  MessageCircle,
  Shield,
  Bug,
  UserRoundCheck,
} from "lucide-react";

import MaintenanceHero from "../images/repair.jpg";
import ElectricalService from "../images/electricalservicepng.jpg";
import PlumbingService from "../images/plumbing.jpg";
import CarpentryService from "../images/carpentry.jpg";
import BuildingMaintenance from "../images/buildingmain.jpg";

const RepairMaintenance = () => {
  const services = [
    {
      image: ElectricalService,
      title: "Electrical Maintenance Services",
      desc: "Professional wiring, rewiring, lighting installation, switchboard maintenance and electrical troubleshooting services.",
      features: [
        "Wiring and Rewiring",
        "Lighting Installation",
        "Switchboard Repair",
        "Power Troubleshooting",
      ],
    },
    {
      image: PlumbingService,
      title: "Plumbing Maintenance Services",
      desc: "Professional pipe leakage repair, drain cleaning, bathroom fitting installation and water system maintenance.",
      features: [
        "Leakage Repair",
        "Drain Cleaning",
        "Bathroom Fittings",
        "Water System Maintenance",
      ],
    },
    {
      image: CarpentryService,
      title: "Carpentry Services",
      desc: "Professional furniture repair, door and window fixing, cabinet installation and wood polishing services.",
      features: [
        "Furniture Repair",
        "Door and Window Fixing",
        "Cabinet Installation",
        "Wood Polishing",
      ],
    },
    {
      image: BuildingMaintenance,
      title: "Building Maintenance Services",
      desc: "Complete wall repairs, floor repairs, painting, waterproofing, finishing and structural maintenance support.",
      features: [
        "Wall and Floor Repairs",
        "Painting and Finishing",
        "Structural Maintenance",
        "Waterproofing Support",
      ],
    },
  ];

  const benefits = [
    {
      text: "Experienced and Skilled Technicians",
      icon: Users,
    },
    {
      text: "Quick Service Response",
      icon: Clock,
    },
    {
      text: "Quality Materials and Spare Parts",
      icon: ShieldCheck,
    },
    {
      text: "Transparent Service Pricing",
      icon: CheckCircle,
    },
    {
      text: "Emergency Maintenance Support",
      icon: Wrench,
    },
    {
      text: "Quality Assurance on Repairs",
      icon: Award,
    },
  ];

  const stats = [
    {
      label: "Years of Experience",
      value: "19+",
      icon: Award,
    },
    {
      label: "Maintenance Technicians",
      value: "50+",
      icon: Users,
    },
    {
      label: "Service Calls / Month",
      value: "1000+",
      icon: Building2,
    },
    {
      label: "Service Response",
      value: "< 2 Hrs",
      icon: Clock,
    },
  ];

  const whyChoose = [
    "Experienced maintenance technicians",
    "Quick service response",
    "Quality materials and spare parts",
    "Transparent service pricing",
    "Emergency repair assistance",
    "Professional work supervision",
  ];

  const industries = [
    "Residential Apartments",
    "Corporate Offices",
    "Retail Stores and Showrooms",
    "Industrial Facilities",
    "Hotels and Restaurants",
    "Educational Institutions",
    "Hospitals and Clinics",
    "Warehouses and Logistics",
  ];

  const serviceAreas = [
    "JP Nagar",
    "Whitefield",
    "Electronic City",
    "Koramangala",
    "HSR Layout",
    "Hebbal",
    "Peenya",
    "Banashankari",
    "Marathahalli",
    "Yelahanka",
    "Doddaballapur",
    "Attibele",
  ];

  const relatedServices = [
    {
      title: "Integrated Facility Management",
      desc: "Complete management of housekeeping, security, maintenance and daily facility operations.",
      link: "/integrated-facility-management",
      icon: Building2,
    },
    {
      title: "Housekeeping Services",
      desc: "Professional housekeeping support for commercial, residential and industrial properties.",
      link: "/housekeeping",
      icon: Sparkles,
    },
    {
      title: "Security Services",
      desc: "Trained security personnel and professional guarding solutions for all property types.",
      link: "/securityservice",
      icon: Shield,
    },
    {
      title: "Soft Services",
      desc: "Corporate cleaning, deep cleaning, washroom hygiene and workplace support services.",
      link: "/softservices",
      icon: CheckCircle,
    },
    {
      title: "Pest Management",
      desc: "Professional pest management services for offices, apartments, industries and warehouses.",
      link: "/pest-management",
      icon: Bug,
    },
    {
      title: "Manpower Outsourcing",
      desc: "Reliable trained manpower for technical maintenance and daily facility operations.",
      link: "/manpower",
      icon: UserRoundCheck,
    },
  ];

  const faqs = [
    {
      question:
        "What repair and maintenance services does Acuity Groups provide in Bangalore?",
      answer:
        "Acuity Groups provides electrical maintenance, plumbing services, carpentry work, building repairs, painting, waterproofing and general property maintenance services in Bangalore.",
    },
    {
      question:
        "Do you provide repair services for offices and commercial properties?",
      answer:
        "Yes. We provide repair and maintenance services for offices, apartments, hospitals, hotels, industries, educational institutions, warehouses, retail stores and commercial buildings.",
    },
    {
      question: "Do you provide emergency repair and maintenance support?",
      answer:
        "Yes. Emergency maintenance support is available depending on technician availability, location and the type of electrical, plumbing or building repair required.",
    },
    {
      question: "Can Acuity Groups manage preventive maintenance contracts?",
      answer:
        "Yes. We provide scheduled preventive maintenance and annual maintenance support to help reduce equipment failures, property damage and unexpected repair costs.",
    },
    {
      question: "How can I request a repair or maintenance quotation?",
      answer:
        "You can contact Acuity Groups by phone, WhatsApp or the website contact form. Share your property type, location and maintenance requirements, and our team will provide a suitable quotation.",
    },
    {
      question: "Do you provide annual maintenance contracts in Bangalore?",
      answer:
        "Yes. We provide customized annual maintenance contracts for electrical systems, plumbing, carpentry, building upkeep and general property maintenance.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.acuitygroups.in/#organization",
    name: "Acuity Groups LLP",
    url: "https://www.acuitygroups.in/",
    telephone: "+919941229005",
    email: "info@acuitygroups.in",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar 6th Phase, Yelachenahalli",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560078",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919941229005",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.acuitygroups.in/repair/#service",
    name: "Repair and Maintenance Services in Bangalore",
    serviceType:
      "Electrical, Plumbing, Carpentry and Building Maintenance Services",
    url: "https://www.acuitygroups.in/repair",
    provider: {
      "@id": "https://www.acuitygroups.in/#organization",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Bengaluru`,
    })),
    description:
      "Professional repair and maintenance services in Bangalore, including electrical maintenance, plumbing, carpentry, preventive maintenance and building repairs.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Repair and Maintenance Services",
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
        name: "Repair and Maintenance Services",
        item: "https://www.acuitygroups.in/repair",
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
        <title>
          Repair and Maintenance Services in Bangalore | Acuity Groups
        </title>

        <meta
          name="description"
          content="Professional repair and maintenance services in Bangalore, including electrical, plumbing, carpentry and building maintenance for commercial and residential properties."
        />

        <meta
          name="keywords"
          content="repair and maintenance services in Bangalore, building maintenance company Bangalore, electrical maintenance Bangalore, plumbing services Bangalore, carpentry services Bangalore, property maintenance Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.acuitygroups.in/repair" />

        <meta
          property="og:title"
          content="Repair and Maintenance Services in Bangalore | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Professional electrical, plumbing, carpentry and building maintenance services for residential, commercial and industrial properties in Bangalore."
        />

        <meta property="og:url" content="https://www.acuitygroups.in/repair" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />
        <meta property="og:image" content={MaintenanceHero} />

        <meta
          property="og:image:alt"
          content="Repair and maintenance services in Bangalore"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Repair and Maintenance Services in Bangalore | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Electrical, plumbing, carpentry and building maintenance services in Bangalore."
        />

        <meta name="twitter:image" content={MaintenanceHero} />

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

      {/* HERO */}
      <section className="relative flex min-h-screen items-center">
        <div className="absolute inset-0">
          <img
            src={MaintenanceHero}
            alt="Repair and maintenance services in Bangalore"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              <Wrench size={16} className="text-yellow-300" />

              <span>REPAIR AND MAINTENANCE IN BANGALORE</span>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Repair and Maintenance Services in Bangalore
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-blue-100 md:text-xl">
              Professional electrical, plumbing, carpentry and building
              maintenance solutions for residential, commercial and industrial
              properties.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900 transition hover:bg-blue-50"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20repair%20and%20maintenance%20services%20in%20Bangalore."
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
      <section className="relative z-20 -mt-20 px-6 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-900">
                <stat.icon size={26} />
              </div>

              <p className="text-3xl font-black text-gray-900">{stat.value}</p>

              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
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

              <span>COMPLETE MAINTENANCE SOLUTIONS</span>
            </div>

            <h2 className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Professional Property Repair and Maintenance Solutions
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              As part of our{" "}
              <Link
                to="/integrated-facility-management"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                integrated facility management services in Bangalore
              </Link>
              , Acuity Groups provides professional repair and maintenance
              support for offices, apartments, hospitals, hotels, industries,
              warehouses and commercial buildings.
            </p>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              From electrical faults and plumbing leaks to carpentry work,
              waterproofing and building upkeep, our team delivers dependable
              solutions to keep your property safe, functional and
              well-maintained.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Our maintenance services can also be combined with{" "}
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
              </Link>{" "}
              and{" "}
              <Link
                to="/manpower"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                manpower outsourcing
              </Link>{" "}
              for complete property management.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white">
                  <benefit.icon size={24} />
                </div>

                <h3 className="font-bold text-gray-900">{benefit.text}</h3>
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
              <Wrench size={15} />

              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Our Repair and Maintenance Services
            </h2>

            <p className="text-lg text-gray-500">
              Complete property maintenance solutions designed to improve
              safety, functionality and long-term building condition.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:shadow-2xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} in Bangalore`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="400"
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
                    className="inline-flex items-center gap-2 font-bold text-blue-900 hover:text-blue-700"
                  >
                    Enquire Now <ArrowRight size={16} />
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
            <h2 className="mb-6 text-4xl font-black md:text-5xl">
              Why Choose Acuity Groups?
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-blue-100">
              We provide dependable repair and maintenance services through
              skilled technicians, planned supervision, quality materials and
              transparent communication.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-5"
              >
                <CheckCircle className="mb-3 text-yellow-300" size={24} />

                <h3 className="font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-bold text-blue-900">
              <Building2 size={15} />

              <span>INDUSTRIES WE SERVE</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Property Maintenance Across Industries
            </h2>

            <p className="text-lg text-gray-500">
              We provide repair and maintenance solutions for residential,
              corporate, commercial, healthcare, hospitality and industrial
              properties.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:shadow-lg"
              >
                <Wrench className="mx-auto mb-3 text-blue-900" size={25} />

                <h3 className="font-bold text-gray-800">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              <MapPin size={15} />

              <span>MAINTENANCE SERVICE AREAS</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Repair Services Across Bangalore
            </h2>

            <p className="text-lg text-gray-500">
              We provide property repair and maintenance services across major
              residential, commercial and industrial areas in Bengaluru.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-6 py-3 font-semibold text-blue-950"
              >
                <MapPin size={17} />
                {area}
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
              <Wrench size={15} />

              <span>RELATED SERVICES</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Complete Facility Support Services
            </h2>

            <p className="text-lg text-gray-500">
              Combine maintenance services with our complete facility management
              solutions for smooth property operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
                  <service.icon size={27} />
                </div>

                <h3 className="mb-3 text-xl font-black text-gray-900">
                  {service.title}
                </h3>

                <p className="mb-5 leading-relaxed text-gray-600">
                  {service.desc}
                </p>

                <span className="inline-flex items-center gap-2 font-bold text-blue-900">
                  View Service <ArrowRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Repair and Maintenance FAQs
            </h2>

            <p className="text-lg text-gray-500">
              Common questions about our repair and maintenance services in
              Bangalore.
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

      {/* FINAL CTA */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl">
            Looking for Repair and Maintenance Services in Bangalore?
          </h2>

          <p className="mb-10 text-lg text-gray-600">
            Contact Acuity Groups for professional electrical, plumbing,
            carpentry and building maintenance solutions for your property.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-10 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+919941229005"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-900 px-10 py-4 font-bold text-blue-900 transition hover:bg-blue-900 hover:text-white"
            >
              <PhoneCall size={18} />
              +91 99412 29005
            </a>

            <a
              href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20repair%20and%20maintenance%20services%20in%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
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

export default RepairMaintenance;
