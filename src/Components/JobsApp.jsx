import React from "react";
import JobsHero from "./JobsHero";
import JobFilters from "./JobFilters";
import JobListings from "./JobListings";

function JobsApp() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filters, setFilters] = React.useState({
    location: "All",
    type: "All",
    category: "All",
  });

  return (
    <div
      id="jobs"
      className="min-h-screen bg-gray-50"
      data-name="jobs-app"
      data-file="jobs-app.js"
    >
      <JobsHero />
      <JobFilters filters={filters} setFilters={setFilters} />
      <JobListings filters={filters} />
    </div>
  );
}

export default JobsApp;
