// import React, { useEffect, useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
// import Logo from "../images/acuitylogo.jpeg";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [careerOpen, setCareerOpen] = useState(false);
//   const [hoveredMenu, setHoveredMenu] = useState(null);

//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//     setServicesOpen(false);
//     setCareerOpen(false);
//     setHoveredMenu(null);
//   }, [location]);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "unset";

//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   const navLinkClass = ({ isActive }) =>
//     `relative inline-flex text-[20px] font-semibold transition-colors duration-300 ${
//       isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
//     }`;

//   const servicesItems = [
//     {
//       name: "Integrated Facility Management",
//       path: "/integrated-facility-management",
//     },
//     {
//       name: "Security Services",
//       path: "/security-services",
//     },
//     {
//       name: "Housekeeping Services",
//       path: "/housekeeping-services",
//     },
//     {
//       name: "Soft Services",
//       path: "/soft-services",
//     },
//     {
//       name: "Pest Management",
//       path: "/pest-management",
//     },
//     {
//       name: "Manpower Outsourcing",
//       path: "/manpower-outsourcing",
//     },
//     {
//       name: "Repair & Maintenance",
//       path: "/repair-maintenance",
//     },
//   ];

//   const careerItems = [
//     {
//       name: "Pest Control Careers",
//       path: "/career/pest-control",
//     },
//     {
//       name: "Acuity Groups Careers",
//       path: "/career/acuity-groups",
//     },
//   ];

//   const underlineAnimation = (
//     <motion.div
//       layoutId="navbar-underline"
//       className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-blue-500"
//       transition={{
//         type: "spring",
//         stiffness: 500,
//         damping: 35,
//       }}
//     />
//   );

//   return (
//     <>
//       <header className="fixed left-0 top-0 z-[9999] w-full font-['Inter',system-ui,sans-serif]">
//         {/* TOP BAR */}
//         <div className="hidden bg-white/30 backdrop-blur-sm lg:block">
//           <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-sm">
//             <div className="flex items-center gap-6 text-gray-600">
//               <a
//                 href="tel:+919941229005"
//                 className="flex items-center gap-2 font-semibold text-black transition-colors hover:text-yellow-500"
//               >
//                 <Phone size={14} />

//                 <span>+91 99412 29005 / 080 4122 9005</span>
//               </a>

//               <a
//                 href="mailto:info@acuitygroups.in"
//                 className="flex items-center gap-2 font-semibold text-black transition-colors hover:text-yellow-500"
//               >
//                 <Mail size={14} />

//                 <span>info@acuitygroups.in</span>
//               </a>
//             </div>

//             <div className="flex items-center gap-2 font-semibold text-black">
//               <MapPin size={14} />

//               <span>
//                 2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP Nagar 6th
//                 Phase, Yelachenahalli Bengaluru, Karnataka 560078
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* MAIN NAVBAR */}
//         <div
//           className={`transition-all duration-500 ${
//             scrolled
//               ? "hidden bg-white/10 backdrop-blur-sm lg:block"
//               : "bg-transparent"
//           }`}
//         >
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="flex h-28 items-center justify-between lg:h-32">
//               {/* LOGO */}
//               <Link to="/" className="flex-shrink-0">
//                 <img
//                   src={Logo}
//                   alt="Acuity Groups Logo"
//                   className="h-24 w-auto object-contain lg:h-40"
//                 />
//               </Link>

//               {/* DESKTOP MENU */}
//               <nav className="hidden items-center gap-8 lg:flex">
//                 {/* HOME */}
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setHoveredMenu("home")}
//                   onMouseLeave={() => setHoveredMenu(null)}
//                 >
//                   <NavLink to="/" className={navLinkClass} end>
//                     {({ isActive }) => (
//                       <>
//                         <span>Home</span>

//                         {(hoveredMenu === "home" || isActive) &&
//                           underlineAnimation}
//                       </>
//                     )}
//                   </NavLink>
//                 </div>

//                 {/* ABOUT */}
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setHoveredMenu("about")}
//                   onMouseLeave={() => setHoveredMenu(null)}
//                 >
//                   <NavLink to="/about" className={navLinkClass}>
//                     {({ isActive }) => (
//                       <>
//                         <span>About</span>

//                         {(hoveredMenu === "about" || isActive) &&
//                           underlineAnimation}
//                       </>
//                     )}
//                   </NavLink>
//                 </div>

