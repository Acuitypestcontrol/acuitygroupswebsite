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
        "You can contact Acuity Groups by phone or submit the contact form with your property type, location and maintenance requirements. Our team will assess the work and provide a suitable quotation.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      <Helmet>
        <title>
          Repair and Maintenance Services in Bangalore | Acuity Groups
        </title>

        <meta
          name="description"
          content="Professional repair and maintenance services in Bangalore, including electrical, plumbing, carpentry and building maintenance for offices, apartments, industries and commercial properties."
        />

        <meta
          name="keywords"
          content="repair and maintenance services in Bangalore, building maintenance company Bangalore, electrical maintenance services Bangalore, plumbing services Bangalore, carpentry services Bangalore, property maintenance Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/repair-maintenance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Repair and Maintenance Services in Bangalore | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Professional electrical, plumbing, carpentry and building maintenance services in Bangalore for residential, commercial and industrial properties."
        />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/repair-maintenance"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />
        <meta property="og:image" content={MaintenanceHero} />

        <meta
          property="og:image:alt"
          content="Repair and Maintenance Services in Bangalore"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Repair and Maintenance Services in Bangalore | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Professional electrical, plumbing, carpentry and building maintenance services in Bangalore."
        />

        <meta name="twitter:image" content={MaintenanceHero} />

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.acuitygroups.in/repair-maintenance/#service",
            name: "Repair and Maintenance Services in Bangalore",
            serviceType:
              "Electrical, Plumbing, Carpentry and Building Maintenance Services",
            url: "https://www.acuitygroups.in/repair-maintenance",
            image: `https://www.acuitygroups.in${MaintenanceHero}`,
            provider: {
              "@type": "LocalBusiness",
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
            },
            areaServed: {
              "@type": "City",
              name: "Bengaluru",
            },
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
                name: "Repair and Maintenance Services",
                item: "https://www.acuitygroups.in/repair-maintenance",
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
            src={MaintenanceHero}
            alt="Repair and Maintenance Services in Bangalore"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Wrench size={16} className="text-yellow-300" />

              <span>REPAIR AND MAINTENANCE IN BANGALORE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Repair and Maintenance Services in Bangalore
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
              Professional electrical, plumbing, carpentry and building
              maintenance solutions for residential, commercial and industrial
              properties.
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
          {stats.map((stat) => (
            <div
              key={stat.label}
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

              <span>COMPLETE MAINTENANCE SOLUTIONS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Professional Property Repair and Maintenance Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
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

            <p className="text-gray-600 text-lg leading-relaxed">
              From electrical faults and plumbing leaks to carpentry work,
              waterproofing and building upkeep, our team delivers reliable
              solutions to keep your property safe and functional.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
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
              <Wrench size={15} />

              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Repair and Maintenance Services
            </h2>

            <p className="text-gray-500 text-lg">
              Complete property maintenance solutions designed to improve
              safety, functionality and long-term building condition.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((service) => (
              <div
                key={service.title}
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
                    {service.features.map((feature) => (
                      <div
                        key={feature}
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
              We provide dependable repair and maintenance services through
              skilled technicians, planned supervision, quality materials and
              transparent communication.
            </p>

            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whyChoose.map((item) => (
              <div
                key={item}
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
              Property Maintenance Across Industries
            </h2>

            <p className="text-gray-500 text-lg">
              We provide repair and maintenance solutions for residential,
              corporate, commercial, healthcare, hospitality and industrial
              properties.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry) => (
              <div
                key={industry}
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

      {/* FAQ */}
      <section className="bg-white px-6 py-20 md:px-12">
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

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Looking for Repair and Maintenance Services in Bangalore?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Contact Acuity Groups for professional electrical, plumbing,
            carpentry and building maintenance solutions for your property.
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

export default RepairMaintenance;
