import React from "react";
import Btn from "./Btn";


export default function InternshipListings({ filters }) {
  const internships = [
    {
      id: 1,
      title: "Frontend Development Internship",
      company: "Tech Innovations",
      domain: "Web Development",
      duration: "8 weeks",
      type: "Paid",
      stipend: "PKR 15,000",
      skills: ["React", "JavaScript", "CSS"],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "UI/UX Design Internship",
      company: "Creative Agency",
      domain: "UI/UX Design",
      duration: "12 weeks",
      type: "Performance-based",
      stipend: "Up to PKR 20,000",
      skills: ["Figma", "Adobe XD", "User Research"],
      posted: "3 days ago",
    },
    {
      id: 3,
      title: "Data Science Internship",
      company: "Analytics Pro",
      domain: "Data Science",
      duration: "8 weeks",
      type: "Paid",
      stipend: "PKR 18,000",
      skills: ["Python", "Machine Learning", "SQL"],
      posted: "5 days ago",
    },
    {
      id: 4,
      title: "Mobile App Development",
      company: "App Studio",
      domain: "Mobile Development",
      duration: "12 weeks",
      type: "Paid",
      stipend: "PKR 20,000",
      skills: ["React Native", "Flutter", "Firebase"],
      posted: "1 week ago",
    },
    {
      id: 5,
      title: "Digital Marketing Internship",
      company: "Marketing Solutions",
      domain: "Digital Marketing",
      duration: "4 weeks",
      type: "Unpaid",
      stipend: "Certificate Only",
      skills: ["SEO", "Social Media", "Content Marketing"],
      posted: "1 week ago",
    },
    {
      id: 6,
      title: "Full Stack Development",
      company: "Software House",
      domain: "Web Development",
      duration: "12 weeks",
      type: "Paid",
      stipend: "PKR 25,000",
      skills: ["Node.js", "React", "MongoDB"],
      posted: "2 weeks ago",
    },
  ];

  const filteredInternships = internships.filter((internship) => {
    return (
      (filters.domain === "All" || internship.domain === filters.domain) &&
      (filters.duration === "All" ||
        internship.duration === filters.duration) &&
      (filters.type === "All" || internship.type === filters.type)
    );
  });

  return (
    <section
      className="py-16 bg-gray-50"
      data-name="internship-listings"
      data-file="Components/InternshipListings.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            {filteredInternships.length} Internships Available
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {filteredInternships.map((internship) => (
            <div
              key={internship.id}
              className="card hover:border-[#6366f1] border-2 bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{internship.title}</h3>
                  <div className="flex items-center space-x-2 text-[#6b7280] mb-2">
                    <div className="icon-building-2 text-sm"></div>
                    <span>{internship.company}</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  {internship.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {internship.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#e0e7ff] text-[#6366f1] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-[#6b7280] mb-4">
                <div className="flex items-center space-x-1">
                  <div className="icon-clock text-sm"></div>
                  <span>{internship.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="icon-dollar-sign text-sm"></div>
                  <span>{internship.stipend}</span>
                </div>
                <span>{internship.posted}</span>
              </div>
              <Btn className="w-full">Apply Now</Btn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
