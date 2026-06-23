import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage from "../../images/attibelemimage.jpg";
import bannerImage1 from "../../images/attibelemap.jpg";

const IntegratedFacilityManagementAttibele = () => {
  const services = [
    {
      title: "Industrial Housekeeping in Attibele",
      desc: "Professional industrial housekeeping services in Attibele for factories, warehouses, manufacturing units and industrial facilities.",
      link: "/housekeeping",
    },
    {
      title: "Security Services in Attibele",
      desc: "Trained security guards, gate security, visitor management and 24/7 protection for industries and commercial buildings in Attibele.",
      link: "/securityservice",
    },
    {
      title: "Pest Management in Attibele",
      desc: "Complete pest control solutions in Attibele including termite control, cockroach control, rodent control and mosquito treatment.",
      link: "/pest",
    },
    {
      title: "Repair & Maintenance in Attibele",
      desc: "Reliable building repair and maintenance services in Attibele including plumbing, carpentry, civil work and facility upkeep.",
      link: "/repair",
    },
    {
      title: "Electrical Maintenance in Attibele",
      desc: "Preventive electrical maintenance, wiring inspection, panel servicing and electrical troubleshooting for facilities in Attibele.",
      link: "/repair",
    },
    {
      title: "Manpower Outsourcing in Attibele",
      desc: "Skilled, semi-skilled and unskilled manpower outsourcing services in Attibele for industries, warehouses and offices.",
      link: "/manpower",
    },
  ];

  const whyChoose = [
    "19+ Years Industry Experience",
    "Trained Facility Management Staff",
    "Customized IFM Solutions",
    "Industrial & Commercial Expertise",
    "Affordable Monthly Packages",
    "24/7 Support & Supervision",
  ];

  const faqs = [
    {
      q: "Do you provide integrated facility management services in Attibele?",
      a: "Yes, Acuity Groups provides integrated facility management services in Attibele for industries, warehouses, apartments and commercial properties.",
    },
    {
      q: "Which facility services do you offer in Attibele?",
      a: "We offer housekeeping, security services, pest management, repair and maintenance, electrical maintenance and manpower outsourcing in Attibele.",
    },
    {
      q: "Do you provide industrial housekeeping in Attibele?",
      a: "Yes, we provide industrial housekeeping services in Attibele for factories, manufacturing units, warehouses and logistics facilities.",
    },
    {
      q: "Can I get customized facility management packages?",
      a: "Yes, we provide customized facility management packages based on your manpower, site size and service requirements.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Management Services in Attibele Bangalore | Acuity
          Groups
        </title>
        <meta
          name="description"
          content="Integrated Facility Management Services in Attibele Bangalore by Acuity Groups. Housekeeping, security services, pest control, electrical maintenance, repair maintenance and manpower outsourcing for industries and commercial properties."
        />
        <meta
          name="keywords"
          content="Integrated Facility Management Services in Attibele, Facility Management Company in Attibele, Housekeeping Services in Attibele, Security Services in Attibele, Pest Control in Attibele, Manpower Outsourcing in Attibele, Electrical Maintenance in Attibele"
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management-attibele"
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
              Facility Management Services in Attibele Bangalore
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Acuity Groups provides professional Integrated Facility Management
              Services in Attibele Bangalore for industrial units, factories,
              warehouses, logistics parks, apartment communities and commercial
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

          <div className="flex justify-center">
            <img
              src={bannerImage}
              alt="Facility Management Services in Attibele Bangalore"
              className="w-full max-w-[700px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Facility Management Services in Attibele
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide customized facility management services in Attibele for
            industries, offices, warehouses, apartments and commercial
            establishments.
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
            Facility Management Solutions for Attibele Industrial Area
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-5">
            Attibele is one of Bangalore’s important industrial and commercial
            locations. Acuity Groups supports businesses in Attibele with
            professional facility management services designed to improve
            safety, cleanliness, maintenance and daily operations.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Whether you need{" "}
            <Link to="/housekeeping" className="text-blue-600 font-semibold">
              housekeeping services
            </Link>
            ,{" "}
            <Link to="/securityservice" className="text-blue-600 font-semibold">
              security guards
            </Link>
            ,{" "}
            <Link to="/pest" className="text-blue-600 font-semibold">
              pest control services
            </Link>
            ,{" "}
            <Link to="/repair" className="text-blue-600 font-semibold">
              maintenance technicians
            </Link>{" "}
            or{" "}
            <Link to="/manpower" className="text-blue-600 font-semibold">
              manpower support
            </Link>
            , our team delivers reliable facility management services in
            Attibele Bangalore.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups in Attibele?
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
            Serving Attibele & Nearby Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide facility management services across Attibele, Anekal,
            Bommasandra, Chandapura, Hosur Road, Jigani, Electronic City and
            nearby industrial and commercial zones.
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
          Looking for Facility Management Services in Attibele?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for customized integrated facility
          management solutions in Attibele Bangalore.
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

export default IntegratedFacilityManagementAttibele;
