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
  Palette,
  Leaf,
  Home,
  Brush,
  Award,
  Building,
  Phone,
  BarChart,
  Thermometer,
  TrendingUp,
} from "lucide-react";
import UnleashDesigne from "../../images/UnleashDesigne.jpg";
import UnleashDesigne1 from "../../images/UnleashDesigne1.jpg";
import UnleashDesigne2 from "../../images/UnleashDesigne2.jpg";
import UnleashDesigne3 from "../../images/UnleashDesigne3.jpg";
import UnleashDesigne4 from "../../images/UnleashDesigne4.jpg";
import UnleashDesigne5 from "../../images/UnleashDesigne5.jpg";

const InteriorDesignTrends2024 = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title =
      "Unleash Your Inner Designer: Top Tips & Trends for 2024 | Acuity Groups";

    const metaDescription =
      "Transform your home with the latest interior design trends for 2024: biophilic design, bold colors, sustainable choices, DIY projects, and trending styles like Japandi fusion.";

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
      "interior design trends 2024, home decor, biophilic design, sustainable interior, Japandi, grandmillennial, DIY home decor, Acuity Groups"
    );
    updateMeta("robots", "index, follow");
    updateMeta("author", "Acuity Groups");

    // Open Graph
    updateMeta(
      "og:title",
      "Unleash Your Inner Designer: Top Tips & Trends for 2024 | Acuity Groups",
      true
    );
    updateMeta("og:description", metaDescription, true);
    updateMeta(
      "og:image",
      "https://acuitygroups.com/static/media/UnleashDesigne.jpg",
      true
    );
    updateMeta(
      "og:url",
      "https://acuitygroups.com/blogs/interior-design-trends-2024",
      true
    );
    updateMeta("og:type", "article", true);
    updateMeta("og:site_name", "Acuity Groups", true);

    // Twitter Card
    updateMeta("twitter:card", "summary_large_image");
    updateMeta(
      "twitter:title",
      "Unleash Your Inner Designer: Top Tips & Trends for 2024"
    );
    updateMeta("twitter:description", metaDescription);
    updateMeta(
      "twitter:image",
      "https://acuitygroups.com/static/media/UnleashDesigne.jpg"
    );

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://acuitygroups.com/blogs/interior-design-trends-2024";

    // Structured Data: Article + FAQ + Breadcrumb
    const articleData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Unleash Your Inner Designer: Top Tips & Trends for 2024",
      description: metaDescription,
      image: "https://acuitygroups.com/static/media/UnleashDesigne.jpg",
      datePublished: "2024-02-13",
      dateModified: "2025-06-01",
      author: { "@type": "Organization", name: "Acuity Groups" },
      publisher: {
        "@type": "Organization",
        name: "Acuity Groups",
        logo: { "@type": "ImageObject", url: "https://acuitygroups.com/logo.png" },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://acuitygroups.com/blogs/interior-design-trends-2024",
      },
    };

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the biggest interior design trend for 2024?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biophilic design – bringing nature indoors through plants, natural materials, and abundant natural light – is a major trend.",
          },
        },
        {
          "@type": "Question",
          name: "How can I make my home more sustainable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use upcycled furniture, choose eco-friendly materials (bamboo, reclaimed wood), install LED lighting, and improve natural ventilation.",
          },
        },
        {
          "@type": "Question",
          name: "What is Japandi fusion style?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Japandi combines Japanese minimalism with Scandinavian functionality, creating warm, uncluttered, and timeless interiors.",
          },
        },
      ],
    };

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://acuitygroups.com/" },
        { "@type": "ListItem", position: 2, name: "Blogs", item: "https://acuitygroups.com/blogs/allblogs" },
        { "@type": "ListItem", position: 3, name: "Interior Design Trends 2024", item: "https://acuitygroups.com/blogs/interior-design-trends-2024" },
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

  const shareUrl = encodeURIComponent("https://acuitygroups.com/blogs/interior-design-trends-2024");
  const shareTitle = encodeURIComponent(
    "Unleash Your Inner Designer: Top Tips & Trends for 2024 | Acuity Groups"
  );

  const tocSections = [
    { id: "comfort", title: "Comfort & Functionality" },
    { id: "bold-colors", title: "Bold Colors & Patterns" },
    { id: "sustainable", title: "Sustainable Design" },
    { id: "diy", title: "DIY Projects" },
    { id: "trending-styles", title: "Trending Styles for 2024" },
  ];

  const stats = [
    { value: "300+", label: "Homes Transformed", icon: <Home className="text-orange-600 w-6 h-6" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Award className="text-orange-600 w-6 h-6" /> },
    { value: "50+", label: "Design Projects", icon: <Palette className="text-orange-600 w-6 h-6" /> },
    { value: "15+", label: "Years Experience", icon: <Calendar className="text-orange-600 w-6 h-6" /> },
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

      {/* Hero Section with UnleashDesigne */}
      <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
        <img
          src={UnleashDesigne}
          alt="Modern interior design with warm tones and natural elements"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 animate-fade-in-up">
          <span className="bg-orange-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
            🎨 Interior Design 2024
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
            Unleash Your Inner Designer: Top Tips & Trends for 2024
          </h1>
          <div className="flex flex-wrap gap-5 mt-6 text-white/90">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <User size={18} /> Acuity Groups
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar size={18} /> Feb 13, 2024
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock size={18} /> 6 min read
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0,0 L1200,0 L1200,120 C1050,80 750,120 600,120 C450,120 150,80 0,120 Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-orange-600 transition">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/blogs/allblogs" className="hover:text-orange-600 transition">Blogs</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700 font-medium">Interior Design 2024</li>
          </ol>
        </nav>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 text-center border border-gray-100">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
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
                <h3 className="font-bold text-gray-800 text-lg">On this page</h3>
              </div>
              <ul className="space-y-2 text-sm">
                {tocSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-gray-600 hover:text-orange-600 transition flex items-center gap-2 group"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
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
                  <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`, "_blank")} className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition text-gray-600 hover:text-blue-500"><Twitter size={18} /></button>
                  <button onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`, "_blank")} className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition text-gray-600 hover:text-blue-700"><Linkedin size={18} /></button>
                  <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")} className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition text-gray-600 hover:text-blue-600"><Facebook size={18} /></button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Article Column */}
          <div className="lg:col-span-6 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-orange-500 pl-5 italic">
                Ready to transform your home into a stylish and comfortable sanctuary? Interior design trends in 2024 focus on balancing beauty, functionality, and sustainability. Whether you're planning a complete makeover or a simple refresh, these ideas can help you create a space that reflects your personality and lifestyle.
              </p>
            </div>

            {/* UnleashDesigne1 Image */}
            <div className="my-2">
              <img
                src={UnleashDesigne1}
                alt="Cozy interior with layered textiles and warm lighting"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>🏠 Cozy living space with layered textures</span>
                <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Trending</span>
              </div>
            </div>

            {/* Comfort & Functionality */}
            <div id="comfort" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Home size={28} className="text-orange-500" /> Embrace Comfort & Functionality
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Modern interiors are designed to be both practical and inviting. The goal is to create spaces that support everyday living while maintaining a stylish appearance.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Biophilic Design", desc: "Bring nature indoors with plants, natural textures, and plenty of sunlight.", icon: Leaf },
                  { title: "Multifunctional Furniture", desc: "Smart furniture helps maximize space while improving functionality.", icon: Brush },
                  { title: "Cozy Accents", desc: "Layer soft textiles, cushions, and lighting for warmth and comfort.", icon: Home },
                ].map((item, idx) => (
                  <div key={idx} className="group bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-600 transition-colors">
                      <item.icon className="text-orange-600 group-hover:text-white w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* UnleashDesigne2 Image */}
            <div className="relative">
              <img
                src={UnleashDesigne2}
                alt="Bold color accent wall with geometric patterns"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                🎨 Statement wall with geometric design
              </div>
            </div>

            {/* Bold Colors & Patterns */}
            <div id="bold-colors" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Palette size={28} className="text-orange-500" /> Play with Bold Colors & Patterns
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bold design choices can instantly transform a room and make it more expressive. Use colors and patterns strategically to create visual interest.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Create a statement wall with bold paint or wallpaper.",
                  "Use earthy tones for a calm and balanced atmosphere.",
                  "Add pops of color through artwork and accessories.",
                  "Experiment with geometric and textured patterns.",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm">
                    <CheckCircle size={18} className="text-orange-500 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UnleashDesigne3 Image */}
            <div className="relative">
              <img
                src={UnleashDesigne3}
                alt="Sustainable interior with bamboo furniture and plants"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                🌿 Eco-friendly living space
              </div>
            </div>

            {/* Sustainable Design */}
            <div id="sustainable" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Leaf size={28} className="text-orange-500" /> Sustainable Design Choices
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sustainability continues to shape interior design trends. Eco-conscious choices help reduce environmental impact while creating healthier living spaces.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { title: "Upcycled Furniture", desc: "Give old furniture a fresh look through restoration and creative redesign." },
                  { title: "Eco-Friendly Materials", desc: "Choose sustainable materials such as bamboo, reclaimed wood, and recycled products." },
                  { title: "LED Lighting", desc: "Reduce energy consumption with efficient lighting solutions." },
                  { title: "Natural Ventilation", desc: "Improve indoor air quality and reduce energy usage naturally." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                    <h3 className="font-bold text-lg text-green-800 mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* UnleashDesigne4 Image */}
            <div className="relative">
              <img
                src={UnleashDesigne4}
                alt="DIY home decor projects – handmade wall art and shelves"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                ✨ Handcrafted wall art
              </div>
            </div>

            {/* DIY Projects */}
            <div id="diy" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Brush size={28} className="text-orange-500" /> DIY Projects for a Personal Touch
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Personal touches make a home truly unique. DIY projects can add character and creativity without a large budget.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Create custom wall art.",
                  "Design personalized cushions and throws.",
                  "Repurpose everyday objects into décor pieces.",
                  "Build custom shelving and storage solutions.",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm">
                    <CheckCircle size={18} className="text-orange-500 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UnleashDesigne5 Image */}
            <div className="relative">
              <img
                src={UnleashDesigne5}
                alt="Trending interior styles – Japandi fusion and grandmillennial"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                🔥 Japandi fusion style
              </div>
            </div>

            {/* Trending Styles */}
            <div id="trending-styles" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Sparkles size={28} className="text-orange-500" /> Trending Styles for 2024
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Japandi Fusion", desc: "A combination of Japanese minimalism and Scandinavian functionality." },
                  { title: "Grandmillennial Style", desc: "Traditional and vintage-inspired interiors with a modern touch." },
                  { title: "Curated Chaos", desc: "Bold colors, layered textures, and eclectic décor that celebrates individuality." },
                ].map((style, idx) => (
                  <div key={idx} className="border-l-4 border-orange-500 bg-white p-5 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">{style.title}</h3>
                    <p className="text-gray-600">{style.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Did You Know? */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
              <h3 className="text-xl font-bold text-orange-800 mb-2 flex items-center gap-2">💡 Did You Know?</h3>
              <p className="text-gray-700">
                Homes with biophilic design elements (plants, natural light, organic materials) have been shown to reduce stress by up to 40% and improve creativity by 25%. Nature-inspired interiors aren't just beautiful—they're good for your health.
              </p>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-br from-orange-600 to-amber-700 text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Conclusion 🎨</h2>
              <p className="text-orange-100 text-lg leading-relaxed">
                Your home should reflect your personality, lifestyle, and creativity. By combining comfort, functionality, sustainability, and modern design trends, you can create a beautiful space that feels uniquely yours. At Acuity Groups, we help bring your vision to life with affordable and professional interior design solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/contactus" className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
                  Get a Free Design Consultation <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Back to blogs */}
            <div className="pt-4 border-t border-gray-200">
              <Link to="/blogs/allblogs" className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1">
                ← Back to all blogs
              </Link>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            {/* Expert Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                <img src={UnleashDesigne1} alt="Design Expert" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl">Acuity Design Team</h3>
              <p className="text-gray-500 text-sm mt-1">Interior Design Specialists</p>
              <p className="text-gray-600 text-sm mt-3">15+ years in residential and commercial interior design.</p>
              <div className="mt-4 flex justify-center gap-2">
                <Phone size={18} className="text-orange-600" />
                <span className="text-sm text-gray-600">Free Consultation</span>
              </div>
            </div>

            {/* Related Articles with thumbnails */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">📚 Related Articles</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img src={UnleashDesigne2} alt="thumb" className="w-full h-full object-cover" />
                  </div>
                  <Link to="/blogs/FromFunction" className="text-orange-600 group-hover:text-orange-700 group-hover:underline transition text-sm font-medium flex-1">
                    Integrated Design: From Function to Feeling
                  </Link>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img src={UnleashDesigne3} alt="thumb" className="w-full h-full object-cover" />
                  </div>
                  <Link to="/blogs/sustainable-home-tips" className="text-orange-600 group-hover:text-orange-700 group-hover:underline transition text-sm font-medium flex-1">
                    Sustainable Home Improvement Tips
                  </Link>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img src={UnleashDesigne4} alt="thumb" className="w-full h-full object-cover" />
                  </div>
                  <Link to="/blogs/diy-home-decor" className="text-orange-600 group-hover:text-orange-700 group-hover:underline transition text-sm font-medium flex-1">
                    Easy DIY Home Decor Ideas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick CTA Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-6 shadow-md border border-orange-100 text-center">
              <div className="text-5xl mb-3">🎨</div>
              <h3 className="font-bold text-orange-900 text-lg mb-2">Design Your Dream Space</h3>
              <p className="text-gray-700 text-sm mb-4">Get a free consultation with our interior design experts.</p>
              <Link to="/contactus" className="block text-center bg-orange-600 text-white py-2.5 rounded-full hover:bg-orange-700 transition shadow">
                Request a Quote
              </Link>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img src={UnleashDesigne5} alt="Design" className="w-full h-20 object-cover" />
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white rounded-2xl p-5 text-center shadow-lg border">
              <div className="flex justify-center gap-0.5 text-yellow-400 text-2xl mb-2">★★★★★</div>
              <p className="font-semibold text-gray-800">Trusted by 300+ Homeowners</p>
              <p className="text-xs text-gray-500 mt-1">Creative | Affordable | Sustainable</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
          {[
            { q: "What is the biggest interior design trend for 2024?", a: "Biophilic design – bringing nature indoors through plants, natural materials, and abundant natural light – is a major trend." },
            { q: "How can I make my home more sustainable?", a: "Use upcycled furniture, choose eco-friendly materials (bamboo, reclaimed wood), install LED lighting, and improve natural ventilation." },
            { q: "What is Japandi fusion style?", a: "Japandi combines Japanese minimalism with Scandinavian functionality, creating warm, uncluttered, and timeless interiors." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
              >
                {faq.q}
                <span className="text-orange-600 text-2xl">{activeFaq === idx ? "−" : "+"}</span>
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
          <img src={UnleashDesigne} alt="background pattern" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-orange-100 text-lg mb-8">Let Acuity Groups help you create a beautiful, functional, and sustainable space.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/contactus" className="inline-flex items-center gap-2 bg-white text-orange-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
              Contact Our Experts <ArrowRight size={18} />
            </Link>
            <Link to="/blogs/allblogs" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
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

export default InteriorDesignTrends2024;