import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  Users,
  Award,
  Building,
  CheckCircle,
  Sparkles,
  Wrench,
  Bug,
  ChevronRight,
  Trophy,
  Star,
  Clock,
} from "lucide-react";

import AboutBanner from "../../images/aboutbanner.jpg";

export default function About() {
  const services = [
    {
      icon: Sparkles,
      title: "Housekeeping & Soft Services",
      desc: "Professional cleaning, housekeeping and facility upkeep services.",
      path: "/housekeeping-services",
    },
    {
      icon: Shield,
      title: "Security Services",
      desc: "Manned guarding, security supervision and safety support.",
      path: "/security-services",
    },
    {
      icon: Building,
      title: "Integrated Facility Management",
      desc: "Complete facility operations, support and maintenance solutions.",
      path: "/integrated-facility-management",
    },
    {
      icon: Wrench,
      title: "Repair & Maintenance",
      desc: "Preventive and corrective maintenance for properties and facilities.",
      path: "/repair-maintenance",
    },
    {
      icon: Bug,
      title: "Pest Management",
      desc: "Safe pest management solutions for healthy environments.",
      path: "/pest-management",
    },
    {
      icon: Users,
      title: "Manpower Outsourcing",
      desc: "Skilled workforce deployment and manpower support services.",
      path: "/manpower-outsourcing",
    },
  ];

  const commitments = [
    "Clean and hygienic environments",
    "Safe and secure premises",
    "Efficient maintenance solutions",
    "Environment-friendly practices",
    "High operational standards",
    "Customer satisfaction driven",
  ];

  const industries = [
    "Commercial Establishments",
    "Residential Apartments",
    "Industries & Warehouses",
    "Government Organizations",
    "Educational Institutions",
    "Hospitals & Healthcare",
    "Shopping Malls & Retail Spaces",
  ];

  const strengths = [
    "Skilled manpower deployment",
    "Continuous supervision & monitoring",
    "Modern tools & techniques",
    "Quick response & service support",
  ];

  const serviceAreas = [
    {
      name: "Whitefield",
      path: "/integrated-facility-management-whitefield",
    },
    {
      name: "Electronic City",
      path: "/integrated-facility-management-electronic-city",
    },
    {
      name: "Koramangala",
      path: "/integrated-facility-management-koramangala",
    },
    {
      name: "HSR Layout",
      path: "/integrated-facility-management-hsr-layout",
    },
    {
      name: "JP Nagar",
      path: "/integrated-facility-management-jp-nagar",
    },
    {
      name: "Peenya",
      path: "/integrated-facility-management-peenya",
    },
    {
      name: "Hebbal",
      path: "/integrated-facility-management-hebbal",
    },
    {
      name: "BEML Layout",
      path: "/integrated-facility-management-beml",
    },
    {
      name: "Dabaspet",
      path: "/integrated-facility-management-dabaspet",
    },
    {
      name: "Doddaballapur",
      path: "/integrated-facility-management-doddaballapur",
    },
    {
      name: "Attibele",
      path: "/integrated-facility-management-attibele",
    },
    {
      name: "Kumbalgodu",
      path: "/integrated-facility-management-kumbalgodu",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Acuity Groups | Facility Management Bangalore</title>

        <meta
          name="description"
          content="Learn about Acuity Groups, a facility management company in Bangalore offering security, housekeeping, pest control and manpower services."
        />

        <meta
          name="keywords"
          content="about Acuity Groups, facility management company Bangalore, security services Bangalore, housekeeping services Bangalore, manpower outsourcing Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.acuitygroups.in/about" />

        <meta
          property="og:title"
          content="About Acuity Groups | Facility Management Bangalore"
        />
        <meta
          property="og:description"
          content="Acuity Groups provides facility management, security, housekeeping, pest management and manpower services in Bangalore."
        />
        <meta property="og:url" content="https://www.acuitygroups.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Acuity Groups | Facility Management Bangalore"
        />
        <meta
          name="twitter:description"
          content="Know more about Acuity Groups and our facility management services in Bangalore."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://www.acuitygroups.in/about/#aboutpage",
            name: "About Acuity Groups",
            url: "https://www.acuitygroups.in/about",
            description:
              "Acuity Groups is a facility management company in Bangalore offering security, housekeeping, pest management, manpower outsourcing and maintenance services.",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Acuity Groups",
              url: "https://www.acuitygroups.in/",
              telephone: "+919941229005",
              email: "info@acuitygroups.in",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP Nagar 6th Phase, Yelachenahalli",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560078",
                addressCountry: "IN",
              },
              areaServed: "Bangalore",
              serviceType: [
                "Integrated Facility Management",
                "Security Services",
                "Housekeeping Services",
                "Pest Management",
                "Manpower Outsourcing",
                "Repair and Maintenance",
              ],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.acuitygroups.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://www.acuitygroups.in/about",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-white text-black overflow-hidden font-['Poppins',system-ui,sans-serif]">
        {/* HERO SECTION */}
        <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[550px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={AboutBanner}
              alt="Acuity Groups Facility Management Company in Bangalore"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />

          <div className="relative h-full flex items-center justify-center text-center px-6 z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full text-amber-400 tracking-[5px] text-sm font-thin mb-6">
                <Building size={14} />
                <span>ACUITY GROUPS</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  Acuity Groups
                </span>
              </h1>

              <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
                Facility Management, Security, Housekeeping, Pest Management &
                Manpower Services Company in Bangalore
              </p>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-black uppercase tracking-[5px] mb-4 font-thin">
                Who We Are
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Bangalore’s Trusted{" "}
                <span className="text-blue-900">
                  Integrated Facility Management
                </span>{" "}
                Provider
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Acuity Groups is a professionally managed facility management
                company delivering reliable property maintenance and corporate
                support services across commercial, industrial and residential
                sectors.
              </p>

              <p className="text-gray-500 leading-relaxed text-lg">
                We provide integrated facility management, security services,
                housekeeping, pest management, repair maintenance and manpower
                outsourcing solutions based on client requirements and property
                operations.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-blue-900" />
                    <span className="text-gray-700 text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 bg-white">
              <InfoCard
                icon={Shield}
                title="Trusted Services"
                desc="Reliable facility support"
              />
              <InfoCard
                icon={Users}
                title="Skilled Workforce"
                desc="Trained & verified staff"
              />
              <InfoCard
                icon={Award}
                title="Quality Assurance"
                desc="Regular audits & feedback"
              />
              <InfoCard
                icon={Building}
                title="Corporate Expertise"
                desc="Serving business properties"
              />
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <Trophy className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold text-blue-900 mb-2">19+</h2>
                <p className="text-gray-700 font-medium">
                  Years of Industry Experience
                </p>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <Users className="w-10 h-10 text-yellow-600" />
                </div>
                <h2 className="text-4xl font-bold text-yellow-600 mb-2">
                  100+
                </h2>
                <p className="text-gray-700 font-medium">
                  Trained Professionals
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <Star className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-4xl font-bold text-green-600 mb-2">500+</h2>
                <p className="text-gray-700 font-medium">Happy Clients</p>
              </div>

              <div className="bg-red-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <Clock className="w-10 h-10 text-red-600" />
                </div>
                <h2 className="text-4xl font-bold text-red-600 mb-2">24/7</h2>
                <p className="text-gray-700 font-medium">Service Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Our Purpose
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Mission & Vision
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-blue-900 text-white p-10 rounded-3xl shadow-xl">
                <h3 className="text-3xl font-bold mb-5">Our Mission</h3>
                <p className="text-blue-100 leading-8">
                  To deliver dependable facility management services by
                  combining skilled manpower, quality systems and best industry
                  practices for measurable value creation.
                </p>
              </div>

              <div className="bg-yellow-500 text-black p-10 rounded-3xl shadow-xl">
                <h3 className="text-3xl font-bold mb-5">Our Vision</h3>
                <p className="leading-8">
                  To be a trusted facility management partner that helps
                  organizations focus on their core business while we manage
                  their daily facility operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Core Values
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Principles That Drive Us
              </h2>

              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                Our values guide every decision we make and every service we
                deliver to our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon="🤝"
                title="Integrity"
                desc="We operate with honesty, transparency and accountability in everything we do."
              />
              <ValueCard
                icon="⭐"
                title="Excellence"
                desc="We continuously strive to deliver superior service quality and exceed expectations."
              />
              <ValueCard
                icon="🛡️"
                title="Safety"
                desc="Maintaining safe environments is at the heart of our service commitment."
              />
              <ValueCard
                icon="❤️"
                title="Customer Focus"
                desc="We build lasting partnerships by understanding and fulfilling client requirements."
              />
            </div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full text-black tracking-[5px] text-sm font-thin mb-5">
              <Building size={14} />
              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text">
                Services
              </span>
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Comprehensive facility management solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon size={28} className="text-blue-900" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{service.desc}</p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to={service.path}
                    className="text-blue-900 flex items-center gap-1 text-sm font-medium"
                  >
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR COMMITMENT */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                  Commitment
                </span>
              </h2>

              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                Driven by customer satisfaction and environment-friendly
                practices
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-100 flex items-center gap-3 hover:shadow-md transition"
                >
                  <CheckCircle className="text-blue-900 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full text-black tracking-[5px] text-sm font-thin mb-5">
                <Building size={14} />
                <span>INDUSTRIES WE SERVE</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Trusted Across{" "}
                <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                  Sectors
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {industries.map((industry, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center hover:border-blue-300 hover:shadow-md transition"
                >
                  <span className="text-gray-800 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-gradient-to-r from-blue-950 to-blue-800">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Facility Operations?
            </h2>

            <p className="text-blue-100 text-lg leading-8 max-w-3xl mx-auto mb-10">
              Partner with Acuity Groups for professional facility management,
              security services, housekeeping, pest management, maintenance and
              manpower outsourcing solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get Free Consultation
              </Link>

              <a
                href="tel:+919941229005"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Facility Management Services Across Bangalore
              </h2>

              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We provide professional facility management solutions across
                major areas of Bangalore.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: "Commercial Cleaning",
                  icon: "🧹",
                  desc: "Office, mall and commercial cleaning",
                },
                {
                  title: "Home Services",
                  icon: "🏠",
                  desc: "Deep cleaning, mopping and sweeping",
                },
                {
                  title: "Hotel Housekeeping",
                  icon: "🏨",
                  desc: "Room, lobby and hygiene maintenance",
                },
                {
                  title: "Facility Maintenance",
                  icon: "🔧",
                  desc: "Electrical, plumbing and repair support",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
                >
                  <div className="text-5xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Service Areas in Bangalore
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceAreas.map((area, index) => (
                  <Link
                    key={index}
                    to={area.path}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 p-4 rounded-lg border border-gray-100 transition-all group"
                  >
                    <span className="text-yellow-500 group-hover:translate-x-1 transition">
                      📍
                    </span>
                    Integrated Facility Management in {area.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center mt-14">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                View All Services in Bangalore →
              </Link>
            </div>
          </div>
        </section>

        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
          `}
        </style>
      </div>
    </>
  );
}

/* COMPONENT */
function InfoCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow hover:border-blue-200">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center">
          <Icon size={20} className="text-blue-900" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}