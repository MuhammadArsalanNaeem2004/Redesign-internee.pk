import React from "react";

export default function InternshipFilters({ filters, setFilters }) {
  const domains = [
    "All",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "UI/UX Design",
    "Digital Marketing",
  ];
  const durations = ["All", "4 weeks", "8 weeks", "12 weeks"];
  const types = ["All", "Paid", "Unpaid", "Performance-based"];

  return (
    <section
      className="py-8 bg-white sticky top-16 z-40 shadow-sm"
      data-name="internship-filters"
      data-file="Components/InternshipFilters.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4">
          <select
            value={filters.domain}
            onChange={(e) => setFilters({ ...filters, domain: e.target.value })}
            className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#6366f1] focus:outline-none"
          >
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>

          <select
            value={filters.duration}
            onChange={(e) =>
              setFilters({ ...filters, duration: e.target.value })
            }
            className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#6366f1] focus:outline-none"
          >
            {durations.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
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
        </div>
      </div>
    </section>
  );
}
