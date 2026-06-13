import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  User,
  Shield,
  Sparkles,
  Wrench,
  Bug,
  ArrowRight,
  CheckCircle,
  Building,
  Thermometer,
  Droplets,
  BarChart3,
  Award,
  Clock,
  Phone,
} from "lucide-react";
import School1 from "../../images/school1.jpg";
import School4 from "../../images/school2.jpg";
import School3 from "../../images/school3.jpg";

const EducationFacilityManagementBlog = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Structured Data: Article + FAQ
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Schools and Colleges Need Professional Facility Management",
    description:
      "Discover how professional facility management helps schools & colleges create safe, clean, and productive learning environments. Campus security, housekeeping, maintenance & more from Acuity Groups.",
    image: "https://www.acuitygroups.in/static/media/school1.jpg",
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
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
      "@id": "https://www.acuitygroups.in/blogs/EducationIndustry",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does facility management include for schools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It includes campus security, housekeeping, preventive maintenance, pest control, landscaping, waste management, and energy management.",
        },
      },
      {
        "@type": "Question",
        name: "How does facility management improve student learning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clean, safe, and comfortable environments boost concentration, reduce absenteeism, and enhance overall academic performance.",
        },
      },
      {
        "@type": "Question",
        name: "Can small schools afford professional facility management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Acuity Groups offers scalable, cost-effective packages tailored to the size and budget of any educational institution.",
        },
      },
    ],
  };

  // Related blogs for internal linking
  const relatedBlogs = [
    {
      title: "Facility Management in Manufacturing Excellence",
      link: "/blogs/ManufacturingIndustry",
    },
    {
      title: "Importance of Facility Management in Healthcare",
      link: "/blogs/ImportanceofFacility",
    },
  ];

  // Key statistics
  const stats = [
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: <Award className="text-green-600 w-6 h-6" />,
    },
    {
      value: "50+",
      label: "Schools Served",
      icon: <Building className="text-green-600 w-6 h-6" />,
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
          href="https://www.acuitygroups.in/blogs/EducationIndustry"
        />
        <title>
          Why Schools & Colleges Need Professional Facility Management | Acuity
          Groups
        </title>
        <meta
          name="description"
          content="Elevate your school or college with professional facility management. Discover trusted campus security, housekeeping, and maintenance by Acuity Groups."
        />
        <meta
          name="keywords"
          content="school facility management, college facility management, campus security, educational facility services, housekeeping in schools, maintenance for schools, Acuity Groups, education facility management Bangalore"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.acuitygroups.in/blogs/EducationIndustry"
        />
        <meta
          property="og:title"
          content="Why Schools & Colleges Need Professional Facility Management | Acuity Groups"
        />
        <meta
          property="og:description"
          content="Discover how professional facility management helps schools & colleges create safe, clean, and productive learning environments. Campus security, housekeeping, maintenance & more from Acuity Groups."
        />
        <meta
          property="og:image"
          content="https://www.acuitygroups.in/static/media/school1.jpg"
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.acuitygroups.in/blogs/EducationIndustry"
        />
        <meta
          name="twitter:title"
          content="Why Schools & Colleges Need Professional Facility Management | Acuity Groups"
        />
        <meta
          name="twitter:description"
          content="Discover how professional facility management helps schools & colleges create safe, clean, and productive learning environments. Campus security, housekeeping, maintenance & more from Acuity Groups."
        />
        <meta
          name="twitter:image"
          content="https://www.acuitygroups.in/static/media/school1.jpg"
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

      <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800 font-sans">
        {/* Hero Section with School1 image */}
        <div className="relative h-[70vh] min-h-[550px] overflow-hidden">
          <img
            src={School1}
            alt="Modern school campus with professional facility management – Acuity Groups"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 max-w-5xl text-white">
            <span className="bg-green-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg inline-flex items-center gap-2">
              <Shield size={16} /> Education Industry
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 max-w-4xl leading-tight drop-shadow-lg">
              Why Schools and Colleges Need Professional Facility Management
            </h1>
            <div className="flex flex-wrap gap-5 mt-6 text-white/90">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <User size={18} /> Acuity Groups
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} /> June 2026
              </div>
            </div>
          </div>
          {/* Bottom wave */}
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
                Education Facility Management
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
              {/* Introduction */}
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Educational institutions are responsible for providing a safe,
                  healthy, and productive environment for students, teachers,
                  and staff. Professional facility management helps schools and
                  colleges maintain high standards while focusing on education.
                </p>
              </div>

              {/* Feature Cards with Icons - Enhanced */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  🏫 Key Facility Management Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition">
                    <Shield className="text-green-600 w-10 h-10 mb-3" />
                    <h3 className="font-bold text-xl mb-2">Campus Security</h3>
                    <p className="text-gray-600">
                      Trained security personnel, CCTV surveillance, access
                      control, and emergency response to ensure student safety.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition">
                    <Sparkles className="text-green-600 w-10 h-10 mb-3" />
                    <h3 className="font-bold text-xl mb-2">Housekeeping</h3>
                    <p className="text-gray-600">
                      Daily cleaning of classrooms, washrooms, corridors, and
                      common areas with eco-friendly products.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition">
                    <Wrench className="text-green-600 w-10 h-10 mb-3" />
                    <h3 className="font-bold text-xl mb-2">Maintenance</h3>
                    <p className="text-gray-600">
                      Preventive and corrective maintenance for electrical,
                      plumbing, HVAC, and building infrastructure.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition">
                    <Bug className="text-green-600 w-10 h-10 mb-3" />
                    <h3 className="font-bold text-xl mb-2">Pest Management</h3>
                    <p className="text-gray-600">
                      Safe, eco-friendly pest control to keep educational spaces
                      hygienic and pest-free.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2: School4 (school2.jpg) - Classroom cleaning */}
              <div className="my-4">
                <img
                  src={School4}
                  alt="Professional housekeeping staff cleaning classroom in school"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>
                    🧹 Regular cleaning ensures a healthy learning environment
                  </span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    Housekeeping
                  </span>
                </div>
              </div>

              {/* Why Facility Management Matters */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  🎯 Supporting Student Success
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Students learn better in environments that are clean,
                  organized, and comfortable. Facility management contributes to
                  improved concentration, reduced absenteeism, and better
                  academic outcomes.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    <span>Improved concentration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    <span>Reduced sick days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    <span>Higher teacher retention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    <span>Better parent satisfaction</span>
                  </div>
                </div>
              </div>

              {/* Benefits List with Icons */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  ✅ Benefits of Professional Facility Management
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Improved campus safety",
                    "Better hygiene and cleanliness",
                    "Reduced maintenance costs",
                    "Enhanced learning environment",
                    "Operational efficiency",
                    "Positive brand image",
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm"
                    >
                      <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image 3: School3 - Students in classroom */}
              <div className="relative">
                <img
                  src={School3}
                  alt="Students studying in a clean and well-maintained classroom"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  📚 Conducive learning environment
                </div>
              </div>

              {/* Conclusion CTA */}
              <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                <p className="text-green-50 text-lg leading-relaxed">
                  Professional facility management helps schools and colleges
                  provide safe, clean, and productive learning environments.
                  Acuity Groups delivers customized solutions that support
                  educational excellence and campus safety.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contactus"
                    className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
                  >
                    Get a Free Consultation <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
                  >
                    Explore Services
                  </Link>
                </div>
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

            {/* Sidebar - Enhanced with images */}
            <aside className="space-y-8">
              {/* Author / Expert Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img
                    src={School1}
                    alt="Facility Management Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">Acuity Experts</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Facility Management Team
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  Specialized in educational institution services with 15+ years
                  experience.
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
                  {relatedBlogs.map((blog, idx) => (
                    <li key={idx} className="flex gap-3 items-center group">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src={
                            idx === 0 ? School4 : idx === 1 ? School3 : School1
                          }
                          alt="thumb"
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

              {/* Quick CTA Card with image */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border border-green-100 text-center">
                <div className="text-5xl mb-3">🏫</div>
                <h3 className="font-bold text-green-800 text-lg mb-2">
                  Need Facility Management?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Customized plans for security, housekeeping, maintenance &
                  more.
                </p>
                <Link
                  to="/contactus"
                  className="block text-center bg-green-600 text-white py-2.5 rounded-full hover:bg-green-700 transition shadow"
                >
                  Request a Quote
                </Link>
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img
                    src={School4}
                    alt="Campus"
                    className="w-full h-20 object-cover"
                  />
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm border">
                <div className="text-3xl mb-1">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 text-sm">
                  Trusted by 50+ educational institutions
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  ISO Certified | 24/7 Support
                </p>
                <div className="flex justify-center gap-4 mt-3">
                  <Thermometer size={20} className="text-gray-400" />
                  <Droplets size={20} className="text-gray-400" />
                  <BarChart3 size={20} className="text-gray-400" />
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* FAQ Section with Accordion and Image */}
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            ❓ Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  q: "What does facility management include for schools?",
                  a: "It includes campus security, housekeeping, preventive maintenance, pest control, landscaping, waste management, and energy management.",
                },
                {
                  q: "How does facility management improve student learning?",
                  a: "Clean, safe, and comfortable environments boost concentration, reduce absenteeism, and enhance overall academic performance.",
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
            <div className="space-y-4">
              {[
                {
                  q: "Can small schools afford professional facility management?",
                  a: "Yes, Acuity Groups offers scalable, cost-effective packages tailored to the size and budget of any educational institution.",
                },
                {
                  q: "How does Acuity Groups ensure quality?",
                  a: "We use ISO-certified processes, regular audits, trained staff, and client feedback systems to maintain high standards.",
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
                    <span className="text-green-600 text-2xl">
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
              <div className="rounded-xl overflow-hidden shadow-md mt-4">
                <img
                  src={School3}
                  alt="FAQ illustration"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner with image overlay */}
        <section className="relative bg-gradient-to-r from-green-800 to-green-700 text-white py-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={School1}
              alt="background pattern"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enhance Your Campus Experience
            </h2>
            <p className="text-green-100 mb-8 text-lg">
              Partner with Acuity Groups for reliable, professional facility
              management.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contactus"
                className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Contact Our Experts <ArrowRight size={18} />
              </Link>
              <Link
                to="/blogs/allblogs"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
              >
                Read More Blogs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EducationFacilityManagementBlog;
