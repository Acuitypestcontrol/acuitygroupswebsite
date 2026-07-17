import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  User,
  Shield,
  TrendingUp,
  Building,
  FileCheck,
  BarChart,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Phone,
  Wrench,
  Sparkles,
  Droplets,
  Thermometer,
} from "lucide-react";

import FacilityManagement from "../../images/bannerforfm.jpg";
import Fm from "../../images/fmimage2.jpg";
import Dicipline from "../../images/dicipline.jpg";

const FacilityManagementBlog = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pageUrl =
    "https://www.acuitygroups.in/blogs/importance-of-facility-management";

  const faqs = [
    {
      q: "What is facility management?",
      a: "Facility management is the coordination of people, processes and systems to ensure the safety, functionality and efficiency of buildings and workplaces.",
    },
    {
      q: "How does facility management optimize property value?",
      a: "Facility management improves property value through preventive maintenance, asset preservation, cost control, safety management and better user satisfaction.",
    },
    {
      q: "What services does Acuity Groups offer in facility management?",
      a: "Acuity Groups provides housekeeping, security, pest management, repair and maintenance, soft services and manpower support for properties in Bangalore.",
    },
    {
      q: "How can I get a quote for facility management services?",
      a: "You can contact Acuity Groups through the contact page and our team will help you with a customized facility management plan.",
    },
  ];

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Facility Management: A Cornerstone of Property Optimization",
    description:
      "Learn how professional facility management helps optimize property value, reduce costs and improve building performance.",
    image: "https://www.acuitygroups.in/static/media/bannerforfm.jpg",
    datePublished: "2024-09-30",
    dateModified: "2026-07-06",
    author: {
      "@type": "Organization",
      name: "Acuity Groups",
      url: "https://www.acuitygroups.in/",
    },
    publisher: {
      "@type": "Organization",
      name: "Acuity Groups",
      url: "https://www.acuitygroups.in/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  const faqData = {
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
  };

  const breadcrumbSchema = {
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
        name: "Blogs",
        item: "https://www.acuitygroups.in/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Importance of Facility Management",
        item: pageUrl,
      },
    ],
  };

  const relatedBlogs = [
    {
      title: "Preventive Maintenance for Asset Performance",
      link: "/blogs/repairing-maintenance",
    },
    {
      title: "Professional Housekeeping Services",
      link: "/blogs/housekeeping-services",
    },
    {
      title: "Integrated Facility Management Benefits",
      link: "/blogs/learn-how",
    },
  ];

  const stats = [
    {
      value: "200+",
      label: "Properties Managed",
      icon: <Building className="text-green-600 w-6 h-6" />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Award className="text-green-600 w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Support",
      icon: <Clock className="text-green-600 w-6 h-6" />,
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <Calendar className="text-green-600 w-6 h-6" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Importance of Facility Management for Property Optimization | Acuity
          Groups
        </title>

        <meta
          name="description"
          content="Learn how facility management improves property value, reduces costs and supports building maintenance in Bangalore."
        />

        <meta
          name="keywords"
          content="facility management Bangalore, property optimization, integrated facility management, building maintenance Bangalore, housekeeping services, security services, Acuity Groups"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:title"
          content="Importance of Facility Management for Property Optimization | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Professional facility management helps optimize property value, reduce costs and improve building performance."
        />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Importance of Facility Management for Property Optimization | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Learn how facility management improves property value and building performance."
        />

        <script type="application/ld+json">
          {JSON.stringify(articleData)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqData)}</script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800 font-sans">
        {/* Hero */}
        <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
          <img
            src={FacilityManagement}
            alt="Facility management services for property optimization"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl text-white">
            <span className="bg-green-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
              <Wrench size={16} /> Facility Management
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
              Facility Management: A Cornerstone of Property Optimization
            </h1>

            <div className="flex flex-wrap gap-5 mt-6 text-white/90">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <User size={18} /> Acuity Groups
              </div>

              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} /> Sep 30, 2024
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 w-full">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-12 md:h-16"
            >
              <path
                d="M0,0 L1200,0 L1200,120 C1050,80 750,120 600,120 C450,120 150,80 0,120 Z"
                fill="#f9fafb"
              ></path>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-green-600 transition">
                  Home
                </Link>
              </li>

              <li className="text-gray-400">/</li>

              <li>
                <Link to="/blogs" className="hover:text-green-600 transition">
                  Blogs
                </Link>
              </li>

              <li className="text-gray-400">/</li>

              <li className="text-gray-700 font-medium">
                Importance of Facility Management
              </li>
            </ol>
          </nav>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>

                <div className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </div>

                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main article */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Facility management is a critical discipline that includes the
                  planning, coordination and control of physical resources
                  needed to support daily operations. It covers building
                  maintenance, cleaning, security, pest management, energy
                  efficiency and workplace support.
                </p>
              </div>

              <div className="my-2">
                <img
                  src={Dicipline}
                  alt="Integrated facility management approach"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>🔧 Integrated Facility Management Approach</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    Core Discipline
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  What is Facility Management?
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Facility management ensures that buildings, infrastructure and
                  workplace environments operate efficiently. It combines
                  people, processes and technology to create safe, productive
                  and cost-effective environments for businesses and property
                  owners.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  How Facility Management Benefits Property Owners
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition">
                    <TrendingUp className="text-green-600 w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-green-700">
                      Cost Optimization
                    </h3>
                    <p className="text-gray-600">
                      Efficient facility management reduces operational expenses
                      through preventive maintenance, energy control and better
                      resource utilization.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition">
                    <Building className="text-green-600 w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-green-700">
                      Asset Preservation
                    </h3>
                    <p className="text-gray-600">
                      Regular inspections and maintenance help extend the life
                      of equipment, infrastructure and property assets.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition">
                    <Shield className="text-green-600 w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-green-700">
                      User Satisfaction
                    </h3>
                    <p className="text-gray-600">
                      Well-maintained facilities create a comfortable, safe and
                      hygienic environment for tenants, employees and visitors.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition">
                    <FileCheck className="text-green-600 w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-green-700">
                      Compliance Support
                    </h3>
                    <p className="text-gray-600">
                      Facility management helps maintain health, safety,
                      operational and building compliance standards.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition md:col-span-2">
                    <BarChart className="text-green-600 w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-green-700">
                      Improved Productivity
                    </h3>
                    <p className="text-gray-600">
                      Clean, organized and functional workspaces support better
                      employee productivity and workplace morale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={Fm}
                  alt="Facility maintenance team working"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  🔧 Professional maintenance team at work
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Acuity Groups: Facility Management Service Provider in
                  Bangalore
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Choose Acuity Groups as your{" "}
                  <Link
                    to="/"
                    className="font-semibold text-green-700 underline hover:text-green-800"
                  >
                    Integrated Facility Management Company in Bangalore
                  </Link>
                  . We provide comprehensive solutions for businesses,
                  residential complexes, industrial facilities and commercial
                  properties.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-5 rounded-xl flex gap-3 items-start">
                    <Sparkles className="text-green-600 w-6 h-6 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-lg text-green-800">
                        Customized Solutions
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Service plans designed around specific client
                        requirements.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-5 rounded-xl flex gap-3 items-start">
                    <Award className="text-green-600 w-6 h-6 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-lg text-green-800">
                        Experienced Professionals
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Trained teams delivering reliable facility services.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-5 rounded-xl flex gap-3 items-start">
                    <BarChart className="text-green-600 w-6 h-6 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-lg text-green-800">
                        Better Reporting
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Supervision, checklists and reporting for improved
                        service quality.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-5 rounded-xl flex gap-3 items-start">
                    <Shield className="text-green-600 w-6 h-6 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-lg text-green-800">
                        Complete Services
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Housekeeping, security, pest control, maintenance and
                        manpower support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Why Choose Acuity Groups?
                </h2>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Improve property value and asset performance.",
                    "Reduce operational and maintenance costs.",
                    "Support safety and service quality.",
                    "Improve tenant and employee satisfaction.",
                    "Get complete facility services under one partner.",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">Conclusion</h2>

                <p className="text-green-50 text-lg leading-relaxed">
                  Facility management plays a vital role in maintaining
                  efficient, safe and productive environments. By partnering
                  with Acuity Groups, property owners can improve service
                  quality, reduce costs, preserve assets and enhance long-term
                  property value.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
                  >
                    Get a Free Consultation <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/integrated-facility-management"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
                  >
                    Explore Facility Management Services
                  </Link>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/blogs"
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-1"
                >
                  ← Back to all blogs
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={FacilityManagement}
                    alt="Acuity Groups facility management team"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-xl">Acuity Groups</h3>

                <p className="text-gray-500 text-sm mt-1">
                  Facility Management Specialists
                </p>

                <p className="text-gray-600 text-sm mt-3">
                  Professional facility management support for property
                  optimization in Bangalore.
                </p>

                <div className="mt-4 flex justify-center gap-2">
                  <Phone size={18} className="text-green-600" />
                  <span className="text-sm text-gray-600">
                    24/7 Support Available
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  📚 Related Articles
                </h3>

                <ul className="space-y-4">
                  {relatedBlogs.map((blog, idx) => (
                    <li key={idx} className="flex gap-3 items-center group">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src={
                            idx === 0
                              ? Fm
                              : idx === 1
                                ? Dicipline
                                : FacilityManagement
                          }
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <Link
                        to={blog.link}
                        className="text-green-600 group-hover:text-green-700 group-hover:underline transition text-sm font-medium flex-1"
                      >
                        {blog.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border border-green-100 text-center">
                <div className="text-5xl mb-3">🏢</div>

                <h3 className="font-bold text-green-800 text-lg mb-2">
                  Optimize Your Property
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  Get a customized facility management plan from Acuity Groups.
                </p>

                <Link
                  to="/contact"
                  className="block text-center bg-green-600 text-white py-2.5 rounded-full hover:bg-green-700 transition shadow"
                >
                  Request a Quote
                </Link>

                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={Fm}
                    alt="Facility management property support"
                    className="w-full h-20 object-cover"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 text-center shadow-sm border">
                <div className="text-3xl mb-1">⭐⭐⭐⭐⭐</div>

                <p className="text-gray-600 text-sm">
                  Trusted facility management services in Bangalore
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Security | Housekeeping | Maintenance
                </p>

                <div className="flex justify-center gap-4 mt-3">
                  <Thermometer size={20} className="text-gray-400" />
                  <Droplets size={20} className="text-gray-400" />
                  <BarChart size={20} className="text-gray-400" />
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            ❓ Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {faqs.slice(0, 2).map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
                  >
                    {faq.q}
                    <span className="text-green-600 text-2xl">
                      {activeFaq === idx ? "−" : "+"}
                    </span>
                  </button>

                  {activeFaq === idx && (
                    <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {faqs.slice(2, 4).map((faq, idx) => {
                const faqIndex = idx + 2;

                return (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faqIndex)}
                      className="w-full text-left p-5 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
                    >
                      {faq.q}
                      <span className="text-green-600 text-2xl">
                        {activeFaq === faqIndex ? "−" : "+"}
                      </span>
                    </button>

                    {activeFaq === faqIndex && (
                      <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="rounded-xl overflow-hidden shadow-md mt-4">
                <img
                  src={Dicipline}
                  alt="Facility management FAQ"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative bg-gradient-to-r from-green-800 to-green-700 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={FacilityManagement}
              alt="Facility management background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Property?
            </h2>

            <p className="text-green-100 mb-8 text-lg">
              Partner with Acuity Groups for reliable facility management
              services in Bangalore.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Contact Our Experts <ArrowRight size={18} />
              </Link>

              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
              >
                Read More Blogs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FacilityManagementBlog;
