import React from "react";
import { useTranslation } from "react-i18next";

export const TrustedBy = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white text-center">
        <h2 className="font-heading font-semibold text-xl">
          {t("trustedBy.heading")}
        </h2>

        <div className="flex justify-center items-center py-3 gap-7 text-[#222222]/50 font-normal text-3xl">
          <p>{t("trustedBy.sme")}</p>
          <p>{t("trustedBy.startup")}</p>
          <p>{t("trustedBy.agency")}</p>
        </div>
      </div>
    </>
  );
};
