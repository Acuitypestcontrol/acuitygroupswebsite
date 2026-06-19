import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import pestBanner from "../../images/koramangala.jpg";

const PestControlKoramangala = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <Helmet>
        <title>
          Pest Control Services in Koramangala Bangalore | Acuity Groups
        </title>
        <meta
          name="description"
          content="Professional pest control services in Koramangala Bangalore. Expert termite control, cockroach control, rodent control and mosquito treatment for homes, apartments and offices."
        />
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/pest-control-koramangala"
        />
      </Helmet>

      {/* Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${pestBanner})` }}
      >
        
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
          Trusted Pest Control Company in Koramangala
        </h2>

        <p className="text-lg leading-8 text-gray-700 mb-5">
          Acuity Groups provides professional pest control services in
          Koramangala Bangalore for residential and commercial properties. Our
          trained experts eliminate cockroaches, termites, rodents, mosquitoes,
          ants and bed bugs using safe and effective treatment methods.
        </p>

        <p className="text-lg leading-8 text-gray-700">
          We serve apartments, villas, restaurants, cafes, offices, co-working
          spaces and commercial establishments throughout Koramangala with
          customized pest management solutions.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            Our Pest Control Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Cockroach Control",
              "Termite Control",
              "Rodent Control",
              "Mosquito Control",
              "Bed Bug Treatment",
              "Ant Control",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  {item}
                </h3>
                <p className="text-gray-600 leading-7">
                  Professional pest treatment to remove pests and prevent future
                  infestation in your property.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-10">
          Why Choose Acuity Groups?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Safe and eco-friendly pest control methods",
            "Experienced pest control technicians",
            "Service for homes, apartments, restaurants and offices",
            "Affordable pest control packages in Koramangala",
            "Fast response and professional support",
            "Complete hygiene and safety-focused treatment",
          ].map((point, index) => (
            <div key={index} className="flex gap-4 items-start">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                ✓
              </span>
              <p className="text-lg text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Area Coverage */}
      <section className="py-16 bg-green-900 text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pest Control Across Koramangala
          </h2>

          <p className="text-lg text-green-100 max-w-4xl mx-auto leading-8">
            We provide pest control services in Koramangala 1st Block, 2nd
            Block, 3rd Block, 4th Block, 5th Block, 6th Block, 7th Block, 8th
            Block and nearby areas.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {[
            {
              q: "Do you provide pest control services in Koramangala?",
              a: "Yes, we provide pest control services throughout Koramangala and nearby areas.",
            },
            {
              q: "Do you provide pest control for restaurants and cafes?",
              a: "Yes, we offer pest management services for restaurants, cafes, hotels and food businesses.",
            },
            {
              q: "Do you provide termite control in Koramangala?",
              a: "Yes, we provide professional termite inspection and treatment services.",
            },
            {
              q: "Is the treatment safe for children and pets?",
              a: "Yes, our treatments are safe when used according to recommended guidelines.",
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
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Need Pest Control in Koramangala?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Contact Acuity Groups today for safe and reliable pest control service.
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