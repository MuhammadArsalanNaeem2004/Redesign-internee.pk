import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function SearchHelp() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section
      className="py-8 bg-white -mt-8 relative z-10"
      data-name="search-help"
      data-file="Components/SearchHelp.jsx"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <div className="text-xl text-[#6b7280]"><IoSearchOutline/></div>
          </div>
          <input
            type="text"
            placeholder="Search for help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#6366f1] focus:outline-none text-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default SearchHelp;
