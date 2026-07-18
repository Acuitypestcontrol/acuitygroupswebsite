import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  Building2,
  Users,
  Clock,
  Award,
  Leaf,
  PhoneCall,
  ArrowRight,
  Wrench,
  Calendar,
  Headphones,
  CheckCircle,
  ShieldCheck,
  Bug,
  Settings,
  UserRoundCheck,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Ss from "../images/softservices.jpg";
import HousekeepingImg from "../images/housekeepingimage.jpg";
import CorporateCleaningImg from "../images/corporateofficeimage.jpg";
import DeepCleaningImg from "../images/deepcleaning.jpg";
import WashroomImg from "../images/washroom.jpg";

const SoftServices = () => {
  const services = [
    {
      image: HousekeepingImg,
      title: "Housekeeping Services",
      desc: "Complete housekeeping solutions for offices, apartments, hospitals, malls and industrial facilities.",
      features: ["Daily cleaning", "Waste management", "Floor care"],
      link: "/housekeeping",
    },
    {
      image: CorporateCleaningImg,
      title: "Corporate Cleaning",
      desc: "Professional office cleaning including workstation cleaning, washroom sanitation, pantry cleaning and floor maintenance.",
      features: [
        "Workstation cleaning",
        "Washroom sanitation",
        "Pantry maintenance",
      ],
      link: "/contact",
    },
    {
      image: DeepCleaningImg,
      title: "Deep Cleaning Services",
      desc: "Advanced deep cleaning for commercial, residential and industrial spaces using modern equipment.",
      features: [
        "High-pressure cleaning",
        "Carpet shampooing",
        "Upholstery cleaning",
      ],
      link: "/contact",
    },
    {
      image: WashroomImg,
      title: "Washroom Hygiene",
      desc: "Complete washroom hygiene management with sanitization, odor control and hygiene monitoring.",
      features: ["Sanitization", "Odor control", "Hygiene monitoring"],
      link: "/contact",
    },
  ];

  const benefits = [
    { text: "Trained and Certified Staff", icon: Users },
    { text: "Eco-Friendly Products", icon: Leaf },
    { text: "Modern Equipment", icon: Wrench },
    { text: "Flexible Scheduling", icon: Calendar },
    { text: "Quality Assurance", icon: Award },
    { text: "24/7 Support", icon: Headphones },
  ];

  const whyChoose = [
    "Customized cleaning plans",
    "Regular quality inspections",
    "Reliable manpower deployment",
    "Affordable service packages",
    "Safe cleaning chemicals",
    "Professional supervision",
  ];

  const stats = [
    { label: "Satisfied Clients", value: "500+", icon: Users },
    { label: "Trained Staff", value: "200+", icon: Award },
    { label: "Service Locations", value: "Pan India", icon: Building2 },
    { label: "Response Time", value: "< 2 Hrs", icon: Clock },
  ];

  const industries = [
    "Corporate Offices",
    "IT Parks",
    "Hospitals and Clinics",
    "Hotels and Hospitality",
    "Educational Institutions",
    "Residential Apartments",
    "Warehouses",
    "Manufacturing Units",
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
  ];

  const relatedServices = [
    {
      title: "Housekeeping Services",
      desc: "Trained housekeeping staff and planned cleaning support for all types of facilities.",
      link: "/housekeeping",
      icon: Sparkles,
    },
    {
      title: "Security Services",
      desc: "Professional security personnel and dependable guarding solutions.",
      link: "/securityservice",
      icon: ShieldCheck,
    },
    {
      title: "Integrated Facility Management",
      desc: "Coordinated facility services through one reliable management partner.",
      link: "/integrated-facility-management",
      icon: Building2,
    },
    {
      title: "Pest Management",
      desc: "Safe pest management for residential, commercial and industrial properties.",
      link: "/pest-management",
      icon: Bug,
    },
    {
      title: "Repair and Maintenance",
      desc: "Preventive and corrective maintenance for essential facility systems.",
      link: "/repair",
      icon: Settings,
    },
    {
      title: "Manpower Outsourcing",
      desc: "Reliable staffing support for facility and operational requirements.",
      link: "/manpower",
      icon: UserRoundCheck,
    },
  ];

  const faqs = [
    {
      question: "What are facility soft services?",
      answer:
        "Facility soft services are people-led services that support cleanliness, hygiene, comfort and daily workplace operations. They include housekeeping, corporate cleaning, deep cleaning, washroom hygiene, waste management and related support services.",
    },
    {
      question: "What soft services does Acuity Groups provide?",
      answer:
        "Acuity Groups provides housekeeping, corporate cleaning, deep cleaning, washroom hygiene, floor care, carpet cleaning, pantry maintenance, waste management and customized facility cleaning services in Bangalore.",
    },
    {
      question: "Do you provide housekeeping staff for offices?",
      answer:
        "Yes. We provide trained housekeeping staff for corporate offices, IT parks, commercial buildings, hospitals, hotels, educational institutions, apartments, warehouses and industrial facilities.",
    },
    {
      question: "Do you offer deep cleaning services?",
      answer:
        "Yes. Our deep cleaning services include high-pressure cleaning, carpet shampooing, upholstery cleaning, floor scrubbing, washroom sanitization and detailed property cleaning.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve corporate offices, IT parks, hospitals, hotels, schools, colleges, apartments, warehouses, retail properties, restaurants and manufacturing facilities across Bangalore.",
    },
    {
      question: "Can I customize the cleaning schedule?",
      answer:
        "Yes. We provide customized daily, weekly, monthly and long-term service schedules based on your property size, working hours, hygiene standards and operational requirements.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.acuitygroups.in/#organization",
    name: "Acuity Groups",
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
    "@id": "https://www.acuitygroups.in/soft-services/#service",
    name: "Soft Services in Bangalore",
    serviceType:
      "Housekeeping, Corporate Cleaning, Deep Cleaning and Washroom Hygiene Services",
    url: "https://www.acuitygroups.in/soft-services",
    provider: {
      "@id": "https://www.acuitygroups.in/#organization",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Bengaluru`,
    })),
    description:
      "Professional facility soft services in Bangalore for commercial, residential and industrial properties.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Facility Soft Services",
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
        name: "Soft Services",
        item: "https://www.acuitygroups.in/soft-services",
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
        <title>Soft Services in Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Professional soft services in Bangalore, including housekeeping, corporate cleaning, deep cleaning and washroom hygiene for offices, apartments, hospitals and industries."
        />

        <meta
          name="keywords"
          content="soft services in Bangalore, facility soft services Bangalore, housekeeping services Bangalore, corporate cleaning Bangalore, deep cleaning Bangalore, washroom hygiene Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/soft-services"
        />

        <meta
          property="og:title"
          content="Facility Soft Services in Bangalore | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Professional housekeeping, corporate cleaning, deep cleaning and washroom hygiene services across Bangalore."
        />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/soft-services"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />
        <meta property="og:image" content={Ss} />

        <meta
          property="og:image:alt"
          content="Professional soft services in Bangalore"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Facility Soft Services in Bangalore | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Housekeeping, corporate cleaning, deep cleaning and washroom hygiene services in Bangalore."
        />

        <meta name="twitter:image" content={Ss} />

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
            src={Ss}
            alt="Professional soft services in Bangalore"
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
              <Sparkles size={16} className="text-yellow-300" />
              <span>SOFT SERVICES IN BANGALORE</span>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Professional Soft Services in Bangalore
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-blue-100 md:text-xl">
              Reliable housekeeping, corporate cleaning, deep cleaning and
              washroom hygiene solutions for offices, industries, apartments,
              hospitals and institutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900 transition hover:bg-blue-50"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20soft%20services%20in%20Bangalore."
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
              <span>WHY SOFT SERVICES MATTER</span>
            </div>

            <h2 className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Clean Spaces Create Better Workplaces
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              As part of our{" "}
              <Link
                to="/integrated-facility-management"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                integrated facility management services in Bangalore
              </Link>
              , Acuity Groups provides professional soft services that keep
              premises clean, hygienic, organized and safe.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Our trained teams, modern equipment and quality-focused processes
              support offices, apartments, hospitals, hotels, educational
              institutions, warehouses and industrial facilities. Explore our{" "}
              <Link
                to="/housekeeping"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                professional housekeeping services
              </Link>{" "}
              or contact us for a customized service plan.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:shadow-lg"
              >
                <CheckCircle className="mb-3 text-blue-900" size={24} />
                <h3 className="font-bold text-gray-900">{item}</h3>
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
              <Sparkles size={15} />
              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Our Soft Services
            </h2>

            <p className="text-lg text-gray-500">
              Complete cleaning and hygiene solutions for commercial,
              residential and industrial spaces.
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
                    to={service.link}
                    className="inline-flex items-center gap-2 font-bold text-blue-900 hover:text-blue-700"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[40px] bg-blue-950 p-8 text-white md:p-14 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-black md:text-5xl">
              Why Choose Acuity Groups?
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-blue-100">
              We focus on quality, reliability, trained manpower, professional
              supervision and consistent service delivery for every facility.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="rounded-2xl border border-white/10 bg-white/10 p-5"
              >
                <benefit.icon className="mb-3 text-yellow-300" size={26} />
                <h3 className="font-bold">{benefit.text}</h3>
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
              Soft Services for Every Facility
            </h2>

            <p className="text-lg text-gray-500">
              Customized cleaning and hygiene support for different industries
              and property types across Bangalore.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:shadow-lg"
              >
                <Building2 className="mx-auto mb-3 text-blue-900" size={25} />
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
              <span>SERVICE AREAS</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Soft Services Across Bangalore
            </h2>

            <p className="text-lg text-gray-500">
              We provide professional facility soft services across major
              business, residential and industrial locations in Bengaluru.
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
              Complete Facility Support
            </h2>

            <p className="text-lg text-gray-500">
              Combine soft services with our other professional facility
              solutions for complete operational support.
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
              Soft Services FAQs
            </h2>

            <p className="text-lg text-gray-500">
              Common questions about our housekeeping, cleaning and hygiene
              services in Bangalore.
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

      {/* CTA */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl">
            Need Professional Soft Services in Bangalore?
          </h2>

          <p className="mb-10 text-lg text-gray-600">
            Contact Acuity Groups for a free consultation and customized
            housekeeping, cleaning or hygiene service plan for your facility.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-10 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+919941229005"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-900 px-10 py-4 font-bold text-blue-900 transition hover:bg-blue-900 hover:text-white"
            >
              <PhoneCall size={18} />
              +91 99412 29005
            </a>

            <a
              href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20soft%20services%20in%20Bangalore."
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

export default SoftServices;
