import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import Cockroach from "../../images/cockroach.jpg";
import Termite from "../../images/termite.jpg";
import Mosquito from "../../images/mosquito.jpg";
import Facilitymanagementbanner from "../../images/fmimage2.jpg";
import FromFunctiontoFeeling from "../../images/fff1.jpg";
import TheImportanceFacilities from "../../images/The Importance of Facilities1.jpg";
import Learnhow from "../../images/Learnhow.png";
import UnleashDesigne from "../../images/UnleashDesigne.jpg";
import Security from "../../images/security.png";
import Security1 from "../../images/home1.jpg";
import RepairingMaintenance from "../../images/RepairingMaintenance.jpg";
import Why from "../../images/pest7889.jpg";
import Manpower from "../../images/manpower (1).jpg";
import HotelsHospitality from "../../images/house1 (1).jpg";
import Hospitality from "../../images/hospital1.webp";
import EducationIndustry from "../../images/school5.jpg";
import ManufacturingIndustry from "../../images/IndustrialFacility.jpg";

// Blog data (moved outside component to prevent unnecessary re-renders)
const blogs = [
  {
    title:
      "The Role of Facility Management in Manufacturing Excellence | Acuity Groups",
    description:
      "Learn how facility management services support manufacturing industries through maintenance, security, housekeeping, manpower, and operational efficiency.",
    image: ManufacturingIndustry,
    link: "/blogs/ManufacturingIndustry",
  },
  {
    title:
      "Why Schools and Colleges Need Professional Facility Management | Acuity Groups",
    description:
      "Create safe, clean, and productive learning environments with professional facility management services.",
    image: EducationIndustry,
    link: "/blogs/EducationIndustry",
  },
  {
    title:
      "The Importance of Facility Management in Healthcare Facilities | Acuity Groups",
    description:
      "Discover how facility management services improve hospital hygiene, patient safety, operational efficiency, and regulatory compliance.",
    image: Hospitality,
    link: "/blogs/ImportanceofFacility",
  },
  {
    title:
      "Why Hotels Need Professional Facility Management Services | Acuity Groups",
    description:
      "Discover how facility management services help hotels improve guest satisfaction, hygiene, safety, maintenance, and operational efficiency.",
    image: HotelsHospitality,
    link: "/blogs/HotelsHospitality",
  },
  {
    title:
      "Benefits of Manpower Outsourcing for Growing Businesses | Acuity Groups",
    description:
      "Discover how manpower outsourcing helps businesses reduce costs, improve efficiency, and access skilled professionals.",
    image: Manpower,
    link: "/blogs/mps",
  },
  {
    title: "Why Regular Pest Control Is Essential for Businesses",
    description:
      "Learn why regular pest control is important for offices, hotels, hospitals, and commercial properties. Protect your business with professional pest management services.",
    image: Why,
    link: "/blogs/WhyRegularPest",
  },
  {
    title:
      "Preventive Maintenance: The Key to Long-Term Asset Performance | Acuity Groups",
    description:
      "Discover how preventive maintenance helps businesses reduce downtime, lower repair costs, improve safety, and extend the lifespan of valuable assets.",
    image: RepairingMaintenance,
    link: "/blogs/RepairingMaintenance",
  },
  {
    title:
      "The Importance of Professional Housekeeping Services in Commercial Spaces | Acuity Groups",
    description:
      "Discover how professional housekeeping services improve workplace hygiene, employee productivity, customer satisfaction, and business reputation.",
    image: Security1,
    link: "/blogs/HousekeepingServices",
  },
  {
    title:
      "Why Every Business Needs Professional Security Services | Acuity Groups",
    description:
      "Discover how professional security services protect businesses, employees, assets, and customers while ensuring a safe working environment.",
    image: Security,
    link: "/blogs/WhyIntegrated",
  },
  {
    title: "Facility Management: A Cornerstone of Property Optimization",
    description:
      "Smart facility management solutions that enhance efficiency, preserve assets, and improve overall property value.",
    image: Facilitymanagementbanner,
    link: "/blogs/facilityManagements",
  },
  {
    title: "Cockroach Infestation Signs & Control Guide",
    description:
      "Identify early signs of cockroach infestation and protect your home effectively.",
    image: Cockroach,
    link: "/blogs/cockroaches",
  },
  {
    title: "Complete Termite Control Guide for Homes",
    description:
      "Protect wooden furniture and structures from destructive termites.",
    image: Termite,
    link: "/blogs/termite",
  },
  {
    title: "Mosquito Prevention Tips for Healthy Living",
    description:
      "Stop mosquito breeding and prevent diseases like dengue and malaria.",
    image: Mosquito,
    link: "/blogs/mosquito",
  },
  {
    title:
      "From Function to Feeling: Unleashing the Magic of Integrated Design",
    description:
      "Integrated design combines facility management and interior design to create spaces that are functional, visually appealing, and inspiring, enhancing productivity, comfort, and well-being.",
    image: FromFunctiontoFeeling,
    link: "/blogs/FromFunction",
  },
  {
    title: "The Importance of Facilities",
    description:
      "Discover how effective facility management improves productivity, enhances workplace safety, reduces costs, and creates efficient, well-maintained environments.",
    image: TheImportanceFacilities,
    link: "/blogs/TheImportanceFacilities",
  },
  {
    title: "Demystifying Facility Management: From Buzzwords to Bottom Line",
    description:
      "Learn how modern facility management improves efficiency, reduces costs, enhances sustainability, and creates better workplaces.",
    image: Learnhow,
    link: "/blogs/Learnhow",
  },
  {
    title:
      "Modern interior solutions for offices, hotels, and commercial spaces.",
    description:
      "Discover the latest interior design trends helping offices, hotels, and commercial spaces create functional, elegant, and memorable environments.",
    image: UnleashDesigne,
    link: "/blogs/UnleashDesigne",
  },
];

