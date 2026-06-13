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
  Droplet,
  Leaf,
  Home,
  Award,
  Building,
  Phone,
  BarChart,
  Thermometer,
} from "lucide-react";
import Mosquito from "../../images/mosquito.jpg";

const MosquitoPrevention = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Title & Meta
    document.title =
      "Mosquito Prevention Tips for a Healthier Home | Acuity Groups";

    const metaDescription =
      "Simple and effective mosquito control methods to protect your family from dengue, malaria, and chikungunya. Learn to eliminate breeding sites, use natural repellents, and when to call professionals.";

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
      "mosquito prevention, dengue prevention, malaria control, mosquito repellent, fogging, pest control, Acuity Groups",
    );
    updateMeta("robots", "index, follow");
    updateMeta("author", "Acuity Groups");

    // Open Graph
    updateMeta(
      "og:title",
      "Mosquito Prevention Tips for a Healthier Home | Acuity Groups",
      true,
    );
    updateMeta("og:description", metaDescription, true);
    updateMeta(
      "og:image",
      "https://acuitygroups.com/static/media/mosquito.jpg",
      true,
    );
    updateMeta(
      "og:url",
      "https://acuitygroups.in/blogs/mosquito-prevention",
      true,
    );
    updateMeta("og:type", "article", true);
    updateMeta("og:site_name", "Acuity Groups", true);

    // Twitter Card
    updateMeta("twitter:card", "summary_large_image");
    updateMeta(
      "twitter:title",
      "Mosquito Prevention Tips for a Healthier Home",
    );
    updateMeta("twitter:description", metaDescription);
    updateMeta(
      "twitter:image",
      "https://acuitygroups.com/static/media/mosquito.jpg",
    );

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://acuitygroups.in/blogs/mosquito-prevention";

    // Structured Data: Article + FAQ + Breadcrumb
    const articleData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Mosquito Prevention Tips for a Healthier Home",
      description: metaDescription,
      image: "https://acuitygroups.com/static/media/mosquito.jpg",
      datePublished: "2025-03-05",
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
        "@id": "https://acuitygroups.in/blogs/mosquito-prevention",
      },
    };

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the most effective way to prevent mosquitoes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eliminate standing water, use mosquito nets and window screens, apply EPA-approved repellents, and keep your surroundings clean.",
          },
        },
        {
          "@type": "Question",
          name: "Which natural repellents work against mosquitoes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Citronella, eucalyptus, lavender, neem oil, and lemon balm are effective natural repellents. You can also grow plants like marigolds and basil.",
          },
        },
        {
          "@type": "Question",
          name: "When should I call a professional mosquito control service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If DIY methods fail, or if your area has a high mosquito population or a dengue outbreak, professional fogging and larvicide treatments are recommended.",
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
          name: "Mosquito Prevention",
          item: "https://acuitygroups.in/blogs/mosquito-prevention",
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
    "https://acuitygroups.in/blogs/mosquito-prevention",
  );
  const shareTitle = encodeURIComponent(
    "Mosquito Prevention Tips for a Healthier Home | Acuity Groups",
  );

  const tocSections = [
    { id: "why-dangerous", title: "Why Mosquitoes Are Dangerous" },
    { id: "breeding-sites", title: "Where Mosquitoes Breed" },
    { id: "prevention-steps", title: "Effective Prevention Steps" },
    { id: "natural-repellents", title: "Natural Repellent Plants" },
    { id: "long-term", title: "Long‑Term Prevention" },
    { id: "professional", title: "When to Call a Professional" },
  ];

  const stats = [
    {
      value: "500+",
      label: "Families Protected",
      icon: <Home className="text-blue-600 w-6 h-6" />,
    },
    {
      value: "99%",
      label: "Mosquito Reduction",
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

      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
        <img
          src={Mosquito}
          alt="Mosquito prevention – protect your family from dengue and malaria"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl text-white">
          <span className="bg-blue-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
            🦟 Mosquito Prevention
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
            Mosquito Prevention Tips for a Healthier Home
          </h1>
          <div className="flex flex-wrap gap-5 mt-6 text-white/90">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <User size={18} /> Acuity Groups
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar size={18} /> March 5, 2025
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
            <li className="text-gray-700 font-medium">Mosquito Prevention</li>
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
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-5 italic">
                Mosquitoes are not just annoying – they transmit deadly diseases
                like dengue, malaria, chikungunya, and Zika. Prevention is your
                first line of defence. Here's how to keep mosquitoes away from
                your home and family.
              </p>
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-8 border-blue-600">
              <p className="font-bold text-blue-900 text-xl mb-3 flex items-center gap-2">
                📌 Key Takeaways
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Eliminate all standing water – mosquitoes breed in stagnant
                  water
                </li>
                <li>
                  Use mosquito nets and window screens for physical protection
                </li>
                <li>
                  Apply EPA‑approved repellents (DEET, picaridin, or natural
                  oils)
                </li>
                <li>
                  Keep your surroundings clean – clear gutters, cover water
                  tanks
                </li>
                <li>Schedule professional fogging for severe infestations</li>
              </ul>
            </div>

            {/* Hero image inside content (same image used again for consistency) */}
            <div className="my-2">
              <img
                src={Mosquito}
                alt="Close-up of mosquito on skin – prevention needed"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>🦟 Mosquitoes are disease vectors</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  Health Risk
                </span>
              </div>
            </div>

            {/* Why Mosquitoes Are Dangerous */}
            <div id="why-dangerous" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                🦟 Why Mosquitoes Are Dangerous
              </h2>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>
                  <strong>Dengue:</strong> Causes high fever, joint pain, and
                  can be fatal.
                </li>
                <li>
                  <strong>Malaria:</strong> Leads to recurrent fevers, anaemia,
                  and organ failure.
                </li>
                <li>
                  <strong>Chikungunya:</strong> Severe joint pain that can last
                  for months.
                </li>
                <li>
                  <strong>Zika virus:</strong> Linked to birth defects in
                  pregnant women.
                </li>
              </ul>
            </div>

            {/* Breeding Sites */}
            <div id="breeding-sites" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Droplet size={28} className="text-blue-500" /> Where Mosquitoes
                Breed
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Mosquitoes lay eggs in stagnant water. Common breeding sites
                include:
              </p>
              <div className="grid sm:grid-cols-2 gap-2 list-disc pl-5 text-gray-700">
                <ul className="space-y-1 list-disc pl-5">
                  <li>Flower pots and plant saucers</li>
                  <li>Old tyres and buckets</li>
                  <li>Clogged gutters and drains</li>
                </ul>
                <ul className="space-y-1 list-disc pl-5">
                  <li>Bird baths and pet water bowls</li>
                  <li>Water tanks and coolers</li>
                  <li>Discarded bottles or containers</li>
                </ul>
              </div>
            </div>

            {/* Effective Prevention Steps */}
            <div id="prevention-steps" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Shield size={28} className="text-blue-500" /> Effective
                Mosquito Prevention Steps
              </h2>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>
                  <strong>Remove standing water:</strong> Empty, scrub, or cover
                  any water‑holding containers weekly.
                </li>
                <li>
                  <strong>Use mosquito nets:</strong> Sleep under treated nets,
                  especially for children.
                </li>
                <li>
                  <strong>Install screens:</strong> Fit mesh screens on windows,
                  doors, and vents.
                </li>
                <li>
                  <strong>Apply larvicides:</strong> Use mosquito dunks or
                  natural larvicides in water tanks and drains.
                </li>
                <li>
                  <strong>Use repellents:</strong> Apply DEET, picaridin, or oil
                  of lemon eucalyptus on exposed skin.
                </li>
                <li>
                  <strong>Wear protective clothing:</strong> Long sleeves and
                  pants during peak mosquito hours (dawn & dusk).
                </li>
                <li>
                  <strong>Use coils, mats, or vapourisers:</strong> Indoors,
                  especially at night.
                </li>
              </ul>
            </div>

            {/* Natural Repellent Recipe Box */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <p className="font-bold text-amber-800 text-lg mb-2 flex items-center gap-2">
                💡 Natural Repellent Recipe
              </p>
              <p className="text-gray-700">
                Mix 10 drops each of citronella, eucalyptus, and lavender
                essential oils with 2 tablespoons of coconut oil. Apply to
                exposed skin – effective and chemical‑free.
              </p>
            </div>

            {/* Natural Repellent Plants */}
            <div id="natural-repellents" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Leaf size={28} className="text-blue-500" /> Natural Mosquito
                Repellent Plants
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Citronella grass",
                  "Lavender",
                  "Marigolds",
                  "Basil",
                  "Rosemary",
                  "Peppermint",
                ].map((plant, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm"
                  >
                    <Leaf size={16} className="text-green-600" />
                    <span className="text-gray-700 text-sm">{plant}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-3">
                Place these plants near windows, doors, and outdoor seating
                areas to naturally deter mosquitoes.
              </p>
            </div>

            {/* Long-Term Prevention */}
            <div id="long-term" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Home size={28} className="text-blue-500" /> Long‑Term
                Prevention Tips
              </h2>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>
                  Keep your yard clean – remove piles of leaves and debris.
                </li>
                <li>
                  Ensure proper drainage around your home – fill low‑lying
                  areas.
                </li>
                <li>Cover water storage containers with tight lids.</li>
                <li>Clean gutters and downspouts regularly.</li>
                <li>
                  Treat ornamental ponds with mosquito fish (gambusia) or
                  larvicides.
                </li>
                <li>Use outdoor fans – mosquitoes are weak fliers.</li>
              </ul>
            </div>

            {/* When to Call a Professional */}
            <div id="professional" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Sparkles size={28} className="text-blue-500" /> When to Call a
                Professional
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If your area has a high mosquito population or a dengue
                outbreak, DIY methods may not be enough. Professional mosquito
                control includes:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>
                  Fogging (thermal or cold) to kill adult mosquitoes instantly.
                </li>
                <li>
                  Larvicide application to breeding sites (drains, water tanks).
                </li>
                <li>Source reduction and habitat modification.</li>
                <li>Regular maintenance plans during monsoon season.</li>
              </ul>
            </div>

            {/* Did You Know? */}
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 text-center">
              <p className="font-bold text-blue-800 text-lg flex items-center justify-center gap-2">
                🦟 Did you know?
              </p>
              <p className="text-gray-700">
                Only female mosquitoes bite – they need blood protein to develop
                eggs. Males feed on nectar and are harmless to humans.
              </p>
            </div>

            {/* Final CTA text */}
            <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-200">
              <p className="text-gray-800 text-lg">
                Don't let mosquitoes put your family at risk. Start with simple
                prevention steps, and if the problem persists, contact Acuity
                Groups for professional fogging and larvicide treatments.
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
                  src={Mosquito}
                  alt="Pest Control Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl">Acuity Pest Control Team</h3>
              <p className="text-gray-500 text-sm mt-1">
                Mosquito Prevention Specialists
              </p>
              <p className="text-gray-600 text-sm mt-3">
                15+ years in mosquito control and disease prevention.
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
                      src={Mosquito}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/blogs/pest-control-tips"
                    className="text-blue-600 group-hover:text-blue-700 group-hover:underline transition text-sm font-medium flex-1"
                  >
                    Essential Pest Control Tips for Homes
                  </Link>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={Mosquito}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/blogs/monsoon-health-safety"
                    className="text-blue-600 group-hover:text-blue-700 group-hover:underline transition text-sm font-medium flex-1"
                  >
                    Monsoon Health & Safety Guide
                  </Link>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={Mosquito}
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
              <div className="text-5xl mb-3">🦟</div>
              <h3 className="font-bold text-blue-900 text-lg mb-2">
                Professional Mosquito Control
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Get a free inspection – fogging and source control available.
              </p>
              <Link
                to="/contactus"
                className="block text-center bg-blue-600 text-white py-2.5 rounded-full hover:bg-blue-700 transition shadow"
              >
                Request a Quote
              </Link>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={Mosquito}
                  alt="Mosquito"
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
                Trusted by 500+ Families
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Safe | Effective | Affordable
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
              q: "What is the most effective way to prevent mosquitoes?",
              a: "Eliminate standing water, use mosquito nets and window screens, apply EPA-approved repellents, and keep your surroundings clean.",
            },
            {
              q: "Which natural repellents work against mosquitoes?",
              a: "Citronella, eucalyptus, lavender, neem oil, and lemon balm are effective natural repellents. You can also grow plants like marigolds and basil.",
            },
            {
              q: "When should I call a professional mosquito control service?",
              a: "If DIY methods fail, or if your area has a high mosquito population or a dengue outbreak, professional fogging and larvicide treatments are recommended.",
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
            src={Mosquito}
            alt="background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mosquitoes Still a Problem?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get a free inspection – professional fogging and source control
            available.
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

export default MosquitoPrevention;
