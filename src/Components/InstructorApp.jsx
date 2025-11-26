import React from "react";
import InstructorHero from "./InstructorHero";
import InstructorBenefits from "./InstructorBenefits";
import InstructorProcess from "./InstructorProcess";
import InstructorForm from "./InstructorForm";

function InstructorApp() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      id="InstructorApp"
      className="min-h-screen bg-gray-50"
      data-name="instructor-app"
      data-file="InstructorApp.jsx"
    >
      <InstructorHero />
      <InstructorBenefits />
      <InstructorProcess />
      <InstructorForm />
    </div>
  );
}

export default InstructorApp;
