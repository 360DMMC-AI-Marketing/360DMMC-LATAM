import { Settings, CheckCircle2, Eye } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { BadgeCheck, UserRound, Zap, Sun } from "lucide-react";
import FramerArrow from "./FramerArrow";
import { NavLink } from "react-router";

/* ---------------- Sticky Card ---------------- */

const StickyServiceCard = ({ i, title, description, icon: Icon }) => {
  const container = useRef(null);

  return (
    <div
      ref={container}
      className="
  sticky flex items-center justify-end pt-20 mb-5 h-[250px]
  max-sm:static max-sm:pt-0 max-sm:justify-start max-sm:h-auto
"
      style={{
        top: `${i * 25}px`,
      }}
    >
      <div
        className="
          flex h-[250px] w-[450px] origin-top flex-col overflow-hidden
          rounded-3xl border border-[#222222]/25 bg-white p-8
          max-sm:w-full max-sm:h-auto max-sm:mb-5
        "
      >
        {/* Title */}
        <div className="mb-3 flex items-center gap-3">
          {Icon && (
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400">
              <Icon className="h-4 w-4 text-white" />
            </span>
          )}
          <h3 className="text-2xl font-bold text-[#222222] max-sm:text-lg">
            {title}
          </h3>
        </div>

        {/* description */}
        <div>
          <p className="text-sm font-sans font-normal py-2 text-[#222222]/90 mt-3 mb-3 text-wrap ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const VisionSection = () => {
  const [vision, setVision] = useState([]);
  const container = useRef(null);

  const iconMap = {
    user: UserRound,
    badge: BadgeCheck,
    zap: Zap,
    sun: Sun,
  };

  useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    fetch("/vision.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("VISION DATA:", data);
        setVision(data.vision);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white px-30 max-sm:px-4">
      <div
        className="
            max-w-[1200px] mx-auto
            flex items-start justify-center gap-12
            max-sm:flex-col
          "
      >
        {/* Left Content */}
        <div
          className="
      sticky top-10 flex flex-col items-start flex-shrink-0 self-start
      w-[400px] max-sm:static max-sm:w-full
    "
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
              <span className="flex h-6 w-6 items-center justify-center  p-1">
                <Eye className="text-orange-500" size={20} />
              </span>
              <p className="font-sans text-[16px]">Our Vision</p>
            </div>
          </div>

          <h1 className="font-semibold text-4xl pb-3 max-sm:leading-tight">
            Our Values
          </h1>

          <p className="text-lg text-[#222222]/70 ">
            We partner with you to create a strategic model that captures your
            vision and advances the outcomes you're striving for. By blending
            collaboration with thoughtful planning, we ensure that the solutions
            we build together are purposeful, aligned, and capable of driving
            meaningful progress.
          </p>
          <div className="mt-5 ">
            <button className="cursor-pointer group inline-flex items-center gap-2 rounded-full bg-[#23378C] px-8 py-3 text-[15px] font-sans font-semibold text-white transition-colors hover:bg-black border-0">
              <NavLink to="/contact">Get Started</NavLink>
              <FramerArrow />
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div
          ref={container}
          className="relative flex-1 py-8 max-sm:w-full max-sm:py-4"
        >
          {vision.map((vision, i) => (
            <StickyServiceCard
              key={`vision${i}`}
              i={i}
              title={vision.title}
              description={vision.description}
              icon={iconMap[vision.icon]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
