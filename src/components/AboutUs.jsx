import { User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import FramerArrow from "./FramerArrow";
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white w-full px-4 sm:px-10 lg:px-20 pt-16 pb-20">
        {/* Top pill */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
            <span className="flex h-6 w-6 items-center justify-center  p-1">
              <User className="text-orange-500" size={20} />
            </span>
            <p className="font-sans text-[16px]">{t("aboutUs.pill")}</p>
          </div>
        </div>

        {/* Content */}
        <div
          data-aos="fade-up"
          delay="50000"
          className="flex flex-col items-center justify-center text-center"
        >
          <h1 className="font-heading font-semibold text-4xl sm:text-3xl lg:text-4xl mb-5 max-w-4xl">
            {t("aboutUs.heading")}
          </h1>

          <p className="text-lg font-sans font-normal mb-8 max-w-3xl">
            {t("aboutUs.body")}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-8 lg:gap-20 mb-5 bg-gray-100 rounded-3xl shadow-sm p-12 max-w-[1600px]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[#23378C] font-heading text-2xl lg:text-3xl">
                85%
              </h1>
              <p className="text-base lg:text-lg font-sans font-semibold text-center">
                {t("aboutUs.stat1Label")}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[#23378C] font-heading text-2xl lg:text-3xl">
                3x
              </h1>
              <p className="text-base lg:text-lg font-sans font-semibold text-center">
                {t("aboutUs.stat2Label")}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[#23378C] font-heading text-2xl lg:text-3xl">
                24/7
              </h1>
              <p className="text-base lg:text-lg font-sans font-semibold text-center">
                {t("aboutUs.stat3Label")}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[#23378C] font-heading text-2xl lg:text-3xl">
                ROI+
              </h1>
              <p className="text-base lg:text-lg font-sans font-semibold text-center">
                {t("aboutUs.stat4Label")}
              </p>
            </div>
          </div>

          {/* CTA */}
          <NavLink to="/contact">
            <button className="cursor-pointer group inline-flex items-center gap-2 rounded-full bg-[#23378C] px-8 py-3 text-[15px] font-sans font-semibold text-white transition-colors hover:bg-black border-0">
              {t("aboutUs.cta")}
              <FramerArrow />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