//                 {/* SERVICES DROPDOWN */}
//                 <div
//                   className="relative"
//                   onMouseEnter={() => {
//                     setServicesOpen(true);
//                     setHoveredMenu("services");
//                   }}
//                   onMouseLeave={() => {
//                     setServicesOpen(false);
//                     setHoveredMenu(null);
//                   }}
//                 >
//                   <div className="flex items-center gap-1">
//                     <Link
//                       to="/services"
//                       className={`relative inline-flex text-[20px] font-semibold transition-colors duration-300 ${
//                         servicesOpen
//                           ? "text-blue-500"
//                           : "text-gray-700 hover:text-blue-500"
//                       }`}
//                     >
//                       <span>Services</span>

//                       {hoveredMenu === "services" && underlineAnimation}
//                     </Link>

//                     <button
//                       type="button"
//                       onClick={() => setServicesOpen(!servicesOpen)}
//                       className="focus:outline-none"
//                       aria-label="Toggle services menu"
//                     >
//                       <ChevronDown
//                         size={16}
//                         className={`text-gray-600 transition-transform duration-300 ${
//                           servicesOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                   </div>

//                   <div
//                     className={`absolute left-0 top-8 w-80 origin-top overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl transition-all duration-300 ${
//                       servicesOpen
//                         ? "visible translate-y-0 scale-100 opacity-100"
//                         : "invisible -translate-y-3 scale-95 opacity-0"
//                     }`}
//                   >
//                     <div className="p-2">
//                       {servicesItems.map((item) => (
//                         <Link
//                           key={item.path}
//                           to={item.path}
//                           className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] text-gray-700 transition-all duration-200 hover:bg-amber-50 hover:text-blue-900"
//                         >
//                           <span>{item.name}</span>

//                           <ChevronDown size={14} className="rotate-[-90deg]" />
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* CAREER DROPDOWN */}
//                 <div
//                   className="relative"
//                   onMouseEnter={() => {
//                     setCareerOpen(true);
//                     setHoveredMenu("career");
//                   }}
//                   onMouseLeave={() => {
//                     setCareerOpen(false);
//                     setHoveredMenu(null);
//                   }}
//                 >
//                   <button
//                     type="button"
//                     onClick={() => setCareerOpen(!careerOpen)}
//                     className={`relative flex items-center gap-1 text-[20px] font-semibold transition-colors duration-300 ${
//                       careerOpen
//                         ? "text-blue-500"
//                         : "text-gray-700 hover:text-blue-500"
//                     }`}
//                   >
//                     <span>Career</span>

//                     {hoveredMenu === "career" && underlineAnimation}

//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-300 ${
//                         careerOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`absolute left-0 top-8 w-72 origin-top overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl transition-all duration-300 ${
//                       careerOpen
//                         ? "visible translate-y-0 scale-100 opacity-100"
//                         : "invisible -translate-y-3 scale-95 opacity-0"
//                     }`}
//                   >
//                     <div className="p-2">
//                       {careerItems.map((item) => (
//                         <Link
//                           key={item.path}
//                           to={item.path}
//                           className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] text-gray-700 transition-all duration-200 hover:bg-amber-50 hover:text-blue-900"
//                         >
//                           <span>{item.name}</span>

//                           <ChevronDown size={14} className="rotate-[-90deg]" />
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* BLOGS */}
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setHoveredMenu("blogs")}
//                   onMouseLeave={() => setHoveredMenu(null)}
//                 >
//                   <NavLink to="/blogs" className={navLinkClass}>
//                     {({ isActive }) => (
//                       <>
//                         <span>Blogs</span>

//                         {(hoveredMenu === "blogs" || isActive) &&
//                           underlineAnimation}
//                       </>
//                     )}
//                   </NavLink>
//                 </div>

//                 {/* CONTACT */}
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setHoveredMenu("contact")}
//                   onMouseLeave={() => setHoveredMenu(null)}
//                 >
//                   <NavLink to="/contact" className={navLinkClass}>
//                     {({ isActive }) => (
//                       <>
//                         <span>Contact</span>

//                         {(hoveredMenu === "contact" || isActive) &&
//                           underlineAnimation}
//                       </>
//                     )}
//                   </NavLink>
//                 </div>
//               </nav>

