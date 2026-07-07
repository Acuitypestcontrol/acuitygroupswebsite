import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  TrendingUp,
  Users,
  Award,
  Send,
  IndianRupee,
  Star,
} from "lucide-react";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Jobs ordered by grade (1 = highest)
  const jobs = [
    {
      title: "General Manager",
      experience: "5+ Years",
      qualification: "Any Degree ",
      salary: "As per industry standards",
      location: "Bangalore",
      grade: "Executive",
    },
    {
      title: "Business Development Manager",
      experience: "5+ Years",
      qualification: "Any Degree ",
      salary: "As per industry standards",
      location: "Bangalore",
      grade: "Senior Management",
    },
    {
      title: "Facility Manager",
      experience: "5+ Years",
      qualification: "Any Degree",
      salary: "As per industry standards",
      location: "Bangalore",
      grade: "Management",
    },
    {
      title: "Business Administrator",
      experience: "5+ Years",
      qualification: "Any Degree",
      salary: "As per industry standards",
      location: "Bangalore",
      grade: "Administration",
    },
    {
      title: "Field Officer",
      experience: "2+ Years",
      qualification: "Any Degree",
      salary: "As per industry standards",
      location: "Bangalore",
      grade: "Field Staff",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      desc: "Continuous learning and leadership opportunities for ambitious professionals.",
    },
    {
      icon: Users,
      title: "Professional Environment",
      desc: "Work with experienced teams and industry experts in a supportive culture.",
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      desc: "Attractive compensation packages based on experience and performance.",
    },
  ];

  const whatsappNumber = "919941229005";

  // WhatsApp message for specific job application (asks for resume)
  const getWhatsAppApplyLink = (jobTitle) => {
    const message = `Hello Acuity Groups,%0A%0AI am interested in the *${jobTitle}* position.%0A%0APlease find my details and resume attached.%0A%0AName: %0AEmail: %0APhone: %0AExperience: %0A%0AI am sharing my resume/profile. Please review and let me know the next steps.%0A%0AThank you.`;
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  // General application (asks for resume)
  const getWhatsAppGeneralLink = () => {
    const message = `Hello Acuity Groups,%0A%0AI am interested in career opportunities at Acuity Groups.%0A%0APlease find my details and resume attached.%0A%0AName: %0AEmail: %0APhone: %0AExperience: %0AApplying for: %0A%0AThank you.`;
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  // Generate JSON-LD for JobPosting schema
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Current Job Openings at Acuity Groups",
    description:
      "Explore career opportunities in facility management, security, housekeeping, and more.",
    numberOfItems: jobs.length,
    itemListElement: jobs.map((job, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "JobPosting",
        title: job.title,
        description: `Join Acuity Groups as ${job.title}. Qualification: ${job.qualification}. Experience: ${job.experience}. Location: ${job.location}.`,
        datePosted: "2025-06-01",
        validThrough: "2025-12-31",
        employmentType: "FULL_TIME",
        experienceRequirements: job.experience,
        educationRequirements: job.qualification,
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location,
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
          name: "Acuity Groups",
          sameAs: "https://www.acuitygroups.in",
        },
      },
    })),
  };

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.acuitygroups.in/career/acuity-groups"
        />
        <title>
          Careers | Join Acuity Groups – Facility Management Jobs in Bangalore
        </title>
        <meta
          name="description"
          content="Join Acuity Groups – leading facility management company in Bangalore. Explore careers in security, housekeeping, pest control, maintenance, and administration. Apply now via WhatsApp."
        />
        <meta
          name="keywords"
          content="careers at Acuity Groups, facility management jobs, security jobs Bangalore, housekeeping jobs, pest control jobs, maintenance jobs, manpower outsourcing careers, Bangalore jobs"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acuitygroups.in/career/acuity-groups"/>
        <meta
          property="og:title"
          content="Careers | Join Acuity Groups – Facility Management Jobs"
        />
        <meta
          property="og:description"
          content="Explore exciting career opportunities at Acuity Groups. We're hiring for facility management, security, housekeeping, pest control, and administrative roles in Bangalore."
        />
        <meta
          property="og:image"
          content="https://www.acuitygroups.in/static/media/careers-og.jpg"
        />
        <meta property="og:site_name" content="Acuity Groups" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Careers | Join Acuity Groups – Facility Management Jobs"
        />
        <meta
          name="twitter:description"
          content="Join our team – facility management, security, housekeeping, and more. Apply via WhatsApp."
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
              Build Your Career With{" "}
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Acuity Groups
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join a team of passionate professionals delivering excellence in
              Facility Management, Security Services, Soft Services, Pest
              Control, Housekeeping, and Business Solutions across India.
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
                  Acuity Groups
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                We believe in creating opportunities, encouraging innovation,
                rewarding performance, and helping employees grow both
                personally and professionally.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <benefit.icon size={32} className="text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CURRENT OPENINGS - GRADE WISE */}
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
                  Growing Team
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                Explore exciting opportunities to build your career with us.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl overflow-hidden"
                >
                  {/* Header with grade badge */}
                  <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-4 flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white">
                      {job.title}
                    </h3>
                    <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star size={12} /> {job.grade}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <Briefcase size={18} className="text-blue-800" />
                        <span>
                          <strong>Experience:</strong> {job.experience}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <GraduationCap size={18} className="text-blue-800" />
                        <span>
                          <strong>Qualification:</strong> {job.qualification}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <IndianRupee size={18} className="text-blue-800" />
                        <span>
                          <strong>Salary:</strong> {job.salary}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <MapPin size={18} className="text-blue-800" />
                        <span>
                          <strong>Location:</strong> {job.location}
                        </span>
                      </div>
                    </div>
                    <a
                      href={getWhatsAppApplyLink(job.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition shadow-md hover:shadow-lg"
                    >
                      Apply via WhatsApp (Share Resume)
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATION SECTION */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-3xl p-12 text-center text-white shadow-xl">
              <Mail size={50} className="mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Send your updated resume and relevant documents via WhatsApp.
                Our recruitment team will review your application and contact
                shortlisted candidates.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={getWhatsAppGeneralLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
                >
                  Send Resume via WhatsApp{" "}
                  <Send size={18} className="inline ml-2" />
                </a>
              </div>
              <p className="mt-6 text-blue-100">
                📧 info@acuitygroups.in | 📞 +91 99412 29005
              </p>
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

export default Career;
