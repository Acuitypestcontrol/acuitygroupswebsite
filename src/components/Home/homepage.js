import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Award,
  Building,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Headphones,
  MapPin,
  Quote,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import AboutImage from "../../images/AboutImage.avif";
import SecurityImage from "../../images/security123.avif";
import SoftServices1 from "../../images/softservices.jpg";
import Pestcontrol from "../../images/sspestcontrol.jpg";
import MAnpowerout from "../../images/manpowerout.webp";
import Banner2 from "../../images/banner2.png";
import Banner3 from "../../images/banner1.jpg";
import RepairImage from "../../images/repair.jpg";

/* ------------------------------------------------------------------ */
/*  Shared motion variants — reused across every section               */
/* ------------------------------------------------------------------ */

const EASE = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

const viewportOnce = { once: true, amount: 0.2 };

/* ------------------------------------------------------------------ */
/*  Small presentational helpers                                       */
/* ------------------------------------------------------------------ */

function CornerFrame({ tone = "border-[#E8A33D]/70" }) {
  const base = `pointer-events-none absolute h-5 w-5 border-0 ${tone}`;
  return (
    <>
      <span className={`${base} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${base} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${base} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${base} bottom-0 right-0 border-b-2 border-r-2`} />
    </>
  );
}

function Eyebrow({ children, tone = "dark" }) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 font-['IBM_Plex_Mono',monospace] text-xs font-semibold uppercase tracking-[5px] ${
        tone === "light" ? "text-white/80" : "text-[#0B1F3A]"
      }`}
    >
      <span
        aria-hidden="true"
        className="inline-block h-2 w-2 rotate-45 bg-[#E8A33D]"
      />
      {children}
    </p>
  );
}

// Interactive tilt card — follows the cursor for a subtle 3D feel.
// Degrades to a plain card automatically for touch / reduced-motion users.
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (event) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        reduceMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 900 }
      }
      whileHover={{ y: -10 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Homepage() {
  const banners = [
    {
      image: Banner2,
      alt: "Facility management company and services in Bangalore",
    },
    {
      image: Banner3,
      alt: "Professional housekeeping and security services in Bangalore",
    },
  ];

  const areas = [
    {
      name: "Facility Management Services in Whitefield",
      path: "/integrated-facility-management-whitefield",
    },
    {
      name: "Facility Management Services in Electronic City",
      path: "/integrated-facility-management-electronic-city",
    },
    {
      name: "Facility Management Services in Koramangala",
      path: "/integrated-facility-management-koramangala",
    },
    {
      name: "Facility Management Services in HSR Layout",
      path: "/integrated-facility-management-hsr-layout",
    },
    {
      name: "Facility Management Services in JP Nagar",
      path: "/integrated-facility-management-jp-nagar",
    },
    {
      name: "Facility Management Services in Dabaspet",
      path: "/integrated-facility-management-dabaspet",
    },
    {
      name: "Facility Management Services in Peenya",
      path: "/integrated-facility-management-peenya",
    },
    {
      name: "Facility Management Services in Hebbal",
      path: "/integrated-facility-management-hebbal",
    },
    {
      name: "Facility Management Services in BEML Layout",
      path: "/integrated-facility-management-beml",
    },
    {
      name: "Facility Management Services in Doddaballapur",
      path: "/integrated-facility-management-doddaballapur",
    },
    {
      name: "Facility Management Services in Attibele",
      path: "/integrated-facility-management-attibele",
    },
    {
      name: "Facility Management Services in Kumbalgodu",
      path: "/integrated-facility-management-kumbalgodu",
    },
  ];

  const faqs = [
    {
      q: "Do you offer cost-effective facility management packages?",
      a: "Yes, we offer flexible service packages suitable for different budgets.",
    },
    {
      q: "Do you provide facility management services in Bangalore?",
      a: "Yes, Acuity Groups provides professional facility management services for residential, commercial and industrial properties across Bangalore.",
    },
    {
      q: "What services are included in facility management?",
      a: "Housekeeping, security services, pest management, maintenance solutions and manpower outsourcing services.",
    },
    {
      q: "Do you provide security guard services?",
      a: "Yes, we provide trained security guards for apartments, offices, hospitals, industries and commercial establishments.",
    },
    {
      q: "Do you offer pest control services?",
      a: "Yes, we provide termite control, rodent control and complete pest management solutions.",
    },
    {
      q: "Do you provide manpower outsourcing services?",
      a: "Yes, we offer skilled and unskilled manpower outsourcing solutions for various industries.",
    },
  ];

  const services = [
    {
      title: "Integrated Facility Management",
      desc: "Complete facility management services in Bangalore covering housekeeping, security, maintenance, manpower and operational support.",
      image: AboutImage,
      path: "/integrated-facility-management",
    },
    {
      title: "Manpower Outsourcing",
      desc: "Skilled and unskilled manpower outsourcing solutions for businesses across multiple industries.",
      image: MAnpowerout,
      path: "/manpower-outsourcing",
    },
    {
      title: "Security Services",
      desc: "Professional security guard services for apartments, offices, industries, hospitals and commercial establishments.",
      image: SecurityImage,
      path: "/security-services",
    },
    {
      title: "Pest Management",
      desc: "Safe and effective pest control services including termite, rodent and cockroach management.",
      image: Pestcontrol,
      path: "/pest-management",
    },
    {
      title: "Soft Services",
      desc: "Comprehensive housekeeping, cleaning and facility support services for commercial and residential properties.",
      image: SoftServices1,
      path: "/soft-services",
    },
    {
      title: "Repair & Maintenance",
      desc: "Professional electrical, plumbing, repair and preventive maintenance support for commercial and residential properties.",
      image: RepairImage,
      path: "/repair-maintenance",
    },
  ];

  const industries = [
    "Corporate Offices",
    "Industries",
    "Hospitals",
    "Hotels",
    "Apartments",
    "Warehouses",
    "Shopping Malls",
    "IT Companies",
  ];

  const benefits = [
    {
      title: "19+ Years of Industry Experience",
      Icon: TrendingUp,
      iconClass: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
    },
    {
      title: "Trained & Verified Workforce",
      Icon: Users,
      iconClass: "bg-green-50 text-green-600 group-hover:bg-green-600",
    },
    {
      title: "24/7 Customer Support",
      Icon: Headphones,
      iconClass: "bg-orange-50 text-orange-600 group-hover:bg-orange-600",
    },
    {
      title: "Customized Facility Solutions",
      Icon: Shield,
      iconClass: "bg-purple-50 text-purple-600 group-hover:bg-purple-600",
    },
    {
      title: "Competitive Pricing",
      Icon: TrendingUp,
      iconClass: "bg-teal-50 text-teal-600 group-hover:bg-teal-600",
    },
    {
      title: "Quick Response Time",
      Icon: Zap,
      iconClass: "bg-red-50 text-red-600 group-hover:bg-red-600",
    },
    {
      title: "Quality Assurance & Compliance",
      Icon: Award,
      iconClass: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600",
    },
    {
      title: "Professional Service Delivery",
      Icon: CheckCircle,
      iconClass: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600",
    },
  ];

  const testimonials = [
    {
      review:
        "Acuity Groups provides excellent security and facility management services. Their staff is professional and reliable.",
      person: "Corporate Client",
    },
    {
      review:
        "Their housekeeping and maintenance services helped our business operations run smoothly and efficiently.",
      person: "Facility Manager",
    },
    {
      review:
        "Highly trained security personnel and quick support. Strongly recommended for commercial properties.",
      person: "Business Owner",
    },
  ];

  const areaServices = [
    {
      title: "Commercial Cleaning",
      icon: "🧹",
      desc: "Office, mall and bank cleaning",
    },
    {
      title: "Home Services",
      icon: "🏠",
      desc: "Deep cleaning, mopping and sweeping",
    },
    {
      title: "Hotel Housekeeping",
      icon: "🏨",
      desc: "Room and lobby maintenance",
    },
    {
      title: "Facility Maintenance",
      icon: "🔧",
      desc: "Electrical, plumbing and repairs",
    },
  ];

  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const testimonialTrackRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  const reduceMotion = useReducedMotion();

  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    employees: 0,
  });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "22%"]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.12]);

  const changeSlide = (nextSlide) => {
    if (isTransitioning || nextSlide === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(nextSlide);

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === banners.length - 1 ? 0 : previousSlide + 1,
      );
    }, 5000);

    return () => {
      clearInterval(interval);

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [banners.length]);

  useEffect(() => {
    const currentVideo = videoRef.current;

    if (!currentVideo) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowVideo(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    observer.observe(currentVideo);

    return () => observer.disconnect();
  }, []);

  const handleStatsInView = () => {
    const targets = { years: 19, clients: 10000, employees: 500 };
    const duration = 2000;
    const startTime = performance.now();

    const updateCounters = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCounters({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        employees: Math.floor(targets.employees * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    requestAnimationFrame(updateCounters);
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Acuity Groups LLP",
    alternateName: "Acuity Groups",
    url: "https://www.acuitygroups.in/",
    description:
      "Acuity Groups LLP provides facility management services in Bangalore including housekeeping, security services, pest management, manpower outsourcing, soft services, repair and maintenance.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: areas.map((area) =>
      area.name.replace("Facility Management Services in ", ""),
    ),
    serviceType: [
      "Integrated Facility Management",
      "Housekeeping Services",
      "Security Services",
      "Pest Management",
      "Manpower Outsourcing",
      "Repair and Maintenance",
      "Soft Services",
    ],
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

  const statCards = [
    { Icon: Award, value: `${counters.years}+`, label: "Years Experience" },
    { Icon: Star, value: `${counters.clients}+`, label: "Happy Clients" },
    {
      Icon: Users,
      value: `${counters.employees}+`,
      label: "Skilled Employees",
    },
    { Icon: Clock, value: "24/7", label: "Support Service" },
  ];

  return (
    <div className="overflow-hidden bg-white text-black font-['IBM_Plex_Sans',system-ui,sans-serif]">
      <Helmet>
        <title>
          Facility Management Company in Bangalore | Acuity Groups LLP
        </title>

        <meta
          name="description"
          content="Acuity Groups LLP provides facility management, housekeeping, security, pest management and manpower outsourcing services across Bangalore."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.acuitygroups.in/" />

        <meta
          property="og:title"
          content="Facility Management Company in Bangalore | Acuity Groups LLP"
        />

        <meta
          property="og:description"
          content="Professional facility management, housekeeping, security, pest management, manpower outsourcing and maintenance services across Bangalore."
        />

        <meta property="og:url" content="https://www.acuitygroups.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups LLP" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Facility Management Company in Bangalore | Acuity Groups LLP"
        />

        <meta
          name="twitter:description"
          content="Professional facility management services in Bangalore for offices, apartments, industries, hospitals, warehouses and commercial spaces."
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Acuity Groups LLP",
            alternateName: "Acuity Groups",
            url: "https://www.acuitygroups.in/",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO SECTION — parallax banners + ambient scanline */}
      <section
        ref={heroRef}
        className="relative h-[460px] w-full overflow-hidden bg-[#0B1F3A] md:h-screen"
      >
        <div
          aria-hidden="true"
          className="bg-grid-paper pointer-events-none absolute inset-0 z-[5] opacity-30"
        />

        <motion.div
          style={reduceMotion ? undefined : { y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          {banners.map((banner, index) => (
            <motion.div
              key={banner.alt}
              initial={false}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.06,
              }}
              transition={{ duration: 1.2, ease: EASE }}
              className="absolute inset-0"
              style={{ zIndex: currentSlide === index ? 20 : 10 }}
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/85 via-[#0B1F3A]/15 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        <div className="relative z-40 hidden h-full items-end p-10 md:flex lg:p-16">
          <CornerFrame tone="border-white/25" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute bottom-16 left-1/2 z-40 flex -translate-x-1/2 gap-3 md:bottom-24"
        >
          {banners.map((banner, index) => (
            <button
              key={banner.alt}
              type="button"
              onClick={() => changeSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="rounded-full p-1"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-[#E8A33D]"
                    : "w-2 bg-white/70"
                }`}
              />
            </button>
          ))}
        </motion.div>
      </section>

      {/* STATS PANEL — floating glass bento panel overlapping the hero */}
      <section className="relative z-40 px-6 md:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          onViewportEnter={handleStatsInView}
          className="relative mx-auto -mt-16 grid max-w-6xl grid-cols-2 gap-4 rounded-3xl border border-white/60 bg-white/80 p-5 shadow-2xl backdrop-blur-xl md:-mt-24 md:grid-cols-4 md:gap-6 md:p-10"
        >
          {statCards.map(({ Icon, value, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 text-center transition-shadow duration-300 hover:shadow-lg md:p-6"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#E8A33D] transition-transform duration-500 group-hover:scale-x-100"
              />

              <Icon className="mx-auto mb-3 h-8 w-8 text-[#0B1F3A] transition-transform group-hover:scale-110 md:mb-4 md:h-11 md:w-11" />

              <p className="mb-1 font-['IBM_Plex_Mono',monospace] text-xl font-bold text-black md:mb-2 md:text-4xl md:font-black">
                {value}
              </p>

              <p className="text-xs font-medium text-gray-600 md:text-base">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="overflow-hidden bg-gray-50 px-6 pb-12 pt-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={scaleIn}
            className="relative hidden md:block"
          >
            <span
              aria-hidden="true"
              className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#E8A33D]/20 blur-3xl"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#0B1F3A]/10 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={AboutImage}
                alt="Acuity Groups facility management services"
                loading="lazy"
                className="w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>

            <CornerFrame />

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
              className="absolute -bottom-8 -right-8 rounded-3xl bg-[#0B1F3A] px-8 py-6 text-white shadow-2xl"
            >
              <p className="font-['IBM_Plex_Mono',monospace] text-5xl font-bold">
                19+
              </p>
              <p className="text-lg font-light">Years Experience</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>About Acuity Groups LLP</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-8 font-['Archivo',system-ui,sans-serif] text-4xl font-black leading-tight text-gray-900 md:text-6xl"
            >
              Facility Management Company
              <span className="text-[#0B1F3A]"> in Bangalore</span>
            </motion.h1>

            <motion.div variants={fadeUp}>
              <Eyebrow>Trusted Facility Management Partner</Eyebrow>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mb-8 text-lg leading-relaxed text-gray-600"
            >
              Acuity Groups LLP provides{" "}
              <Link
                to="/integrated-facility-management"
                className="font-semibold text-[#0B1F3A] underline decoration-[#E8A33D] decoration-2 underline-offset-4 hover:text-blue-700"
              >
                integrated facility management services in Bangalore
              </Link>
              , including housekeeping, security guards, manpower outsourcing,
              pest management, soft services, electrical maintenance and repair
              services for residential, commercial and industrial properties.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mb-8 text-lg leading-relaxed text-gray-500"
            >
              We specialize in housekeeping services, security guard services,
              manpower outsourcing, pest management, electrical maintenance,
              repair and maintenance solutions and corporate support services.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mb-10 text-lg leading-relaxed text-gray-500"
            >
              With trained professionals, structured operations and responsive
              customer support, we support apartments, IT companies, factories,
              hospitals, warehouses, educational institutions and commercial
              establishments.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mb-10 grid gap-5 md:grid-cols-2"
            >
              {[
                "Professional Security Services",
                "Expert Facility Management",
                "Pest Management Solutions",
                "Electrical Maintenance",
                "Manpower Outsourcing",
                "24/7 Customer Support",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-[#0B1F3A]/20 bg-white font-['IBM_Plex_Mono',monospace] text-[10px] font-semibold text-[#0B1F3A] transition-colors duration-300 group-hover:border-[#E8A33D] group-hover:bg-[#E8A33D] group-hover:text-white"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg text-gray-800">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <Link
                to="/about"
                className="flex w-full items-center justify-center rounded-full border-2 border-[#0B1F3A] px-5 py-4 text-center text-base font-semibold text-[#0B1F3A] transition duration-300 hover:bg-blue-50"
              >
                About Acuity Groups LLP
              </Link>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/integrated-facility-management"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#0B1F3A] px-5 py-4 text-center text-base font-semibold text-white shadow-md transition duration-300 hover:bg-blue-800 hover:shadow-lg"
                >
                  Explore Integrated Facility Management
                  <ChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION — bento grid with tilt cards */}
      <section className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-['Archivo',system-ui,sans-serif] text-3xl font-bold text-gray-900 md:text-5xl"
            >
              Our Facility Management Services in Bangalore
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-3xl text-lg text-gray-600"
            >
              Complete housekeeping, security, manpower outsourcing, pest
              management and soft-service solutions for commercial and
              residential properties.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <TiltCard
                key={service.path}
                className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <CornerFrame />

                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} in Bangalore`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                      index === 0 ? "h-80" : "h-72"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute left-4 top-4 rounded-md bg-[#0B1F3A]/80 px-2 py-1 font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-white backdrop-blur-sm">
                    FM–{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative z-10 p-6">
                  <div className="mb-4 flex items-start gap-2">
                    <span className="h-7 w-1 rounded-full bg-[#E8A33D] transition-all duration-300 group-hover:h-9" />

                    <h3 className="text-2xl font-bold text-gray-800 transition-colors group-hover:text-blue-800">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    {service.desc}
                  </p>

                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-800 transition-all duration-300 hover:bg-blue-600 hover:text-white group-hover:border-blue-600"
                  >
                    Learn More
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                to="/integrated-facility-management"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#0B1F3A] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:shadow-xl"
              >
                Learn About Integrated Facility Management Services
                <ChevronRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-grid-paper relative bg-blue-50 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-6xl px-6 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mb-6 font-['Archivo',system-ui,sans-serif] text-3xl font-bold text-gray-900"
          >
            Integrated Facility Management Services in Bangalore
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-4xl text-lg leading-8 text-gray-700"
          >
            Acuity Groups LLP provides integrated facility management services
            in Bangalore for offices, apartments, industries, hospitals,
            warehouses, educational institutions and commercial buildings. Our
            solutions include housekeeping, security services, repair and
            maintenance, manpower outsourcing, pest management and technical
            support under one professional management system.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <Link
              to="/integrated-facility-management"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Explore Integrated Facility Management
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12 text-center"
          >
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-700"
            >
              WHY CHOOSE US
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mb-4 font-['Archivo',system-ui,sans-serif] text-3xl font-extrabold text-gray-900 md:text-4xl"
            >
              Why Choose Acuity Groups LLP?
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#E8A33D]"
            />

            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-3xl text-lg text-gray-600"
            >
              We provide reliable facility management, security, housekeeping,
              pest management and manpower outsourcing services with a
              commitment to quality and customer satisfaction.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map(({ title, Icon, iconClass }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl group-hover:text-white ${iconClass}`}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>

                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8A33D] px-6 py-3 font-semibold text-[#0B1F3A] shadow-lg transition hover:bg-[#d99425] hover:shadow-xl"
              >
                Get Started Today
                <ChevronRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="bg-gray-50 px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12 text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-light tracking-[5px] text-[#0B1F3A]"
            >
              <Building size={14} />
              <span>INDUSTRIES WE SERVE</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-['Archivo',system-ui,sans-serif] text-4xl font-black text-gray-900 md:text-5xl"
            >
              Trusted Across <span className="text-[#0B1F3A]">Sectors</span>
            </motion.h2>
          </motion.div>

          <div className="relative overflow-hidden py-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-gray-50 to-transparent md:w-32"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-gray-50 to-transparent md:w-32"
            />

            {reduceMotion ? (
              <div className="flex w-fit gap-8 whitespace-nowrap">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-8 py-4 text-lg font-medium text-gray-700 shadow-sm"
                  >
                    <Building size={18} className="text-[#0B1F3A]" />
                    {industry}
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                className="flex w-fit gap-8 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 26,
                  ease: "linear",
                }}
              >
                {[...industries, ...industries].map((industry, index) => (
                  <div
                    key={`${industry}-${index}`}
                    className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-8 py-4 text-lg font-medium text-gray-700 shadow-sm transition-colors hover:border-[#E8A33D] hover:text-[#0B1F3A]"
                  >
                    <Building size={18} className="text-[#0B1F3A]" />
                    {industry}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION — drag-to-explore carousel */}
      <section className="bg-white px-6 py-12 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-10 text-center md:mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 font-['IBM_Plex_Mono',monospace] text-xs font-semibold uppercase tracking-[5px] text-[#0B1F3A]"
            >
              TESTIMONIALS
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Archivo',system-ui,sans-serif] text-3xl font-black text-gray-900 md:text-5xl"
            >
              What Our Clients Say
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm text-gray-400 md:hidden"
            >
              Swipe to explore
            </motion.p>
          </motion.div>

          <div ref={testimonialTrackRef} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={testimonialTrackRef}
              dragElastic={0.12}
              className="flex cursor-grab gap-6 active:cursor-grabbing"
            >
              {testimonials.map((testimonial) => (
                <motion.article
                  key={testimonial.person}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  whileHover={{ y: -6 }}
                  className="group relative min-w-[280px] max-w-sm flex-1 rounded-3xl border border-gray-100 bg-gray-50 p-7 shadow-sm transition-shadow duration-500 hover:shadow-md md:min-w-[340px] md:p-10"
                >
                  <Quote
                    className="mb-4 h-8 w-8 text-[#E8A33D] opacity-70 transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />

                  <p className="mb-8 text-lg leading-relaxed text-gray-700">
                    {testimonial.review}
                  </p>

                  <p className="font-['IBM_Plex_Mono',monospace] text-lg font-medium text-[#0B1F3A]">
                    {testimonial.person}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION — framer-motion accordion */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12 text-center"
          >
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-700"
            >
              FAQ
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mb-4 font-['Archivo',system-ui,sans-serif] text-3xl font-extrabold text-gray-900 md:text-4xl"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mx-auto h-1 w-24 rounded-full bg-[#E8A33D]"
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.q}
                  variants={fadeUp}
                  className={`overflow-hidden rounded-2xl border bg-white shadow-md transition-colors duration-300 hover:shadow-lg ${
                    isOpen ? "border-[#E8A33D]/60" : "border-gray-100"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#E8A33D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="pr-4 text-lg font-semibold text-gray-800">
                        {faq.q}
                      </span>
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 text-blue-600"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden px-6"
                      >
                        <p className="border-t border-gray-100 pb-6 pl-9 pt-4 leading-relaxed text-gray-600">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <p className="mb-4 text-gray-600">Still have questions?</p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Contact Us
                <ChevronRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section ref={videoRef} className="bg-white px-6 py-12 md:px-12 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mb-10 max-w-6xl text-center"
        >
          <h2 className="font-['Archivo',system-ui,sans-serif] text-3xl font-black text-gray-900 md:text-5xl">
            Our Company <span className="text-[#0B1F3A]">Overview</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleIn}
          className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-xl"
        >
          <CornerFrame />

          {showVideo && (
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/t4mzk3InKrI?autoplay=1&mute=1"
              title="Acuity Groups company overview video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </motion.div>
      </section>

      {/* SERVICE AREAS SECTION */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="mb-4 font-['Archivo',system-ui,sans-serif] text-3xl font-bold text-[#0B1F3A] md:text-4xl"
            >
              Facility Management Services Across Bangalore
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-2xl text-lg text-gray-600"
            >
              We provide professional facility management solutions across major
              business, residential and industrial areas of Bangalore.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {areaServices.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group rounded-xl bg-white p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div
                  className="mb-3 text-5xl transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <h3 className="mb-2 text-xl font-bold text-[#0B1F3A]">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="rounded-2xl bg-white p-6 shadow-md md:p-8"
          >
            <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800">
              Service Areas in Bangalore
            </h3>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {areas.map((area) => (
                <motion.div key={area.path} variants={fadeUp}>
                  <Link
                    to={area.path}
                    className="group flex items-center gap-2 rounded-lg border border-gray-100 p-4 text-gray-700 transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                  >
                    <MapPin
                      size={16}
                      className="flex-shrink-0 text-[#E8A33D] transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />

                    {area.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mt-10 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                to="/integrated-facility-management"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#0B1F3A] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:shadow-xl"
              >
                Explore Integrated Facility Management Services
                <ChevronRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style>
        {`
          @keyframes scanline {
            0% { top: -10%; }
            100% { top: 110%; }
          }

          .animate-scanline {
            animation: scanline 6s linear infinite;
          }

          .bg-grid-paper {
            background-image:
              linear-gradient(rgba(11, 31, 58, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(11, 31, 58, 0.08) 1px, transparent 1px);
            background-size: 32px 32px;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-scanline {
              animation: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}
