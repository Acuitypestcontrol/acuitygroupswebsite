import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";

import Ourservices from "../images/oursevices.jpg";
import FacilityImg from "../images/facility.jpg";
import SecurityImg from "../images/security iamge1.jpg";
import HousekeepingImg from "../images/housekeeping.jpg";
import PestImg from "../images/pest7889.jpg";
import ManpowerImg from "../images/manpowerout.webp";
import MaintenanceImg from "../images/RepairingMaintenance.jpg";

const Services = () => {
  const services = [
    {
      title: "Integrated Facility Management",
      description:
        "Complete facility management solutions for commercial, residential, industrial, and corporate properties including operations, maintenance, housekeeping, and vendor coordination.",
      image: FacilityImg,
      link: "/integrated-facility-management",
    },
    {
      title: "Security Services",
      description:
        "Professional security guard services, access control support, patrolling, CCTV monitoring, and trained manpower for offices, apartments, industries, and commercial spaces.",
      image: SecurityImg,
      link: "/security-services",
    },
    {
      title: "Housekeeping Services",
      description:
        "Professional housekeeping, cleaning, sanitization, washroom hygiene, and daily facility cleaning services for offices, hospitals, hotels, apartments, and commercial properties.",
      image: HousekeepingImg,
      link: "/housekeeping-services",
    },
    {
      title: "Soft Services",
      description:
        "Reliable soft services including housekeeping support, cleaning staff, pantry support, hygiene management, and facility support staff for business operations.",
      image: HousekeepingImg,
      link: "/soft-services",
    },
    {
      title: "Pest Management",
      description:
        "Safe and effective pest management solutions for termites, rodents, cockroaches, mosquitoes, bed bugs, and commercial pest control requirements.",
      image: PestImg,
      link: "/pest-management",
    },
    {
      title: "Manpower Outsourcing",
      description:
        "Skilled, semi-skilled, and unskilled manpower outsourcing services for industries, offices, warehouses, commercial facilities, and project-based staffing.",
      image: ManpowerImg,
      link: "/manpower-outsourcing",
    },
    {
      title: "Repair & Maintenance",
      description:
        "Electrical, plumbing, carpentry, preventive maintenance, and general repair services to keep your building infrastructure safe and operational.",
      image: MaintenanceImg,
      link: "/repair-maintenance",
    },
  ];

  const serviceAreas = [
    {
      name: "Whitefield",
      path: "/integrated-facility-management-whitefield",
    },
    {
      name: "Electronic City",
      path: "/integrated-facility-management-electronic-city",
    },
    {
      name: "Koramangala",
      path: "/integrated-facility-management-koramangala",
    },
    {
      name: "HSR Layout",
      path: "/integrated-facility-management-hsr-layout",
    },
    {
      name: "JP Nagar",
      path: "/integrated-facility-management-jp-nagar",
    },
    {
      name: "Peenya",
      path: "/integrated-facility-management-peenya",
    },
    {
      name: "Hebbal",
      path: "/integrated-facility-management-hebbal",
    },
    {
      name: "BEML Layout",
      path: "/integrated-facility-management-beml",
    },
    {
      name: "Dabaspet",
      path: "/integrated-facility-management-dabaspet",
    },
    {
      name: "Doddaballapur",
      path: "/integrated-facility-management-doddaballapur",
    },
    {
      name: "Attibele",
      path: "/integrated-facility-management-attibele",
    },
    {
      name: "Kumbalgodu",
      path: "/integrated-facility-management-kumbalgodu",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>Facility Management Services Bangalore | Acuity Groups</title>

        <meta
          name="description"
          content="Acuity Groups provides integrated facility management services in Bangalore including security services, housekeeping, soft services, pest management, manpower outsourcing, and repair maintenance for offices, apartments, industries, hospitals, and commercial properties."
        />

        <meta
          name="keywords"
          content="facility management services in Bangalore, integrated facility management Bangalore, security services Bangalore, housekeeping services Bangalore, soft services Bangalore, pest management Bangalore, manpower outsourcing Bangalore, repair maintenance Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.acuitygroups.in/services" />

        <meta
          property="og:title"
          content="Facility Management Services Bangalore | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Acuity Groups offers integrated facility management, security, housekeeping, pest management, manpower outsourcing, and repair maintenance services across Bangalore."
        />
        <meta property="og:url" content="https://www.acuitygroups.in/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Facility Management Services in Bangalore | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Professional facility management, security, housekeeping, manpower outsourcing, pest management, and maintenance services in Bangalore."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": "https://www.acuitygroups.in/services/#services",
            name: "Acuity Groups Services",
            description:
              "Integrated facility management, security, housekeeping, pest management, manpower outsourcing, soft services, and repair maintenance services in Bangalore.",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
              url: `https://www.acuitygroups.in${service.link}`,
            })),
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
            ],
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative h-[500px] md:h-[750px] overflow-hidden">
        <img
          src={Ourservices}
          alt="Facility Management Services in Bangalore"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/50"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-5xl leading-tight drop-shadow-lg">
            Facility Management Services in Bangalore
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mt-5">
            Acuity Groups provides integrated facility management, security,
            housekeeping, pest management, manpower outsourcing, soft services,
            and repair maintenance solutions for businesses and properties
            across Bangalore.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>

            <Link
              to="/integrated-facility-management"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Facility Management <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-4">
              WHAT WE OFFER
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Complete Facility Support Services
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We help offices, apartments, hospitals, hotels, industries,
              warehouses, malls, and commercial properties manage daily
              operations with trained teams and reliable service systems.
            </p>

            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} in Bangalore`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose Acuity Groups?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "19+ Years Experience",
              "Trained Professionals",
              "24/7 Support",
              "Customized Solutions",
              "Quality Supervision",
              "Cost-effective Packages",
              "Reliable Manpower",
              "Bangalore-wide Service",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md"
              >
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-4">
              SERVICE AREAS
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Integrated Facility Management Across Bangalore
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
              We provide facility management services across major business,
              residential, and industrial locations in Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, idx) => (
              <Link
                key={idx}
                to={area.path}
                className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 p-4 rounded-xl transition"
              >
                <MapPin className="text-blue-700 w-5 h-5 flex-shrink-0" />
                <span className="font-semibold text-gray-800">
                  Integrated Facility Management in {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Facility?
          </h2>

          <p className="text-blue-100 text-lg mb-8">
            Contact Acuity Groups today for a free consultation and customized
            facility management service plan.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;