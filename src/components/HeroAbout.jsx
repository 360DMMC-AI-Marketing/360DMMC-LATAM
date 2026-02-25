import { Settings } from "lucide-react";
import React from "react";

export const HeroAbout = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        delay="50000"
        className="w-full bg-white px-4 pt-16 pb-20"
      >
        <div className="mx-auto max-w-6xl text-center">
          {/* Top pill */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
              <span className="flex h-6 w-6 items-center justify-center  p-1">
                <Settings className="text-orange-500" size={20} />
              </span>
              <p className="font-sans text-[16px]">Who We Are</p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mx-auto font-heading font-extrabold text-[64px] max-sm:text-4xl max-sm:mx-5 font-extrabold leading-tight text-black">
            Our goal is to simplify - not overwhelm you.
          </h1>

          {/* Description */}
          <p className="font-sans font-medium mx-auto my-6 max-w-3xl text-xl sm:text-[18px] leading-relaxed text-black/70">
            360DMMC is a leading digital technology consulting agency that helps
            businesses thrive in the AI era. We combine innovative AI solutions
            with strategic expertise to deliver transformative results for small
            and medium-sized businesses.
          </p>
        </div>
      </div>
    </>
  );
};
