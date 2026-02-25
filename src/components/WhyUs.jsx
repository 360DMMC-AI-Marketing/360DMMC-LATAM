import { CheckCircle2 } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export const WhyUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <div data-aos="fade-up" delay="50000" className="w-full px-4 pb-10 ">
        <div className="mx-auto max-sm:mx-5 bg-gray-100 py-5 px-6 rounded-xl max-w-6xl text-center">
          {/* Heading */}
          <h1 className="font-heading font-extrabold text-4xl max-sm:text-lg max-sm:mx-5 leading-tight text-black">
            {t("careers.whyUs.heading")}
          </h1>
          <div className="max-sm:grid-cols-2 grid grid-cols-3 gap-5 text-sm my-5">
            <div className=" bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>{t("careers.whyUs.benefit1")}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>{t("careers.whyUs.benefit2")}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>{t("careers.whyUs.benefit3")}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>{t("careers.whyUs.benefit4")}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>{t("careers.whyUs.benefit5")}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 text-orange-500 max-sm:hidden"></CheckCircle2>
              <p>{t("careers.whyUs.benefit6")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
