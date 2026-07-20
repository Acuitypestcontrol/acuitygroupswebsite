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

const PestCareer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      title: "Operations Supervisor",
      icon: Users,
      salary: "As per industry standards",
      qualification: "PUC / Graduation",
      experience: "Freshers and Experienced",
      grade: "Supervisory",
      description:
        "Supervise pest-control operations, coordinate technicians, monitor service quality, maintain attendance and support smooth daily field operations.",
      details: [
        "Basic English communication",
        "Team-handling skills",
        "Leadership qualities",
        "Basic operations-management knowledge",
      ],
    },
    {
      title: "Business Support Executive",
      icon: Phone,
      salary: "As per industry standards",
      qualification: "PUC / SSLC",
      experience: "Freshers and Experienced",
      grade: "Executive",
      description:
        "Handle customer calls, coordinate service appointments, support client communication and maintain basic service and customer records.",
      details: [
        "Calling and customer interaction",
        "Good communication skills",
        "Basic computer knowledge",
        "Customer-support skills",
      ],
    },
    {
      title: "Pest Control Technician",
      icon: Briefcase,
      salary: "As per industry standards",
      qualification: "SSLC / PUC",
      experience: "Freshers and Experienced",
      grade: "Entry Level",
      description:
        "Perform residential and commercial pest-control treatments, inspect pest activity, follow safety procedures and communicate service details to customers.",
      details: [
        "Two-wheeler mandatory",
        "Training will be provided",
        "Basic communication skills",
        "Customer-handling skills",
      ],
    },
  ];

  const benefits = [
    {
      icon: IndianRupee,
      title: "Competitive Salary",
      desc: "Compensation based on experience, skills and job responsibilities.",
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      desc: "Practical pest-control and customer-service training will be provided.",
    },
    {
      icon: Users,
      title: "Career Growth",
      desc: "Opportunities to grow into supervisory and operational roles.",
    },
    {
      icon: Briefcase,
      title: "Professional Environment",
      desc: "Work in a supportive and professional team environment.",
    },
  ];

  const whatsappNumber = "919941229005";
  const applicationEmail = "info@acuitygroups.in";

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

