import { Anchor, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const OurTeam = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const url = lang === "es" ? "/team.es.json" : "/team.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.team))
      .catch(console.error);
  }, [lang]);

  return (
    <>
      {/* Header */}
      <section className="bg-white px-4 pt-20 pb-12">
        <div className="mx-auto max-w-6xl text-center">
          {/* Top pill */}
          <div className="mb-8 flex justify-center">
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide"
            >
              <span className="flex h-6 w-6 items-center justify-center  p-1">
                <Users className="text-orange-500" size={20} />
              </span>
              <p className="font-sans text-[16px]">{t("about.team.pill")}</p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight text-black">
            {t("about.team.heading")}
          </h1>

          {/* Description */}
          <p className="mx-auto my-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-black/70">
            {t("about.team.body")}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.id}
                className="overflow-hidden rounded-xl bg-gray-50 border border-black/5 transition-shadow hover:shadow-md"
              >
                {/* Image */}
                <div className="h-[380px] w-full overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="px-6 py-5">
                  <h3 className="text-lg font-semibold text-black">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-md leading-relaxed text-black/60">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