//               {/* DESKTOP CTA */}
//               <div className="hidden lg:block">
//                 <Link to="/contact">
//                   <button
//                     type="button"
//                     className="group relative overflow-hidden rounded-full bg-black px-6 py-2.5 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/30"
//                   >
//                     <span className="relative z-10">Get Started</span>

//                     <span className="absolute inset-0 w-0 bg-blue-900 transition-all duration-500 group-hover:w-full" />
//                   </button>
//                 </Link>
//               </div>

//               {/* MOBILE MENU BUTTON */}
//               <button
//                 type="button"
//                 className="rounded-full p-2 text-gray-800 transition hover:bg-gray-100 lg:hidden"
//                 onClick={() => setIsOpen(!isOpen)}
//                 aria-label="Toggle mobile menu"
//               >
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* MOBILE DRAWER */}
//         <div
//           className={`fixed right-0 top-0 z-[100] h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="flex h-full flex-col">
//             <div className="flex items-center justify-between border-b border-gray-100 p-6">
//               <Link to="/" onClick={() => setIsOpen(false)}>
//                 <img
//                   src={Logo}
//                   alt="Acuity Groups Logo"
//                   className="h-14 w-auto"
//                 />
//               </Link>

//               <button
//                 type="button"
//                 onClick={() => setIsOpen(false)}
//                 className="rounded-full p-2 hover:bg-gray-100"
//                 aria-label="Close mobile menu"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-6">
//               <div className="flex flex-col gap-4">
//                 <NavLink
//                   to="/"
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     `text-lg font-medium transition ${
//                       isActive
//                         ? "text-blue-900"
//                         : "text-gray-800 hover:text-blue-900"
//                     }`
//                   }
//                   end
//                 >
//                   Home
//                 </NavLink>

//                 <NavLink
//                   to="/about"
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     `text-lg font-medium transition ${
//                       isActive
//                         ? "text-yellow-500"
//                         : "text-gray-800 hover:text-yellow-500"
//                     }`
//                   }
//                 >
//                   About
//                 </NavLink>

//                 {/* MOBILE SERVICES */}
//                 <div>
//                   <button
//                     type="button"
//                     onClick={() => setServicesOpen(!servicesOpen)}
//                     className="flex w-full items-center justify-between text-lg font-medium text-gray-800 transition hover:text-yellow-500"
//                   >
//                     Services
//                     <ChevronDown
//                       size={20}
//                       className={`transition-transform duration-300 ${
//                         servicesOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`overflow-hidden transition-all duration-300 ${
//                       servicesOpen ? "mt-3 max-h-[600px]" : "max-h-0"
//                     }`}
//                   >
//                     <div className="space-y-2 border-l-2 border-yellow-400 pl-4">
//                       <Link
//                         to="/services"
//                         onClick={() => {
//                           setIsOpen(false);
//                           setServicesOpen(false);
//                         }}
//                         className="block py-2 text-gray-600 transition hover:text-yellow-500"
//                       >
//                         All Services
//                       </Link>

//                       {servicesItems.map((item) => (
//                         <Link
//                           key={item.path}
//                           to={item.path}
//                           onClick={() => {
//                             setIsOpen(false);
//                             setServicesOpen(false);
//                           }}
//                           className="block py-2 text-gray-600 transition hover:text-yellow-500"
//                         >
//                           {item.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* MOBILE CAREER */}
//                 <div>
//                   <button
//                     type="button"
//                     onClick={() => setCareerOpen(!careerOpen)}
//                     className="flex w-full items-center justify-between text-lg font-medium text-gray-800 transition hover:text-yellow-500"
//                   >
//                     Career
//                     <ChevronDown
//                       size={20}
//                       className={`transition-transform duration-300 ${
//                         careerOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`overflow-hidden transition-all duration-300 ${
//                       careerOpen ? "mt-3 max-h-96" : "max-h-0"
//                     }`}
//                   >
//                     <div className="space-y-2 border-l-2 border-yellow-400 pl-4">
//                       {careerItems.map((item) => (
//                         <Link
//                           key={item.path}
//                           to={item.path}
//                           onClick={() => {
//                             setIsOpen(false);
//                             setCareerOpen(false);
//                           }}
//                           className="block py-2 text-gray-600 transition hover:text-yellow-500"
//                         >
//                           {item.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <NavLink
//                   to="/blogs"
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     `text-lg font-medium transition ${
//                       isActive
//                         ? "text-yellow-500"
//                         : "text-gray-800 hover:text-yellow-500"
//                     }`
//                   }
//                 >
//                   Blogs
//                 </NavLink>

