import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage from "../../images/kumbalagoudu.jpg";
import bannerImage1 from "../../images/kumbalagodumap.jpg";

const IntegratedFacilityManagementKumbalgodu = () => {
  const services = [
    {
      title: "Industrial Housekeeping in Kumbalgodu",
      desc: "Professional industrial housekeeping services in Kumbalgodu for factories, warehouses, industrial parks, institutions and commercial facilities.",
    },
    {
      title: "Industrial Security Services in Kumbalgodu",
      desc: "Trained security guards in Kumbalgodu for factory gates, warehouse security, visitor management, apartment security and commercial properties.",
    },
    {
      title: "Pest Management in Kumbalgodu",
      desc: "Complete pest management services in Kumbalgodu including termite control, cockroach control, rodent control and mosquito treatment.",
    },
    {
      title: "Repair & Maintenance in Kumbalgodu",
      desc: "Reliable repair and maintenance services in Kumbalgodu for factories, warehouses, institutions, apartments, plumbing, carpentry and civil upkeep.",
    },
    {
      title: "Electrical Maintenance in Kumbalgodu",
      desc: "Preventive electrical maintenance in Kumbalgodu for industrial units, warehouses, institutions, commercial buildings, panels and wiring systems.",
    },
    {
      title: "Manpower Outsourcing in Kumbalgodu",
      desc: "Skilled, semi-skilled and unskilled manpower outsourcing services in Kumbalgodu for industries, warehouses, institutions and commercial operations.",
    },
  ];

  const whyChoose = [
    "Experience Managing Industrial Facilities",
    "Trained Housekeeping & Security Workforce",
    "Customized IFM Solutions for Kumbalgodu",
    "Support for Warehouses, Institutions & Factories",
    "Affordable Monthly Facility Packages",
    "24/7 Facility Support & Supervision",
  ];

  const faqs = [
    {
      q: "Do you provide integrated facility management services in Kumbalgodu?",
      a: "Yes, Acuity Groups provides integrated facility management services in Kumbalgodu for industrial parks, warehouses, factories, institutions, apartments and commercial properties.",
    },
    {
      q: "Which facility services do you offer in Kumbalgodu?",
      a: "We offer industrial housekeeping, security services, pest management, repair and maintenance, electrical maintenance and manpower outsourcing in Kumbalgodu.",
    },
    {
      q: "Do you provide industrial housekeeping services in Kumbalgodu?",
      a: "Yes, we provide industrial housekeeping services in Kumbalgodu for factories, warehouses, manufacturing units and commercial facilities.",
    },
    {
      q: "Do you provide manpower outsourcing in Kumbalgodu?",
      a: "Yes, we provide skilled, semi-skilled and unskilled manpower outsourcing services for industrial and commercial facilities in Kumbalgodu.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Management Services in Kumbalgodu Bangalore |
          Acuity Groups
        </title>
        <meta
          name="description"
          content="Integrated Facility Management Services in Kumbalgodu Bangalore by Acuity Groups. Industrial housekeeping, security services, pest management, electrical maintenance, repair maintenance and manpower outsourcing for industrial parks, factories, warehouses and commercial properties."
        />
        <meta
          name="keywords"
          content="Integrated Facility Management Services in Kumbalgodu, Facility Management Company in Kumbalgodu, Industrial Housekeeping in Kumbalgodu, Security Services in Kumbalgodu, Pest Control in Kumbalgodu, Manpower Outsourcing in Kumbalgodu, Electrical Maintenance in Kumbalgodu"
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management-kumbalgodu"
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
              Facility Management Services in Kumbalgodu Bangalore
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Acuity Groups provides professional Integrated Facility Management
              Services in Kumbalgodu Bangalore for industrial parks, warehouses,
              factories, institutions, apartment communities and commercial
              establishments.
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
              alt="Facility Management Services in Kumbalgodu Bangalore"
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
            Our Facility Management Services in Kumbalgodu
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide customized facility management services in Kumbalgodu for
            industrial parks, factories, warehouses, institutions, apartments
            and commercial establishments.
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
            Facility Management Solutions for Kumbalgodu Industrial Area
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-5">
            Kumbalgodu is an important industrial and commercial location along
            Mysore Road, with warehouses, factories, institutions, logistics
            units and growing residential communities. Acuity Groups supports
            properties in Kumbalgodu with professional facility management
            services focused on cleanliness, safety, maintenance and smooth
            daily operations.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Whether you need industrial housekeeping staff, security guards,
            pest control technicians, electricians, maintenance workers or
            manpower support, our team delivers reliable facility management
            services in Kumbalgodu Bangalore.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups in Kumbalgodu?
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
            Serving Kumbalgodu & Nearby Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide facility management services across Kumbalgodu, Bidadi,
            Mysore Road, Ramanagara, Kengeri, Challaghatta, Rajarajeshwari Nagar
            and nearby industrial and commercial zones.
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
          Looking for Facility Management Services in Kumbalgodu?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for customized integrated facility
          management solutions in Kumbalgodu Bangalore.
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

export default IntegratedFacilityManagementKumbalgodu;
