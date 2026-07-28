import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage from "../../images/doddaballapurmimage (1).jpg";
import bannerImage1 from "../../images/doddaballapur.jpg";

const IntegratedFacilityManagementDoddaballapur = () => {
  const services = [
    {
      title: "Factory Housekeeping in Doddaballapur",
      desc: "Professional factory housekeeping services in Doddaballapur for production units, warehouses, industrial floors and manufacturing facilities.",
      link: "/housekeeping-services",
    },
    {
      title: "Industrial Security Services in Doddaballapur",
      desc: "Trained industrial security guards in Doddaballapur for factory gates, warehouse security, visitor management and night patrol support.",
      link: "/security-services",
    },
    {
      title: "Pest Control for Industries in Doddaballapur",
      desc: "Complete pest control services in Doddaballapur for factories, warehouses, offices and commercial spaces including termite, rodent and cockroach control.",
      link: "/pest-management",
    },
    {
      title: "Factory Repair & Maintenance in Doddaballapur",
      desc: "Reliable repair and maintenance services in Doddaballapur for factory buildings, warehouses, plumbing, carpentry and civil maintenance needs.",
      link: "/repair-maintenance",
    },
    {
      title: "Electrical Maintenance in Doddaballapur",
      desc: "Preventive electrical maintenance in Doddaballapur for factories, commercial buildings, panels, wiring systems and industrial facilities.",
      link: "/repair-maintenance",
    },
    {
      title: "Industrial Manpower Outsourcing in Doddaballapur",
      desc: "Skilled, semi-skilled and unskilled manpower outsourcing services in Doddaballapur for industries, warehouses and manufacturing operations.",
      link: "/manpower-outsourcing",
    },
  ];

  const whyChoose = [
    "Experience in Industrial Facility Operations",
    "Trained Factory Housekeeping Workforce",
    "Verified Industrial Security Guards",
    "Customized Services for Factories & Warehouses",
    "Maintenance Support for Industrial Buildings",
    "24/7 Facility Supervision & Support",
  ];

  const faqs = [
    {
      q: "Do you provide integrated facility management services in Doddaballapur?",
      a: "Yes, Acuity Groups provides integrated facility management services in Doddaballapur for factories, warehouses, manufacturing units, offices and commercial properties.",
    },
    {
      q: "Do you provide facility services for factories and warehouses?",
      a: "Yes, we provide housekeeping, security, pest control, manpower outsourcing, repair and maintenance services for factories and warehouses in Doddaballapur.",
    },
    {
      q: "Do you provide industrial security services in Doddaballapur?",
      a: "Yes, we provide trained industrial security guards in Doddaballapur for factory gates, warehouses, offices and commercial establishments.",
    },
    {
      q: "Do you provide manpower outsourcing in Doddaballapur?",
      a: "Yes, we provide skilled, semi-skilled and unskilled manpower outsourcing services for industrial and commercial facilities in Doddaballapur.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Facility Management Services in Doddaballapur | Acuity Groups LLP
        </title>
        <meta
          name="description"
          content="Facility management services in Doddaballapur for factories, warehouses and industrial facilities, including housekeeping, security and maintenance."
        />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Facility Management Services in Doddaballapur, Facility Management Company in Doddaballapur, Factory Housekeeping in Doddaballapur, Industrial Security Services in Doddaballapur, Pest Management in Doddaballapur, Manpower Outsourcing in Doddaballapur, Electrical Maintenance in Doddaballapur"
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management-doddaballapur"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-8 md:py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Facility Management Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Facility Management Services in Doddaballapur
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Acuity Groups LLP provides professional facility management
              services in Doddaballapur for factories, industrial units,
              warehouses, logistics parks and manufacturing facilities. Our
              integrated facility management solutions help maintain clean, safe
              and efficiently managed industrial properties.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Our experienced workforce delivers housekeeping services, security
              services, pest management, electrical maintenance, repair &
              maintenance and manpower outsourcing solutions to ensure smooth
              day-to-day facility operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold"
              >
                Get Free Quote
              </Link>

              <a
                href="tel:+919941229005"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={bannerImage}
              alt="Facility Management Services in Doddaballapur Bangalore"
              className="w-full max-w-[700px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Facility Management Services in Doddaballapur
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide customized facility management services in Doddaballapur
            for factories, warehouses, industrial areas, logistics units,
            offices and commercial establishments.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-blue-600 block"
              >
                <div className="text-4xl font-bold text-blue-100 mb-4">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">{service.desc}</p>

                <p className="text-blue-600 font-semibold mt-4">
                  View Service →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Facility Management Solutions for Doddaballapur Industrial Area
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-5">
            Doddaballapur is an important industrial and manufacturing location
            near North Bangalore with factories, warehouses, logistics units and
            commercial developments. Acuity Groups supports businesses in
            Doddaballapur with professional facility management services focused
            on cleanliness, safety, maintenance and smooth daily operations.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Whether you need{" "}
            <Link
              to="/housekeeping-services"
              className="text-blue-600 font-semibold"
            >
              factory housekeeping services
            </Link>
            ,{" "}
            <Link
              to="/security-services"
              className="text-blue-600 font-semibold"
            >
              industrial security guards
            </Link>
            ,{" "}
            <Link to="/pest-management" className="text-blue-600 font-semibold">
              pest control technicians
            </Link>
            ,{" "}
            <Link
              to="/repair-maintenance"
              className="text-blue-600 font-semibold"
            >
              maintenance workers
            </Link>{" "}
            or{" "}
            <Link
              to="/manpower-outsourcing"
              className="text-blue-600 font-semibold"
            >
              manpower support
            </Link>
            , our team delivers reliable facility management services in
            Doddaballapur Bangalore.
          </p>
        </div>
        <p className="mt-6 text-lg text-gray-700 leading-8">
          Learn more about our{" "}
          <Link
            to="/integrated-facility-management"
            className="text-blue-600 font-semibold underline"
          >
            Integrated Facility Management Services in Bangalore
          </Link>{" "}
          for complete industrial and commercial facility solutions.
        </p>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups in Doddaballapur?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">
                ✓
              </span>
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-blue-900 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Serving Doddaballapur & Nearby Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide facility management services across Doddaballapur,
            Doddaballapur Industrial Area, Bashettihalli, Rajanukunte,
            Yelahanka, Devanahalli Road, Nelamangala Road and nearby industrial
            zones.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-5">
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                {faq.q}
              </h3>
              <p className="text-gray-600 leading-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage1})` }}
      ></section>

      {/* CTA */}
      <section className="py-16 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Need Facility Management Services in Doddaballapur?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for customized integrated facility
          management solutions in Doddaballapur Bangalore.
        </p>

        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default IntegratedFacilityManagementDoddaballapur;
