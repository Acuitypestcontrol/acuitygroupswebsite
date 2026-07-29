import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Clock3,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

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
import RepairingMaintenance from "../../images/repair.jpg";
import Why from "../../images/pest7889.jpg";
import Manpower from "../../images/manpower (1).jpg";
import HotelsHospitality from "../../images/house1 (1).jpg";
import Hospitality from "../../images/hospital1.webp";
import EducationIndustry from "../../images/school5.jpg";
import ManufacturingIndustry from "../../images/IndustrialFacility.jpg";

const blogs = [
  {
    title:
      "The Role of Facility Management in Manufacturing Excellence | Acuity Groups",
    description:
      "Learn how facility management services support manufacturing industries through maintenance, security, housekeeping, manpower, and operational efficiency.",
    image: ManufacturingIndustry,
    link: "/blogs/ManufacturingIndustry",
    category: "Facility Management",
    readTime: "5 min read",
  },
  {
    title:
      "Why Schools and Colleges Need Professional Facility Management | Acuity Groups",
    description:
      "Create safe, clean, and productive learning environments with professional facility management services.",
    image: EducationIndustry,
    link: "/blogs/EducationIndustry",
    category: "Facility Management",
    readTime: "4 min read",
  },
  {
    title:
      "The Importance of Facility Management in Healthcare Facilities | Acuity Groups",
    description:
      "Discover how facility management services improve hospital hygiene, patient safety, operational efficiency, and regulatory compliance.",
    image: Hospitality,
    link: "/blogs/ImportanceofFacility",
    category: "Facility Management",
    readTime: "5 min read",
  },
  {
    title:
      "Why Hotels Need Professional Facility Management Services | Acuity Groups",
    description:
      "Discover how facility management services help hotels improve guest satisfaction, hygiene, safety, maintenance, and operational efficiency.",
    image: HotelsHospitality,
    link: "/blogs/HotelsHospitality",
    category: "Facility Management",
    readTime: "5 min read",
  },
  {
    title:
      "Benefits of Manpower Outsourcing for Growing Businesses | Acuity Groups",
    description:
      "Discover how manpower outsourcing helps businesses reduce costs, improve efficiency, and access skilled professionals.",
    image: Manpower,
    link: "/blogs/mps",
    category: "Manpower",
    readTime: "4 min read",
  },
  {
    title: "Why Regular Pest Control Is Essential for Businesses",
    description:
      "Learn why regular pest control is important for offices, hotels, hospitals, and commercial properties. Protect your business with professional pest management services.",
    image: Why,
    link: "/blogs/WhyRegularPest",
    category: "Pest Control",
    readTime: "5 min read",
  },
  {
    title:
      "Preventive Maintenance: The Key to Long-Term Asset Performance | Acuity Groups",
    description:
      "Discover how preventive maintenance helps businesses reduce downtime, lower repair costs, improve safety, and extend the lifespan of valuable assets.",
    image: RepairingMaintenance,
    link: "/blogs/RepairingMaintenance",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    title:
      "The Importance of Professional Housekeeping Services in Commercial Spaces | Acuity Groups",
    description:
      "Discover how professional housekeeping services improve workplace hygiene, employee productivity, customer satisfaction, and business reputation.",
    image: Security1,
    link: "/blogs/HousekeepingServices",
    category: "Housekeeping",
    readTime: "4 min read",
  },
  {
    title:
      "Why Every Business Needs Professional Security Services | Acuity Groups",
    description:
      "Discover how professional security services protect businesses, employees, assets, and customers while ensuring a safe working environment.",
    image: Security,
    link: "/blogs/professional-security-services",
    category: "Security",
    readTime: "4 min read",
  },
  {
    title: "Facility Management: A Cornerstone of Property Optimization",
    description:
      "Smart facility management solutions that enhance efficiency, preserve assets, and improve overall property value.",
    image: Facilitymanagementbanner,
    link: "/blogs/facilitymanagment",
    category: "Facility Management",
    readTime: "5 min read",
  },
  {
    title: "Cockroach Infestation Signs & Control Guide",
    description:
      "Identify early signs of cockroach infestation and protect your home effectively.",
    image: Cockroach,
    link: "/blogs/cockroaches",
    category: "Pest Control",
    readTime: "4 min read",
  },
  {
    title: "Complete Termite Control Guide for Homes",
    description:
      "Protect wooden furniture and structures from destructive termites.",
    image: Termite,
    link: "/blogs/termite",
    category: "Pest Control",
    readTime: "5 min read",
  },
  {
    title: "Mosquito Prevention Tips for Healthy Living",
    description:
      "Stop mosquito breeding and prevent diseases like dengue and malaria.",
    image: Mosquito,
    link: "/blogs/mosquito",
    category: "Pest Control",
    readTime: "4 min read",
  },
  {
    title:
      "From Function to Feeling: Unleashing the Magic of Integrated Design",
    description:
      "Integrated design combines facility management and interior design to create spaces that are functional, visually appealing, and inspiring, enhancing productivity, comfort, and well-being.",
    image: FromFunctiontoFeeling,
    link: "/blogs/FromFunction",
    category: "Design",
    readTime: "5 min read",
  },
  {
    title: "The Importance of Facilities",
    description:
      "Discover how effective facility management improves productivity, enhances workplace safety, reduces costs, and creates efficient, well-maintained environments.",
    image: TheImportanceFacilities,
    link: "/blogs/TheImportanceFacilities",
    category: "Facility Management",
    readTime: "4 min read",
  },
  {
    title: "Demystifying Facility Management: From Buzzwords to Bottom Line",
    description:
      "Learn how modern facility management improves efficiency, reduces costs, enhances sustainability, and creates better workplaces.",
    image: Learnhow,
    link: "/blogs/Learnhow",
    category: "Facility Management",
    readTime: "5 min read",
  },
  {
    title:
      "Modern interior solutions for offices, hotels, and commercial spaces.",
    description:
      "Discover the latest interior design trends helping offices, hotels, and commercial spaces create functional, elegant, and memorable environments.",
    image: UnleashDesigne,
    link: "/blogs/UnleashDesigne",
    category: "Design",
    readTime: "4 min read",
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
  {
    name: "Professional Security Services",
    link: "/blogs/professional-security-services",
  },
  {
    name: "Pest Control for Businesses",
    link: "/blogs/WhyRegularPest",
  },
  {
    name: "Manpower Outsourcing Benefits",
    link: "/blogs/mps",
  },
  {
    name: "Preventive Maintenance",
    link: "/blogs/RepairingMaintenance",
  },
  {
    name: "Integrated Facility Management",
    link: "/blogs/facilitymanagment",
  },
];

const categories = [
  "All",
  "Facility Management",
  "Pest Control",
  "Security",
  "Housekeeping",
  "Maintenance",
  "Manpower",
  "Design",
];

const categoryIcons = {
  "Facility Management": Building2,
  "Pest Control": ShieldCheck,
  Security: ShieldCheck,
  Housekeeping: Sparkles,
  Maintenance: Wrench,
  Manpower: BriefcaseBusiness,
  Design: Building2,
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const viewportSettings = {
  once: false,
  amount: 0.12,
  margin: "-40px 0px -40px 0px",
};

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredBlog = blogs[0];

  const filteredBlogs = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;

      const matchesSearch =
        !normalizedSearch ||
        blog.title.toLowerCase().includes(normalizedSearch) ||
        blog.description.toLowerCase().includes(normalizedSearch) ||
        blog.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    const existingScript = document.getElementById("ld-json-blog-listing");

    if (existingScript) {
      existingScript.remove();
    }

    const schemaScript = document.createElement("script");

    schemaScript.id = "ld-json-blog-listing";
    schemaScript.type = "application/ld+json";

    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Acuity Groups Blog - Facility Management Insights",
      description:
        "Comprehensive blog posts covering facility management, security, housekeeping, maintenance, pest control, and manpower outsourcing.",
      url: "https://www.acuitygroups.in/blogs",
      numberOfItems: blogs.length,
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.acuitygroups.in${blog.link}`,
        name: blog.title,
        description: blog.description,
        image: `https://www.acuitygroups.in/static/media/${blog.image
          .split("/")
          .pop()}`,
      })),
      publisher: {
        "@type": "Organization",
        name: "Acuity Groups",
        url: "https://www.acuitygroups.in",
        logo: "https://www.acuitygroups.in/logo.png",
      },
    });

    document.head.appendChild(schemaScript);

    return () => {
      const script = document.getElementById("ld-json-blog-listing");

      if (script) {
        script.remove();
      }
    };
  }, []);

  const clearFilters = () => {
    setSearchTerm("");
    setActiveCategory("All");
  };

  const hasActiveFilters =
    searchTerm.trim().length > 0 || activeCategory !== "All";
      return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.acuitygroups.in/blogs" />

        <title>
          Facility Management & Integrated Services Blogs | Acuity Groups
          Bangalore
        </title>

        <meta
          name="description"
          content="Apply for pest control technician, operations supervisor and business support jobs at Acuity Groups LLP in Bengaluru. Freshers can also apply."
        />

        <meta
          name="keywords"
          content="facility management blogs, integrated facility management, housekeeping services, security services, manpower outsourcing, pest control services, maintenance services, commercial facility management, industrial facility management, Bangalore facility management, workplace productivity, Acuity Groups"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/blogs"
        />

        <meta
          property="og:title"
          content="Facility Management & Integrated Services Blogs | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Expert insights on facility management, security services, housekeeping, maintenance, manpower outsourcing, and workplace efficiency from Acuity Groups."
        />

        <meta
          property="og:image"
          content="https://www.acuitygroups.in/static/media/fmimage2.jpg"
        />

        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:url"
          content="https://www.acuitygroups.in/blogs"
        />

        <meta
          name="twitter:title"
          content="Facility Management & Integrated Services Blogs | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Expert insights on facility management, security services, housekeeping, maintenance, manpower outsourcing, and workplace efficiency from Acuity Groups."
        />

        <meta
          name="twitter:image"
          content="https://www.acuitygroups.in/static/media/fmimage2.jpg"
        />
      </Helmet>

      <div className="min-h-screen overflow-hidden bg-[#F7F9FC] text-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#071A2E] text-white">
          {/* Background Effects */}
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              animate={{
                x: [0, 45, 0],
                y: [0, -30, 0],
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-32 -top-24 h-[430px] w-[430px] rounded-full bg-blue-500/20 blur-[110px]"
            />

            <motion.div
              animate={{
                x: [0, -35, 0],
                y: [0, 45, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 17,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-28 top-10 h-[460px] w-[460px] rounded-full bg-[#E8A33D]/20 blur-[120px]"
            />

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
            />

            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 75,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
            />

            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F9FC] to-transparent" />
          </div>

          <div className="relative mx-auto max-w-[1450px] px-4 pb-28 pt-20 sm:px-6 md:pb-32 md:pt-28 lg:px-8 lg:pb-40 lg:pt-32">
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mx-auto max-w-5xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 shadow-lg backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8A33D] opacity-70" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8A33D]" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/80 sm:text-xs">
                  Acuity Groups Knowledge Hub
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-1.5px] sm:text-5xl md:text-6xl lg:text-7xl">
                Insights that help businesses
                <span className="block bg-gradient-to-r from-[#F4C067] via-white to-blue-300 bg-clip-text text-transparent">
                  operate smarter
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg md:text-xl">
                Discover expert articles on Facility Management, Security,
                Housekeeping, Pest Control, Maintenance and Manpower Solutions.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm text-white/75 backdrop-blur-xl">
                  <BookOpen size={16} className="text-[#F4C067]" />

                  <span>{blogs.length}+ Articles</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm text-white/75 backdrop-blur-xl">
                  <Sparkles size={16} className="text-[#F4C067]" />

                  <span>Expert Insights</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm text-white/75 backdrop-blur-xl">
                  <ShieldCheck size={16} className="text-[#F4C067]" />

                  <span>Actionable Advice</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <main className="relative z-10">
          <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
            {/* Search and Filter Panel */}
            <motion.section
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="-mt-20 rounded-[28px] border border-white/80 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.13)] backdrop-blur-2xl sm:p-6 lg:-mt-24 lg:p-8"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#D18A22]">
                    Explore Our Articles
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
                    Find insights for your business
                  </h2>
                </div>

                <div className="relative w-full xl:max-w-md">
                  <Search
                    size={19}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search articles, services or topics..."
                    aria-label="Search blog articles"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-12 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/10"
                  />

                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm("")}
                      aria-label="Clear search"
                      className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 hover:bg-[#0B1F3A] hover:text-white"
                    >
                      <X size={15} />
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => {
                  const Icon =
                    category === "All"
                      ? BookOpen
                      : categoryIcons[category] || BookOpen;

                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "border-[#0B1F3A] bg-[#0B1F3A] text-white shadow-[0_10px_25px_rgba(11,31,58,0.2)]"
                          : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-[#E8A33D] hover:text-[#0B1F3A]"
                      }`}
                    >
                      <Icon
                        size={15}
                        className={
                          isActive ? "text-[#F4C067]" : "text-slate-400"
                        }
                      />

                      <span>{category}</span>
                    </button>
                  );
                })}
              </div>
            </motion.section>

            {/* Breadcrumb */}
            <nav
              className="my-8 flex items-center text-sm text-slate-500"
              aria-label="Breadcrumb"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-[#D18A22]"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <ChevronRight size={14} className="text-slate-300" />
                </li>

                <li className="font-semibold text-[#0B1F3A]">Blogs</li>
              </ol>
            </nav>

            {/* Featured Article */}
            {!hasActiveFilters && (
              <motion.section
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewportSettings}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-14"
              >
                <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#D18A22]">
                      Editor's Pick
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl">
                      Featured insight
                    </h2>
                  </div>

                  <Link
                    to={featuredBlog.link}
                    className="group hidden items-center gap-2 text-sm font-semibold text-[#0B1F3A] sm:inline-flex"
                  >
                    Read featured article

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                <Link
                  to={featuredBlog.link}
                  className="group relative grid overflow-hidden rounded-[30px] border border-white bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.18)] lg:grid-cols-[1.15fr_0.85fr]"
                >
                  <div className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[480px]">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/75 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#071A2E]/10" />

                    <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                      Featured Article
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-center overflow-hidden bg-[#071A2E] p-7 text-white sm:p-10 lg:p-12">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#E8A33D]/15 blur-3xl" />

                    <div className="relative">
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-[#E8A33D]/30 bg-[#E8A33D]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-[#F4C067]">
                          {featuredBlog.category}
                        </span>

                        <span className="flex items-center gap-1.5 text-sm text-white/55">
                          <Clock3 size={14} />

                          {featuredBlog.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold leading-tight tracking-[-0.7px] sm:text-3xl lg:text-4xl">
                        {featuredBlog.title}
                      </h2>

                      <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
                        {featuredBlog.description}
                      </p>

                      <div className="mt-8 inline-flex items-center gap-3 font-semibold text-[#F4C067]">
                        <span>Read full article</span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#E8A33D] group-hover:text-[#071A2E]">
                          <ArrowRight size={18} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.section>
            )}

            {/* Articles Header */}
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#D18A22]">
                  Latest Knowledge
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl">
                  {activeCategory === "All"
                    ? "All articles"
                    : `${activeCategory} articles`}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Showing {filteredBlogs.length}{" "}
                  {filteredBlogs.length === 1 ? "article" : "articles"}
                </p>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:self-auto"
                >
                  <X size={15} />

                  Clear filters
                </button>
              )}
            </div>

            {/* Blog Cards */}
            {filteredBlogs.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={viewportSettings}
                className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredBlogs.map((blog, index) => {
                  const CategoryIcon =
                    categoryIcons[blog.category] || BookOpen;

                  return (
                    <motion.article
                      key={blog.link}
                      variants={cardVariants}
                      className="h-full"
                    >
                      <Link
                        to={blog.link}
                        className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(15,23,42,0.16)]"
                      >
                        <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-transparent bg-gradient-to-br from-blue-400/0 via-transparent to-[#E8A33D]/0 transition-all duration-500 group-hover:border-blue-200/50 group-hover:from-blue-400/10 group-hover:to-[#E8A33D]/10" />

                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/75 via-[#071A2E]/5 to-transparent" />

                          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-white backdrop-blur-xl">
                            <CategoryIcon size={13} />

                            <span>{blog.category}</span>
                          </div>

                          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-xs text-white/90 backdrop-blur-xl">
                            <Clock3 size={13} />

                            <span>{blog.readTime}</span>
                          </div>

                          <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-[#0B1F3A] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <ArrowRight size={17} />
                          </div>
                        </div>

                        <div className="relative flex flex-1 flex-col p-6">
                          <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-slate-400">
                            <span>Acuity Groups</span>

                            <span className="h-1 w-1 rounded-full bg-[#E8A33D]" />

                            <span>Insights</span>
                          </div>

                          <h3 className="line-clamp-2 text-xl font-bold leading-snug tracking-[-0.4px] text-[#0B1F3A] transition-colors duration-300 group-hover:text-[#C57E16]">
                            {blog.title}
                          </h3>

                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                            {blog.description}
                          </p>

                          <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                            <span className="text-sm font-semibold text-[#0B1F3A]">
                              Read article
                            </span>

                            <span className="flex items-center gap-1 text-xs text-slate-400">
                              Article {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                  <Search size={28} />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#0B1F3A]">
                  No articles found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  We could not find an article matching your current search or
                  category.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#153A64]"
                >
                  <X size={15} />

                  Clear all filters
                </button>
              </motion.div>
            )}
                        {/* Popular Topics */}
            <motion.section
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={viewportSettings}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-20"
            >
              <div className="relative overflow-hidden rounded-[32px] bg-[#071A2E] px-6 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:px-8 md:px-10 md:py-10">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#E8A33D]/15 blur-3xl" />

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />

                <div className="relative">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#E8A33D]/30 bg-[#E8A33D]/10 px-3 py-1.5">
                        <Sparkles size={14} className="text-[#F4C067]" />

                        <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#F4C067]">
                          Popular Topics
                        </span>
                      </div>

                      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Explore what businesses are reading
                      </h2>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                        Discover practical insights across integrated facility
                        management, maintenance, security, housekeeping,
                        manpower and pest management.
                      </p>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[#F4C067] backdrop-blur-xl">
                      <BookOpen size={24} />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {popularTopics.map((topic, index) => (
                      <Link
                        key={topic.link}
                        to={topic.link}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white/75 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E8A33D]/35 hover:bg-white/[0.1] hover:text-white"
                      >
                        <div className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />

                        <div className="relative flex items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#E8A33D]/10 text-[#F4C067] transition-all duration-300 group-hover:bg-[#E8A33D] group-hover:text-[#071A2E]">
                            <span className="text-xs font-bold">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-6">
                              {topic.name}
                            </p>

                            <span className="mt-2 inline-flex items-center gap-1 text-xs text-white/40 transition-colors duration-300 group-hover:text-[#F4C067]">
                              Explore topic

                              <ChevronRight
                                size={13}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={viewportSettings}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pb-20 pt-16 sm:pb-24"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-[0_25px_70px_rgba(15,23,42,0.1)] sm:px-8 md:px-12 md:py-14">
                <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-100 blur-3xl" />

                <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#F4C067]/15 blur-3xl" />

                <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#E8A33D]/20 bg-[#E8A33D]/10 px-3 py-1.5">
                      <Building2 size={14} className="text-[#D18A22]" />

                      <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#C57E16]">
                        Complete Facility Support
                      </span>
                    </div>

                    <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.8px] text-[#0B1F3A] sm:text-4xl lg:text-5xl">
                      Transform your facility management operations
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                      Get expert advice and customized solutions from Acuity
                      Groups — your trusted partner in integrated facility
                      management.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                        <ShieldCheck size={15} className="text-[#D18A22]" />
                        Professional team
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                        <Sparkles size={15} className="text-[#D18A22]" />
                        Customized solutions
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                        <Clock3 size={15} className="text-[#D18A22]" />
                        Reliable support
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="group relative inline-flex shrink-0 items-center gap-3 overflow-hidden rounded-full bg-[#0B1F3A] px-7 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(11,31,58,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#153A64] hover:shadow-[0_24px_50px_rgba(11,31,58,0.3)]"
                  >
                    <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />

                    <span className="relative">Contact Our Experts</span>

                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#E8A33D] group-hover:text-[#071A2E]">
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </div>
    </>
  );
}