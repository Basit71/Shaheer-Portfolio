import React from "react";
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skill from "./pages/Skill.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
