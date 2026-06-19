import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import bannerImage from "../../images/jpnagar.jpg";

const IntegratedFacilityManagementJPNagar = () => {
  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Integrated Facility Management Services in JP Nagar Bangalore | Acuity
          Groups
        </title>
        <meta
          name="description"
          content="Professional Integrated Facility Management Services in JP Nagar Bangalore including housekeeping, security services, pest management, maintenance and manpower outsourcing."
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/integrated-facility-management-jp-nagar"
        />
      </Helmet>

      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Professional Facility Management Company in JP Nagar
        </h2>

        <p className="text-lg text-gray-700 leading-8 mb-5">
          Acuity Groups provides Integrated Facility Management Services in JP
          Nagar Bangalore for residential apartments, corporate offices,
          educational institutions, hospitals, clinics, retail outlets and
          commercial establishments.
        </p>

        <p className="text-lg text-gray-700 leading-8">
          Our trained workforce supports daily operations through housekeeping,
          security services, pest management, repair and maintenance, electrical
          maintenance and manpower outsourcing solutions.
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
              "Pest Management",
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
            Serving JP Nagar & Nearby Areas
          </h2>

          <p className="text-lg text-blue-100 leading-8">
            We provide facility management services across JP Nagar 1st Phase,
            2nd Phase, 3rd Phase, 4th Phase, 5th Phase, 6th Phase, 7th Phase,
            8th Phase, 9th Phase, Jayanagar, Banashankari and nearby areas.
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
              q: "Do you provide facility management services in JP Nagar?",
              a: "Yes, we provide complete integrated facility management solutions throughout JP Nagar and nearby areas.",
            },
            {
              q: "Do you provide housekeeping services in JP Nagar?",
              a: "Yes, we provide professional housekeeping services for apartments, offices, hospitals and commercial buildings.",
            },
            {
              q: "Do you provide security services in JP Nagar?",
              a: "Yes, we provide trained security guards for residential and commercial properties.",
            },
            {
              q: "Do you provide maintenance services?",
              a: "Yes, we provide repair, maintenance and electrical support services for facilities.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b pb-5">
              <h3 className="font-semibold text-xl mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Looking for Facility Management Services in JP Nagar?
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

export default IntegratedFacilityManagementJPNagar;
