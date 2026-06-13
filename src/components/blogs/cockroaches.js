import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Cockroaches from "../../images/cockroach.jpg";

const CockroachInfestation = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Structured Data: Article + FAQ (moved outside component to avoid recreation)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Identify Cockroach Infestation at Home",
    description:
      "Learn early signs of cockroach infestation (droppings, egg casings, odour, live roaches) and prevent health risks. Effective DIY tips and professional pest control solutions from Acuity Groups.",
    image: "https://www.acuitygroups.in/static/media/cockroach.jpg",
    datePublished: "2025-03-15",
    dateModified: "2025-03-15",
    author: { "@type": "Organization", name: "Acuity Groups" },
    publisher: {
      "@type": "Organization",
      name: "Acuity Groups",
      logo: {
        "@type": "ImageObject",
        url: "https://www.acuitygroups.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.acuitygroups.in/blogs/cockroach-infestation",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the first signs of a cockroach infestation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Droppings resembling black pepper, egg casings (oothecae), a musty odour, live roaches at night, shed skins, and smear marks on walls.",
        },
      },
      {
        "@type": "Question",
        name: "Are cockroaches dangerous to health?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they spread bacteria like Salmonella, trigger allergies and asthma, contaminate food, and can cause skin rashes.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get rid of cockroaches by myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minor infestations can be managed with sanitation, sealing cracks, gel baits, and boric acid. For large infestations, professional pest control is recommended.",
        },
      },
      {
        "@type": "Question",
        name: "How does Acuity Groups treat cockroaches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use eco‑friendly gel baits, insect growth regulators, residual sprays, and follow‑up visits to ensure complete eradication.",
        },
      },
    ],
  };

  // Related blogs for internal linking (SEO)
  const relatedBlogs = [
    {
      title: "Mosquito Prevention Tips for Healthy Living",
      link: "/blogs/mosquito",
    },
    {
      title: "Why Regular Pest Control Is Essential for Businesses",
      link: "/blogs/WhyRegularPest",
    },
  ];

  // Signs data for image cards
  const signs = [
    { title: "Droppings", desc: "Small, dark, pepper‑like specks", icon: "🟤" },
    {
      title: "Egg Casings",
      desc: "Brownish, oval capsules (oothecae)",
      icon: "🥚",
    },
    { title: "Musty Odour", desc: "Oily, unpleasant smell", icon: "👃" },
    {
      title: "Live Roaches",
      desc: "Seen at night in kitchens/bathrooms",
      icon: "🪳",
    },
    { title: "Shed Skins", desc: "Translucent, hollow shells", icon: "🐍" },
    {
      title: "Smear Marks",
      desc: "Dark irregular smears on walls",
      icon: "〰️",
    },
  ];

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/blogs/cockroachinfestation"
        />
        <title>
          How to Identify Cockroach Infestation at Home | Acuity Groups
        </title>
        <meta
          name="description"
          content="Spot the early signs of cockroaches & protect your health. Learn easy DIY prevention tips or get expert pest control in Bangalore from Acuity Groups."
        />
        <meta
          name="keywords"
          content="cockroach infestation, signs of cockroaches, cockroach control, pest control Bangalore, get rid of roaches, cockroach prevention, Acuity Groups pest control"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.acuitygroups.in/blogs/cockroach-infestation"
        />
        <meta
          property="og:title"
          content="How to Identify Cockroach Infestation at Home | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Learn early signs of cockroach infestation (droppings, egg casings, odour, live roaches) and prevent health risks. Effective DIY tips and professional pest control solutions from Acuity Groups."
        />
        <meta
          property="og:image"
          content="https://www.acuitygroups.in/static/media/cockroach.jpg"
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.acuitygroups.in/blogs/cockroach-infestation"
        />
        <meta
          name="twitter:title"
          content="How to Identify Cockroach Infestation at Home | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Learn early signs of cockroach infestation (droppings, egg casings, odour, live roaches) and prevent health risks. Effective DIY tips and professional pest control solutions from Acuity Groups."
        />
        <meta
          name="twitter:image"
          content="https://www.acuitygroups.in/static/media/cockroach.jpg"
        />
      </Helmet>

      {/* Structured Data (JSON-LD) – injected once via script tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800 font-sans">
        {/* Hero Section with Parallax Effect */}
        <div className="relative h-[75vh] min-h-[550px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={Cockroaches}
              alt="Cockroach infestation signs and prevention – Acuity Groups"
              className="w-full h-full object-cover object-center transform scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          <div className="relative h-full flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500 text-white text-sm font-bold mb-4 shadow-lg">
              🪳 Pest Control Guide
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white max-w-3xl leading-tight drop-shadow-2xl">
              How to Identify Cockroach Infestation at Home
            </h1>
            <div className="flex flex-wrap gap-5 mt-6 text-white/90 text-sm md:text-base">
              <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                📅 March 15, 2025
              </span>
              <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                ✍️ Acuity Expert
              </span>
              <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                ⏱️ 5 min read
              </span>
            </div>
          </div>
          {/* Bottom curve */}
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
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-amber-600 transition">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link
                  to="/blogs/allblogs"
                  className="hover:text-amber-600 transition"
                >
                  Blogs
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-700 font-medium">
                Cockroach Infestation
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main article column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction with image inset */}
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Cockroaches are one of the most common household pests. They
                  carry bacteria and allergens that can trigger asthma and other
                  health issues. Identifying an infestation early is key to
                  quick elimination. Here's what you need to know.
                </p>
              </div>

              {/* Key Takeaways Box with image */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-l-8 border-amber-500 shadow-md flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p className="font-bold text-amber-800 text-xl mb-3 flex items-center gap-2">
                    📌 Key Takeaways
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>
                      Look for droppings (pepper‑like specks) in corners and
                      drawers
                    </li>
                    <li>Check for egg casings (oothecae) behind furniture</li>
                    <li>A musty, oily smell indicates a large infestation</li>
                    <li>Seal cracks, remove food sources, and fix leaks</li>
                    <li>Call professionals for complete eradication</li>
                  </ul>
                </div>
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                  <img
                    src={Cockroaches}
                    alt="Cockroach closeup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Signs of Infestation - Image Grid */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  🔍 Signs of Cockroach Infestation
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {signs.map((sign, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex items-start gap-4 border border-gray-100"
                    >
                      <div className="text-3xl">{sign.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-800">
                          {sign.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{sign.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Cockroaches Are Dangerous */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  ⚠️ Why Cockroaches Are Dangerous
                </h2>
                <ul className="grid md:grid-cols-2 gap-3 list-disc pl-5 text-gray-700">
                  <li>
                    Spread bacteria like Salmonella and E. coli (food
                    poisoning).
                  </li>
                  <li>
                    Trigger allergies and asthma (droppings, saliva, shed
                    skins).
                  </li>
                  <li>Contaminate food and kitchen surfaces.</li>
                  <li>Can cause skin rashes and respiratory infections.</li>
                </ul>
                <div className="mt-6 bg-red-50 p-4 rounded-xl flex items-center gap-4">
                  <span className="text-4xl">🦠</span>
                  <p className="text-sm text-red-800">
                    <strong>Health Alert:</strong> Cockroach allergens are a
                    leading cause of asthma in children.
                  </p>
                </div>
              </div>

              {/* DIY Control Methods with icons */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  🛠️ DIY Control Methods (Immediate Steps)
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      emoji: "🧼",
                      title: "Sanitation",
                      desc: "Keep counters clean, store food in airtight containers, take out trash daily.",
                    },
                    {
                      emoji: "💧",
                      title: "Remove moisture",
                      desc: "Fix leaky pipes and don't leave standing water.",
                    },
                    {
                      emoji: "🔧",
                      title: "Seal entry points",
                      desc: "Use caulk to close cracks in walls, around pipes, under doors.",
                    },
                    {
                      emoji: "🍯",
                      title: "Gel baits",
                      desc: "Place bait stations near activity – roaches carry poison back to nest.",
                    },
                    {
                      emoji: "⚪",
                      title: "Boric acid powder",
                      desc: "Sprinkle thin layers behind appliances (keep away from children/pets).",
                    },
                    {
                      emoji: "🪤",
                      title: "Sticky traps",
                      desc: "Monitor infestation level and locate hiding spots.",
                    },
                  ].map((method, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-3 items-start"
                    >
                      <span className="text-2xl">{method.emoji}</span>
                      <div>
                        <h3 className="font-bold text-gray-800">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{method.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="font-bold text-amber-800 flex items-center gap-2">
                    ⚠️ Important Note
                  </p>
                  <p className="text-gray-700">
                    Do not use bug bombs or foggers – they drive cockroaches
                    deeper into walls and can be harmful to humans and pets.
                    Professional treatment is safer and more effective.
                  </p>
                </div>
              </div>

              {/* When to Call a Professional */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-indigo-800 mb-3">
                  📞 When to Call a Professional
                </h2>
                <p className="text-gray-700 mb-4">
                  If you've tried DIY methods for several weeks and still see
                  signs of cockroaches, you likely have a large, hidden
                  infestation. Professional pest control offers:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>
                    Accurate identification of the cockroach species (German,
                    American, Oriental).
                  </li>
                  <li>
                    Targeted gel baits and insect growth regulators (IGRs) to
                    break the breeding cycle.
                  </li>
                  <li>Residual sprays in cracks and voids.</li>
                  <li>Follow‑up visits to ensure complete elimination.</li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  Acuity Groups uses safe, eco‑friendly products that eliminate
                  cockroaches without harming your family or pets.
                </p>
                <div className="mt-4 flex justify-center">
                  <img
                    src={Cockroaches}
                    alt="Professional treatment"
                    className="w-full max-w-xs rounded-xl shadow-md"
                  />
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-green-50 p-6 rounded-2xl text-center shadow-md border border-green-100">
                <p className="font-bold text-green-800 text-lg flex items-center justify-center gap-2">
                  🪳 Did you know?
                </p>
                <p className="text-gray-700 mt-2">
                  A single female German cockroach can produce up to 30,000
                  offspring in one year. That's why early detection is critical!
                </p>
              </div>

              {/* Navigation links */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center gap-4">
                <Link
                  to="/blogs/allblogs"
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-800 font-medium transition"
                >
                  ← Back to all blogs
                </Link>
                <Link
                  to="/contactus"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 transition shadow-md"
                >
                  Need help? Contact us →
                </Link>
              </div>
            </div>

            {/* Sidebar - Enhanced with images */}
            <aside className="space-y-8">
              {/* Author / Profile Card with image */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={Cockroaches}
                    alt="Acuity Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">Acuity Expert</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Pest Control Specialist
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  15+ years experience in eco-friendly pest management.
                </p>
              </div>

              {/* Related articles with thumbnails */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  📖 Related Articles
                </h3>
                <ul className="space-y-4">
                  {relatedBlogs.map((blog, idx) => (
                    <li key={idx} className="flex gap-3 items-center">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src={Cockroaches}
                          alt="blog thumb"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Link
                        to={blog.link}
                        className="text-amber-600 hover:text-amber-800 hover:underline transition text-sm font-medium"
                      >
                        {blog.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick CTA card with image */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-amber-100 text-center">
                <div className="text-5xl mb-3">🚨</div>
                <h3 className="font-bold text-amber-900 text-lg mb-2">
                  Still Seeing Roaches?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get a free inspection from our pest control experts.
                </p>
                <Link
                  to="/contactus"
                  className="block text-center bg-amber-600 text-white py-2.5 rounded-full hover:bg-amber-700 transition shadow"
                >
                  Request a Quote
                </Link>
                <div className="mt-4">
                  <img
                    src={Cockroaches}
                    alt="call to action"
                    className="rounded-lg w-full h-20 object-cover"
                  />
                </div>
              </div>

              {/* Trust badge */}
              <div className="bg-white rounded-2xl p-5 shadow-sm text-center border">
                <div className="text-3xl mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-500 text-sm">
                  Rated 4.9 by 500+ customers
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Professional & Eco-Friendly
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* FAQ Section with Accordion and Images */}
        <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  q: "What are the first signs of a cockroach infestation?",
                  a: "Droppings resembling black pepper, egg casings (oothecae), a musty odour, live roaches at night, shed skins, and smear marks on walls.",
                },
                {
                  q: "Are cockroaches dangerous to health?",
                  a: "Yes, they spread bacteria like Salmonella, trigger allergies and asthma, contaminate food, and can cause skin rashes.",
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
                    <span className="text-amber-500">
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
            <div className="space-y-4">
              {[
                {
                  q: "Can I get rid of cockroaches by myself?",
                  a: "Minor infestations can be managed with sanitation, sealing cracks, gel baits, and boric acid. For large infestations, professional pest control is recommended.",
                },
                {
                  q: "How does Acuity Groups treat cockroaches?",
                  a: "We use eco‑friendly gel baits, insect growth regulators, residual sprays, and follow‑up visits to ensure complete eradication.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx + 2}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx + 2)}
                    className="w-full text-left p-5 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
                  >
                    {faq.q}
                    <span className="text-amber-500">
                      {activeFaq === idx + 2 ? "−" : "+"}
                    </span>
                  </button>
                  {activeFaq === idx + 2 && (
                    <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 rounded-xl overflow-hidden shadow-md">
                <img
                  src={Cockroaches}
                  alt="FAQ illustration"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner with image background */}
        <section className="relative bg-gradient-to-r from-amber-700 to-orange-700 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={Cockroaches}
              alt="background pattern"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Cockroaches Before They Spread
            </h2>
            <p className="text-amber-100 mb-8 text-lg">
              Schedule a free inspection – we'll find and eliminate the source.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contactus"
                className="inline-block bg-white text-amber-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Request a Free Quote
              </Link>
              <Link
                to="/blogs/allblogs"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
              >
                Browse All Blogs
              </Link>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-slow-zoom {
            animation: slowZoom 20s ease-in-out infinite alternate;
          }
        `}</style>
      </div>
    </>
  );
};

export default CockroachInfestation;
