import { CheckCircle2, CircleQuestionMark } from "lucide-react";
import React from "react";

export const WhyUs = () => {
  return (
    <>
      <div data-aos="fade-up" delay="50000" className="w-full px-4 pb-10 ">
        <div className="mx-auto max-sm:mx-5 bg-gray-100 py-5 px-6 rounded-xl max-w-6xl text-center">
          {/* Heading */}
          <h1 className="font-heading font-extrabold text-4xl max-sm:text-lg max-sm:mx-5 leading-tight text-black">
            Why Intern With Us?
          </h1>
          <div className="max-sm:grid-cols-2 grid grid-cols-3 gap-5 text-sm my-5">
            <div className=" bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>Hands-on experience with real projects</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>Mentorship from industry experts</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>Flexible remote work options</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>Potential for full-time conversion</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>Learning and development opportunities</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>Collaborative team environment</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
