import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Users,
  Factory,
  Building2,
  Shield,
  CheckCircle,
  Briefcase,
  Clock,
  Award,
  PhoneCall,
  ArrowRight,
  Sparkles,
  MessageCircle,
  MapPin,
  HelpCircle,
} from "lucide-react";

import ManpowerHero from "../images/manpowerout.webp";
import IndustrialManpower from "../images/industrrialmanpower.png";
import FacilityStaff from "../images/integratedcom.jpg";
import SecurityManpower from "../images/securityacuity.jpg";
import ConstructionLabour from "../images/labours.jpg";
import StaffingSolutions from "../images/staffing.jpg";
import PayrollSupport from "../images/now.jpg";

const services = [
  {
    image: IndustrialManpower,
    title: "Industrial Manpower",
    desc: "Skilled, semi-skilled and unskilled workers for manufacturing, production, packaging and industrial operations.",
    features: [
      "Machine Operators",
      "Production Workers",
      "Packing Staff",
      "Quality Control Staff",
    ],
    link: "/contact",
  },
  {
    image: FacilityStaff,
    title: "Facility Management Staff",
    desc: "Trained workforce for housekeeping, cleaning, maintenance and complete facility support operations.",
    features: [
      "Housekeeping Staff",
      "Cleaning Supervisors",
      "Office Assistants",
      "Maintenance Helpers",
    ],
    link: "/housekeeping",
  },
  {
    image: SecurityManpower,
    title: "Security Manpower",
    desc: "Professional security guards, CCTV operators, gate supervisors and patrol staff for property protection.",
    features: [
      "Security Guards",
      "CCTV Operators",
      "Gate Supervisors",
      "Patrol Staff",
    ],
    link: "/securityservice",
  },
  {
    image: ConstructionLabour,
    title: "Construction Labour",
    desc: "Experienced workers for construction and maintenance projects, including masons, electricians, plumbers and helpers.",
    features: [
      "Masons and Helpers",
      "Electricians",
      "Plumbers",
      "Site Workers",
    ],
    link: "/repair",
  },
  {
    image: StaffingSolutions,
    title: "Staffing Solutions",
    desc: "Temporary, permanent and contract staffing solutions for offices, retail, hospitality, logistics and events.",
    features: [
      "Office Staff",
      "Retail Associates",
      "Event Staff",
      "Temporary Placements",
    ],
    link: "/contact",
  },
  {
    image: PayrollSupport,
    title: "HR and Payroll Support",
    desc: "Workforce payroll processing, attendance tracking, statutory compliance and HR administration support.",
    features: [
      "Payroll Processing",
      "Compliance Management",
      "Attendance Tracking",
      "PF and ESI Support",
    ],
    link: "/contact",
  },
];

const benefits = [
  { text: "Trained and Verified Staff", icon: Users },
  { text: "Quick Replacement Support", icon: Clock },
  { text: "Flexible Contract Terms", icon: Briefcase },
  { text: "Multi-location Deployment", icon: Building2 },
  { text: "PF, ESI and Compliance Support", icon: Shield },
  { text: "24/7 Workforce Assistance", icon: Award },
];

const stats = [
  { label: "Staff Deployed", value: "2000+", icon: Users },
  { label: "Active Clients", value: "150+", icon: Award },
  { label: "Industries Served", value: "15+", icon: Factory },
  { label: "Replacement Support", value: "24 Hrs", icon: Clock },
];

const whyChoose = [
  "Trained and verified workforce",
  "Quick staff replacement support",
  "Flexible staffing contracts",
  "Multi-location deployment",
  "PF, ESI and payroll management",
  "24/7 workforce assistance",
];

const industries = [
  "Manufacturing Units",
  "Corporate Offices",
  "Residential Complexes",
  "Hospitals and Clinics",
  "Educational Institutions",
  "Hotels and Hospitality",
  "Warehouses and Logistics",
  "Construction Sites",
];

const serviceAreas = [
  "JP Nagar",
  "Whitefield",
  "Electronic City",
  "Koramangala",
  "HSR Layout",
  "Hebbal",
  "Peenya",
  "Yelahanka",
  "Banashankari",
  "Marathahalli",
  "Doddaballapur",
  "Attibele",
];

