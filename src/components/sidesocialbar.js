import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/AcuityGroups",
      Icon: FaFacebookF,
      iconColor: "text-[#1877F2]",
      hoverBackground: "hover:bg-[#1877F2]",
      shadow: "hover:shadow-[0_10px_30px_rgba(24,119,242,0.35)]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/acuity_groups/",
      Icon: FaInstagram,
      iconColor: "text-[#E1306C]",
      hoverBackground:
        "hover:bg-gradient-to-br hover:from-[#FEDA75] hover:via-[#E1306C] hover:to-[#833AB4]",
      shadow: "hover:shadow-[0_10px_30px_rgba(225,48,108,0.35)]",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@acuityGROUPS",
      Icon: FaYoutube,
      iconColor: "text-[#FF0000]",
      hoverBackground: "hover:bg-[#FF0000]",
      shadow: "hover:shadow-[0_10px_30px_rgba(255,0,0,0.35)]",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aifm-acuity-groups-b996a7406/",
      Icon: FaLinkedinIn,
      iconColor: "text-[#0077B5]",
      hoverBackground: "hover:bg-[#0077B5]",
      shadow: "hover:shadow-[0_10px_30px_rgba(0,119,181,0.35)]",
    },
  ];

  return (
    <div className="group fixed right-0 top-1/2 z-[9998] hidden -translate-y-1/2 md:block">
      {/* Animated Glow */}
      <div className="pointer-events-none absolute inset-0 -left-8 rounded-l-[30px] bg-gradient-to-b from-blue-400/20 via-purple-400/10 to-amber-400/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Sidebar Container */}
      <div className="relative translate-x-[74px] rounded-l-[28px] border border-white/60 bg-white/75 px-3 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl transition-all duration-500 ease-out group-hover:translate-x-0">
        {/* Small Handle */}
        <div className="absolute -left-8 top-1/2 flex h-16 w-8 -translate-y-1/2 items-center justify-center rounded-l-2xl border border-r-0 border-white/50 bg-white/80 shadow-[-8px_8px_25px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            <span className="h-1 w-1 rounded-full bg-[#0B1F3A]/50" />
            <span className="h-1 w-1 rounded-full bg-[#0B1F3A]/50" />
            <span className="h-1 w-1 rounded-full bg-[#0B1F3A]/50" />
          </div>
        </div>

        {/* Heading */}
        <div className="mb-4 overflow-hidden text-center">
          <p className="translate-x-8 whitespace-nowrap text-[9px] font-bold uppercase tracking-[3px] text-[#0B1F3A]/60 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
            Follow Us
          </p>

          <div className="mx-auto mt-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#E8A33D] to-[#0B1F3A] transition-all duration-500 group-hover:w-10" />
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          {socialLinks.map(
            ({ name, url, Icon, iconColor, hoverBackground, shadow }) => (
              <div key={name} className="group/social relative">
                {/* Tooltip */}
                <div className="pointer-events-none absolute right-[66px] top-1/2 -translate-y-1/2 translate-x-3 whitespace-nowrap rounded-xl bg-[#0B1F3A] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover/social:translate-x-0 group-hover/social:opacity-100">
                  {name}

                  <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-[#0B1F3A]" />
                </div>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Acuity Groups on ${name}`}
                  className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_8px_22px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-x-1 hover:scale-110 hover:border-transparent ${hoverBackground} ${shadow}`}
                >
                  {/* Shine Animation */}
                  <span className="absolute -left-12 top-0 h-full w-7 rotate-12 bg-white/40 blur-sm transition-all duration-700 group-hover/social:left-16" />

                  {/* Background Ring */}
                  <span className="absolute inset-[5px] scale-75 rounded-xl border border-current opacity-0 transition-all duration-300 group-hover/social:scale-100 group-hover/social:opacity-20" />

                  <Icon
                    className={`relative z-10 text-xl transition-all duration-300 group-hover/social:scale-110 group-hover/social:text-white ${iconColor}`}
                  />
                </a>
              </div>
            ),
          )}
        </div>

        {/* Decorative Bottom Dot */}
        <div className="mt-4 flex justify-center">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8A33D] opacity-60" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E8A33D]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;
