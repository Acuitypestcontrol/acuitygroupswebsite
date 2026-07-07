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
    },
    {
      image: WashroomImg,
      title: "Washroom Hygiene",
      desc: "Complete washroom hygiene management with sanitization, odor control and hygiene monitoring.",
      features: ["Sanitization", "Odor control", "Hygiene monitoring"],
    },
  ];

  const benefits = [
    { text: "Trained & Certified Staff", icon: Users },
    { text: "Eco-friendly Products", icon: Leaf },
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

  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      <Helmet>
        <title>Soft Services in Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Acuity Groups provides soft services in Bangalore including housekeeping, cleaning, deep cleaning and washroom hygiene."
        />

        <meta
          name="keywords"
          content="soft services in Bangalore, housekeeping services Bangalore, corporate cleaning Bangalore, deep cleaning Bangalore, washroom hygiene Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.acuitygroups.in/soft-services" />

        <meta
          property="og:title"
          content="Soft Services in Bangalore | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Professional soft services in Bangalore including housekeeping, corporate cleaning, deep cleaning and washroom hygiene."
        />
        <meta property="og:url" content="https://www.acuitygroups.in/soft-services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Soft Services in Bangalore | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Housekeeping, corporate cleaning, deep cleaning and washroom hygiene services in Bangalore."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.acuitygroups.in/soft-services/#service",
            name: "Soft Services in Bangalore",
            serviceType: "Soft Services",
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
            areaServed: "Bangalore",
            description:
              "Professional soft services in Bangalore including housekeeping, corporate cleaning, deep cleaning and washroom hygiene.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Soft Services",
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
                name: "Soft Services",
                item: "https://www.acuitygroups.in/soft-services",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={Ss}
            alt="Soft Services in Bangalore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} className="text-yellow-300" />
              <span>SOFT SERVICES IN BANGALORE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Professional Soft Services in Bangalore
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
              Reliable housekeeping, corporate cleaning, deep cleaning and
              washroom hygiene solutions for offices, industries, apartments,
              hospitals and institutions.
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
              <span>WHY SOFT SERVICES MATTER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Clean Spaces Create Better Workplaces
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Acuity Groups provides professional soft services in Bangalore
              that keep your premises clean, hygienic, organized and safe.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our trained team, modern equipment and quality-focused service
              process help businesses maintain a professional environment every
              day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition"
              >
                <CheckCircle className="text-blue-900 mb-3" size={24} />
                <h3 className="font-bold text-gray-900">{item}</h3>
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
              Our Soft Services
            </h2>

            <p className="text-gray-500 text-lg">
              Complete cleaning and hygiene solutions for commercial,
              residential and industrial spaces.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
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
              We focus on quality, reliability, trained manpower and
              professional service delivery for every facility.
            </p>

            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-2xl p-5"
              >
                <benefit.icon className="text-yellow-300 mb-3" size={26} />
                <h3 className="font-bold">{benefit.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Need Professional Soft Services in Bangalore?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Contact us today for a free consultation and customized service
            plan.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition inline-flex items-center gap-2"
            >
              Request a Quote <ArrowRight size={18} />
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

export default SoftServices;