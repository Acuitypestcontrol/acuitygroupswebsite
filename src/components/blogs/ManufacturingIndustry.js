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
  TrendingUp,
  Wrench,
  HardHat,
  Factory,
  Award,
  Phone,
  BarChart,
  Thermometer,
} from "lucide-react";
import Industries from "../../images/IndustrialFacility.jpg";
import Industries1 from "../../images/industrial1.jpg";
import Industries2 from "../../images/industrial3.jpg";
import Industries3 from "../../images/industrial4.jpg";

const ManufacturingFacilityManagementBlog = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Scroll to top and scroll listener
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

  const shareUrl = encodeURIComponent(
    "https://www.acuitygroups.in/blogs/manufacturing-facility-management",
  );
  const shareTitle = encodeURIComponent(
    "The Role of Facility Management in Manufacturing Excellence | Acuity Groups",
  );

  const tocSections = [
    { id: "efficient-operations", title: "Supporting Efficient Operations" },
    { id: "safety-compliance", title: "Workplace Safety & Compliance" },
    { id: "benefits", title: "Benefits for Manufacturers" },
    { id: "why-acuity", title: "Why Choose Acuity Groups" },
  ];

  // Structured Data: Article + FAQ + Breadcrumb
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Role of Facility Management in Manufacturing Excellence",
    description:
      "Enhance equipment reliability, safety, and compliance in your factory. Explore expert manufacturing facility management solutions from Acuity Groups.",
    image: "https://www.acuitygroups.in/static/media/IndustrialFacility.jpg",
    datePublished: "2025-06-01",
    dateModified: "2025-06-01",
    author: { "@type": "Organization", name: "Acuity Groups" },
    publisher: {
      "@type": "Organization",
      name: "Acuity Groups",
      logo: {
        "@type": "ImageObject",
        url: "https://www.acuitygroups.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.acuitygroups.in/blogs/manufacturing-facility-management",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is facility management important in manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It ensures equipment reliability, workplace safety, regulatory compliance, and operational efficiency, reducing downtime and costs.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Acuity Groups offer for manufacturing facilities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acuity Groups provides preventive maintenance, industrial housekeeping, security, skilled manpower, and integrated facility management tailored to manufacturing environments.",
        },
      },
      {
        "@type": "Question",
        name: "How does facility management reduce downtime?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Through preventive maintenance, real-time monitoring, and rapid response teams, facility management minimizes unexpected breakdowns and production losses.",
        },
      },
    ],
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
        item: "https://www.acuitygroups.in/blogs/allblogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Manufacturing Facility Management",
        item: "https://www.acuitygroups.in/blogs/manufacturing-facility-management",
      },
    ],
  };

  const stats = [
    {
      value: "80+",
      label: "Manufacturers Served",
      icon: <Factory className="text-orange-600 w-6 h-6" />,
    },
    {
      value: "35%",
      label: "Downtime Reduction",
      icon: <TrendingUp className="text-orange-600 w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Support",
      icon: <Clock className="text-orange-600 w-6 h-6" />,
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <Calendar className="text-orange-600 w-6 h-6" />,
    },
  ];

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/blogs/manufacturing-industry"
        />
        <title>
          The Role of Facility Management in Manufacturing Excellence | Acuity
          Groups LLP
        </title>
        <meta
          name="description"
          content="Discover how facility management improves manufacturing efficiency, equipment reliability and workplace safety in Bangalore."
        />
        <meta
          name="keywords"
          content="manufacturing facility management, industrial maintenance, preventive maintenance, factory housekeeping, industrial security, manufacturing compliance, Acuity Groups"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.acuitygroups.in/blogs/manufacturing-industry"
        />
        <meta
          property="og:title"
          content="The Role of Facility Management in Manufacturing Excellence | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Discover how professional facility management enhances equipment reliability, workplace safety, operational efficiency, and compliance in manufacturing. Expert insights from Acuity Groups."
        />
        <meta
          property="og:image"
          content="https://www.acuitygroups.in/static/media/IndustrialFacility.jpg"
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Role of Facility Management in Manufacturing Excellence"
        />
        <meta
          name="twitter:description"
          content="Discover how professional facility management enhances equipment reliability, workplace safety, operational efficiency, and compliance in manufacturing."
        />
        <meta
          name="twitter:image"
          content="https://www.acuitygroups.in/static/media/IndustrialFacility.jpg"
        />
      </Helmet>

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="bg-gradient-to-br from-orange-50 via-white to-gray-50 text-gray-800 font-sans relative">
        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}

        {/* Hero Section with Industries image */}
        <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
          <img
            src={Industries}
            alt="Manufacturing facility with automated machinery and professional staff"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl text-white">
            <span className="bg-orange-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
              🏭 Manufacturing Industry
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
              The Role of Facility Management in Manufacturing Excellence
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
                <Link to="/" className="hover:text-orange-600 transition">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link to="/blogs" className="hover:text-orange-600 transition">
                  Blogs
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-700 font-medium">Manufacturing FM</li>
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
            {/* Table of Contents - Left */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-gray-100">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                  <BookOpen size={20} className="text-orange-600" />
                  <h3 className="font-bold text-gray-800 text-lg">
                    On this page
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {tocSections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-gray-600 hover:text-orange-600 transition flex items-center gap-2 group"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(section.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-orange-600"></span>
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
                          "_blank",
                        )
                      }
                      className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition text-gray-600 hover:text-blue-500"
                    >
                      <Twitter size={18} />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
                          "_blank",
                        )
                      }
                      className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition text-gray-600 hover:text-blue-700"
                    >
                      <Linkedin size={18} />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
                          "_blank",
                        )
                      }
                      className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition text-gray-600 hover:text-blue-600"
                    >
                      <Facebook size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Article Column */}
            <div className="lg:col-span-6 space-y-8">
              {/* Introduction */}
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-orange-500 pl-5 italic">
                  Manufacturing facilities operate in highly demanding
                  environments where equipment reliability, employee safety, and
                  operational efficiency are critical. Professional facility
                  management helps industries maintain productivity while
                  minimizing risks and costs.
                </p>
              </div>

              {/* Industries1 Image */}
              <div className="my-2">
                <img
                  src={Industries1}
                  alt="Industrial operations with advanced machinery"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>🏭 Modern manufacturing facility</span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                    Core Operations
                  </span>
                </div>
              </div>

              {/* Supporting Efficient Operations */}
              <div id="efficient-operations" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Factory size={28} className="text-orange-500" /> Supporting
                  Efficient Operations
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Every minute of downtime can affect production targets and
                  profitability. Facility management ensures machinery,
                  infrastructure, and support services operate efficiently
                  through proactive monitoring and rapid response.
                </p>
              </div>

              {/* Service Cards */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  🔧 Core Manufacturing FM Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Preventive Maintenance",
                      desc: "Reduce breakdowns and improve equipment lifespan with scheduled inspections.",
                      icon: Wrench,
                    },
                    {
                      title: "Industrial Housekeeping",
                      desc: "Maintain clean and organized production environments to enhance safety and efficiency.",
                      icon: Sparkles,
                    },
                    {
                      title: "Security Services",
                      desc: "Protect assets, inventory, and employees with 24/7 surveillance and access control.",
                      icon: Shield,
                    },
                    {
                      title: "Skilled Manpower",
                      desc: "Ensure availability of trained workforce resources for critical operations.",
                      icon: HardHat,
                    },
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="group bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:shadow-lg transition"
                    >
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                        <service.icon className="text-orange-600 group-hover:text-white w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries2 Image */}
              <div className="relative">
                <img
                  src={Industries2}
                  alt="Factory maintenance team inspecting equipment"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  🔧 Preventive maintenance inspection
                </div>
              </div>

              {/* Workplace Safety & Compliance */}
              <div id="safety-compliance" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Shield size={28} className="text-orange-500" /> Workplace
                  Safety & Compliance
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Manufacturing industries must comply with safety regulations
                  (OSHA, ISO, local codes) and operational standards. Facility
                  management helps reduce workplace hazards, conduct regular
                  safety audits, and ensure compliance with industry norms,
                  protecting both workers and the bottom line.
                </p>
              </div>

              {/* Industries3 Image */}
              <div className="relative">
                <img
                  src={Industries3}
                  alt="Manufacturing team reviewing safety protocols"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  👷 Safety protocol review
                </div>
              </div>

              {/* Benefits Section */}
              <div id="benefits" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <TrendingUp size={28} className="text-orange-500" /> Benefits
                  for Manufacturers
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Reduced downtime and production losses",
                    "Improved equipment performance and lifespan",
                    "Better workplace safety and fewer accidents",
                    "Enhanced overall productivity",
                    "Regulatory compliance (OSHA, ISO)",
                    "Lower operational and maintenance costs",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm"
                    >
                      <CheckCircle
                        size={18}
                        className="text-orange-500 shrink-0"
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Did You Know? */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-orange-800 mb-2 flex items-center gap-2">
                  💡 Did You Know?
                </h3>
                <p className="text-gray-700">
                  Manufacturing facilities with proactive facility management
                  experience up to 40% less unplanned downtime and 25% lower
                  maintenance costs. Strategic FM isn't an expense—it's a
                  competitive advantage.
                </p>
              </div>

              {/* Why Acuity Groups */}
              <div
                id="why-acuity"
                className="bg-gradient-to-br from-orange-600 to-red-700 text-white p-8 rounded-2xl shadow-xl scroll-mt-24"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose Acuity Groups for Manufacturing FM? 🏭
                </h2>
                <p className="text-orange-100 leading-relaxed text-lg">
                  Acuity Groups delivers specialized facility management
                  solutions for manufacturing plants, warehouses, and industrial
                  complexes. From preventive maintenance and industrial
                  housekeeping to security and skilled manpower, we ensure your
                  production runs smoothly, safely, and cost-effectively.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
                  >
                    Optimize Your Facility <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  🎯 Conclusion
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Facility management is a key driver of manufacturing success.
                  By integrating maintenance, housekeeping, security, and
                  manpower solutions, businesses can improve efficiency, safety,
                  and long-term operational performance. Partner with Acuity
                  Groups to transform your manufacturing facility into a
                  benchmark of excellence.
                </p>
              </div>

              {/* Back to blogs */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/blogs/allblogs"
                  className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1"
                >
                  ← Back to all blogs
                </Link>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-3 space-y-8">
              {/* Expert Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={Industries1}
                    alt="Manufacturing FM Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">Acuity Industrial Team</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Manufacturing FM Specialists
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  15+ years in industrial facility management.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <Phone size={18} className="text-orange-600" />
                  <span className="text-sm text-gray-600">
                    24/7 Emergency Support
                  </span>
                </div>
              </div>

              {/* Related Articles with thumbnails */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  📚 Related Articles
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={Industries2}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      to="/blogs/the-importance-of-facilities"
                      className="text-orange-600 group-hover:text-orange-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      The Importance of Facilities Management
                    </Link>
                  </li>
                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={Industries3}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      to="/blogs/manpower-outsourcing"
                      className="text-orange-600 group-hover:text-orange-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      Benefits of Manpower Outsourcing
                    </Link>
                  </li>
                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={Industries}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      to="/blogs/housekeeping-services"
                      className="text-orange-600 group-hover:text-orange-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      Professional Housekeeping Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick CTA Card */}
              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 shadow-md border border-orange-100 text-center">
                <div className="text-5xl mb-3">🏭</div>
                <h3 className="font-bold text-orange-900 text-lg mb-2">
                  Industrial FM Solutions
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get a free consultation for your manufacturing facility.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-orange-600 text-white py-2.5 rounded-full hover:bg-orange-700 transition shadow"
                >
                  Request a Quote
                </Link>
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={Industries2}
                    alt="Industrial"
                    className="w-full h-20 object-cover"
                  />
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-white rounded-2xl p-5 text-center shadow-lg border">
                <div className="flex justify-center gap-0.5 text-yellow-400 text-2xl mb-2">
                  ★★★★★
                </div>
                <p className="font-semibold text-gray-800">
                  Trusted by 80+ Manufacturers
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Reliable | Safe | Efficient
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

        {/* FAQ Section with Accordion */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Why is facility management important in manufacturing?",
                a: "It ensures equipment reliability, workplace safety, regulatory compliance, and operational efficiency, reducing downtime and costs.",
              },
              {
                q: "What services does Acuity Groups offer for manufacturing facilities?",
                a: "Acuity Groups provides preventive maintenance, industrial housekeeping, security, skilled manpower, and integrated facility management tailored to manufacturing environments.",
              },
              {
                q: "How does facility management reduce downtime?",
                a: "Through preventive maintenance, real-time monitoring, and rapid response teams, facility management minimizes unexpected breakdowns and production losses.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  {faq.q}
                  <span className="text-orange-600 text-2xl">
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

        {/* Bottom CTA Banner with image overlay */}
        <section className="relative bg-gradient-to-r from-orange-800 via-red-800 to-orange-900 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={Industries}
              alt="background pattern"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Boost Your Manufacturing Efficiency?
            </h2>
            <p className="text-orange-100 text-lg mb-8">
              Let Acuity Groups optimize your facility for peak performance.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Contact Our Experts <ArrowRight size={18} />
              </Link>
              <Link
                to="/blogs/allblogs"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
              >
                Browse All Blogs
              </Link>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
          .scroll-mt-24 { scroll-margin-top: 6rem; }
        `}</style>
      </div>
    </>
  );
};

export default ManufacturingFacilityManagementBlog;
