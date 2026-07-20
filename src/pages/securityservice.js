import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  Building2,
  Users,
  Camera,
  CheckCircle,
  Clock,
  Award,
  PhoneCall,
  ArrowRight,
  Sparkles,
  MapPin,
  MessageCircle,
  Wrench,
  Bug,
  Settings,
  UserRoundCheck,
} from "lucide-react";

import SecurityHero from "../images/securityty (1).jpg";
import MannedGuarding from "../images/security iamge1.jpg";
import CorporateSecurity from "../images/corporate.png";
import ResidentialSecurity from "../images/homesecurity.jpg";
import IndustrialSecurity from "../images/industries.jpg";
import EventSecurity from "../images/event.jpg";
import CCTVMonitoring from "../images/cctvmonitoring.jpg";

const SecurityServices = () => {
  const services = [
    {
      image: MannedGuarding,
      title: "Manned Guarding Services",
      desc: "Trained security guards for offices, apartments, hospitals, industrial units, educational institutions and retail spaces.",
      features: ["24/7 Availability", "Quick Response", "Regular Patrols"],
    },
    {
      image: CorporateSecurity,
      title: "Corporate Security Services",
      desc: "Visitor management, employee access monitoring, lobby security, asset protection and emergency response support.",
      features: ["Access Control", "Visitor Management", "Emergency Response"],
    },
    {
      image: ResidentialSecurity,
      title: "Residential Security Services",
      desc: "Reliable residential security solutions for gated communities, apartments, villas and residential layouts.",
      features: ["Community Safety", "Gate Management", "Night Patrols"],
    },
    {
      image: IndustrialSecurity,
      title: "Industrial Security Services",
      desc: "Industrial security support including gate management, patrol services, material monitoring and access control.",
      features: [
        "Material Monitoring",
        "Perimeter Security",
        "Shift Management",
      ],
    },
    {
      image: EventSecurity,
      title: "Event Security Management",
      desc: "Professional event security solutions for exhibitions, conferences, public gatherings and private events.",
      features: ["Crowd Control", "VIP Protection", "Emergency Planning"],
    },
    {
      image: CCTVMonitoring,
      title: "CCTV Monitoring Support",
      desc: "Surveillance monitoring assistance and security coordination support for enhanced safety management.",
      features: [
        "Real-time Monitoring",
        "Incident Reporting",
        "Coordinated Response",
      ],
    },
  ];

  const benefits = [
    {
      text: "Professionally Trained Security Personnel",
      icon: Shield,
    },
    {
      text: "Background Verified Security Staff",
      icon: CheckCircle,
    },
    {
      text: "24/7 Security Support Solutions",
      icon: Clock,
    },
    {
      text: "Customized Security Planning",
      icon: Building2,
    },
    {
      text: "Strong Supervision and Monitoring",
      icon: Camera,
    },
    {
      text: "Reliable and Disciplined Workforce",
      icon: Users,
    },
  ];

  const stats = [
    {
      label: "Security Personnel",
      value: "300+",
      icon: Users,
    },
    {
      label: "Client Sites",
      value: "150+",
      icon: Building2,
    },
    {
      label: "Response Time",
      value: "<15 Mins",
      icon: Clock,
    },
    {
      label: "Training Hours / Year",
      value: "100+",
      icon: Award,
    },
  ];

  const whyChoose = [
    "Professionally trained guards",
    "Background verified personnel",
    "24/7 security coverage",
    "Customized security planning",
    "Strong supervision system",
    "Rapid emergency response",
  ];

  const industries = [
    "Corporate Offices",
    "Residential Apartments",
    "Industrial Facilities",
    "Warehouses and Logistics",
    "Hospitals and Healthcare",
    "Educational Institutions",
    "Shopping Malls",
    "Hotels and Hospitality",
    "Retail Stores and Showrooms",
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
      title: "Housekeeping Services",
      desc: "Professional housekeeping staff and planned cleaning support for offices, apartments and industrial facilities.",
      link: "/housekeeping",
      icon: Sparkles,
    },
    {
      title: "Soft Services",
      desc: "Complete corporate cleaning, deep cleaning, hygiene management and support services.",
      link: "/softservices",
      icon: Wrench,
    },
    {
      title: "Integrated Facility Management",
      desc: "Complete management of security, housekeeping, maintenance and workplace support services.",
      link: "/integrated-facility-management",
      icon: Building2,
    },
    {
      title: "Pest Management",
      desc: "Professional pest management solutions for residential, commercial and industrial properties.",
      link: "/pest-management",
      icon: Bug,
    },
    {
      title: "Repair and Maintenance",
      desc: "Preventive and corrective maintenance support for buildings and essential facility systems.",
      link: "/repair",
      icon: Settings,
    },
    {
      title: "Manpower Outsourcing",
      desc: "Reliable trained manpower for facility management and daily operational requirements.",
      link: "/manpower",
      icon: UserRoundCheck,
    },
  ];

  const faqs = [
    {
      question:
        "What security services does Acuity Groups provide in Bangalore?",
      answer:
        "Acuity Groups provides manned guarding, corporate security, residential security, industrial security, event security and CCTV monitoring support across Bangalore.",
    },
    {
      question: "Are your security guards trained and background verified?",
      answer:
        "Yes. Our security personnel undergo identity verification, background checks, basic security training and site-specific instructions before deployment.",
    },
    {
      question: "Do you provide 24/7 security guard services?",
      answer:
        "Yes. We provide round-the-clock security coverage with shift planning, supervision, attendance monitoring and emergency response support.",
    },
    {
      question: "Which properties can use your security services?",
      answer:
        "Our security services are suitable for offices, apartments, industries, hospitals, schools, hotels, warehouses, shopping malls and commercial properties.",
    },
    {
      question: "Do you provide security guards for apartments?",
      answer:
        "Yes. We provide trained security guards for apartments, gated communities, villas, residential layouts and housing societies across Bangalore.",
    },
    {
      question: "Can you customize security services for our property?",
      answer:
        "Yes. We assess your property, entry points, operational hours, visitor movement and security risks before preparing a customized deployment and supervision plan.",
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
    "@id": "https://www.acuitygroups.in/securityservice/#service",
    name: "Security Services Company in Bangalore",
    serviceType: "Professional Security Guard and Security Management Services",
    url: "https://www.acuitygroups.in/securityservice",
    provider: {
      "@id": "https://www.acuitygroups.in/#organization",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Bengaluru`,
    })),
    description:
      "Acuity Groups provides trained security guards, corporate security, residential security, industrial security, event security and CCTV monitoring support in Bangalore.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Security Services",
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
        name: "Security Services",
        item: "https://www.acuitygroups.in/securityservice",
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
        <title>Security Services Company in Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Professional security services in Bangalore for offices, apartments, industries, hospitals, warehouses and commercial properties. Contact Acuity Groups today."
        />

        <meta
          name="keywords"
          content="security services company in Bangalore, security guard services Bangalore, corporate security Bangalore, residential security Bangalore, industrial security guards Bangalore, CCTV monitoring Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/securityservice"
        />

        <meta
          property="og:title"
          content="Security Services Company in Bangalore | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Trained security guards and professional security management services for commercial, residential and industrial properties in Bangalore."
        />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/securityservice"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />
        <meta property="og:image" content={SecurityHero} />

        <meta
          property="og:image:alt"
          content="Professional security guard services in Bangalore"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Security Services Company in Bangalore | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Professional security guard and security management services in Bangalore."
        />

        <meta name="twitter:image" content={SecurityHero} />

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

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center">
        <div className="absolute inset-0">
          <img
            src={SecurityHero}
            alt="Professional security services company in Bangalore"
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
              <Shield size={16} className="text-yellow-300" />

              <span>SECURITY SERVICES COMPANY IN BANGALORE</span>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Professional Security Guard Services in Bangalore
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-blue-100 md:text-xl">
              Acuity Groups provides trained security guards and reliable
              security management solutions for commercial, residential,
              industrial and corporate facilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900 transition hover:bg-blue-50"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20security%20services%20in%20Bangalore."
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

      {/* STATS SECTION */}
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

      {/* INTRODUCTION SECTION */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              <Sparkles size={15} />

              <span>WHY SECURITY MATTERS</span>
            </div>

            <h2 className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Protecting People, Property and Assets
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              As part of our{" "}
              <Link
                to="/integrated-facility-management"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                integrated facility management services in Bangalore
              </Link>
              , Acuity Groups provides professional security solutions designed
              to protect people, property, assets and daily business operations.
            </p>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              Our trained security personnel, supervision systems and
              customer-focused approach help organizations maintain safe, secure
              and well-monitored environments.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Customers can combine security services with our{" "}
              <Link
                to="/housekeeping"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                housekeeping services
              </Link>
              ,{" "}
              <Link
                to="/softservices"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                facility soft services
              </Link>{" "}
              and{" "}
              <Link
                to="/manpower"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                manpower outsourcing services
              </Link>{" "}
              for complete facility support.
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

      {/* SECURITY SERVICES SECTION */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-bold text-blue-900">
              <Shield size={15} />

              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Our Security Services
            </h2>

            <p className="text-lg text-gray-500">
              Comprehensive security solutions tailored to commercial,
              residential, industrial and business requirements.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* WHY CHOOSE SECTION */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[40px] bg-blue-950 p-8 text-white md:p-14 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-black md:text-5xl">
              Why Choose Acuity Groups?
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-blue-100">
              We deliver dependable security solutions through trained guards,
              verified personnel, planned supervision and quick response
              support.
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

      {/* INDUSTRIES SECTION */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-bold text-blue-900">
              <Building2 size={15} />

              <span>INDUSTRIES WE SERVE</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Trusted Security Services Across Sectors
            </h2>

            <p className="text-lg text-gray-500">
              We provide professional security solutions for a wide range of
              industries and property types.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:shadow-lg"
              >
                <Shield className="mx-auto mb-3 text-blue-900" size={25} />

                <h3 className="font-bold text-gray-800">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS SECTION */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              <MapPin size={15} />

              <span>SECURITY SERVICE AREAS</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Security Guard Services Across Bangalore
            </h2>

            <p className="text-lg text-gray-500">
              We deploy trained security personnel across major residential,
              commercial and industrial locations in Bengaluru.
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

      {/* RELATED SERVICES SECTION */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-bold text-blue-900">
              <Wrench size={15} />

              <span>RELATED SERVICES</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Complete Facility Management Support
            </h2>

            <p className="text-lg text-gray-500">
              Combine security services with our other facility solutions for
              complete property and workplace management.
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

      {/* FAQ SECTION */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Security Services FAQs
            </h2>

            <p className="text-lg text-gray-500">
              Common questions about our professional security guard services in
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

      {/* FINAL CTA SECTION */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl">
            Looking for a Security Services Company in Bangalore?
          </h2>

          <p className="mb-10 text-lg text-gray-600">
            Partner with Acuity Groups for professional, dependable and
            cost-effective security services customized for your organization.
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
              href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20security%20services%20in%20Bangalore."
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

export default SecurityServices;
