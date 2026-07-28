import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage from "../../images/koramangalampic.jpg";
import bannerImage1 from "../../images/koramangala.jpg";

const IntegratedFacilityManagementKoramangala = () => {
  const services = [
    {
      title: "Housekeeping Services in Koramangala",
      desc: "Professional housekeeping and cleaning services for apartments, offices, hospitals, hotels, restaurants and commercial properties in Koramangala.",
      link: "/housekeeping-services",
    },
    {
      title: "Security Guard Services in Koramangala",
      desc: "Trained security guards for apartments, offices, retail outlets, hospitals, hotels and commercial buildings in Koramangala.",
      link: "/security-services",
    },
    {
      title: "Pest Control Services in Koramangala",
      desc: "Safe and effective pest control services for homes, apartments, restaurants, offices, hotels and commercial properties in Koramangala.",
      link: "/pest-management",
    },
    {
      title: "Repair and Maintenance in Koramangala",
      desc: "Electrical, plumbing, carpentry, preventive maintenance and general building repair services for properties in Koramangala.",
      link: "/repair-maintenance",
    },
    {
      title: "Facility Soft Services in Koramangala",
      desc: "Complete soft services including cleaning, hygiene management, pantry support, washroom maintenance and facility support.",
      link: "/soft-services",
    },
    {
      title: "Manpower Outsourcing in Koramangala",
      desc: "Skilled, semi-skilled and unskilled manpower supply for offices, apartments, restaurants, hotels and commercial establishments.",
      link: "/manpower-outsourcing",
    },
  ];

  const whyChoose = [
    "Trained and Verified Workforce",
    "Customized Facility Management Plans",
    "Support for Residential and Commercial Properties",
    "Regular Supervision and Quality Checks",
    "Affordable Monthly Service Packages",
    "Quick Response Across Koramangala",
  ];

  const faqs = [
    {
      q: "Do you provide integrated facility management services in Koramangala?",
      a: "Yes, Acuity Groups provides integrated facility management services in Koramangala for apartments, offices, hotels, hospitals, restaurants and commercial properties.",
    },
    {
      q: "Which facility services do you provide in Koramangala?",
      a: "We provide housekeeping, security guards, pest control, manpower outsourcing, soft services, electrical maintenance and repair services.",
    },
    {
      q: "Do you provide facility management for apartments in Koramangala?",
      a: "Yes, we provide customized housekeeping, security, pest control and maintenance solutions for apartments and residential communities.",
    },
    {
      q: "Do you provide facility management for offices and commercial properties?",
      a: "Yes, we support offices, retail outlets, restaurants, hotels, hospitals and commercial buildings across Koramangala.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Facility Management Services in Koramangala | Acuity Groups LLP
        </title>

        <meta
          name="description"
          content="Facility management services in Koramangala for offices, apartments and commercial properties, including housekeeping, security and maintenance."
        />

        <meta
          name="keywords"
          content="Facility Management Services in Koramangala, Facility Management Company in Koramangala, Housekeeping Services in Koramangala, Security Services in Koramangala, Pest Management in Koramangala, Manpower Outsourcing in Koramangala"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management-koramangala"
        />

        <meta
          property="og:title"
          content="Integrated Facility Management Services in Koramangala | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Professional housekeeping, security, manpower outsourcing, pest control and maintenance services in Koramangala."
        />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/integrated-facility-management-koramangala"
        />

        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Integrated Facility Management Services in Koramangala | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Integrated facility management and property support services across Koramangala."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Integrated Facility Management Services in Koramangala",
            serviceType: "Integrated Facility Management Services",
            url: "https://www.acuitygroups.in/integrated-facility-management-koramangala",
            provider: {
              "@type": "LocalBusiness",
              name: "Acuity Groups",
              url: "https://www.acuitygroups.in/",
            },
            areaServed: {
              "@type": "Place",
              name: "Koramangala, Bangalore",
            },
            description:
              "Integrated facility management services in Koramangala including housekeeping, security, manpower outsourcing, pest control, soft services and maintenance.",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="py-8 md:py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Integrated Facility Management Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Facility Management Services in Koramangala
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Acuity Groups LLP provides professional facility management
              services in Koramangala for corporate offices, commercial
              buildings, apartments, retail spaces and business establishments.
              Our integrated facility management solutions ensure clean, secure
              and well-maintained workplaces.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Our services include housekeeping, security guards, pest control,
              manpower outsourcing, soft services, electrical maintenance and
              complete repair and maintenance support.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
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
              alt="Integrated Facility Management Services in Koramangala"
              className="w-full max-w-[700px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Facility Management Services in Koramangala
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Complete facility support solutions for residential, commercial and
            corporate properties across Koramangala.
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

      {/* LOCAL SEO CONTENT */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Facility Management Solutions for Koramangala Properties
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-5">
            Koramangala is a major residential and commercial location in
            Bangalore with apartments, offices, restaurants, hotels, hospitals,
            retail outlets, co-working spaces and business centres. Acuity
            Groups helps these properties maintain hygiene, safety and smooth
            daily operations.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Our services include{" "}
            <Link
              to="/housekeeping-services"
              className="text-blue-600 font-semibold"
            >
              professional housekeeping
            </Link>
            ,{" "}
            <Link
              to="/security-services"
              className="text-blue-600 font-semibold"
            >
              trained security guards
            </Link>
            ,{" "}
            <Link to="/pest-management" className="text-blue-600 font-semibold">
              pest control
            </Link>
            ,{" "}
            <Link
              to="/repair-maintenance"
              className="text-blue-600 font-semibold"
            >
              repair and maintenance
            </Link>{" "}
            and{" "}
            <Link
              to="/manpower-outsourcing"
              className="text-blue-600 font-semibold"
            >
              manpower outsourcing
            </Link>
            .
          </p>
        </div>
        <p className="mt-6 text-lg text-gray-700 leading-8">
          Learn more about our{" "}
          <Link
            to="/integrated-facility-management"
            className="text-blue-600 font-semibold underline"
          >
            Integrated Facility Management Services in Bangalore
          </Link>
          .
        </p>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Acuity Groups in Koramangala?
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

      {/* AREAS */}
      <section className="py-16 bg-blue-900 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Serving Koramangala and Nearby Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide facility management services across Koramangala 1st
            Block, 2nd Block, 3rd Block, 4th Block, 5th Block, 6th Block, 7th
            Block, 8th Block, Ejipura, Jakkasandra and nearby locations.
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

      {/* MAP */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage1})` }}
        aria-label="Koramangala service area map"
      ></section>

      {/* CTA */}
      <section className="py-16 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Need Facility Management Services in Koramangala?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups for a customized integrated facility management
          plan for your property in Koramangala.
        </p>

        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default IntegratedFacilityManagementKoramangala;
