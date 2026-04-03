import React from "react";
import img from "../assets/profile.jpg";
function Home() {
  return (
    <>
      <div
        id="home"
        className="relative z-10 h-screen flex flex-col md:flex-row items-center justify-between px-10"
      >
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-7xl font-bold mb-4 text-blue-500 ">
            Flutter Developer & AI Enthusiast
          </h1>
          <p className=" md:text-xl  ">
            Designing and developing high-quality Flutter apps with robust
            Python backends and AI-driven innovation, I focus on delivering
            seamless digital experiences that are both visually engaging and
            highly performant.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={img}
            alt="profile"
            className="  w-64 h-94 md:w-80 md:h-100 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
