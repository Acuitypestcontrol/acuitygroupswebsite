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

  const pageUrl = "https://www.acuitygroups.in/blogs/learn-how";

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
    "Demystifying Facility Management: From Buzzwords to Bottom Line | Acuity Groups"
  );

  const tocSections = [
    { id: "myths", title: "Busting Common Myths" },
    { id: "key-areas", title: "Key Areas for Optimization" },
    { id: "employee-experience", title: "Employee Experience" },
    { id: "business-value", title: "Business Value" },
    { id: "why-acuity", title: "Why Acuity Groups" },
  ];

  const faqs = [
    {
      q: "What is facility management?",
      a: "Facility management is a strategic approach that balances cost, comfort, productivity and operational efficiency across buildings and workplaces.",
    },
    {
      q: "Why is preventive maintenance important?",
      a: "Preventive maintenance reduces downtime, avoids costly repairs and extends the lifespan of assets, equipment and building systems.",
    },
    {
      q: "How does Acuity Groups help with facility management?",
      a: "Acuity Groups provides integrated facility management services including housekeeping, security, maintenance, pest management and manpower support.",
    },
  ];

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Demystifying Facility Management: From Buzzwords to Bottom Line",
    description:
      "Learn how facility management improves cost control, comfort, productivity and operational efficiency for businesses.",
    image: "https://www.acuitygroups.in/static/media/Demystifying1.jpg",
    datePublished: "2024-02-22",
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
        name: "Learn How",
        item: pageUrl,
      },
    ],
  };

  const relatedBlogs = [
    {
      title: "The Importance of Facilities Management",
      link: "/blogs/the-importance-of-facilities",
      image: Demystifying2,
    },
    {
      title: "Integrated Design: From Function to Feeling",
      link: "/blogs/from-function-to-feeling",
      image: Demystifying1,
    },
    {
      title: "Professional Housekeeping Services",
      link: "/blogs/housekeeping-services",
      image: Demystifying2,
    },
  ];

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
        <title>
          Learn How Facility Management Improves Business Operations | Acuity
          Groups
        </title>

        <meta
          name="description"
          content="Learn how facility management improves cost control, productivity, maintenance, workplace comfort and operational efficiency."
        />

        <meta
          name="keywords"
          content="facility management, integrated facility management, preventive maintenance, workplace management, facility services Bangalore, Acuity Groups"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:title"
          content="Learn How Facility Management Improves Business Operations | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Facility management improves cost control, productivity, maintenance and workplace comfort."
        />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Learn How Facility Management Improves Business Operations"
        />
        <meta
          name="twitter:description"
          content="Learn how facility management improves business operations and workplace efficiency."
        />

        <script type="application/ld+json">
          {JSON.stringify(articleData)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqData)}</script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-indigo-50 via-white to-gray-50 text-gray-800 font-sans relative">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}

        {/* Hero Section */}
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
                <Link to="/blogs" className="hover:text-indigo-600 transition">
                  Blogs
                </Link>
              </li>

              <li className="text-gray-400">/</li>

              <li className="text-gray-700 font-medium">Learn How</li>
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

            {/* Main Article Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-indigo-500 pl-5 italic">
                  Facility management is much more than fixing broken equipment
                  or handling maintenance requests. It is a strategic approach
                  that balances cost, comfort, productivity and operational
                  efficiency for offices, schools, hospitals and industrial
                  facilities.
                </p>
              </div>

              <div className="my-2">
                <img
                  src={Demystifying2}
                  alt="Facility management operations team reviewing plans"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>📊 Strategic facility management planning</span>

                  <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                    Core Discipline
                  </span>
                </div>
              </div>

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
                      maintenance, reducing downtime and improving asset life.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      Myth: FM is Only a Cost
                    </h3>

                    <p className="text-gray-700">
                      Good facility management improves operations, safety,
                      productivity and long-term cost control.
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-xl hover:shadow-md transition">
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      Myth: Sustainability Always Increases Costs
                    </h3>

                    <p className="text-gray-700">
                      Sustainable practices can reduce energy consumption,
                      operational expenses and environmental impact over time.
                    </p>
                  </div>
                </div>
              </div>

              <div id="key-areas" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <TrendingUp size={28} className="text-indigo-500" /> Key Areas
                  for Optimizing Facility Management
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Space Management",
                      desc: "Maximize available space and adapt facilities to changing organizational needs.",
                      icon: Layout,
                    },
                    {
                      title: "Maintenance & Operations",
                      desc: "Preventive maintenance reduces breakdowns, delays and emergency repairs.",
                      icon: Wifi,
                    },
                    {
                      title: "Sustainability",
                      desc: "Energy-efficient systems and eco-friendly practices support long-term savings.",
                      icon: Leaf,
                    },
                    {
                      title: "Safety and Supervision",
                      desc: "Proper supervision and facility checks help maintain safe daily operations.",
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

              <div
                id="employee-experience"
                className="bg-gradient-to-r from-gray-50 to-indigo-50 p-8 rounded-2xl border border-indigo-100 scroll-mt-24"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Users size={28} className="text-indigo-500" /> Employee
                  Experience Matters
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Employees perform better when they work in safe, clean,
                  comfortable and well-maintained environments. Investing in
                  workplace quality can improve morale and support productivity.
                </p>
              </div>

              <div id="business-value" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <CheckCircle size={28} className="text-indigo-500" /> The
                  Business Value of Facility Management
                </h2>

                <div className="space-y-3">
                  {[
                    "Create better workplaces for employees and visitors.",
                    "Reduce operational and maintenance issues.",
                    "Improve productivity and daily efficiency.",
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

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
                <h3 className="text-xl font-bold text-indigo-800 mb-2 flex items-center gap-2">
                  💡 Did You Know?
                </h3>

                <p className="text-gray-700">
                  Strategic facility management helps businesses improve
                  operations, reduce disruptions and create better workplace
                  experiences.
                </p>
              </div>

              <div
                id="why-acuity"
                className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-8 rounded-2xl shadow-xl scroll-mt-24"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Unlock the Power of Facility Management?
                </h2>

                <p className="text-indigo-100 leading-relaxed text-lg">
                  Acuity Groups helps businesses manage facilities through
                  integrated services, trained manpower, housekeeping, security,
                  pest management and maintenance support. Our services help
                  your facility run smoothly and professionally.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
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

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  🎯 Conclusion
                </h2>

                <p className="text-gray-200 text-lg leading-relaxed">
                  Facility management is a strategic support system that improves
                  cost control, productivity, safety and business continuity.
                  Partner with Acuity Groups to manage your facility with better
                  structure, trained teams and reliable service support.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/blogs"
                  className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1"
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
                    src={Demystifying1}
                    alt="Acuity Groups facility management team"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-xl">Acuity Groups</h3>

                <p className="text-gray-500 text-sm mt-1">
                  Facility Management Specialists
                </p>

                <p className="text-gray-600 text-sm mt-3">
                  Professional facility management support for businesses in
                  Bangalore.
                </p>

                <div className="mt-4 flex justify-center gap-2">
                  <Phone size={18} className="text-indigo-600" />

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
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <Link
                        to={blog.link}
                        className="text-indigo-600 group-hover:text-indigo-700 group-hover:underline transition text-sm font-medium flex-1"
                      >
                        {blog.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-6 shadow-md border border-indigo-100 text-center">
                <div className="text-5xl mb-3">🚀</div>

                <h3 className="font-bold text-indigo-900 text-lg mb-2">
                  Optimize Your FM Strategy
                </h3>

                <p className="text-gray-700 text-sm mb-4">
                  Get facility management support for your business.
                </p>

                <Link
                  to="/contact"
                  className="block text-center bg-indigo-600 text-white py-2.5 rounded-full hover:bg-indigo-700 transition shadow"
                >
                  Request a Quote
                </Link>

                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={Demystifying2}
                    alt="Facility management consultation"
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
                  Strategic | Efficient | Professional
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

            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
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

        {/* Bottom CTA */}
        <section className="relative bg-gradient-to-r from-indigo-800 via-blue-800 to-indigo-900 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={Demystifying1}
              alt="Facility management strategy background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Facility Management?
            </h2>

            <p className="text-indigo-100 text-lg mb-8">
              Let Acuity Groups help you turn facility management into a
              strategic advantage.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-indigo-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
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

export default DemystifyingFacilityManagementBlog;