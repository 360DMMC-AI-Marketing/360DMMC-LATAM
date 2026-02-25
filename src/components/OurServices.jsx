import React, { useEffect, useState } from "react";
import {
  Settings,
  CheckCircle2,
  Cpu,
  Megaphone,
  Briefcase,
  Code,
  User,
} from "lucide-react";
import { useTranslation } from "react-i18next";

/* ---------------- Card (UNCHANGED) ---------------- */

const ServiceCard = ({ title, description, items }) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-[#222222]/25 bg-white p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#222222] text-center sm:text-left">
          {title}
        </h3>
        <p className="text-md font-sans font-normal text-[#222222]/90 mt-3 text-wrap ">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5" color="#F97316" />
            <span className="text-md font-sans font-medium text-[#222222]/80">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- Section ---------------- */

export const OurServices = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const [activeCategory, setActiveCategory] = useState("ai");
  const [services, setServices] = useState([]);

  const categories = [
    { key: "ai", label: t("services.section.cat_ai"), icon: Cpu },
    { key: "marketing", label: t("services.section.cat_marketing"), icon: Megaphone },
    { key: "business", label: t("services.section.cat_business"), icon: Briefcase },
    { key: "tech", label: t("services.section.cat_tech"), icon: Code },
  ];

  useEffect(() => {
    const ext = lang === "es" ? ".es" : "";
    fetch(`/servicesData/${activeCategory}${ext}.json`)
      .then((res) => res.json())
      .then((data) => setServices(data.services))
      .catch(console.error);
  }, [activeCategory, lang]);

  return (
    <div className="bg-white px-4 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl text-center mb-16">
        {" "}
        {/* Top pill */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
            <span className="flex h-6 w-6 items-center justify-center  p-1">
              <User className="text-orange-500" size={20} />
            </span>
            <p className="font-sans text-[16px]">{t("services.section.pill")}</p>
          </div>
        </div>
        <h1 className="font-bold text-4xl  pb-4"> {t("services.section.heading1")} </h1>{" "}
        <p className="text-lg sm:text-black text-[#222222]/70 mb-5">
          {" "}
          {t("services.section.subtext")}{" "}
        </p>{" "}
        <h1 className="font-bold text-4xl  pb-4"> {t("services.section.heading2")} </h1>{" "}
        <p className="text-lg sm:text-black text-[#222222]/70">
          <span className="leading-relaxed">
            {t("services.section.body")}
          </span>
        </p>{" "}
      </div>
      {/* ---------- CATEGORY PILLS ---------- */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map(({ key, label, icon: Icon }) => {
          const isActive = activeCategory === key;

          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`
          cursor-pointer inline-flex items-center gap-2 rounded-full px-5 py-2 text-md font-medium border transition-all duration-200
          ${
            isActive
              ? "bg-[#23378C] text-white border-[#23378C]"
              : "bg-white text-[#222222] border-[#222222]/25"
          }
        `}
            >
              <Icon
                size={16}
                className={isActive ? "text-white" : "text-orange-500"}
              />
              {label}
            </button>
          );
        })}
      </div>

      {/* ---------- SERVICES GRID ---------- */}
      <div className="mx-auto max-sm:mx-5 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:gap-6 gap-8 pb-10">
        {services.map((service, i) => (
          <ServiceCard
            key={`${activeCategory}_${i}`}
            title={service.title}
            description={service.description}
            items={service.items}
          />
        ))}
      </div>
    </div>
  );
};