const relatedServices = [
  {
    title: "Housekeeping Services",
    desc: "Trained housekeeping staff for offices, industries and residential properties.",
    link: "/housekeeping",
  },
  {
    title: "Security Services",
    desc: "Professional security guards and property protection support.",
    link: "/securityservice",
  },
  {
    title: "Soft Services",
    desc: "Cleaning, hygiene and workplace support services.",
    link: "/softservices",
  },
  {
    title: "Integrated Facility Management",
    desc: "Complete facility operations managed through one professional service partner.",
    link: "/integrated-facility-management",
  },
  {
    title: "Repair and Maintenance",
    desc: "Electrical, plumbing, carpentry and property maintenance solutions.",
    link: "/repair",
  },
  {
    title: "Pest Management",
    desc: "Professional pest control services for commercial and residential properties.",
    link: "/pest-management",
  },
];

const faqItems = [
  {
    question: "What manpower outsourcing services do you provide?",
    answer:
      "Acuity Groups provides industrial manpower, housekeeping staff, security personnel, construction labour, office staffing, temporary staffing and payroll support services in Bangalore.",
  },
  {
    question: "Do you provide skilled and unskilled manpower?",
    answer:
      "Yes. We provide skilled, semi-skilled and unskilled workers based on the operational requirements, job responsibilities and deployment duration of each client.",
  },
  {
    question: "Do you manage PF, ESI and payroll compliance?",
    answer:
      "Yes. Our manpower outsourcing support can include attendance management, payroll processing, PF, ESI and applicable statutory compliance documentation.",
  },
  {
    question: "Can you provide temporary and contract staff?",
    answer:
      "Yes. We provide temporary, contract and long-term workforce deployment for seasonal requirements, short-term projects and regular business operations.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve manufacturing, corporate offices, hospitals, educational institutions, hotels, warehouses, logistics companies, residential properties and construction projects.",
  },
  {
    question: "How quickly can manpower be deployed?",
    answer:
      "Deployment time depends on the role, number of workers, skills required and location. Contact our team with your requirement to receive an estimated deployment schedule.",
  },
];

