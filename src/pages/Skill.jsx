import React from "react";
import { DiMysql } from "react-icons/di";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiFlutter, SiDart, SiFirebase } from "react-icons/si";
import { MdApi } from "react-icons/md";

const skills = [
  {
    name: "FLUTTER",
    icon: <SiFlutter />,
    color: "text-blue-500",
  },
  {
    name: "Dart",
    icon: <SiDart />,
    color: "text-blue-500",
  },
  {
    name: "FIREBASE",
    icon: <SiFirebase />,
    color: "text-yellow-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "FIRE STORE",
     icon: <SiFirebase />,
    color: "text-yellow-400",
  },
  {
    name: "My SQL",
    icon: <DiMysql />,
    color: "text-green-600",
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-red-500",
  },
  {
    name: "API INTEGRATION",
    icon: <MdApi />,
    color: "text-red-500",
  },
  {
    name: "PLAY STORE",
    icon: <BiLogoPlayStore />,
    color: "text-red-500",
  },
];

const Skill = () => {
  return (
    <section className="py-12 bg-white text-black" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className={`text-4xl mb-3 ${skill.color}`}>{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
