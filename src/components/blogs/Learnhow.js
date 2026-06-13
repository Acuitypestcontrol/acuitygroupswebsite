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
  Wifi,
  Leaf,
  Layout,
  Users,
  Award,
  Building,
  Phone,
  BarChart,
  Thermometer,
} from "lucide-react";
import Demystifying1 from "../../images/Demystifying1.jpg";
import Demystifying2 from "../../images/Demystifying2.jpg";

const DemystifyingFacilityManagementBlog = () => {
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
    "https://acuitygroups.in/blogs/demystifying-facility-management",
  );
  const shareTitle = encodeURIComponent(
    "Demystifying Facility Management: From Buzzwords to Bottom Line | Acuity Groups",
  );

  const tocSections = [
    { id: "myths", title: "Busting Common Myths" },
    { id: "key-areas", title: "Key Areas for Optimization" },
    { id: "employee-experience", title: "Employee Experience" },
    { id: "business-value", title: "Business Value" },
    { id: "why-acuity", title: "Why Acuity Groups" },
  ];

  // Structured Data: Article + FAQ + Breadcrumb
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Demystifying Facility Management: From Buzzwords to Bottom Line",
    description:
      "Discover the truth about facility management: strategic approach balancing cost, comfort, productivity, and efficiency. Expert insights from Acuity Groups.",
    image: "https://acuitygroups.in/static/media/Demystifying1.jpg",
    datePublished: "2024-02-22",
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
      "@id": "https://acuitygroups.in/blogs/demystifying-facility-management",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is facility management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Facility management is a strategic approach that balances cost, comfort, productivity, and operational efficiency, going beyond reactive maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "Why is preventive maintenance important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Preventive maintenance reduces downtime, avoids costly repairs, and extends the lifespan of assets and equipment.",
        },
      },
      {
        "@type": "Question",
        name: "How does Acuity Groups help with facility management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acuity Groups provides strategic planning, preventive maintenance, technology integration, and sustainable solutions to optimize facility operations and support business growth.",
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
        name: "Demystifying Facility Management",
        item: "https://acuitygroups.in/blogs/demystifying-facility-management",
      },
    ],
  };

  const stats = [
    {
      value: "150+",
      label: "Organizations Served",
      icon: <Building className="text-indigo-600 w-6 h-6" />,
    },
    {
      value: "30%",
      label: "Cost Reduction Avg",
      icon: <TrendingUp className="text-indigo-600 w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Support",
      icon: <Clock className="text-indigo-600 w-6 h-6" />,
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <Calendar className="text-indigo-600 w-6 h-6" />,
    },
  ];

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://acuitygroups.in/blogs/demystifying-facility-management"
        />
        <title>
          Demystifying Facility Management: From Buzzwords to Bottom Line |
          Acuity Groups
        </title>
        <meta
          name="description"
          content="Discover the truth about facility management: strategic approach balancing cost, comfort, productivity, and efficiency. Expert insights from Acuity Groups."
        />
        <meta
          name="keywords"
          content="facility management, FM strategy, preventive maintenance, space management, sustainability, FM software, Acuity Groups"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://acuitygroups.in/blogs/demystifying-facility-management"
        />
        <meta
          property="og:title"
          content="Demystifying Facility Management: From Buzzwords to Bottom Line | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Discover the truth about facility management: strategic approach balancing cost, comfort, productivity, and efficiency. Expert insights from Acuity Groups."
        />
        <meta
          property="og:image"
          content="https://acuitygroups.in/static/media/Demystifying1.jpg"
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Demystifying Facility Management: From Buzzwords to Bottom Line"
        />
        <meta
          name="twitter:description"
          content="Discover the truth about facility management: strategic approach balancing cost, comfort, productivity, and efficiency."
        />
        <meta
          name="twitter:image"
          content="https://acuitygroups.in/static/media/Demystifying1.jpg"
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

      <div className="bg-gradient-to-br from-indigo-50 via-white to-gray-50 text-gray-800 font-sans relative">
        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}

        {/* Hero Section with Demystifying1 */}
        <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
          <img
            src={Demystifying1}
            alt="Facility management strategy meeting with professionals"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl text-white">
            <span className="bg-indigo-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
              🔧 Facility Management Strategy
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
              Demystifying Facility Management: From Buzzwords to Bottom Line
            </h1>
            <div className="flex flex-wrap gap-5 mt-6 text-white/90">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <User size={18} /> Acuity Groups
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} /> Feb 22, 2024
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock size={18} /> 6 min read
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
                <Link to="/" className="hover:text-indigo-600 transition">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link
                  to="/blogs/allblogs"
                  className="hover:text-indigo-600 transition"
                >
                  Blogs
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-700 font-medium">Demystifying FM</li>
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
                  <BookOpen size={20} className="text-indigo-600" />
                  <h3 className="font-bold text-gray-800 text-lg">
                    On this page
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {tocSections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-gray-600 hover:text-indigo-600 transition flex items-center gap-2 group"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(section.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-indigo-600"></span>
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
                <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-indigo-500 pl-5 italic">
                  Facility Management (FM) is much more than fixing broken
                  equipment or handling maintenance requests. It is a strategic
                  approach that balances cost, comfort, productivity, and
                  operational efficiency. Whether managing offices, schools,
                  hospitals, or industrial facilities, an effective FM strategy
                  can significantly improve business performance.
                </p>
              </div>

              {/* Demystifying2 Image */}
              <div className="my-2">
                <img
                  src={Demystifying2}
                  alt="Facility management operations team reviewing plans"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>📊 Strategic FM planning session</span>
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                    Core Discipline
                  </span>
                </div>
              </div>

              {/* Busting Myths */}
              <div id="myths" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Sparkles size={28} className="text-indigo-500" /> Busting
                  Common Facility Management Myths
                </h2>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-red-700 mb-2">
                      Myth: FM is Only About Reactive Maintenance
                    </h3>
                    <p className="text-gray-700">
                      Modern facility management focuses on preventive
                      maintenance, reducing downtime, avoiding costly repairs,
                      and improving asset lifespan.
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      Myth: FM Software is a Luxury
                    </h3>
                    <p className="text-gray-700">
                      Today's technology helps automate tasks, monitor
                      performance, improve communication, and provide valuable
                      insights for decision-making.
                    </p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      Myth: Sustainability Increases Costs
                    </h3>
                    <p className="text-gray-700">
                      Sustainable practices often reduce energy consumption,
                      operational expenses, and environmental impact over the
                      long term.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Areas for Optimization */}
              <div id="key-areas" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <TrendingUp size={28} className="text-indigo-500" /> Key Areas
                  for Optimizing Your FM Strategy
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Space Management",
                      desc: "Maximize available space and adapt to changing organizational needs while maintaining comfort and efficiency.",
                      icon: Layout,
                    },
                    {
                      title: "Maintenance & Operations",
                      desc: "Preventive maintenance reduces breakdowns, minimizes downtime, and extends equipment lifespan.",
                      icon: Wifi,
                    },
                    {
                      title: "Sustainability",
                      desc: "Energy-efficient systems and eco-friendly practices lower costs while supporting environmental responsibility.",
                      icon: Leaf,
                    },
                    {
                      title: "Technology",
                      desc: "FM software enables better planning, automated workflows, and data-driven decision-making.",
                      icon: Shield,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500 hover:shadow-lg transition"
                    >
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                        <item.icon className="text-indigo-600 group-hover:text-white w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Employee Experience */}
              <div
                id="employee-experience"
                className="bg-gradient-to-r from-gray-50 to-indigo-50 p-8 rounded-2xl border border-indigo-100 scroll-mt-24"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Users size={28} className="text-indigo-500" /> Employee
                  Experience Matters
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Employees perform better when they work in safe, comfortable,
                  and well-maintained environments. Investing in workplace
                  quality can improve morale, increase productivity, and
                  strengthen employee retention.
                </p>
              </div>

              {/* Business Value */}
              <div id="business-value" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <CheckCircle size={28} className="text-indigo-500" /> The
                  Business Value of Facility Management
                </h2>
                <div className="space-y-3">
                  {[
                    "Attract and retain top talent with better workplaces.",
                    "Reduce operational and maintenance costs.",
                    "Improve productivity and operational efficiency.",
                    "Strengthen brand image and customer confidence.",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm"
                    >
                      <CheckCircle
                        size={20}
                        className="text-indigo-500 shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Did You Know? */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
                <h3 className="text-xl font-bold text-indigo-800 mb-2 flex items-center gap-2">
                  💡 Did You Know?
                </h3>
                <p className="text-gray-700">
                  Organizations with strategic facility management report up to
                  25% lower operating costs and 20% higher employee
                  satisfaction. FM isn't just maintenance—it's a competitive
                  advantage.
                </p>
              </div>

              {/* Why Acuity Groups */}
              <div
                id="why-acuity"
                className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-8 rounded-2xl shadow-xl scroll-mt-24"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Unlock the Power of Facility Management? 🚀
                </h2>
                <p className="text-indigo-100 leading-relaxed text-lg">
                  At Acuity Groups, we help businesses optimize their facilities
                  through strategic planning, preventive maintenance,
                  technology, and sustainable solutions. Our expertise ensures
                  your facility operates efficiently while supporting long-term
                  growth and success.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contactus"
                    className="inline-flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
                  >
                    Let's Talk Strategy <ArrowRight size={18} />
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
                  Facility management is a strategic enabler that drives cost
                  savings, productivity, and business resilience. By debunking
                  myths and embracing modern FM practices, organizations can
                  unlock significant value. Partner with Acuity Groups to
                  transform your facility management from a cost center into a
                  competitive advantage.
                </p>
              </div>

              {/* Back to blogs */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/blogs/allblogs"
                  className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1"
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
                    src={Demystifying1}
                    alt="FM Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">Acuity FM Team</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Facility Management Strategists
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  15+ years of strategic FM experience.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <Phone size={18} className="text-indigo-600" />
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
                        src={Demystifying2}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      to="/blogs/TheImportanceFacilities"
                      className="text-indigo-600 group-hover:text-indigo-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      The Importance of Facilities Management
                    </Link>
                  </li>
                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={Demystifying1}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      to="/blogs/FromFunction"
                      className="text-indigo-600 group-hover:text-indigo-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      Integrated Design: From Function to Feeling
                    </Link>
                  </li>
                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={Demystifying2}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      to="/blogs/HousekeepingServices"
                      className="text-indigo-600 group-hover:text-indigo-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      Professional Housekeeping Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick CTA Card */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-6 shadow-md border border-indigo-100 text-center">
                <div className="text-5xl mb-3">🚀</div>
                <h3 className="font-bold text-indigo-900 text-lg mb-2">
                  Optimize Your FM Strategy
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get a free consultation to transform your facility management.
                </p>
                <Link
                  to="/contactus"
                  className="block text-center bg-indigo-600 text-white py-2.5 rounded-full hover:bg-indigo-700 transition shadow"
                >
                  Request a Quote
                </Link>
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={Demystifying2}
                    alt="Strategy"
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
                  Trusted by 150+ Organizations
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Strategic | Efficient | Sustainable
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
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What is facility management?",
                a: "Facility management is a strategic approach that balances cost, comfort, productivity, and operational efficiency, going beyond reactive maintenance.",
              },
              {
                q: "Why is preventive maintenance important?",
                a: "Preventive maintenance reduces downtime, avoids costly repairs, and extends the lifespan of assets and equipment.",
              },
              {
                q: "How does Acuity Groups help with facility management?",
                a: "Acuity Groups provides strategic planning, preventive maintenance, technology integration, and sustainable solutions to optimize facility operations and support business growth.",
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
                  <span className="text-indigo-600 text-2xl">
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
        <section className="relative bg-gradient-to-r from-indigo-800 via-blue-800 to-indigo-900 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={Demystifying1}
              alt="background pattern"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Facility Management?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Let Acuity Groups help you turn FM into a strategic advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contactus"
                className="inline-flex items-center gap-2 bg-white text-indigo-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
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

export default DemystifyingFacilityManagementBlog;
