import React from "react";
import { CiDollar, CiGlobe } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { MdFileUpload } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { FiAward } from "react-icons/fi";

export default function InstructorBenefits() {
  const benefits = [
    {
      icon: CiDollar,
      title: "Earn Passive Income",
      description:
        "Generate revenue from your tutorials and courses with our fair revenue sharing model",
    },
    {
      icon: LuUsers,
      title: "Build Your Audience",
      description:
        "Reach thousands of eager learners and build your personal brand",
    },
    {
      icon: MdFileUpload,
      title: "Flexible Content Creation",
      description: "Upload tutorials, exercises, and projects at your own pace",
    },
    {
      icon: CiGlobe,
      title: "Teach in Your Language",
      description:
        "Create content in your native language and connect with local learners",
    },
    {
      icon: IoIosTrendingUp,
      title: "Track Your Growth",
      description:
        "Monitor your earnings, student engagement, and course performance",
    },
    {
      icon: FiAward,
      title: "Recognition & Credibility",
      description: "Establish yourself as a trusted expert in your field",
    },
  ];

  return (
    <section
      className="py-20 bg-white"
      data-name="instructor-benefits"
      data-file="Components/InstructorBenefits.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Teach with Internee.pk?
          </h2>
          <p className="text-xl text-[#6b7280]">
            Join our community of instructors and make an impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-green-100 mx-auto">
                  <Icon className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-[#6b7280]">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
