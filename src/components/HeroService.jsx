import { Settings } from "lucide-react";
import React from "react";
import FramerArrow from "./FramerArrow";

export const HeroService = () => {
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
              <p className="font-sans text-[16px]">Our Services</p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mx-auto font-heading font-extrabold text-[64px] max-sm:text-4xl max-sm:mx-5 leading-tight text-black">
            Comprehensive Business Solutions
          </h1>

          {/* Description */}
          <p className="font-sans font-medium mx-auto my-6 max-w-3xl text-xl sm:text-[18px] leading-relaxed text-black/70">
            End-to-end services designed to transform, grow, and future-proof
            your business across AI, marketing, operations, and technology.
          </p>
        </div>

        {/* Implementation Section */}
        <section className="mt-10 px-6">
          <div className="mx-auto max-w-6xl py-5 px-10">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {/* Item 1 */}
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold text-black/70 mb-3">
                  24/7 AI <br className="max-sm:hidden" />
                  Front Desk
                </h3>
                <p className="text-black/70 font-sans text-lg leading-relaxed">
                  Instant responses, appointment scheduling, and intelligent
                  routing to ensure no opportunity is missed.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold text-black/70 mb-3">
                  Always-On
                  <br className="max-sm:hidden" /> Lead Engine
                </h3>
                <p className="text-black/70 font-sans text-lg leading-relaxed">
                  Automated follow-ups, pipeline hygiene, and optimized
                  conversion workflows that drive consistent growth.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold text-black/70 mb-3">
                  Back Office Autopilot
                </h3>
                <p className="text-black/70 font-sans text-lg  leading-relaxed">
                  Streamlined document intake, approvals, invoicing, and
                  real-time updates to eliminate operational bottlenecks.
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold text-black/70 mb-3">
                  Executive Visibility
                </h3>
                <p className="text-black/70 font-sans text-lg leading-relaxed">
                  Dashboards, KPI tracking, forecasting, and proactive alerts
                  that empower leadership with real-time insights.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
