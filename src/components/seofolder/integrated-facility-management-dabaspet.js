import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage from "../../images/dabaspetmimage1.jpg";
import bannerImage1 from "../../images/dabaspet.jpg";

const IntegratedFacilityManagementDabaspet = () => {
  const services = [
    {
      title: "Factory Housekeeping in Dabaspet",
      desc: "Specialized factory housekeeping services in Dabaspet for production floors, warehouses, loading areas and industrial workspaces.",
      link: "/housekeeping",
    },
    {
      title: "Industrial Security Services in Dabaspet",
      desc: "Trained industrial security guards in Dabaspet for factory gates, warehouses, logistics hubs, visitor entry and night security.",
      link: "/securityservice",
    },
    {
      title: "Warehouse Pest Management in Dabaspet",
      desc: "Professional pest management services in Dabaspet for warehouses, factories, storage units and commercial facilities.",
      link: "/pest",
    },
    {
      title: "Industrial Repair & Maintenance in Dabaspet",
      desc: "Reliable repair and maintenance support in Dabaspet for factory buildings, warehouse facilities, plumbing, carpentry and civil upkeep.",
      link: "/repair",
    },
    {
      title: "Electrical Maintenance in Dabaspet",
      desc: "Preventive electrical maintenance in Dabaspet for factories, warehouses, electrical panels, wiring systems and industrial facilities.",
      link: "/repair",
    },
    {
      title: "Industrial Manpower Outsourcing in Dabaspet",
      desc: "Skilled, semi-skilled and unskilled manpower outsourcing services in Dabaspet for manufacturing units, warehouses and logistics operations.",
      link: "/manpower",
    },
  ];

  const whyChoose = [
    "Experience Managing Industrial Facilities",
    "Trained Factory Housekeeping Staff",
    "Reliable Warehouse Support Teams",
    "Industrial Security Workforce",
    "Safety & Compliance Focused Services",
    "24/7 Facility Support & Supervision",
  ];

  const faqs = [
    {
      q: "Do you provide integrated facility management services in Dabaspet?",
      a: "Yes, Acuity Groups provides integrated facility management services in Dabaspet for factories, warehouses, logistics hubs, manufacturing units and commercial properties.",
    },
    {
      q: "Which facility services do you offer in Dabaspet?",
      a: "We offer factory housekeeping, industrial security, pest management, repair and maintenance, electrical maintenance and manpower outsourcing in Dabaspet.",
    },
    {
      q: "Do you provide housekeeping for factories in Dabaspet?",
      a: "Yes, we provide factory housekeeping services in Dabaspet for production areas, warehouses, loading zones and industrial facilities.",
    },
    {
      q: "Do you provide manpower outsourcing in Dabaspet Industrial Area?",
      a: "Yes, we provide skilled, semi-skilled and unskilled manpower outsourcing services for industries, warehouses and logistics companies in Dabaspet.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Management Services in Dabaspet Bangalore | Acuity
          Groups
        </title>
        <meta
          name="description"
          content="Integrated Facility Management Services in Dabaspet Bangalore by Acuity Groups. Factory housekeeping, industrial security, pest management, electrical maintenance, repair maintenance and manpower outsourcing for factories, warehouses and logistics hubs."
        />
        <meta
          name="keywords"
          content="Integrated Facility Management Services in Dabaspet, Facility Management Company in Dabaspet, Factory Housekeeping in Dabaspet, Industrial Security Services in Dabaspet, Pest Control in Dabaspet, Manpower Outsourcing in Dabaspet, Electrical Maintenance in Dabaspet"
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management-dabaspet"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-8 md:py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Integrated Facility Management Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Facility Management Services in Dabaspet Bangalore
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Acuity Groups provides professional Integrated Facility Management
              Services in Dabaspet Bangalore for factories, manufacturing units,
              warehouses, logistics parks and industrial establishments.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Our experienced workforce delivers housekeeping services, security
              services, pest management, electrical maintenance, repair &
              maintenance and manpower outsourcing solutions to ensure smooth
              day-to-day facility operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contactus"
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
              alt="Facility Management Services in Dabaspet Bangalore"
              className="w-full max-w-[700px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Facility Management Services in Dabaspet
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide customized facility management services in Dabaspet for
            factories, warehouses, logistics parks, manufacturing units and
            industrial establishments.
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
            Facility Management Solutions for Dabaspet Industrial Area
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-5">
            Dabaspet is a major industrial and warehouse location near Tumkur
            Road, with factories, logistics operations, manufacturing units and
            storage facilities. Acuity Groups supports businesses in Dabaspet
            with professional facility management services focused on safety,
            cleanliness, maintenance and smooth daily operations.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Whether you need{" "}
            <Link to="/housekeeping" className="text-blue-600 font-semibold">
              factory housekeeping services
            </Link>
            ,{" "}
            <Link
              to="/securityservice"
              className="text-blue-600 font-semibold"
            >
              industrial security guards
            </Link>
            ,{" "}
            <Link to="/pest" className="text-blue-600 font-semibold">
              pest control technicians
            </Link>
            ,{" "}
            <Link to="/repair" className="text-blue-600 font-semibold">
              maintenance workers
            </Link>{" "}
            or{" "}
            <Link to="/manpower" className="text-blue-600 font-semibold">
              manpower support
            </Link>
            , our team delivers reliable facility management services in
            Dabaspet Bangalore.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups in Dabaspet?
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
            Serving Dabaspet & Nearby Industrial Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide facility management services across Dabaspet, Dobbaspet
            Industrial Area, Nelamangala, Tumkur Road, Peenya Industrial Area,
            Makali, Madavara and nearby manufacturing zones.
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
          Looking for Facility Management Services in Dabaspet?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for customized integrated facility
          management solutions in Dabaspet Bangalore.
        </p>

        <Link
          to="/contactus"
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default IntegratedFacilityManagementDabaspet;