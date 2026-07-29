import React, { useState } from "react";
import { FaWhatsapp, FaPaperPlane, FaTimes } from "react-icons/fa";
import Logo from "../images/logoacuity.jpeg";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const COMPANY_NAME = "Acuity Groups";
  const REPLY_TIME = "Typically replies in 5 min";
  const WHATSAPP_NUMBER = "919941229005";

  const sendMessage = () => {
    if (!message.trim()) return;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setMessage("");
  };

  return (
    <>
      {/* Floating WhatsApp Area */}
      <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-[9999] flex items-center gap-3">
        {/* Chat Label */}
        <div
          className={`hidden sm:flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.18)] border border-gray-100 transition-all duration-500 ${
            isOpen
              ? "opacity-0 translate-x-5 pointer-events-none"
              : "opacity-100 translate-x-0"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>

          <div className="leading-tight">
            <p className="text-[11px] font-semibold text-gray-400">
              Need assistance?
            </p>

            <p className="text-sm font-bold text-gray-800">Chat with us</p>
          </div>

          <span className="absolute -right-1.5 h-3 w-3 rotate-45 border-r border-t border-gray-100 bg-white" />
        </div>

        {/* Fancy WhatsApp Button */}
        <div className="relative flex h-[66px] w-[66px] items-center justify-center">
          {/* Outer Pulse Rings */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 animate-[ping_2.2s_ease-out_infinite] rounded-full bg-[#25D366]/25" />

              <span className="absolute inset-1 animate-[ping_2.2s_ease-out_0.7s_infinite] rounded-full bg-[#25D366]/20" />
            </>
          )}

          {/* Rotating Border */}
          <span
            className={`absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#25D366,#ffffff,#128C7E,#25D366)] p-[2px] transition-all duration-500 ${
              isOpen ? "rotate-180 scale-95" : "animate-[spin_5s_linear_infinite]"
            }`}
          >
            <span className="block h-full w-full rounded-full bg-white" />
          </span>

          <button
            type="button"
            aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
            onClick={() => setIsOpen((previous) => !previous)}
            className={`relative flex h-[56px] w-[56px] items-center justify-center overflow-hidden rounded-full text-white shadow-[0_15px_35px_rgba(37,211,102,0.45)] transition-all duration-500 hover:-translate-y-1 hover:scale-110 active:scale-95 ${
              isOpen
                ? "rotate-180 bg-gradient-to-br from-gray-700 to-gray-950"
                : "animate-[whatsappFloat_3s_ease-in-out_infinite] bg-gradient-to-br from-[#4BE881] via-[#25D366] to-[#128C7E]"
            }`}
          >
            {/* Shine Effect */}
            <span className="absolute -left-12 top-0 h-full w-10 rotate-12 bg-white/25 blur-sm transition-all duration-700 hover:left-20" />

            <span
              className={`absolute transition-all duration-500 ${
                isOpen
                  ? "scale-0 rotate-180 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
            >
              <FaWhatsapp className="text-[31px]" />
            </span>

            <span
              className={`absolute transition-all duration-500 ${
                isOpen
                  ? "scale-100 rotate-180 opacity-100"
                  : "scale-0 rotate-0 opacity-0"
              }`}
            >
              <FaTimes className="text-[23px]" />
            </span>
          </button>

          {/* Notification Dot */}
          {!isOpen && (
            <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-red-500 px-1 text-[10px] font-bold text-white shadow-lg">
              1
            </span>
          )}
        </div>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-[100px] left-3 right-3 z-[9998] overflow-hidden rounded-[24px] border border-white/40 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all duration-500 sm:bottom-[105px] sm:left-auto sm:right-7 sm:w-[350px] ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible translate-y-8 scale-90 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#128C7E] via-[#075E54] to-[#06463f] px-4 py-5 text-white">
          {/* Header Decorative Elements */}
          <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-white/10" />

          <div className="absolute -bottom-10 left-16 h-20 w-20 rounded-full bg-[#25D366]/20 blur-xl" />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-white/30 blur-md" />

                <img
                  src={Logo}
                  alt="Acuity Groups WhatsApp support"
                  className="relative h-12 w-12 rounded-full border-2 border-white bg-white object-contain p-1 shadow-lg"
                />

                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#25D366]" />
              </div>

              <div>
                <h3 className="text-base font-bold">{COMPANY_NAME}</h3>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-300" />

                  <p className="text-xs text-white/80">{REPLY_TIME}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:rotate-90 hover:bg-white/20"
            >
              <FaTimes size={16} />
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div
          className="relative h-[285px] overflow-hidden p-4"
          style={{
            backgroundColor: "#efeae2",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(255,255,255,.45) 2px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        >
          {/* Date Label */}
          <div className="mb-4 flex justify-center">
            <span className="rounded-lg bg-white/80 px-3 py-1 text-[10px] font-medium text-gray-500 shadow-sm backdrop-blur-sm">
              Today
            </span>
          </div>

          {/* Message Bubble */}
          <div className="relative max-w-[255px] rounded-b-xl rounded-tr-xl bg-white p-3.5 shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
            <span className="absolute -left-2 top-0 h-4 w-4 bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />

            <p className="mb-1 text-xs font-bold text-[#075E54]">
              {COMPANY_NAME}
            </p>

            <p className="text-sm leading-6 text-gray-700">
              👋 Welcome to {COMPANY_NAME}.
              <br />
              How can we help you today?
            </p>

            <div className="mt-2 flex items-center justify-end gap-1">
              <span className="text-[10px] text-gray-400">Now</span>

              <span className="text-[11px] font-bold text-blue-500">✓✓</span>
            </div>
          </div>

          {/* Quick Reply */}
          <button
            type="button"
            onClick={() =>
              setMessage("Hello, I would like to know more about your services.")
            }
            className="mt-4 rounded-full border border-[#25D366]/30 bg-white/90 px-4 py-2 text-xs font-semibold text-[#075E54] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-white hover:shadow-md"
          >
            I need facility management services
          </button>
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-2 border-t border-gray-100 bg-white p-3">
          <div className="flex flex-1 items-center rounded-full border border-transparent bg-gray-100 transition focus-within:border-[#25D366]/40 focus-within:bg-white focus-within:shadow-sm">
            <input
              type="text"
              aria-label="WhatsApp message"
              placeholder="Type a message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
              className="w-full bg-transparent px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>

          <button
            type="button"
            aria-label="Send WhatsApp message"
            onClick={sendMessage}
            disabled={!message.trim()}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ${
              message.trim()
                ? "bg-gradient-to-br from-[#4BE881] to-[#128C7E] hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)]"
                : "cursor-not-allowed bg-gray-300 shadow-none"
            }`}
          >
            <FaPaperPlane size={15} />
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 bg-gray-50 py-2 text-center">
          <p className="text-[10px] text-gray-400">
            Powered by WhatsApp • Your information is secure
          </p>
        </div>
      </div>

      <style>{`
        @keyframes whatsappFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-7px);
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppChat;