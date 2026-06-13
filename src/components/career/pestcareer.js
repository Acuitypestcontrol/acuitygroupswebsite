import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Briefcase,
  Users,
  Phone,
  GraduationCap,
  IndianRupee,
  CheckCircle,
  Mail,
  MapPin,
  ArrowRight,
  Star,
} from "lucide-react";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Jobs ordered by grade (1 = highest)
  const jobs = [
    {
      title: "Operations Supervisor",
      icon: <Users size={28} />,
      salary: "As per industry standards",
      qualification: "PUC / Graduation",
      experience: "Freshers & Experienced",
      details: [
        "Basic English communication",
        "Team handling skills",
        "Leadership qualities",
        "Operations management experience",
      ],
      grade: "Supervisory",
    },
    {
      title: "Business Support Executive",
      icon: <Phone size={28} />,
      salary: "As per industry standards",
      qualification: "PUC / SSLC",
      experience: "Freshers & Experienced",
      details: [
        "Calling & customer interaction",
        "Good communication skills",
        "Basic computer knowledge",
        "Female candidates preferred",
      ],
      grade: "Executive",
    },
    {
      title: "Pest Control Technician",
      icon: <Briefcase size={28} />,
      salary: "As Per Industry Standards",
      qualification: "SSLC / PUC",
      experience: "Freshers & Experienced",
      details: [
        "Two-wheeler mandatory",
        "Training will be provided",
        "Basic communication skills",
        "Customer handling skills",
      ],
      grade: "Entry Level",
    },
  ];

  const benefits = [
    {
      icon: IndianRupee,
      title: "Competitive Salary",
      desc: "Industry‑best pay scales",
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      desc: "Continuous skill development",
    },
    { icon: Users, title: "Career Growth", desc: "Fast‑track promotions" },
    {
      icon: Briefcase,
      title: "Professional Environment",
      desc: "Supportive work culture",
    },
  ];

  const whatsappNumber = "919941229005"; // without '+'

  // WhatsApp message for specific job application
  const getWhatsAppApplyLink = (jobTitle) => {
    const message = `Hello Acuity Groups,%0A%0AI am interested in the *${jobTitle}* position.%0A%0APlease find my details and resume attached.%0A%0AName: %0AEmail: %0APhone: %0AExperience: %0A%0AI am sharing my resume/profile. Please review and let me know the next steps.%0A%0AThank you.`;
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  // General application (Send Resume)
  const getWhatsAppGeneralLink = () => {
    const message = `Hello Acuity Groups,%0A%0AI am interested in career opportunities at Acuity Groups.%0A%0APlease find my details and resume attached.%0A%0AName: %0AEmail: %0APhone: %0AExperience: %0AApplying for: %0A%0AThank you.`;
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  // Generate JSON-LD for JobPosting schema
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Current Job Openings at Acuity Integrated Facility Management",
    description:
      "Explore career opportunities in operations, business support, and pest control.",
    numberOfItems: jobs.length,
    itemListElement: jobs.map((job, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "JobPosting",
        title: job.title,
        description: `Join Acuity Integrated Facility Management as ${job.title}. Qualification: ${job.qualification}. Experience: ${job.experience}. Location: Bangalore.`,
        datePosted: "2025-06-01",
        validThrough: "2025-12-31",
        employmentType: "FULL_TIME",
        experienceRequirements: job.experience,
        educationRequirements: job.qualification,
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "India",
          },
        },
        baseSalary: {
          "@type": "MonetaryAmount",
          currency: "INR",
          value: {
            "@type": "QuantitativeValue",
            value: 0,
            unitText: "YEAR",
          },
        },
        hiringOrganization: {
          "@type": "Organization",
          name: "Acuity Integrated Facility Management",
          sameAs: "https://www.acuitygroups.in",
        },
      },
    })),
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.acuitygroups.in/careers" />
        <title>Careers | Join Acuity Integrated Facility Management Team</title>
        <meta
          name="description"
          content="Join Acuity Integrated Facility Management – leading facility management company in Bangalore. Explore careers in operations, business support, pest control, and more. Apply now via WhatsApp."
        />
        <meta
          name="keywords"
          content="careers at Acuity, facility management jobs, operations supervisor, business support executive, pest control technician, Bangalore jobs, pest control careers"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Integrated Facility Management" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acuitygroups.in/careers" />
        <meta
          property="og:title"
          content="Careers | Join Acuity Integrated Facility Management Team"
        />
        <meta
          property="og:description"
          content="Explore exciting career opportunities at Acuity Integrated Facility Management. We're hiring for operations, business support, and pest control roles in Bangalore."
        />
        <meta
          property="og:image"
          content="https://www.acuitygroups.in/static/media/careers-og.jpg"
        />
        <meta
          property="og:site_name"
          content="Acuity Integrated Facility Management"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Careers | Join Acuity Integrated Facility Management Team"
        />
        <meta
          name="twitter:description"
          content="Join our team – operations, business support, pest control. Apply via WhatsApp."
        />
        <meta
          name="twitter:image"
          content="https://www.acuitygroups.in/static/media/careers-og.jpg"
        />
      </Helmet>

      {/* JSON-LD for Job Posting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <div className="bg-white text-gray-800 overflow-hidden font-['Poppins',system-ui,sans-serif]">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-blue-100 tracking-[5px] text-sm font-semibold mb-6">
              <Briefcase size={14} />
              <span>CAREERS</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              Build Your{" "}
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Career
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join our growing team and explore exciting opportunities to learn,
              grow, and succeed in a professional work environment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#openings"
                className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
              >
                View Openings
              </a>
              <a
                href={getWhatsAppGeneralLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-800 transition"
              >
                Send Resume via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* WHY JOIN US */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-800 uppercase tracking-[5px] mb-4 font-semibold">
                Why Join Us
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Grow with{" "}
                <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                  Acuity
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                We believe in growth, learning, and rewarding talent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon size={32} className="text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS - WITH GRADE BADGES */}
        <section id="openings" className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full text-blue-800 tracking-[5px] text-sm font-semibold mb-5">
                <Briefcase size={14} />
                <span>CURRENT OPENINGS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Join Our{" "}
                <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                  Pest Control Team
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                Explore our latest job opportunities and take the next step in
                your career.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-4 flex justify-between items-center">
                    <div>
                      <div className="text-white/90">{job.icon}</div>
                      <h3 className="text-2xl font-bold text-white mt-2">
                        {job.title}
                      </h3>
                    </div>
                    <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
                      <Star size={12} /> {job.grade}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <p className="flex items-start gap-2">
                        <IndianRupee
                          size={18}
                          className="text-blue-800 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          <strong>Salary:</strong> {job.salary}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <GraduationCap
                          size={18}
                          className="text-blue-800 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          <strong>Qualification:</strong> {job.qualification}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Briefcase
                          size={18}
                          className="text-blue-800 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          <strong>Experience:</strong> {job.experience}
                        </span>
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-gray-800 mb-2">
                        Requirements:
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        {job.details.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle size={14} className="text-blue-800" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={getWhatsAppApplyLink(job.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition shadow-md hover:shadow-lg"
                    >
                      Apply via WhatsApp <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO APPLY - WhatsApp & Contact Info */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Send your resume via WhatsApp or email to our HR team and become
              part of a growing organization that values your talent.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 inline-block w-full md:w-auto min-w-[300px]">
              <div className="space-y-3 text-left">
                <a
                  href={getWhatsAppGeneralLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition"
                >
                  <Mail size={20} className="text-blue-800" />
                  <span>Send Resume via WhatsApp</span>
                </a>
                <a
                  href="mailto:info@acuitygroups.in"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition"
                >
                  <Mail size={20} className="text-blue-800" />
                  <span>info@acuitygroups.in</span>
                </a>
                <a
                  href="tel:9941229005"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition"
                >
                  <Phone size={20} className="text-blue-800" />
                  <span>9941229005 / 08041229005</span>
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={20} className="text-blue-800" />
                  <span>
                    No-28/2, KVO-08, 1st Floor, near Sun Jupiter School, JP
                    Nagar 6th Phase, Yelachenahalli, Kumaraswamy Layout,
                    Bengaluru, Karnataka 560078
                  </span>
                </div>
              </div>
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

export default Careers;
