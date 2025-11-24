import React from "react";
import Btn from "./Btn";
import { LuBuilding2, LuMapPin, LuClock } from "react-icons/lu";

function JobListings({ filters }) {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Karachi",
      type: "Full-time",
      category: "Development",
      salary: "PKR 80K - 120K",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Lahore",
      type: "Full-time",
      category: "Design",
      salary: "PKR 70K - 100K",
      posted: "3 days ago",
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      company: "Marketing Pro",
      location: "Remote",
      type: "Part-time",
      category: "Marketing",
      salary: "PKR 50K - 80K",
      posted: "5 days ago",
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Code Labs",
      location: "Islamabad",
      type: "Full-time",
      category: "Development",
      salary: "PKR 90K - 140K",
      posted: "1 week ago",
    },
    {
      id: 5,
      title: "Sales Manager",
      company: "Business Growth",
      location: "Karachi",
      type: "Full-time",
      category: "Sales",
      salary: "PKR 100K - 150K",
      posted: "1 week ago",
    },
    {
      id: 6,
      title: "Graphic Designer",
      company: "Design Hub",
      location: "Remote",
      type: "Contract",
      category: "Design",
      salary: "PKR 60K - 90K",
      posted: "2 weeks ago",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.location === "All" || job.location === filters.location) &&
      (filters.type === "All" || job.type === filters.type) &&
      (filters.category === "All" || job.category === filters.category)
    );
  });

  return (
    <section
      className="py-16 bg-gray-50"
      data-name="job-listings"
      data-file="components/JobListings.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            {filteredJobs.length} Jobs Found
          </h2>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="card hover:border-[#6366f1] border-2 bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>

                  <div className="flex flex-wrap gap-4 text-sm text-[#6b7280] mb-3">
                    <div className="flex items-center space-x-1">
                      <div className="text-sm">
                        <LuBuilding2 />
                      </div>
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="text-sm">
                        <LuMapPin />
                      </div>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="text-sm">
                        <LuClock />
                      </div>
                      <span>{job.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#e0e7ff] text-[#6366f1] rounded-full text-sm font-semibold">
                      {job.category}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {job.salary}
                    </span>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-6">
                  <Btn className="btn-primary w-full md:w-auto">Apply Now</Btn>
                  <p className="text-sm text-[#6b7280] mt-2 text-center">
                    {job.posted}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobListings;
