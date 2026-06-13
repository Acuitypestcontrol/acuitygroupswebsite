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
  Building,
  Wrench,
  Layout,
  Leaf,
  Award,
  Phone,
  BarChart,
  Thermometer,
} from "lucide-react";
import Tiof1 from "../../images/The Importance of Facilities1.jpg";
import Tiof2 from "../../images/The Importance of Facilities2.jpg";

const TheUnsungHeroesBlog = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Scroll to top and scroll listener only
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
    "https://acuitygroups.in/blogs/the-unsung-heroes",
  );
  const shareTitle = encodeURIComponent(
    "The Unsung Heroes: Facilities and the Power of Good Management | Acuity Groups",
  );

  const tocSections = [
    { id: "importance", title: "The Importance of Facilities" },
    { id: "fm-conductor", title: "FM: The Symphony Conductor" },
    { id: "impact", title: "Impact of a Well‑Managed Facility" },
    { id: "how-acuity", title: "How Acuity Groups Can Help" },
  ];

  // Structured Data: Article + FAQ + Breadcrumb
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Unsung Heroes: Facilities and the Power of Good Management",
    description:
      "Discover how professional facility management boosts productivity, reduces costs, enhances safety, and builds a strong brand image. Expert insights from Acuity Groups.",
    image:
      "https://acuitygroups.in/static/media/The%20Importance%20of%20Facilities1.jpg",
    datePublished: "2024-03-04",
    dateModified: "2025-06-01",
    author: { "@type": "Organization", name: "Acuity Groups" },
    publisher: {
      "@type": "Organization",
      name: "Acuity Groups",
      logo: {
        "@type": "ImageObject",
        url: "https://acuitygroups.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://acuitygroups.in/blogs/the-unsung-heroes",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is facility management important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Facility management ensures that buildings and services are safe, efficient, and comfortable, directly impacting productivity, costs, and brand image.",
        },
      },
      {
        "@type": "Question",
        name: "What does facility management include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It includes preventive maintenance, space optimization, safety & security, sustainability, cleaning, and compliance management.",
        },
      },
      {
        "@type": "Question",
        name: "How can Acuity Groups help my organization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acuity Groups offers customized maintenance plans, 24/7 emergency response, energy audits, space planning, and regulatory compliance services.",
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
        item: "https://acuitygroups.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://acuitygroups.in/blogs/allblogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Unsung Heroes",
        item: "https://acuitygroups.in/blogs/the-unsung-heroes",
      },
    ],
  };

  const stats = [
    {
      value: "500+",
      label: "Organizations Served",
      icon: <Building className="text-green-600 w-6 h-6" />,
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: <Award className="text-green-600 w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Emergency Support",
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
        <link
          rel="canonical"
          href="https://acuitygroups.in/blogs/the-unsung-heroes"
        />
        <title>
          The Unsung Heroes: Facilities and the Power of Good Management |
          Acuity Groups
        </title>
        <meta
          name="description"
          content="Discover how professional facility management boosts productivity, reduces costs, enhances safety, and builds a strong brand image. Expert insights from Acuity Groups."
        />
        <meta
          name="keywords"
          content="facility management, facilities management, preventive maintenance, space optimization, workplace safety, sustainability, Acuity Groups"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://acuitygroups.in/blogs/the-unsung-heroes"
        />
        <meta
          property="og:title"
          content="The Unsung Heroes: Facilities and the Power of Good Management | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Discover how professional facility management boosts productivity, reduces costs, enhances safety, and builds a strong brand image. Expert insights from Acuity Groups."
        />
        <meta
          property="og:image"
          content="https://acuitygroups.in/static/media/The%20Importance%20of%20Facilities1.jpg"
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Unsung Heroes: Facilities and the Power of Good Management"
        />
        <meta
          name="twitter:description"
          content="Discover how professional facility management boosts productivity, reduces costs, enhances safety, and builds a strong brand image."
        />
        <meta
          name="twitter:image"
          content="https://acuitygroups.in/static/media/The%20Importance%20of%20Facilities1.jpg"
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

      <div className="bg-gradient-to-br from-green-50 via-white to-gray-50 text-gray-800 font-sans relative">
        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}

        {/* Hero Section with Tiof1 */}
        <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
          <img
            src={Tiof1}
            alt="Facility management team ensuring smooth building operations"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 animate-fade-in-up">
            <span className="bg-green-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
              🏢 Facility Management
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
              The Unsung Heroes: Facilities and the Power of Good Management
            </h1>
            <div className="flex flex-wrap gap-5 mt-6 text-white/90">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <User size={18} /> Acuity Groups
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} /> March 4, 2024
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
                <Link to="/" className="hover:text-green-600 transition">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link
                  to="/blogs/allblogs"
                  className="hover:text-green-600 transition"
                >
                  Blogs
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-700 font-medium">Unsung Heroes</li>
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
                  <BookOpen size={20} className="text-green-600" />
                  <h3 className="font-bold text-gray-800 text-lg">
                    On this page
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {tocSections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-gray-600 hover:text-green-600 transition flex items-center gap-2 group"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(section.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-green-600"></span>
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
                <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-green-500 pl-5 italic">
                  Every day, we depend on facilities that support our work,
                  education, healthcare, and daily activities. From offices and
                  schools to hospitals and industrial plants, these environments
                  play a crucial role in keeping organizations productive and
                  efficient. Behind every well-functioning facility is the
                  expertise of professional facility management.
                </p>
              </div>

              {/* Tiof2 Image */}
              <div className="my-2">
                <img
                  src={Tiof2}
                  alt="Facility services team coordinating maintenance"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>🔧 Professional FM team in action</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    Core Service
                  </span>
                </div>
              </div>

              {/* The Importance of Facilities */}
              <div id="importance" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Building size={28} className="text-green-500" /> The
                  Importance of Facilities
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Facilities are more than just buildings. They are the
                  foundation of business operations, employee productivity, and
                  customer experiences. Proper management ensures these spaces
                  remain safe, functional, and efficient for everyone who uses
                  them.
                </p>
              </div>

              {/* Facility Management: The Symphony Conductor */}
              <div id="fm-conductor" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Wrench size={28} className="text-green-500" /> Facility
                  Management: The Symphony Conductor
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Facility management coordinates multiple services and
                  processes to ensure seamless operations. Like a conductor
                  leading an orchestra, facility managers bring together
                  maintenance, safety, sustainability, and space planning to
                  create a productive environment.
                </p>
              </div>

              {/* Service Cards */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  🔧 Core FM Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Preventive Maintenance",
                      desc: "Regular inspections prevent failures, reduce downtime, and extend asset lifespan.",
                      icon: Wrench,
                    },
                    {
                      title: "Space Optimization",
                      desc: "Efficient space planning improves workflow, comfort, and productivity.",
                      icon: Layout,
                    },
                    {
                      title: "Safety & Security",
                      desc: "Comprehensive measures protect occupants, visitors, and assets.",
                      icon: Shield,
                    },
                    {
                      title: "Sustainable Practices",
                      desc: "Resource-efficient strategies lower costs and environmental impact.",
                      icon: Leaf,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                        <item.icon className="text-green-600 group-hover:text-white w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact of a Well-Managed Facility */}
              <div id="impact" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Sparkles size={28} className="text-green-500" /> The Impact
                  of a Well-Managed Facility
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Boosting Productivity",
                      desc: "Comfortable, organized, and functional workspaces help employees stay focused and perform at their best.",
                    },
                    {
                      title: "Enhancing Employee Satisfaction",
                      desc: "Clean, safe, and well-maintained facilities contribute to a positive workplace experience and improved morale.",
                    },
                    {
                      title: "Reducing Operational Costs",
                      desc: "Preventive maintenance and energy-efficient solutions help minimize unexpected expenses and resource waste.",
                    },
                    {
                      title: "Building a Strong Brand Image",
                      desc: "Well-managed facilities reflect professionalism, reliability, and a commitment to quality.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-green-500 bg-white p-5 rounded-r-xl shadow-sm"
                    >
                      <h3 className="font-bold text-xl text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Did You Know? */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center gap-2">
                  💡 Did You Know?
                </h3>
                <p className="text-gray-700">
                  Organizations with proactive facility management report up to
                  25% lower operating costs and 20% higher employee
                  satisfaction. Investing in FM isn't an expense—it's a
                  strategic advantage.
                </p>
              </div>

              {/* How Acuity Groups Can Help */}
              <div
                id="how-acuity"
                className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 rounded-2xl shadow-xl scroll-mt-24"
              >
                <h2 className="text-3xl font-bold mb-4">
                  How Acuity Groups Can Help 🚀
                </h2>
                <p className="text-green-100 leading-relaxed text-lg mb-6">
                  At Acuity Groups, we provide comprehensive facility management
                  solutions tailored to the unique needs of businesses and
                  organizations.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Customized maintenance plans",
                    "24/7 emergency response support",
                    "Energy and sustainability audits",
                    "Space planning and optimization services",
                    "Compliance and regulatory management",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle
                        size={18}
                        className="text-green-200 shrink-0"
                      />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contactus"
                    className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
                  >
                    Get a Free Consultation <ArrowRight size={18} />
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
                  Facility management is the unseen force that keeps
                  organizations running efficiently. By focusing on maintenance,
                  safety, sustainability, and operational excellence, businesses
                  can create environments that support growth, productivity, and
                  long-term success. With Acuity Groups as your partner, you can
                  ensure your facilities remain efficient, safe, and ready for
                  the future.
                </p>
              </div>

              {/* Back to blogs */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/blogs/allblogs"
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-1"
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
                    src={Tiof1}
                    alt="FM Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">Acuity FM Team</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Facility Management Specialists
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  15+ years in strategic facility management.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <Phone size={18} className="text-green-600" />
                  <span className="text-sm text-gray-600">
                    24/7 Support Available
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
                        src={Tiof2}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      to="/blogs/demystifying-facility-management"
                      className="text-green-600 group-hover:text-green-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      Demystifying Facility Management
                    </Link>
                  </li>
                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={Tiof1}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      to="/blogs/preventive-maintenance"
                      className="text-green-600 group-hover:text-green-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      Preventive Maintenance Guide
                    </Link>
                  </li>
                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={Tiof2}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      to="/blogs/manufacturing-facility-management"
                      className="text-green-600 group-hover:text-green-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      Manufacturing Facility Management
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick CTA Card */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 shadow-md border border-green-100 text-center">
                <div className="text-5xl mb-3">🏢</div>
                <h3 className="font-bold text-green-900 text-lg mb-2">
                  Facility Assessment
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get a free consultation to optimize your facility management.
                </p>
                <Link
                  to="/contactus"
                  className="block text-center bg-green-600 text-white py-2.5 rounded-full hover:bg-green-700 transition shadow"
                >
                  Request a Quote
                </Link>
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={Tiof1}
                    alt="FM"
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
                  Trusted by 500+ Organizations
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Reliable | Proactive | Compliant
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
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Why is facility management important?",
                a: "Facility management ensures that buildings and services are safe, efficient, and comfortable, directly impacting productivity, costs, and brand image.",
              },
              {
                q: "What does facility management include?",
                a: "It includes preventive maintenance, space optimization, safety & security, sustainability, cleaning, and compliance management.",
              },
              {
                q: "How can Acuity Groups help my organization?",
                a: "Acuity Groups offers customized maintenance plans, 24/7 emergency response, energy audits, space planning, and regulatory compliance services.",
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
        </section>

        {/* Bottom CTA Banner with image overlay */}
        <section className="relative bg-gradient-to-r from-green-800 via-emerald-800 to-green-900 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={Tiof1}
              alt="background pattern"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Facility Management?
            </h2>
            <p className="text-green-100 text-lg mb-8">
              Let Acuity Groups transform your facilities into high‑performance
              assets.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contactus"
                className="inline-flex items-center gap-2 bg-white text-green-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
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

export default TheUnsungHeroesBlog;
