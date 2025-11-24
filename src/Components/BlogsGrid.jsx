import React, { useState } from "react";
import CareerOne from "../assets/careerTips.jpg";
import TechTrend from "../assets/techTrends.jpg";
import Studentone from "../assets/studentStories.jpg";
import CareerTwo from "../assets/careerTipstwo.jpg";
import IndustriesIn from "../assets/industryInsights.jpg";
import StudentTwo from "../assets/studentStoriestwo.jpg";

export default function BlogsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Career Tips",
    "Tech Trends",
    "Student Stories",
    "Industry Insights",
  ];

  const articles = [
    {
      id: 1,
      title: "10 Tips for Landing Your First Tech Internship",
      excerpt:
        "Learn the essential strategies to stand out and secure your dream internship opportunity.",
      category: "Career Tips",
      author: "Sarah Ahmed",
      date: "Nov 20, 2025",
      readTime: "5 min read",
      image: CareerOne,
    },
    {
      id: 2,
      title: "The Future of Remote Internships in Pakistan",
      excerpt:
        "Exploring how virtual internships are transforming career opportunities for Pakistani students.",
      category: "Tech Trends",
      author: "Ali Khan",
      date: "Nov 18, 2025",
      readTime: "7 min read",
      image: TechTrend,
    },
    {
      id: 3,
      title: "From Intern to Full-Time: My Journey",
      excerpt:
        "A success story of how a virtual internship led to a full-time position at a leading tech company.",
      category: "Student Stories",
      author: "Fatima Hassan",
      date: "Nov 15, 2025",
      readTime: "6 min read",
      image: Studentone,
    },
    {
      id: 4,
      title: "Essential Skills Every Tech Intern Should Master",
      excerpt:
        "A comprehensive guide to the technical and soft skills that will set you apart.",
      category: "Career Tips",
      author: "Usman Malik",
      date: "Nov 12, 2025",
      readTime: "8 min read",
      image: CareerTwo,
    },
    {
      id: 5,
      title: "AI and Machine Learning: Top Internship Opportunities",
      excerpt:
        "Discover the hottest AI/ML internship positions and how to prepare for them.",
      category: "Industry Insights",
      author: "Ayesha Raza",
      date: "Nov 10, 2025",
      readTime: "6 min read",
      image: IndustriesIn,
    },
    {
      id: 6,
      title: "How I Built My Portfolio During My Internship",
      excerpt:
        "Practical tips on creating a standout portfolio that showcases your internship projects.",
      category: "Student Stories",
      author: "Hassan Ali",
      date: "Nov 8, 2025",
      readTime: "5 min read",
      image: StudentTwo,
    },
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <section className="py-16 bg-white" data-name="blog-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="card bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="p-5">
                <span className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {article.category}
                </span>

                <h3 className="text-xl font-bold mb-3 hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span>
                    {article.date} • {article.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
