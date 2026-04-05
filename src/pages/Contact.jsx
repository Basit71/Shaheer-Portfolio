import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="pt-20 max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold mb-6">Contact-Info</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-green-400" />
          <span>+92 3338738974</span>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-red-400" />
          <span>Itxshaheer56@gmail.com</span>
        </div>

        <a
          href="https://www.linkedin.com/in/muhammad-shaheer-ali-61aa6535b"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

      </div>

      <p className="mt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Muhammad Shaheer Ali. All rights reserved.
      </p>
    </div>
  );
}

export default Contact;