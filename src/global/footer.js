import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/acuitylogo.jpeg";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 pt-16 pb-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img
                src={Logo}
                alt="Acuity Groups Logo"
                className="h-32 w-auto"
              />
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed">
              Acuity Groups provides integrated facility management, security
              services, housekeeping, pest management, manpower outsourcing and
              maintenance solutions in Bangalore.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com/acuitygroups"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition"
                aria-label="Acuity Groups Facebook"
              >
                <Facebook size={16} />
              </a>

              <a
                href="https://instagram.com/acuitygroups"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition"
                aria-label="Acuity Groups Instagram"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://linkedin.com/company/acuitygroups"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition"
                aria-label="Acuity Groups LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-5 border-l-4 border-blue-600 pl-3">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/services" label="Services" />
              <FooterLink to="/career" label="Careers" />
              <FooterLink to="/blogs" label="Blogs" />
              <FooterLink to="/contact" label="Contact Us" />
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-5 border-l-4 border-blue-600 pl-3">
              Our Services
            </h3>

            <ul className="space-y-3">
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
              <FooterLink
                to="/repair-maintenance"
                label="Repair & Maintenance"
              />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-5 border-l-4 border-blue-600 pl-3">
              Contact Info
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-800">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase">Call Us</p>

                  <a
                    href="tel:+919941229005"
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    +91 99412 29005
                  </a>

                  <br />

                  <a
                    href="tel:+918041229005"
                    className="text-gray-500 text-sm hover:text-blue-600 transition"
                  >
                    080 4122 9005
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-800">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>

                  <a
                    href="mailto:info@acuitygroups.in"
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    info@acuitygroups.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-800">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase">Location</p>

                  <p className="text-gray-600">
                    2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP Nagar
                    6th Phase, Yelachenahalli Bengaluru, Karnataka 560078
                  </p>

                  <a
                    href="https://maps.google.com/?q=12.8978823,77.5722624"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-700 text-sm font-medium hover:underline"
                  >
                    View on Map →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Acuity Groups. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/services" className="hover:text-blue-600 transition">
              Services
            </Link>

            <Link to="/blogs" className="hover:text-blue-600 transition">
              Blogs
            </Link>

            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition"
      >
        <ChevronRight size={14} />
        {label}
      </Link>
    </li>
  );
}