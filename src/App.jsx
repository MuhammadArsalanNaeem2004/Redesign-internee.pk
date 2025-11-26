import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Features from "./Components/Features";
import TaskPortal from "./Components/TaskPortal";
import Instructor from "./Components/Instructor";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer";
import BlogApp from "./Components/BlogApp";
import HelpApp from "./Components/HelpApp";
import JobsApp from "./Components/JobsApp";
import RegisterApp from "./Components/RegisterApp";
import InternshipsApp from "./Components/InternshipsApp";
// import InstructorForm from "./Components/InstructorForm";
import InstructorApp from "./Components/InstructorApp";

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <TaskPortal />
      <Instructor />
      <Stats />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogApp />} />
          <Route path="/help" element={<HelpApp />} />
          <Route path="/jobs" element={<JobsApp />} />
          <Route path="/register" element={<RegisterApp />} />
          <Route path="/internshipapp" element={<InternshipsApp />} />
          <Route path="/InstructorApp" element={<InstructorApp />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
