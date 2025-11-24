import React from "react";
import { FaSearch } from "react-icons/fa";

function JobsHero() {
  return (
    <section
      className="bg-linear-to-br from-[#6366f1] to-indigo-700 text-white py-16"
      data-name="jobs-hero"
      data-file="Components/JobsHero.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Dream Job
          </h1>

          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Explore exciting career opportunities at leading tech companies
            across Pakistan
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative bg-[#f9fafb] border-2 border-gray-200 rounded-2xl hover:border-[#6366f1] transition-all duration-300 shadow-sm">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="text-xl text-gray-400">
                  <FaSearch />
                </div>
              </div>

              <input
                type="text"
                placeholder="Search jobs by title, company, or skills..."
                className="w-full pl-12 pr-4 py-4 bg-transparent rounded-2xl text-[#1f2937] focus:outline-none text-lg placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobsHero;
