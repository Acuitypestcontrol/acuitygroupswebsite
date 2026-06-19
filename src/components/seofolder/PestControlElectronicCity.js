import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import bannerImage from "../../images/electronicmap.jpg";

const IntegratedFacilityManagementElectronicCity = () => {
  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Management Services in Electronic City Bangalore |
          Acuity Groups
        </title>
        <meta
          name="description"
          content="Professional Integrated Facility Management Services in Electronic City Bangalore including housekeeping, security, pest control, maintenance and manpower outsourcing."
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management-electronic-city"
        />
      </Helmet>

      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Professional Facility Management Company in Electronic City
        </h2>

        <p className="text-lg text-gray-700 leading-8 mb-5">
          Acuity Groups provides comprehensive Integrated Facility Management
          Services in Electronic City Bangalore for IT parks, corporate offices,
          apartment communities, hospitals, warehouses and industrial
          facilities.
        </p>

        <p className="text-lg text-gray-700 leading-8">
          Our team manages daily facility operations through housekeeping,
          security services, pest management, repair & maintenance, electrical
          maintenance and manpower outsourcing support.
        </p>
      </section>

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

      <section className="py-16 bg-blue-900 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Serving Electronic City & Nearby Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide integrated facility management services across Electronic
            City Phase 1, Electronic City Phase 2, Neeladri Nagar, Doddathogur,
            Huskur Road, Bommasandra and nearby locations.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {[
            {
              q: "Do you provide facility management services in Electronic City?",
              a: "Yes, we provide complete integrated facility management solutions throughout Electronic City and nearby areas.",
            },
            {
              q: "Do you provide housekeeping services for IT companies?",
              a: "Yes, we provide professional housekeeping and cleaning services for IT companies, offices and commercial buildings.",
            },
            {
              q: "Do you provide security services in Electronic City?",
              a: "Yes, we provide trained security guards for offices, apartments, industries and commercial properties.",
            },
            {
              q: "Can you manage large commercial properties?",
              a: "Yes, we manage IT parks, commercial complexes, hospitals, warehouses and industrial facilities.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b pb-5">
              <h3 className="font-semibold text-xl mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Looking for Facility Management Services in Electronic City?
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

export default IntegratedFacilityManagementElectronicCity;
