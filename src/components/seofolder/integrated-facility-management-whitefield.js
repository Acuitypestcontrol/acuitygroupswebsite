import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage from "../../images/whitefieldmimage.jpg";
import bannerImage1 from "../../images/whitefieldmap.jpg";

const IntegratedFacilityManagementWhitefield = () => {
  const services = [
    {
      title: "IT Park Housekeeping in Whitefield",
      desc: "Professional housekeeping services in Whitefield for IT parks, corporate offices, commercial complexes, apartments and healthcare facilities.",
      link: "/housekeeping",
    },
    {
      title: "Security Services in Whitefield",
      desc: "Trained security guards in Whitefield for IT parks, apartments, offices, hospitals, commercial buildings and gated communities.",
      link: "/securityservice",
    },
    {
      title: "Pest Management in Whitefield",
      desc: "Complete pest management services in Whitefield including termite control, cockroach control, rodent control and mosquito treatment.",
      link: "/pest",
    },
    {
      title: "Repair & Maintenance in Whitefield",
      desc: "Reliable repair and maintenance services in Whitefield for IT parks, apartments, offices, hospitals, plumbing, carpentry and civil upkeep.",
      link: "/repair",
    },
    {
      title: "Electrical Maintenance in Whitefield",
      desc: "Preventive electrical maintenance in Whitefield for IT parks, commercial buildings, apartments, panels, wiring and facility systems.",
      link: "/repair",
    },
    {
      title: "Facility Manpower Outsourcing in Whitefield",
      desc: "Trained manpower outsourcing services in Whitefield for housekeeping, security, maintenance and daily facility support operations.",
      link: "/corporate-staffing",
    },
  ];

  const whyChoose = [
    "Experience Managing IT Parks & Corporate Facilities",
    "Trained Housekeeping & Security Workforce",
    "Customized IFM Solutions for Whitefield",
    "Support for Apartments, Hospitals & Offices",
    "Affordable Monthly Facility Packages",
    "24/7 Facility Support & Supervision",
  ];

  const faqs = [
    {
      q: "Do you provide integrated facility management services in Whitefield?",
      a: "Yes, Acuity Groups provides integrated facility management services in Whitefield for IT parks, apartments, hospitals, offices, commercial complexes and industrial facilities.",
    },
    {
      q: "Which facility services do you offer in Whitefield?",
      a: "We offer housekeeping, security services, pest management, repair and maintenance, electrical maintenance and manpower outsourcing in Whitefield.",
    },
    {
      q: "Do you provide housekeeping services for IT parks in Whitefield?",
      a: "Yes, we provide professional housekeeping services in Whitefield for IT parks, corporate offices, commercial buildings and residential communities.",
    },
    {
      q: "Can you manage large commercial properties in Whitefield?",
      a: "Yes, we manage IT parks, commercial complexes, hospitals, apartments, offices and industrial facilities in Whitefield.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Management Services in Whitefield Bangalore |
          Acuity Groups
        </title>
        <meta
          name="description"
          content="Integrated Facility Management Services in Whitefield Bangalore by Acuity Groups. IT park housekeeping, security services, pest management, electrical maintenance, repair maintenance and manpower outsourcing for IT parks, apartments, hospitals and commercial properties."
        />
        <meta
          name="keywords"
          content="Integrated Facility Management Services in Whitefield, Facility Management Company in Whitefield, Housekeeping Services in Whitefield, Security Services in Whitefield, Pest Control in Whitefield, Manpower Outsourcing in Whitefield, Electrical Maintenance in Whitefield"
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management-whitefield"
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
              Facility Management Services in Whitefield Bangalore
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Acuity Groups provides professional Integrated Facility Management
              Services in Whitefield Bangalore for IT parks, corporate offices,
              commercial complexes, apartment communities, hospitals and
              industrial establishments.
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
              alt="Facility Management Services in Whitefield Bangalore"
              className="w-full max-w-[700px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Facility Management Services in Whitefield
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide customized facility management services in Whitefield for
            IT parks, apartments, hospitals, offices, commercial complexes and
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
            Facility Management Solutions for Whitefield IT Hub
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-5">
            Whitefield is one of Bangalore’s major IT and commercial locations,
            with IT parks, corporate offices, apartments, hospitals, malls,
            commercial buildings and industrial properties. Acuity Groups
            supports businesses and communities in Whitefield with professional
            facility management services focused on hygiene, safety, maintenance
            and smooth daily operations.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Whether you need{" "}
            <Link to="/housekeeping" className="text-blue-600 font-semibold">
              office housekeeping services
            </Link>
            ,{" "}
            <Link
              to="/securityservice"
              className="text-blue-600 font-semibold"
            >
              trained security guards
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
            <Link
              to="/corporate-staffing"
              className="text-blue-600 font-semibold"
            >
              facility manpower support
            </Link>
            , our team delivers reliable facility management services in
            Whitefield Bangalore.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups in Whitefield?
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
            Serving Whitefield & Nearby Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide integrated facility management services across
            Whitefield, ITPL, Brookefield, Kadugodi, Hope Farm, Varthur, Hoodi,
            Marathahalli and nearby locations.
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
          Looking for Facility Management Services in Whitefield?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for customized integrated facility
          management solutions in Whitefield Bangalore.
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

export default IntegratedFacilityManagementWhitefield;