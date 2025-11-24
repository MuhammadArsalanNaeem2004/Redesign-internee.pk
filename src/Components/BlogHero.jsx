import React from "react";

export default function BlogHero() {
  return (
    <section
      className="bg-linear-to-br from-[#6366f1] to-indigo-700 text-white py-16"
      data-name="blog-hero"
      data-file="components/BlogHero.js"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Discover insights, tips, and stories about internships, career
            development, and the tech industry
          </p>
        </div>
      </div>
    </section>
  );
}
