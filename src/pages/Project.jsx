import React from "react";
import projects from "../pages/data.json"; 

function Project() {
  return (
    <div
      id="projects"
      className="scroll-mt-24 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 max-w-6xl"
    >
      {projects.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          style={{ width: "220px", height: "320px" }}
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-37.5 object-cover"
          />

          {/* Content */}
          <div className="p-3 flex flex-col justify-between h-32.5">
            <div>
              <h2 className="text-base font-semibold text-gray-800">
                {item.name}
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-3">
              <a
                href={item.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-200 text-black text-xs rounded-md hover:bg-gray-300"
              >
                GitHub
              </a>

              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-black text-white text-xs rounded-md hover:bg-gray-800"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
