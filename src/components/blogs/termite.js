import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  ChevronUp,
  BookOpen,
  Twitter,
  Linkedin,
  Facebook,
  Bug,
  Home,
  AlertTriangle,
  Award,
  Phone,
  BarChart,
  Thermometer,
} from "lucide-react";
import Termite from "../../images/termite.jpg";

const TermiteControlGuide = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Title & Meta
    document.title =
      "Termite Control: Complete Home Protection Guide | Acuity Groups";

    const metaDescription =
      "Protect your wooden furniture and home structure from damaging termites. Learn prevention tips, signs of infestation, DIY methods, and when to call professionals.";

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
      "termite control, termite treatment, home protection, termite inspection, pest control, termite prevention, Acuity Groups",
    );
    updateMeta("robots", "index, follow");
    updateMeta("author", "Acuity Groups");

    // Open Graph
    updateMeta(
      "og:title",
      "Termite Control: Complete Home Protection Guide | Acuity Groups",
      true,
    );
    updateMeta("og:description", metaDescription, true);
    updateMeta(
      "og:image",
      "https://acuitygroups.com/static/media/termite.jpg",
      true,
    );
    updateMeta(
      "og:url",
      "https://acuitygroups.in/blogs/termite-control-guide",
      true,
    );
    updateMeta("og:type", "article", true);
    updateMeta("og:site_name", "Acuity Groups", true);

    // Twitter Card
    updateMeta("twitter:card", "summary_large_image");
    updateMeta(
      "twitter:title",
      "Termite Control: Complete Home Protection Guide",
    );
    updateMeta("twitter:description", metaDescription);
    updateMeta(
      "twitter:image",
      "https://acuitygroups.com/static/media/termite.jpg",
    );

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://acuitygroups.in/blogs/termite-control-guide";

    // Structured Data: Article + FAQ + Breadcrumb
    const articleData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Termite Control: Complete Home Protection Guide",
      description: metaDescription,
      image: "https://acuitygroups.com/static/media/termite.jpg",
      datePublished: "2025-03-10",
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
        "@id": "https://acuitygroups.in/blogs/termite-control-guide",
      },
    };

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the early signs of termites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mud tubes on walls, hollow-sounding wood, discarded wings near windows, frass (termite droppings), and bubbling paint.",
          },
        },
        {
          "@type": "Question",
          name: "Can I treat termites myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DIY methods may help small infestations, but professional treatment is recommended for effective long‑term elimination.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I get a termite inspection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At least once a year – more frequently if you live in a high‑risk area or have had past infestations.",
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
          name: "Termite Control",
          item: "https://acuitygroups.in/blogs/termite-control-guide",
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
    "https://acuitygroups.in/blogs/termite-control-guide",
  );
  const shareTitle = encodeURIComponent(
    "Termite Control: Complete Home Protection Guide | Acuity Groups",
  );

  const tocSections = [
    { id: "why-dangerous", title: "Why Termites Are Dangerous" },
    { id: "signs", title: "Signs of Infestation" },
    { id: "prevention", title: "How to Prevent Termites" },
    { id: "professional", title: "When to Call a Professional" },
    { id: "treatment-options", title: "Treatment Options" },
  ];

  const stats = [
    {
      value: "1000+",
      label: "Homes Protected",
      icon: <Home className="text-blue-600 w-6 h-6" />,
    },
    {
      value: "99%",
      label: "Elimination Rate",
      icon: <Award className="text-blue-600 w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Emergency Support",
      icon: <Clock className="text-blue-600 w-6 h-6" />,
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <Calendar className="text-blue-600 w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 text-gray-800 font-sans relative">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Hero Section with Termite image */}
      <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
        <img
          src={Termite}
          alt="Termite control - professional inspecting wooden structure for termites"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl text-white">
          <span className="bg-blue-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
            🪵 Termite Control
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
            Termite Control: Complete Home Protection Guide
          </h1>
          <div className="flex flex-wrap gap-5 mt-6 text-white/90">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <User size={18} /> Acuity Groups
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar size={18} /> March 10, 2025
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
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to="/blogs/allblogs"
                className="hover:text-blue-600 transition"
              >
                Blogs
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700 font-medium">Termite Control</li>
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
                <BookOpen size={20} className="text-blue-600" />
                <h3 className="font-bold text-gray-800 text-lg">
                  On this page
                </h3>
              </div>
              <ul className="space-y-2 text-sm">
                {tocSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2 group"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(section.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-blue-600"></span>
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
            {/* Key Takeaways Box */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-8 border-blue-600">
              <p className="font-bold text-blue-900 text-xl mb-3 flex items-center gap-2">
                📌 Key Takeaways
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Eliminate moisture – fix leaks and improve drainage around
                  foundation
                </li>
                <li>
                  Keep firewood, lumber, and wood debris away from the house
                </li>
                <li>
                  Regularly inspect crawl spaces, basements, and wooden
                  structures
                </li>
                <li>
                  Use termite barriers and bait stations as preventive measures
                </li>
                <li>Schedule annual professional termite inspections</li>
              </ul>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-5 italic">
                Termites cause billions of dollars in property damage each year.
                They silently eat away at wooden structures, often going
                unnoticed until major damage is done. Early detection and
                prevention are your best defenses.
              </p>
            </div>

            {/* Termite Image inside content */}
            <div className="my-2">
              <img
                src={Termite}
                alt="Termite damage on wooden structure - inspection needed"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>🪵 Professional termite inspection in progress</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  Pest Control
                </span>
              </div>
            </div>

            {/* Why Termites Are Dangerous */}
            <div id="why-dangerous" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Bug size={28} className="text-blue-500" /> Why Termites Are
                Dangerous
              </h2>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>
                  <strong>Structural damage:</strong> Termites weaken wooden
                  beams, floors, and walls – repairs can cost lakhs.
                </li>
                <li>
                  <strong>Hidden destruction:</strong> They eat from the inside
                  out, often undetected for years.
                </li>
                <li>
                  <strong>Rapid reproduction:</strong> A single queen can lay
                  thousands of eggs daily.
                </li>
                <li>
                  <strong>Decreased property value:</strong> Termite history can
                  make it hard to sell your home.
                </li>
              </ul>
            </div>

            {/* Signs of Infestation */}
            <div id="signs" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <AlertTriangle size={28} className="text-blue-500" /> Signs of
                Termite Infestation
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Mud tubes on foundation walls, floor joists, or crawl space",
                  "Hollow‑sounding wood when tapped",
                  "Discarded wings near windows or doors (after swarming)",
                  "Small piles of frass (termite droppings) that look like sawdust or pellets",
                  "Bubbling or peeling paint on wooden surfaces",
                ].map((sign, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 bg-white p-3 rounded-xl shadow-sm"
                  >
                    <AlertTriangle
                      size={18}
                      className="text-blue-500 shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Prevent Termites */}
            <div id="prevention" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Shield size={28} className="text-blue-500" /> How to Prevent
                Termites
              </h2>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>
                  <strong>Eliminate moisture:</strong> Fix leaky pipes, ensure
                  proper drainage, use dehumidifiers in damp areas.
                </li>
                <li>
                  <strong>Keep firewood and lumber away:</strong> Store wood at
                  least 20 feet from the foundation and elevate it.
                </li>
                <li>
                  <strong>Regular inspections:</strong> Check crawl spaces,
                  basements, attics, and wooden structures every season.
                </li>
                <li>
                  <strong>Use physical barriers:</strong> Install stainless
                  steel mesh or crushed stone under slabs.
                </li>
                <li>
                  <strong>Termite bait stations:</strong> Placed around the
                  perimeter, they attract and poison termites.
                </li>
                <li>
                  <strong>Chemical soil treatments:</strong> A barrier of
                  termiticide around the foundation.
                </li>
                <li>
                  <strong>Remove wood debris:</strong> Clear stumps, old tree
                  roots, and construction wood near the house.
                </li>
              </ul>
            </div>

            {/* Pro Tip Box */}
            <div className="bg-gray-100 rounded-2xl p-6 border-l-4 border-gray-600">
              <p className="font-bold text-gray-800 text-lg mb-2 flex items-center gap-2">
                💡 Pro Tip
              </p>
              <p className="text-gray-700">
                Never store cardboard boxes directly on basement floors –
                termites love the cellulose. Use plastic bins instead.
              </p>
            </div>

            {/* When to Call a Professional */}
            <div id="professional" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Home size={28} className="text-blue-500" /> When to Call a
                Professional
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you see any signs of termites, DIY treatments are rarely
                enough. Professional termite control offers:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>
                  Accurate inspection with moisture meters and thermal imaging.
                </li>
                <li>Targeted liquid termiticides or bait systems.</li>
                <li>Fumigation for severe, drywood termite infestations.</li>
                <li>Pre‑construction treatment for new homes.</li>
                <li>Annual maintenance plans and warranties.</li>
              </ul>
            </div>

            {/* Professional Treatment Options */}
            <div id="treatment-options" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Sparkles size={28} className="text-blue-500" /> Professional
                Termite Treatment Options
              </h2>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>
                  <strong>Liquid soil treatment:</strong> Creates a continuous
                  chemical barrier around the foundation – lasts 5–10 years.
                </li>
                <li>
                  <strong>Bait systems:</strong> Stations placed in the ground;
                  termites carry poison back to the colony.
                </li>
                <li>
                  <strong>Wood treatment:</strong> Borate sprays applied to
                  exposed wood (for new construction or renovations).
                </li>
                <li>
                  <strong>Fumigation (tenting):</strong> For drywood termites –
                  entire home covered, gas kills all termites.
                </li>
              </ul>
            </div>

            {/* Did you know box */}
            <div className="bg-amber-50 rounded-2xl p-6 text-center border border-amber-200">
              <p className="font-bold text-amber-800 text-lg flex items-center justify-center gap-2">
                🪵 Did you know?
              </p>
              <p className="text-gray-700">
                A mature termite colony can eat about a pound of wood per day.
                Over a year, that's the equivalent of a 10‑foot wooden 2×4.
              </p>
            </div>

            {/* Final CTA */}
            <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-200">
              <p className="text-gray-800 text-lg">
                Don't wait for visible damage. Annual professional inspections
                are the best defense. If you spot mud tubes or hollow‑sounding
                wood, call Acuity Groups immediately for a free inspection and
                effective termite control.
              </p>
              <div className="mt-4">
                <Link
                  to="/contactus"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-md"
                >
                  Get a Free Inspection <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Back to blogs */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/blogs/allblogs"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
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
                  src={Termite}
                  alt="Termite Control Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl">Acuity Pest Control Team</h3>
              <p className="text-gray-500 text-sm mt-1">
                Termite Control Specialists
              </p>
              <p className="text-gray-600 text-sm mt-3">
                15+ years in termite inspection and treatment.
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <Phone size={18} className="text-blue-600" />
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
                      src={Termite}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/blogs/mosquito-prevention"
                    className="text-blue-600 group-hover:text-blue-700 group-hover:underline transition text-sm font-medium flex-1"
                  >
                    Mosquito Prevention Tips
                  </Link>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={Termite}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/blogs/pest-control-tips"
                    className="text-blue-600 group-hover:text-blue-700 group-hover:underline transition text-sm font-medium flex-1"
                  >
                    Essential Pest Control for Homes
                  </Link>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={Termite}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/blogs/HousekeepingServices"
                    className="text-blue-600 group-hover:text-blue-700 group-hover:underline transition text-sm font-medium flex-1"
                  >
                    Professional Housekeeping Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick CTA Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6 shadow-md border border-blue-100 text-center">
              <div className="text-5xl mb-3">🪵</div>
              <h3 className="font-bold text-blue-900 text-lg mb-2">
                Termite Inspection
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Get a free professional inspection for your home.
              </p>
              <Link
                to="/contactus"
                className="block text-center bg-blue-600 text-white py-2.5 rounded-full hover:bg-blue-700 transition shadow"
              >
                Request a Quote
              </Link>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={Termite}
                  alt="Termite"
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
                Trusted by 1000+ Homeowners
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Safe | Effective | Long‑lasting
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
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "What are the early signs of termites?",
              a: "Mud tubes on walls, hollow-sounding wood, discarded wings near windows, frass (termite droppings), and bubbling paint.",
            },
            {
              q: "Can I treat termites myself?",
              a: "DIY methods may help small infestations, but professional treatment is recommended for effective long‑term elimination.",
            },
            {
              q: "How often should I get a termite inspection?",
              a: "At least once a year – more frequently if you live in a high‑risk area or have had past infestations.",
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
                <span className="text-blue-600 text-2xl">
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
      <section className="relative bg-gradient-to-r from-blue-800 via-cyan-800 to-blue-900 text-white py-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={Termite}
            alt="background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Suspect Termites in Your Home?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get a free professional inspection – protect your investment.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contactus"
              className="inline-flex items-center gap-2 bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
            >
              Request a Quote <ArrowRight size={18} />
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

export default TermiteControlGuide;
