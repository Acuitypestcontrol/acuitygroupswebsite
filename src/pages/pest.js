import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Bug,
  Home,
  Building2,
  Shield,
  Users,
  Clock,
  Award,
  PhoneCall,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

import PestHero from "../images/pest.webp";
import ResidentialPest from "../images/hosepest.png";
import CommercialPest from "../images/shopingpest.jpg";
import TermiteControl from "../images/termite.jpg";
import RodentControl from "../images/rodent.jpg";
import MosquitoControl from "../images/mosquitopng (1).jpg";
import IntegratedPest from "../images/integratedpest.jpg";

const services = [
  {
    image: ResidentialPest,
    title: "Residential Pest Control",
    desc: "Complete pest control for homes and apartments, including cockroach, ant, mosquito, bed bug, termite and rodent control.",
    features: [
      "Cockroach Control",
      "Ant and Mosquito Control",
      "Bed Bug Treatment",
      "Termite Prevention",
    ],
  },
  {
    image: CommercialPest,
    title: "Commercial Pest Control",
    desc: "Professional pest management for offices, hotels, restaurants, warehouses and other commercial establishments.",
    features: [
      "Office Pest Control",
      "Hotels and Restaurants",
      "Warehouse Treatment",
      "Regular Inspections",
    ],
  },
  {
    image: TermiteControl,
    title: "Termite Control",
    desc: "Pre-construction and post-construction termite treatments, soil treatments and wood protection solutions.",
    features: [
      "Pre-construction Treatment",
      "Post-construction Treatment",
      "Soil Treatment",
      "Wood Protection",
    ],
  },
  {
    image: RodentControl,
    title: "Rodent Control",
    desc: "Rodent trapping, baiting, entry-point sealing and monitoring solutions to control rats and mice.",
    features: [
      "Trapping and Baiting",
      "Entry-point Sealing",
      "Monitoring Systems",
      "Prevention Plans",
    ],
  },
  {
    image: MosquitoControl,
    title: "Mosquito Control",
    desc: "Mosquito fogging, larvicide treatment and breeding-source control for residential and commercial properties.",
    features: [
      "Fogging Services",
      "Larvicide Treatment",
      "Breeding-source Control",
      "Adult Mosquito Control",
    ],
  },
  {
    image: IntegratedPest,
    title: "Integrated Pest Management",
    desc: "Eco-friendly pest management with regular inspections, monitoring, prevention and targeted treatment methods.",
    features: [
      "Eco-friendly Methods",
      "Safe Treatments",
      "Regular Monitoring",
      "Prevention-focused Plans",
    ],
  },
];

const benefits = [
  { text: "Eco-friendly and Safe Products", icon: Shield },
  { text: "Trained Pest Control Technicians", icon: Users },
  { text: "Same-day Service Support", icon: Clock },
  { text: "Affordable Service Plans", icon: Award },
  { text: "Long-term Pest Prevention", icon: CheckCircle },
  { text: "Reliable Treatment Solutions", icon: Sparkles },
];

const stats = [
  { label: "Years of Experience", value: "19+", icon: Award },
  { label: "Properties Treated", value: "5000+", icon: Home },
  { label: "Monthly Service Calls", value: "800+", icon: Building2 },
  { label: "Customer Satisfaction", value: "97%", icon: Clock },
];

const whyChoose = [
  "Safe pest control methods",
  "Eco-friendly treatment products",
  "Trained pest control technicians",
  "Same-day inspection support",
  "Long-term prevention planning",
  "Residential and commercial service",
];

const industries = [
  "Residential Homes",
  "Corporate Offices",
  "Hotels and Restaurants",
  "Hospitals and Clinics",
  "Educational Institutions",
  "Warehouses and Factories",
  "Retail Stores",
  "Food Processing Units",
];

const faqItems = [
  {
    question: "Which pest control services do you provide in Bangalore?",
    answer:
      "Acuity Groups provides pest control for cockroaches, termites, rodents, mosquitoes, ants, bed bugs and other common pests in residential and commercial properties.",
  },
  {
    question: "Do you provide pest control for commercial properties?",
    answer:
      "Yes. We provide pest management services for offices, hotels, restaurants, hospitals, schools, warehouses, factories and retail properties.",
  },
  {
    question: "Are your pest control treatments safe?",
    answer:
      "Our technicians use appropriate treatment methods and products based on the property, pest type and safety requirements.",
  },
  {
    question: "Do you provide termite treatment in Bangalore?",
    answer:
      "Yes. We provide pre-construction termite treatment, post-construction termite treatment, soil treatment and wood protection services.",
  },
];