const popularTopics = [
  {
    name: "Facility Management in Manufacturing",
    link: "/blogs/ManufacturingIndustry",
  },
  {
    name: "Healthcare Facility Management",
    link: "/blogs/ImportanceofFacility",
  },
  {
    name: "Professional Housekeeping Services",
    link: "/blogs/HousekeepingServices",
  },
  { name: "Professional Security Services", link: "/blogs/WhyIntegrated" },
  { name: "Pest Control for Businesses", link: "/blogs/WhyRegularPest" },
  { name: "Manpower Outsourcing Benefits", link: "/blogs/mps" },
  { name: "Preventive Maintenance", link: "/blogs/RepairingMaintenance" },
  {
    name: "Integrated Facility Management",
    link: "/blogs/facilitymanagment",
  },
];

export default function Blog() {
  useEffect(() => {
    // Title
    document.title =
      "Facility Management & Integrated Services Blogs | Acuity Groups Bangalore | Security, Housekeeping, Maintenance, Manpower";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore expert blogs on Facility Management, Security Services, Housekeeping, Pest Control, Manpower Outsourcing, Maintenance, and Workplace Productivity. Insights from Acuity Groups, Bangalore.",
      );
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content =
        "Explore expert blogs on Facility Management, Security Services, Housekeeping, Pest Control, Manpower Outsourcing, Maintenance, and Workplace Productivity. Insights from Acuity Groups, Bangalore.";
      document.head.appendChild(metaDesc);
    }

    // Keywords
    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.name = "keywords";
      document.head.appendChild(keywords);
    }
    keywords.content =
      "facility management blogs, integrated facility management, housekeeping services, security services, manpower outsourcing, pest control services, maintenance services, commercial facility management, industrial facility management, Bangalore facility management, workplace productivity, Acuity Groups";

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://acuitygroups.com/blogs";

    // Robots
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "index, follow";
      document.head.appendChild(robots);
    }

    // Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute(
      "content",
      "Facility Management & Integrated Services Blogs | Acuity Groups",
    );

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute(
      "content",
      "Expert insights on facility management, security services, housekeeping, maintenance, manpower outsourcing, and workplace efficiency from Acuity Groups.",
    );

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", "https://acuitygroups.com/blogs");

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement("meta");
      ogType.setAttribute("property", "og:type");
      document.head.appendChild(ogType);
    }
    ogType.setAttribute("content", "website");

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute(
      "content",
      "https://acuitygroups.com/static/media/fmimage2.jpg",
    );

    // Twitter Card
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement("meta");
      twitterCard.setAttribute("name", "twitter:card");
      twitterCard.setAttribute("content", "summary_large_image");
      document.head.appendChild(twitterCard);
    }

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute(
      "content",
      "Facility Management & Integrated Services Blogs | Acuity Groups",
    );

    // Structured Data (JSON-LD)
    const existingScript = document.getElementById("ld-json-blog-listing");
    if (existingScript) existingScript.remove();

    const schemaScript = document.createElement("script");
    schemaScript.id = "ld-json-blog-listing";
    schemaScript.type = "application/ld+json";
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Acuity Groups Blog - Facility Management Insights",
      description:
        "Comprehensive blog posts covering facility management, security, housekeeping, maintenance, pest control, and manpower outsourcing.",
      url: "https://acuitygroups.com/blogs",
      numberOfItems: blogs.length,
      itemListElement: blogs.map((blog, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://acuitygroups.com${blog.link}`,
        name: blog.title,
        description: blog.description,
        image: `https://acuitygroups.com/static/media/${blog.image.split("/").pop()}`,
      })),
      publisher: {
        "@type": "Organization",
        name: "Acuity Groups",
        url: "https://acuitygroups.com",
        logo: "https://acuitygroups.com/logo.png",
      },
    });
    document.head.appendChild(schemaScript);

    return () => {
      const script = document.getElementById("ld-json-blog-listing");
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        {/* Simple overlay pattern - no parsing issues */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="relative container mx-auto px-6 py-16 md:py-24 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-4">
            Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            Insights & Expertise
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Discover expert articles on Facility Management, Security,
            Housekeeping, Pest Control, and Manpower Solutions
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm text-sm">
              📚 {blogs.length}+ Articles
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm text-sm">
              ⚡ Expert Insights
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm text-sm">
              🎯 Actionable Tips
            </span>
          </div>
        </div>
        {/* Wave divider - fixed gradient reference */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-12 md:h-16"
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f9fafb" />
                <stop offset="100%" stopColor="#f3f4f6" />
              </linearGradient>
            </defs>
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="url(#waveGradient)"
            ></path>
          </svg>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-indigo-600 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700 font-medium">Blogs</li>
          </ol>
        </nav>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <Link
              to={blog.link}
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {index % 2 === 0 ? "5 min read" : "4 min read"}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {blog.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-indigo-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Article <span>→</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      📖
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Topics */}
        <section className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-3xl">🔥</span> Popular Facility Management
              Topics
            </h2>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {popularTopics.map((topic, idx) => (
                <Link
                  key={idx}
                  to={topic.link}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-all group border border-transparent hover:border-indigo-200"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform"></span>
                  <span className="text-gray-700 group-hover:text-indigo-700 font-medium">
                    {topic.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Transform Your Facility Management
              </h3>
              <p className="text-indigo-100 max-w-md">
                Get expert advice and customized solutions from Acuity Groups —
                your trusted partner in integrated facility management.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-indigo-900 font-bold rounded-full hover:bg-gray-100 transition shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              Contact Our Experts
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Acuity Groups. All rights reserved.
          Expert Facility Management, Security, Housekeeping, and Manpower
          Services in Bangalore.
        </div>
      </footer>
    </div>
  );
}
