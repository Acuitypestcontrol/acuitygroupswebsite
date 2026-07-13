import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919941229005";

    const message = `*New Enquiry from Acuity Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service || "Not specified"}
*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 99412 29005", "080 4122 9005"],
      action: "tel:+919941229005",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@acuitygroups.in"],
      action: "mailto:info@acuitygroups.in",
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "2nd Floor, KVO-08, No-28/2, near Sun Jupiter School",
        "JP Nagar 6th Phase, Yelachenahalli",
        "Bengaluru, Karnataka 560078",
      ],
      action: "https://maps.google.com/?q=12.8978823,77.5722624",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM"],
      action: null,
    },
  ];

  const servicesList = [
    "Integrated Facility Management",
    "Security Services",
    "Housekeeping Services",
    "Soft Services",
    "Pest Management",
    "Repair & Maintenance",
    "Manpower Outsourcing",
  ];

  const faqs = [
    {
      question: "How quickly can you respond?",
      answer:
        "We respond to all inquiries within 24 hours. For urgent requests, please call our helpline.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes, we provide free site visits and consultations for our facility management and support services.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve Bangalore and major business, residential and industrial locations across India.",
    },
    {
      question: "Are your staff background verified?",
      answer:
        "Yes, our security, housekeeping and facility staff undergo background verification and training.",
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.acuitygroups.in/contact/#localbusiness",
    name: "Acuity Groups",
    url: "https://www.acuitygroups.in/",
    image: "https://www.acuitygroups.in/og-image.jpg",
    telephone: "+919941229005",
    email: "info@acuitygroups.in",
    description:
      "Acuity Groups provides facility management, security, housekeeping, pest management, manpower outsourcing and maintenance services in Bangalore.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar 6th Phase, Yelachenahalli",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560078",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.8978823",
      longitude: "77.5722624",
    },
    openingHours: "Mo-Sa 09:00-18:00",
    areaServed: "Bangalore",
    priceRange: "$$",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.acuitygroups.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://www.acuitygroups.in/contact",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Contact Acuity Groups | Facility Management Bangalore</title>

        <meta
          name="description"
          content="Contact Acuity Groups for facility management, security, housekeeping, pest control and manpower services in Bangalore."
        />

        <meta
          name="keywords"
          content="contact Acuity Groups, facility management Bangalore, security services Bangalore, housekeeping services Bangalore, pest control Bangalore"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        <link rel="canonical" href="https://www.acuitygroups.in/contact" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />
        <meta property="og:url" content="https://www.acuitygroups.in/contact" />
        <meta
          property="og:title"
          content="Contact Acuity Groups | Facility Management Bangalore"
        />
        <meta
          property="og:description"
          content="Get in touch with Acuity Groups for facility management, security, housekeeping, pest control and manpower services in Bangalore."
        />
        <meta
          property="og:image"
          content="https://www.acuitygroups.in/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Acuity Groups | Facility Management Bangalore"
        />
        <meta
          name="twitter:description"
          content="Contact Acuity Groups for facility management and support services in Bangalore."
        />
        <meta
          name="twitter:image"
          content="https://www.acuitygroups.in/og-image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="bg-white text-gray-800 overflow-hidden font-['Poppins',system-ui,sans-serif]">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-blue-100 tracking-[5px] text-sm font-semibold mb-6">
              <Phone size={14} />
              <span>CONTACT US</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              Contact Acuity Groups
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get in touch for facility management, security, housekeeping, pest
              management, manpower outsourcing and maintenance services in
              Bangalore.
            </p>
          </div>
        </section>

        {/* CONTACT INFO CARDS */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl text-center"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon size={28} className="text-blue-800" />
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h2>

                  {info.details.map((detail, i) => (
                    <p
                      key={i}
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}

                  {info.action && (
                    <a
                      href={info.action}
                      target={
                        info.title === "Office Address" ? "_blank" : "_self"
                      }
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-blue-800 text-sm font-medium hover:underline"
                    >
                      {info.title === "Phone"
                        ? "Call Now →"
                        : info.title === "Email"
                          ? "Send Email →"
                          : "View on Map →"}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT FORM & MAP */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full text-blue-800 tracking-[5px] text-sm font-semibold mb-5">
                <Send size={14} />
                <span>SEND US A MESSAGE</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Request a Service Quote
              </h2>

              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                Fill out the form below and our team will get back to you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>

                    <p className="text-gray-600">
                      Your message has been sent successfully. We will contact
                      you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition"
                      >
                        <option value="">Select a service</option>
                        {servicesList.map((service, idx) => (
                          <option key={idx} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                )}
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.18323075287873!2d77.5720666112782!3d12.897686125184315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b4c1a50ca5%3A0x18f7114f7bde8de1!2sAcuity%20Groups%20LLP!5e1!3m2!1sen!2sin!4v1783944986471!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL MEDIA */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Connect With Us on Social Media
            </h2>

            <p className="text-gray-600 mb-8">
              Follow us for updates, service announcements and industry
              insights.
            </p>

            <div className="flex justify-center gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acuity Groups Facebook"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-800 hover:text-white transition group"
              >
                <Facebook
                  size={20}
                  className="text-blue-800 group-hover:text-white"
                />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acuity Groups Twitter"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-800 hover:text-white transition group"
              >
                <Twitter
                  size={20}
                  className="text-blue-800 group-hover:text-white"
                />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acuity Groups LinkedIn"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-800 hover:text-white transition group"
              >
                <Linkedin
                  size={20}
                  className="text-blue-800 group-hover:text-white"
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acuity Groups Instagram"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-800 hover:text-white transition group"
              >
                <Instagram
                  size={20}
                  className="text-blue-800 group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>

                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
          `}
        </style>
      </div>
    </>
  );
};

export default ContactUs;