const ManpowerOutsourcing = () => {
  const canonicalUrl = "https://www.acuitygroups.in/manpower";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.acuitygroups.in/#organization",
    name: "Acuity Groups LLP",
    url: "https://www.acuitygroups.in/",
    logo: "https://www.acuitygroups.in/logo192.png",
    email: "info@acuitygroups.in",
    telephone: "+919941229005",
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
    "@id": `${canonicalUrl}/#service`,
    name: "Manpower Outsourcing Services in Bangalore",
    alternateName: "Manpower Supply Services in Bangalore",
    serviceType: "Manpower Outsourcing and Staffing Services",
    url: canonicalUrl,
    description:
      "Skilled, semi-skilled and unskilled manpower outsourcing services in Bangalore with payroll, PF, ESI and compliance support.",
    provider: {
      "@id": "https://www.acuitygroups.in/#organization",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Bengaluru, Karnataka`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Manpower Outsourcing Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
          url: `https://www.acuitygroups.in${service.link}`,
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
        name: "Manpower Outsourcing",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="overflow-hidden bg-white font-sans text-gray-800">
      <Helmet>
        <title>
          Manpower Outsourcing Services in Bangalore | Acuity Groups
        </title>

        <meta
          name="description"
          content="Manpower outsourcing services in Bangalore for industries, offices, security, construction and facility staffing with payroll, PF and ESI support."
        />

        <meta
          name="keywords"
          content="manpower outsourcing Bangalore, manpower supply Bangalore, industrial manpower Bangalore, contract staffing Bangalore, temporary staffing Bangalore, facility manpower Bangalore, housekeeping manpower Bangalore, security manpower Bangalore, skilled manpower Bangalore, unskilled manpower Bangalore, payroll outsourcing Bangalore"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups LLP" />

        <link rel="canonical" href={canonicalUrl} />

        <meta
          property="og:title"
          content="Manpower Outsourcing Services in Bangalore | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Skilled, semi-skilled and unskilled manpower supply services for industries, offices, security, construction and facility operations."
        />

        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups LLP" />
        <meta property="og:image" content={ManpowerHero} />

        <meta
          property="og:image:alt"
          content="Manpower outsourcing and staffing services in Bangalore"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Manpower Outsourcing Services in Bangalore | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Professional manpower supply and staffing services in Bangalore with payroll and statutory compliance support."
        />

        <meta name="twitter:image" content={ManpowerHero} />

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
            src={ManpowerHero}
            alt="Manpower outsourcing and staffing services in Bangalore"
            className="h-full w-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              <Briefcase size={16} className="text-yellow-300" />
              <span>MANPOWER OUTSOURCING IN BANGALORE</span>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Manpower Outsourcing Services in Bangalore
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-blue-100 md:text-xl">
              Skilled, semi-skilled and unskilled workforce solutions for
              industries, offices, construction projects, security operations
              and facility management.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900 transition hover:bg-blue-50"
              >
                Hire Manpower
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20manpower%20outsourcing%20services."
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
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-900">
                <Icon size={26} />
              </div>

              <p className="text-3xl font-black text-gray-900">{value}</p>
              <p className="mt-1 text-sm text-gray-500">{label}</p>
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
              <span>RELIABLE WORKFORCE SOLUTIONS</span>
            </div>

            <h2 className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Manpower Supply and Staffing Solutions for Every Need
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              Acuity Groups provides skilled, semi-skilled and unskilled
              manpower supply services in Bangalore for industries, offices,
              warehouses, construction projects, security operations and
              facility management.
            </p>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              We support temporary staffing, contract workforce and long-term
              deployment with attendance, payroll, PF, ESI and compliance
              management.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Combine our workforce support with{" "}
              <Link
                to="/integrated-facility-management"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                integrated facility management
              </Link>
              ,{" "}
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
                to="/repair"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                repair and maintenance services
              </Link>
              .
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
              <Briefcase size={15} />
              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Our Manpower Solutions
            </h2>

            <p className="text-lg text-gray-500">
              Staffing solutions for industries, offices, security, facility
              support, logistics and construction requirements.
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
                    to={service.link}
                    aria-label={`Learn more about ${service.title}`}
                    className="inline-flex items-center gap-2 font-bold text-blue-900 hover:underline"
                  >
                    Learn More
                    <ArrowRight size={16} />
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
              We reduce recruitment and workforce management challenges through
              trained staff, verification support, flexible contracts, payroll
              administration and statutory compliance management.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900"
            >
              Discuss Your Requirement
              <ArrowRight size={18} />
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
              Manpower Outsourcing Across Business Sectors
            </h2>

            <p className="text-lg text-gray-500">
              Flexible workforce support for commercial, industrial,
              institutional and residential operations.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:shadow-lg"
              >
                <Users className="mx-auto mb-3 text-blue-900" size={25} />

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
              <span>MANPOWER SERVICE AREAS</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Manpower Supply Across Bangalore
            </h2>

            <p className="text-lg text-gray-500">
              Contact us for manpower deployment across major industrial,
              commercial and residential locations in Bengaluru.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                to="/contact"
                aria-label={`Request manpower services in ${area}`}
                className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-6 py-3 font-semibold text-blue-950 transition hover:bg-blue-900 hover:text-white"
              >
                <MapPin size={17} />
                {area}
              </Link>
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
              Complete Facility Support Services
            </h2>

            <p className="text-lg text-gray-500">
              Explore other workplace and facility services provided by Acuity
              Groups.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white">
                  <ArrowRight
                    size={22}
                    className="transition group-hover:translate-x-1"
                  />
                </div>

                <h3 className="mb-3 text-xl font-black text-gray-900">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              <HelpCircle size={15} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Manpower Outsourcing FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-900">
                  <span>{item.question}</span>

                  <span className="text-2xl text-blue-900 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-gray-200 pt-4 leading-relaxed text-gray-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-600">
            Need more information?{" "}
            <Link
              to="/contact"
              className="font-bold text-blue-900 hover:underline"
            >
              Contact our manpower outsourcing team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl">
            Need Reliable Manpower in Bangalore?
          </h2>

          <p className="mb-10 text-lg text-gray-600">
            Share your staffing requirement with our team and receive a
            workforce deployment plan based on your role, location and contract
            requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-10 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Hire Manpower
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+919941229005"
              aria-label="Call Acuity Groups for manpower outsourcing services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-900 px-10 py-4 font-bold text-blue-900 transition hover:bg-blue-900 hover:text-white"
            >
              <PhoneCall size={18} />
              +91 99412 29005
            </a>

            <a
              href="https://wa.me/919941229005?text=Hello%20Acuity%20Groups,%20I%20need%20manpower%20outsourcing%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Acuity Groups for manpower outsourcing"
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

export default ManpowerOutsourcing;
