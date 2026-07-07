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
} from "lucide-react";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
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
    },
    {
      title: "Operations Supervisor",
      icon: <Users size={28} />,
      salary: "₹28,000 - ₹30,000",
      qualification: "PUC / Graduation",
      experience: "Experienced Preferred",
      details: [
        "Basic English communication",
        "Team handling skills",
        "Leadership qualities",
        "Operations management experience",
      ],
    },
    {
      title: "Business Support Executive",
      icon: <Phone size={28} />,
      salary: "₹16,000 - ₹18,000",
      qualification: "PUC / SSLC",
      experience: "Freshers Welcome",
      details: [
        "Calling & customer interaction",
        "Good communication skills",
        "Basic computer knowledge",
        "Female candidates preferred",
      ],
    },
  ];

  const benefits = [
    {
      icon: IndianRupee,
      title: "Competitive Salary",
      desc: "Industry-best pay scales",
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      desc: "Continuous skill development",
    },
    {
      icon: Users,
      title: "Career Growth",
      desc: "Fast-track promotions",
    },
    {
      icon: Briefcase,
      title: "Professional Environment",
      desc: "Supportive work culture",
    },
  ];

  const getSalarySchema = (salary) => {
    const numbers =
      salary.match(/\d[\d,]*/g)?.map((num) => Number(num.replace(/,/g, ""))) ||
      [];

    if (numbers.length === 0) return null;

    return {
      "@type": "MonetaryAmount",
      currency: "INR",
      value:
        numbers.length >= 2
          ? {
              "@type": "QuantitativeValue",
              minValue: numbers[0],
              maxValue: numbers[1],
              unitText: "MONTH",
            }
          : {
              "@type": "QuantitativeValue",
              value: numbers[0],
              unitText: "MONTH",
            },
    };
  };

  const currentYear = new Date().getFullYear();

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Current Job Openings at Acuity Groups",
    description:
      "Explore career opportunities in pest control, operations and business support at Acuity Groups Bangalore.",
    numberOfItems: jobs.length,
    itemListElement: jobs.map((job, idx) => {
      const salarySchema = getSalarySchema(job.salary);

      return {
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "JobPosting",
          title: job.title,
          description: `Join Acuity Groups as ${job.title}. Qualification: ${job.qualification}. Experience: ${job.experience}. Location: Bangalore.`,
          datePosted: `${currentYear}-01-01`,
          validThrough: `${currentYear}-12-31`,
          employmentType: "FULL_TIME",
          experienceRequirements: job.experience,
          educationRequirements: job.qualification,
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP Nagar 6th Phase, Yelachenahalli",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              postalCode: "560078",
              addressCountry: "IN",
            },
          },
          ...(salarySchema && { baseSalary: salarySchema }),
          hiringOrganization: {
            "@type": "Organization",
            name: "Acuity Groups",
            sameAs: "https://www.acuitygroups.in/",
            url: "https://www.acuitygroups.in/",
          },
        },
      };
    }),
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
    ],
  };

  return (
    <>
      <Helmet>
        <title>Careers at Acuity Groups Bangalore | Facility Management Jobs</title>

        <meta
          name="description"
          content="Explore career opportunities at Acuity Groups Bangalore for pest control, operations and business support roles."
        />

        <meta
          name="keywords"
          content="Acuity Groups careers, facility management jobs Bangalore, pest control technician jobs Bangalore, operations supervisor jobs Bangalore, business support jobs Bangalore"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Acuity Groups" />

        <link rel="canonical" href="https://www.acuitygroups.in/career" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.acuitygroups.in/career" />
        <meta
          property="og:title"
          content="Careers at Acuity Groups Bangalore | Facility Management Jobs"
        />
        <meta
          property="og:description"
          content="Join Acuity Groups Bangalore. Explore openings in pest control, operations and business support."
        />
        <meta property="og:site_name" content="Acuity Groups" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Careers at Acuity Groups Bangalore | Facility Management Jobs"
        />
        <meta
          name="twitter:description"
          content="Apply for pest control, operations and business support jobs at Acuity Groups Bangalore."
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
              Build Your{" "}
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Career
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join Acuity Groups and explore career opportunities in facility
              management, pest control, operations and business support services
              in Bangalore.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#openings"
                className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
              >
                View Openings
              </a>

              <a
                href="mailto:info@acuitygroups.in"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-800 transition"
              >
                Send Resume
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
                We believe in growth, learning, teamwork and rewarding talent.
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

        {/* OPEN POSITIONS */}
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
                  Acuity Groups Team
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
                  <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-4">
                    <div className="text-white/90">{job.icon}</div>

                    <h3 className="text-2xl font-bold text-white mt-2">
                      {job.title}
                    </h3>
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
                      href={`mailto:info@acuitygroups.in?subject=Application for ${encodeURIComponent(
                        job.title,
                      )}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition shadow-md hover:shadow-lg"
                    >
                      Apply Now <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO APPLY */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Ready to Join Our Team?
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              Send your resume to our team and become part of a growing
              organization that values your talent.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 inline-block w-full md:w-auto min-w-[300px]">
              <div className="space-y-3 text-left">
                <a
                  href="mailto:info@acuitygroups.in"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition"
                >
                  <Mail size={20} className="text-blue-800" />
                  <span>info@acuitygroups.in</span>
                </a>

                <a
                  href="tel:+919941229005"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition"
                >
                  <Phone size={20} className="text-blue-800" />
                  <span>+91 99412 29005 / 080 4122 9005</span>
                </a>

                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin size={20} className="text-blue-800 mt-1" />
                  <span>
                    2nd Floor, KVO-08, No-28/2, near Sun Jupiter School JP
                    Nagar 6th Phase, Yelachenahalli, Bengaluru, Karnataka
                    560078
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