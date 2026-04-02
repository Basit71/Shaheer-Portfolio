
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer  className="  text-black py-8" id="footer">
      <div id="contact" className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-2xl font-semibold mb-6">
           Contact-Info
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-400" />
            <span className="text-sm md:text-base">
              +92 3338738974 {/* replace with your number */}
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-red-400" />
            <span className="text-sm md:text-base">
             Itxshaheer56@gmail.com {/* replace with your email */}
            </span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-shaheer-ali-61aa6535b" // replace
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaLinkedin />
            <span className="text-sm md:text-base">
              LinkedIn
            </span>
          </a>

        </div>

        {/* Bottom line */}
        <p className="mt-6 text-gray-400 text-sm">
          © {new Date().getFullYear()} Muhammad Shaheer Ali . All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

