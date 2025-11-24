import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";

function HelpHero() {
  return (
    <section
      className="bg-linear-to-br from-[#6366f1] to-indigo-700 text-white py-16"
      data-name="help-hero"
      data-file="Components/HelpHero.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-[#6366f1] bg-opacity-20 mx-auto">
            <div className=" text-4xl text-[white]"><IoIosHelpCircleOutline/></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Help Center</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Find answers to your questions and get the support you need
          </p>
        </div>
      </div>
    </section>
  );
}

export default HelpHero;
