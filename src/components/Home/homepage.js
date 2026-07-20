import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Award,
  Building,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  Headphones,
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

export default function Homepage() {
  const banners = [
    {
      image: Banner2,
      alt: "Integrated facility management services in Bangalore",
    },
    {
      image: Banner3,
      alt: "Professional housekeeping and security services in Bangalore",
    },
  ];

  const areas = [
    {
      name: "Integrated Facility Management Services in Whitefield",
      path: "/integrated-facility-management-whitefield",
    },
    {
      name: "Integrated Facility Management Services in Electronic City",
      path: "/integrated-facility-management-electronic-city",
    },
    {
      name: "Integrated Facility Management Services in Koramangala",
      path: "/integrated-facility-management-koramangala",
    },
    {
      name: "Integrated Facility Management Services in HSR Layout",
      path: "/integrated-facility-management-hsr-layout",
    },
    {
      name: "Integrated Facility Management Services in JP Nagar",
      path: "/integrated-facility-management-jp-nagar",
    },
    {
      name: "Integrated Facility Management Services in Dabaspet",
      path: "/integrated-facility-management-dabaspet",
    },
    {
      name: "Integrated Facility Management Services in Peenya",
      path: "/integrated-facility-management-peenya",
    },
    {
      name: "Integrated Facility Management Services in Hebbal",
      path: "/integrated-facility-management-hebbal",
    },
    {
      name: "Integrated Facility Management Services in BEML Layout",
      path: "/integrated-facility-management-beml",
    },
    {
      name: "Integrated Facility Management Services in Doddaballapur",
      path: "/integrated-facility-management-doddaballapur",
    },
    {
      name: "Integrated Facility Management Services in Attibele",
      path: "/integrated-facility-management-attibele",
    },
    {
      name: "Integrated Facility Management Services in Kumbalgodu",
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

  const videoRef = useRef(null);
  const statsRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    employees: 0,
  });

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

  useEffect(() => {
    const currentStats = statsRef.current;

    if (!currentStats) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const targets = {
          years: 19,
          clients: 10000,
          employees: 500,
        };

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
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(currentStats);

    return () => observer.disconnect();
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Acuity Groups LLP",
    alternateName: "Acuity Groups",
    url: "https://www.acuitygroups.in/",
    description:
      "Acuity Groups LLP provides integrated facility management services in Bangalore including housekeeping, security services, pest management, manpower outsourcing, soft services, repair and maintenance.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: areas.map((area) =>
      area.name.replace("Integrated Facility Management Services in ", ""),
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

  return (
    <div className="overflow-hidden bg-white text-black font-['Poppins',system-ui,sans-serif]">
      <Helmet>
        <title>
          Acuity Groups LLP | Integrated Facility Management Services in
          Bangalore
        </title>

        <meta
          name="description"
          content="Acuity Groups LLP provides integrated facility management, security, housekeeping, pest management, manpower outsourcing and maintenance services in Bangalore."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.acuitygroups.in/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Acuity Groups LLP | Facility Management Services Bangalore"
        />

        <meta
          property="og:description"
          content="Acuity Groups LLP provides housekeeping, security, pest management, manpower outsourcing, soft services and repair and maintenance services across Bangalore."
        />

        <meta property="og:url" content="https://www.acuitygroups.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups LLP" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Acuity Groups LLP | Facility Management Services Bangalore"
        />

        <meta
          name="twitter:description"
          content="Professional integrated facility management services in Bangalore for offices, apartments, industries, hospitals, warehouses and commercial spaces."
        />

        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Acuity Groups LLP",
            alternateName: "Acuity Groups",
            url: "https://www.acuitygroups.in/",
          })}
        </script>

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative h-[320px] w-full overflow-hidden bg-black md:h-screen">
        {banners.map((banner, index) => (
          <div
            key={banner.alt}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
              currentSlide === index
                ? "z-20 scale-100 opacity-100"
                : "z-10 scale-105 opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.alt}
              className="h-full w-full"
            />
          </div>
        ))}

        <div className="absolute bottom-5 left-1/2 z-40 flex -translate-x-1/2 gap-3 md:bottom-8">
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
                  currentSlide === index ? "w-8 bg-lime-400" : "w-2 bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section
        ref={statsRef}
        className="relative z-40 hidden px-6 py-20 md:block md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-4 gap-6">
            {[
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
            ].map(({ Icon, value, label }) => (
              <div
                key={label}
                className="group rounded-3xl border border-gray-200 bg-white p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl md:p-8"
              >
                <Icon className="mx-auto mb-4 h-12 w-12 text-blue-900 transition-transform group-hover:scale-110" />

                <p className="mb-3 text-3xl font-black text-black lg:text-5xl">
                  {value}
                </p>

                <p className="font-medium text-gray-600 md:text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="overflow-hidden bg-gray-50 px-6 pb-12 pt-10 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative hidden md:block">
            <img
              src={AboutImage}
              alt="Acuity Groups integrated facility management services"
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute -bottom-8 -right-8 rounded-3xl bg-blue-900 px-8 py-6 text-white shadow-2xl">
              <p className="text-5xl">19+</p>

              <p className="text-lg font-light">Years Experience</p>
            </div>
          </div>

          <div>
            <p className="mb-5 font-light uppercase tracking-[5px] text-black">
              About Acuity Groups LLP
            </p>

            <h1 className="mb-8 text-4xl font-black leading-tight text-gray-900 md:text-6xl">
              Integrated Facility Management Company
              <span className="text-blue-900"> in Bangalore</span>
            </h1>
            <p className="mb-5 font-light uppercase tracking-[5px] text-black">
              Trusted Facility Management Partner
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Acuity Groups LLP provides{" "}
              <Link
                to="/integrated-facility-management"
                className="font-semibold text-blue-900 underline hover:text-blue-700"
              >
                integrated facility management services in Bangalore
              </Link>
              , including housekeeping, security guards, manpower outsourcing,
              pest control, soft services, electrical maintenance and repair
              services for residential, commercial and industrial properties.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-500">
              We specialize in housekeeping services, security guard services,
              manpower outsourcing, pest management, electrical maintenance,
              repair and maintenance solutions and corporate support services.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-gray-500">
              With trained professionals, structured operations and responsive
              customer support, we support apartments, IT companies, factories,
              hospitals, warehouses, educational institutions and commercial
              establishments.
            </p>

            <div className="mb-10 grid gap-5 md:grid-cols-2">
              {[
                "Professional Security Services",
                "Expert Facility Management",
                "Pest Control Solutions",
                "Electrical Maintenance",
                "Manpower Outsourcing",
                "24/7 Customer Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-blue-900" />

                  <p className="text-lg text-gray-800">{item}</p>
                </div>
              ))}
            </div>
            <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                to="/about"
                className="flex w-full items-center justify-center rounded-full border-2 border-blue-900 px-5 py-4 text-center text-base font-semibold text-blue-900 transition duration-300 hover:bg-blue-50"
              >
                About Acuity Groups LLP
              </Link>

              <Link
                to="/integrated-facility-management"
                className="flex w-full items-center justify-center rounded-full bg-blue-900 px-5 py-4 text-center text-base font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700"
              >
                Explore Facility Management
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              Our Facility Management Services in Bangalore
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Complete housekeeping, security, manpower outsourcing, pest
              management and soft-service solutions for commercial and
              residential properties.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.path}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} in Bangalore`}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="relative z-10 p-6">
                  <div className="mb-4 flex items-start gap-2">
                    <span className="h-7 w-1 rounded-full bg-blue-500 transition-all duration-300 group-hover:h-9" />

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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-700">
              WHY CHOOSE US
            </span>

            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Why Choose Acuity Groups LLP?
            </h2>

            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-blue-600" />

            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We provide reliable facility management, security, housekeeping,
              pest management and manpower outsourcing services with a
              commitment to quality and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, Icon, iconClass }) => (
              <div
                key={title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:text-white ${iconClass}`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Get Started Today
              <ChevronRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="bg-gray-50 px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-light tracking-[5px] text-blue-900">
              <Building size={14} />
              <span>INDUSTRIES WE SERVE</span>
            </div>

            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Trusted Across <span className="text-blue-900">Sectors</span>
            </h2>
          </div>

          <div className="relative overflow-hidden py-6">
            <div className="animate-marquee flex w-fit gap-8 whitespace-nowrap">
              {[...industries, ...industries].map((industry, index) => (
                <div
                  key={`${industry}-${index}`}
                  className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-8 py-4 text-lg font-medium text-gray-700 shadow-sm transition-all hover:border-blue-300 hover:text-blue-900"
                >
                  <Building size={18} className="text-blue-900" />

                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-white px-6 py-12 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center md:mb-20">
            <p className="mb-4 font-light uppercase tracking-[5px] text-blue-900">
              TESTIMONIALS
            </p>

            <h2 className="text-3xl font-black text-gray-900 md:text-5xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.person}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-7 shadow-sm transition-shadow hover:shadow-md md:p-10"
              >
                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                  {testimonial.review}
                </p>

                <p className="text-xl font-light text-blue-900">
                  {testimonial.person}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-700">
              FAQ
            </span>

            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="mx-auto h-1 w-24 rounded-full bg-blue-600" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="pr-4 text-lg font-semibold text-gray-800">
                      {faq.q}
                    </span>

                    <span className="flex-shrink-0 text-blue-600">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden px-6 transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 pb-6" : "max-h-0 pb-0"
                    }`}
                  >
                    <p className="border-t border-gray-100 pt-4 leading-relaxed text-gray-600">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600">Still have questions?</p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Contact Us
              <ChevronRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section ref={videoRef} className="bg-white px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto mb-10 max-w-6xl text-center">
          <h2 className="text-3xl font-black text-gray-900 md:text-5xl">
            Our Company <span className="text-blue-900">Overview</span>
          </h2>
        </div>

        <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-xl">
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
      </section>

      {/* SERVICE AREAS SECTION */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
              Facility Management Services Across Bangalore
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We provide professional facility management solutions across major
              business, residential and industrial areas of Bangalore.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areaServices.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg"
              >
                <div className="mb-3 text-5xl" aria-hidden="true">
                  {service.icon}
                </div>

                <h3 className="mb-2 text-xl font-bold text-blue-900">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
            <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800">
              Service Areas in Bangalore
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="group flex items-center gap-2 rounded-lg border border-gray-100 p-4 text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="text-yellow-500" aria-hidden="true">
                    📍
                  </span>

                  {area.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/integrated-facility-management"
            className="inline-flex items-center gap-3 rounded-xl bg-blue-900 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:shadow-xl"
          >
            Explore Facility Management Services
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation: none;
            }
          }
        `}
      </style>
    </div>
  );
}
