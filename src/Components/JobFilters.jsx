import React from "react";

function JobFilters({ filters, setFilters }) {
  const locations = ["All", "Karachi", "Lahore", "Islamabad", "Remote"];
  const types = ["All", "Full-time", "Part-time", "Contract"];
  const categories = ["All", "Development", "Design", "Marketing", "Sales"];

  return (
    <section
      className="py-8 bg-white sticky top-16 z-40 shadow-sm"
      data-name="job-filters"
      data-file="components/JobFilters.js"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4">
          <select
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
            className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#6366f1)] focus:outline-none"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#6366f1] focus:outline-none"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
            className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#6366f1] focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

export default JobFilters;
