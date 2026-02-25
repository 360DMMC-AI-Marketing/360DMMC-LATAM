import React from "react";
import { BrainCog, Focus, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Advantage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white text-black px-4 sm:px-10 lg:px-20 py-10 mt-5">
        <div
          data-aos="fade-up"
          delay="50000"
          className="flex flex-col justify-center items-center gap-3"
        >
          <h1 className="text-center font-heading font-semibold text-4xl sm:text-3xl lg:text-4xl">
            {t("advantage.heading")}
          </h1>

          <p className="text-center text-lg font-sans font-normal mb-5 max-w-3xl">
            {t("advantage.body")}
          </p>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:flex-nowrap lg:gap-3">
            {/* Card 1 */}
            <div className="group flex flex-col justify-center items-center rounded-lg bg-[#F8F8F8] p-5 w-full sm:w-70 h-auto lg:h-80 shadow-sm hover:shadow-md text-lg">
              <Focus className="text-[#23378C] w-8 h-8 border-2 p-1 rounded-full border-[#23378C] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 mb-5" />
              <h2 className="font-heading font-semibold text-lg">
                {t("advantage.card1Title")}
              </h2>
              <p className="font-sans font-light text-md text-center px-2">
                {t("advantage.card1Body")}
              </p>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col justify-center items-center rounded-lg bg-[#F8F8F8] p-5 w-full sm:w-70 h-auto lg:h-80 shadow-sm hover:shadow-md text-lg">
              <Users className="text-[#23378C] w-8 h-8 border-2 p-1 rounded-full border-[#23378C] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 mb-5" />
              <h2 className="font-heading font-semibold text-lg">
                {t("advantage.card2Title")}
              </h2>
              <p className="font-sans font-light text-md text-center px-2">
                {t("advantage.card2Body")}
              </p>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col justify-center items-center rounded-lg bg-[#F8F8F8] p-5 w-full sm:w-70 h-auto lg:h-80 shadow-sm hover:shadow-md text-lg">
              <BrainCog className="text-[#23378C] w-8 h-8 border-2 p-1 rounded-full border-[#23378C] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 mb-5" />
              <h2 className="font-heading font-semibold text-lg">
                {t("advantage.card3Title")}
              </h2>
              <p className="font-sans font-light text-md text-center px-2">
                {t("advantage.card3Body")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Advantage;
