import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LeadPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;

    const whatsappMessage = encodeURIComponent(
      `*New Website Lead*\n\nName: ${name}\nPhone: ${phone}\nEmail: ${
        email || "Not provided"
      }\nService: ${service}`
    );

    window.open(
      `https://wa.me/919941229005?text=${whatsappMessage}`,
      "_blank"
    );

    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#06111f]/75 px-3 py-3 backdrop-blur-md sm:px-4"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative grid w-full max-w-4xl overflow-hidden rounded-[24px] border border-white/15 bg-[#0a1c30] shadow-[0_30px_80px_rgba(0,0,0,0.5)] lg:grid-cols-[0.85fr_1.15fr]"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
              className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:bg-red-500"
            >
              <X size={17} />
            </button>

            {/* ========================================================= */}
            {/* LEFT SIDE */}
            {/* ========================================================= */}

            <div className="relative hidden overflow-hidden bg-[#071626] p-7 text-white lg:flex lg:flex-col lg:justify-between xl:p-8">
              {/* Animated glow */}
              <motion.div
                animate={{
                  x: [0, 20, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-28 -top-20 h-64 w-64 rounded-full bg-[#e8a33d]/20 blur-[80px]"
              />

              <motion.div
                animate={{
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]"
              />

              {/* Grid background */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="relative">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#e8a33d]/25 bg-[#e8a33d]/10 px-3 py-1.5">
                  <Sparkles size={13} className="text-[#f4c067]" />

                  <span className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#f4c067]">
                    Free Consultation
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.8px] xl:text-[34px]">
                  Get a free audit
                  <span className="block font-light text-white/45">
                    & site survey.
                  </span>
                </h2>

                <p className="mt-4 max-w-sm text-[13px] leading-6 text-white/55">
                  Share your requirement and our team will help you choose the
                  right facility management solution for your property or
                  business.
                </p>
              </div>

              {/* Services */}
              <div className="relative mt-7 space-y-3">
                {[
                  "Integrated Facility Management",
                  "Security and Housekeeping",
                  "Pest Control and Maintenance",
                  "Manpower Outsourcing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8a33d]/10 text-[#f4c067]">
                      <CheckCircle2 size={14} />
                    </div>

                    <span className="text-[13px] font-medium text-white/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust box */}
              <div className="relative mt-7 rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8a33d] text-[#071626]">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Trusted facility partner
                    </p>

                    <p className="mt-0.5 text-[11px] text-white/40">
                      Serving businesses across Bangalore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* RIGHT SIDE */}
            {/* ========================================================= */}

            <div className="relative bg-white p-5 sm:p-6 lg:p-7">
              {/* Background glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

              <div className="relative">
                {/* Mobile heading */}
                <div className="pr-10 lg:hidden">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#e8a33d]/10 px-3 py-1.5">
                    <Sparkles size={13} className="text-[#c57e16]" />

                    <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#c57e16]">
                      Free Consultation
                    </span>
                  </div>

                  <h2 className="mt-3 text-2xl font-black leading-tight text-[#0b1f3a]">
                    Get a free audit & site survey
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Tell us what service you need. Our team will contact you
                    shortly.
                  </p>
                </div>

                {/* Desktop heading */}
                <div className="hidden lg:block">
                  <p className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#c57e16]">
                    Send Your Requirement
                  </p>

                  <h3 className="mt-1.5 text-2xl font-black tracking-tight text-[#0b1f3a] xl:text-[28px]">
                    Let’s discuss your facility needs
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Fill in the details below and continue directly on
                    WhatsApp.
                  </p>
                </div>

                {/* ===================================================== */}
                {/* FORM */}
                {/* ===================================================== */}

                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                  {/* NAME */}
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[1.3px] text-slate-500">
                      Your Name
                    </label>

                    <div className="relative">
                      <User
                        size={16}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-xs text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#e8a33d] focus:bg-white focus:ring-4 focus:ring-[#e8a33d]/10"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[1.3px] text-slate-500">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={16}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="[0-9+\s-]{10,15}"
                        placeholder="Enter your phone number"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-xs text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#e8a33d] focus:bg-white focus:ring-4 focus:ring-[#e8a33d]/10"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[1.3px] text-slate-500">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={16}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-xs text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#e8a33d] focus:bg-white focus:ring-4 focus:ring-[#e8a33d]/10"
                      />
                    </div>
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[1.3px] text-slate-500">
                      Select Service
                    </label>

                    <div className="relative">
                      <Building2
                        size={16}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-9 text-xs text-slate-700 outline-none transition-all duration-300 focus:border-[#e8a33d] focus:bg-white focus:ring-4 focus:ring-[#e8a33d]/10"
                      >
                        <option value="" disabled>
                          Select required service
                        </option>

                        <option value="Integrated Facility Management">
                          Integrated Facility Management
                        </option>

                        <option value="Security Services">
                          Security Services
                        </option>

                        <option value="Housekeeping Services">
                          Housekeeping Services
                        </option>

                        <option value="Pest Control Services">
                          Pest Control Services
                        </option>

                        <option value="Manpower Outsourcing">
                          Manpower Outsourcing
                        </option>

                        <option value="Loading & Unloading Services">
                          Loading & Unloading Services
                        </option>

                        <option value="Picker & Packer Services">
                          Picker & Packer Services
                        </option>

                        <option value="Property Management Services">
                          Property Management Services
                        </option>

                        <option value="Repair & Maintenance">
                          Repair & Maintenance
                        </option>

                        <option value="Electrical Maintenance">
                          Electrical Maintenance
                        </option>

                        <option value="Deep Cleaning Services">
                          Deep Cleaning Services
                        </option>

                        <option value="Waste Management Services">
                          Waste Management Services
                        </option>
                      </select>

                      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                        ▾
                      </span>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="grid gap-2.5 pt-1 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setShowPopup(false)}
                      className="flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-xs font-bold text-slate-600 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0b1f3a] px-5 text-xs font-bold text-white shadow-[0_12px_25px_rgba(11,31,58,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#153a64] hover:shadow-[0_16px_30px_rgba(11,31,58,0.28)]"
                    >
                      Submit on WhatsApp

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </form>

                {/* FOOTER */}
                <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[10px] leading-4 text-slate-400">
                    No spam. Your details are used only to respond to your
                    enquiry.
                  </p>

                  <a
                    href="tel:+919941229005"
                    className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#0b1f3a] transition-colors duration-300 hover:text-[#c57e16]"
                  >
                    <Phone size={13} />
                    +91 99412 29005
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;