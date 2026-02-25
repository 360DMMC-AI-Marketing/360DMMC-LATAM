import { Brain, Target, TrendingUp, Workflow } from "lucide-react";
import React from "react";

export const OurProcess = () => {
  return (
    <section className="mx-auto mb-20 max-sm:mx-20">
      <div className="flex justify-center items-center gap-5 max-sm:block ">
        {/* Step 01 */}
        <div className="group flex flex-col items-center bg-gray-100 max-sm:mb-3 p-6 rounded-xl w-60 h-80 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 rounded-full flex flex-col justify-center items-center bg-white text-black w-20 h-20 shadow-sm">
            <Target className="text-orange-500" />
            <p className="font-sans text-sm mt-1">Step 01</p>
          </div>

          <div className="text-center space-y-2">
            <h2 className="font-heading text-xl">Discover</h2>
            <p className="font-sans text-md">
              We analyze your business needs, workflows, and growth
              opportunities to identify where AI can deliver maximum impact.
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="group flex flex-col items-center bg-gray-100 max-sm:mb-3 p-6 rounded-xl w-60 h-80 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 rounded-full flex flex-col justify-center items-center bg-white text-black w-20 h-20 shadow-sm">
            <Brain className="text-orange-500" />
            <p className="font-sans text-sm mt-1">Step 02</p>
          </div>

          <div className="text-center space-y-2">
            <h2 className="font-heading text-xl">Strategy</h2>
            <p className="font-sans text-md">
              Design a customized AI roadmap with clear milestones, KPIs, and
              ROI projections tailored to your budget.
            </p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="group flex flex-col items-center bg-gray-100 max-sm:mb-3 p-6 rounded-xl w-60 h-80 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 rounded-full flex flex-col justify-center items-center bg-white text-black w-20 h-20 shadow-sm">
            <Workflow className="text-orange-500" />
            <p className="font-sans text-sm mt-1">Step 03</p>
          </div>

          <div className="text-center space-y-2">
            <h2 className="font-heading text-xl">Implementation</h2>
            <p className="font-sans text-md">
              Seamlessly integrate AI solutions with your existing systems, with
              full training and ongoing support.
            </p>
          </div>
        </div>

        {/* Step 04 */}
        <div className="group flex flex-col items-center bg-gray-100 p-6 max-sm:mb-3 rounded-xl w-60 h-80 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 rounded-full flex flex-col justify-center items-center bg-white text-black w-20 h-20 shadow-sm">
            <TrendingUp className="text-orange-500" />
            <p className="font-sans text-sm mt-1">Step 04</p>
          </div>

          <div className="text-center space-y-2">
            <h2 className="font-heading text-xl">Optimization</h2>
            <p className="font-sans text-md">
              Continuously monitor, refine, and scale your AI capabilities to
              ensure sustained growth and adaptation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
