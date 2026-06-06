import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Users,
  Award,
  Building,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Zap,
  Wrench,
  Bug,
  ChevronRight,
  Target,
  Eye,
  Heart,
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
      desc: "Professional cleaning, housekeeping, and facility upkeep.",
      path: "/housekeeping",
    },
    {
      icon: Shield,
      title: "Security Services",
      desc: "Physical & electronic security, manned guarding, surveillance.",
      path: "/security-services",
    },
    {
      icon: Building,
      title: "Technical Services",
      desc: "Electrical, HVAC, plumbing, and technical maintenance.",
      path: "/technical-maintenance",
    },
    {
      icon: Wrench,
      title: "Repair & Maintenance",
      desc: "Preventive & corrective maintenance for all facilities.",
      path: "/facility-management",
    },
    {
      icon: Bug,
      title: "Pest Control Services",
      desc: "Eco‑friendly pest management for healthy environments.",
      path: "/pest-management",
    },
    {
      icon: Users,
      title: "Manpower Management",
      desc: "Skilled workforce deployment & HR support.",
      path: "/corporate-staffing",
    },
  ];

  const commitments = [
    "Clean and hygienic environments",
    "Safe and secure premises",
    "Efficient maintenance solutions",
    "Environment‑friendly practices",
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

  return (
    <div className="bg-white text-black overflow-hidden font-['Poppins',system-ui,sans-serif]">
      {/* HERO SECTION - BANNER RETAINED */}
      <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={AboutBanner}
            alt="Acuity Integrated Facility Management"
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
              <span>ACUITY INTEGRATED</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
              Leading Facility Management, Security, Housekeeping & Maintenance
              Services Company in Bangalore
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
              India's Leading{" "}
              <span className="text-blue-900">
                Integrated Facility Management
              </span>{" "}
              Provider
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Acuity Integrated Facility Management is a professionally managed
              organization delivering comprehensive Property Maintenance
              Services across corporate, industrial, and residential sectors.
              Established with a vision to provide reliable and efficient
              solutions, Acuity specializes in Integrated Corporate Support
              Services, ensuring high standards in housekeeping, security,
              technical operations, and maintenance.
            </p>
            <p className="text-gray-500 leading-relaxed text-lg">
              We are a team of trained and dedicated professionals focused on
              delivering customized facility solutions based on client
              requirements. Our goal is to build long‑term relationships by
              consistently improving service quality and exceeding client
              expectations.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {strengths.map((strength, idx) => (
                <div key={idx} className="flex items-center gap-2 ">
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
              desc="ISO certified & industry approved"
            />
            <InfoCard
              icon={Users}
              title="Skilled Workforce"
              desc="Trained & background verified"
            />
            <InfoCard
              icon={Award}
              title="Quality Assurance"
              desc="Regular audits & feedback"
            />
            <InfoCard
              icon={Building}
              title="Corporate Expertise"
              desc="Serving top businesses"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <Trophy className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-blue-900 mb-2">19+</h3>
              <p className="text-gray-700 font-medium">
                Years of Industry Experience
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <Users className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-4xl font-bold text-yellow-600 mb-2">100+</h3>
              <p className="text-gray-700 font-medium">Trained Professionals</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <Star className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">500+</h3>
              <p className="text-gray-700 font-medium">Happy Clients</p>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <Clock className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-4xl font-bold text-red-600 mb-2">24/7</h3>
              <p className="text-gray-700 font-medium">Service Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full text-blue-900 tracking-[5px] text-sm font-thin mb-5">
              <Users size={14} />
              <span>OUR LEADERSHIP</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Led by{" "}
              <span className="bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
                Industry Expertise
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              19+ years of experience driving excellence in facility management
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#B8D34C] to-blue-900 flex items-center justify-center text-white text-4xl font-semibold shadow-lg">
                RM
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Mr. Rajeshekar M N
                </h3>
                <p className="text-black font-thin mb-3">
                  Founder & Managing Director
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With over{" "}
                  <strong className="text-blue-900">
                    19 years of rich industry experience
                  </strong>{" "}
                  in facility management and operations, Mr. Rajeshekar brings
                  strong leadership, operational excellence, and a commitment to
                  quality. Under his guidance, Acuity has developed deep
                  expertise in Integrated Facility Management, Security Services
                  (Physical & Electronic), Housekeeping & Soft Services,
                  Technical & Maintenance Services, and Manpower Management &
                  Deployment.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  His commitment to quality, discipline, and customer
                  satisfaction drives the organization towards continuous growth
                  and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
                To deliver reliable, efficient, and innovative facility
                management solutions that create safe, clean, and productive
                environments for our clients while maintaining the highest
                standards of quality and professionalism.
              </p>
            </div>

            <div className="bg-yellow-500 text-black p-10 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-bold mb-5">Our Vision</h3>
              <p className="leading-8">
                To become India's most trusted integrated facility management
                company by consistently exceeding customer expectations,
                embracing innovation, and delivering exceptional service
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and accountability in
                everything we do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We continuously strive to deliver superior quality services and
                exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Safety</h3>
              <p className="text-gray-600">
                Maintaining safe environments is at the heart of our service
                commitment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We build lasting partnerships by understanding and fulfilling
                client requirements.
              </p>
            </div>
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
              Driven by customer satisfaction and environment‑friendly practices
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-950 to-blue-800">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Facility Operations?
          </h2>

          <p className="text-blue-100 text-lg leading-8 max-w-3xl mx-auto mb-10">
            Partner with Acuity Groups for professional facility management,
            security services, housekeeping, pest management, maintenance, and
            manpower outsourcing solutions tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contactus"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Get Free Consultation
            </a>

            <a
              href="tel:9941229005"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        `}
      </style>
    </div>
  );
}

/* COMPONENT */
function InfoCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow hover:border-blue-200">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl  flex items-center justify-center">
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
