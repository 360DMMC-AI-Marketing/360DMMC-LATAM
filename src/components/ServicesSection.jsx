import { Settings, CheckCircle2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";

/* ---------------- Sticky Card ---------------- */

const StickyServiceCard = ({ i, title, items }) => {
  const container = useRef(null);

  return (
    <div
      ref={container}
      className="
        sticky flex items-center justify-end pt-20 mb-5 h-[250px]
        max-sm:static max-sm:pt-0 max-sm:justify-start max-sm:h-auto max-sm:mb-4
      "
      style={{
        top: `${i * 25}px`,
      }}
    >
      <div
        className="
          flex h-[250px] w-[450px] origin-top flex-col overflow-hidden
          rounded-3xl border border-[#222222]/25 bg-white p-8
          max-sm:w-full max-sm:h-auto
        "
      >
        {/* Title */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#222222]">{title}</h3>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0"
                color="#F97316"
              />
              <span className="text-md font-medium text-[#222222]/80">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- Main Section ---------------- */

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const [services, setServices] = useState([]);
  const container = useRef(null);

  useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const url = lang === "es" ? "/landingServices.es.json" : "/landingServices.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data.services))
      .catch(console.error);
  }, [lang]);

  return (
    <div className="bg-white px-30 max-sm:px-4">
      <div
        className="
          max-w-[1200px] mx-auto
          flex items-start justify-center gap-12
          max-sm:flex-col
        "
      >
        {/* Left Content */}
        <div
          className="
            sticky top-10 flex flex-col items-start flex-shrink-0 self-start
            w-[400px] max-sm:static max-sm:w-full
          "
        >
          {/* Top pill */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
              <span className="flex h-6 w-6 items-center justify-center  p-1">
                <Settings className="text-orange-500" size={20} />
              </span>
              <p className="font-sans text-[16px]">{t("servicesSection.pill")}</p>
            </div>
          </div>

          <h1 className="font-semibold text-4xl pb-3 max-sm:text-3xl max-sm:leading-tight">
            {t("servicesSection.heading1")}
          </h1>

          <p className="text-md text-[#222222]/70 mb-5">
            {t("servicesSection.subtext")}
          </p>
          <h1 className="font-semibold text-4xl pb-3 max-sm:text-3xl max-sm:leading-tight">
            {t("servicesSection.heading2")}
          </h1>

          <p className="text-md text-[#222222]/70 flex flex-col gap-3">
            <span className="leading-relaxed">
              {t("servicesSection.body1")}
            </span>
            <span className="leading-relaxed">
              {t("servicesSection.body2")}
            </span>
          </p>
        </div>

        {/* Right Cards */}
        <div
          ref={container}
          className="relative flex-1 py-8 max-sm:w-full max-sm:py-4"
        >
          {services.map((service, i) => (
            <StickyServiceCard
              key={`service_${i}`}
              i={i}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
