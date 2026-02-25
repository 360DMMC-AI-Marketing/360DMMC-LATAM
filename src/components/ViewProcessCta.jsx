import React from "react";
import FramerArrow from "./FramerArrow";
import { Target, TrendingUp, Workflow, Zap } from "lucide-react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

const ViewProcessCta = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-[#F8F8F8] text-black px-4 sm:px-10 lg:px-20 py-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-center font-heading font-semibold text-4xl sm:text-3xl lg:text-4xl">
            {t("viewProcess.heading")}
          </h1>

          <p className="text-center text-lg font-sans font-normal max-w-3xl">
            {t("viewProcess.body")}
          </p>

          <NavLink to="/process">
            <button className="cursor-pointer group inline-flex items-center gap-2 rounded-full bg-[#23378C] mt-3 mb-5 px-8 py-3 text-[15px] font-sans font-semibold text-white transition-colors hover:bg-black border-0">
              {t("viewProcess.cta")}
              <FramerArrow />
            </button>
          </NavLink>

          {/* Cards */}
          <div className="flex flex-wrap justify-center items-stretch gap-3 sm:gap-4 lg:gap-3">
            <div className="group flex flex-col justify-center items-center rounded-lg bg-white p-5 w-full sm:w-72 shadow-sm hover:shadow-md text-base lg:text-lg">
              <Zap className="text-orange-500 text-lg transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 mb-2" />
              {t("viewProcess.card1")}
            </div>

            <div className="group flex flex-col justify-center items-center rounded-lg bg-white p-5 w-full sm:w-72 shadow-sm hover:shadow-md text-base lg:text-lg">
              <Target className="text-orange-500 text-lg transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 mb-2" />
              {t("viewProcess.card2")}
            </div>

            <div className="group flex flex-col justify-center items-center rounded-lg bg-white p-5 w-full sm:w-72 shadow-sm hover:shadow-md text-base lg:text-lg">
              <Workflow className="text-orange-500 text-lg transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 mb-2" />
              {t("viewProcess.card3")}
            </div>

            <div className="group flex flex-col justify-center items-center rounded-lg bg-white p-5 w-full sm:w-72 shadow-sm hover:shadow-md text-base lg:text-lg">
              <TrendingUp className="text-orange-500 text-lg transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 mb-2" />
              {t("viewProcess.card4")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProcessCta;
