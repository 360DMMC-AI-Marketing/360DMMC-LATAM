import { CheckCircle2, Mail, MapPin } from "lucide-react";
import React from "react";

export const HeroContact = () => {
  return (
    <>
      <div>
        <h1 className="font-extrabold text-[64px] pb-3 max-sm:text-4xl max-sm:leading-tight max-sm:text-center">
          Tell Us Your Ideas, Let's Make It Happen!
        </h1>

        <div className="my-4 font-sans font-medium">
          <div className="flex text-md items-center gap-2 mb-3">
            <CheckCircle2 className="w-5"></CheckCircle2>
            <p>Expect a response from us within 24 hours</p>
          </div>
          <div className="flex text-md items-center gap-2 mb-3">
            <CheckCircle2 className="w-5"></CheckCircle2>
            <p>We’re happy to sign an NDA upon request.</p>
          </div>
          <div className="flex text-md items-center gap-2 mb-3">
            <CheckCircle2 className="w-5"></CheckCircle2>
            <p>Get access to a team of dedicated product specialists.</p>
          </div>
          <div className=" mt-10 text-lg font-bold max-sm:hidden">
            {/* Top pill */}
            <div className="mb-8 flex">
              <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
                <span className="flex h-6 w-6 items-center justify-center  p-1">
                  <Mail className="text-orange-500" size={20} />
                </span>
                <p className="font-sans text-[16px]">Get In Touch</p>
              </div>
            </div>
            <div className="flex text-md items-center gap-2 mb-3">
              <MapPin className="w-5 text-gray-700"></MapPin>
              <p className="text-gray-700">
                1 East Erie Street, Suite 525-2501 Chicago, IL 60611
              </p>
            </div>
            <div className="flex text-md items-center gap-2 mb-3">
              <Mail className="w-5 text-gray-700"></Mail>
              <a
                target="_blank"
                href="mailto:Consult@360DMMC.com"
                className="text-gray-700 cursor-pointer underline underline-offset-1"
              >
                Consult@360DMMC.com
              </a>
            </div>
            <div className="flex text-md items-center gap-2 ">
              <img
                src="https://cdn.simpleicons.org/whatsapp/364153"
                alt="WhatsApp"
                class="w-5"
              />
              <p className="text-gray-700">+1 844 491-3441</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
