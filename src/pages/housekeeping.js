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
      title: "Home Housekeeping",
      desc: "Daily home cleaning, kitchen degreasing, bathroom sanitization, dusting, mopping, and floor polishing.",
      features: [
        "Daily Cleaning",
        "Kitchen Degreasing",
        "Bathroom Sanitization",
        "Floor Polishing",
      ],
    },
    {
      image: OfficeHousekeeping,
      title: "Office Housekeeping",
      desc: "Workstation cleaning, pantry and restroom maintenance, floor cleaning, carpet cleaning, and waste management.",
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
      desc: "Professional sofa cleaning, carpet shampooing, kitchen deep cleaning, bathroom scrubbing, and tile stain removal.",
      features: [
        "Sofa Cleaning",
        "Carpet Shampooing",
        "Tile Stain Removal",
        "Kitchen Deep Clean",
      ],
    },
    {
      image: CommercialCleaning,
      title: "Commercial Cleaning",
      desc: "Professional cleaning services for retail stores, showrooms, restaurants, commercial spaces, and high-traffic areas.",
      features: [
        "Retail Cleaning",
        "Restaurant Sanitization",
        "High-Traffic Areas",
        "Glass Cleaning",
      ],
    },
  ];

  const benefits = [
    { text: "Trained & Professional Staff", icon: Users },
    { text: "Eco-friendly Cleaning Products", icon: Sparkles },
    { text: "Modern Equipment & Techniques", icon: ShieldCheck },
    { text: "Flexible Scheduling", icon: Clock },
    { text: "Quality Assurance Checks", icon: Award },
    { text: "24/7 Customer Support", icon: CheckCircle },
  ];

  const stats = [
    { label: "Satisfied Clients", value: "500+", icon: Users },
    { label: "Cleaning Professionals", value: "150+", icon: Award },
    { label: "Service Calls / Month", value: "2000+", icon: Building2 },
    { label: "Satisfaction Rate", value: "98%", icon: Clock },
  ];

  const whyChoose = [
    "Trained housekeeping professionals",
    "Eco-friendly cleaning products",
    "Modern cleaning equipment",
    "Flexible service schedules",
    "Quality inspection process",
    "24/7 customer assistance",
  ];

  const industries = [
    "Residential Apartments",
    "Corporate Offices",
    "Hospitals & Clinics",
    "Hotels & Hospitality",
    "Educational Institutions",
    "Retail Stores",
    "Industrial Facilities",
    "Restaurants & Cafes",
  ];

  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      <Helmet>
        <title>Housekeeping Services in Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Acuity Groups provides professional housekeeping services in Bangalore for offices, apartments, hospitals, hotels, industries and commercial properties."
        />

        <meta
          name="keywords"
          content="housekeeping services in Bangalore, office housekeeping Bangalore, commercial cleaning Bangalore, deep cleaning services Bangalore, home housekeeping Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/housekeeping-services"
        />

        <meta
          property="og:title"
          content="Housekeeping Services in Bangalore | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Professional housekeeping and cleaning services in Bangalore for homes, offices, apartments, hospitals, hotels and commercial spaces."
        />
        <meta
          property="og:url"
          content="https://www.acuitygroups.in/housekeeping-services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Housekeeping Services in Bangalore | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Reliable housekeeping, deep cleaning and commercial cleaning services in Bangalore."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.acuitygroups.in/housekeeping-services/#service",
            name: "Housekeeping Services in Bangalore",
            serviceType: "Housekeeping Services",
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
              "Professional housekeeping services in Bangalore for homes, offices, apartments, hospitals, hotels and commercial properties.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Housekeeping Services",
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
                name: "Housekeeping Services",
                item: "https://www.acuitygroups.in/housekeeping-services",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={HousekeepingHero}
            alt="Housekeeping Services in Bangalore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/40"></div>
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
              Reliable home, office, apartment and commercial cleaning services
              for a clean, hygienic and healthy environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition flex items-center gap-2"
              >
                Book Now <ArrowRight size={18} />
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
              <Home size={15} />
              <span>CLEAN & HYGIENIC ENVIRONMENTS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Trusted Housekeeping Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We provide professional housekeeping services in Bangalore to
              maintain cleanliness, hygiene and comfort in homes, offices,
              commercial complexes and industrial facilities.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our trained staff uses safe cleaning products and modern equipment
              to deliver spotless results while maintaining consistent service
              quality.
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
              <Sparkles size={15} />
              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Housekeeping Services
            </h2>

            <p className="text-gray-500 text-lg">
              Comprehensive cleaning solutions tailored for homes, offices,
              apartments and commercial spaces.
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
              We deliver reliable housekeeping with trained staff, safe cleaning
              materials, professional supervision and consistent service
              quality.
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
              Trusted Housekeeping Across Sectors
            </h2>

            <p className="text-gray-500 text-lg">
              We provide housekeeping solutions for a wide range of industries
              and property types.
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
            Need Professional Housekeeping in Bangalore?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Book our housekeeping services today for a spotless, safe and
            hygienic environment.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition inline-flex items-center gap-2"
            >
              Book Now <ArrowRight size={18} />
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
