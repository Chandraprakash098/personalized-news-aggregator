import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Import social media icons

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Made with 😍 by Chandra Prakash
          </p>
          <p className="text-sm mb-6">
            &copy; {new Date().getFullYear()} Chandra Prakash. All rights
            reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/chandra-prakash-062541248/ "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Chandraprakash098?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <div className="text-sm">
          <p>
            Contact me:{"  "}
            <a
              href="mailto:your-email@example.com"
              className="text-blue-400 hover:underline"
            >
              chandraprakash96386@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
