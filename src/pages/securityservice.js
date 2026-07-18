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
      desc: "Trained security guards for offices, apartments, hospitals, industrial units, educational institutions, and retail spaces.",
      features: ["24/7 Availability", "Quick Response", "Regular Patrols"],
    },
    {
      image: CorporateSecurity,
      title: "Corporate Security Services",
      desc: "Visitor management, employee access monitoring, lobby security, asset protection, and emergency response support.",
      features: ["Access Control", "Visitor Management", "Emergency Response"],
    },
    {
      image: ResidentialSecurity,
      title: "Residential Security Services",
      desc: "Reliable residential security solutions for gated communities, apartments, villas, and residential layouts.",
      features: ["Community Safety", "Gate Management", "Night Patrols"],
    },
    {
      image: IndustrialSecurity,
      title: "Industrial Security Services",
      desc: "Industrial security support including gate management, patrol services, material monitoring, and access control.",
      features: [
        "Material Monitoring",
        "Perimeter Security",
        "Shift Management",
      ],
    },
    {
      image: EventSecurity,
      title: "Event Security Management",
      desc: "Professional event security solutions for exhibitions, conferences, public gatherings, and private events.",
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
    { text: "Professionally Trained Security Personnel", icon: Shield },
    { text: "Background Verified Security Staff", icon: CheckCircle },
    { text: "24/7 Security Support Solutions", icon: Clock },
    { text: "Customized Security Planning", icon: Building2 },
    { text: "Strong Supervision and Monitoring", icon: Camera },
    { text: "Reliable and Disciplined Workforce", icon: Users },
  ];

  const stats = [
    { label: "Security Personnel", value: "300+", icon: Users },
    { label: "Client Sites", value: "150+", icon: Building2 },
    { label: "Response Time", value: "<15 Mins", icon: Clock },
    { label: "Training Hours / Year", value: "100+", icon: Award },
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
    "Warehouses & Logistics",
    "Hospitals & Healthcare",
    "Educational Institutions",
    "Shopping Malls",
    "Hotels & Hospitality",
    "Retail Stores & Showrooms",
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
  ];

  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      <Helmet>
        <title>Security Services Company in Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Acuity Groups is a professional security services company in Bangalore providing trained security guards for offices, apartments, industries, hospitals, warehouses and commercial properties."
        />

        <meta
          name="keywords"
          content="security services company in Bangalore, security guard services in Bangalore, corporate security services Bangalore, residential security services Bangalore, industrial security guards Bangalore, CCTV monitoring services Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/security-services"
        />

        <meta
          property="og:title"
          content="Security Services Company in Bangalore | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Acuity Groups is a professional security services company in Bangalore providing trained security guards for offices, apartments, industries, hospitals, warehouses and commercial properties."
        />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/security-services"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />
        <meta property="og:image" content={SecurityHero} />

        <meta
          property="og:image:alt"
          content="Security Services Company in Bangalore"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Security Services Company in Bangalore | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Professional security guard and security management services in Bangalore for commercial, residential and industrial properties."
        />

        <meta name="twitter:image" content={SecurityHero} />

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.acuitygroups.in/security-services/#service",
            name: "Security Services Company in Bangalore",
            serviceType:
              "Professional Security Guard and Security Management Services",
            image: `https://www.acuitygroups.in${SecurityHero}`,
            provider: {
              "@type": "LocalBusiness",
              name: "Acuity Groups",
              url: "https://www.acuitygroups.in/",
              telephone: "+919941229005",
              email: "info@acuitygroups.in",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP Nagar 6th Phase, Yelachenahalli",
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
            description:
              "Acuity Groups is a professional security services company in Bangalore providing trained guards, corporate security, residential security, industrial security, event security and CCTV monitoring support.",
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
          })}
        </script>

        {/* Breadcrumb Schema */}
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
              {
                "@type": "ListItem",
                position: 3,
                name: "Security Services",
                item: "https://www.acuitygroups.in/security-services",
              },
            ],
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={SecurityHero}
            alt="Security Services Company in Bangalore"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield size={16} className="text-yellow-300" />

              <span>SECURITY SERVICES COMPANY IN BANGALORE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Professional Security Guard Services in Bangalore
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
              Acuity Groups provides trained security guards and reliable
              security management solutions for commercial, residential,
              industrial, and corporate facilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition flex items-center gap-2"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="-mt-20 relative z-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center">
                <stat.icon size={26} />
              </div>

              <h2 className="text-3xl font-black text-gray-900">
                {stat.value}
              </h2>

              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-full text-blue-900 text-sm font-bold mb-5">
              <Sparkles size={15} />

              <span>WHY SECURITY MATTERS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Protecting People, Property & Assets
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
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

            <p className="text-gray-600 text-lg leading-relaxed">
              Our trained security personnel, supervision systems, and
              customer-focused approach help organizations maintain safe,
              secure, and well-monitored environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} />
                </div>

                <h3 className="font-bold text-gray-900">{benefit.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-5 py-2 rounded-full text-blue-900 text-sm font-bold mb-5">
              <Shield size={15} />

              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Security Services
            </h2>

            <p className="text-gray-500 text-lg">
              Comprehensive security solutions tailored to commercial,
              residential, industrial, and business requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} in Bangalore`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-5">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={15}
                          className="text-blue-900 flex-shrink-0"
                        />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="text-blue-900 font-bold inline-flex items-center gap-2"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-blue-950 rounded-[40px] p-8 md:p-14 text-white grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Why Choose Acuity Groups?
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              We deliver dependable security solutions through trained guards,
              verified personnel, planned supervision, and quick response
              support.
            </p>

            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-2xl p-5"
              >
                <CheckCircle className="text-yellow-300 mb-3" size={24} />

                <h3 className="font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-5 py-2 rounded-full text-blue-900 text-sm font-bold mb-5">
              <Building2 size={15} />

              <span>INDUSTRIES WE SERVE</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Trusted Security Services Across Sectors
            </h2>

            <p className="text-gray-500 text-lg">
              We provide professional security solutions for a wide range of
              industries and property types.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-5 text-center hover:shadow-lg transition"
              >
                <span className="font-bold text-gray-800 text-sm">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-50 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-bold text-blue-900">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Security Services FAQs
            </h2>

            <p className="text-lg text-gray-500">
              Common questions about our professional security services in
              Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-900">
                  <span>{faq.question}</span>

                  <span className="text-2xl text-blue-900 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-gray-100 pt-4 leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Looking for a Security Services Company in Bangalore?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Partner with Acuity Groups for professional, dependable, and
            cost-effective security services tailored to your organization.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition inline-flex items-center gap-2"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+919941229005"
              className="border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-blue-900 hover:text-white transition inline-flex items-center gap-2"
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

export default SecurityServices;