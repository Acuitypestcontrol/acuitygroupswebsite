import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  Users,
  Award,
  Building,
  CheckCircle,
  Sparkles,
  Wrench,
  Bug,
  ChevronRight,
  Trophy,
  Star,
  Clock,
} from "lucide-react";

import AboutBanner from "../../images/aboutbanner.jpg";

export default function About() {
  const reduceMotion = useReducedMotion();

  const services = [
    {
      icon: Sparkles,
      title: "Housekeeping & Soft Services",
      desc: "Professional cleaning, housekeeping and facility upkeep services.",
      path: "/housekeeping",
    },
    {
      icon: Shield,
      title: "Security Services",
      desc: "Manned guarding, security supervision and safety support.",
      path: "/securityservice",
    },
    {
      icon: Building,
      title: "Integrated Facility Management",
      desc: "Complete facility operations, support and maintenance solutions.",
      path: "/integrated-facility-management",
    },
    {
      icon: Wrench,
      title: "Repair & Maintenance",
      desc: "Preventive and corrective maintenance for properties and facilities.",
      path: "/repair",
    },
    {
      icon: Bug,
      title: "Pest Management",
      desc: "Safe pest management solutions for healthy environments.",
      path: "/pest-management",
    },
    {
      icon: Users,
      title: "Manpower Outsourcing",
      desc: "Skilled workforce deployment and manpower support services.",
      path: "/manpower",
    },
  ];

  const commitments = [
    "Clean and hygienic environments",
    "Safe and secure premises",
    "Efficient maintenance solutions",
    "Environment-friendly practices",
    "High operational standards",
    "Customer satisfaction driven",
  ];

  const industries = [
    "Commercial Establishments",
    "Residential Apartments",
    "Industries & Warehouses",
    "Government Organizations",
    "Educational Institutions",
    "Hospitals & Healthcare",
    "Shopping Malls & Retail Spaces",
  ];

  const strengths = [
    "Skilled manpower deployment",
    "Continuous supervision & monitoring",
    "Modern tools & techniques",
    "Quick response & service support",
  ];

  const serviceAreas = [
    {
      name: "Whitefield",
      path: "/integrated-facility-management-whitefield",
    },
    {
      name: "Electronic City",
      path: "/integrated-facility-management-electronic-city",
    },
    {
      name: "Koramangala",
      path: "/integrated-facility-management-koramangala",
    },
    {
      name: "HSR Layout",
      path: "/integrated-facility-management-hsr-layout",
    },
    {
      name: "JP Nagar",
      path: "/integrated-facility-management-jp-nagar",
    },
    {
      name: "Peenya",
      path: "/integrated-facility-management-peenya",
    },
    {
      name: "Hebbal",
      path: "/integrated-facility-management-hebbal",
    },
    {
      name: "BEML Layout",
      path: "/integrated-facility-management-beml",
    },
    {
      name: "Dabaspet",
      path: "/integrated-facility-management-dabaspet",
    },
    {
      name: "Doddaballapur",
      path: "/integrated-facility-management-doddaballapur",
    },
    {
      name: "Attibele",
      path: "/integrated-facility-management-attibele",
    },
    {
      name: "Kumbalgodu",
      path: "/integrated-facility-management-kumbalgodu",
    },
  ];

  const localServices = [
    {
      title: "Commercial Cleaning",
      icon: "🧹",
      desc: "Office, mall and commercial cleaning",
    },
    {
      title: "Home Services",
      icon: "🏠",
      desc: "Deep cleaning, mopping and sweeping",
    },
    {
      title: "Hotel Housekeeping",
      icon: "🏨",
      desc: "Room, lobby and hygiene maintenance",
    },
    {
      title: "Facility Maintenance",
      icon: "🔧",
      desc: "Electrical, plumbing and repair support",
    },
  ];

  const fadeUp = {
    hidden: reduceMotion
      ? {}
      : {
          opacity: 0,
          y: 50,
        },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeLeft = {
    hidden: reduceMotion
      ? {}
      : {
          opacity: 0,
          x: -60,
        },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: reduceMotion
      ? {}
      : {
          opacity: 0,
          x: 60,
        },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: reduceMotion
      ? {}
      : {
          opacity: 0,
          y: 30,
          scale: 0.96,
        },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>About Acuity Groups | Facility Management Bangalore</title>

        <meta
          name="description"
          content="Learn about Acuity Groups, a facility management company in Bangalore offering security, housekeeping, pest control and manpower services."
        />

        <meta
          name="keywords"
          content="about Acuity Groups, facility management company Bangalore, security services Bangalore, housekeeping services Bangalore, manpower outsourcing Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.acuitygroups.in/about" />

        <meta
          property="og:title"
          content="About Acuity Groups | Facility Management Bangalore"
        />

        <meta
          property="og:description"
          content="Acuity Groups provides facility management, security, housekeeping, pest management and manpower services in Bangalore."
        />

        <meta property="og:url" content="https://www.acuitygroups.in/about" />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="About Acuity Groups | Facility Management Bangalore"
        />

        <meta property="og:image" content={AboutBanner} />

        <meta
          property="og:image:alt"
          content="Acuity Groups Facility Management Company"
        />

        <meta name="twitter:image" content={AboutBanner} />

        <meta
          name="twitter:description"
          content="Know more about Acuity Groups and our facility management services in Bangalore."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://www.acuitygroups.in/about/#aboutpage",
            name: "About Acuity Groups",
            url: "https://www.acuitygroups.in/about",
            description:
              "Acuity Groups is a facility management company in Bangalore offering security, housekeeping, pest management, manpower outsourcing and maintenance services.",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Acuity Groups",
              url: "https://www.acuitygroups.in/",
              telephone: "+919941229005",
              email: "info@acuitygroups.in",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP Nagar 6th Phase, Yelachenahalli",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560078",
                addressCountry: "IN",
              },
              areaServed: "Bangalore",
              serviceType: [
                "Integrated Facility Management",
                "Security Services",
                "Housekeeping Services",
                "Pest Management",
                "Manpower Outsourcing",
                "Repair and Maintenance",
              ],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
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
                name: "About",
                item: "https://www.acuitygroups.in/about",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="overflow-hidden bg-white text-black font-['Poppins',system-ui,sans-serif]">
        {/* HERO SECTION */}
        <section className="relative min-h-[550px] w-full overflow-hidden">
          <motion.img
            src={AboutBanner}
            alt="Acuity Groups"
            className="absolute inset-0 h-full w-full object-cover"
            initial={reduceMotion ? false : { scale: 1.16 }}
            animate={reduceMotion ? undefined : { scale: 1 }}
            transition={{
              duration: 9,
              ease: "easeOut",
            }}
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <motion.div
            aria-hidden="true"
            className="absolute left-[8%] top-[20%] h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 25, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.15, 1],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute bottom-[10%] right-[8%] h-60 w-60 rounded-full bg-yellow-400/20 blur-3xl"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, -20, 0],
                    y: [0, 25, 0],
                    scale: [1.1, 1, 1.1],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 flex min-h-[550px] items-center justify-center px-6 text-center">
            <div className="max-w-5xl">
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 25,
                        scale: 0.9,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-light tracking-[5px] text-amber-400 backdrop-blur-md"
              >
                <Building size={14} />

                <span>ACUITY GROUPS</span>
              </motion.div>

              <motion.h1
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 45,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl"
              >
                About{" "}
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Acuity Groups
                </span>
              </motion.h1>

              <motion.p
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 30,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="mx-auto max-w-3xl text-lg leading-8 text-gray-200 md:text-xl"
              >
                Facility Management, Security, Housekeeping, Pest Management &
                Manpower Services Company in Bangalore
              </motion.p>

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scaleX: 0,
                      }
                }
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.75,
                }}
                className="mx-auto mt-8 h-1 w-28 origin-center rounded-full bg-gradient-to-r from-blue-500 to-yellow-400"
              />
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="relative px-6 py-20 md:px-12">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <p className="mb-4 font-light uppercase tracking-[5px] text-black">
                Who We Are
              </p>

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        width: 0,
                      }
                }
                whileInView={{
                  width: 80,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="mb-6 h-1 rounded-full bg-gradient-to-r from-blue-900 to-yellow-400"
              />

              <h2 className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
                Bangalore’s Trusted{" "}
                <span className="text-blue-900">
                  Integrated Facility Management
                </span>{" "}
                Provider
              </h2>

              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Acuity Groups is a professionally managed facility management
                company delivering reliable property maintenance and corporate
                support services across commercial, industrial and residential
                sectors.
              </p>

              <p className="text-lg leading-relaxed text-gray-500">
                We provide integrated facility management, security services,
                housekeeping, pest management, repair maintenance and manpower
                outsourcing solutions based on client requirements and property
                operations.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                {strengths.map((strength) => (
                  <motion.div
                    key={strength}
                    variants={staggerItem}
                    whileHover={{
                      x: 6,
                    }}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
                  >
                    <CheckCircle
                      size={19}
                      className="flex-shrink-0 text-blue-900"
                    />

                    <span className="text-sm text-gray-700">{strength}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-blue-100 to-yellow-50 blur-2xl" />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="relative grid gap-5 rounded-[30px] border border-white/80 bg-white/80 p-6 shadow-2xl backdrop-blur-xl"
              >
                <InfoCard
                  variants={staggerItem}
                  icon={Shield}
                  title="Trusted Services"
                  desc="Reliable facility support"
                />

                <InfoCard
                  variants={staggerItem}
                  icon={Users}
                  title="Skilled Workforce"
                  desc="Trained & verified staff"
                />

                <InfoCard
                  variants={staggerItem}
                  icon={Award}
                  title="Quality Assurance"
                  desc="Regular audits & feedback"
                />

                <InfoCard
                  variants={staggerItem}
                  icon={Building}
                  title="Corporate Expertise"
                  desc="Serving business properties"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="bg-gradient-to-b from-white to-blue-50/50 py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 sm:px-6 lg:grid-cols-4 lg:px-8"
          >
            <StatCard
              variants={staggerItem}
              icon={Trophy}
              value="19+"
              title="Years of Industry Experience"
              cardClass="bg-blue-50"
              iconClass="text-blue-600"
              valueClass="text-blue-900"
            />

            <StatCard
              variants={staggerItem}
              icon={Users}
              value="100+"
              title="Trained Professionals"
              cardClass="bg-yellow-50"
              iconClass="text-yellow-600"
              valueClass="text-yellow-600"
            />

            <StatCard
              variants={staggerItem}
              icon={Star}
              value="500+"
              title="Happy Clients"
              cardClass="bg-green-50"
              iconClass="text-green-600"
              valueClass="text-green-600"
            />

            <StatCard
              variants={staggerItem}
              icon={Clock}
              value="24/7"
              title="Service Support"
              cardClass="bg-red-50"
              iconClass="text-red-600"
              valueClass="text-red-600"
            />
          </motion.div>
        </section>

        {/* MISSION & VISION */}
        <section className="relative overflow-hidden bg-white py-20">
          <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-100 blur-3xl" />

          <div className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-yellow-100 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="mb-14 text-center"
            >
              <span className="font-semibold uppercase tracking-wider text-blue-600">
                Our Purpose
              </span>

              <h2 className="mt-3 text-4xl font-bold text-gray-900">
                Mission & Vision
              </h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -60,
                        rotateY: -8,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="group relative overflow-hidden rounded-3xl bg-blue-900 p-10 text-white shadow-xl"
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.2, 1],
                        }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Shield size={28} />
                  </div>

                  <h3 className="mb-5 text-3xl font-bold">Our Mission</h3>

                  <p className="leading-8 text-blue-100">
                    To deliver dependable facility management services by
                    combining skilled manpower, quality systems and best
                    industry practices for measurable value creation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 60,
                        rotateY: 8,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="group relative overflow-hidden rounded-3xl bg-yellow-500 p-10 text-black shadow-xl"
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-white/20"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1.2, 1, 1.2],
                        }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/10">
                    <Star size={28} />
                  </div>

                  <h3 className="mb-5 text-3xl font-bold">Our Vision</h3>

                  <p className="leading-8">
                    To be a trusted facility management partner that helps
                    organizations focus on their core business while we manage
                    their daily facility operations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="mb-14 text-center"
            >
              <span className="font-semibold uppercase tracking-wider text-blue-600">
                Core Values
              </span>

              <h2 className="mt-3 text-4xl font-bold text-gray-900">
                Principles That Drive Us
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                Our values guide every decision we make and every service we
                deliver to our clients.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              <ValueCard
                variants={staggerItem}
                icon="🤝"
                title="Integrity"
                desc="We operate with honesty, transparency and accountability in everything we do."
              />

              <ValueCard
                variants={staggerItem}
                icon="⭐"
                title="Excellence"
                desc="We continuously strive to deliver superior service quality and exceed expectations."
              />

              <ValueCard
                variants={staggerItem}
                icon="🛡️"
                title="Safety"
                desc="Maintaining safe environments is at the heart of our service commitment."
              />

              <ValueCard
                variants={staggerItem}
                icon="❤️"
                title="Customer Focus"
                desc="We build lasting partnerships by understanding and fulfilling client requirements."
              />
            </motion.div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="mb-12 text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-light tracking-[5px] text-black">
              <Building size={14} />

              <span>WHAT WE OFFER</span>
            </div>

            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Our <span className="text-blue-900">Services</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Comprehensive facility management solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                whileHover={{
                  y: -12,
                  scale: 1.015,
                }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 p-7 shadow-sm transition-shadow duration-500 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-yellow-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            rotate: [0, -8, 8, 0],
                            scale: 1.1,
                          }
                    }
                    transition={{
                      duration: 0.5,
                    }}
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md"
                  >
                    <service.icon size={28} className="text-blue-900" />
                  </motion.div>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 transition-colors group-hover:text-blue-900">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600">
                    {service.desc}
                  </p>

                  <Link
                    to={service.path}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-900"
                  >
                    Learn More

                    <ChevronRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* OUR COMMITMENT */}
        <section className="bg-gray-50 px-6 py-20 md:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-black text-gray-900 md:text-4xl">
                Our <span className="text-blue-900">Commitment</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                Driven by customer satisfaction and environment-friendly
                practices
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="grid gap-6 md:grid-cols-3"
            >
              {commitments.map((item) => (
                <motion.div
                  key={item}
                  variants={staggerItem}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-blue-900" />
                  </motion.div>

                  <span className="font-medium text-gray-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="mb-12 text-center"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-light tracking-[5px] text-black">
                <Building size={14} />

                <span>INDUSTRIES WE SERVE</span>
              </div>

              <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
                Trusted Across <span className="text-blue-900">Sectors</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="grid gap-6 md:grid-cols-3 lg:grid-cols-4"
            >
              {industries.map((industry) => (
                <motion.div
                  key={industry}
                  variants={staggerItem}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center shadow-sm transition-shadow hover:border-blue-300 hover:shadow-lg"
                >
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-900 to-yellow-400"
                    initial={{
                      width: 0,
                    }}
                    whileHover={{
                      width: "100%",
                    }}
                  />

                  <span className="font-medium text-gray-800">{industry}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-20">
          <motion.div
            aria-hidden="true"
            className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 30, 0],
                    scale: [1, 1.2, 1],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -30, 0],
                    scale: [1.2, 1, 1.2],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="relative z-10 mx-auto max-w-5xl px-4 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Ready to Transform Your Facility Operations?
            </h2>

            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-blue-100">
              Partner with Acuity Groups for professional facility management,
              security services, housekeeping, pest management, maintenance and
              manpower outsourcing solutions.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  to="/contact"
                  className="inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black shadow-lg transition-colors hover:bg-yellow-400"
                >
                  Get Free Consultation
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <a
                  href="tel:+919941229005"
                  className="inline-block rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-900"
                >
                  Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* SERVICE AREAS */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-blue-900">
                Facility Management Services Across Bangalore
              </h2>

              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                We provide professional facility management solutions across
                major areas of Bangalore.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {localServices.map((service) => (
                <motion.div
                  key={service.title}
                  variants={staggerItem}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="rounded-2xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-xl"
                >
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            rotate: [0, -8, 8, 0],
                            scale: 1.12,
                          }
                    }
                    className="mb-3 text-5xl"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="mb-2 text-xl font-bold text-blue-900">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >
              <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800">
                Service Areas in Bangalore
              </h3>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                {serviceAreas.map((area) => (
                  <motion.div
                    key={area.name}
                    variants={staggerItem}
                    whileHover={{
                      x: 7,
                    }}
                  >
                    <Link
                      to={area.path}
                      className="group flex items-center gap-3 rounded-xl border border-gray-100 p-4 text-gray-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <motion.span
                        className="text-yellow-500"
                        whileHover={{
                          scale: 1.2,
                        }}
                      >
                        📍
                      </motion.span>

                      Integrated Facility Management in {area.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mt-14 text-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-block"
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-900 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-blue-800 hover:shadow-xl"
                >
                  View All Services in Bangalore
                  <ChevronRight size={19} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
          `}
        </style>
      </div>
    </>
  );
}

function InfoCard({ icon: Icon, title, desc, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{
        x: 8,
        scale: 1.02,
      }}
      className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all hover:border-blue-200 hover:bg-white hover:shadow-lg"
    >
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.1,
          }}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-900"
        >
          <Icon
            size={22}
            className="text-blue-900 transition-colors group-hover:text-white"
          />
        </motion.div>

        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>

          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({
  icon: Icon,
  value,
  title,
  cardClass,
  iconClass,
  valueClass,
  variants,
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className={`${cardClass} relative overflow-hidden rounded-3xl p-6 text-center shadow-md transition-shadow hover:shadow-xl sm:p-8`}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/50" />

      <div className="relative z-10">
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, 0],
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-3 flex justify-center"
        >
          <Icon className={`h-10 w-10 ${iconClass}`} />
        </motion.div>

        <h2 className={`mb-2 text-4xl font-bold ${valueClass}`}>{value}</h2>

        <p className="font-medium text-gray-700">{title}</p>
      </div>
    </motion.div>
  );
}

function ValueCard({ icon, title, desc, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{
        y: -12,
        rotate: 1,
        scale: 1.03,
      }}
      className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-md transition-shadow hover:shadow-2xl"
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-900 to-yellow-400 transition-transform duration-500 group-hover:scale-x-100" />

      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: 8,
        }}
        className="mb-4 text-5xl"
      >
        {icon}
      </motion.div>

      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>

      <p className="leading-relaxed text-gray-600">{desc}</p>
    </motion.div>
  );
}