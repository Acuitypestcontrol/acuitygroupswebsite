import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  User,
  Layout,
  Palette,
  Leaf,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  Phone,
  Building,
  Sparkles,
  BarChart,
  Droplets,
  Thermometer,
} from "lucide-react";

import FFF1 from "../../images/fff1.jpg";
import FFF2 from "../../images/fff2.jpg";
import FFF3 from "../../images/fff3.jpg";

const IntegratedDesignBlog = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pageUrl = "https://www.acuitygroups.in/blogs/from-function-to-feeling";

  const faqs = [
    {
      q: "What is integrated design?",
      a: "Integrated design combines facility management expertise with interior design planning to create spaces that are functional, efficient and visually appealing.",
    },
    {
      q: "How does integrated design benefit businesses?",
      a: "It improves productivity, supports employee comfort, reduces operational issues and creates a better brand experience for visitors and staff.",
    },
    {
      q: "What services does Acuity Groups offer in integrated design?",
      a: "Acuity Groups supports space planning, facility management integration, workplace support and service planning for commercial spaces.",
    },
    {
      q: "How can I get started with a design project?",
      a: "You can contact Acuity Groups through the contact page and our team will help you understand your requirements and suggest a suitable solution.",
    },
  ];

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "From Function to Feeling: Unleashing the Magic of Integrated Design",
    description:
      "Learn how integrated design combines facility management and interior planning to create functional, inspiring and sustainable spaces.",
    image: "https://www.acuitygroups.in/static/media/fff1.jpg",
    datePublished: "2024-03-05",
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
        name: "From Function to Feeling",
        item: pageUrl,
      },
    ],
  };

  const relatedBlogs = [
    {
      title: "The Importance of Facilities Management",
      link: "/blogs/the-importance-of-facilities",
    },
    {
      title: "Demystifying Facility Management",
      link: "/blogs/learn-how",
    },
    {
      title: "Modern Interior Solutions for Commercial Spaces",
      link: "/blogs/unleash-design",
    },
  ];

  const stats = [
    {
      value: "100+",
      label: "Projects Completed",
      icon: <Building className="text-blue-600 w-6 h-6" />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Award className="text-blue-600 w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Support",
      icon: <Clock className="text-blue-600 w-6 h-6" />,
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <Calendar className="text-blue-600 w-6 h-6" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Integrated Design and Facility Management | Acuity Groups</title>

        <meta
          name="description"
          content="Learn how integrated design combines facility management and space planning to create functional and inspiring spaces."
        />

        <meta
          name="keywords"
          content="integrated design, facility management, space planning, workplace design, commercial interiors, Acuity Groups"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:title"
          content="Integrated Design and Facility Management | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Integrated design combines facility management and space planning to create functional and inspiring spaces."
        />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Integrated Design and Facility Management | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Learn how integrated design creates functional and inspiring spaces."
        />

        <script type="application/ld+json">
          {JSON.stringify(articleData)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800 font-sans">
        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
          <img
            src={FFF1}
            alt="Modern integrated design office space"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl text-white">
            <span className="bg-blue-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
              <Sparkles size={16} /> Integrated Design
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
              From Function to Feeling: Unleashing the Magic of Integrated
              Design
            </h1>

            <div className="flex flex-wrap gap-5 mt-6 text-white/90">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <User size={18} /> Acuity Groups
              </div>

              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} /> Mar 5, 2024
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
        <div className="max-w-7xl mx-auto px-6 py-12">
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
                <Link to="/blogs" className="hover:text-blue-600 transition">
                  Blogs
                </Link>
              </li>

              <li className="text-gray-400">/</li>

              <li className="text-gray-700 font-medium">
                From Function to Feeling
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

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main article column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  The spaces we occupy have a powerful impact on daily work and
                  comfort. A thoughtfully designed environment can inspire
                  creativity, improve productivity and support well-being.
                  Integrated design combines facility management and space
                  planning to create spaces that are functional and visually
                  appealing.
                </p>
              </div>

              <div className="my-2">
                <img
                  src={FFF1}
                  alt="Modern office interior with integrated design elements"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>🏢 Open plan office with natural light</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    Integrated Design
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  The Impact of Well-Designed Spaces
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Whether it is a workplace, commercial building or service
                  area, design influences how people feel and perform. A
                  well-planned environment enhances comfort, supports
                  collaboration and creates a positive experience for everyone
                  who uses it.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  What is Integrated Design?
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Integrated design merges the practical requirements of
                  facility management with the creativity of interior planning.
                  This approach ensures that every space functions efficiently
                  while creating a welcoming and inspiring atmosphere.
                </p>
              </div>

              <div className="relative">
                <img
                  src={FFF2}
                  alt="Space planning layout and workplace design"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  📐 Ergonomic space planning
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  How Integrated Design Creates Better Spaces
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition">
                    <Layout className="text-blue-600 w-8 h-8 mb-3" />
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      Harmonious Space Planning
                    </h3>
                    <p className="text-gray-600">
                      Traffic flow, furniture placement, lighting and
                      accessibility are planned together to create practical and
                      comfortable spaces.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition">
                    <Palette className="text-blue-600 w-8 h-8 mb-3" />
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      Positive Atmosphere
                    </h3>
                    <p className="text-gray-600">
                      Colors, materials and layout choices help create a space
                      that feels welcoming and aligned with the needs of users.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition md:col-span-2">
                    <Leaf className="text-blue-600 w-8 h-8 mb-3" />
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      Sustainable Design Solutions
                    </h3>
                    <p className="text-gray-600">
                      Integrated design supports energy efficiency, natural
                      lighting, resource planning and long-term operational
                      savings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={FFF3}
                  alt="Sustainable workplace design with natural elements"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />

                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  🌿 Sustainable materials
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Benefits of Integrated Design
                </h2>

                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-white border p-5 rounded-xl shadow-sm hover:shadow-md transition text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="text-blue-600 w-6 h-6" />
                    </div>

                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      Functional Spaces
                    </h3>

                    <p className="text-gray-600 text-sm">
                      Designed to support productivity and daily operational
                      needs.
                    </p>
                  </div>

                  <div className="bg-white border p-5 rounded-xl shadow-sm hover:shadow-md transition text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="text-blue-600 w-6 h-6" />
                    </div>

                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      Better Environments
                    </h3>

                    <p className="text-gray-600 text-sm">
                      Interiors that improve comfort and user experience.
                    </p>
                  </div>

                  <div className="bg-white border p-5 rounded-xl shadow-sm hover:shadow-md transition text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Leaf className="text-blue-600 w-6 h-6" />
                    </div>

                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      Sustainable Planning
                    </h3>

                    <p className="text-gray-600 text-sm">
                      Smarter planning that supports long-term resource
                      efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  💡 Did You Know?
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  A well-planned space can improve comfort, workflow and
                  productivity. Integrated design helps businesses align design
                  decisions with facility operations.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose Acuity Groups?
                </h2>

                <p className="text-blue-50 text-lg leading-relaxed">
                  Acuity Groups combines facility management expertise with
                  workplace support solutions to create spaces that are
                  functional, professional and easier to manage.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
                  >
                    Let's Transform Your Space <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">Conclusion</h2>

                <p className="text-blue-50 text-lg leading-relaxed">
                  Integrated design goes beyond appearance. It creates spaces
                  that improve functionality, support comfort and make facility
                  operations easier. By combining design thinking and facility
                  management, businesses can build environments that work better
                  every day.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/blogs"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                >
                  ← Back to all blogs
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={FFF1}
                    alt="Acuity Groups integrated design team"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-xl">Acuity Groups</h3>

                <p className="text-gray-500 text-sm mt-1">
                  Integrated Design Support
                </p>

                <p className="text-gray-600 text-sm mt-3">
                  Professional facility management and workplace planning
                  support for commercial spaces.
                </p>

                <div className="mt-4 flex justify-center gap-2">
                  <Phone size={18} className="text-blue-600" />
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
                          src={idx === 0 ? FFF2 : idx === 1 ? FFF3 : FFF1}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <Link
                        to={blog.link}
                        className="text-blue-600 group-hover:text-blue-700 group-hover:underline transition text-sm font-medium flex-1"
                      >
                        {blog.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md border border-blue-100 text-center">
                <div className="text-5xl mb-3">🎨</div>

                <h3 className="font-bold text-blue-800 text-lg mb-2">
                  Design Your Space Better
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  Get support for integrated design and facility management.
                </p>

                <Link
                  to="/contact"
                  className="block text-center bg-blue-600 text-white py-2.5 rounded-full hover:bg-blue-700 transition shadow"
                >
                  Request a Quote
                </Link>

                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={FFF2}
                    alt="Integrated design quote request"
                    className="w-full h-20 object-cover"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 text-center shadow-sm border">
                <div className="text-3xl mb-1">⭐⭐⭐⭐⭐</div>

                <p className="text-gray-600 text-sm">
                  Trusted facility management support in Bangalore
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Functional | Professional | Sustainable
                </p>

                <div className="flex justify-center gap-4 mt-3">
                  <Thermometer size={20} className="text-gray-400" />
                  <Droplets size={20} className="text-gray-400" />
                  <BarChart size={20} className="text-gray-400" />
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            ❓ Frequently Asked Questions
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
                      <span className="text-blue-600 text-2xl">
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

              <div className="rounded-xl overflow-hidden shadow-md mt-4">
                <img
                  src={FFF3}
                  alt="Integrated design FAQ"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={FFF1}
              alt="Integrated design background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>

            <p className="text-blue-100 mb-8 text-lg">
              Combine functionality with better planning through integrated
              design.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
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
      </div>
    </>
  );
};

export default IntegratedDesignBlog;