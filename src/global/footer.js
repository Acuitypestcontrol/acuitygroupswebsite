// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../images/acuitylogo.jpeg";

// import {
//   Phone,
//   Mail,
//   MapPin,
//   Facebook,
//   Instagram,
//   Linkedin,
//   ChevronRight,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-white text-gray-700 pt-16 pb-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Top Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Brand Column */}
//           <div>
//             <Link to="/" className="inline-block mb-5">
//               <img
//                 src={Logo}
//                 alt="Acuity Groups Logo"
//                 className="h-32 w-auto"
//               />
//             </Link>

//             <p className="text-gray-500 text-sm leading-relaxed">
//               Acuity Groups provides integrated facility management, security
//               services, housekeeping, pest management, manpower outsourcing and
//               maintenance solutions in Bangalore.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-3 mt-6">
//               <a
//                 href="https://facebook.com/acuitygroups"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full bg-gray-100 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition"
//                 aria-label="Acuity Groups Facebook"
//               >
//                 <Facebook size={16} />
//               </a>

//               <a
//                 href="https://instagram.com/acuitygroups"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full bg-gray-100 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition"
//                 aria-label="Acuity Groups Instagram"
//               >
//                 <Instagram size={16} />
//               </a>

//               <a
//                 href="https://linkedin.com/company/acuitygroups"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full bg-gray-100 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition"
//                 aria-label="Acuity Groups LinkedIn"
//               >
//                 <Linkedin size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-5 border-l-4 border-blue-600 pl-3">
//               Quick Links
//             </h3>

//             <ul className="space-y-3">
//               <FooterLink to="/" label="Home" />
//               <FooterLink to="/about" label="About Us" />
//               <FooterLink to="/services" label="Services" />
//               <FooterLink to="/career" label="Careers" />
//               <FooterLink to="/blogs" label="Blogs" />
//               <FooterLink to="/contact" label="Contact Us" />
//             </ul>
//           </div>

//           {/* Our Services */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-5 border-l-4 border-blue-600 pl-3">
//               Our Services
//             </h3>

//             <ul className="space-y-3">
//               <FooterLink
//                 to="/integrated-facility-management"
//                 label="Integrated Facility Management"
//               />
//               <FooterLink to="/security-services" label="Security Services" />
//               <FooterLink
//                 to="/housekeeping-services"
//                 label="Housekeeping Services"
//               />
//               <FooterLink to="/soft-services" label="Soft Services" />
//               <FooterLink to="/pest-management" label="Pest Management" />
//               <FooterLink
//                 to="/manpower-outsourcing"
//                 label="Manpower Outsourcing"
//               />
//               <FooterLink
//                 to="/repair-maintenance"
//                 label="Repair & Maintenance"
//               />
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-5 border-l-4 border-blue-600 pl-3">
//               Contact Info
//             </h3>

//             <div className="space-y-5">
//               <div className="flex items-start gap-3">
//                 <div className="bg-blue-100 p-2 rounded-lg text-blue-800">
//                   <Phone size={16} />
//                 </div>

//                 <div>
//                   <p className="text-xs text-gray-500 uppercase">Call Us</p>

//                   <a
//                     href="tel:+919941229005"
//                     className="text-gray-700 hover:text-blue-600 transition"
//                   >
//                     +91 99412 29005
//                   </a>

//                   <br />

//                   <a
//                     href="tel:+918041229005"
//                     className="text-gray-500 text-sm hover:text-blue-600 transition"
//                   >
//
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="bg-blue-100 p-2 rounded-lg text-blue-800">
//                   <Mail size={16} />
//                 </div>

//                 <div>
//                   <p className="text-xs text-gray-500 uppercase">Email</p>

//                   <a
//                     href="mailto:info@acuitygroups.in"
//                     className="text-gray-700 hover:text-blue-600 transition"
//                   >
//                     info@acuitygroups.in
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="bg-blue-100 p-2 rounded-lg text-blue-800">
//                   <MapPin size={16} />
//                 </div>

