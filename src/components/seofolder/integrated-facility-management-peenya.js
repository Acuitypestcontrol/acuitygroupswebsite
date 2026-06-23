import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage from "../../images/peenyampic.jpg";
import bannerImage1 from "../../images/peenya.jpg";

const PestControlPeenya = () => {
  const services = [
    {
      title: "Industrial Housekeeping in Peenya",
      desc: "Professional industrial housekeeping services in Peenya for factories, production floors, warehouses, manufacturing units and industrial workspaces.",
    },
    {
      title: "Industrial Security Services in Peenya",
      desc: "Trained industrial security guards in Peenya for factory gates, warehouse security, visitor management, access control and night patrol support.",
    },
    {
      title: "Pest Management in Peenya",
      desc: "Complete pest management services in Peenya for factories, warehouses, offices and commercial spaces including termite, rodent and cockroach control.",
    },
    {
      title: "Factory Repair & Maintenance in Peenya",
      desc: "Reliable repair and maintenance services in Peenya for factory buildings, warehouses, plumbing, carpentry and civil maintenance requirements.",
    },
    {
      title: "Electrical Maintenance in Peenya",
      desc: "Preventive electrical maintenance in Peenya for factories, industrial panels, wiring systems, commercial buildings and warehouse facilities.",
    },
    {
      title: "Industrial Manpower Outsourcing in Peenya",
      desc: "Skilled, semi-skilled and unskilled manpower outsourcing services in Peenya for manufacturing units, warehouses and industrial operations.",
    },
  ];

  const whyChoose = [
    "Experience Managing Industrial Facilities",
    "Trained Factory Housekeeping Workforce",
    "Verified Industrial Security Guards",
    "Customized Services for Factories & Warehouses",
    "Maintenance Support for Industrial Buildings",
    "24/7 Facility Supervision & Support",
  ];

  const faqs = [
    {
      q: "Do you provide integrated facility management services in Peenya?",
      a: "Yes, Acuity Groups provides integrated facility management services in Peenya for factories, warehouses, manufacturing units, offices and commercial properties.",
    },
    {
      q: "Do you provide facility services for factories and warehouses in Peenya?",
      a: "Yes, we provide housekeeping, security, pest control, manpower outsourcing, repair and maintenance services for factories and warehouses in Peenya.",
    },
    {
      q: "Do you provide industrial security services in Peenya?",
      a: "Yes, we provide trained industrial security guards in Peenya for factory gates, warehouses, offices and commercial establishments.",
    },
    {
      q: "Do you provide manpower outsourcing in Peenya?",
      a: "Yes, we provide skilled, semi-skilled and unskilled manpower outsourcing services for industrial and commercial facilities in Peenya.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Management Services in Peenya Bangalore | Acuity
          Groups
        </title>
        <meta
          name="description"
          content="Integrated Facility Management Services in Peenya Bangalore by Acuity Groups. Industrial housekeeping, industrial security, pest management, electrical maintenance, repair maintenance and manpower outsourcing for factories, warehouses and manufacturing units."
        />
        <meta
          name="keywords"
          content="Integrated Facility Management Services in Peenya, Facility Management Company in Peenya, Industrial Housekeeping in Peenya, Industrial Security Services in Peenya, Pest Control in Peenya, Manpower Outsourcing in Peenya, Electrical Maintenance in Peenya"
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/seofolder/peenya"
        />
      </Helmet>

      {/* Hero */}
      {/* Hero Section */}
      <section className="py-8 md:py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Integrated Facility Management Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Facility Management Services in Peenya Bangalore
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Acuity Groups provides professional Integrated Facility Management
              Services in Peenya Bangalore for factories, manufacturing units,
              warehouses, industrial buildings and commercial establishments.
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

          {/* Right Banner */}
          <div className="flex justify-center">
            <img
              src={bannerImage}
              alt="Facility Management Services in Peenya Bangalore"
              className="w-full max-w-[700px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Service Image */}

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Facility Management Services in Peenya
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide customized facility management services in Peenya for
            factories, warehouses, industrial areas, manufacturing units,
            offices and commercial establishments.
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

      {/* SEO Content */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Facility Management Solutions for Peenya Industrial Area
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-5">
            Peenya is one of Bangalore’s largest industrial locations, with
            factories, manufacturing units, warehouses, engineering companies
            and commercial buildings. Acuity Groups supports businesses in
            Peenya with professional facility management services focused on
            safety, cleanliness, maintenance and smooth daily operations.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Whether you need industrial housekeeping staff, factory security
            guards, pest control technicians, electricians, maintenance workers
            or manpower support, our team delivers reliable facility management
            services in Peenya Bangalore.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups in Peenya?
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
            Serving Peenya & Nearby Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide integrated facility management services across Peenya
            Industrial Area, Peenya 1st Phase, Peenya 2nd Phase, Peenya 3rd
            Phase, Nagasandra, Jalahalli, Dasarahalli, Yeshwanthpur and nearby
            areas.
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
          Looking for Facility Management Services in Peenya?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for customized integrated facility
          management solutions in Peenya Bangalore.
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

export default PestControlPeenya;
