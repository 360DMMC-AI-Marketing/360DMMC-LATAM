import React from "react";
import { BrainCog, Focus, Users } from "lucide-react";

const Advantage = () => {
  return (
    <>
      <div className="bg-white text-black px-4 sm:px-10 lg:px-20 py-10 mt-5">
        <div
          data-aos="fade-up"
          delay="50000"
          className="flex flex-col justify-center items-center gap-3"
        >
          <h1 className="text-center font-heading font-semibold text-4xl sm:text-3xl lg:text-4xl">
            The 360DMMC Advantage
          </h1>

          <p className="text-center text-lg font-sans font-normal mb-5 max-w-3xl">
            We combine cutting-edge AI technology with human creativity{" "}
            <br className="hidden sm:block" />
            to deliver transformative solutions that drive real, measurable
            results.
          </p>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:flex-nowrap lg:gap-3">
            {/* Card 1 */}
            <div className="group flex flex-col justify-center items-center rounded-lg bg-[#F8F8F8] p-5 w-full sm:w-70 h-auto lg:h-80 shadow-sm hover:shadow-md text-lg">
              <Focus className="text-[#23378C] w-8 h-8 border-2 p-1 rounded-full border-[#23378C] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 mb-5" />
              <h2 className="font-heading font-semibold text-lg">
                Focus on ROI
              </h2>
              <p className="font-sans font-light text-md text-center px-2">
                Every solution is designed with clear, measurable outcomes. We
                prioritize implementations that deliver tangible business value
                and rapid returns on investment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col justify-center items-center rounded-lg bg-[#F8F8F8] p-5 w-full sm:w-70 h-auto lg:h-80 shadow-sm hover:shadow-md text-lg">
              <Users className="text-[#23378C] w-8 h-8 border-2 p-1 rounded-full border-[#23378C] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 mb-5" />
              <h2 className="font-heading font-semibold text-lg">
                SMB Centric
              </h2>
              <p className="font-sans font-light text-md text-center px-2">
                Tailored specifically for small and medium businesses. Our
                solutions are scalable, affordable, and designed to work with
                your existing systems and resources.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col justify-center items-center rounded-lg bg-[#F8F8F8] p-5 w-full sm:w-70 h-auto lg:h-80 shadow-sm hover:shadow-md text-lg">
              <BrainCog className="text-[#23378C] w-8 h-8 border-2 p-1 rounded-full border-[#23378C] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 mb-5" />
              <h2 className="font-heading font-semibold text-lg">
                Expert Guidance
              </h2>
              <p className="font-sans font-light text-md text-center px-2">
                Navigate AI transformation with confidence. Our team provides
                hands-on support, training, and strategic guidance throughout
                your entire journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Advantage;
