import { Workflow } from "lucide-react";
import React from "react";

export const HeroProcess = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        delay="50000"
        className="w-full bg-white px-4 pt-16 pb-10"
      >
        <div className="mx-auto max-w-6xl text-center">
          {/* Top pill */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
              <span className="flex h-6 w-6 items-center justify-center  p-1">
                <Workflow className="text-orange-500" size={20} />
              </span>
              <p className="font-sans text-[16px]">Our Process</p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mx-auto font-heading font-extrabold text-[64px] max-sm:text-4xl max-sm:mx-5 leading-tight text-black">
            From Strategy to <br /> Implementation
          </h1>

          {/* Description */}
          <p className="font-sans font-medium mx-auto my-6  max-sm:my-3 max-w-3xl text-xl sm:text-[18px] leading-relaxed text-black/70">
            A collaborative, transparent approach to AI integration{" "}
            <br className="max-sm:hidden" /> that ensures success every step of
            the way.
          </p>
        </div>
      </div>
    </>
  );
};
