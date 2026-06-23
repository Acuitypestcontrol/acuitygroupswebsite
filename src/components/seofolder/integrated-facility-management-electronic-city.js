import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage from "../../images/electronicitympic.jpg";
import bannerImage1 from "../../images/electronicmap.jpg";

const IntegratedFacilityManagementElectronicCity = () => {
  const services = [
    {
      title: "Corporate Housekeeping in Electronic City",
      desc: "Professional housekeeping services in Electronic City for IT parks, corporate offices, tech campuses, commercial buildings and business centres.",
      link: "/housekeeping",
    },
    {
      title: "Office Security Services in Electronic City",
      desc: "Trained security guards in Electronic City for IT companies, office entrances, visitor management, access control and 24/7 property protection.",
      link: "/securityservice",
    },
    {
      title: "Pest Management in Electronic City",
      desc: "Reliable pest management services in Electronic City for IT offices, apartments, hospitals, warehouses and commercial properties.",
      link: "/pest",
    },
    {
      title: "Building Repair & Maintenance in Electronic City",
      desc: "Complete repair and maintenance services in Electronic City for office buildings, apartments, tech parks, plumbing, carpentry and civil upkeep.",
      link: "/repair",
    },
    {
      title: "Electrical Maintenance in Electronic City",
      desc: "Preventive electrical maintenance in Electronic City for IT parks, commercial buildings, electrical panels, wiring systems and office facilities.",
      link: "/repair",
    },
    {
      title: "Facility Manpower Outsourcing in Electronic City",
      desc: "Skilled and trained manpower outsourcing services in Electronic City for housekeeping, security, maintenance and facility support operations.",
      link: "/manpower",
    },
  ];

  const whyChoose = [
    "Experience Managing IT & Corporate Facilities",
    "Trained Housekeeping & Security Workforce",
    "Customized IFM Solutions for Offices",
    "Support for IT Parks & Commercial Buildings",
    "Affordable Monthly Facility Packages",
    "24/7 Facility Support & Supervision",
  ];

  const faqs = [
    {
      q: "Do you provide integrated facility management services in Electronic City?",
      a: "Yes, Acuity Groups provides integrated facility management services in Electronic City for IT parks, corporate offices, apartments, warehouses and commercial properties.",
    },
    {
      q: "Which facility services do you offer in Electronic City?",
      a: "We offer housekeeping, security services, pest management, repair and maintenance, electrical maintenance and manpower outsourcing in Electronic City.",
    },
    {
      q: "Do you provide housekeeping services for IT companies in Electronic City?",
      a: "Yes, we provide professional housekeeping services in Electronic City for IT companies, corporate offices, tech parks and commercial buildings.",
    },
    {
      q: "Do you provide facility manpower outsourcing in Electronic City?",
      a: "Yes, we provide trained manpower outsourcing services in Electronic City for housekeeping, security, maintenance and facility operations.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Management Services in Electronic City Bangalore |
          Acuity Groups
        </title>
        <meta
          name="description"
          content="Integrated Facility Management Services in Electronic City Bangalore by Acuity Groups. Corporate housekeeping, office security, pest management, electrical maintenance, repair maintenance and manpower outsourcing for IT parks, offices and commercial properties."
        />
        <meta
          name="keywords"
          content="Integrated Facility Management Services in Electronic City, Facility Management Company in Electronic City, Housekeeping Services in Electronic City, Security Services in Electronic City, Pest Control in Electronic City, Manpower Outsourcing in Electronic City, Electrical Maintenance in Electronic City"
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management-electronic-city"
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
              Facility Management Services in Electronic City Bangalore
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Acuity Groups provides professional Integrated Facility Management
              Services in Electronic City Bangalore for IT parks, corporate
              offices, technology campuses, apartment communities, warehouses
              and commercial establishments.
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
              alt="Facility Management Services in Electronic City Bangalore"
              className="w-full max-w-[700px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Integrated Facility Management Services in Electronic City
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide customized integrated facility management services in
            Electronic City for IT parks, corporate offices, apartments,
            hospitals, warehouses and commercial establishments.
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
            Integrated Facility Management Solutions for Electronic City IT Hub
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-5">
            Electronic City is one of Bangalore’s major IT and business hubs,
            with technology parks, corporate offices, apartments, hospitals,
            warehouses and commercial spaces. Acuity Groups supports businesses
            in Electronic City with professional facility management services
            focused on hygiene, safety, maintenance and smooth daily operations.
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
            <Link to="/manpower" className="text-blue-600 font-semibold">
              facility manpower support
            </Link>
            , our team delivers reliable facility management services in
            Electronic City Bangalore.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups in Electronic City?
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
            Serving Electronic City & Nearby Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide integrated facility management services across Electronic
            City Phase 1, Electronic City Phase 2, Neeladri Nagar, Doddathogur,
            Huskur Road, Bommasandra, Hebbagodi and nearby business locations.
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
          Looking for Integrated Facility Management Services in Electronic
          City?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for customized integrated facility
          management solutions in Electronic City Bangalore.
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