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
  Building,
  Smile,
  TrendingUp,
  Award,
  Phone,
  BarChart,
  Thermometer,
} from "lucide-react";

import House from "../../images/home1.jpg";
import House1 from "../../images/home2.jpg";
import House2 from "../../images/home3.jpg";
import House3 from "../../images/home4.jpg";
import House4 from "../../images/home1.jpg";

const ProfessionalHousekeepingBlog = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const pageUrl = "https://www.acuitygroups.in/blogs/housekeeping-services";

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
    "Professional Housekeeping Services in Commercial Spaces | Acuity Groups",
  );

  const tocSections = [
    { id: "why-matters", title: "Why Housekeeping Matters" },
    { id: "healthier-workplace", title: "Healthier Workplace" },
    { id: "customer-experience", title: "Customer Experience" },
    { id: "why-professional", title: "Why Professional" },
    { id: "why-acuity", title: "Why Acuity Groups" },
  ];

  const faqs = [
    {
      q: "Why is professional housekeeping important for businesses?",
      a: "Professional housekeeping helps maintain hygiene, safety, better first impressions and a clean working environment.",
    },
    {
      q: "What services does Acuity Groups offer in housekeeping?",
      a: "Acuity Groups provides housekeeping, commercial cleaning, deep cleaning, washroom hygiene and facility cleaning support for offices, hotels, schools, hospitals and commercial spaces.",
    },
    {
      q: "How does housekeeping improve employee productivity?",
      a: "A clean and organized workplace reduces distractions, supports better hygiene and creates a more comfortable work environment.",
    },
  ];

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The Importance of Professional Housekeeping Services in Commercial Spaces",
    description:
      "Learn how professional housekeeping services improve hygiene, safety, productivity and customer experience in commercial spaces.",
    image: "https://www.acuitygroups.in/static/media/home1.jpg",
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
        name: "Housekeeping Services",
        item: pageUrl,
      },
    ],
  };

  const relatedBlogs = [
    {
      title: "The Importance of Facilities Management",
      link: "/blogs/the-importance-of-facilities",
      image: House2,
    },
    {
      title: "Why Integrated Facility Management Matters",
      link: "/blogs/professional-security-services",
      image: House3,
    },
    {
      title: "Repairing and Maintenance Services",
      link: "/blogs/repairing-maintenance",
      image: House4,
    },
  ];

  const stats = [
    {
      value: "200+",
      label: "Businesses Served",
      icon: <Building className="text-green-600 w-6 h-6" />,
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
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
        <title>Professional Housekeeping Services | Acuity Groups LLP</title>
        <meta
          name="description"
          content="Learn how professional housekeeping services improve hygiene, workplace safety and productivity for businesses in Bangalore."
        />

        <meta
          name="keywords"
          content="housekeeping services Bangalore, professional housekeeping, commercial cleaning, office cleaning, deep cleaning services, facility cleaning, Acuity Groups"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:title"
          content="Professional Housekeeping Services | Acuity Groups Bangalore"
        />
        <meta
          property="og:description"
          content="Professional housekeeping services improve hygiene, safety and customer experience in commercial spaces."
        />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Professional Housekeeping Services | Acuity Groups Bangalore"
        />
        <meta
          name="twitter:description"
          content="Learn how housekeeping services improve hygiene and workplace experience."
        />

        <script type="application/ld+json">
          {JSON.stringify(articleData)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqData)}</script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-green-50 via-white to-gray-50 text-gray-800 font-sans relative">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}

        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
          <img
            src={House}
            alt="Professional housekeeping team cleaning a commercial space"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl text-white">
            <span className="bg-green-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
              🧹 Professional Housekeeping
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
              The Importance of Professional Housekeeping Services in Commercial
              Spaces
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
                Housekeeping Services
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
                      aria-label="Share on Twitter"
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
                      aria-label="Share on LinkedIn"
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
                <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-green-500 pl-5 italic">
                  A clean and organized workplace is important for employee
                  well-being, customer satisfaction and overall business
                  success. Professional housekeeping services help businesses
                  maintain hygienic, safe and welcoming environments.
                </p>
              </div>

              <div className="my-2">
                <img
                  src={House1}
                  alt="Commercial cleaning team at work in an office"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>🧼 Professional team deep cleaning workspace</span>

                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    Housekeeping
                  </span>
                </div>
              </div>

              <div id="why-matters" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Building size={28} className="text-green-500" /> Why
                  Housekeeping Matters
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Housekeeping is more than basic cleaning. It helps maintain
                  professional standards across offices, hotels, hospitals,
                  educational institutions and commercial facilities. A
                  well-managed housekeeping program improves hygiene, brand
                  image and daily operations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  ✨ Key Benefits of Professional Housekeeping
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Better Hygiene",
                      desc: "Regular cleaning helps reduce dust, germs and workplace hygiene issues.",
                      icon: Droplet,
                    },
                    {
                      title: "Workplace Safety",
                      desc: "Clean environments reduce clutter, slips and daily safety risks.",
                      icon: Shield,
                    },
                    {
                      title: "Positive Impressions",
                      desc: "Clean spaces create trust among customers, visitors and staff.",
                      icon: Smile,
                    },
                    {
                      title: "Better Productivity",
                      desc: "Employees work better in clean, organized and comfortable workplaces.",
                      icon: TrendingUp,
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

              <div className="relative">
                <img
                  src={House2}
                  alt="Office cleaning services and surface sanitization"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  🧴 Cleaning high-touch surfaces
                </div>
              </div>

              <div id="healthier-workplace" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart size={28} className="text-green-500" /> Creating a
                  Healthier Workplace
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Professional housekeeping helps reduce dust, waste and
                  unhygienic conditions. A clean workplace supports employee
                  comfort, creates a better work atmosphere and helps maintain
                  professional hygiene standards.
                </p>
              </div>

              <div id="customer-experience" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Smile size={28} className="text-green-500" /> Enhancing
                  Customer Experience
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  First impressions matter. Whether it is an office reception,
                  hotel lobby, retail store or healthcare facility, cleanliness
                  directly influences how customers perceive your business.
                </p>
              </div>

              <div className="relative">
                <img
                  src={House3}
                  alt="Professional housekeeping team with cleaning equipment"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  🔧 Professional cleaning equipment
                </div>
              </div>

              <div id="why-professional" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Sparkles size={28} className="text-green-500" /> Why
                  Professional Housekeeping Is Better
                </h2>

                <div className="space-y-3">
                  {[
                    "Trained and experienced housekeeping staff",
                    "Modern cleaning equipment and safe cleaning methods",
                    "Customized cleaning schedules for business needs",
                    "Regular supervision and quality checks",
                    "Better hygiene support for commercial spaces",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm"
                    >
                      <CheckCircle
                        size={20}
                        className="text-green-500 shrink-0 mt-0.5"
                      />

                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center gap-2">
                  💡 Did You Know?
                </h3>

                <p className="text-gray-700">
                  Clean and organized commercial spaces improve visitor
                  confidence, employee comfort and overall workplace experience.
                </p>
              </div>

              <div
                id="why-acuity"
                className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 rounded-2xl shadow-xl scroll-mt-24"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose Acuity Groups?
                </h2>

                <p className="text-green-100 leading-relaxed text-lg">
                  Acuity Groups provides professional housekeeping services for
                  offices, hotels, hospitals, educational institutions,
                  residential communities and commercial buildings. Our trained
                  teams support superior cleanliness, hygiene and service
                  quality through customized housekeeping solutions.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
                  >
                    Request a Quote <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={House4}
                  alt="Professional housekeeping service support"
                  className="w-full object-cover max-h-[300px]"
                  loading="lazy"
                />
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  🎯 Conclusion
                </h2>

                <p className="text-gray-200 text-lg leading-relaxed">
                  Professional housekeeping services are a valuable investment
                  for any organization. Clean, healthy and organized spaces
                  improve employee comfort, strengthen customer trust and
                  support long-term business success.
                </p>
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

            {/* Right Sidebar */}
            <aside className="lg:col-span-3 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={House1}
                    alt="Acuity Groups housekeeping team"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-xl">Acuity Groups</h3>

                <p className="text-gray-500 text-sm mt-1">
                  Housekeeping Specialists
                </p>

                <p className="text-gray-600 text-sm mt-3">
                  Professional cleaning and hygiene support for commercial
                  spaces in Bangalore.
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
                          src={blog.image}
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

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 shadow-md border border-green-100 text-center">
                <div className="text-5xl mb-3">🧹</div>

                <h3 className="font-bold text-green-900 text-lg mb-2">
                  Custom Housekeeping Plans
                </h3>

                <p className="text-gray-700 text-sm mb-4">
                  Get housekeeping support tailored to your commercial space.
                </p>

                <Link
                  to="/contact"
                  className="block text-center bg-green-600 text-white py-2.5 rounded-full hover:bg-green-700 transition shadow"
                >
                  Request a Quote
                </Link>

                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={House2}
                    alt="Housekeeping service quote"
                    className="w-full h-20 object-cover"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 text-center shadow-lg border">
                <div className="flex justify-center gap-0.5 text-yellow-400 text-2xl mb-2">
                  ★★★★★
                </div>

                <p className="font-semibold text-gray-800">
                  Trusted Housekeeping Support
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Clean | Safe | Professional
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

            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
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

        {/* Bottom CTA */}
        <section className="relative bg-gradient-to-r from-green-800 via-emerald-800 to-green-900 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={House}
              alt="Housekeeping services background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Commercial Space?
            </h2>

            <p className="text-green-100 text-lg mb-8">
              Let Acuity Groups handle your housekeeping needs with
              professionalism and care.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-green-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
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

export default ProfessionalHousekeepingBlog;
