import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import Logo from "../images/acuitylogo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setCareerOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Main nav link style (Home, About, Blogs, Contact)
  const navLinkClass = ({ isActive }) =>
    `relative text-[20px] font-semibold transition-all duration-300 ${
      isActive
        ? "text-blue-500 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-yellow-500 after:rounded-full after:scale-x-100"
        : "text-gray-700 hover:text-blue-500 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-500 after:rounded-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
    }`;

  const servicesItems = [
    { name: "Softservice", path: "/softservices" },
    { name: "Facility Management", path: "/facilitymanagment1" },
    { name: "Security Services", path: "/securityservice" },
    { name: "Housekeeping", path: "/housekeeping" },
    { name: "Repairing & Maintenance", path: "/repair" },
    { name: "Pest Management", path: "/pest" },
    { name: "Manpower Outsourcing", path: "/manpower" },
  ];

  const careerItems = [
    { name: "Pest Control Careers", path: "/career/pestcareer" },
    { name: "Acuity Groups Careers", path: "/career/acuitygroups" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[9999] font-['Inter',system-ui,sans-serif]">
        {/* Top bar - hidden on mobile */}
        <div className="hidden lg:block bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-gray-600">
              <a
                href="tel:+9941229005"
                className="flex items-center gap-2 hover:text-yellow-500 transition-colors text-black font-semibold"
              >
                <Phone size={14} />
                <span>9941229005 / 08041229005</span>
              </a>
              <a
                href="mailto:info@acuitygroups.in"
                className="flex items-center gap-2 hover:text-yellow-500 transition-colors text-black font-semibold"
              >
                <Mail size={14} />
                <span>info@acuitygroups.in</span>
              </a>
            </div>
            <div className="flex items-center gap-2  text-black font-semibold">
              <MapPin size={14} />
              <span>
                2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP Nagar 6th
                Phase, Yelachenahalli Bengaluru, Karnataka 560078
              </span>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "hidden lg:block bg-white/10 backdrop-blur-sm "
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-28 lg:h-32">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <img
                  src={Logo}
                  alt="Acuity Groups Logo"
                  className="h-24 w-auto object-contain lg:h-40 "
                />
              </Link>

              {/* Desktop menu */}
              <nav className="hidden lg:flex items-center gap-8">
                <NavLink to="/" className={navLinkClass} end>
                  Home
                </NavLink>
                <NavLink to="/aboutus" className={navLinkClass}>
                  About
                </NavLink>

                {/* Services dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      to="pages/servicepage"
                      className={`text-[20px] font-semibold transition-all duration-300 ${
                        servicesOpen
                          ? "text-blue-900"
                          : "text-gray-700 hover:text-blue-900"
                      }`}
                    >
                      Services
                    </Link>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="focus:outline-none"
                      aria-label="Toggle services menu"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""} text-gray-600`}
                      />
                    </button>
                  </div>
                  <div
                    className={`absolute top-8 left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
                      servicesOpen
                        ? "opacity-100 visible translate-y-0 scale-100"
                        : "opacity-0 invisible -translate-y-3 scale-95"
                    }`}
                  >
                    <div className="p-2">
                      {servicesItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-amber-50 rounded-xl transition-all duration-200 text-[15px]"
                        >
                          <span>{item.name}</span>
                          <ChevronDown size={14} className="rotate-[-90deg]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Career dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setCareerOpen(true)}
                  onMouseLeave={() => setCareerOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-[20px] font-semibold transition-all duration-300 ${
                      careerOpen
                        ? "text-blue-900"
                        : "text-gray-700 hover:text-blue-900"
                    }`}
                  >
                    Career
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${careerOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`absolute top-8 left-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
                      careerOpen
                        ? "opacity-100 visible translate-y-0 scale-100"
                        : "opacity-0 invisible -translate-y-3 scale-95"
                    }`}
                  >
                    <div className="p-2">
                      {careerItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-amber-50 rounded-xl transition-all duration-200 text-[15px]"
                        >
                          <span>{item.name}</span>
                          <ChevronDown size={14} className="rotate-[-90deg]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <NavLink to="/blogs/allblogs" className={navLinkClass}>
                  Blogs
                </NavLink>
                <NavLink to="/contactus" className={navLinkClass}>
                  Contact
                </NavLink>
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Link to="/contactus">
                  <button className="relative overflow-hidden group px-6 py-2.5 bg-black text-white font-medium rounded-full shadow-md hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105">
                    <span className="relative z-10">Get Started</span>
                    <span className="absolute inset-0 w-0 bg-blue-900 group-hover:w-full transition-all duration-500"></span>
                  </button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden text-gray-800 p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-[100] transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={Logo} alt="Logo" className="h-14 w-auto" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-hidden p-6">
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition ${isActive ? "text-blue-900" : "text-gray-800 hover:text-blue-900"}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/aboutus"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition ${isActive ? "text-yellow-500" : "text-gray-800 hover:text-yellow-500"}`
                  }
                >
                  About
                </NavLink>

                {/* Mobile Services accordion */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-yellow-500 transition"
                  >
                    Services{" "}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-96 mt-3" : "max-h-0"}`}
                  >
                    <div className="pl-4 border-l-2 border-yellow-400 space-y-2">
                      {servicesItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => {
                            setIsOpen(false);
                            setServicesOpen(false);
                          }}
                          className="block py-2 text-gray-600 hover:text-yellow-500 transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Career accordion */}
                <div>
                  <button
                    onClick={() => setCareerOpen(!careerOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-yellow-500 transition"
                  >
                    Career{" "}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${careerOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${careerOpen ? "max-h-96 mt-3" : "max-h-0"}`}
                  >
                    <div className="pl-4 border-l-2 border-yellow-400 space-y-2">
                      {careerItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => {
                            setIsOpen(false);
                            setCareerOpen(false);
                          }}
                          className="block py-2 text-gray-600 hover:text-yellow-500 transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <NavLink
                  to="/blogs"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition"
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/contactus"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition"
                >
                  Contact
                </NavLink>
              </div>
              <div className="pt-8 mt-8 border-t border-gray-100">
                <Link to="/contactus" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-yellow-500 hover:text-black transition">
                    Get Started
                  </button>
                </Link>
                <div className="mt-6 space-y-3 text-sm text-gray-500">
                  <a
                    href="tel:9941229005"
                    className="flex items-center gap-2 hover:text-yellow-500"
                  >
                    <Phone size={14} />
                    <span>+91 98765 43210</span>
                  </a>
                  <a
                    href="mailto:info@acuitygroups.in"
                    className="flex items-center gap-2 hover:text-yellow-500"
                  >
                    <Mail size={14} />
                    <span>info@acuitygroups.in</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>
                      2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP
                      Nagar 6th Phase, Yelachenahalli Bengaluru, Karnataka
                      560078
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[99]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </header>

      {/* Spacer */}
      <div className="h-[calc(40px+60px)] lg:h-[calc(40px+128px)]" />
    </>
  );
};

export default Navbar;
