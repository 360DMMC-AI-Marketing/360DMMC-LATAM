import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Info,
  Scale,
  ChevronRight,
  Facebook,
  Instagram,
  ShieldCheck,
} from "lucide-react";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("privacy.title")} | 360DMMC`;
  }, [t]);

  const BulletList = ({ items }) => (
    <ul className="space-y-0 mb-8">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 py-3 border-b border-gray-100 font-sans text-base text-gray-700 leading-relaxed"
        >
          <ChevronRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  );

  const Callout = ({ icon: Icon, children }) => (
    <div className="flex gap-4 bg-gray-50 border border-gray-200 border-l-4 border-l-[#23378C] rounded-r-lg p-5 mb-8">
      <Icon className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
      <p className="font-sans text-base text-gray-700 leading-relaxed">
        {children}
      </p>
    </div>
  );

  const SectionLabel = ({ num }) => (
    <p className="font-sans text-sm text-[#23378C] font-semibold tracking-widest uppercase mb-2">
      § {num}
    </p>
  );

  const SectionHeading = ({ children }) => (
    <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6">
      {children}
    </h2>
  );

  const tocItems = t("privacy.toc", { returnObjects: true });
  const s2Cards = t("privacy.s2_cards", { returnObjects: true });
  const s3Bullets = t("privacy.s3_bullets", { returnObjects: true });
  const s4Bullets = t("privacy.s4_bullets", { returnObjects: true });
  const s5Cards = t("privacy.s5_cards", { returnObjects: true });
  const s6Bullets = t("privacy.s6_bullets", { returnObjects: true });
  const s7Bullets = t("privacy.s7_bullets", { returnObjects: true });
  const s8Rights = t("privacy.s8_rights", { returnObjects: true });
  const s10Cookies = t("privacy.s10_cookies", { returnObjects: true });
  const s11Links = t("privacy.s11_links", { returnObjects: true });
  const s14Cards = t("privacy.s14_cards", { returnObjects: true });

  return (
    <div className="bg-white py-14 sm:py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-gray-300 py-2 px-4">
              <Scale className="text-orange-400 w-5 h-5" />
              <p className="font-sans text-sm sm:text-base font-semibold text-gray-700">
                {t("privacy.badge")}
              </p>
            </div>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
            {t("privacy.title")}
          </h1>
          <div className="font-sans text-sm sm:text-base text-gray-500 flex flex-wrap justify-center gap-4 sm:gap-6">
            <span>{t("privacy.effective")}</span>
            <span>{t("privacy.lastUpdated")}</span>
          </div>
        </div>

        {/* PLATFORM STRIP */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 border-b border-gray-200 pb-10">
          {[
            {
              icon: <Facebook className="w-4 h-4 text-orange-400" />,
              label: "Facebook",
            },
            {
              icon: <Instagram className="w-4 h-4 text-orange-400" />,
              label: "Instagram",
            },
            {
              icon: (
                <img
                  src="https://cdn.simpleicons.org/whatsapp/FB923C"
                  alt="WhatsApp"
                  className="w-4 h-4"
                />
              ),
              label: "WhatsApp",
            },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-800 bg-gray-50 font-sans"
            >
              {icon}
              {label}
            </div>
          ))}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-800 bg-gray-50 font-sans">
            <ShieldCheck className="w-4 h-4 text-orange-400 flex-shrink-0" />
            {t("privacy.metaCompliant")}
          </div>
        </div>

        {/* TABLE OF CONTENTS */}
        <nav
          aria-label="Table of Contents"
          className="mb-12 sm:mb-16 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
        >
          <div className="px-5 sm:px-6 py-4 bg-gray-100 border-b border-gray-200 font-sans text-lg sm:text-sm font-bold tracking-widest uppercase text-[#23378C]">
            {t("privacy.toc_title")}
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {tocItems.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-2 px-5 sm:px-6 py-3.5 text-sm sm:text-base text-gray-700 border-b border-gray-200 hover:text-[#23378C] hover:bg-gray-100 transition-colors font-sans"
                >
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CONTENT WRAPPER */}
        <div className="space-y-14 sm:space-y-16 text-black">
          {/* SECTION 1 — Overview */}
          <section
            id="overview"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="01" />
            <SectionHeading>{t("privacy.s1_heading")}</SectionHeading>
            <p className="font-sans mb-5 text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s1_p1_prefix")}
              <a
                href="https://360dmmc.com"
                className="text-[#23378C] underline"
              >
                360dmmc.com
              </a>
              {t("privacy.s1_p1_suffix")}
            </p>
            <p className="font-sans mb-7 text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s1_p2")}
            </p>
            <Callout icon={Info}>
              {t("privacy.s1_callout")}
            </Callout>
          </section>

          {/* SECTION 2 — Data We Collect */}
          <section
            id="data-collected"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="02" />
            <SectionHeading>{t("privacy.s2_heading")}</SectionHeading>
            <p className="font-sans mb-8 text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s2_p1")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {s2Cards.map(([title, text]) => (
                <div
                  key={title}
                  className="border border-gray-200 rounded-lg p-5 sm:p-6 bg-gray-50 hover:shadow-sm transition-shadow"
                >
                  <h3 className="font-sans font-semibold text-[#23378C] text-xs sm:text-sm uppercase tracking-wider mb-3">
                    {title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3 — Meta Platform Data */}
          <section
            id="meta-platforms"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="03" />
            <SectionHeading>{t("privacy.s3_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-7 leading-relaxed">
              {t("privacy.s3_p1")}
            </p>
            <Callout icon={Scale}>
              {t("privacy.s3_callout")}
            </Callout>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s3_p2")}
            </p>
            <BulletList items={s3Bullets} />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s3_p3")}
            </p>
          </section>

          {/* SECTION 4 — How We Use Your Data */}
          <section
            id="use-of-data"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="04" />
            <SectionHeading>{t("privacy.s4_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s4_p1")}
            </p>
            <BulletList items={s4Bullets} />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s4_p2_prefix")}
              <strong>{t("privacy.s4_p2_not")}</strong>
              {t("privacy.s4_p2_suffix")}
            </p>
          </section>

          {/* SECTION 5 — Data Sharing & Disclosure */}
          <section
            id="sharing"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="05" />
            <SectionHeading>{t("privacy.s5_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-7 leading-relaxed">
              {t("privacy.s5_p1")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {s5Cards.map(([title, text]) => (
                <div
                  key={title}
                  className="border border-gray-200 rounded-lg p-5 sm:p-6 bg-gray-50 hover:shadow-sm transition-shadow"
                >
                  <h3 className="font-sans font-semibold text-[#23378C] text-xs sm:text-sm uppercase tracking-wider mb-2">
                    {title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s5_p2")}
            </p>
          </section>

          {/* SECTION 6 — Data Retention & Deletion */}
          <section
            id="retention"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="06" />
            <SectionHeading>{t("privacy.s6_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s6_p1")}
            </p>
            <BulletList items={s6Bullets} />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s6_p2_prefix")}
              <a
                href="mailto:privacy@360dmmc.com"
                className="text-[#23378C] underline"
              >
                privacy@360dmmc.com
              </a>
              {t("privacy.s6_p2_suffix")}
            </p>
          </section>

          {/* SECTION 7 — Security */}
          <section
            id="security"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="07" />
            <SectionHeading>{t("privacy.s7_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s7_p1")}
            </p>
            <BulletList items={s7Bullets} />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s7_p2")}
            </p>
          </section>

          {/* SECTION 8 — Your Rights */}
          <section
            id="rights"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="08" />
            <SectionHeading>{t("privacy.s8_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-7 leading-relaxed">
              {t("privacy.s8_p1")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {s8Rights.map((right) => (
                <div
                  key={right.name}
                  className="border border-gray-200 rounded-lg p-4 sm:p-5 bg-gray-50"
                >
                  <p className="font-sans font-semibold text-black text-xs sm:text-sm uppercase tracking-wider mb-2">
                    {right.name}
                  </p>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">
                    {right.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s8_p2_prefix")}
              <a
                href="mailto:privacy@360dmmc.com"
                className="text-[#23378C] underline"
              >
                privacy@360dmmc.com
              </a>
              {t("privacy.s8_p2_suffix")}
            </p>
          </section>

          {/* SECTION 9 — Children's Privacy */}
          <section
            id="children"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="09" />
            <SectionHeading>{t("privacy.s9_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s9_p1")}
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s9_p2_prefix")}
              <a
                href="mailto:privacy@360dmmc.com"
                className="text-[#23378C] underline"
              >
                privacy@360dmmc.com
              </a>
              {t("privacy.s9_p2_suffix")}
            </p>
          </section>

          {/* SECTION 10 — Cookies & Tracking */}
          <section
            id="cookies"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="10" />
            <SectionHeading>{t("privacy.s10_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s10_p1")}
            </p>
            <ul className="space-y-0 mb-8">
              {s10Cookies.map(({ label, desc }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 py-3 border-b border-gray-100 font-sans text-base text-gray-700 leading-relaxed"
                >
                  <ChevronRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-black">{label}</strong> — {desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s10_p2")}
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s10_p3")}
            </p>
          </section>

          {/* SECTION 11 — Third-Party Services & Links */}
          <section
            id="third-parties"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="11" />
            <SectionHeading>{t("privacy.s11_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s11_p1")}
            </p>
            <ul className="space-y-0 mb-8">
              {s11Links.map(({ text, link, label }, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-gray-100 font-sans text-base text-gray-700 leading-relaxed"
                >
                  <ChevronRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {text}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#23378C] underline"
                      >
                        {label}
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s11_p2")}
            </p>
          </section>

          {/* SECTION 12 — International Data Transfers */}
          <section
            id="international"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="12" />
            <SectionHeading>{t("privacy.s12_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s12_p1")}
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s12_p2")}
            </p>
          </section>

          {/* SECTION 13 — Changes to This Policy */}
          <section
            id="changes"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="13" />
            <SectionHeading>{t("privacy.s13_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s13_p1")}
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              {t("privacy.s13_p2")}
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s13_p3")}
            </p>
          </section>

          {/* SECTION 14 — Contact Us */}
          <section id="contact">
            <SectionLabel num="14" />
            <SectionHeading>{t("privacy.s14_heading")}</SectionHeading>
            <p className="font-sans mb-8 text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s14_p1")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {s14Cards.map(([title, text, href]) => (
                <div
                  key={title}
                  className="border border-gray-200 rounded-lg p-5 sm:p-6 bg-gray-50 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-sans font-semibold text-[#23378C] text-xs sm:text-sm uppercase tracking-wider mb-3">
                    {title}
                  </h3>
                  <a
                    href={href}
                    className="font-sans text-sm sm:text-base text-gray-700 underline hover:text-[#23378C] transition-colors"
                  >
                    {text}
                  </a>
                </div>
              ))}
            </div>
            <p className="font-sans mt-10 text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("privacy.s14_p2_prefix")}
              <strong>{t("privacy.s14_p2_days")}</strong>
              {t("privacy.s14_p2_suffix")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
