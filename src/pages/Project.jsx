import React from "react";
import { projects } from "./data.js";

function Project() {
  return (
    <div
      id="projects"
      className="scroll-mt-24 mx-auto max-w-6xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          {/* Image */}
          <div className="w-full h-46 overflow-hidden rounded-t-2xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col justify-between h-65">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-500 text-sm h-20">
                {item.description || "A brief description about the project."}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-4">
              <a
                href={item.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
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