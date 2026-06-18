import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle } from "lucide-react";

import Ourservices from "../images/oursevices.jpg";
import FacilityImg from "../images/facility.jpg";
import SecurityImg from "../images/security iamge1.jpg";
import HousekeepingImg from "../images/housekeeping.jpg";
import PestImg from "../images/pest7889.jpg";
import ManpowerImg from "../images/manpowerout.webp";
import MaintenanceImg from "../images/RepairingMaintenance.jpg";

const Services = () => {
  const services = [
    {
      title: "Facility Management",
      description:
        "Comprehensive management of your commercial or residential property, including maintenance, cleaning, and operations.",
      image: FacilityImg,
      color: "blue",
      link: "/facilitymanagment1",
    },
    {
      title: "Security Services",
      description:
        "Trained security personnel, CCTV surveillance, access control, and 24/7 emergency response.",
      image: SecurityImg,
      color: "red",
      link: "/securityservice",
    },
    {
      title: "Housekeeping Services",
      description:
        "Professional cleaning, sanitization, and upkeep for offices, hotels, hospitals, and residential complexes.",
      image: HousekeepingImg,
      color: "green",
      link: "/housekeeping",
    },
    {
      title: "Pest Management",
      description:
        "Eco-friendly pest control solutions for termites, rodents, cockroaches, and other pests.",
      image: PestImg,
      color: "orange",
      link: "/pest",
    },
    {
      title: "Manpower Outsourcing",
      description:
        "Skilled and unskilled workforce solutions for staffing, temporary roles, and project-based needs.",
      image: ManpowerImg,
      color: "purple",
      link: "/manpower",
    },
    {
      title: "Preventive Maintenance",
      description:
        "Scheduled inspections and repairs to keep your equipment and infrastructure running smoothly.",
      image: MaintenanceImg,
      color: "teal",
      link: "/repair",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>Our Services in Bangalore | Acuity Groups</title>
        <meta
          name="description"
          content="Elevate your property operations with Acuity Groups. Premium facility management, security, pest control, housekeeping, and staffing solutions in Bangalore."
        />
        <meta
          name="keywords"
          content="facility management, security services, housekeeping, pest control, manpower outsourcing, Bangalore services"
        />
        <link rel="canonical" href="https://www.acuitygroups.in/services" />
      </Helmet>

      <section className="relative h-[500px] md:h-[900px] overflow-hidden">
        <img
          src={Ourservices}
          alt="Modern office building with professional facility management"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-4xl leading-tight drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mt-4">
            We provide end-to-end facility management and support services
            tailored to your business needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-4">
              WHAT WE OFFER
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Comprehensive Solutions for Your Facility
            </h2>

            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Choose Acuity Groups?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "19+ Years Experience",
              "Trained Professionals",
              "24/7 Support",
              "Customized Solutions",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md"
              >
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Facility?
          </h2>

          <p className="text-blue-100 text-lg mb-8">
            Contact us today for a free consultation and customized service
            plan.
          </p>

          <Link
            to="/contactus"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
