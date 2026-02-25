import { User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import FramerArrow from "./FramerArrow";

export const AboutUs = () => {
  return (
    <>
      <div className="bg-white w-full px-4 sm:px-10 lg:px-20 pt-16 pb-20">
        {/* Top pill */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
            <span className="flex h-6 w-6 items-center justify-center  p-1">
              <User className="text-orange-500" size={20} />
            </span>
            <p className="font-sans text-[16px]">About Us</p>
          </div>
        </div>

        {/* Content */}
        <div
          data-aos="fade-up"
          delay="50000"
          className="flex flex-col items-center justify-center text-center"
        >
          <h1 className="font-heading font-semibold text-4xl sm:text-3xl lg:text-4xl mb-5 max-w-4xl">
            Think of us as your AI transformation team{" "}
            <br className="hidden sm:block" /> without adding another full-time
            headcount
          </h1>

          <p className="text-lg font-sans font-normal mb-8 max-w-3xl">
            We are an AI-first consulting agency focused on making AI practical,
            profitable, <br className="hidden sm:block" /> and operationally
            reliable. Our goal is to simplify not overwhelm you.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-8 lg:gap-20 mb-5 bg-gray-100 rounded-3xl shadow-sm p-12 max-w-[1600px]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[#23378C] font-heading text-2xl lg:text-3xl">
                85%
              </h1>
              <p className="text-base lg:text-lg font-sans font-semibold text-center">
                Time Saved on <br />
                Manual Tasks
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[#23378C] font-heading text-2xl lg:text-3xl">
                3x
              </h1>
              <p className="text-base lg:text-lg font-sans font-semibold text-center">
                Faster Content <br />
                Production
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[#23378C] font-heading text-2xl lg:text-3xl">
                24/7
              </h1>
              <p className="text-base lg:text-lg font-sans font-semibold text-center">
                Customer Support <br />
                Availability
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[#23378C] font-heading text-2xl lg:text-3xl">
                ROI+
              </h1>
              <p className="text-base lg:text-lg font-sans font-semibold text-center">
                Measurable <br />
                Business Growth
              </p>
            </div>
          </div>

          {/* CTA */}
          <NavLink to="/contact">
            <button className="cursor-pointer group inline-flex items-center gap-2 rounded-full bg-[#23378C] px-8 py-3 text-[15px] font-sans font-semibold text-white transition-colors hover:bg-black border-0">
              Get Started
              <FramerArrow />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
