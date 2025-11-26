import React from "react";
import BlogHero from "./BlogHero";
import BlogsGrid from "./BlogsGrid";

export default function BlogApp() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="blog">
      <BlogHero />
      <BlogsGrid />
    </section>
  );
}