//                 <NavLink
//                   to="/contact"
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     `text-lg font-medium transition ${
//                       isActive
//                         ? "text-yellow-500"
//                         : "text-gray-800 hover:text-yellow-500"
//                     }`
//                   }
//                 >
//                   Contact
//                 </NavLink>
//               </div>

//               <div className="mt-8 border-t border-gray-100 pt-8">
//                 <Link to="/contact" onClick={() => setIsOpen(false)}>
//                   <button
//                     type="button"
//                     className="w-full rounded-full bg-black py-3 font-medium text-white transition hover:bg-yellow-500 hover:text-black"
//                   >
//                     Get Started
//                   </button>
//                 </Link>

//                 <div className="mt-6 space-y-3 text-sm text-gray-500">
//                   <a
//                     href="tel:+919941229005"
//                     className="flex items-center gap-2 hover:text-yellow-500"
//                   >
//                     <Phone size={14} />

//                     <span>+91 99412 29005</span>
//                   </a>

//                   <a
//                     href="mailto:info@acuitygroups.in"
//                     className="flex items-center gap-2 hover:text-yellow-500"
//                   >
//                     <Mail size={14} />

//                     <span>info@acuitygroups.in</span>
//                   </a>

//                   <div className="flex items-start gap-2">
//                     <MapPin size={14} className="mt-1 flex-shrink-0" />

//                     <span>
//                       2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP
//                       Nagar 6th Phase, Yelachenahalli Bengaluru, Karnataka
//                       560078
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* MOBILE OVERLAY */}
//         {isOpen && (
//           <div
//             className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-sm lg:hidden"
//             onClick={() => setIsOpen(false)}
//           />
//         )}
//       </header>

//       {/* NAVBAR SPACER */}
//       <div className="h-[calc(40px+60px)] lg:h-[calc(40px+128px)]" />
//     </>
//   );
// };

