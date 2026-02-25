import React from "react";
import FramerArrow from "./FramerArrow";
import { Globe } from "lucide-react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

const HeroBanner = () => {
  const { t } = useTranslation();
  return (
    <section
      data-aos="fade-up"
      delay="50000"
      className="w-full bg-white px-4 pt-16 pb-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        {/* Top pill */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
            <span className="flex h-6 w-6 items-center justify-center  p-1">
              <Globe className="text-orange-500" size={20} />
            </span>
            <p className="font-sans text-[16px]">{t("hero.pill")}</p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mx-auto font-heading font-extrabold text-[64px] max-sm:text-4xl max-sm:mx-5 leading-tight text-black">
          {t("hero.heading")}
        </h1>

        {/* Description */}
        <p className="font-sans font-medium mx-auto max-w-3xl text-xl leading-relaxed text-black/70 sm:text-[18px]">
          {t("hero.body")}
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <NavLink to="/contact">
            <button className="cursor-pointer group inline-flex items-center gap-2 rounded-full bg-[#23378C] px-8 py-3 text-[15px] font-sans font-semibold text-white transition-colors hover:bg-black border-0">
              {" "}
              {t("hero.cta")}
              <FramerArrow />
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
