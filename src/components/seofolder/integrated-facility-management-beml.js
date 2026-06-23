import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage from "../../images/bemlmpic.jpg";
import bannerImage1 from "../../images/bemlimap.jpg";

const PestControlBEML = () => {
  const services = [
    {
      title: "Integrated Facility Management in BEML Layout",
      desc: "Complete integrated facility management services in BEML Layout for apartments, villas, offices and commercial properties.",
    },
    {
      title: "Security Services in BEML Layout",
      desc: "Trained security guards, gate security, visitor management and 24/7 security support for properties in BEML Layout.",
    },
    {
      title: "Housekeeping Services in BEML Layout",
      desc: "Professional housekeeping services in BEML Layout for apartments, offices, villas and commercial spaces.",
    },
    {
      title: "Pest Control Services in BEML Layout",
      desc: "Reliable pest control services in BEML Layout including termite, cockroach, rodent and mosquito control.",
    },
    {
      title: "Manpower Outsourcing in BEML Layout",
      desc: "Skilled and trained manpower outsourcing services in BEML Layout for facility support requirements.",
    },
    {
      title: "Repair & Maintenance in BEML Layout",
      desc: "Complete repair and maintenance services in BEML Layout including plumbing, electrical, carpentry and civil repairs.",
    },
  ];

  const whyChoose = [
    "Experienced Facility Management Professionals",
    "Trained and Verified Security Personnel",
    "Reliable Housekeeping and Maintenance Support",
    "Customized Service Packages",
    "Quick Response and Customer Support",
    "Complete Facility Solutions Under One Roof",
  ];

  const faqs = [
    {
      q: "Do you provide facility management services in BEML Layout?",
      a: "Yes, Acuity Groups provides complete integrated facility management services in BEML Layout and nearby areas.",
    },
    {
      q: "Do you provide housekeeping services for apartments in BEML Layout?",
      a: "Yes, we provide professional housekeeping services in BEML Layout for apartments, villas and residential communities.",
    },
    {
      q: "Do you provide security services in BEML Layout?",
      a: "Yes, we provide trained security guards in BEML Layout for apartments, offices and commercial establishments.",
    },
    {
      q: "Do you provide pest control services in BEML Layout?",
      a: "Yes, we provide termite control, cockroach control, rodent control and mosquito control services in BEML Layout.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Services in BEML Layout Bangalore | Acuity Groups
        </title>
        <meta
          name="description"
          content="Integrated Facility Management Services in BEML Layout Bangalore by Acuity Groups. Security services, housekeeping, pest control, manpower outsourcing, repair and maintenance solutions for residential and commercial properties."
        />
        <meta
          name="keywords"
          content="Integrated Facility Management Services in BEML Layout, Facility Management Company in BEML Layout, Security Services in BEML Layout, Housekeeping Services in BEML Layout, Pest Control Services in BEML Layout, Manpower Outsourcing in BEML Layout"
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/seofolder/beml"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-8 md:py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Integrated Facility Management Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Facility Management Services in BEML Layout Bangalore
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Acuity Groups provides professional Integrated Facility Management
              Services in BEML Layout Bangalore for apartments, villas,
              residential communities, offices and commercial establishments.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Our experienced workforce delivers housekeeping services, security
              services, pest management, repair & maintenance, electrical
              support and manpower outsourcing solutions to ensure smooth
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

          {/* Right Banner */}
          <div className="flex justify-center">
            <img
              src={bannerImage}
              alt="Facility Management Services in BEML Layout Bangalore"
              className="w-full max-w-[700px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Facility Management Services in BEML Layout
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide customized facility management services in BEML Layout
            for apartments, offices, villas, commercial properties and
            residential communities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border-t-4 border-blue-600"
              >
                <div className="text-4xl font-bold text-blue-100 mb-4">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Facility Management Solutions for BEML Layout Properties
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-5">
            BEML Layout is a growing residential and commercial location in
            Bangalore with apartments, villas, office spaces, schools and local
            business establishments. Acuity Groups helps property owners and
            businesses maintain clean, secure and well-managed facilities.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Whether you need housekeeping staff, security guards, pest control,
            maintenance technicians or manpower support, our team delivers
            reliable facility management services in BEML Layout Bangalore.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups in BEML Layout?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {whyChoose.map((point, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">
                ✓
              </span>
              <p className="text-lg font-semibold text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Facility Services Across BEML Layout
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide integrated facility services in BEML Layout,
            Rajarajeshwari Nagar, Channasandra, Kengeri, Uttarahalli,
            Srinivaspura, Ideal Homes Township and nearby areas.
          </p>
        </div>
      </section>

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

      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage1})` }}
      ></section>

      <section className="py-16 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Need Facility Management Services in BEML Layout?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for professional facility management
          services in BEML Layout Bangalore.
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

export default PestControlBEML;
