import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import pestBanner2 from "../../images/bemlimap.jpg";

const PestControlBEML = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Services in BEML Layout Bangalore | Acuity Groups
        </title>
        <meta
          name="description"
          content="Professional integrated facility services in BEML Layout Bangalore. Security services, housekeeping, pest control, manpower outsourcing, repair and maintenance solutions for residential and commercial properties."
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/seofolder/beml"
        />
      </Helmet>

      {/* Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${pestBanner2})` }}
      ></section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Trusted Facility Management Company in BEML Layout
        </h2>

        <p className="text-lg leading-8 text-gray-700 mb-5">
          Acuity Groups provides professional integrated facility services in
          BEML Layout Bangalore for residential communities, apartments,
          villas, offices and commercial establishments. Our expert team
          delivers housekeeping, security services, pest control, manpower
          outsourcing and maintenance solutions tailored to your requirements.
        </p>

        <p className="text-lg leading-8 text-gray-700">
          We serve apartments, gated communities, office spaces, educational
          institutions and commercial properties throughout BEML Layout with
          reliable and cost-effective facility management solutions.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Our Facility Management Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Integrated Facility Management",
              "Security Services",
              "Housekeeping Services",
              "Pest Control Services",
              "Manpower Outsourcing",
              "Repair & Maintenance",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {item}
                </h3>
                <p className="text-gray-600 leading-7">
                  Professional facility support services to keep your
                  residential and commercial properties clean, secure,
                  efficient and well maintained.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Experienced facility management professionals",
            "Trained and verified security personnel",
            "Reliable housekeeping and maintenance support",
            "Customized service packages",
            "Quick response and customer support",
            "Complete facility management solutions under one roof",
          ].map((point, index) => (
            <div key={index} className="flex gap-4 items-start">
              <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                ✓
              </span>
              <p className="text-lg text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Area Coverage */}
      <section className="py-16 bg-blue-900 text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Facility Services Across BEML Layout
          </h2>

          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-8">
            We provide integrated facility services in BEML Layout,
            Rajarajeshwari Nagar, Channasandra, Kengeri, Uttarahalli,
            Srinivaspura, Ideal Homes Township and nearby areas.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {[
            {
              q: "Do you provide facility management services in BEML Layout?",
              a: "Yes, we provide complete facility management services throughout BEML Layout and nearby locations.",
            },
            {
              q: "Do you provide housekeeping services for apartments?",
              a: "Yes, we provide professional housekeeping services for apartments, villas and residential communities.",
            },
            {
              q: "Do you provide security services in BEML Layout?",
              a: "Yes, we provide trained security guards for apartments, offices and commercial establishments.",
            },
            {
              q: "Do you provide pest control services?",
              a: "Yes, we provide termite control, cockroach control, rodent control and mosquito control services.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b pb-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-600 leading-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Need Facility Management Services in BEML Layout?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for professional facility management,
          security, housekeeping, pest control and manpower services.
        </p>

        <Link
          to="/contactus"
          className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-semibold"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default PestControlBEML;