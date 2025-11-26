import React from "react";
import InternshipsHero from "./InternshipsHero";
import InternshipFilters from "./InternshipFilters";
import InternshipListings from "./InternshipListings";

export default function InternshipsApp() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [filters, setFilters] = React.useState({
    domain: "All",
    duration: "All",
    type: "All",
  });

  return (
    <div
      id="#internshipapp"
      className="min-h-screen bg-gray-50"
      data-name="internships-app"
      data-file="InternshipsApp.jsx"
    >
      <InternshipsHero />
      <InternshipFilters filters={filters} setFilters={setFilters} />
      <InternshipListings filters={filters} />
    </div>
  );
}
