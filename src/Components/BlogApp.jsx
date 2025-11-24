import React from "react";
import BlogHero from "./BlogHero";
import BlogsGrid from "./BlogsGrid";

export default function BlogApp() {
  return (
    <section id="blog">
      <BlogHero />
      <BlogsGrid />
    </section>
  );
}