I am interested in pest-control career opportunities at Acuity Groups.

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

  const getEmailApplyLink = (jobTitle = "Pest Control Career Opportunity") => {
    const subject = `Job Application - ${jobTitle}`;

    const body = `Hello Acuity Groups,

I am interested in applying for the ${jobTitle} position.

Name:
Phone:
Experience:
Current Location:

Please find my updated resume attached.

Thank you.`;

    return `mailto:${applicationEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pest Control Job Openings at Acuity Groups",
    description:
      "Explore current pest-control technician, operations supervisor and business-support job opportunities at Acuity Groups in Bengaluru.",
    numberOfItems: jobs.length,
    itemListElement: jobs.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "JobPosting",
        title: job.title,
        description: `${job.description} Qualification: ${job.qualification}. Experience: ${job.experience}. Salary: ${job.salary}. Location: Bengaluru, Karnataka.`,
        identifier: {
          "@type": "PropertyValue",
          name: "Acuity Groups LLP",
          value: `AG-PEST-${job.title
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
        url: "https://www.acuitygroups.in/career/pest-control",
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
        name: "Pest Control Careers",
        item: "https://www.acuitygroups.in/career/pest-control",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Pest Control Jobs in Bengaluru | Acuity Groups Careers</title>

        <meta
          name="description"
          content="Apply for pest control jobs at Acuity Groups LLP in Bengaluru. Openings for technicians and supervisors. Freshers and experienced candidates can apply."
        />

        <meta
          name="keywords"
          content="pest control jobs Bengaluru, pest control technician jobs, operations supervisor jobs Bengaluru, business support executive jobs, pest control careers, Acuity Groups careers"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups LLP" />

        <link
          rel="canonical"
          href="https://www.acuitygroups.in/career/pest-control"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta
          property="og:url"
          content="https://www.acuitygroups.in/career/pest-control"
        />

        <meta
          property="og:title"
          content="Pest Control Jobs in Bengaluru | Acuity Groups"
        />

        <meta
          property="og:description"
          content="Explore current pest-control technician, operations and business-support job opportunities at Acuity Groups in Bengaluru."
        />

        <meta
          property="og:image"
          content="https://www.acuitygroups.in/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Pest Control Jobs in Bengaluru | Acuity Groups"
        />

        <meta
          name="twitter:description"
          content="Apply for current pest-control and operations job openings at Acuity Groups in Bengaluru."
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-blue-100 tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm font-semibold mb-6">
              <Briefcase size={14} />
              <span>PEST CONTROL CAREERS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              Build Your{" "}
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Pest Control Career
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join Acuity Groups and explore opportunities in pest control,
              field operations and business support services in Bengaluru.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
                We provide practical training, career growth, teamwork and
                opportunities for both freshers and experienced candidates.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => {
                const BenefitIcon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl"
                  >
                    <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <BenefitIcon size={32} className="text-blue-800" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section
          id="openings"
          className="py-20 px-6 md:px-12 bg-gray-50 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full text-blue-800 tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm font-semibold mb-5">
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
                Explore our current job openings and apply through WhatsApp or
                email.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {jobs.map((job) => {
                const JobIcon = job.icon;

                return (
                  <article
                    key={job.title}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl overflow-hidden flex flex-col"
                  >
                    <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-5">
                      <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:items-start sm:justify-between gap-4">
                        <div>
                          <JobIcon size={28} className="text-white/90" />

                          <h3 className="text-2xl font-bold text-white mt-3">
                            {job.title}
                          </h3>
                        </div>

                        <span className="w-fit bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1 whitespace-nowrap">
                          <Star size={12} />
                          {job.grade}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {job.description}
                      </p>

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

                        <p className="flex items-start gap-2">
                          <MapPin
                            size={18}
                            className="text-blue-800 mt-0.5 flex-shrink-0"
                          />

                          <span>
                            <strong>Location:</strong> Bengaluru
                          </span>
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="font-semibold text-gray-800 mb-3">
                          Requirements
                        </p>

                        <ul className="space-y-2 text-gray-600">
                          {job.details.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle
                                size={15}
                                className="text-blue-800 mt-0.5 flex-shrink-0"
                              />

                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid gap-3 mt-auto">
                        <a
                          href={getWhatsAppApplyLink(job.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition shadow-md hover:shadow-lg"
                        >
                          Apply via WhatsApp
                          <ArrowRight size={18} />
                        </a>

                        <a
                          href={getEmailApplyLink(job.title)}
                          className="w-full inline-flex items-center justify-center gap-2 border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white py-3 px-4 rounded-xl font-semibold transition"
                        >
                          Apply by Email
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW TO APPLY */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Ready to Join Our Team?
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Send your updated resume through WhatsApp or email. Our
              recruitment team will review your application and contact
              shortlisted candidates.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 w-full max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4 mb-7">
                <a
                  href={getWhatsAppGeneralLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  <Phone size={19} />
                  Apply via WhatsApp
                </a>

                <a
                  href={getEmailApplyLink()}
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  <Mail size={19} />
                  Apply by Email
                </a>
              </div>

              <div className="space-y-4 text-left">
                <a
                  href={`mailto:${applicationEmail}`}
                  className="flex items-start gap-3 text-gray-700 hover:text-blue-800 transition"
                >
                  <Mail
                    size={20}
                    className="text-blue-800 mt-0.5 flex-shrink-0"
                  />

                  <span>{applicationEmail}</span>
                </a>

                <a
                  href="tel:+919941229005"
                  className="flex items-start gap-3 text-gray-700 hover:text-blue-800 transition"
                >
                  <Phone
                    size={20}
                    className="text-blue-800 mt-0.5 flex-shrink-0"
                  />

                  <span>+91 99412 29005</span>
                </a>

                <a
                  href="https://maps.google.com/?q=12.8978823,77.5722624"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-700 hover:text-blue-800 transition"
                >
                  <MapPin
                    size={20}
                    className="text-blue-800 mt-1 flex-shrink-0"
                  />

                  <span>
                    2nd Floor, KVO-08, No-28/2, near Sun Jupiter School, JP
                    Nagar 6th Phase, Yelachenahalli, Bengaluru, Karnataka 560078
                  </span>
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

export default PestCareer;
