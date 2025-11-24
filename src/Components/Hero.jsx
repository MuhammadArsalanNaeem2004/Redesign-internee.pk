import React from "react";
import { useNavigate } from "react-router-dom"; 
import heroPic from "../assets/hero.jpg";

function Hero() {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="relative bg-linear-to-br from-[#6366f1] to-indigo-700 text-white py-20 overflow-hidden"
      data-name="hero"
      data-file="Components/Hero.jsx"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-block bg-[#f59e0b] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🏆 Google Cloud for Startup 2024 Winner
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Looking for Dream Internship?
            </h1>

            <p className="text-xl mb-8 text-indigo-100">
              Internee.pk kickstart students' tech careers with first
              internships, providing industry exposure, practical skills, and
              networking opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const section = document.getElementById("internships");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-[#6366f1]
 transition"
              >
                Explore Internships
              </button>

              <button
                onClick={() => navigate("/jobs")}
                className="px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-[#6366f1] transition"
              >
                Our Job Portal
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <img
              src={heroPic}
              alt="Team collaboration illustration"
              className="rounded-2xl shadow-2xl w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
