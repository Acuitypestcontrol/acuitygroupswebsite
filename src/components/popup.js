// import React, { useEffect, useState } from "react";

// const LeadPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = showPopup ? "hidden" : "auto";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showPopup]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;

//     const name = form.name.value;
//     const phone = form.phone.value;
//     const email = form.email.value;
//     const service = form.service.value;

//     const whatsappMessage = `*New Website Lead*%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AService: ${service}`;

//     window.open(`https://wa.me/919941229005?text=${whatsappMessage}`, "_blank");

//     setShowPopup(false);
//   };

//   if (!showPopup) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] bg-blue-950/70 backdrop-blur-md flex items-center justify-center p-4">
//       <div className="relative max-w-lg w-full overflow-hidden rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
//         <div className="absolute -top-20 -left-20 w-48 h-48 bg-cyan-400/30 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-600/40 rounded-full blur-3xl"></div>

//         <button
//           onClick={() => setShowPopup(false)}
//           className="absolute top-4 right-5 z-20 text-white/80 hover:text-red-400 text-3xl"
//         >
//           ×
//         </button>

//         <div className="relative z-10 text-center px-6 pt-8 pb-5 border-b border-white/15">
//           <h2 className="text-3xl font-extrabold text-white mb-2">
//             Get a Free Auditing and Site Servey!
//           </h2>

//           <p className="text-white/80 text-sm leading-relaxed">
//             Facility Management, Security, Housekeeping, Pest Control & Manpower
//             Services in Bangalore
//           </p>
//         </div>

//         <div className="relative z-10 p-6">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               required
//               placeholder="Your Name"
//               className="w-full bg-white/15 border border-white/20 text-white placeholder-white/70 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-300 focus:bg-white/20"
//             />

//             <input
//               type="tel"
//               name="phone"
//               required
//               placeholder="Phone Number"
//               className="w-full bg-white/15 border border-white/20 text-white placeholder-white/70 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-300 focus:bg-white/20"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               className="w-full bg-white/15 border border-white/20 text-white placeholder-white/70 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-300 focus:bg-white/20"
//             />

//             <select
//               name="service"
//               required
//               className="w-full bg-white/15 border border-white/20 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-300 focus:bg-slate-900/90"
//             >
//               <option value="" className="text-yellow-500">
//                 Select Service
//               </option>
//               <option className="text-white">
//                 Integrated Facility Management
//               </option>
//               <option className="text-white">Security Services</option>
//               <option className="text-white">Housekeeping Services</option>
//               <option className="text-white">Pest Control Services</option>
//               <option className="text-white">Manpower Outsourcing</option>
//               <option className="text-white">Repair & Maintenance</option>
//             </select>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-400 hover:to-blue-800 text-white font-bold py-3 rounded-xl transition shadow-lg"
//             >
//               Submit & WhatsApp
//             </button>
//           </form>

//           <div className="text-center mt-5">
//             <a
//               href="tel:+919941229005"
//               className="inline-block text-white font-semibold bg-white/15 border border-white/20 px-5 py-2 rounded-full hover:bg-white/25 transition"
//             >
//               📞 Call Now: +91 99412 29005
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeadPopup;

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
      }\nService: ${service}`,
    );

    window.open(`https://wa.me/919941229005?text=${whatsappMessage}`, "_blank");

    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#06111f]/75 px-4 py-6 backdrop-blur-md"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative grid w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/15 bg-[#0a1c30] shadow-[0_35px_100px_rgba(0,0,0,0.55)] lg:grid-cols-[0.95fr_1.05fr]"
          >
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:bg-red-500"
            >
              <X size={19} />
            </button>

            {/* LEFT SIDE */}
            <div className="relative hidden overflow-hidden bg-[#071626] p-10 text-white lg:flex lg:flex-col lg:justify-between">
              <motion.div
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-28 -top-20 h-72 w-72 rounded-full bg-[#e8a33d]/20 blur-[90px]"
              />

              <motion.div
                animate={{
                  x: [0, -25, 0],
                  y: [0, 25, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]"
              />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "52px 52px",
                }}
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#e8a33d]/25 bg-[#e8a33d]/10 px-4 py-2">
                  <Sparkles size={15} className="text-[#f4c067]" />

                  <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#f4c067]">
                    Free Consultation
                  </span>
                </div>

                <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-1px]">
                  Get a free audit
                  <span className="block font-light text-white/50">
                    and site survey.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                  Share your requirement and our team will contact you with the
                  right facility management solution for your property or
                  business.
                </p>
              </div>

              <div className="relative mt-10 space-y-4">
                {[
                  "Integrated Facility Management",
                  "Security and Housekeeping",
                  "Pest Control and Maintenance",
                  "Manpower Outsourcing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8a33d]/10 text-[#f4c067]">
                      <CheckCircle2 size={16} />
                    </div>

                    <span className="text-sm font-medium text-white/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative mt-10 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8a33d] text-[#071626]">
                    <ShieldCheck size={23} />
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      Trusted facility partner
                    </p>

                    <p className="mt-1 text-xs text-white/45">
                      Serving businesses across Bangalore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative bg-white p-6 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-100 blur-3xl" />

              <div className="relative">
                <div className="pr-12 lg:hidden">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#e8a33d]/10 px-3 py-1.5">
                    <Sparkles size={14} className="text-[#c57e16]" />

                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#c57e16]">
                      Free Consultation
                    </span>
                  </div>

                  <h2 className="mt-4 text-3xl font-black leading-tight text-[#0b1f3a]">
                    Get a free audit and site survey
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Tell us what service you need. Our team will contact you
                    shortly.
                  </p>
                </div>

                <div className="hidden lg:block">
                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#c57e16]">
                    Send Your Requirement
                  </p>

                  <h3 className="mt-2 text-3xl font-black tracking-tight text-[#0b1f3a]">
                    Let’s discuss your facility needs
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Fill in the details below and continue directly on WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-slate-500">
                      Your Name
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#e8a33d] focus:bg-white focus:ring-4 focus:ring-[#e8a33d]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-slate-500">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="[0-9+\s-]{10,15}"
                        placeholder="Enter your phone number"
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#e8a33d] focus:bg-white focus:ring-4 focus:ring-[#e8a33d]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-slate-500">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#e8a33d] focus:bg-white focus:ring-4 focus:ring-[#e8a33d]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-slate-500">
                      Select Service
                    </label>

                    <div className="relative">
                      <Building2
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-10 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-[#e8a33d] focus:bg-white focus:ring-4 focus:ring-[#e8a33d]/10"
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

                        <option value="Repair & Maintenance">
                          Repair & Maintenance
                        </option>
                      </select>

                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                        ▾
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setShowPopup(false)}
                      className="flex h-14 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 font-bold text-slate-600 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#0b1f3a] px-6 font-bold text-white shadow-[0_16px_35px_rgba(11,31,58,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#153a64] hover:shadow-[0_22px_45px_rgba(11,31,58,0.3)]"
                    >
                      Submit on WhatsApp
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </form>

                <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-slate-400">
                    No spam. Your details are used only to respond to your
                    enquiry.
                  </p>

                  <a
                    href="tel:+919941229005"
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0b1f3a] transition-colors duration-300 hover:text-[#c57e16]"
                  >
                    <Phone size={15} />
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
