import React, { useState } from "react";
import graduationCap from "../assets/graduationCap.png";
import Btn from "./Btn";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src={graduationCap}
              alt="Graduation Cap"
              className="w-8 h-8 object-contain rounded-lg cursor-pointer"
              onClick={() => navigate("/")}
            />
            <span
              className="text-2xl font-bold cursor-pointer text-[#6366f1]"
              onClick={() => navigate("/")}
            >
              Internee.pk
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#212a38] hover:text-[#6366f1]">
              Home
            </Link>

            <button
              onClick={() => goToSection("internships")}
              className="hover:text-[#6366f1]"
            >
              Internships
            </button>

            <button
              onClick={() => goToSection("tasks")}
              className="hover:text-[#6366f1]"
            >
              Tasks
            </button>

            <button
              onClick={() => goToSection("instructor")}
              className="hover:text-[#6366f1]"
            >
              Teach
            </button>

            <Link to="/blog" className="text-[#212a38] hover:text-[#6366f1]">
              Blog
            </Link>
            <Link
              to="/help"
              className="text-[#212a38] hover:text-[#6366f1] transition"
            >
              Help
            </Link>

            <Btn className="text-lg" onClick={() => navigate("/blog")}>
              Get Started
            </Btn>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1 grid grid-cols-1">
            <Link
              className="hover:text-[#6366f1] "
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="flex flex-col space-y-1 items-start">
              <button
                className="hover:text-[#6366f1] "
                onClick={() => goToSection("internships")}
              >
                Internships
              </button>
              <button
                className="hover:text-[#6366f1] "
                onClick={() => goToSection("tasks")}
              >
                Tasks
              </button>
              <button
                className="hover:text-[#6366f1] "
                onClick={() => goToSection("instructor")}
              >
                Teach
              </button>
            </div>
            <Link
              className="hover:text-[#6366f1] "
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/help"
              className="text-[#212a38] hover:text-[#6366f1] transition"
            >
              Help
            </Link>
            <Btn className="text-lg" onClick={() => navigate("/blog")}>
              Get Started
            </Btn>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