//                 <div>
//                   <p className="text-xs text-gray-500 uppercase">Location</p>

//                   <p className="text-gray-600">
//                     2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP Nagar
//                     6th Phase, Yelachenahalli Bengaluru, Karnataka 560078
//                   </p>

//                   <a
//                     href="https://maps.google.com/?q=12.8978823,77.5722624"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block mt-2 text-blue-700 text-sm font-medium hover:underline"
//                   >
//                     View on Map →
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
//           <p>
//             © {new Date().getFullYear()} Acuity Groups. All rights reserved.
//           </p>

//           <div className="flex gap-6">
//             <Link to="/services" className="hover:text-blue-600 transition">
//               Services
//             </Link>

//             <Link to="/blogs" className="hover:text-blue-600 transition">
//               Blogs
//             </Link>

//             <Link to="/contact" className="hover:text-blue-600 transition">
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function FooterLink({ to, label }) {
//   return (
//     <li>
//       <Link
//         to={to}
//         className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition"
//       >
//         <ChevronRight size={14} />
//         {label}
//       </Link>
//     </li>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Youtube,
} from "lucide-react";

import Logo from "../images/acuitylogo.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/AcuityGroups",
      Icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/acuity_groups/",
      Icon: Instagram,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@acuityGROUPS",
      Icon: Youtube,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aifm-acuity-groups-b996a7406/",
      Icon: Linkedin,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#071A2E] text-white">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[110px]" />

        <div className="absolute -bottom-48 -right-32 h-[480px] w-[480px] rounded-full bg-amber-400/10 blur-[120px]" />

        <div className="absolute left-1/2 top-0 h-px w-[90%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Top CTA */}
      <div className="relative mx-auto max-w-[1450px] px-4 pt-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.07] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:px-8 lg:flex lg:items-center lg:justify-between lg:px-10">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#E8A33D]/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8A33D]/30 bg-[#E8A33D]/10 px-3 py-1.5">
              <Sparkles size={14} className="text-[#E8A33D]" />

              <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#F4C067]">
                Complete Facility Support
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Looking for reliable facility management services?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Acuity Groups provides integrated facility management, security,
              housekeeping, pest management, manpower outsourcing and
              maintenance solutions in Bangalore.
            </p>
          </div>

          <Link
            to="/contact"
            className="group relative mt-6 inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#E8A33D] to-[#F4C067] px-6 py-3.5 font-semibold text-[#071A2E] shadow-[0_15px_35px_rgba(232,163,61,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(232,163,61,0.35)] lg:mt-0"
          >
            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

            <span className="relative z-10">Get Started</span>

            <ArrowRight
              size={17}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-[1450px] px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.2fr] lg:gap-10 xl:gap-14">
          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label="Acuity Groups homepage"
              className="group relative inline-block"
            >
              <div className="pointer-events-none absolute inset-0 scale-75 rounded-full bg-[#E8A33D]/15 opacity-0 blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />

              <img
                src={Logo}
                alt="Acuity Groups Logo"
                className="relative h-28 w-auto rounded-2xl bg-white object-contain p-2 shadow-[0_15px_40px_rgba(0,0,0,0.2)] sm:h-32"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Acuity Groups provides integrated facility management, security
              services, housekeeping, pest management, manpower outsourcing and
              maintenance solutions in Bangalore.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Acuity Groups ${name}`}
                  className="group/social relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] text-white/70 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E8A33D]/40 hover:bg-[#E8A33D] hover:text-[#071A2E] hover:shadow-[0_12px_30px_rgba(232,163,61,0.25)]"
                >
                  <span className="absolute -left-10 top-0 h-full w-6 rotate-12 bg-white/40 blur-sm transition-all duration-700 group-hover/social:left-14" />

                  <Icon
                    size={18}
                    className="relative z-10 transition-transform duration-300 group-hover/social:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <FooterLink to="/" label="Home" />
            <FooterLink to="/about" label="About Us" />
            <FooterLink to="/services" label="Services" />
            <FooterLink to="/career/acuity-groups" label="Careers" />
            <FooterLink to="/blogs" label="Blogs" />
            <FooterLink to="/contact" label="Contact Us" />
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Our Services">
            <FooterLink
              to="/integrated-facility-management"
              label="Integrated Facility Management"
            />
            <FooterLink to="/security-services" label="Security Services" />
            <FooterLink
              to="/housekeeping-services"
              label="Housekeeping Services"
            />
            <FooterLink to="/soft-services" label="Soft Services" />
            <FooterLink to="/pest-management" label="Pest Management" />
            <FooterLink
              to="/manpower-outsourcing"
              label="Manpower Outsourcing"
            />
            <FooterLink to="/repair-maintenance" label="Repair & Maintenance" />
          </FooterColumn>

          {/* Contact */}
          <div>
            <FooterHeading title="Contact Info" />

            <div className="space-y-4">
              <ContactItem
                icon={Phone}
                label="Call Us"
                content={
                  <div>
                    <a
                      href="tel:+919941229005"
                      className="font-medium text-white/75 transition-colors duration-300 hover:text-[#F4C067]"
                    >
                      +91 99412 29005
                    </a>

                    <br />
                  </div>
                }
              />

              <ContactItem
                icon={Mail}
                label="Email"
                content={
                  <a
                    href="mailto:info@acuitygroups.in"
                    className="break-all font-medium text-white/75 transition-colors duration-300 hover:text-[#F4C067]"
                  >
                    info@acuitygroups.in
                  </a>
                }
              />

              <ContactItem
                icon={MapPin}
                label="Location"
                alignTop
                content={
                  <div>
                    <p className="leading-6 text-white/60">
                      2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP
                      Nagar 6th Phase, Yelachenahalli Bengaluru, Karnataka
                      560078
                    </p>

                    <a
                      href="https://maps.google.com/?q=12.8978823,77.5722624"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/map mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F4C067] transition-colors duration-300 hover:text-white"
                    >
                      View on Map
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/map:translate-x-1"
                      />
                    </a>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-white/45 md:flex-row md:text-left">
            <p>© {currentYear} Acuity Groups. All rights reserved.</p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Link
                to="/services"
                className="transition-colors duration-300 hover:text-[#F4C067]"
              >
                Services
              </Link>

              <Link
                to="/blogs"
                className="transition-colors duration-300 hover:text-[#F4C067]"
              >
                Blogs
              </Link>

              <Link
                to="/contact"
                className="transition-colors duration-300 hover:text-[#F4C067]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <FooterHeading title={title} />

      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterHeading({ title }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>

      <div className="mt-3 flex items-center gap-1.5">
        <span className="h-[3px] w-8 rounded-full bg-[#E8A33D]" />

        <span className="h-[3px] w-2 rounded-full bg-white/30" />

        <span className="h-[3px] w-1 rounded-full bg-white/15" />
      </div>
    </div>
  );
}

function FooterLink({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className="group flex items-start gap-2.5 text-sm leading-6 text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-[#F4C067]"
      >
        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.07] transition-all duration-300 group-hover:bg-[#E8A33D] group-hover:text-[#071A2E]">
          <ChevronRight size={11} />
        </span>

        <span>{label}</span>
      </Link>
    </li>
  );
}

function ContactItem({ icon: Icon, label, content, alignTop = false }) {
  return (
    <div
      className={`group flex gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8A33D]/25 hover:bg-white/[0.07] ${
        alignTop ? "items-start" : "items-center"
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-[#F4C067] transition-all duration-300 group-hover:border-[#E8A33D] group-hover:bg-[#E8A33D] group-hover:text-[#071A2E]">
        <Icon size={17} />
      </div>

      <div className="min-w-0">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[2px] text-white/35">
          {label}
        </p>

        <div className="text-sm">{content}</div>
      </div>
    </div>
  );
}
