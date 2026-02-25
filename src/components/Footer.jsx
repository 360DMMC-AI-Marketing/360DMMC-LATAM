// Import necessary tools from React and other libraries
import React from "react";
import { NavLink } from "react-router"; // For navigation links
import { ArrowUpRight } from "lucide-react"; // Icon component
import DMMCLogoBGwTag from "../assets/logoFiles/DMMCLogoBGwTag.png"; // Company logo

// Main Footer component - this is what gets displayed on the page
const Footer = () => {
  return (
    // Main footer container with styling
    // max-w-[1600px] limits width on large screens
    // mx-auto centers the content horizontally on large screens
    <footer className="bg-white text-black px-4 sm:px-10 md:px-20 pt-20 pb-5 max-w-[1600px] mx-auto">
      {/* Container that holds all three sections */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-16 max-sm:items-start max-sm:gap-8">
        {/* LEFT SECTION - Logo and description */}
        <aside className="max-w-md max-sm:w-full">
          {/* Company logo */}
          <img src={DMMCLogoBGwTag} alt="360DMMC logo" className="w-50 mb-3" />
          {/* Company description text */}
          <p className="text-xl font-sans font-medium sm:text-xl mb-5">
            Empowering small and medium businesses with AI-driven
            transformation, strategic marketing, and custom technology
            solutions.
          </p>
        </aside>

        {/* MIDDLE SECTION - Navigation links in 2x2 grid */}
        <div className="flex items-center justify-center gap-25 max-sm:flex-col max-sm:items-start max-sm:w-full max-sm:gap-12">
          <nav className="grid grid-cols-2 gap-x-25 gap-y-5 max-sm:flex max-sm:flex-col max-sm:gap-3 max-sm:w-full">
            {/* Services link */}
            <NavLink
              to="/services"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover text-xl sm:text-xl cursor-pointer"
            >
              Services
            </NavLink>

            {/* About link */}
            <NavLink
              to="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover text-xl sm:text-xl cursor-pointer"
            >
              About
            </NavLink>

            {/* Careers link */}
            <NavLink
              to="/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover text-xl sm:text-xl cursor-pointer"
            >
              Careers
            </NavLink>

            {/* Process link */}
            <NavLink
              to="/process"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover text-xl sm:text-xl cursor-pointer"
            >
              Process
            </NavLink>
          </nav>

          {/* RIGHT SECTION - Social media links */}
          <nav className="flex flex-col gap-3 max-sm:w-full max-sm:mb-5">
            {/* Facebook link with divider */}
            <div>
              <NavLink
                to="https://www.facebook.com/61568610867692/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-xl sm:text-xl flex items-center justify-between gap-15 px-2 group"
              >
                Facebook
                {/* Arrow icon that animates on hover - moves down and rotates */}
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-y-2 group-hover:rotate-45"
                />
              </NavLink>
              {/* Horizontal line separator */}
              <hr className="border-[#222222]/25" />
            </div>

            {/* LinkedIn link with divider */}
            <div>
              <NavLink
                to="https://www.linkedin.com/company/360dmmc"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-xl sm:text-xl flex items-center justify-between gap-15 px-2 group"
              >
                LinkedIn
                {/* Arrow icon that animates on hover - moves down and rotates */}
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-y-2 group-hover:rotate-45"
                />
              </NavLink>
              {/* Horizontal line separator */}
              <hr className="border-[#222222]/25" />
            </div>
          </nav>
        </div>
      </div>

      {/* Legal bar — policy links + copyright */}
      <div className=" mt-5 pt-5 border-t border-[#222222]/15 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-700">
          © {new Date().getFullYear()} 360DMMC Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <NavLink
            to="/privacy-policy"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/messaging-policy"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Messaging Policy
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

// Export the Footer so it can be used in other files
export default Footer;
