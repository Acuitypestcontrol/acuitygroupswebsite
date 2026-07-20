import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Cockroaches from "../../images/cockroach.jpg";

const CockroachInfestation = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pageUrl = "https://www.acuitygroups.in/blogs/cockroach-control";

  const faqs = [
    {
      q: "What are the first signs of a cockroach infestation?",
      a: "Droppings resembling black pepper, egg casings, a musty odour, live roaches at night, shed skins, and smear marks on walls.",
    },
    {
      q: "Are cockroaches dangerous to health?",
      a: "Yes, cockroaches can spread bacteria, trigger allergies and asthma, contaminate food, and affect hygiene inside homes and commercial spaces.",
    },
    {
      q: "Can I get rid of cockroaches by myself?",
      a: "Minor infestations can be managed with cleaning, sealing cracks, gel baits and traps. For large infestations, professional pest control is recommended.",
    },
    {
      q: "How does Acuity Groups treat cockroaches?",
      a: "Acuity Groups uses safe pest management methods including gel baiting, residual treatment, inspection and follow-up support.",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Identify Cockroach Infestation at Home",
    description:
      "Learn early signs of cockroach infestation and when to call professional pest control services in Bangalore.",
    image: "https://www.acuitygroups.in/static/media/cockroach.jpg",
    datePublished: "2025-03-15",
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

  const faqSchema = {
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

  const breadcrumbSchema = {
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
        name: "Cockroach Control",
        item: pageUrl,
      },
    ],
  };

  const relatedBlogs = [
    {
      title: "Mosquito Prevention Tips for Healthy Living",
      link: "/blogs/mosquito-prevention",
    },
    {
      title: "Why Regular Pest Control Is Essential for Businesses",
      link: "/blogs/why-regular-pest-control",
    },
  ];

  const signs = [
    { title: "Droppings", desc: "Small, dark, pepper-like specks", icon: "🟤" },
    {
      title: "Egg Casings",
      desc: "Brownish, oval capsules found near hiding spots",
      icon: "🥚",
    },
    { title: "Musty Odour", desc: "Oily and unpleasant smell", icon: "👃" },
    {
      title: "Live Roaches",
      desc: "Usually seen at night in kitchens and bathrooms",
      icon: "🪳",
    },
    { title: "Shed Skins", desc: "Translucent, hollow shells", icon: "🐍" },
    {
      title: "Smear Marks",
      desc: "Dark irregular marks on walls and corners",
      icon: "〰️",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          How to Identify Cockroach Infestation at Home | Acuity Groups LLP
        </title>

        <meta
          name="description"
          content="Learn the signs of cockroach infestation and get professional cockroach control services in Bangalore from Acuity Groups LLP."
        />

        <meta
          name="keywords"
          content="cockroach infestation, cockroach control Bangalore, pest control Bangalore, cockroach pest control, cockroach prevention, Acuity Groups pest control"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:title"
          content="How to Identify Cockroach Infestation at Home | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Learn early signs of cockroach infestation and when to call professional pest control services in Bangalore."
        />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="How to Identify Cockroach Infestation at Home | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Learn signs of cockroach infestation and get cockroach control services in Bangalore."
        />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800 font-sans">
        {/* Hero Section */}
        <div className="relative h-[75vh] min-h-[550px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={Cockroaches}
              alt="Cockroach infestation signs and prevention"
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
                ✍️ Acuity Groups
              </span>
              <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                ⏱️ 5 min read
              </span>
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
                <Link to="/blogs" className="hover:text-amber-600 transition">
                  Blogs
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-700 font-medium">Cockroach Control</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main article column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Cockroaches are one of the most common household pests. They
                  carry bacteria and allergens that can trigger asthma and other
                  health issues. Identifying an infestation early helps prevent
                  rapid spreading and makes treatment more effective.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-l-8 border-amber-500 shadow-md flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p className="font-bold text-amber-800 text-xl mb-3 flex items-center gap-2">
                    📌 Key Takeaways
                  </p>

                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>
                      Look for droppings in corners, drawers and kitchen areas.
                    </li>
                    <li>
                      Check for egg casings behind furniture and cabinets.
                    </li>
                    <li>
                      A musty, oily smell can indicate a larger infestation.
                    </li>
                    <li>
                      Seal cracks, remove food sources and fix water leaks.
                    </li>
                    <li>Call professionals for complete cockroach control.</li>
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

              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  ⚠️ Why Cockroaches Are Dangerous
                </h2>

                <ul className="grid md:grid-cols-2 gap-3 list-disc pl-5 text-gray-700">
                  <li>They can contaminate food and kitchen surfaces.</li>
                  <li>They may trigger allergies and asthma symptoms.</li>
                  <li>They can spread bacteria in homes and businesses.</li>
                  <li>They affect hygiene and customer confidence.</li>
                </ul>

                <div className="mt-6 bg-red-50 p-4 rounded-xl flex items-center gap-4">
                  <span className="text-4xl">🦠</span>
                  <p className="text-sm text-red-800">
                    <strong>Health Alert:</strong> Cockroach infestations should
                    be controlled early to protect hygiene and indoor health.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  🛠️ DIY Control Methods
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      emoji: "🧼",
                      title: "Sanitation",
                      desc: "Keep counters clean, store food in airtight containers and remove waste daily.",
                    },
                    {
                      emoji: "💧",
                      title: "Remove Moisture",
                      desc: "Fix leaky pipes and avoid standing water near sinks and bathrooms.",
                    },
                    {
                      emoji: "🔧",
                      title: "Seal Entry Points",
                      desc: "Close cracks in walls, around pipes and under doors.",
                    },
                    {
                      emoji: "🍯",
                      title: "Gel Baits",
                      desc: "Place baits near active areas where roaches are commonly seen.",
                    },
                    {
                      emoji: "⚪",
                      title: "Boric Acid Powder",
                      desc: "Use only in safe areas away from children and pets.",
                    },
                    {
                      emoji: "🪤",
                      title: "Sticky Traps",
                      desc: "Use traps to monitor infestation level and locate hiding spots.",
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
                    DIY methods can help with small problems, but hidden
                    infestations need professional cockroach control treatment
                    for better results.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-indigo-800 mb-3">
                  📞 When to Call a Professional
                </h2>

                <p className="text-gray-700 mb-4">
                  If you continue seeing cockroaches even after cleaning and
                  using traps, there may be a hidden infestation. Professional
                  pest control helps identify nesting areas and treat the
                  source.
                </p>

                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Inspection of kitchen, bathroom and hidden areas.</li>
                  <li>Targeted gel baiting and residual treatment.</li>
                  <li>Control methods for breeding areas and entry points.</li>
                  <li>Follow-up guidance for prevention.</li>
                </ul>

                <p className="text-gray-800 font-semibold">
                  Acuity Groups provides professional cockroach control services
                  in Bangalore for homes, apartments, offices, restaurants and
                  commercial spaces.
                </p>

                <div className="mt-4 flex justify-center">
                  <img
                    src={Cockroaches}
                    alt="Professional cockroach treatment"
                    className="w-full max-w-xs rounded-xl shadow-md"
                  />
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl text-center shadow-md border border-green-100">
                <p className="font-bold text-green-800 text-lg flex items-center justify-center gap-2">
                  🪳 Did you know?
                </p>
                <p className="text-gray-700 mt-2">
                  Cockroaches hide in small cracks, drains, kitchen cabinets and
                  appliance gaps. Early detection helps stop the infestation
                  from spreading.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center gap-4">
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-800 font-medium transition"
                >
                  ← Back to all blogs
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 transition shadow-md"
                >
                  Need help? Contact us →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={Cockroaches}
                    alt="Acuity Groups pest control expert"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-xl">Acuity Groups</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Pest Control Specialist
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  Professional pest management services for homes and businesses
                  in Bangalore.
                </p>
              </div>

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
                          alt={blog.title}
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

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-amber-100 text-center">
                <div className="text-5xl mb-3">🚨</div>

                <h3 className="font-bold text-amber-900 text-lg mb-2">
                  Still Seeing Roaches?
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  Get pest control support from Acuity Groups.
                </p>

                <Link
                  to="/contact"
                  className="block text-center bg-amber-600 text-white py-2.5 rounded-full hover:bg-amber-700 transition shadow"
                >
                  Request a Quote
                </Link>

                <div className="mt-4">
                  <img
                    src={Cockroaches}
                    alt="Cockroach control request"
                    className="rounded-lg w-full h-20 object-cover"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm text-center border">
                <div className="text-3xl mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-500 text-sm">
                  Trusted pest control services in Bangalore
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Professional and reliable support
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {faqs.slice(0, 2).map((faq, idx) => (
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
              {faqs.slice(2, 4).map((faq, idx) => {
                const faqIndex = idx + 2;

                return (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faqIndex)}
                      className="w-full text-left p-5 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
                    >
                      {faq.q}
                      <span className="text-amber-500">
                        {activeFaq === faqIndex ? "−" : "+"}
                      </span>
                    </button>

                    {activeFaq === faqIndex && (
                      <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-4 rounded-xl overflow-hidden shadow-md">
                <img
                  src={Cockroaches}
                  alt="Cockroach control FAQ"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative bg-gradient-to-r from-amber-700 to-orange-700 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={Cockroaches}
              alt="Cockroach control background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Cockroaches Before They Spread
            </h2>

            <p className="text-amber-100 mb-8 text-lg">
              Contact Acuity Groups for cockroach control services in Bangalore.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="inline-block bg-white text-amber-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Request a Free Quote
              </Link>

              <Link
                to="/blogs"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
              >
                Browse All Blogs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CockroachInfestation;
