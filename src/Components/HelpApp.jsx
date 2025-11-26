import React from "react";
import HelpHero from "./HelpHero";
import SearchHelp from "./SearchHelp";
import HelpCategories from "./HelpCategories";
import FAQ from "./FAQ";
import ContactSupp from "./ContactSupp";

function HelpApp() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      className="min-h-screen bg-gray-50"
      id="help"
      data-name="help-app"
      data-file="HelpApp.jsx"
    >
      <HelpHero />
      <SearchHelp />
      <HelpCategories />
      <FAQ />
      <ContactSupp />
    </section>
  );
}

export default HelpApp;