const PestManagement = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.acuitygroups.in/pest-management/#service",
    name: "Pest Management Services in Bangalore",
    alternateName: "Pest Control Services in Bangalore",
    serviceType: "Pest Control and Pest Management",
    url: "https://www.acuitygroups.in/pest-management",
    description:
      "Professional pest control services in Bangalore for homes, offices, apartments, hotels, hospitals, restaurants, warehouses and industrial properties.",
    provider: {
      "@type": "LocalBusiness",
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
    },
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pest Management Services",
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
        name: "Pest Management",
        item: "https://www.acuitygroups.in/pest-management",
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
        <title>Pest Control Services in Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Professional pest control services in Bangalore for homes, offices, hotels, hospitals, restaurants, warehouses and industrial properties."
        />

        <meta
          name="keywords"
          content="pest control services in Bangalore, pest management Bangalore, residential pest control Bangalore, commercial pest control Bangalore, termite control Bangalore, rodent control Bangalore, mosquito control Bangalore, cockroach control Bangalore, bed bug treatment Bangalore"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups LLP" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/pest-management"
        />

        <meta
          property="og:title"
          content="Pest Control Services in Bangalore | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Safe and professional pest management services for residential, commercial and industrial properties in Bangalore."
        />
        <meta
          property="og:url"
          content="https://www.acuitygroups.in/pest-management"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups LLP" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pest Control Services in Bangalore | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Pest control services in Bangalore for termites, rodents, cockroaches, mosquitoes, ants and bed bugs."
        />

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
            src={PestHero}
            alt="Professional pest control services in Bangalore"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              <Bug size={16} className="text-yellow-300" />
              <span>PEST MANAGEMENT SERVICES IN BANGALORE</span>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Professional Pest Control Services in Bangalore
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-blue-100 md:text-xl">
              Safe and effective pest control solutions for homes, apartments,
              offices, hotels, restaurants, warehouses and commercial spaces.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900 transition hover:bg-blue-50"
              >
                Book Service
                <ArrowRight size={18} />
              </Link>

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
              <span>SAFE AND EFFECTIVE PEST CONTROL</span>
            </div>

            <h2 className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Complete Pest Management Solutions for Your Property
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-gray-600">
              Acuity Groups provides professional pest management services in
              Bangalore to control harmful pests and maintain clean, hygienic
              and comfortable residential and commercial environments.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Our pest management approach combines property inspection,
              prevention, monitoring and targeted treatment based on the pest
              problem and property requirements.
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
              <Bug size={15} />
              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Our Pest Control Services
            </h2>

            <p className="text-lg text-gray-500">
              Pest control solutions for residential, commercial and industrial
              properties across Bangalore.
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
                    loading="lazy"
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
                    className="inline-flex items-center gap-2 font-bold text-blue-900"
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
            <h2 className="mb-6 text-4xl font-black md:text-5xl">
              Why Choose Acuity Groups?
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-blue-100">
              We provide planned pest control solutions through trained
              technicians, appropriate products, detailed inspection and
              long-term pest prevention support.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-900"
            >
              Contact Us
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
              Pest Management for Different Sectors
            </h2>

            <p className="text-lg text-gray-500">
              Pest management support for homes, workplaces, institutions and
              industrial facilities.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center transition hover:shadow-lg"
              >
                <span className="text-sm font-bold text-gray-800">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-900">
              <CheckCircle size={15} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Pest Control FAQs
            </h2>
          </div>

          <div className="space-y-5">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <h3 className="mb-3 text-lg font-black text-gray-900">
                  {item.question}
                </h3>

                <p className="leading-relaxed text-gray-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gray-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl">
            Need Pest Control Services in Bangalore?
          </h2>

          <p className="mb-10 text-lg text-gray-600">
            Contact our team to schedule a pest inspection and receive a
            suitable pest management plan for your property.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-10 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Book Service
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+919941229005"
              aria-label="Call Acuity Groups for pest control services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-900 px-10 py-4 font-bold text-blue-900 transition hover:bg-blue-900 hover:text-white"
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

export default PestManagement;
