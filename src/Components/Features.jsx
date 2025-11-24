import React from "react";
import { FiBriefcase, FiUsers } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import { IoLayersOutline } from "react-icons/io5";

function Features() {
  const features = [
    {
      icon: <FiBriefcase />,
      title: "Active Internships",
      description:
        "Access to 1000+ active virtual internship opportunities across various tech domains",
    },
    {
      icon: <FiUsers />,
      title: "Partner Companies",
      description:
        "Connect with 500+ leading companies looking for talented interns",
    },
    {
      icon: <GoTrophy />,
      title: "Success Stories",
      description:
        "Join 10,000+ students who launched their careers through our platform",
    },
    {
      icon: <IoLayersOutline />,
      title: "Industry Sectors",
      description:
        "Explore opportunities across 50+ different industry sectors",
    },
  ];

  return (
    <section
      id="internships"
      className="py-20 bg-gray-50"
      data-name="features"
      data-file="Components/Features.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-semibold text-sm uppercase tracking-wide">
            Trending
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Explore Internship Opportunities
          </h2>
          <p className="text-xl text-[#6b7280]">
            Your Dream Internship is Just One Click Away!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card text-center bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-[#e0e7ff] mx-auto">
                <div className="text-2xl text-[#6366f1]">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-[#6b7280]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
