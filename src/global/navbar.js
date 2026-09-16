import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

import Logo from "../images/acuitylogo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const location = useLocation();

  /* =========================================================
     SERVICES
  ========================================================== */

  const servicesItems = [
    {
      name: "Integrated Facility Management",
      path: "/integrated-facility-management",
    },
    {
      name: "Security Services",
      path: "/security-services",
    },
    {
      name: "Housekeeping Services",
      path: "/housekeeping-services",
    },
    {
      name: "Soft Services",
      path: "/soft-services",
    },
    {
      name: "Pest Management",
      path: "/pest-management",
    },
    {
      name: "Manpower Outsourcing",
      path: "/manpower-outsourcing",
    },
    {
      name: "Repair & Maintenance",
      path: "/repair-maintenance",
    },
  ];

  /* =========================================================
     CAREER
  ========================================================== */

  const careerItems = [
    {
      name: "Pest Control Careers",
      path: "/career/pest-control",
    },
    {
      name: "Acuity Groups Careers",
      path: "/career/acuity-groups",
    },
  ];

  /* =========================================================
     SCROLL
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MENUS WHEN ROUTE CHANGES
  ========================================================== */

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setCareerOpen(false);
    setHoveredMenu(null);
  }, [location.pathname]);

  /* =========================================================
     BODY LOCK WHEN MOBILE MENU OPEN
  ========================================================== */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =========================================================
     NAV LINK
  ========================================================== */

  const navLinkClass = ({ isActive }) =>
    `group relative inline-flex items-center py-3 text-[16px] font-semibold tracking-[-0.2px] transition-colors duration-300 xl:text-[17px] ${
      isActive
        ? "text-[#0B1F3A]"
        : "text-slate-700 hover:text-[#0B1F3A]"
    }`;

  /* =========================================================
     DROPDOWN ANIMATION
  ========================================================== */

  const dropdownAnimation = {
    hidden: {
      opacity: 0,
      y: -8,
      scale: 0.98,
      pointerEvents: "none",
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto",

      transition: {
        duration: 0.22,
        ease: [0.16, 1, 0.3, 1],
      },
    },

    exit: {
      opacity: 0,
      y: -6,
      scale: 0.98,
      pointerEvents: "none",

      transition: {
        duration: 0.16,
      },
    },
  };

  /* =========================================================
     UNDERLINE
  ========================================================== */

  const renderUnderline = (isVisible) => (
    <span
      className={`
        absolute
        bottom-1
        left-0
        h-[2px]
        rounded-full
        bg-gradient-to-r
        from-[#E8A33D]
        to-[#0B1F3A]
        transition-all
        duration-300

        ${
          isVisible
            ? "w-full opacity-100"
            : "w-0 opacity-0"
        }
      `}
    />
  );

  return (
    <>
      {/* =====================================================
          FIXED HEADER
      ====================================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-[9999]
          w-full
          font-['Inter',system-ui,sans-serif]
        "
      >

        {/* ===================================================
            DESKTOP TOP INFORMATION BAR
        ==================================================== */}

        <div
          className={`
            hidden
            overflow-hidden
            border-b
            transition-all
            duration-500

            lg:block

            ${
              scrolled
                ? "max-h-0 border-transparent opacity-0"
                : "max-h-12 border-white/20 bg-[#071A2E] opacity-100"
            }
          `}
        >
          <div
            className="
              mx-auto
              flex
              h-10
              max-w-[1450px]
              items-center
              justify-between
              gap-6
              px-6
              text-[12px]
              text-white/80

              xl:px-8
            "
          >

            {/* LEFT */}
            <div
              className="
                flex
                shrink-0
                items-center
                gap-5
              "
            >

              {/* PHONE */}
              <a
                href="tel:+919941229005"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  transition-colors
                  duration-300
                  hover:text-[#F4B85A]
                "
              >
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-all
                    duration-300
                    group-hover:bg-[#E8A33D]
                    group-hover:text-[#071A2E]
                  "
                >
                  <Phone size={12} />
                </span>

                <span className="font-medium">
                  +91 99412 29005
                </span>
              </a>

              <span className="h-4 w-px bg-white/20" />

              {/* EMAIL */}
              <a
                href="mailto:info@acuitygroups.in"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  transition-colors
                  duration-300
                  hover:text-[#F4B85A]
                "
              >
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-all
                    duration-300
                    group-hover:bg-[#E8A33D]
                    group-hover:text-[#071A2E]
                  "
                >
                  <Mail size={12} />
                </span>

                <span className="font-medium">
                  info@acuitygroups.in
                </span>
              </a>
            </div>

            {/* ADDRESS */}
            <div
              className="
                flex
                min-w-0
                items-center
                gap-2
              "
            >
              <MapPin
                size={13}
                className="shrink-0 text-[#E8A33D]"
              />

              <span className="truncate font-medium">
                2nd Floor, KVO-08, No-28/2, near Sun Jupiter School,
                JP Nagar 6th Phase, Yelachenahalli, Bengaluru,
                Karnataka 560078
              </span>
            </div>
          </div>
        </div>


        {/* ===================================================
            MAIN NAVBAR
        ==================================================== */}

        <div
          className={`
            relative
            border-b
            border-slate-100
            transition-all
            duration-500

            ${
              scrolled
                ? "bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
                : "bg-white"
            }
          `}
        >

          <div
            className="
              relative
              mx-auto
              max-w-[1450px]
              px-4

              sm:px-6

              lg:px-8
            "
          >

            <div
              className={`
                flex
                items-center
                justify-between
                transition-all
                duration-500

                ${
                  scrolled
                    ? "h-[76px]"
                    : "h-[110px]"
                }
              `}
            >

              {/* =================================================
                  LOGO
              ================================================== */}

              <Link
                to="/"
                aria-label="Acuity Groups homepage"
                className="
                  group
                  relative
                  z-10
                  flex
                  shrink-0
                  items-center
                "
              >

                <motion.img
                  src={Logo}
                  alt="Acuity Groups Logo"
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  className={`
                    relative
                    w-auto
                    object-contain
                    transition-all
                    duration-500

                    ${
                      scrolled
                        ? "h-[62px] lg:h-[70px]"
                        : "h-[70px] lg:h-[82px]"
                    }
                  `}
                />

              </Link>


              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================== */}

              <nav
                className="
                  hidden
                  items-center
                  gap-5

                  lg:flex

                  xl:gap-7
                "
              >

                {/* =================================================
                    HOME
                ================================================== */}

                <div
                  className="relative"
                  onMouseEnter={() =>
                    setHoveredMenu("home")
                  }
                  onMouseLeave={() =>
                    setHoveredMenu(null)
                  }
                >
                  <NavLink
                    to="/home"
                    end
                    className={navLinkClass}
                  >
                    {({ isActive }) => (
                      <>
                        <span>Home</span>

                        {renderUnderline(
                          hoveredMenu === "home" ||
                            isActive
                        )}
                      </>
                    )}
                  </NavLink>
                </div>


                {/* =================================================
                    ABOUT
                ================================================== */}

                <div
                  className="relative"
                  onMouseEnter={() =>
                    setHoveredMenu("about")
                  }
                  onMouseLeave={() =>
                    setHoveredMenu(null)
                  }
                >
                  <NavLink
                    to="/about"
                    className={navLinkClass}
                  >
                    {({ isActive }) => (
                      <>
                        <span>About</span>

                        {renderUnderline(
                          hoveredMenu === "about" ||
                            isActive
                        )}
                      </>
                    )}
                  </NavLink>
                </div>


                {/* =================================================
                    SERVICES
                ================================================== */}

                <div
                  className="relative"
                  onMouseEnter={() => {
                    setServicesOpen(true);
                    setCareerOpen(false);
                    setHoveredMenu("services");
                  }}
                  onMouseLeave={() => {
                    setServicesOpen(false);
                    setHoveredMenu(null);
                  }}
                >

                  {/* SERVICES NAV ITEM */}

                  <div className="flex items-center">

                    <Link
                      to="/services"
                      className={`
                        relative
                        inline-flex
                        items-center
                        py-3
                        text-[16px]
                        font-semibold
                        tracking-[-0.2px]
                        transition-colors
                        duration-300

                        xl:text-[17px]

                        ${
                          servicesOpen
                            ? "text-[#0B1F3A]"
                            : "text-slate-700 hover:text-[#0B1F3A]"
                        }
                      `}
                    >
                      <span>
                        Services
                      </span>

                      {renderUnderline(
                        hoveredMenu === "services" ||
                          servicesOpen
                      )}
                    </Link>


                    {/* ARROW */}

                    <button
                      type="button"
                      onClick={() => {
                        setServicesOpen(
                          (previous) => !previous
                        );

                        setCareerOpen(false);
                      }}
                      aria-label="Toggle services menu"
                      aria-expanded={servicesOpen}
                      className="
                        ml-1
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300
                        hover:bg-[#0B1F3A]/10
                      "
                    >
                      <ChevronDown
                        size={15}
                        className={`
                          text-slate-600
                          transition-transform
                          duration-300

                          ${
                            servicesOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>

                  </div>


                  {/* =================================================
                      SERVICES DROPDOWN
                  ================================================== */}

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        variants={dropdownAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"

                        className="
                          absolute
                          left-1/2
                          top-[48px]
                          z-[10000]

                          w-[350px]
                          -translate-x-1/2

                          overflow-hidden
                          rounded-[20px]

                          border
                          border-slate-200

                          bg-white

                          p-2

                          shadow-[0_20px_50px_rgba(15,23,42,0.18)]
                        "
                      >

                        {/* =================================================
                            BLUE HEADER
                        ================================================== */}

                        <div
                          className="
                            rounded-[16px]
                            bg-gradient-to-br
                            from-[#0B1F3A]
                            to-[#153A64]
                            px-4
                            py-3.5
                            text-white
                          "
                        >

                          <p
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[2.5px]
                              text-[#E8A33D]
                            "
                          >
                            Our Services
                          </p>

                          <p
                            className="
                              mt-1
                              text-[12px]
                              leading-5
                              text-white/80
                            "
                          >
                            Complete facility management
                            solutions for your business.
                          </p>

                        </div>


                        {/* =================================================
                            SERVICES LIST
                        ================================================== */}

                        <div className="mt-1">

                          {servicesItems.map(
                            (item, index) => (
                              <Link
                                key={item.path}
                                to={item.path}

                                onClick={() => {
                                  setServicesOpen(false);
                                  setHoveredMenu(null);
                                }}

                                className="
                                  group/item
                                  flex
                                  items-center
                                  justify-between

                                  rounded-xl

                                  px-3
                                  py-2.5

                                  text-[13px]
                                  font-medium
                                  text-slate-700

                                  transition-all
                                  duration-200

                                  hover:bg-[#FFF7E8]
                                  hover:text-[#0B1F3A]
                                "
                              >

                                <div
                                  className="
                                    flex
                                    min-w-0
                                    items-center
                                    gap-3
                                  "
                                >

                                  {/* NUMBER */}

                                  <span
                                    className="
                                      flex
                                      h-7
                                      w-7
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-lg

                                      bg-slate-100

                                      text-[10px]
                                      font-bold
                                      text-slate-500

                                      transition-all
                                      duration-200

                                      group-hover/item:bg-[#E8A33D]
                                      group-hover/item:text-[#0B1F3A]
                                    "
                                  >
                                    {String(
                                      index + 1
                                    ).padStart(2, "0")}
                                  </span>


                                  {/* NAME */}

                                  <span className="truncate">
                                    {item.name}
                                  </span>

                                </div>


                                {/* ARROW */}

                                <ArrowRight
                                  size={14}
                                  className="
                                    ml-2
                                    shrink-0

                                    -translate-x-1

                                    opacity-0

                                    transition-all
                                    duration-200

                                    group-hover/item:translate-x-0
                                    group-hover/item:opacity-100
                                  "
                                />

                              </Link>
                            )
                          )}

                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>


                {/* =================================================
                    CAREER
                ================================================== */}

                <div
                  className="relative"
                  onMouseEnter={() => {
                    setCareerOpen(true);
                    setServicesOpen(false);
                    setHoveredMenu("career");
                  }}
                  onMouseLeave={() => {
                    setCareerOpen(false);
                    setHoveredMenu(null);
                  }}
                >

                  <button
                    type="button"
                    onClick={() => {
                      setCareerOpen(
                        (previous) => !previous
                      );

                      setServicesOpen(false);
                    }}
                    aria-expanded={careerOpen}

                    className={`
                      relative
                      flex
                      items-center
                      gap-1
                      py-3

                      text-[16px]
                      font-semibold
                      tracking-[-0.2px]

                      transition-colors
                      duration-300

                      xl:text-[17px]

                      ${
                        careerOpen
                          ? "text-[#0B1F3A]"
                          : "text-slate-700 hover:text-[#0B1F3A]"
                      }
                    `}
                  >

                    <span>
                      Career
                    </span>

                    <ChevronDown
                      size={15}
                      className={`
                        transition-transform
                        duration-300

                        ${
                          careerOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />

                    {renderUnderline(
                      hoveredMenu === "career" ||
                        careerOpen
                    )}

                  </button>


                  {/* CAREER DROPDOWN */}

                  <AnimatePresence>
                    {careerOpen && (
                      <motion.div
                        variants={dropdownAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"

                        className="
                          absolute
                          left-1/2
                          top-[48px]
                          z-[10000]

                          w-[280px]
                          -translate-x-1/2

                          overflow-hidden
                          rounded-[20px]

                          border
                          border-slate-200

                          bg-white

                          p-2

                          shadow-[0_20px_50px_rgba(15,23,42,0.18)]
                        "
                      >

                        <div
                          className="
                            rounded-[16px]
                            bg-gradient-to-br
                            from-[#0B1F3A]
                            to-[#153A64]

                            px-4
                            py-3.5

                            text-white
                          "
                        >

                          <p
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[2.5px]
                              text-[#E8A33D]
                            "
                          >
                            Join Our Team
                          </p>

                          <p
                            className="
                              mt-1
                              text-[12px]
                              leading-5
                              text-white/80
                            "
                          >
                            Build your career with
                            Acuity Groups.
                          </p>

                        </div>


                        <div className="mt-1">

                          {careerItems.map(
                            (item) => (
                              <Link
                                key={item.path}
                                to={item.path}

                                onClick={() => {
                                  setCareerOpen(false);
                                  setHoveredMenu(null);
                                }}

                                className="
                                  group/item

                                  flex
                                  items-center
                                  justify-between

                                  rounded-xl

                                  px-3
                                  py-2.5

                                  text-[13px]
                                  font-medium
                                  text-slate-700

                                  transition-all
                                  duration-200

                                  hover:bg-[#FFF7E8]
                                  hover:text-[#0B1F3A]
                                "
                              >

                                <span>
                                  {item.name}
                                </span>

                                <ArrowRight
                                  size={14}
                                  className="
                                    -translate-x-1
                                    opacity-0

                                    transition-all
                                    duration-200

                                    group-hover/item:translate-x-0
                                    group-hover/item:opacity-100
                                  "
                                />

                              </Link>
                            )
                          )}

                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>


                {/* =================================================
                    BLOGS
                ================================================== */}

                <div
                  className="relative"
                  onMouseEnter={() =>
                    setHoveredMenu("blogs")
                  }
                  onMouseLeave={() =>
                    setHoveredMenu(null)
                  }
                >

                  <NavLink
                    to="/blogs"
                    className={navLinkClass}
                  >
                    {({ isActive }) => (
                      <>
                        <span>
                          Blogs
                        </span>

                        {renderUnderline(
                          hoveredMenu === "blogs" ||
                            isActive
                        )}
                      </>
                    )}
                  </NavLink>

                </div>


                {/* =================================================
                    CONTACT
                ================================================== */}

                <div
                  className="relative"
                  onMouseEnter={() =>
                    setHoveredMenu("contact")
                  }
                  onMouseLeave={() =>
                    setHoveredMenu(null)
                  }
                >

                  <NavLink
                    to="/contact"
                    className={navLinkClass}
                  >
                    {({ isActive }) => (
                      <>
                        <span>
                          Contact
                        </span>

                        {renderUnderline(
                          hoveredMenu === "contact" ||
                            isActive
                        )}
                      </>
                    )}
                  </NavLink>

                </div>

              </nav>


              {/* =================================================
                  DESKTOP GET STARTED
              ================================================== */}

              <div className="hidden lg:block">

                <Link
                  to="/contact"

                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-2
                    overflow-hidden
                    rounded-full

                    bg-gradient-to-r
                    from-[#071A2E]
                    to-[#153A64]

                    px-6
                    py-3

                    text-sm
                    font-semibold
                    text-white

                    shadow-[0_12px_30px_rgba(11,31,58,0.22)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-[0_18px_35px_rgba(11,31,58,0.3)]
                  "
                >

                  <span
                    className="
                      absolute
                      inset-0
                      translate-y-full

                      bg-gradient-to-r
                      from-[#E8A33D]
                      to-[#F4C067]

                      transition-transform
                      duration-500

                      group-hover:translate-y-0
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                      transition-colors
                      duration-300

                      group-hover:text-[#071A2E]
                    "
                  >
                    Get Started
                  </span>

                  <ArrowRight
                    size={16}
                    className="
                      relative
                      z-10

                      transition-all
                      duration-300

                      group-hover:translate-x-1
                      group-hover:text-[#071A2E]
                    "
                  />

                </Link>

              </div>


              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================== */}

              <button
                type="button"

                aria-label={
                  isOpen
                    ? "Close mobile menu"
                    : "Open mobile menu"
                }

                aria-expanded={isOpen}

                onClick={() =>
                  setIsOpen(
                    (previous) => !previous
                  )
                }

                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-slate-200

                  bg-white

                  text-[#0B1F3A]

                  shadow-[0_8px_24px_rgba(15,23,42,0.1)]

                  transition-all
                  duration-300

                  hover:bg-slate-50

                  lg:hidden
                "
              >

                <AnimatePresence
                  mode="wait"
                >

                  {isOpen ? (
                    <motion.span
                      key="close"

                      initial={{
                        rotate: -90,
                        opacity: 0,
                        scale: 0.7,
                      }}

                      animate={{
                        rotate: 0,
                        opacity: 1,
                        scale: 1,
                      }}

                      exit={{
                        rotate: 90,
                        opacity: 0,
                        scale: 0.7,
                      }}

                      className="relative z-10"
                    >
                      <X size={24} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"

                      initial={{
                        rotate: 90,
                        opacity: 0,
                        scale: 0.7,
                      }}

                      animate={{
                        rotate: 0,
                        opacity: 1,
                        scale: 1,
                      }}

                      exit={{
                        rotate: -90,
                        opacity: 0,
                        scale: 0.7,
                      }}

                      className="relative z-10"
                    >
                      <Menu size={25} />
                    </motion.span>
                  )}

                </AnimatePresence>

              </button>

            </div>

          </div>

        </div>

      </header>


      {/* =========================================================
          MOBILE OVERLAY
      ========================================================== */}

      <AnimatePresence>

        {isOpen && (
          <motion.button
            type="button"

            aria-label="Close mobile menu overlay"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            onClick={() =>
              setIsOpen(false)
            }

            className="
              fixed
              inset-0
              z-[9997]

              bg-[#071A2E]/60
              backdrop-blur-sm

              lg:hidden
            "
          />
        )}

      </AnimatePresence>


      {/* =========================================================
          MOBILE DRAWER
      ========================================================== */}

      <AnimatePresence>

        {isOpen && (
          <motion.aside
            initial={{
              x: "100%",
            }}

            animate={{
              x: 0,
            }}

            exit={{
              x: "100%",
            }}

            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
            }}

            className="
              fixed
              right-0
              top-0
              z-[9998]

              h-dvh

              w-[90%]
              max-w-[390px]

              overflow-hidden

              border-l
              border-slate-200

              bg-white

              shadow-[-30px_0_80px_rgba(15,23,42,0.25)]

              lg:hidden
            "
          >

            <div className="relative flex h-full flex-col">

              {/* =================================================
                  MOBILE HEADER
              ================================================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between

                  border-b
                  border-slate-100

                  px-5
                  py-4
                "
              >

                <Link
                  to="/"
                  onClick={() =>
                    setIsOpen(false)
                  }
                  aria-label="Acuity Groups homepage"
                >

                  <img
                    src={Logo}
                    alt="Acuity Groups Logo"

                    className="
                      h-[58px]
                      w-auto
                      object-contain
                    "
                  />

                </Link>


                <button
                  type="button"
                  onClick={() =>
                    setIsOpen(false)
                  }

                  aria-label="Close mobile menu"

                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-xl

                    bg-[#0B1F3A]

                    text-white

                    transition-all
                    duration-300

                    hover:bg-[#E8A33D]
                    hover:text-[#0B1F3A]
                  "
                >
                  <X size={20} />
                </button>

              </div>


              {/* =================================================
                  MOBILE CONTENT
              ================================================== */}

              <div
                className="
                  flex-1
                  overflow-y-auto

                  px-5
                  py-6
                "
              >

                <div className="mb-5">

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[3px]
                      text-[#E8A33D]
                    "
                  >
                    Navigation
                  </p>

                  <h2
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[#0B1F3A]
                    "
                  >
                    Explore Acuity Groups
                  </h2>

                </div>


                <div className="space-y-2">

                  {/* HOME */}

                  <MobileNavLink
                    to="/home"
                    label="Home"
                    onClick={() =>
                      setIsOpen(false)
                    }
                    end
                  />


                  {/* ABOUT */}

                  <MobileNavLink
                    to="/about"
                    label="About"
                    onClick={() =>
                      setIsOpen(false)
                    }
                  />


                  {/* =================================================
                      MOBILE SERVICES
                  ================================================== */}

                  <div
                    className="
                      overflow-hidden
                      rounded-2xl

                      border
                      border-slate-200

                      bg-white

                      shadow-sm
                    "
                  >

                    <button
                      type="button"

                      onClick={() => {
                        setServicesOpen(
                          (previous) => !previous
                        );

                        setCareerOpen(false);
                      }}

                      className={`
                        flex
                        w-full
                        items-center
                        justify-between

                        px-4
                        py-4

                        text-left
                        text-[16px]
                        font-semibold

                        transition-colors
                        duration-300

                        ${
                          servicesOpen
                            ? "bg-[#0B1F3A] text-white"
                            : "text-slate-700 hover:bg-slate-50"
                        }
                      `}
                    >

                      <span>
                        Services
                      </span>

                      <ChevronDown
                        size={19}
                        className={`
                          transition-transform
                          duration-300

                          ${
                            servicesOpen
                              ? "rotate-180 text-[#E8A33D]"
                              : ""
                          }
                        `}
                      />

                    </button>


                    <div
                      className={`
                        grid
                        transition-all
                        duration-500

                        ${
                          servicesOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >

                      <div className="overflow-hidden">

                        <div
                          className="
                            space-y-1

                            border-t
                            border-slate-100

                            p-2
                          "
                        >

                          <Link
                            to="/services"

                            onClick={() => {
                              setIsOpen(false);
                              setServicesOpen(false);
                            }}

                            className="
                              flex
                              items-center
                              justify-between

                              rounded-xl

                              px-3
                              py-3

                              text-sm
                              font-semibold

                              text-[#0B1F3A]

                              hover:bg-[#FFF7E8]
                            "
                          >
                            <span>
                              All Services
                            </span>

                            <ArrowRight
                              size={15}
                            />
                          </Link>


                          {servicesItems.map(
                            (item, index) => (
                              <Link
                                key={item.path}
                                to={item.path}

                                onClick={() => {
                                  setIsOpen(false);
                                  setServicesOpen(false);
                                }}

                                className="
                                  flex
                                  items-center
                                  gap-3

                                  rounded-xl

                                  px-3
                                  py-3

                                  text-sm
                                  text-slate-600

                                  transition-all

                                  hover:bg-[#FFF7E8]
                                  hover:text-[#0B1F3A]
                                "
                              >

                                <span
                                  className="
                                    flex
                                    h-6
                                    w-6
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-lg

                                    bg-slate-100

                                    text-[9px]
                                    font-bold
                                    text-slate-500
                                  "
                                >
                                  {String(
                                    index + 1
                                  ).padStart(2, "0")}
                                </span>

                                <span>
                                  {item.name}
                                </span>

                              </Link>
                            )
                          )}

                        </div>

                      </div>

                    </div>

                  </div>


                  {/* =================================================
                      MOBILE CAREER
                  ================================================== */}

                  <div
                    className="
                      overflow-hidden
                      rounded-2xl

                      border
                      border-slate-200

                      bg-white

                      shadow-sm
                    "
                  >

                    <button
                      type="button"

                      onClick={() => {
                        setCareerOpen(
                          (previous) => !previous
                        );

                        setServicesOpen(false);
                      }}

                      className={`
                        flex
                        w-full
                        items-center
                        justify-between

                        px-4
                        py-4

                        text-left
                        text-[16px]
                        font-semibold

                        transition-colors
                        duration-300

                        ${
                          careerOpen
                            ? "bg-[#0B1F3A] text-white"
                            : "text-slate-700 hover:bg-slate-50"
                        }
                      `}
                    >

                      <span>
                        Career
                      </span>

                      <ChevronDown
                        size={19}
                        className={`
                          transition-transform
                          duration-300

                          ${
                            careerOpen
                              ? "rotate-180 text-[#E8A33D]"
                              : ""
                          }
                        `}
                      />

                    </button>


                    <div
                      className={`
                        grid
                        transition-all
                        duration-500

                        ${
                          careerOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >

                      <div className="overflow-hidden">

                        <div
                          className="
                            space-y-1

                            border-t
                            border-slate-100

                            p-2
                          "
                        >

                          {careerItems.map(
                            (item) => (
                              <Link
                                key={item.path}
                                to={item.path}

                                onClick={() => {
                                  setIsOpen(false);
                                  setCareerOpen(false);
                                }}

                                className="
                                  flex
                                  items-center
                                  justify-between

                                  rounded-xl

                                  px-3
                                  py-3

                                  text-sm
                                  text-slate-600

                                  transition-all

                                  hover:bg-[#FFF7E8]
                                  hover:text-[#0B1F3A]
                                "
                              >

                                <span>
                                  {item.name}
                                </span>

                                <ArrowRight
                                  size={15}
                                />

                              </Link>
                            )
                          )}

                        </div>

                      </div>

                    </div>

                  </div>


                  {/* BLOGS */}

                  <MobileNavLink
                    to="/blogs"
                    label="Blogs"
                    onClick={() =>
                      setIsOpen(false)
                    }
                  />


                  {/* CONTACT */}

                  <MobileNavLink
                    to="/contact"
                    label="Contact"
                    onClick={() =>
                      setIsOpen(false)
                    }
                  />

                </div>


                {/* =================================================
                    MOBILE CTA
                ================================================== */}

                <Link
                  to="/contact"

                  onClick={() =>
                    setIsOpen(false)
                  }

                  className="
                    group
                    mt-7

                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-2xl

                    bg-gradient-to-r
                    from-[#0B1F3A]
                    to-[#153A64]

                    px-5
                    py-4

                    font-semibold
                    text-white

                    shadow-[0_15px_35px_rgba(11,31,58,0.2)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                  "
                >

                  <span>
                    Get Started
                  </span>

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />

                </Link>


                {/* =================================================
                    MOBILE CONTACT INFO
                ================================================== */}

                <div
                  className="
                    mt-7

                    rounded-[20px]

                    border
                    border-slate-200

                    bg-slate-50

                    p-4
                  "
                >

                  <p
                    className="
                      mb-4

                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[3px]

                      text-[#E8A33D]
                    "
                  >
                    Contact Us
                  </p>


                  <div className="space-y-4">

                    {/* PHONE */}

                    <a
                      href="tel:+919941229005"

                      className="
                        group
                        flex
                        items-center
                        gap-3

                        text-sm
                        text-slate-600

                        hover:text-[#0B1F3A]
                      "
                    >

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center

                          rounded-xl

                          bg-blue-50

                          text-[#0B1F3A]
                        "
                      >
                        <Phone size={15} />
                      </span>

                      <span className="font-medium">
                        +91 99412 29005
                      </span>

                    </a>


                    {/* EMAIL */}

                    <a
                      href="mailto:info@acuitygroups.in"

                      className="
                        group
                        flex
                        items-center
                        gap-3

                        text-sm
                        text-slate-600

                        hover:text-[#0B1F3A]
                      "
                    >

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center

                          rounded-xl

                          bg-amber-50

                          text-[#B97813]
                        "
                      >
                        <Mail size={15} />
                      </span>

                      <span className="font-medium">
                        info@acuitygroups.in
                      </span>

                    </a>


                    {/* ADDRESS */}

                    <div
                      className="
                        flex
                        items-start
                        gap-3

                        text-sm
                        leading-6
                        text-slate-600
                      "
                    >

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center

                          rounded-xl

                          bg-rose-50

                          text-rose-500
                        "
                      >
                        <MapPin size={15} />
                      </span>

                      <span>
                        2nd Floor, KVO-08, No-28/2,
                        near Sun Jupiter School, JP Nagar
                        6th Phase, Yelachenahalli,
                        Bengaluru, Karnataka 560078
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.aside>
        )}

      </AnimatePresence>


      {/* =========================================================
          NAVBAR SPACER
      ========================================================== */}

      <div
        className={`
          transition-all
          duration-500

          ${
            scrolled
              ? "h-[76px] lg:h-[76px]"
              : "h-[92px] lg:h-[150px]"
          }
        `}
      />

    </>
  );
};


/* =============================================================
   MOBILE NAV LINK
============================================================= */

const MobileNavLink = ({
  to,
  label,
  onClick,
  end = false,
}) => {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}

      className={({ isActive }) =>
        `
          group

          flex
          items-center
          justify-between

          rounded-2xl

          border

          px-4
          py-4

          text-[16px]
          font-semibold

          transition-all
          duration-300

          ${
            isActive
              ? "border-[#0B1F3A] bg-[#0B1F3A] text-white shadow-lg"
              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A]"
          }
        `
      }
    >
      {({ isActive }) => (
        <>
          <span>
            {label}
          </span>

          <ArrowRight
            size={17}

            className={`
              transition-all
              duration-300

              ${
                isActive
                  ? "text-[#E8A33D]"
                  : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }
            `}
          />
        </>
      )}
    </NavLink>
  );
};

export default Navbar;