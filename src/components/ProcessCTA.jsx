import React from "react";
import FramerArrow from "./FramerArrow";
import { NavLink } from "react-router";

export const ProcessCTA = () => {
  return (
    <>
      <div className="bg-[#F8F8F8] text-black px-4 sm:px-10 lg:px-20 py-10 mt-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-center font-heading font-semibold text-4xl sm:text-3xl lg:text-4xl">
            Have an Idea?
          </h1>

          <p className="text-center text-lg font-sans font-normal max-w-3xl">
            Let’s turn it into something real. Contact us to collaborate,
            explore possibilities, and build solutions that make a lasting
            impact.
          </p>

          <NavLink to="/contact">
            <button className="cursor-pointer group inline-flex items-center gap-2 rounded-full bg-[#23378C] mt-3 mb-5 px-8 py-3 text-[15px] font-sans font-semibold text-white transition-colors hover:bg-black border-0">
              Get Started
              <FramerArrow />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
