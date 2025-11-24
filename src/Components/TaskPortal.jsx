import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LuAward } from "react-icons/lu";
import { FiGitBranch } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import Btn from "./Btn";
import StartJourneyModal from "./StartJourneyModal";

function TaskPortal() {
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
  const benefits = [
    {
      icon: <IoCodeSlashOutline />,
      title: "Hands-on Industry Projects",
      description:
        "Gain practical experience through real-world projects that simulate actual industry scenarios.",
      features: [
        "Project-based learning",
        "Industry-standard practices",
        "Portfolio building",
      ],
    },
    {
      icon: <LuAward />,
      title: "Skill Verification System",
      description:
        "Each completed task adds to your verified skills portfolio.",
      features: [
        "Skill verification",
        "Progress tracking",
        "Achievement badges",
      ],
    },
    {
      icon: <FiGitBranch />,
      title: "SDLC Implementation",
      description:
        "Experience the complete Software Development Life Cycle through structured tasks.",
      features: ["Full lifecycle", "Best practices", "Real scenarios"],
    },
  ];
  return (
    <section
      id="tasks"
      className="py-20 bg-gray-50"
      data-name="task-portal"
      data-file="Components/TaskPortal.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-semibold text-sm uppercase tracking-wide">
            Task Management Platform
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Master Real-World Skills with Our Task Portal
          </h2>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
            Transform theoretical knowledge into practical expertise through our
            comprehensive task portal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-[#e0e7ff]">
                <div className="text-3xl text-[#6366f1]">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-[#6b7280] mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-[#6b7280]"
                  >
                    <div className="text-sm text-green-600 mr-2">
                      <FaCheck />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Btn onClick={() => setIsModalOpen(true)} className="btn-primary">
            Start Your Journey Now
          </Btn>
        </div>

        <StartJourneyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Start Your Journey"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name
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
              <label className="block text-sm font-semibold mb-2">Email</label>
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
              <label className="block text-sm font-semibold mb-2">Phone</label>
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
    </section>
  );
}

export default TaskPortal;
