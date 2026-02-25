import { Settings } from "lucide-react";
import React from "react";
import FramerArrow from "./FramerArrow";
import { useTranslation } from "react-i18next";

export const HeroService = () => {
  const { t } = useTranslation();
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
              <p className="font-sans text-[16px]">{t("services.hero.pill")}</p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mx-auto font-heading font-extrabold text-[64px] max-sm:text-4xl max-sm:mx-5 leading-tight text-black">
            {t("services.hero.heading")}
          </h1>

          {/* Description */}
          <p className="font-sans font-medium mx-auto my-6 max-w-3xl text-xl sm:text-[18px] leading-relaxed text-black/70">
            {t("services.hero.body")}
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
                  {t("services.hero.card1Title")}
                </h3>
                <p className="text-black/70 font-sans text-lg leading-relaxed">
                  {t("services.hero.card1Body")}
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold text-black/70 mb-3">
                  {t("services.hero.card2Title")}
                </h3>
                <p className="text-black/70 font-sans text-lg leading-relaxed">
                  {t("services.hero.card2Body")}
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold text-black/70 mb-3">
                  {t("services.hero.card3Title")}
                </h3>
                <p className="text-black/70 font-sans text-lg  leading-relaxed">
                  {t("services.hero.card3Body")}
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold text-black/70 mb-3">
                  {t("services.hero.card4Title")}
                </h3>
                <p className="text-black/70 font-sans text-lg leading-relaxed">
                  {t("services.hero.card4Body")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
