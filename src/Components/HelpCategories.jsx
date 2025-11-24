import React from "react";
import { FiUserPlus, FiBriefcase } from "react-icons/fi";
import { LuListChecks, LuGraduationCap } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";

function HelpCategories() {
  const categories = [
    {
      icon: <FiUserPlus />,
      title: "Getting Started",
      description: "Learn how to create an account and get started",
      articles: 12,
    },
    {
      icon: <FiBriefcase />,
      title: "Internships",
      description: "Everything about applying and managing internships",
      articles: 18,
    },
    {
      icon: <LuListChecks />,
      title: "Tasks & Projects",
      description: "How to complete tasks and submit projects",
      articles: 15,
    },
    {
      icon: <LuGraduationCap />,
      title: "Learning Platform",
      description: "Access courses and learning materials",
      articles: 10,
    },
    {
      icon: <CiCreditCard1 />,
      title: "Payments & Billing",
      description: "Information about payments and subscriptions",
      articles: 8,
    },
    {
      icon: <IoShieldOutline />,
      title: "Account & Security",
      description: "Manage your account settings and security",
      articles: 14,
    },
  ];

  return (
    <section
      className="py-16 bg-gray-50"
      data-name="help-categories"
      data-file="Components/HelpCategories.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Browse by Category
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-[#e0e7ff]">
                <div className="text-xl text-[#6366f1]"> {category.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-[#6b7280] mb-3">{category.description}</p>
              <span className="text-sm text-[#6366f1] font-semibold">
                {category.articles} articles
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HelpCategories;
