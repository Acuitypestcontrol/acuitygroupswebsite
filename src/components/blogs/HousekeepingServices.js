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
import House4 from "../../images/home1.jpg"; // same as House but used separately

const ProfessionalHousekeepingBlog = () => {
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
    "https://acuitygroups.in/blogs/professional-housekeeping",
  );
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

  // Structured Data: Article + FAQ + Breadcrumb
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The Importance of Professional Housekeeping Services in Commercial Spaces",
    description:
      "Ensure flawless hygiene and customer experiences. Learn how professional housekeeping by Acuity Groups transforms offices, hotels, & clinics.",
    image: "https://acuitygroups.in/static/media/home1.jpg",
    datePublished: "2025-06-01",
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
      "@id": "https://acuitygroups.in/blogs/professional-housekeeping",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is professional housekeeping important for businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It ensures hygiene, safety, positive impressions, and productivity, reducing absenteeism and increasing customer trust.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Acuity Groups offer in housekeeping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acuity Groups provides daily, weekly, and customized cleaning for offices, hotels, hospitals, schools, and residential complexes using modern equipment and trained staff.",
        },
      },
      {
        "@type": "Question",
        name: "How does housekeeping improve employee productivity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A clean, organized, and healthy workplace reduces distractions, lowers sick days, and boosts morale, leading to higher efficiency.",
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
        name: "Professional Housekeeping",
        item: "https://acuitygroups.in/blogs/professional-housekeeping",
      },
    ],
  };

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
        <link
          rel="canonical"
          href="https://acuitygroups.in/blogs/professional-housekeeping"
        />
        <title>Why Commercial Housekeeping Matters | Acuity Groups</title>
        <meta
          name="description"
          content="Discover how professional housekeeping services enhance hygiene, safety, productivity, and customer experience in offices, hotels, hospitals, and more. Expert insights from Acuity Groups."
        />
        <meta
          name="keywords"
          content="professional housekeeping, commercial cleaning, office cleaning, hygiene services, workplace safety, facility management, Acuity Groups"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://acuitygroups.in/blogs/professional-housekeeping"
        />
        <meta
          property="og:title"
          content="The Importance of Professional Housekeeping Services in Commercial Spaces | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Discover how professional housekeeping services enhance hygiene, safety, productivity, and customer experience in offices, hotels, hospitals, and more. Expert insights from Acuity Groups."
        />
        <meta
          property="og:image"
          content="https://acuitygroups.in/static/media/home1.jpg"
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Professional Housekeeping Services in Commercial Spaces"
        />
        <meta
          name="twitter:description"
          content="Discover how professional housekeeping services enhance hygiene, safety, productivity, and customer experience in offices, hotels, hospitals, and more."
        />
        <meta
          name="twitter:image"
          content="https://acuitygroups.in/static/media/home1.jpg"
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

        {/* Hero Section with House image */}
        <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
          <img
            src={House}
            alt="Professional housekeeping team cleaning a modern office space"
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
                <Link
                  to="/blogs/allblogs"
                  className="hover:text-green-600 transition"
                >
                  Blogs
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-700 font-medium">
                Professional Housekeeping
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
                  A clean and organized workplace is essential for employee
                  well-being, customer satisfaction, and overall business
                  success. Professional housekeeping services help businesses
                  maintain hygienic, safe, and welcoming environments while
                  improving operational efficiency.
                </p>
              </div>

              {/* House1 Image */}
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

              {/* Why Housekeeping Matters */}
              <div id="why-matters" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Building size={28} className="text-green-500" /> Why
                  Housekeeping Matters
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Housekeeping is more than just cleaning. It plays a critical
                  role in maintaining professional standards across offices,
                  hotels, hospitals, educational institutions, and commercial
                  facilities. A well-executed housekeeping program directly
                  impacts brand reputation, employee morale, and operational
                  costs.
                </p>
              </div>

              {/* Feature Cards */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  ✨ Key Benefits of Professional Housekeeping
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Better Hygiene",
                      desc: "Regular cleaning reduces dust, bacteria, and germs, preventing the spread of illnesses.",
                      icon: Droplet,
                    },
                    {
                      title: "Workplace Safety",
                      desc: "Clean environments reduce accidents, slips, and fire hazards.",
                      icon: Shield,
                    },
                    {
                      title: "Positive Impressions",
                      desc: "Clean spaces create trust among customers, visitors, and stakeholders.",
                      icon: Smile,
                    },
                    {
                      title: "Increased Productivity",
                      desc: "Employees perform better in clean, organized, and clutter-free workplaces.",
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

              {/* House2 Image */}
              <div className="relative">
                <img
                  src={House2}
                  alt="Office cleaning services - sanitizing desks and surfaces"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  🧴 Disinfection of high-touch surfaces
                </div>
              </div>

              {/* Healthier Workplace */}
              <div id="healthier-workplace" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart size={28} className="text-green-500" /> Creating a
                  Healthier Workplace
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Professional housekeeping helps reduce the spread of illness
                  and improves indoor air quality. A clean workplace supports
                  employee health, reduces absenteeism, and contributes to a
                  more positive working environment. Studies show that regular
                  deep cleaning can lower sick days by up to 30%.
                </p>
              </div>

              {/* Customer Experience */}
              <div id="customer-experience" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Smile size={28} className="text-green-500" /> Enhancing
                  Customer Experience
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  First impressions matter. Whether it is an office reception,
                  hotel lobby, retail store, or healthcare facility, cleanliness
                  directly influences how customers perceive your business. A
                  spotless environment signals professionalism, attention to
                  detail, and care for visitors.
                </p>
              </div>

              {/* House3 Image */}
              <div className="relative">
                <img
                  src={House3}
                  alt="Professional housekeeping team with modern equipment"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  🔧 Advanced cleaning technology
                </div>
              </div>

              {/* Why Professional */}
              <div id="why-professional" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Sparkles size={28} className="text-green-500" /> Why
                  Professional Housekeeping Is Better
                </h2>
                <div className="space-y-3">
                  {[
                    "Trained and experienced housekeeping professionals",
                    "Modern cleaning equipment and eco-friendly techniques",
                    "Customized cleaning schedules to fit your business hours",
                    "Consistent quality and hygiene standards with audits",
                    "Compliance with health and safety regulations (OSHA, local codes)",
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

              {/* Did You Know? */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center gap-2">
                  💡 Did You Know?
                </h3>
                <p className="text-gray-700">
                  Businesses that invest in professional housekeeping see a 20%
                  increase in employee productivity and a 15% reduction in
                  absenteeism on average. Clean spaces aren't just nice to
                  have—they're a competitive advantage.
                </p>
              </div>

              {/* Why Acuity Groups */}
              <div
                id="why-acuity"
                className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 rounded-2xl shadow-xl scroll-mt-24"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose Acuity Groups? 🧹
                </h2>
                <p className="text-green-100 leading-relaxed text-lg">
                  Acuity Groups provides professional housekeeping services for
                  offices, hotels, hospitals, educational institutions,
                  residential communities, and commercial buildings. Our trained
                  teams ensure superior cleanliness, hygiene, and customer
                  satisfaction through customized housekeeping solutions. We use
                  eco-friendly products, advanced equipment, and rigorous
                  quality checks to deliver spotless results every time.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contactus"
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

              {/* House4 Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={House4}
                  alt="Eco-friendly cleaning products used by professionals"
                  className="w-full object-cover max-h-[300px]"
                  loading="lazy"
                />
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  🎯 Conclusion
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Professional housekeeping services are a valuable investment
                  for any organization. Clean, healthy, and organized
                  environments improve employee productivity, strengthen
                  customer trust, and contribute to long-term business success.
                  Partner with Acuity Groups to elevate your commercial space's
                  cleanliness and professionalism.
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
                    src={House1}
                    alt="Housekeeping Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">Acuity Housekeeping Team</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Cleaning Specialists
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  15+ years in professional cleaning and hygiene management.
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
                        src={House2}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      to="/blogs/TheImportanceFacilities"
                      className="text-green-600 group-hover:text-green-700 group-hover:underline transition text-sm font-medium flex-1"
                    >
                      The Importance of Facilities Management
                    </Link>
                  </li>
                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={House3}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </li>
                  <li className="flex gap-3 items-center group">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img
                        src={House4}
                        alt="thumb"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quick CTA Card */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 shadow-md border border-green-100 text-center">
                <div className="text-5xl mb-3">🧹</div>
                <h3 className="font-bold text-green-900 text-lg mb-2">
                  Custom Housekeeping Plans
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get a free consultation tailored to your commercial space.
                </p>
                <Link
                  to="/contactus"
                  className="block text-center bg-green-600 text-white py-2.5 rounded-full hover:bg-green-700 transition shadow"
                >
                  Request a Quote
                </Link>
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={House2}
                    alt="Cleaning"
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
                  Trusted by 200+ businesses
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Spotless | Safe | Sustainable
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
                q: "Why is professional housekeeping important for businesses?",
                a: "It ensures hygiene, safety, positive impressions, and productivity, reducing absenteeism and increasing customer trust.",
              },
              {
                q: "What services does Acuity Groups offer in housekeeping?",
                a: "Acuity Groups provides daily, weekly, and customized cleaning for offices, hotels, hospitals, schools, and residential complexes using modern equipment and trained staff.",
              },
              {
                q: "How does housekeeping improve employee productivity?",
                a: "A clean, organized, and healthy workplace reduces distractions, lowers sick days, and boosts morale, leading to higher efficiency.",
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
              src={House}
              alt="background pattern"
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

export default ProfessionalHousekeepingBlog;
