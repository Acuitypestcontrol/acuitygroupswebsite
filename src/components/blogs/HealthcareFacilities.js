import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  User,
  Clock,
  Shield,
  Sparkles,
  CheckCircle,
  ArrowRight,
  ChevronUp,
  BookOpen,
  Twitter,
  Linkedin,
  Facebook,
  Heart,
  Droplet,
  Trash2,
  Wrench,
  Award,
  Building,
  BarChart,
  Thermometer,
  Phone,
} from "lucide-react";

import bannerImg from "../../images/healthcare-facility-banner.jpg";
import hospitalMgmt from "../../images/hospital-management.jpg";
import hospitalCleaning from "../../images/hospital-cleaning.jpg";
import supportTeam from "../../images/healthcare-support-team.jpg";

const HealthcareFacilityManagementBlog = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const pageUrl =
    "https://www.acuitygroups.in/blogs/importance-of-facility-management";

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shareUrl = encodeURIComponent(pageUrl);
  const shareTitle = encodeURIComponent(
    "The Importance of Facility Management in Healthcare Facilities | Acuity Groups"
  );

  const tocSections = [
    { id: "patient-safety", title: "Patient Safety" },
    { id: "compliance", title: "Regulatory Compliance" },
    { id: "benefits", title: "Key Benefits" },
    { id: "why-acuity", title: "Why Acuity Groups" },
  ];

  const faqs = [
    {
      q: "Why is facility management important in healthcare?",
      a: "Facility management supports hygiene, patient safety, compliance, maintenance and smooth daily operations in healthcare facilities.",
    },
    {
      q: "What services does Acuity Groups offer for healthcare facilities?",
      a: "Acuity Groups provides housekeeping, sanitization support, security, maintenance, waste management support and integrated facility management for hospitals and clinics.",
    },
    {
      q: "How does facility management improve patient experience?",
      a: "Clean, safe and well-maintained environments create a better experience for patients, visitors, doctors and healthcare staff.",
    },
  ];

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Importance of Facility Management in Healthcare Facilities",
    description:
      "Learn how facility management supports hygiene, safety, compliance and operational efficiency in healthcare facilities.",
    image:
      "https://www.acuitygroups.in/static/media/healthcare-facility-banner.jpg",
    datePublished: "2025-06-01",
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

  const breadcrumbData = {
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

  const stats = [
    {
      value: "30+",
      label: "Hospitals Served",
      icon: <Building className="text-teal-600 w-6 h-6" />,
    },
    {
      value: "99%",
      label: "Quality Focus",
      icon: <Award className="text-teal-600 w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Support",
      icon: <Clock className="text-teal-600 w-6 h-6" />,
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <Calendar className="text-teal-600 w-6 h-6" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Facility Management in Healthcare Facilities | Acuity Groups
        </title>

        <meta
          name="description"
          content="Learn how facility management supports hygiene, safety, compliance and smooth operations in healthcare facilities."
        />

        <meta
          name="keywords"
          content="healthcare facility management, hospital facility management, hospital housekeeping, healthcare cleaning, healthcare maintenance, Acuity Groups"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:title"
          content="Facility Management in Healthcare Facilities | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Facility management supports hygiene, safety, compliance and operational efficiency in healthcare facilities."
        />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Facility Management in Healthcare Facilities | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Learn how facility management supports healthcare operations."
        />

        <script type="application/ld+json">
          {JSON.stringify(articleData)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqData)}</script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-teal-50 via-white to-gray-50 text-gray-800 font-sans relative">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}

        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
          <img
            src={bannerImg}
            alt="Healthcare facility management services"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl text-white">
            <span className="bg-teal-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
              🏥 Healthcare Facility Management
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
              The Importance of Facility Management in Healthcare Facilities
            </h1>

            <div className="flex flex-wrap gap-5 mt-6 text-white/90">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <User size={18} /> Acuity Groups
              </div>

              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} /> June 1, 2025
              </div>

              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock size={18} /> 5 min read
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-teal-600 transition">
                  Home
                </Link>
              </li>

              <li className="text-gray-400">/</li>

              <li>
                <Link to="/blogs" className="hover:text-teal-600 transition">
                  Blogs
                </Link>
              </li>

              <li className="text-gray-400">/</li>

              <li className="text-gray-700 font-medium">
                Healthcare Facility Management
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

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Table of Contents */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-gray-100">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                  <BookOpen size={20} className="text-teal-600" />
                  <h3 className="font-bold text-gray-800 text-lg">
                    On this page
                  </h3>
                </div>

                <ul className="space-y-2 text-sm">
                  {tocSections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-gray-600 hover:text-teal-600 transition flex items-center gap-2 group"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(section.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-teal-600"></span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-around">
                    <button
                      onClick={() =>
                        window.open(
                          `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
                          "_blank"
                        )
                      }
                      className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition text-gray-600 hover:text-blue-500"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={18} />
                    </button>

                    <button
                      onClick={() =>
                        window.open(
                          `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
                          "_blank"
                        )
                      }
                      className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition text-gray-600 hover:text-blue-700"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </button>

                    <button
                      onClick={() =>
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
                          "_blank"
                        )
                      }
                      className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition text-gray-600 hover:text-blue-600"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Article */}
            <div className="lg:col-span-6 space-y-8">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-teal-500 pl-5 italic">
                  Healthcare facilities require strong standards of cleanliness,
                  safety and operational efficiency. Effective facility
                  management plays an important role in supporting patient care
                  while helping hospitals and healthcare centers operate
                  smoothly.
                </p>
              </div>

              <div className="my-2">
                <img
                  src={hospitalMgmt}
                  alt="Healthcare facility management team"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>🏥 Healthcare facility management support</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">
                    Core Service
                  </span>
                </div>
              </div>

              <div id="patient-safety" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart size={28} className="text-teal-500" /> Supporting
                  Patient Safety
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Clean and properly maintained healthcare environments help
                  support hygiene, safety and better patient experience.
                  Facility management also helps ensure that critical building
                  systems and support services remain reliable for daily
                  operations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  🔧 Core Facility Management Services
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Hygiene & Sanitization",
                      desc: "Support cleaner healthcare environments through professional cleaning and disinfection routines.",
                      icon: Droplet,
                    },
                    {
                      title: "Security Services",
                      desc: "Support safety for patients, visitors and healthcare staff through access control and security manpower.",
                      icon: Shield,
                    },
                    {
                      title: "Maintenance Support",
                      desc: "Help maintain facility systems, electrical points, plumbing and daily operational requirements.",
                      icon: Wrench,
                    },
                    {
                      title: "Waste Management Support",
                      desc: "Support safe waste handling practices as per healthcare facility requirements.",
                      icon: Trash2,
                    },
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="group bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 hover:shadow-lg transition"
                    >
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                        <service.icon className="text-teal-600 group-hover:text-white w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {service.title}
                      </h3>

                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={hospitalCleaning}
                  alt="Hospital cleaning and sanitization service"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  🧼 Healthcare cleaning support
                </div>
              </div>

              <div id="compliance" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle size={28} className="text-teal-500" />{" "}
                  Maintaining Standards and Compliance
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Healthcare facilities need consistent hygiene, safety and
                  service standards. Professional facility management helps
                  maintain cleaning schedules, manpower coordination, maintenance
                  support and routine checks for smoother operations.
                </p>
              </div>

              <div className="relative">
                <img
                  src={supportTeam}
                  alt="Healthcare support team coordinating facility services"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  👥 Facility coordination team
                </div>
              </div>

              <div id="benefits" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Sparkles size={28} className="text-teal-500" /> Key Benefits
                  of Professional FM
                </h2>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Improved hygiene support",
                    "Better facility operations",
                    "Reliable maintenance support",
                    "Enhanced staff productivity",
                    "Cleaner patient areas",
                    "Better visitor experience",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm"
                    >
                      <CheckCircle
                        size={18}
                        className="text-teal-500 shrink-0"
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                <h3 className="text-xl font-bold text-teal-800 mb-2 flex items-center gap-2">
                  💡 Did You Know?
                </h3>

                <p className="text-gray-700">
                  Well-managed healthcare facilities create a cleaner, safer and
                  more organized environment for patients, visitors and staff.
                </p>
              </div>

              <div
                id="why-acuity"
                className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-8 rounded-2xl shadow-xl scroll-mt-24"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose Acuity Groups for Healthcare FM?
                </h2>

                <p className="text-teal-100 leading-relaxed text-lg">
                  Acuity Groups provides professional facility management support
                  for hospitals, clinics and healthcare properties. From
                  housekeeping and maintenance to security and manpower support,
                  our team helps maintain smooth day-to-day operations.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
                  >
                    Partner With Us <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  🎯 Conclusion
                </h2>

                <p className="text-gray-200 text-lg leading-relaxed">
                  Facility management is essential for safe, clean and efficient
                  healthcare environments. Acuity Groups provides healthcare
                  facility solutions that support daily operations, hygiene,
                  safety and service quality.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/blogs"
                  className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center gap-1"
                >
                  ← Back to all blogs
                </Link>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-3 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={supportTeam}
                    alt="Acuity Groups healthcare facility team"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-xl">Acuity Groups</h3>

                <p className="text-gray-500 text-sm mt-1">
                  Facility Management Specialists
                </p>

                <p className="text-gray-600 text-sm mt-3">
                  Professional facility management support for healthcare
                  properties in Bangalore.
                </p>

                <div className="mt-4 flex justify-center gap-2">
                  <Phone size={18} className="text-teal-600" />
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
                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={hospitalMgmt}
                        alt="The Importance of Facilities Management"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <Link
                      to="/blogs/the-importance-of-facilities"
                      className="text-teal-600 group-hover:text-teal-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      The Importance of Facilities Management
                    </Link>
                  </li>

                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={hospitalCleaning}
                        alt="Integrated Design From Function to Feeling"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <Link
                      to="/blogs/from-function-to-feeling"
                      className="text-teal-600 group-hover:text-teal-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      Integrated Design: From Function to Feeling
                    </Link>
                  </li>

                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={bannerImg}
                        alt="Integrated Facility Management Benefits"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <Link
                      to="/blogs/why-integrated-facility-management"
                      className="text-teal-600 group-hover:text-teal-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      Why Integrated Facility Management Matters
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-6 shadow-md border border-teal-100 text-center">
                <div className="text-5xl mb-3">🏥</div>

                <h3 className="font-bold text-teal-900 text-lg mb-2">
                  Healthcare Facility Support
                </h3>

                <p className="text-gray-700 text-sm mb-4">
                  Get support for your hospital, clinic or healthcare property.
                </p>

                <Link
                  to="/contact"
                  className="block text-center bg-teal-600 text-white py-2.5 rounded-full hover:bg-teal-700 transition shadow"
                >
                  Request a Quote
                </Link>

                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={hospitalMgmt}
                    alt="Healthcare facility management quote"
                    className="w-full h-20 object-cover"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 text-center shadow-lg border">
                <div className="flex justify-center gap-0.5 text-yellow-400 text-2xl mb-2">
                  ★★★★★
                </div>

                <p className="font-semibold text-gray-800">
                  Trusted Facility Management Support
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Safe | Clean | Professional
                </p>

                <div className="flex justify-center gap-4 mt-3">
                  <Thermometer size={20} className="text-gray-400" />
                  <BarChart size={20} className="text-gray-400" />
                  <Award size={20} className="text-gray-400" />
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Frequently Asked Questions
            </h2>

            <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  {faq.q}
                  <span className="text-teal-600 text-2xl">
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
        </section>

        {/* Bottom CTA */}
        <section className="relative bg-gradient-to-r from-teal-800 via-cyan-800 to-teal-900 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={bannerImg}
              alt="Healthcare facility management background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Improve Your Healthcare Facility?
            </h2>

            <p className="text-teal-100 text-lg mb-8">
              Partner with Acuity Groups for professional facility management
              support.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Contact Our Experts <ArrowRight size={18} />
              </Link>

              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
              >
                Browse All Blogs
              </Link>
            </div>
          </div>
        </section>

        <style>{`
          .scroll-mt-24 {
            scroll-margin-top: 6rem;
          }
        `}</style>
      </div>
    </>
  );
};

export default HealthcareFacilityManagementBlog;