// export default Navbar;


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

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setCareerOpen(false);
    setHoveredMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinkClass = ({ isActive }) =>
    `group relative inline-flex items-center py-3 text-[16px] font-semibold tracking-[-0.2px] transition-colors duration-300 xl:text-[17px] ${
      isActive
        ? "text-[#0B1F3A]"
        : "text-slate-700 hover:text-[#0B1F3A]"
    }`;

  const dropdownAnimation = {
    hidden: {
      opacity: 0,
      y: -12,
      scale: 0.96,
      pointerEvents: "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto",
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.97,
      pointerEvents: "none",
      transition: {
        duration: 0.18,
      },
    },
  };

  const renderUnderline = (isVisible) => (
    <span
      className={`absolute bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#E8A33D] to-[#0B1F3A] transition-all duration-300 ${
        isVisible ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
    />
  );

  return (
    <>
      <header className="fixed left-0 top-0 z-[9999] w-full font-['Inter',system-ui,sans-serif]">
        {/* Desktop Top Information Bar */}
        <div
          className={`hidden overflow-hidden border-b transition-all duration-500 lg:block ${
            scrolled
              ? "max-h-0 border-transparent opacity-0"
              : "max-h-12 border-white/20 bg-[#071A2E]/95 opacity-100 backdrop-blur-xl"
          }`}
        >
          <div className="mx-auto flex h-10 max-w-[1450px] items-center justify-between gap-6 px-6 text-[12px] text-white/80 xl:px-8">
            <div className="flex shrink-0 items-center gap-5">
              <a
                href="tel:+919941229005"
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-[#F4B85A]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#E8A33D] group-hover:text-[#071A2E]">
                  <Phone size={12} />
                </span>

                <span className="font-medium">
                  +91 99412 29005 / 080 4122 9005
                </span>
              </a>

              <span className="h-4 w-px bg-white/20" />

              <a
                href="mailto:info@acuitygroups.in"
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-[#F4B85A]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#E8A33D] group-hover:text-[#071A2E]">
                  <Mail size={12} />
                </span>

                <span className="font-medium">info@acuitygroups.in</span>
              </a>
            </div>

            <div className="flex min-w-0 items-center gap-2">
              <MapPin size={13} className="shrink-0 text-[#E8A33D]" />

              <span className="truncate font-medium">
                2nd Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar
                6th Phase, Yelachenahalli, Bengaluru, Karnataka 560078
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`relative transition-all duration-500 ${
            scrolled
              ? "border-b border-white/50 bg-white/80 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
              : "bg-white/45 backdrop-blur-md"
          }`}
        >
          {/* Navbar Glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className={`absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-300/20 blur-3xl transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-40"
              }`}
            />

            <div
              className={`absolute -right-20 -top-24 h-52 w-52 rounded-full bg-amber-300/20 blur-3xl transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-40"
              }`}
            />
          </div>

          <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
            <div
              className={`flex items-center justify-between transition-all duration-500 ${
                scrolled ? "h-[78px] lg:h-[82px]" : "h-[92px] lg:h-[108px]"
              }`}
            >
              {/* Logo */}
              <Link
                to="/"
                aria-label="Acuity Groups homepage"
                className="group relative z-10 flex shrink-0 items-center"
              >
                <div className="pointer-events-none absolute inset-0 scale-75 rounded-full bg-[#E8A33D]/20 opacity-0 blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />

                <motion.img
                  src={Logo}
                  alt="Acuity Groups Logo"
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  className={`relative w-auto object-contain transition-all duration-500 ${
                    scrolled
                      ? "h-[66px] lg:h-[74px]"
                      : "h-[78px] lg:h-[98px]"
                  }`}
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
                {/* Home */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredMenu("home")}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <NavLink to="/" className={navLinkClass} end>
                    {({ isActive }) => (
                      <>
                        <span>Home</span>
                        {renderUnderline(
                          hoveredMenu === "home" || isActive,
                        )}
                      </>
                    )}
                  </NavLink>
                </div>

                {/* About */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredMenu("about")}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <NavLink to="/about" className={navLinkClass}>
                    {({ isActive }) => (
                      <>
                        <span>About</span>
                        {renderUnderline(
                          hoveredMenu === "about" || isActive,
                        )}
                      </>
                    )}
                  </NavLink>
                </div>

                {/* Services */}
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
                  <div className="flex items-center">
                    <Link
                      to="/services"
                      className={`relative inline-flex items-center py-3 text-[16px] font-semibold tracking-[-0.2px] transition-colors duration-300 xl:text-[17px] ${
                        servicesOpen
                          ? "text-[#0B1F3A]"
                          : "text-slate-700 hover:text-[#0B1F3A]"
                      }`}
                    >
                      Services

                      {renderUnderline(
                        hoveredMenu === "services" || servicesOpen,
                      )}
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setServicesOpen((previous) => !previous);
                        setCareerOpen(false);
                      }}
                      aria-label="Toggle services menu"
                      aria-expanded={servicesOpen}
                      className="ml-1 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#0B1F3A]/10"
                    >
                      <ChevronDown
                        size={16}
                        className={`text-slate-600 transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        variants={dropdownAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-1/2 top-[52px] w-[365px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-white/70 bg-white/95 p-2 shadow-[0_30px_70px_rgba(15,23,42,0.2)] backdrop-blur-2xl"
                      >
                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />

                        <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />

                        <div className="relative mb-2 rounded-[18px] bg-gradient-to-br from-[#0B1F3A] to-[#153A64] p-4 text-white">
                          <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#E8A33D]">
                            Our Services
                          </p>

                          <p className="mt-1 text-sm text-white/75">
                            Complete facility management solutions for your
                            business.
                          </p>
                        </div>

                        <div className="relative grid gap-1">
                          {servicesItems.map((item, index) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="group/item flex items-center justify-between rounded-2xl px-4 py-3 text-[14px] font-medium text-slate-700 transition-all duration-300 hover:translate-x-1 hover:bg-gradient-to-r hover:from-[#FFF7E8] hover:to-blue-50 hover:text-[#0B1F3A]"
                            >
                              <div className="flex items-center gap-3">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-[11px] font-bold text-slate-500 transition-all duration-300 group-hover/item:bg-[#E8A33D] group-hover/item:text-[#0B1F3A]">
                                  {String(index + 1).padStart(2, "0")}
                                </span>

                                <span>{item.name}</span>
                              </div>

                              <ArrowRight
                                size={15}
                                className="-translate-x-2 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                              />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Career */}
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
                      setCareerOpen((previous) => !previous);
                      setServicesOpen(false);
                    }}
                    aria-expanded={careerOpen}
                    className={`relative flex items-center gap-1 py-3 text-[16px] font-semibold tracking-[-0.2px] transition-colors duration-300 xl:text-[17px] ${
                      careerOpen
                        ? "text-[#0B1F3A]"
                        : "text-slate-700 hover:text-[#0B1F3A]"
                    }`}
                  >
                    <span>Career</span>

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        careerOpen ? "rotate-180" : ""
                      }`}
                    />

                    {renderUnderline(
                      hoveredMenu === "career" || careerOpen,
                    )}
                  </button>

                  <AnimatePresence>
                    {careerOpen && (
                      <motion.div
                        variants={dropdownAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-1/2 top-[52px] w-[310px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-white/70 bg-white/95 p-2 shadow-[0_30px_70px_rgba(15,23,42,0.2)] backdrop-blur-2xl"
                      >
                        <div className="rounded-[18px] bg-gradient-to-br from-[#0B1F3A] to-[#153A64] p-4 text-white">
                          <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#E8A33D]">
                            Join Our Team
                          </p>

                          <p className="mt-1 text-sm text-white/75">
                            Build your career with Acuity Groups.
                          </p>
                        </div>

                        <div className="mt-2 space-y-1">
                          {careerItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="group/item flex items-center justify-between rounded-2xl px-4 py-3 text-[14px] font-medium text-slate-700 transition-all duration-300 hover:translate-x-1 hover:bg-gradient-to-r hover:from-[#FFF7E8] hover:to-blue-50 hover:text-[#0B1F3A]"
                            >
                              <span>{item.name}</span>

                              <ArrowRight
                                size={15}
                                className="-translate-x-2 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                              />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Blogs */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredMenu("blogs")}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <NavLink to="/blogs" className={navLinkClass}>
                    {({ isActive }) => (
                      <>
                        <span>Blogs</span>
                        {renderUnderline(
                          hoveredMenu === "blogs" || isActive,
                        )}
                      </>
                    )}
                  </NavLink>
                </div>

                {/* Contact */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredMenu("contact")}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <NavLink to="/contact" className={navLinkClass}>
                    {({ isActive }) => (
                      <>
                        <span>Contact</span>
                        {renderUnderline(
                          hoveredMenu === "contact" || isActive,
                        )}
                      </>
                    )}
                  </NavLink>
                </div>
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#071A2E] to-[#153A64] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,31,58,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(11,31,58,0.35)]"
                >
                  <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#E8A33D] to-[#F4C067] transition-transform duration-500 group-hover:translate-y-0" />

                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#071A2E]">
                    Get Started
                  </span>

                  <ArrowRight
                    size={16}
                    className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#071A2E]"
                  />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((previous) => !previous)}
                className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/80 text-[#0B1F3A] shadow-[0_8px_24px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white lg:hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-blue-100/70 to-amber-100/70 opacity-0 transition-opacity duration-300 hover:opacity-100" />

                <AnimatePresence mode="wait">
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
                      <X size={25} />
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
                      <Menu size={26} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
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
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[9997] bg-[#071A2E]/60 backdrop-blur-md lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
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
            className="fixed right-0 top-0 z-[9998] h-dvh w-[90%] max-w-[390px] overflow-hidden border-l border-white/40 bg-white/95 shadow-[-30px_0_80px_rgba(15,23,42,0.3)] backdrop-blur-2xl lg:hidden"
          >
            {/* Mobile Decorative Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl" />

              <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl" />
            </div>

            <div className="relative flex h-full flex-col">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-100/80 px-5 py-4">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  aria-label="Acuity Groups homepage"
                >
                  <img
                    src={Logo}
                    alt="Acuity Groups Logo"
                    className="h-[66px] w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close mobile menu"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1F3A] text-white shadow-lg transition-all duration-300 hover:rotate-90 hover:bg-[#E8A33D] hover:text-[#0B1F3A]"
                >
                  <X size={21} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto px-5 py-6">
                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-[4px] text-[#E8A33D]">
                    Navigation
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0B1F3A]">
                    Explore Acuity Groups
                  </h2>
                </div>

                <div className="space-y-2">
                  <MobileNavLink
                    to="/"
                    label="Home"
                    onClick={() => setIsOpen(false)}
                    end
                  />

                  <MobileNavLink
                    to="/about"
                    label="About"
                    onClick={() => setIsOpen(false)}
                  />

                  {/* Mobile Services */}
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white/70 shadow-sm">
                    <button
                      type="button"
                      onClick={() => {
                        setServicesOpen((previous) => !previous);
                        setCareerOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-4 text-left text-[16px] font-semibold transition-colors duration-300 ${
                        servicesOpen
                          ? "bg-[#0B1F3A] text-white"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A]"
                      }`}
                    >
                      <span>Services</span>

                      <ChevronDown
                        size={19}
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180 text-[#E8A33D]" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        servicesOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-1 border-t border-slate-100 p-2">
                          <Link
                            to="/services"
                            onClick={() => {
                              setIsOpen(false);
                              setServicesOpen(false);
                            }}
                            className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#FFF7E8]"
                          >
                            <span>All Services</span>
                            <ArrowRight size={15} />
                          </Link>

                          {servicesItems.map((item, index) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => {
                                setIsOpen(false);
                                setServicesOpen(false);
                              }}
                              className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition-all duration-300 hover:bg-blue-50 hover:text-[#0B1F3A]"
                            >
                              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 text-[9px] font-bold text-slate-500 transition group-hover:bg-[#E8A33D] group-hover:text-[#0B1F3A]">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Career */}
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white/70 shadow-sm">
                    <button
                      type="button"
                      onClick={() => {
                        setCareerOpen((previous) => !previous);
                        setServicesOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-4 text-left text-[16px] font-semibold transition-colors duration-300 ${
                        careerOpen
                          ? "bg-[#0B1F3A] text-white"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A]"
                      }`}
                    >
                      <span>Career</span>

                      <ChevronDown
                        size={19}
                        className={`transition-transform duration-300 ${
                          careerOpen ? "rotate-180 text-[#E8A33D]" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        careerOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-1 border-t border-slate-100 p-2">
                          {careerItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => {
                                setIsOpen(false);
                                setCareerOpen(false);
                              }}
                              className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-slate-600 transition-all duration-300 hover:bg-[#FFF7E8] hover:text-[#0B1F3A]"
                            >
                              <span>{item.name}</span>

                              <ArrowRight size={15} />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <MobileNavLink
                    to="/blogs"
                    label="Blogs"
                    onClick={() => setIsOpen(false)}
                  />

                  <MobileNavLink
                    to="/contact"
                    label="Contact"
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group mt-7 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#153A64] px-5 py-4 font-semibold text-white shadow-[0_15px_35px_rgba(11,31,58,0.25)] transition-all duration-300 hover:-translate-y-1"
                >
                  <span>Get Started</span>

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                {/* Mobile Contact Information */}
                <div className="mt-7 rounded-[24px] border border-white/80 bg-white/80 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#E8A33D]">
                    Contact Us
                  </p>

                  <div className="space-y-4">
                    <a
                      href="tel:+919941229005"
                      className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-[#0B1F3A]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0B1F3A] transition-all group-hover:bg-[#0B1F3A] group-hover:text-white">
                        <Phone size={15} />
                      </span>

                      <span className="font-medium">+91 99412 29005</span>
                    </a>

                    <a
                      href="mailto:info@acuitygroups.in"
                      className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-[#0B1F3A]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#B97813] transition-all group-hover:bg-[#E8A33D] group-hover:text-[#0B1F3A]">
                        <Mail size={15} />
                      </span>

                      <span className="font-medium">
                        info@acuitygroups.in
                      </span>
                    </a>

                    <div className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                        <MapPin size={15} />
                      </span>

                      <span>
                        2nd Floor, KVO-08, No-28/2, near Sun Jupiter School, JP
                        Nagar 6th Phase, Yelachenahalli, Bengaluru, Karnataka
                        560078
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Navbar Spacer */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "h-[78px] lg:h-[82px]"
            : "h-[92px] lg:h-[148px]"
        }`}
      />
    </>
  );
};

const MobileNavLink = ({ to, label, onClick, end = false }) => {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `group flex items-center justify-between rounded-2xl border px-4 py-4 text-[16px] font-semibold transition-all duration-300 ${
          isActive
            ? "border-[#0B1F3A] bg-[#0B1F3A] text-white shadow-lg"
            : "border-slate-100 bg-white/70 text-slate-700 hover:translate-x-1 hover:border-blue-100 hover:bg-blue-50 hover:text-[#0B1F3A]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>

          <ArrowRight
            size={17}
            className={`transition-all duration-300 ${
              isActive
                ? "text-[#E8A33D]"
                : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            }`}
          />
        </>
      )}
    </NavLink>
  );
};

export default Navbar;