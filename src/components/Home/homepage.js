

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  Award,
  Building,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
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

import AboutImage from "../../images/banner23.png";
import SecurityImage from "../../images/security123.avif";
import SoftServices1 from "../../images/softservices.jpg";
import Pestcontrol from "../../images/sspestcontrol.jpg";
import MAnpowerout from "../../images/manpowerout.webp";
import Banner2 from "../../images/prasad.png";
import Banner3 from "../../images/banner1.avif";
import RepairImage from "../../images/repair.jpg";

const EASE = [0.16, 1, 0.3, 1];

const viewportOnce = {
  once: false,
  amount: 0.16,
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 42,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: EASE,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.05,
    },
  },
};

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-5 inline-flex items-center gap-3 font-['IBM_Plex_Mono',monospace] text-[11px] font-semibold uppercase tracking-[4px] ${
        light ? "text-white/75" : "text-[#0B1F3A]"
      }`}
    >
      <span className="h-2 w-2 rotate-45 bg-[#E8A33D]" />
      {children}
    </div>
  );
}

function CornerLines({ light = false }) {
  const borderClass = light ? "border-white/40" : "border-[#E8A33D]/70";

  return (
    <>
      <span
        className={`pointer-events-none absolute left-0 top-0 h-7 w-7 border-l-2 border-t-2 ${borderClass}`}
      />
      <span
        className={`pointer-events-none absolute right-0 top-0 h-7 w-7 border-r-2 border-t-2 ${borderClass}`}
      />
      <span
        className={`pointer-events-none absolute bottom-0 left-0 h-7 w-7 border-b-2 border-l-2 ${borderClass}`}
      />
      <span
        className={`pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 ${borderClass}`}
      />
    </>
  );
}

function AnimatedWallpaper({ dark = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        className={`absolute -left-32 -top-32 h-[430px] w-[430px] rounded-full blur-[110px] ${
          dark ? "bg-blue-500/20" : "bg-blue-300/30"
        }`}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 70, 10, 0],
                y: [0, 40, 90, 0],
                scale: [1, 1.12, 0.94, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute -bottom-36 -right-28 h-[400px] w-[400px] rounded-full blur-[100px] ${
          dark ? "bg-[#E8A33D]/20" : "bg-amber-300/30"
        }`}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -60, -20, 0],
                y: [0, -50, 20, 0],
                scale: [1.05, 0.92, 1.13, 1.05],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute left-1/2 top-1/3 h-[240px] w-[240px] rounded-full blur-[90px] ${
          dark ? "bg-cyan-400/10" : "bg-cyan-200/25"
        }`}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-60, 80, -60],
                y: [20, -50, 20],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(232,163,61,0.06),transparent_28%)]"
            : "bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.95),transparent_28%),radial-gradient(circle_at_80%_72%,rgba(255,255,255,0.8),transparent_26%)]"
        }`}
      />
    </div>
  );
}

