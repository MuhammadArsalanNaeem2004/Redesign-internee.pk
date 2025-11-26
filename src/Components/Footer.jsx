import React from "react";
import graduationCap from "../assets/graduationCap.png";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      className="bg-gray-900 text-gray-300 py-12"
      data-name="footer"
      data-file="Components/Footer.js"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={graduationCap}
                alt="Graduation Cap"
                className="w-10 h-10 object-contain rounded-lg cursor-pointer"
              />
              <span
                className="text-2xl font-bold cursor-pointer text-[#fdfdfd]"
                onClick={() => navigate("/")}
              >
                Internee.pk
              </span>
            </div>
            <p className="text-sm">
              Pakistan's leading virtual internship platform helping students
              kickstart their tech careers.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/internshipapp"
                  className="hover:text-white transition-colors"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  to="/InstructorApp"
                  className="hover:text-white transition-colors"
                >
                  Instructor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/jobs" className="hover:text-white transition-colors">
                  Jobs Portal
                </Link>
              </li>
              <li></li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/internee.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6366f1] transition-colors"
              >
                <div className="icon-facebook text-lg">
                  <FiFacebook />
                </div>
              </a>

              <a
                href="https://x.com/interneepk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6366f1] transition-colors"
              >
                <div className="icon-twitter text-lg">
                  <FiTwitter />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/internee-pk/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6366f1] transition-colors"
              >
                <div className="icon-linkedin text-lg">
                  <FiLinkedin />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 Internee.pk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
