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

  const jobs = [
    {
      title: "General Manager",
      experience: "5+ Years",
      qualification: "Any Degree",
      salary: "As per industry standards",
      location: "Bengaluru",
      grade: "Executive",
      responsibilities:
        "Lead business operations, manage teams, monitor performance, develop operational strategies and ensure service quality across client locations.",
    },
    {
      title: "Business Development Manager",
      experience: "5+ Years",
      qualification: "Any Degree",
      salary: "As per industry standards",
      location: "Bengaluru",
      grade: "Senior Management",
      responsibilities:
        "Identify new business opportunities, build client relationships, prepare proposals, support contract negotiations and achieve business growth targets.",
    },
    {
      title: "Facility Manager",
      experience: "5+ Years",
      qualification: "Any Degree",
      salary: "As per industry standards",
      location: "Bengaluru",
      grade: "Management",
      responsibilities:
        "Manage day-to-day facility operations, coordinate manpower, monitor housekeeping and security services, and maintain service standards at client sites.",
    },
    {
      title: "Business Administrator",
      experience: "5+ Years",
      qualification: "Any Degree",
      salary: "As per industry standards",
      location: "Bengaluru",
      grade: "Administration",
      responsibilities:
        "Manage office administration, documentation, client coordination, employee records, reporting and operational support activities.",
    },
    {
      title: "Field Officer",
      experience: "2+ Years",
      qualification: "Any Degree",
      salary: "As per industry standards",
      location: "Bengaluru",
      grade: "Field Staff",
      responsibilities:
        "Visit client sites, supervise field staff, monitor attendance and service quality, resolve site-level issues and submit regular reports.",
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

  const getWhatsAppApplyLink = (jobTitle) => {
    const message = `Hello Acuity Groups,

I am interested in applying for the ${jobTitle} position.

Name:
Email:
Phone:
Experience:
Current Location:

I will share my updated resume in this WhatsApp chat. Please review my application and let me know the next steps.

Thank you.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const getWhatsAppGeneralLink = () => {
    const message = `Hello Acuity Groups,

I am interested in career opportunities at Acuity Groups.

Name:
Email:
Phone:
Experience:
Applying for:
Current Location:

I will share my updated resume in this WhatsApp chat.

Thank you.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const getEmailApplyLink = (jobTitle = "Career Opportunity") => {
    const subject = `Job Application - ${jobTitle}`;

    const body = `Hello Acuity Groups,

I am interested in applying for the ${jobTitle} position.

Name:
Phone:
Experience:
Current Location:

Please find my updated resume attached.

Thank you.`;

    return `mailto:info@acuitygroups.in?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Current Job Openings at Acuity Groups",
    description:
      "Explore current facility management, administration and business development job opportunities at Acuity Groups in Bengaluru.",
    numberOfItems: jobs.length,
    itemListElement: jobs.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "JobPosting",
        title: job.title,
        description: `${job.responsibilities} Qualification: ${job.qualification}. Required experience: ${job.experience}. Salary: ${job.salary}. Work location: ${job.location}, Karnataka.`,
        identifier: {
          "@type": "PropertyValue",
          name: "Acuity Groups",
          value: `AG-${job.title
            .toUpperCase()
            .replace(/[^A-Z0-9]+/g, "-")}`,
        },
        datePosted: "2026-07-20",
        validThrough: "2026-09-30T23:59:59+05:30",
        employmentType: "FULL_TIME",
        experienceRequirements: job.experience,
        educationRequirements: job.qualification,
        directApply: true,
        applicantLocationRequirements: {
          "@type": "Country",
          name: "India",
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "2nd Floor, KVO-08, No-28/2, near Sun Jupiter School, JP Nagar 6th Phase, Yelachenahalli",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560078",
            addressCountry: "IN",
          },
        },
        hiringOrganization: {
          "@type": "Organization",
          name: "Acuity Groups LLP",
          sameAs: "https://www.acuitygroups.in/",
          logo: "https://www.acuitygroups.in/og-image.jpg",
        },
        url: "https://www.acuitygroups.in/career/acuity-groups",
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
        name: "Careers",
        item: "https://www.acuitygroups.in/career",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Acuity Groups Careers",
        item: "https://www.acuitygroups.in/career/acuity-groups",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Careers at Acuity Groups | Facility Management Jobs Bengaluru
        </title>

        <meta
          name="description"
          content="Explore current job openings at Acuity Groups in Bengaluru. Apply for facility management, business development, administration and field officer positions."
        />

        <meta
          name="keywords"
          content="Acuity Groups careers, facility management jobs Bengaluru, facility manager jobs, field officer jobs, business development manager jobs, administration jobs Bengaluru"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups LLP" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/career/acuity-groups"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/career/acuity-groups"
        />

        <meta
          property="og:title"
          content="Careers at Acuity Groups | Jobs in Bengaluru"
        />

        <meta
          property="og:description"
          content="Explore current career opportunities in facility management, administration, field operations and business development at Acuity Groups."
        />

        <meta
          property="og:image"
          content="https://www.acuitygroups.in/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Careers at Acuity Groups | Jobs in Bengaluru"
        />

        <meta
          name="twitter:description"
          content="Join Acuity Groups and explore facility management, administration and field-operation job openings in Bengaluru."
        />

        <meta
          name="twitter:image"
          content="https://www.acuitygroups.in/og-image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify(jobPostingSchema)}
        </script>

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
              Join a professional team delivering facility management,
              security, housekeeping, pest management, manpower and maintenance
              services across Bengaluru and Karnataka.
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
                We create opportunities, encourage learning, reward performance
                and help employees grow personally and professionally.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
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

        {/* CURRENT OPENINGS */}
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
                Explore our current career opportunities and submit your
                application through WhatsApp or email.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {jobs.map((job) => (
                <article
                  key={job.title}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <h3 className="text-2xl font-bold text-white">
                      {job.title}
                    </h3>

                    <span className="w-fit bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star size={12} />
                      {job.grade}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {job.responsibilities}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3 text-gray-700">
                        <Briefcase
                          size={18}
                          className="text-blue-800 mt-1 flex-shrink-0"
                        />

                        <span>
                          <strong>Experience:</strong> {job.experience}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 text-gray-700">
                        <GraduationCap
                          size={18}
                          className="text-blue-800 mt-1 flex-shrink-0"
                        />

                        <span>
                          <strong>Qualification:</strong> {job.qualification}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 text-gray-700">
                        <IndianRupee
                          size={18}
                          className="text-blue-800 mt-1 flex-shrink-0"
                        />

                        <span>
                          <strong>Salary:</strong> {job.salary}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 text-gray-700">
                        <MapPin
                          size={18}
                          className="text-blue-800 mt-1 flex-shrink-0"
                        />

                        <span>
                          <strong>Location:</strong> {job.location}
                        </span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <a
                        href={getWhatsAppApplyLink(job.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-blue-800 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition shadow-md hover:shadow-lg"
                      >
                        Apply via WhatsApp
                      </a>

                      <a
                        href={getEmailApplyLink(job.title)}
                        className="w-full text-center border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-semibold px-5 py-3 rounded-xl transition"
                      >
                        Apply by Email
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATION SECTION */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-3xl px-6 py-12 md:p-12 text-center text-white shadow-xl">
              <Mail size={50} className="mx-auto mb-6 opacity-90" />

              <h2 className="text-3xl md:text-5xl font-black mb-4">
                Ready to Join Our Team?
              </h2>

              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Send your updated resume and relevant documents through
                WhatsApp or email. Our recruitment team will contact shortlisted
                candidates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={getWhatsAppGeneralLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
                >
                  Send Resume via WhatsApp
                  <Send size={18} className="inline ml-2" />
                </a>

                <a
                  href={getEmailApplyLink()}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-800 transition"
                >
                  Apply by Email
                  <Mail size={18} className="inline ml-2" />
                </a>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-blue-100">
                <a
                  href="mailto:info@acuitygroups.in"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <Mail size={17} />
                  info@acuitygroups.in
                </a>

                <a
                  href="tel:+919941229005"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <Phone size={17} />
                  +91 99412 29005
                </a>
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

export default Career;