import React from "react";
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skill from "./pages/Skill.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import footer from "./pages/Footer.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer />
    </>
  );
}

export default App;
