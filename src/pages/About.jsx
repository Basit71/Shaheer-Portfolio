import React from "react";

function About() {
  const experience = [
    {
      role: "App Developer",
      company: "Arch Technologies",
      duration: "April 2026 – Present",
      description:
        "Currently working on building and improving modern applications while continuously enhancing skills and experience.",
    },
    {
      role: "Mobile Application Developer",
      company: "SaiKet Systems",
      duration: "Feb 2025 – May 2025",
      description:
        "Worked on cross-platform mobile apps using Flutter, focusing on UI design, backend integration, and performance optimization. Improved boilerplate project structure, code reusability, and state management.",
    },
    {
      role: "Mobile Application Developer",
      company: "CodeAlpha",
      duration: "Oct 2024 – Dec 2024",
      description:
        "Developed Android applications using Flutter & Dart. Collaborated with team to design user-friendly UI and implement core features.",
    },
    {
      role: "Mobile Application Developer",
      company: "ZafixTech",
      duration: "Oct 2024 – Nov 2024",
      description:
        "Worked on short-term mobile projects. Developed features for KP Travel App including hotel booking, budget recommendations, and travel guidance for KPK tourists.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 text-black" id="about">
      <div className="max-w-5xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center mb-10">
          Experience
        </h2>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>

              <p className="text-gray-600 text-sm">
                {exp.company} • {exp.duration}
              </p>

              <p className="mt-2 text-gray-700">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