function MagneticButton({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 14,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 14,
  });

  const handleMove = (event) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.12);
    y.set(offsetY * 0.12);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={
        reduceMotion
          ? undefined
          : {
              x: springX,
              y: springY,
            }
      }
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{
        scale: 0.96,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ImageTiltCard({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  const handleMove = (event) => {
    if (reduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetCard = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={resetCard}
      style={
        reduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1100,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Homepage() {
  const reduceMotion = useReducedMotion();

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
    },
    {
      title: "Trained & Verified Workforce",
      Icon: Users,
    },
    {
      title: "24/7 Customer Support",
      Icon: Headphones,
    },
    {
      title: "Customized Facility Solutions",
      Icon: Shield,
    },
    {
      title: "Competitive Pricing",
      Icon: TrendingUp,
    },
    {
      title: "Quick Response Time",
      Icon: Zap,
    },
    {
      title: "Quality Assurance & Compliance",
      Icon: Award,
    },
    {
      title: "Professional Service Delivery",
      Icon: CheckCircle,
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
  const statsStarted = useRef(false);

  // ADD THIS
  const scrollRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    employees: 0,
  });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(heroProgress, [0, 1], [0, 130]);
  const heroImageY = useTransform(heroProgress, [0, 1], [0, 190]);
  const heroImageScale = useTransform(heroProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === banners.length - 1 ? 0 : previous + 1,
      );
    }, 5200);

    return () => clearInterval(slider);
  }, [banners.length]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowVideo(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    if (statsStarted.current) return;

    statsStarted.current = true;

    const targets = {
      years: 19,
      clients: 10000,
      employees: 500,
    };

    const start = performance.now();
    const duration = 2000;

    const update = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounters({
        years: Math.floor(targets.years * easedProgress),
        clients: Math.floor(targets.clients * easedProgress),
        employees: Math.floor(targets.employees * easedProgress),
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
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
    {
      Icon: Award,
      value: `${counters.years}+`,
      label: "Years Experience",
    },
    {
      Icon: Star,
      value: `${counters.clients}+`,
      label: "Happy Clients",
    },
    {
      Icon: Users,
      value: `${counters.employees}+`,
      label: "Skilled Employees",
    },
    {
      Icon: Clock,
      value: "24/7",
      label: "Support Service",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#F6F8FC] text-[#111827] font-['IBM_Plex_Sans',system-ui,sans-serif]">
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

      {/* UNIQUE SPLIT HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[780px] overflow-hidden bg-[#07172C] lg:min-h-screen"
      >
        <AnimatedWallpaper dark />

        <div className="hero-grid absolute inset-0 opacity-30" />

        <div className="absolute left-[55%] top-0 hidden h-full w-px bg-white/10 lg:block" />

        <div className="relative z-10 mx-auto grid min-h-[780px] max-w-[1500px] grid-cols-1 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    y: heroTextY,
                    opacity: heroOpacity,
                  }
            }
            className="flex items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-32 lg:pt-36 xl:px-24"
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel light>About Acuity Groups LLP</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-['Archivo',system-ui,sans-serif] text-[45px] font-black leading-[0.98] tracking-[-2px] text-white sm:text-6xl lg:text-7xl xl:text-[92px]"
              >
                Facility
                <br />
                Management
                <br />
                <span className="relative inline-block text-[#E8A33D]">
                  Company
                  <motion.span
                    initial={{
                      scaleX: 0,
                    }}
                    animate={{
                      scaleX: 1,
                    }}
                    transition={{
                      delay: 0.9,
                      duration: 0.9,
                      ease: EASE,
                    }}
                    className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-[#E8A33D]"
                  />
                </span>
                <br />
                <span className="text-white/90">in Bangalore</span>
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="mt-8 max-w-2xl border-l-2 border-[#E8A33D] pl-5"
              >
                <SectionLabel light>
                  Trusted Facility Management Partner
                </SectionLabel>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
              >
                Acuity Groups LLP provides{" "}
                <Link
                  to="/integrated-facility-management"
                  className="font-semibold text-white underline decoration-[#E8A33D] decoration-2 underline-offset-4"
                >
                  integrated facility management services in Bangalore
                </Link>
                , including housekeeping, security guards, manpower outsourcing,
                pest management, soft services, electrical maintenance and
                repair services for residential, commercial and industrial
                properties.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <MagneticButton>
                  <Link
                    to="/integrated-facility-management"
                    className="group flex items-center justify-center gap-3 rounded-full bg-[#E8A33D] px-7 py-4 font-semibold text-[#07172C] shadow-[0_15px_50px_rgba(232,163,61,0.25)] transition hover:bg-[#f3b554]"
                  >
                    Explore Integrated Facility Management
                    <ChevronRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <Link
                    to="/about"
                    className="flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                  >
                    About Acuity Groups LLP
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    y: heroImageY,
                    scale: heroImageScale,
                    opacity: heroOpacity,
                  }
            }
            className="relative min-h-[530px] px-5 pb-24 sm:px-10 lg:min-h-screen lg:px-12 lg:pb-20 lg:pt-28"
          >
            <div className="relative mx-auto h-[500px] max-w-[650px] lg:h-[calc(100vh-150px)] lg:min-h-[630px]">
              <motion.div
                initial={{
                  opacity: 0,
                  rotate: -8,
                  x: 80,
                }}
                animate={{
                  opacity: 1,
                  rotate: -4,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                  ease: EASE,
                }}
                className="absolute left-0 top-7 h-[72%] w-[74%] overflow-hidden rounded-[38px] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-md"
              >
                <CornerLines light />

                <AnimatePresence mode="wait">
                  <motion.img
                    key={banners[currentSlide].alt}
                    src={banners[currentSlide].image}
                    alt={banners[currentSlide].alt}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 1,
                      ease: EASE,
                    }}
                    className="h-full w-full rounded-[31px] object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-2 rounded-[31px] bg-gradient-to-t from-[#07172C]/70 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  rotate: 8,
                  x: -70,
                }}
                animate={{
                  opacity: 1,
                  rotate: 4,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.55,
                  ease: EASE,
                }}
                className="absolute bottom-10 right-0 h-[53%] w-[58%] overflow-hidden rounded-[34px] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-md"
              >
                <img
                  src={AboutImage}
                  alt="Acuity Groups facility management services"
                  className="h-full w-full rounded-[27px] object-cover"
                />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.85,
                  duration: 0.7,
                  ease: EASE,
                }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -10, 0],
                      }
                }
                className="absolute bottom-[38%] left-[43%] z-20 flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-[#E8A33D] text-center text-[#07172C] shadow-2xl sm:h-40 sm:w-40"
              >
                <div>
                  <p className="font-['Archivo',system-ui,sans-serif] text-4xl font-black">
                    19+
                  </p>
                  <p className="mt-1 px-4 text-xs font-semibold uppercase tracking-[2px]">
                    Years Experience
                  </p>
                </div>
              </motion.div>

              <div className="absolute right-2 top-4 z-30 flex flex-col gap-3">
                {banners.map((banner, index) => (
                  <button
                    key={banner.alt}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border font-['IBM_Plex_Mono',monospace] text-xs transition ${
                      currentSlide === index
                        ? "border-[#E8A33D] bg-[#E8A33D] text-[#07172C]"
                        : "border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#home-stats"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 lg:flex"
        >
          <span className="font-['IBM_Plex_Mono',monospace] text-[9px] uppercase tracking-[4px]">
            Scroll
          </span>

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 8, 0],
                  }
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.a>
      </section>

      {/* STAT DASHBOARD */}
      <section
        id="home-stats"
        className="relative z-20 bg-[#F6F8FC] px-5 pb-14 sm:px-8 lg:px-14"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          onViewportEnter={startCounters}
          className="relative mx-auto -mt-14 grid max-w-7xl grid-cols-2 overflow-hidden rounded-[30px] border border-white bg-white shadow-[0_35px_100px_rgba(11,31,58,0.15)] lg:-mt-20 lg:grid-cols-4"
        >
          {statCards.map(({ Icon, value, label }, index) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{
                backgroundColor: "#0B1F3A",
              }}
              className={`group relative min-h-[170px] overflow-hidden p-6 transition ${
                index < statCards.length - 1 ? "border-r border-gray-100" : ""
              } ${index < 2 ? "border-b border-gray-100 lg:border-b-0" : ""}`}
            >
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-['IBM_Plex_Mono',monospace] text-xs text-gray-400 group-hover:text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon className="h-7 w-7 text-[#E8A33D]" />
                </div>

                <div>
                  <p className="font-['Archivo',system-ui,sans-serif] text-3xl font-black text-[#0B1F3A] group-hover:text-white sm:text-4xl">
                    {value}
                  </p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[2px] text-gray-500 group-hover:text-white/70 sm:text-sm">
                    {label}
                  </p>
                </div>
              </div>

              <span className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-[#E8A33D]/15 transition-transform duration-500 group-hover:scale-[2.2]" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* EDITORIAL ABOUT */}
      <section className="relative overflow-hidden bg-[#F6F8FC] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <AnimatedWallpaper />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative min-h-[520px]"
          >
            <div className="absolute left-4 top-3 h-[84%] w-[78%] rounded-[44px] bg-[#0B1F3A]" />

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -1,
                      scale: 1.015,
                    }
              }
              className="absolute right-0 top-14 h-[76%] w-[82%] overflow-hidden rounded-[40px] border-[8px] border-white shadow-2xl"
            >
              <img
                src={AboutImage}
                alt="Acuity Groups facility management services"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -12, 0],
                      rotate: [-2, 1, -2],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-2 left-0 max-w-[250px] rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur-xl"
            >
              <p className="font-['Archivo',system-ui,sans-serif] text-5xl font-black text-[#0B1F3A]">
                19+
              </p>

              <p className="mt-2 text-lg font-medium text-gray-700">
                Years Experience
              </p>
            </motion.div>

            <div className="absolute right-6 top-0 h-24 w-24 rounded-full border-[14px] border-[#E8A33D]/70" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>About Acuity Groups LLP</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-['Archivo',system-ui,sans-serif] text-4xl font-black leading-[1.05] text-[#0B1F3A] sm:text-5xl lg:text-6xl"
            >
              Trusted Facility Management Partner
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg leading-8 text-gray-600"
            >
              We specialize in housekeeping services, security guard services,
              manpower outsourcing, pest management, electrical maintenance,
              repair and maintenance solutions and corporate support services.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              With trained professionals, structured operations and responsive
              customer support, we support apartments, IT companies, factories,
              hospitals, warehouses, educational institutions and commercial
              establishments.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mt-10 grid gap-4 sm:grid-cols-2"
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
                  whileHover={{
                    x: 8,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur-md"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] font-['IBM_Plex_Mono',monospace] text-[10px] text-white transition group-hover:bg-[#E8A33D] group-hover:text-[#0B1F3A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="font-medium text-gray-800">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* UNIQUE SERVICES LAYOUT */}
      <section className="relative overflow-hidden bg-[#081A32] py-16 lg:py-28">
        <AnimatedWallpaper dark />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-10 grid gap-6 lg:mb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel light>Our Services</SectionLabel>

              <h2 className="font-['Archivo',system-ui,sans-serif] text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Our Facility Management Services in Bangalore
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8 lg:justify-self-end"
            >
              Complete housekeeping, security, manpower outsourcing, pest
              management and soft-service solutions for commercial and
              residential properties.
            </motion.p>
          </motion.div>

          <div className="grid min-w-0 gap-7 lg:grid-cols-[360px_minmax(0,1fr)]">
            {/* MOBILE HORIZONTAL SCROLLING SERVICE BUTTONS */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="
          services-mobile-scroll
          flex w-full max-w-full snap-x snap-mandatory gap-3
          overflow-x-auto overscroll-x-contain pb-4
          touch-pan-x
          lg:flex-col lg:overflow-visible lg:pb-0
        "
            >
              {services.map((service, index) => (
                <motion.button
                  key={service.path}
                  variants={fadeUp}
                  type="button"
                  onClick={() => setActiveService(index)}
                  whileHover={{
                    x: reduceMotion ? 0 : 7,
                  }}
                  className={`
              group flex min-h-[100px]
              min-w-[84vw] max-w-[84vw]
              snap-center items-center justify-between
              rounded-2xl border px-5 py-5 text-left
              transition-all duration-300
              sm:min-w-[310px] sm:max-w-[310px]
              lg:min-h-0 lg:w-full lg:min-w-0 lg:max-w-none
              ${
                activeService === index
                  ? "border-[#E8A33D] bg-[#E8A33D] text-[#081A32] shadow-[0_15px_40px_rgba(232,163,61,0.22)]"
                  : "border-white/10 bg-white/5 text-white hover:bg-white/10"
              }
            `}
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span
                      className={`flex-shrink-0 font-['IBM_Plex_Mono',monospace] text-xs ${
                        activeService === index
                          ? "text-[#081A32]/60"
                          : "text-white/40"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="line-clamp-2 text-base font-semibold leading-6">
                      {service.title}
                    </span>
                  </span>

                  <ChevronRight
                    size={19}
                    className={`ml-3 flex-shrink-0 transition-transform ${
                      activeService === index
                        ? "translate-x-1"
                        : "opacity-50 group-hover:translate-x-1"
                    }`}
                  />
                </motion.button>
              ))}
            </motion.div>

            {/* ACTIVE SERVICE IMAGE PANEL */}
            <div className="relative min-w-0 overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-lg sm:rounded-[38px] sm:p-5">
              <CornerLines light />

              <AnimatePresence mode="wait">
                <motion.div
                  key={services[activeService].path}
                  initial={{
                    opacity: 0,
                    x: 50,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: -50,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: EASE,
                  }}
                 className="relative min-h-[420px] w-full overflow-hidden rounded-[21px] sm:min-h-[590px] sm:rounded-[30px]"
                >
                  <motion.img
                    key={services[activeService].image}
                    src={services[activeService].image}
                    alt={`${services[activeService].title} in Bangalore`}
                    initial={{
                      scale: 1.08,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 1,
                      ease: EASE,
                    }}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />

                  {/* Stronger mobile overlay so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081A32] via-[#081A32]/75 to-[#081A32]/10 sm:via-[#081A32]/45" />

                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 pb-7 sm:p-10 lg:p-14">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-10 bg-[#E8A33D] sm:w-14" />

                      <span className="font-['IBM_Plex_Mono',monospace] text-[10px] uppercase tracking-[3px] text-[#E8A33D] sm:text-xs">
                        FM–{String(activeService + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="max-w-3xl font-['Archivo',system-ui,sans-serif] text-3xl font-black leading-[1.05] text-white sm:text-4xl lg:text-5xl">
                      {services[activeService].title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:mt-5 sm:text-lg sm:leading-8">
                      {services[activeService].desc}
                    </p>

                    <Link
                      to={services[activeService].path}
                      className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#E8A33D] px-6 py-3.5 text-sm font-semibold text-[#081A32] shadow-lg sm:mt-8 sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
                    >
                      Learn More
                      <ChevronRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 text-center sm:mt-12"
          >
            <Link
              to="/integrated-facility-management"
              className="group inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:border-[#E8A33D] hover:bg-[#E8A33D] hover:text-[#081A32] sm:gap-3 sm:px-8 sm:text-base"
            >
              Learn About Integrated Facility Management Services
              <ChevronRight
                size={18}
                className="flex-shrink-0 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* SEO CONTENT WITH DIAGONAL PANEL */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <AnimatedWallpaper />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-[36px] bg-[#0B1F3A] p-7 text-white shadow-2xl sm:p-10 lg:p-16"
          >
            <AnimatedWallpaper dark />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <span className="font-['IBM_Plex_Mono',monospace] text-7xl font-black text-white/10 sm:text-8xl">
                  IFM
                </span>
              </div>

              <div>
                <h2 className="font-['Archivo',system-ui,sans-serif] text-3xl font-black sm:text-4xl lg:text-5xl">
                  Integrated Facility Management Services in Bangalore
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/70">
                  Acuity Groups LLP provides integrated facility management
                  services in Bangalore for offices, apartments, industries,
                  hospitals, warehouses, educational institutions and commercial
                  buildings. Our solutions include housekeeping, security
                  services, repair and maintenance, manpower outsourcing, pest
                  management and technical support under one professional
                  management system.
                </p>

                <Link
                  to="/integrated-facility-management"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#E8A33D] px-7 py-4 font-semibold text-[#0B1F3A]"
                >
                  Explore Integrated Facility Management
                  <ChevronRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US TIMELINE */}
      <section className="relative overflow-hidden bg-[#F1F5FA] py-20 lg:py-28">
        <AnimatedWallpaper />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Why Choose Us</SectionLabel>

              <h2 className="font-['Archivo',system-ui,sans-serif] text-4xl font-black text-[#0B1F3A] sm:text-5xl">
                Why Choose Acuity Groups LLP?
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-8 text-gray-600"
            >
              We provide reliable facility management, security, housekeeping,
              pest management and manpower outsourcing services with a
              commitment to quality and customer satisfaction.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-[#0B1F3A]/15 sm:block lg:left-1/2" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="space-y-7"
            >
              {benefits.map(({ title, Icon }, index) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className={`relative grid gap-5 sm:grid-cols-[56px_1fr] lg:grid-cols-[1fr_80px_1fr] ${
                    index % 2 === 0 ? "" : "lg:text-right"
                  }`}
                >
                  <div
                    className={`hidden lg:block ${
                      index % 2 === 0 ? "order-1" : "order-3"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        y: -6,
                        rotate: index % 2 === 0 ? -1 : 1,
                      }}
                      className="rounded-[28px] border border-white bg-white/80 p-7 shadow-lg backdrop-blur-md"
                    >
                      <h3 className="text-xl font-bold text-[#0B1F3A]">
                        {title}
                      </h3>
                    </motion.div>
                  </div>

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8A33D] text-[#0B1F3A] shadow-lg sm:order-1 lg:order-2 lg:mx-auto">
                    <Icon size={25} />
                  </div>

                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className={`rounded-[24px] border border-white bg-white/80 p-6 shadow-lg backdrop-blur-md sm:order-2 lg:hidden`}
                  >
                    <h3 className="text-lg font-bold text-[#0B1F3A]">
                      {title}
                    </h3>
                  </motion.div>

                  <div
                    className={`hidden lg:block ${
                      index % 2 === 0 ? "order-3" : "order-1"
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-14 text-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E8A33D] px-8 py-4 font-semibold text-[#0B1F3A] shadow-lg"
            >
              Get Started Today
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ANIMATED INDUSTRIES SECTION */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <AnimatedWallpaper />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Industries We Serve</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-['Archivo',system-ui,sans-serif] text-4xl font-black text-[#0B1F3A] sm:text-5xl"
            >
              Trusted Across Sectors
            </motion.h2>
          </motion.div>

          {/* DESKTOP ROTATING ORBIT */}
          <div className="relative mx-auto mt-16 hidden h-[650px] max-w-[1000px] items-center justify-center lg:flex">
            {/* Outer rotating circle */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[540px] w-[540px] rounded-full border border-dashed border-[#0B1F3A]/20"
            >
              {industries.slice(0, 4).map((industry, index) => {
                const positions = [
                  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
                  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
                ];

                return (
                  <motion.div
                    key={industry}
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: -360,
                          }
                    }
                    transition={{
                      duration: 35,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    className={`absolute ${positions[index]} flex h-[100px] w-[190px] items-center justify-center rounded-[24px] border border-white bg-white/95 px-5 text-center font-semibold text-[#0B1F3A] shadow-xl backdrop-blur-md`}
                  >
                    {industry}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Inner rotating circle */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[360px] w-[360px] rounded-full border border-[#E8A33D]/35"
            >
              {industries.slice(4).map((industry, index) => {
                const positions = [
                  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
                  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
                ];

                return (
                  <motion.div
                    key={industry}
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: 360,
                          }
                    }
                    transition={{
                      duration: 26,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    className={`absolute ${positions[index]} flex h-[90px] w-[170px] items-center justify-center rounded-[22px] border border-white bg-[#F8FAFD]/95 px-4 text-center text-sm font-semibold text-[#0B1F3A] shadow-lg backdrop-blur-md`}
                  >
                    {industry}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Center circle */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.05, 1],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.08,
              }}
              className="relative z-20 flex h-52 w-52 flex-col items-center justify-center rounded-full bg-[#0B1F3A] text-center text-white shadow-2xl"
            >
              <Building size={38} className="mb-4 text-[#E8A33D]" />

              <p className="font-['Archivo',system-ui,sans-serif] text-2xl font-black">
                Industries
              </p>

              <p className="mt-1 text-sm text-white/60">We Serve</p>
            </motion.div>
          </div>

          {/* MOBILE AUTO-SCROLLING CAROUSEL */}
          <div className="relative mt-12 overflow-hidden lg:hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-white to-transparent" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-white to-transparent" />

            <motion.div
              className="flex w-max gap-4 py-4"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: ["0%", "-50%"],
                    }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...industries, ...industries].map((industry, index) => (
                <motion.div
                  key={`${industry}-${index}`}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="flex min-h-[100px] w-[230px] flex-shrink-0 items-center gap-4 rounded-[22px] border border-white bg-white/90 p-5 shadow-lg backdrop-blur-md"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#E8A33D]">
                    <Building size={22} />
                  </span>

                  <span className="font-semibold text-[#0B1F3A]">
                    {industry}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL NOTES */}
      <section className="relative overflow-hidden bg-[#0B1F3A] py-20 lg:py-28">
        <AnimatedWallpaper dark />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-14"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel light>Testimonials</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-['Archivo',system-ui,sans-serif] text-4xl font-black text-white sm:text-5xl"
            >
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.person}
                variants={fadeUp}
                whileHover={{
                  y: -14,
                  rotate: index === 0 ? -1.5 : index === 1 ? 1.5 : -1,
                }}
                className={`relative min-h-[330px] rounded-[32px] p-8 shadow-2xl ${
                  index === 0
                    ? "bg-[#E8A33D] text-[#0B1F3A] lg:rotate-[-2deg]"
                    : index === 1
                      ? "bg-white text-[#0B1F3A] lg:translate-y-10 lg:rotate-[2deg]"
                      : "bg-[#DBEAFE] text-[#0B1F3A] lg:rotate-[-1deg]"
                }`}
              >
                <span className="absolute right-8 top-7 font-['IBM_Plex_Mono',monospace] text-xs opacity-40">
                  0{index + 1}
                </span>

                <Quote className="h-10 w-10 opacity-40" />

                <p className="mt-8 text-xl leading-9">{testimonial.review}</p>

                <div className="absolute bottom-8 left-8">
                  <p className="font-['Archivo',system-ui,sans-serif] text-lg font-black">
                    {testimonial.person}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ SPLIT LAYOUT */}
      <section className="relative overflow-hidden bg-[#F6F8FC] py-20 lg:py-28">
        <AnimatedWallpaper />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-14">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <SectionLabel>FAQ</SectionLabel>

            <h2 className="font-['Archivo',system-ui,sans-serif] text-4xl font-black leading-tight text-[#0B1F3A] sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 h-1 w-24 rounded-full bg-[#E8A33D]" />

            <p className="mt-10 text-gray-600">Still have questions?</p>

            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-7 py-4 font-semibold text-white"
            >
              Contact Us
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
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
                  layout
                  className={`overflow-hidden rounded-[24px] border bg-white/85 shadow-md backdrop-blur-md transition ${
                    isOpen
                      ? "border-[#E8A33D] shadow-xl"
                      : "border-white hover:border-[#0B1F3A]/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center gap-5 px-5 py-6 text-left sm:px-7"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span
                      className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl font-['IBM_Plex_Mono',monospace] text-xs transition ${
                        isOpen
                          ? "bg-[#E8A33D] text-[#0B1F3A]"
                          : "bg-[#0B1F3A] text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-base font-bold text-[#0B1F3A] sm:text-lg">
                      {faq.q}
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      className="text-[#0B1F3A]"
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: EASE,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="mx-5 border-t border-gray-100 pb-7 pl-16 pt-5 leading-8 text-gray-600 sm:mx-7">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* VIDEO DEVICE FRAME */}
      <section
        ref={videoRef}
        className="relative overflow-hidden bg-white py-20 lg:py-28"
      >
        <AnimatedWallpaper />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12 text-center"
          >
            <SectionLabel>Company Video</SectionLabel>

            <h2 className="font-['Archivo',system-ui,sans-serif] text-4xl font-black text-[#0B1F3A] sm:text-5xl">
              Our Company Overview
            </h2>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-5xl"
          >
            <div className="rounded-t-[34px] border-[10px] border-[#0B1F3A] bg-[#0B1F3A] shadow-2xl">
              <div className="mb-3 flex items-center gap-2 px-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="aspect-video overflow-hidden rounded-t-[20px] bg-black">
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
              </div>
            </div>

            <div className="mx-auto h-5 w-[92%] rounded-b-[20px] bg-gradient-to-b from-gray-300 to-gray-100 shadow-xl" />

            <div className="mx-auto h-3 w-[45%] rounded-b-full bg-gray-300" />
          </motion.div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="relative overflow-hidden bg-[#F1F5FA] py-20 lg:py-28">
        <AnimatedWallpaper />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Service Areas</SectionLabel>

              <h2 className="font-['Archivo',system-ui,sans-serif] text-4xl font-black text-[#0B1F3A] sm:text-5xl">
                Facility Management Services Across Bangalore
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-8 text-gray-600"
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
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {areaServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  rotate: index % 2 === 0 ? -1 : 1,
                }}
                className="relative overflow-hidden rounded-[28px] border border-white bg-white/85 p-7 shadow-lg backdrop-blur-md"
              >
                <span className="absolute right-5 top-4 font-['IBM_Plex_Mono',monospace] text-xs text-gray-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="text-5xl">{service.icon}</div>

                <h3 className="mt-6 text-xl font-black text-[#0B1F3A]">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 overflow-hidden rounded-[32px] border border-white bg-white/85 p-6 shadow-xl backdrop-blur-md sm:p-9"
          >
            <div className="mb-8 flex flex-col gap-4 border-b border-gray-100 pb-7 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-2xl font-black text-[#0B1F3A]">
                Service Areas in Bangalore
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={17} className="text-[#E8A33D]" />
                Bangalore
              </div>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
            >
              {areas.map((area, index) => (
                <motion.div key={area.path} variants={fadeUp}>
                  <Link
                    to={area.path}
                    className="group flex min-h-[74px] items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8FAFD] p-4 transition hover:border-[#E8A33D] hover:bg-white hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#E8A33D] transition group-hover:bg-[#E8A33D] group-hover:text-[#0B1F3A]">
                      <MapPin size={18} />
                    </span>

                    <span className="flex-1 text-sm font-semibold text-gray-700 group-hover:text-[#0B1F3A]">
                      {area.name}
                    </span>

                    <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-gray-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 text-center"
          >
            <Link
              to="/integrated-facility-management"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-8 py-4 font-semibold text-white shadow-xl"
            >
              Explore Integrated Facility Management Services
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <style>
        {`
          .hero-grid {
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.045) 1px,
                transparent 1px
              );
            background-size: 48px 48px;
          }

          ::selection {
            background: rgba(232, 163, 61, 0.35);
            color: #0b1f3a;
          }

          html {
            scroll-behavior: smooth;
          }

          @media (max-width: 640px) {
            .hero-grid {
              background-size: 30px 30px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }

            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </div>
  );
}
