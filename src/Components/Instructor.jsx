import React from "react";
import { FiUpload, FiDollarSign } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoTrendingUpOutline } from "react-icons/io5";
import Btn from "./Btn";
import StartJourneyModal from "./StartJourneyModal";

function Instructor() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you soon.");
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const instructorBenefits = [
    {
      icon: <FiUpload />,
      title: "Upload Tutorials & Exercises",
      description:
        "Share tutorials, exercises, and projects. Help others learn while you grow.",
    },
    {
      icon: <FiDollarSign />,
      title: "Earn from Your Expertise",
      description:
        "Tech creators and instructors can earn passive income by sharing their knowledge.",
    },
    {
      icon: <HiOutlineUserCircle />,
      title: "Build Your Instructor Profile",
      description:
        "Become a trusted voice and build your personal brand in the online learning space.",
    },
    {
      icon: <IoTrendingUpOutline />,
      title: "Fair Revenue Sharing",
      description:
        "We keep it transparent. Benefit from a fair model that pays you well.",
    },
  ];
  return (
    <section
      id="instructor"
      className="py-20 bg-linear-to-br from-indigo-50 to-purple-50"
      data-name="instructor"
      data-file="Components/Instructor.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Tech Instructor or Content Creator?
          </h2>
          <p className="text-xl text-[#6b7280] mb-6">
            Create in Your Native Language & Start Earning
          </p>
          <div>
            <Btn onClick={() => setIsModalOpen(true)} className="btn-primary">
              Become an Instructor
            </Btn>
            <StartJourneyModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Become An Instructor"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Enter Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Enter Your Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
                    placeholder="Enter your phone"
                  />
                </div>

                <Btn type="submit" className="btn-primary w-full">
                  Submit
                </Btn>
              </form>
            </StartJourneyModal>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructorBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-[#e0e7ff]">
                <div className=" text-2xl text-[#6366f1]">{benefit.icon}</div>
              </div>
              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-[#6b7280] mb-4">{benefit.description}</p>
              <a
                href="#"
                className="text-[#6366f1] font-semibold text-sm hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructor;
