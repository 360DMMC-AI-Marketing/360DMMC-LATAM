import { Brain, Target, TrendingUp, Workflow } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export const OurProcess = () => {
  const { t } = useTranslation();
  return (
    <section className="mx-auto mb-20 max-sm:mx-20">
      <div className="flex justify-center items-stretch gap-5 max-sm:block ">
        {/* Step 01 */}
        <div className="group flex flex-col items-center bg-gray-100 max-sm:mb-3 p-6 rounded-xl w-60 min-h-80 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 rounded-full flex flex-col justify-center items-center bg-white text-black w-20 h-20 shadow-sm">
            <Target className="text-orange-500" />
            <p className="font-sans text-sm mt-1">{t("process.steps.step01")}</p>
          </div>

          <div className="text-center space-y-2">
            <h2 className="font-heading text-xl">{t("process.steps.title1")}</h2>
            <p className="font-sans text-md">
              {t("process.steps.body1")}
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="group flex flex-col items-center bg-gray-100 max-sm:mb-3 p-6 rounded-xl w-60 min-h-80 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 rounded-full flex flex-col justify-center items-center bg-white text-black w-20 h-20 shadow-sm">
            <Brain className="text-orange-500" />
            <p className="font-sans text-sm mt-1">{t("process.steps.step02")}</p>
          </div>

          <div className="text-center space-y-2">
            <h2 className="font-heading text-xl">{t("process.steps.title2")}</h2>
            <p className="font-sans text-md">
              {t("process.steps.body2")}
            </p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="group flex flex-col items-center bg-gray-100 max-sm:mb-3 p-6 rounded-xl w-60 min-h-80 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 rounded-full flex flex-col justify-center items-center bg-white text-black w-20 h-20 shadow-sm">
            <Workflow className="text-orange-500" />
            <p className="font-sans text-sm mt-1">{t("process.steps.step03")}</p>
          </div>

          <div className="text-center space-y-2">
            <h2 className="font-heading text-xl">{t("process.steps.title3")}</h2>
            <p className="font-sans text-md">
              {t("process.steps.body3")}
            </p>
          </div>
        </div>

        {/* Step 04 */}
        <div className="group flex flex-col items-center bg-gray-100 p-6 max-sm:mb-3 rounded-xl w-60 min-h-80 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 rounded-full flex flex-col justify-center items-center bg-white text-black w-20 h-20 shadow-sm">
            <TrendingUp className="text-orange-500" />
            <p className="font-sans text-sm mt-1">{t("process.steps.step04")}</p>
          </div>

          <div className="text-center space-y-2">
            <h2 className="font-heading text-xl">{t("process.steps.title4")}</h2>
            <p className="font-sans text-md">
              {t("process.steps.body4")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
