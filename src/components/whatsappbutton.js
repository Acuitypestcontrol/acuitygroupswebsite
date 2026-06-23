import React, { useState } from "react";
import { FaWhatsapp, FaPaperPlane, FaTimes } from "react-icons/fa";
import Logo from "../images/logoacuity.jpeg";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const COMPANY_NAME = "Acuity Groups";
  const REPLY_TIME = "Typically replies in 5 min";
  const WHATSAPP_NUMBER = "+919941229005"; // Replace with your number

  const sendMessage = () => {
    if (!message.trim()) return;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
    setMessage("");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-[9999] w-[320px] bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={Logo}
                alt="logo"
                className="w-10 h-10 rounded-full bg-white p-1"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
            </div>

            <div>
              <h3 className="font-semibold text-sm">{COMPANY_NAME}</h3>
              <p className="text-xs text-gray-200">{REPLY_TIME}</p>
            </div>
          </div>

          <button onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Chat Body */}
        <div
          className="h-[280px] p-4 overflow-hidden"
          style={{
            backgroundColor: "#efeae2",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(255,255,255,.3) 2px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        >
          <div className="bg-white rounded-xl p-3 shadow-sm max-w-[230px]">
            <p className="font-semibold text-xs text-gray-700 mb-1">
              {COMPANY_NAME}
            </p>

            <p className="text-sm text-gray-600">
              👋 Welcome to {COMPANY_NAME}.
              <br />
              How can we help you today?
            </p>

            <p className="text-[10px] text-gray-400 text-right mt-2">✓✓</p>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t bg-white p-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none"
          />

          <button
            onClick={sendMessage}
            className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition"
          >
            <FaPaperPlane size={14} />
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatsAppChat;
