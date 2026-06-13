import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

// Import images
import bannerImg from "../../images/healthcare-facility-banner.jpg";
import hospitalMgmt from "../../images/hospital-management.jpg";
import hospitalCleaning from "../../images/hospital-cleaning.jpg";
import supportTeam from "../../images/healthcare-support-team.jpg";

const HealthcareFacilityManagementBlog = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Meta tags
    document.title =
      "The Importance of Facility Management in Healthcare Facilities | Acuity Groups";

    const metaDescription =
      "Discover how professional facility management enhances patient safety, infection control, compliance, and operational efficiency in healthcare facilities. Expert insights from Acuity Groups.";

    const updateMeta = (name, content, isProperty = false) => {
      let meta = isProperty
        ? document.querySelector(`meta[property="${name}"]`)
        : document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        if (isProperty) meta.setAttribute("property", name);
        else meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMeta("description", metaDescription);
    updateMeta(
      "keywords",
      "healthcare facility management, hospital management, infection control, medical waste management, healthcare compliance, patient safety, Acuity Groups",
    );
    updateMeta("robots", "index, follow");
    updateMeta("author", "Acuity Groups");

    // Open Graph
    updateMeta(
      "og:title",
      "The Importance of Facility Management in Healthcare Facilities | Acuity Groups",
      true,
    );
    updateMeta("og:description", metaDescription, true);
    updateMeta(
      "og:image",
      "https://acuitygroups.com/static/media/healthcare-facility-banner.jpg",
      true,
    );
    updateMeta(
      "og:url",
      "https://acuitygroups.com/blogs/healthcare-facility-management",
      true,
    );
    updateMeta("og:type", "article", true);
    updateMeta("og:site_name", "Acuity Groups", true);

    // Twitter Card
    updateMeta("twitter:card", "summary_large_image");
    updateMeta(
      "twitter:title",
      "The Importance of Facility Management in Healthcare Facilities",
    );
    updateMeta("twitter:description", metaDescription);
    updateMeta(
      "twitter:image",
      "https://acuitygroups.com/static/media/healthcare-facility-banner.jpg",
    );

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href =
      "https://acuitygroups.com/blogs/healthcare-facility-management";

    // Structured Data: Article + FAQ + Breadcrumb
    const articleData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "The Importance of Facility Management in Healthcare Facilities",
      description: metaDescription,
      image:
        "https://acuitygroups.com/static/media/healthcare-facility-banner.jpg",
      datePublished: "2025-06-01",
      dateModified: "2025-06-01",
      author: { "@type": "Organization", name: "Acuity Groups" },
      publisher: {
        "@type": "Organization",
        name: "Acuity Groups",
        logo: {
          "@type": "ImageObject",
          url: "https://acuitygroups.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://acuitygroups.com/blogs/healthcare-facility-management",
      },
    };

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is facility management critical in healthcare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It ensures infection control, patient safety, regulatory compliance, and reliable operation of medical equipment and support services.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Acuity Groups offer for healthcare facilities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acuity Groups provides hygiene sanitization, security, maintenance, medical waste management, and integrated facility management tailored to hospitals and clinics.",
          },
        },
        {
          "@type": "Question",
          name: "How does facility management improve patient experience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clean, safe, and well-maintained environments reduce stress, prevent infections, and create a healing atmosphere that improves overall patient satisfaction.",
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
          item: "https://acuitygroups.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blogs",
          item: "https://acuitygroups.com/blogs/allblogs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthcare Facility Management",
          item: "https://acuitygroups.com/blogs/healthcare-facility-management",
        },
      ],
    };

    const addJsonLd = (id, data) => {
      const existing = document.querySelector(`#${id}`);
      if (existing) existing.remove();
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    addJsonLd("ld-json-article", articleData);
    addJsonLd("ld-json-faq", faqData);
    addJsonLd("ld-json-breadcrumb", breadcrumbData);

    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelector("#ld-json-article")?.remove();
      document.querySelector("#ld-json-faq")?.remove();
      document.querySelector("#ld-json-breadcrumb")?.remove();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shareUrl = encodeURIComponent(
    "https://acuitygroups.com/blogs/healthcare-facility-management",
  );
  const shareTitle = encodeURIComponent(
    "The Importance of Facility Management in Healthcare Facilities | Acuity Groups",
  );

  const tocSections = [
    { id: "patient-safety", title: "Patient Safety" },
    { id: "compliance", title: "Regulatory Compliance" },
    { id: "benefits", title: "Key Benefits" },
    { id: "why-acuity", title: "Why Acuity Groups" },
  ];

  // Stats data
  const stats = [
    {
      value: "30+",
      label: "Hospitals Served",
      icon: <Building className="text-teal-600 w-6 h-6" />,
    },
    {
      value: "99%",
      label: "Compliance Rate",
      icon: <Award className="text-teal-600 w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Emergency Support",
      icon: <Clock className="text-teal-600 w-6 h-6" />,
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <Calendar className="text-teal-600 w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-teal-50 via-white to-gray-50 text-gray-800 font-sans relative">
      {/* Scroll to top button */}
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
          alt="Healthcare facility management - clean hospital corridor with medical staff"
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
              <Link
                to="/blogs/allblogs"
                className="hover:text-teal-600 transition"
              >
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
          {/* Table of Contents - Left */}
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

          {/* Main Article */}
          <div className="lg:col-span-6 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-teal-500 pl-5 italic">
                Healthcare facilities require the highest standards of
                cleanliness, safety, and operational efficiency. Effective
                facility management plays a critical role in supporting patient
                care while ensuring hospitals and healthcare centers operate
                smoothly.
              </p>
            </div>

            {/* Hospital Management Image */}
            <div className="my-2">
              <img
                src={hospitalMgmt}
                alt="Hospital management team reviewing facility operations"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>🏥 Professional healthcare facility management team</span>
                <span className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">
                  Core Service
                </span>
              </div>
            </div>

            {/* Patient Safety Section */}
            <div id="patient-safety" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Heart size={28} className="text-teal-500" /> Supporting Patient
                Safety
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Clean and properly maintained healthcare environments help
                reduce infection risks and improve patient outcomes. Facility
                management ensures that critical systems (HVAC, medical gases,
                electrical backups) and support services remain reliable 24/7. A
                single lapse can lead to hospital-acquired infections, which
                affect 1 in 31 hospital patients on any given day.
              </p>
            </div>

            {/* Service Cards */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                🔧 Core Facility Management Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Hygiene & Sanitization",
                    desc: "Maintain infection-free environments through professional cleaning and disinfection protocols.",
                    icon: Droplet,
                  },
                  {
                    title: "Security Services",
                    desc: "Protect patients, visitors, and healthcare staff with access control and surveillance.",
                    icon: Shield,
                  },
                  {
                    title: "Maintenance Support",
                    desc: "Ensure uninterrupted operation of medical equipment and facility systems.",
                    icon: Wrench,
                  },
                  {
                    title: "Waste Management",
                    desc: "Handle medical waste safely and compliantly, reducing environmental and health risks.",
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

            {/* Hospital Cleaning Image */}
            <div className="relative">
              <img
                src={hospitalCleaning}
                alt="Hospital cleaning staff sanitizing a patient room"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                🧼 High-touch surface disinfection
              </div>
            </div>

            {/* Compliance Section */}
            <div id="compliance" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle size={28} className="text-teal-500" /> Maintaining
                Regulatory Compliance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Healthcare facilities must comply with strict safety and hygiene
                regulations (OSHA, JCI, local health codes). Professional
                facility management helps ensure standards are consistently met
                while minimizing operational risks, avoiding fines, and
                protecting your reputation.
              </p>
            </div>

            {/* Support Team Image */}
            <div className="relative">
              <img
                src={supportTeam}
                alt="Healthcare support team coordinating facility services"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                👥 24/7 coordination team
              </div>
            </div>

            {/* Benefits Section */}
            <div id="benefits" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Sparkles size={28} className="text-teal-500" /> Key Benefits of
                Professional FM
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Improved patient safety",
                  "Better hygiene & infection control",
                  "Reliable facility operations",
                  "Enhanced staff productivity",
                  "Regulatory compliance",
                  "Better patient experience",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm"
                  >
                    <CheckCircle size={18} className="text-teal-500 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Did you know? */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
              <h3 className="text-xl font-bold text-teal-800 mb-2 flex items-center gap-2">
                💡 Did You Know?
              </h3>
              <p className="text-gray-700">
                Proper facility management can reduce hospital-acquired
                infections by up to 30% and improve patient satisfaction scores
                by 25%. Investing in professional FM directly impacts your
                bottom line and reputation.
              </p>
            </div>

            {/* Why Acuity Groups */}
            <div
              id="why-acuity"
              className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-8 rounded-2xl shadow-xl scroll-mt-24"
            >
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Acuity Groups for Healthcare FM? 🏥
              </h2>
              <p className="text-teal-100 leading-relaxed text-lg">
                Acuity Groups delivers specialized facility management solutions
                for hospitals, clinics, and long-term care facilities. From
                infection control and medical waste disposal to 24/7 maintenance
                and security, we ensure your healthcare environment is safe,
                compliant, and focused on healing.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/contactus"
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

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                🎯 Conclusion
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                Facility management is essential for delivering safe, efficient,
                and patient-focused healthcare services. Acuity Groups provides
                comprehensive healthcare facility solutions that support quality
                care and operational excellence. By partnering with us, you
                ensure your medical facility runs like a well-oiled machine —
                saving lives, one clean and safe environment at a time.
              </p>
            </div>

            {/* Back to blogs */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/blogs/allblogs"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center gap-1"
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
                  src={supportTeam}
                  alt="Healthcare FM Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl">Acuity Healthcare Team</h3>
              <p className="text-gray-500 text-sm mt-1">
                Facility Management Specialists
              </p>
              <p className="text-gray-600 text-sm mt-3">
                15+ years in healthcare facility management.
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <Phone size={18} className="text-teal-600" />
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
                      src={hospitalMgmt}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/blogs/TheImportanceFacilities"
                    className="text-teal-600 group-hover:text-teal-700 group-hover:underline transition text-sm font-medium flex-1"
                  >
                    The Importance of Facilities Management
                  </Link>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={hospitalCleaning}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/blogs/FromFunction"
                    className="text-teal-600 group-hover:text-teal-700 group-hover:underline transition text-sm font-medium flex-1"
                  >
                    Integrated Design: From Function to Feeling
                  </Link>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={bannerImg}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick CTA Card */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-6 shadow-md border border-teal-100 text-center">
              <div className="text-5xl mb-3">🏥</div>
              <h3 className="font-bold text-teal-900 text-lg mb-2">
                Trusted Healthcare Partner
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Get a free consultation for your hospital or clinic.
              </p>
              <Link
                to="/contactus"
                className="block text-center bg-teal-600 text-white py-2.5 rounded-full hover:bg-teal-700 transition shadow"
              >
                Request a Quote
              </Link>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={hospitalMgmt}
                  alt="Healthcare"
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
                Trusted by 30+ Hospitals
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Safe | Compliant | Caring
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
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Why is facility management critical in healthcare?",
              a: "It ensures infection control, patient safety, regulatory compliance, and reliable operation of medical equipment and support services.",
            },
            {
              q: "What services does Acuity Groups offer for healthcare facilities?",
              a: "Acuity Groups provides hygiene sanitization, security, maintenance, medical waste management, and integrated facility management tailored to hospitals and clinics.",
            },
            {
              q: "How does facility management improve patient experience?",
              a: "Clean, safe, and well-maintained environments reduce stress, prevent infections, and create a healing atmosphere that improves overall patient satisfaction.",
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

      {/* Bottom CTA Banner */}
      <section className="relative bg-gradient-to-r from-teal-800 via-cyan-800 to-teal-900 text-white py-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={bannerImg}
            alt="background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Healthcare Facility?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Partner with Acuity Groups for professional facility management that
            puts patients first.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contactus"
              className="inline-flex items-center gap-2 bg-white text-teal-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
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
  );
};

export default HealthcareFacilityManagementBlog;
