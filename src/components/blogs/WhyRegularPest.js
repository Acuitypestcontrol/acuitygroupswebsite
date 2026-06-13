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
  Building,
  Bug,
  AlertTriangle,
  Leaf,
  Award,
  Phone,
  BarChart,
  Thermometer,
} from "lucide-react";
import Ppp1 from "../../images/ppp.jpg";
import Ppp2 from "../../images/ppp1.jpg";
import Ppp3 from "../../images/ppp3.jpg";
import Ppp4 from "../../images/ppp4.jpg";

const PestManagementBlog = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title =
      "Why Regular Pest Control Is Essential for Businesses | Acuity Groups";

    const metaDescription =
      "Protect your business from rodents, termites, and other pests. Learn why regular pest management is vital for health, property, compliance, and brand reputation.";

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
      "pest management, commercial pest control, rodent control, termite treatment, preventive pest control, Acuity Groups",
    );
    updateMeta("robots", "index, follow");
    updateMeta("author", "Acuity Groups");

    // Open Graph
    updateMeta(
      "og:title",
      "Why Regular Pest Control Is Essential for Businesses | Acuity Groups",
      true,
    );
    updateMeta("og:description", metaDescription, true);
    updateMeta(
      "og:image",
      "https://acuitygroups.com/static/media/ppp.jpg",
      true,
    );
    updateMeta("og:url", "https://acuitygroups.in/blogs/pest-management", true);
    updateMeta("og:type", "article", true);
    updateMeta("og:site_name", "Acuity Groups", true);

    // Twitter Card
    updateMeta("twitter:card", "summary_large_image");
    updateMeta(
      "twitter:title",
      "Why Regular Pest Control Is Essential for Businesses",
    );
    updateMeta("twitter:description", metaDescription);
    updateMeta(
      "twitter:image",
      "https://acuitygroups.com/static/media/ppp.jpg",
    );

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://acuitygroups.in/blogs/pest-management";

    // Structured Data: Article + FAQ + Breadcrumb
    const articleData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Why Regular Pest Control Is Essential for Businesses",
      description: metaDescription,
      image: "https://acuitygroups.com/static/media/ppp.jpg",
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
        "@id": "https://acuitygroups.in/blogs/pest-management",
      },
    };

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is regular pest control important for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It protects employee health, prevents property damage, ensures regulatory compliance, and safeguards brand reputation.",
          },
        },
        {
          "@type": "Question",
          name: "What pests are common in commercial properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rodents, cockroaches, termites, ants, mosquitoes, and stored product pests are typical in offices, hotels, restaurants, and warehouses.",
          },
        },
        {
          "@type": "Question",
          name: "How does Acuity Groups handle pest control?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use safe, eco‑friendly methods, regular inspections, and tailored treatment plans to eliminate pests and prevent re‑infestation.",
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
          item: "https://acuitygroups.in/blogs/allblogs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pest Management",
          item: "https://acuitygroups.in/blogs/pest-management",
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
    "https://acuitygroups.in/blogs/pest-management",
  );
  const shareTitle = encodeURIComponent(
    "Why Regular Pest Control Is Essential for Businesses | Acuity Groups",
  );

  const tocSections = [
    { id: "common-pests", title: "Common Pest Problems" },
    { id: "benefits", title: "Key Benefits" },
    { id: "preventive", title: "Why Preventive Pest Control Matters" },
    { id: "why-acuity", title: "Why Choose Acuity Groups" },
  ];

  const stats = [
    {
      value: "200+",
      label: "Businesses Served",
      icon: <Building className="text-orange-600 w-6 h-6" />,
    },
    {
      value: "98%",
      label: "Pest Elimination Rate",
      icon: <Award className="text-orange-600 w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Emergency Support",
      icon: <Clock className="text-orange-600 w-6 h-6" />,
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <Calendar className="text-orange-600 w-6 h-6" />,
    },
  ];

  return (
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

      {/* Hero Section with Ppp1 */}
      <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
        <img
          src={Ppp1}
          alt="Professional pest control technician inspecting commercial property"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl text-white">
          <span className="bg-orange-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
            🐜 Pest Management
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
            Why Regular Pest Control Is Essential for Businesses
          </h1>
          <div className="flex flex-wrap gap-5 mt-6 text-white/90">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <User size={18} /> Acuity Groups
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar size={18} /> June 1, 2025
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock size={18} /> 4 min read
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
              <Link
                to="/blogs/allblogs"
                className="hover:text-orange-600 transition"
              >
                Blogs
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700 font-medium">Pest Management</li>
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
                Pest infestations can seriously impact business operations,
                employee health, customer satisfaction, and brand reputation.
                Regular pest management helps organizations maintain safe,
                hygienic, and professional environments.
              </p>
            </div>

            {/* Ppp2 Image */}
            <div className="my-2">
              <img
                src={Ppp2}
                alt="Commercial pest inspection in a warehouse"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>🏭 Regular pest inspection in commercial facility</span>
                <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                  Preventive Care
                </span>
              </div>
            </div>

            {/* Common Pest Problems */}
            <div id="common-pests" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Bug size={28} className="text-orange-500" /> Common Pest
                Problems in Commercial Properties
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Offices, hotels, restaurants, warehouses, and industrial
                facilities often face challenges from rodents, cockroaches,
                termites, ants, mosquitoes, and other pests.
              </p>
            </div>

            {/* Key Benefits Section */}
            <div id="benefits" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Shield size={28} className="text-orange-500" /> Key Benefits of
                Regular Pest Control
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Health Protection",
                    desc: "Reduce the spread of harmful bacteria and diseases carried by pests.",
                    icon: Shield,
                  },
                  {
                    title: "Property Protection",
                    desc: "Prevent structural damage caused by termites and rodents.",
                    icon: Building,
                  },
                  {
                    title: "Regulatory Compliance",
                    desc: "Meet hygiene and safety standards across industries (FSSAI, HACCP, ISO).",
                    icon: CheckCircle,
                  },
                  {
                    title: "Brand Reputation",
                    desc: "Maintain customer trust with clean and pest‑free facilities.",
                    icon: Sparkles,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:shadow-lg transition"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                      <item.icon className="text-orange-600 group-hover:text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ppp3 Image */}
            <div className="relative">
              <img
                src={Ppp3}
                alt="Preventive pest control - technician applying treatment around building perimeter"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                🔄 Perimeter treatment application
              </div>
            </div>

            {/* Why Preventive Pest Control Matters */}
            <div id="preventive" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Leaf size={28} className="text-orange-500" /> Why Preventive
                Pest Control Matters
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Preventive pest management identifies potential risks before
                infestations occur. Regular inspections and treatment plans help
                businesses avoid costly disruptions and maintain a safe working
                environment.
              </p>
            </div>

            {/* Ppp4 Image */}
            <div className="relative">
              <img
                src={Ppp4}
                alt="Professional pest management team with safety equipment"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                👥 Expert team with eco‑friendly methods
              </div>
            </div>

            {/* Did You Know? */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
              <h3 className="text-xl font-bold text-orange-800 mb-2 flex items-center gap-2">
                💡 Did You Know?
              </h3>
              <p className="text-gray-700">
                A single female cockroach can produce up to 30,000 offspring per
                year, and rodents can chew through electrical wiring causing
                fire hazards. Regular pest control prevents these risks before
                they escalate.
              </p>
            </div>

            {/* Why Choose Acuity Groups */}
            <div
              id="why-acuity"
              className="bg-gradient-to-br from-orange-600 to-amber-700 text-white p-8 rounded-2xl shadow-xl scroll-mt-24"
            >
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Acuity Groups? 🐜
              </h2>
              <p className="text-orange-100 leading-relaxed text-lg mb-6">
                Acuity Groups offers professional pest management solutions
                tailored for offices, hotels, hospitals, commercial buildings,
                educational institutions, and industrial facilities. Our team
                uses safe, effective, and environmentally responsible methods to
                keep your workplace pest‑free.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contactus"
                  className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  Schedule a Pest Audit <ArrowRight size={18} />
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
                Regular pest control is an essential part of facility
                management. By investing in professional pest management,
                businesses can protect employees, customers, assets, and their
                reputation while maintaining a healthier workplace. Partner with
                Acuity Groups for proactive, reliable pest solutions.
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
                  src={Ppp4}
                  alt="Pest Control Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl">Acuity Pest Control Team</h3>
              <p className="text-gray-500 text-sm mt-1">
                Pest Management Specialists
              </p>
              <p className="text-gray-600 text-sm mt-3">
                15+ years in commercial pest elimination.
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
                <li className="flex gap-3 items-center group"></li>
                <li className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={Ppp1}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/blogs/HousekeepingServices"
                    className="text-orange-600 group-hover:text-orange-700 group-hover:underline transition text-sm font-medium flex-1"
                  >
                    Professional Housekeeping Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick CTA Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-6 shadow-md border border-orange-100 text-center">
              <div className="text-5xl mb-3">🐜</div>
              <h3 className="font-bold text-orange-900 text-lg mb-2">
                Free Pest Assessment
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Identify risks before they become costly infestations.
              </p>
              <Link
                to="/contactus"
                className="block text-center bg-orange-600 text-white py-2.5 rounded-full hover:bg-orange-700 transition shadow"
              >
                Request a Quote
              </Link>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={Ppp2}
                  alt="Pest"
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
                Trusted by 200+ Businesses
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Safe | Eco‑friendly | Effective
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
              q: "Why is regular pest control important for businesses?",
              a: "It protects employee health, prevents property damage, ensures regulatory compliance, and safeguards brand reputation.",
            },
            {
              q: "What pests are common in commercial properties?",
              a: "Rodents, cockroaches, termites, ants, mosquitoes, and stored product pests are typical in offices, hotels, restaurants, and warehouses.",
            },
            {
              q: "How does Acuity Groups handle pest control?",
              a: "We use safe, eco‑friendly methods, regular inspections, and tailored treatment plans to eliminate pests and prevent re‑infestation.",
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
      <section className="relative bg-gradient-to-r from-orange-800 via-amber-800 to-orange-900 text-white py-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={Ppp1}
            alt="background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keep Your Business Pest‑Free
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Contact Acuity Groups for professional, ongoing pest management.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contactus"
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
  );
};

export default PestManagementBlog;
