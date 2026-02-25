import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith("es");

  const toggle = () => {
    i18n.changeLanguage(isSpanish ? "en" : "es");
  };

  return (
    <button
      onClick={toggle}
      title={isSpanish ? "Cambiar a inglés" : "Switch to Spanish"}
      className="cursor-pointer bg-transparent border-0 shadow-none p-0"
    >
      <img
        src={
          isSpanish
            ? "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f1e8-1f1f4.png"
            : "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f1fa-1f1f8.png"
        }
        alt={isSpanish ? "Colombia" : "United States"}
        className="w-8 h-8"
      />
    </button>
  );
};

export default LanguageToggle;
