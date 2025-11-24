import React from "react";
import { LuBriefcase, LuBuilding2, LuUsers } from "react-icons/lu";
import { IoLayersOutline } from "react-icons/io5";

function Stats() {
  const stats = [
    { number: "1000+", label: "Active Internships", icon: <LuBriefcase /> },
    { number: "500+", label: "Partner Companies", icon: <LuBuilding2 /> },
    { number: "10,000+", label: "Success Stories", icon: <LuUsers /> },
    { number: "50+", label: "Industry Sectors", icon: <IoLayersOutline /> },
  ];
  return (
    <section
      className="py-20 bg-[#6366f1] text-white"
      data-name="stats"
      data-file="components/Stats.js"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-indigo-200 font-semibold text-sm uppercase tracking-wide">
            Professional Development
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Launch Your Career with Internee.pk
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Pakistan's innovative platform for career growth and professional
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-[#8285f4] bg-opacity-20 mx-auto">
                <div className='text-2xl text-white'>{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-indigo-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
