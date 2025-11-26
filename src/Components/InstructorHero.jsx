import React from "react";
import { LuGraduationCap } from "react-icons/lu";

export default function InstructorHero() {
  return (
    <section
      className="bg-linear-to-br from-[#6366f1] to-indigo-700 text-white py-20"
      data-name="instructor-hero"
      data-file="Components/InstructorHero.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-white bg-opacity-20 mx-auto">
            <div className="icon-graduation-cap text-4xl text-[#6366f1]">
              <LuGraduationCap />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Become an Instructor
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Share your expertise, inspire learners, and earn income by creating
            content in your native language
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#apply"
              className="px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-[#6366f1]
 transition "
            >
              Start Teaching Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
