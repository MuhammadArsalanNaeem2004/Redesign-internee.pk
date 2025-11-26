import React, { useState, useEffect } from "react";
import graduationCap from "../assets/graduationCap.png";
import Btn from "./Btn";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";


function Header() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={graduationCap}
              alt="Graduation Cap"
              className="w-9 h-9 object-contain rounded-lg"
            />
            <span className="text-2xl font-bold text-[#6366f1]">
              Internee.pk
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/InstructorApp">
              Instructor
            </Link>
            <button
              onClick={() => goToSection("instructor")}
              className="nav-link"
            >
              Teach
            </button>
            <Link className="nav-link" to="/internshipapp">
              Internships
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link" to="/help">
              Help
            </Link>

            <Btn
              className="px-6 py-2 rounded-lg bg-[#6366f1] text-white hover:bg-[#4f46e5] transition shadow-md"
              onClick={() => navigate("/blog")}
            >
              Get Started
            </Btn>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
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
          <div className="md:hidden mt-3 bg-white rounded-xl shadow-lg p-4 space-y-3 animate-fade-in">
            <Link
              className="mobile-link"
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <button
              className="mobile-link"
              onClick={() => goToSection("internships")}
            >
              Internships
            </button>

            <button
              className="mobile-link"
              onClick={() => goToSection("tasks")}
            >
              Tasks
            </button>

            <button
              className="mobile-link"
              onClick={() => goToSection("instructor")}
            >
              Teach
            </button>

            <Link
              className="mobile-link"
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link className="mobile-link" to="/help">
              Help
            </Link>

            <Btn
              className="w-full py-3 rounded-lg bg-[#6366f1] text-white hover:bg-[#4f46e5] transition"
              onClick={() => navigate("/blog")}
            >
              Get Started
            </Btn>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
