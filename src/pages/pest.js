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

const PestManagement = () => {
  const services = [
    {
      image: ResidentialPest,
      title: "Residential Pest Control",
      desc: "Complete pest control for homes including cockroach, ant, mosquito, bed bug, termite, and rodent removal.",
      features: [
        "Cockroach Control",
        "Ant & Mosquito",
        "Bed Bug Removal",
        "Termite Prevention",
      ],
    },
    {
      image: CommercialPest,
      title: "Commercial Pest Control",
      desc: "Effective pest management for offices, hotels, restaurants, warehouses, and commercial establishments.",
      features: [
        "Office Pest Control",
        "Hotel & Restaurant",
        "Warehouse Treatment",
        "Regular Inspections",
      ],
    },
    {
      image: TermiteControl,
      title: "Termite Control",
      desc: "Pre and post construction termite treatment, soil treatment, and wood protection for long-term safety.",
      features: [
        "Pre-construction",
        "Post-construction",
        "Soil Treatment",
        "Wood Protection",
      ],
    },
    {
      image: RodentControl,
      title: "Rodent Control",
      desc: "Trapping, baiting, entry sealing, and monitoring systems to eliminate rats and mice.",
      features: [
        "Trapping & Baiting",
        "Entry Sealing",
        "Monitoring System",
        "Prevention Plans",
      ],
    },
    {
      image: MosquitoControl,
      title: "Mosquito Control",
      desc: "Fogging services, larvicide treatment, and breeding source elimination for mosquito-free environment.",
      features: [
        "Fogging Service",
        "Larvicide Treatment",
        "Breeding Control",
        "Adult Mosquito Control",
      ],
    },
    {
      image: IntegratedPest,
      title: "Integrated Pest Management",
      desc: "Eco-friendly pest management solutions with regular monitoring, prevention, and safe treatment methods.",
      features: [
        "Eco-friendly",
        "Safe Treatment",
        "Regular Monitoring",
        "Prevention Focus",
      ],
    },
  ];

  const benefits = [
    { text: "Eco-friendly & Safe Products", icon: Shield },
    { text: "Trained & Certified Technicians", icon: Users },
    { text: "Same-Day Service Available", icon: Clock },
    { text: "Affordable Pricing", icon: Award },
    { text: "Long-term Prevention Plans", icon: CheckCircle },
    { text: "Guaranteed Results", icon: Sparkles },
  ];

  const stats = [
    { label: "Years Experience", value: "19+", icon: Award },
    { label: "Properties Treated", value: "5000+", icon: Home },
    { label: "Service Calls / Month", value: "800+", icon: Building2 },
    { label: "Satisfaction Rate", value: "97%", icon: Clock },
  ];

  const whyChoose = [
    "Safe pest control methods",
    "Eco-friendly treatment products",
    "Certified pest technicians",
    "Same-day inspection support",
    "Long-term prevention planning",
    "Guaranteed service results",
  ];

  const industries = [
    "Residential Homes",
    "Corporate Offices",
    "Hotels & Restaurants",
    "Hospitals & Clinics",
    "Educational Institutions",
    "Warehouses & Factories",
    "Retail Stores",
    "Food Processing Units",
  ];

  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      <Helmet>
        <title>Pest Control Services in Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Acuity Groups provides pest control services in Bangalore for homes, apartments, offices, hotels, hospitals, restaurants, warehouses and industrial properties."
        />

        <meta
          name="keywords"
          content="pest management services in Bangalore, pest control Bangalore, termite control Bangalore, rodent control Bangalore, mosquito control Bangalore"
        />

        <meta name="robots" content="index, follow" />

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
          content="Safe pest control and pest management services in Bangalore for homes, offices, hotels, restaurants and commercial spaces."
        />
        <meta
          property="og:url"
          content="https://www.acuitygroups.in/pest-management"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pest Control Services in Bangalore | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Professional pest control services in Bangalore for termites, rodents, cockroaches, mosquitoes and bed bugs."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.acuitygroups.in/pest-management/#service",
            name: "Pest Management Services in Bangalore",
            serviceType: "Pest Control Services",
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
              "Acuity Groups provides professional pest control services in Bangalore for homes, apartments, offices, hotels, hospitals, restaurants, warehouses and industrial properties.",
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
                name: "Pest Management",
                item: "https://www.acuitygroups.in/pest-management",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={PestHero}
            alt="Pest Management Services in Bangalore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Bug size={16} className="text-yellow-300" />
              <span>PEST MANAGEMENT SERVICES IN BANGALORE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Professional Pest Control Services in Bangalore
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
              Safe and effective pest control solutions for homes, offices,
              apartments, hotels, restaurants and commercial spaces.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition flex items-center gap-2"
              >
                Book Service <ArrowRight size={18} />
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
              <span>SAFE & EFFECTIVE PEST CONTROL</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Professional Pest Management Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We provide pest management services in Bangalore to eliminate
              harmful pests and maintain a safe, hygienic environment for homes,
              offices and commercial properties.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our integrated approach combines prevention, monitoring and
              targeted treatments using safe products and advanced techniques.
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
              <Bug size={15} />
              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Pest Management Services
            </h2>

            <p className="text-gray-500 text-lg">
              Comprehensive pest control solutions for residential, commercial
              and industrial environments.
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
              We deliver safe, reliable and effective pest management through
              trained technicians, eco-friendly products and long-term
              prevention planning.
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
              Trusted Pest Management Across Sectors
            </h2>

            <p className="text-gray-500 text-lg">
              We provide pest management solutions for homes, workplaces and
              business environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Need Pest Control Services in Bangalore?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Get a free inspection and quote from our pest control experts today.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition inline-flex items-center gap-2"
            >
              Book Service <ArrowRight size={18} />
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

export default PestManagement;
