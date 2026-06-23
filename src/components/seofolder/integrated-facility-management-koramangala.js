import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage from "../../images/koramangalampic.jpg";
import bannerImage1 from "../../images/koramangala.jpg";

const PestControlKoramangala = () => {
  const services = [
    {
      title: "Apartment Pest Control in Koramangala",
      desc: "Professional pest control services in Koramangala for apartments, villas, PGs, homes and residential communities.",
      link: "/pest",
    },
    {
      title: "Restaurant Pest Control in Koramangala",
      desc: "Safe pest management services in Koramangala for restaurants, cafes, cloud kitchens, hotels and food businesses.",
      link: "/pest",
    },
    {
      title: "Cockroach Control in Koramangala",
      desc: "Effective cockroach control treatment in Koramangala for kitchens, bathrooms, restaurants, offices and commercial properties.",
      link: "/pest",
    },
    {
      title: "Termite Control in Koramangala",
      desc: "Professional termite inspection and termite treatment in Koramangala for homes, apartments, offices and wooden structures.",
      link: "/pest",
    },
    {
      title: "Rodent Control in Koramangala",
      desc: "Reliable rat and rodent control services in Koramangala for homes, restaurants, offices, storage areas and commercial buildings.",
      link: "/pest",
    },
    {
      title: "Mosquito & Bed Bug Control in Koramangala",
      desc: "Complete mosquito control and bed bug treatment in Koramangala for homes, apartments, PGs and residential properties.",
      link: "/pest",
    },
  ];

  const whyChoose = [
    "Safe Pest Control for Homes & Apartments",
    "Experienced Pest Control Technicians",
    "Specialized Restaurant & Cafe Pest Treatment",
    "Customized Pest Control Packages",
    "Fast Response in Koramangala",
    "Hygiene & Safety Focused Service",
  ];

  const faqs = [
    {
      q: "Do you provide pest control services in Koramangala?",
      a: "Yes, Acuity Groups provides pest control services in Koramangala for homes, apartments, restaurants, cafes, offices and commercial properties.",
    },
    {
      q: "Do you provide pest control for restaurants and cafes in Koramangala?",
      a: "Yes, we provide pest management services in Koramangala for restaurants, cafes, cloud kitchens, hotels and food businesses.",
    },
    {
      q: "Do you provide termite control in Koramangala?",
      a: "Yes, we provide professional termite inspection and termite treatment services in Koramangala for residential and commercial properties.",
    },
    {
      q: "Is your pest control treatment safe for children and pets?",
      a: "Yes, our pest control treatments are safe when the recommended guidelines and waiting period are followed after service.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>
          Pest Control Services in Koramangala Bangalore | Acuity Groups
        </title>
        <meta
          name="description"
          content="Pest Control Services in Koramangala Bangalore by Acuity Groups. Cockroach control, termite control, rodent control, mosquito control, bed bug treatment and restaurant pest control for homes, apartments and offices."
        />
        <meta
          name="keywords"
          content="Pest Control Services in Koramangala, Pest Control Company in Koramangala, Cockroach Control in Koramangala, Termite Control in Koramangala, Rodent Control in Koramangala, Mosquito Control in Koramangala, Bed Bug Treatment in Koramangala"
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/pest-control-koramangala"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-8 md:py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Professional Pest Control Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">
              Pest Control Services in Koramangala Bangalore
            </h1>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Acuity Groups provides professional pest control services in
              Koramangala Bangalore for apartments, villas, restaurants, cafes,
              offices, PG accommodations and commercial establishments.
            </p>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              Our trained pest control technicians handle cockroaches, termites,
              rodents, mosquitoes, ants and bed bugs using safe, effective and
              long-lasting treatment solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contactus"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold"
              >
                Get Free Quote
              </Link>

              <a
                href="tel:+919941229005"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={bannerImage}
              alt="Pest Control Services in Koramangala Bangalore"
              className="w-full max-w-[700px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-4">
            Our Pest Control Services in Koramangala
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide customized pest control services in Koramangala for
            apartments, villas, restaurants, cafes, offices, PGs and commercial
            properties.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition border-t-4 border-green-600 block"
              >
                <div className="text-4xl font-bold text-green-100 mb-4">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold text-green-700 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">{service.desc}</p>

                <p className="text-green-600 font-semibold mt-4">
                  View Service →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-green-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Pest Control Solutions for Koramangala Homes & Businesses
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-5">
            Koramangala is one of Bangalore’s busiest residential and commercial
            locations, with apartments, restaurants, cafes, offices, PGs,
            co-working spaces and retail outlets. Acuity Groups supports homes
            and businesses in Koramangala with professional pest control
            services focused on hygiene, safety and long-term pest prevention.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Whether you need{" "}
            <Link to="/pest" className="text-green-600 font-semibold">
              cockroach control
            </Link>
            ,{" "}
            <Link to="/pest" className="text-green-600 font-semibold">
              termite treatment
            </Link>
            ,{" "}
            <Link to="/pest" className="text-green-600 font-semibold">
              rodent control
            </Link>
            ,{" "}
            <Link to="/pest" className="text-green-600 font-semibold">
              mosquito control
            </Link>
            , or{" "}
            <Link to="/pest" className="text-green-600 font-semibold">
              bed bug treatment
            </Link>
            , our team delivers reliable pest control services in Koramangala
            Bangalore.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-10">
          Why Choose Acuity Groups in Koramangala?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">
                ✓
              </span>
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-green-900 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pest Control Across Koramangala
          </h2>

          <p className="text-lg text-green-100 leading-8">
            We provide pest control services across Koramangala 1st Block, 2nd
            Block, 3rd Block, 4th Block, 5th Block, 6th Block, 7th Block, 8th
            Block, Jakkasandra, Ejipura, Sony World Signal and nearby areas.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-5">
              <h3 className="font-semibold text-xl mb-2 text-green-800">
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
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          Need Pest Control in Koramangala?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for safe and reliable pest control
          services in Koramangala Bangalore.
        </p>

        <Link
          to="/contactus"
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default PestControlKoramangala;