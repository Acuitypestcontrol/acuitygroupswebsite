import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  Building2,
  Users,
  Clock,
  Award,
  PhoneCall,
  ArrowRight,
  CheckCircle,
  Home,
  ShieldCheck,
} from "lucide-react";

import HousekeepingHero from "../images/housekeeping.jpg";
import HomeHousekeeping from "../images/maidhouse.jpg";
import OfficeHousekeeping from "../images/office.jpg";
import DeepCleaning from "../images/deepcleaning.jpg";
import CommercialCleaning from "../images/commercial.jpg";

const Housekeeping = () => {
  const services = [
    {
      image: HomeHousekeeping,
      title: "Home Housekeeping Services",
      desc: "Daily home cleaning, kitchen degreasing, bathroom sanitization, dusting, mopping and floor polishing.",
      features: [
        "Daily Cleaning",
        "Kitchen Degreasing",
        "Bathroom Sanitization",
        "Floor Polishing",
      ],
    },
    {
      image: OfficeHousekeeping,
      title: "Office Housekeeping Services",
      desc: "Workstation cleaning, pantry and restroom maintenance, floor cleaning, carpet cleaning and waste management.",
      features: [
        "Workstation Cleaning",
        "Restroom Maintenance",
        "Carpet Cleaning",
        "Waste Management",
      ],
    },
    {
      image: DeepCleaning,
      title: "Deep Cleaning Services",
      desc: "Professional sofa cleaning, carpet shampooing, kitchen deep cleaning, bathroom scrubbing and tile stain removal.",
      features: [
        "Sofa Cleaning",
        "Carpet Shampooing",
        "Tile Stain Removal",
        "Kitchen Deep Cleaning",
      ],
    },
    {
      image: CommercialCleaning,
      title: "Commercial Cleaning Services",
      desc: "Professional cleaning services for retail stores, showrooms, restaurants, commercial spaces and high-traffic areas.",
      features: [
        "Retail Cleaning",
        "Restaurant Sanitization",
        "High-Traffic Areas",
        "Glass Cleaning",
      ],
    },
  ];

  const benefits = [
    {
      text: "Trained and Professional Staff",
      icon: Users,
    },
    {
      text: "Eco-Friendly Cleaning Products",
      icon: Sparkles,
    },
    {
      text: "Modern Equipment and Techniques",
      icon: ShieldCheck,
    },
    {
      text: "Flexible Service Scheduling",
      icon: Clock,
    },
    {
      text: "Regular Quality Inspections",
      icon: Award,
    },
    {
      text: "24/7 Customer Support",
      icon: CheckCircle,
    },
  ];

  const stats = [
    {
      label: "Satisfied Clients",
      value: "500+",
      icon: Users,
    },
    {
      label: "Cleaning Professionals",
      value: "150+",
      icon: Award,
    },
    {
      label: "Service Calls / Month",
      value: "2000+",
      icon: Building2,
    },
    {
      label: "Satisfaction Rate",
      value: "98%",
      icon: Clock,
    },
  ];

  const whyChoose = [
    "Trained housekeeping professionals",
    "Eco-friendly cleaning products",
    "Modern cleaning equipment",
    "Flexible service schedules",
    "Regular quality inspections",
    "24/7 customer assistance",
  ];

  const industries = [
    "Residential Apartments",
    "Corporate Offices",
    "Hospitals and Clinics",
    "Hotels and Hospitality",
    "Educational Institutions",
    "Retail Stores and Showrooms",
    "Industrial Facilities",
    "Restaurants and Cafes",
  ];

  const faqs = [
    {
      question:
        "What housekeeping services does Acuity Groups provide in Bangalore?",
      answer:
        "Acuity Groups provides home housekeeping, office housekeeping, commercial cleaning, deep cleaning, restroom maintenance, floor cleaning, carpet cleaning and waste management services in Bangalore.",
    },
    {
      question:
        "Do you provide housekeeping staff for offices and commercial properties?",
      answer:
        "Yes. We provide trained housekeeping personnel for corporate offices, commercial buildings, hospitals, hotels, educational institutions, industries, retail stores and residential properties.",
    },
    {
      question: "Are your housekeeping staff trained and verified?",
      answer:
        "Yes. Our housekeeping personnel receive cleaning and safety training and undergo identity and background verification before deployment.",
    },
    {
      question: "Do you provide daily and long-term housekeeping contracts?",
      answer:
        "Yes. We provide daily, weekly, monthly and long-term housekeeping services depending on the size, schedule and requirements of the property.",
    },
    {
      question: "Do you use safe cleaning products and equipment?",
      answer:
        "Yes. Our team uses professional cleaning equipment and suitable cleaning products based on the surface, property type and hygiene requirements.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      <Helmet>
        <title>Housekeeping Services in Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Professional housekeeping services in Bangalore for offices, apartments, hospitals, hotels, industries and commercial properties. Contact Acuity Groups for trained housekeeping staff."
        />

        <meta
          name="keywords"
          content="housekeeping services in Bangalore, professional housekeeping company Bangalore, office housekeeping services Bangalore, commercial cleaning services Bangalore, deep cleaning services Bangalore, housekeeping staff Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/housekeeping-services"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Housekeeping Services in Bangalore | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Professional housekeeping and commercial cleaning services in Bangalore for offices, apartments, hospitals, hotels, industries and business properties."
        />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/housekeeping-services"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />
        <meta property="og:image" content={HousekeepingHero} />

        <meta
          property="og:image:alt"
          content="Professional Housekeeping Services in Bangalore"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Housekeeping Services in Bangalore | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Reliable office housekeeping, commercial cleaning and deep cleaning services in Bangalore."
        />

        <meta name="twitter:image" content={HousekeepingHero} />

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.acuitygroups.in/housekeeping-services/#service",
            name: "Professional Housekeeping Services in Bangalore",
            serviceType:
              "Housekeeping, Commercial Cleaning and Deep Cleaning Services",
            url: "https://www.acuitygroups.in/housekeeping-services",
            image: `https://www.acuitygroups.in${HousekeepingHero}`,
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
              "Professional housekeeping services in Bangalore for offices, apartments, hospitals, hotels, industries, retail stores and commercial properties.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Housekeeping and Cleaning Services",
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
                name: "Housekeeping Services",
                item: "https://www.acuitygroups.in/housekeeping-services",
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
            src={HousekeepingHero}
            alt="Professional Housekeeping Services in Bangalore"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} className="text-yellow-300" />

              <span>HOUSEKEEPING SERVICES IN BANGALORE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Professional Housekeeping Services in Bangalore
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
              Trained housekeeping staff and reliable cleaning solutions for
              offices, apartments, hospitals, hotels, industries and commercial
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
              <Home size={15} />

              <span>CLEAN AND HYGIENIC ENVIRONMENTS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Trusted Housekeeping Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              As part of our{" "}
              <Link
                to="/integrated-facility-management"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                integrated facility management services in Bangalore
              </Link>
              , Acuity Groups provides professional housekeeping solutions for
              offices, apartments, hospitals, hotels, commercial buildings and
              industrial facilities.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our trained housekeeping staff uses suitable cleaning products,
              modern equipment and planned supervision to maintain consistent
              cleanliness, hygiene and comfort.
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
              <Sparkles size={15} />

              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Housekeeping Services
            </h2>

            <p className="text-gray-500 text-lg">
              Professional cleaning and housekeeping solutions designed for
              residential, corporate, commercial and industrial properties.
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
              We provide dependable housekeeping services through trained staff,
              safe cleaning methods, professional supervision and regular
              quality inspections.
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
              Housekeeping Services Across Industries
            </h2>

            <p className="text-gray-500 text-lg">
              We deliver professional housekeeping solutions for different
              industries, facilities and property types across Bangalore.
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
              Housekeeping Services FAQs
            </h2>

            <p className="text-lg text-gray-500">
              Common questions about our housekeeping and cleaning services in
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
            Looking for Housekeeping Services in Bangalore?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Contact Acuity Groups for trained housekeeping staff and customised
            cleaning solutions for your office, apartment, hospital, hotel,
            industry or commercial property.
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

export default Housekeeping;
