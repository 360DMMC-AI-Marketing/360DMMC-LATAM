import React from "react";
import FramerArrow from "../components/FramerArrow";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

const Error404 = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-30 mt-20">
        <h1 className="font-heading font-extrabold md:text-[64px] sm:text-[56px]">
          404
        </h1>
        <p className="font-sans text-lg text-normal text-center">
          {t("error404.body")}
        </p>
        <div className="mt-10 flex justify-center">
          <button className="group inline-flex items-center gap-2 rounded-full bg-[#23378C] px-8 py-3 text-[15px] font-sans font-semibold text-white transition-colors hover:bg-black border-0">
            <NavLink to="/">{t("error404.cta")}</NavLink>
            <FramerArrow />
          </button>
        </div>
      </div>
    </>
  );
};
export default Error404;
