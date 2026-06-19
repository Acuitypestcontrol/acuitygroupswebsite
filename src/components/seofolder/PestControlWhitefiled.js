import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import bannerImage from "../../images/whitefieldmap.jpg";

const IntegratedFacilityManagementWhitefield = () => {
  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Management Services in Whitefield Bangalore |
          Acuity Groups
        </title>

        <meta
          name="description"
          content="Professional Integrated Facility Management Services in Whitefield Bangalore including housekeeping, security services, pest control, maintenance and manpower outsourcing."
        />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management-whitefield"
        />
      </Helmet>

      {/* Banner */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >


        {/* <div className="relative z-10 text-center max-w-5xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Integrated Facility Management Services in Whitefield Bangalore
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            End-to-end facility management solutions for IT parks, apartments,
            commercial buildings, hospitals and industries in Whitefield.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contactus"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              Get Free Quote
            </Link>

            <a
              href="tel:+919941229005"
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold"
            >
              Call +91 99412 29005
            </a>
          </div>
        </div> */}
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Professional Facility Management Company in Whitefield
        </h2>

        <p className="text-lg text-gray-700 leading-8 mb-5">
          Acuity Groups provides comprehensive Integrated Facility Management
          Services in Whitefield Bangalore for commercial complexes,
          residential communities, IT parks, healthcare facilities and
          industrial establishments.
        </p>

        <p className="text-lg text-gray-700 leading-8">
          Our experienced team ensures smooth facility operations through
          housekeeping, security services, pest management, repair &
          maintenance, electrical maintenance and manpower outsourcing
          solutions.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Our Facility Management Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Housekeeping Services",
              "Security Services",
              "Pest Control Services",
              "Repair & Maintenance",
              "Electrical Maintenance",
              "Manpower Outsourcing",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  {service}
                </h3>

                <p className="text-gray-600">
                  Professional and reliable services customized for your
                  facility requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "19+ Years Industry Experience",
            "Professional Trained Workforce",
            "Customized Facility Solutions",
            "24/7 Customer Support",
            "Affordable Service Packages",
            "Quality Assurance & Compliance",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                ✓
              </span>

              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-blue-900 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Serving Whitefield & Nearby Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide integrated facility management services across
            Whitefield, ITPL, Brookefield, Kadugodi, Hope Farm,
            Varthur, Hoodi and nearby locations.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {[
            {
              q: "Do you provide facility management services in Whitefield?",
              a: "Yes, we provide complete integrated facility management solutions throughout Whitefield and surrounding areas.",
            },
            {
              q: "Do you provide security services?",
              a: "Yes, we provide trained security personnel for residential and commercial properties.",
            },
            {
              q: "Do you offer housekeeping services?",
              a: "Yes, we provide professional housekeeping and cleaning services.",
            },
            {
              q: "Can you manage large commercial properties?",
              a: "Yes, we manage IT parks, commercial complexes, hospitals and industrial facilities.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b pb-5">
              <h3 className="font-semibold text-xl mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Looking for Facility Management Services in Whitefield?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for customized facility management
          solutions.
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