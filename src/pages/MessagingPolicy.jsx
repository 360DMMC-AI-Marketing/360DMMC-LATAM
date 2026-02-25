import React, { useEffect } from "react";
import twilioLogo0 from "../../public/twilioLogo0.png";
import {
  Info,
  AlertTriangle,
  Ban,
  ChevronRight,
  Link,
  MessageSquare,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const MessagingPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("messaging.title")} | 360DMMC`;
  }, [t]);

  /* ── Reusable sub-components ── */

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

  const BulletList = ({ items }) => (
    <ul className="space-y-0 mb-8">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 py-3 border-b border-gray-100 font-sans text-base text-gray-700 leading-relaxed"
        >
          <ChevronRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  /* variant: "info" | "warn" | "danger" */
  const Callout = ({ icon: Icon, variant = "info", children }) => {
    const borderColor =
      variant === "warn" || variant === "danger"
        ? "border-l-orange-400"
        : "border-l-[#23378C]";
    const bg = variant === "danger" ? "bg-orange-50" : "bg-gray-50";
    const iconColor = "text-orange-400";

    return (
      <div
        className={`flex gap-4 ${bg} border border-gray-200 border-l-4 ${borderColor} rounded-r-lg p-5 my-6`}
      >
        <Icon className={`w-6 h-6 flex-shrink-0 mt-0.5 ${iconColor}`} />
        <p className="font-sans text-base text-gray-700 leading-relaxed">
          {children}
        </p>
      </div>
    );
  };

  /* Inline keyword badge */
  const Kw = ({ children }) => (
    <span className="inline font-mono text-sm bg-orange-50 border border-orange-200 text-orange-500 rounded px-1.5 py-0.5">
      {children}
    </span>
  );

  /* Card */
  const Card = ({ title, children }) => (
    <div className="border border-gray-200 rounded-lg p-5 sm:p-6 bg-gray-50 hover:shadow-sm transition-shadow">
      <h3 className="font-sans font-semibold text-[#23378C] text-xs sm:text-sm uppercase tracking-wider mb-2">
        {title}
      </h3>
      <div className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );

  // Pre-fetch translated arrays
  const tocItems = t("messaging.toc", { returnObjects: true });
  const s2Rows = t("messaging.s2_rows", { returnObjects: true });
  const s3BulletsPlain = t("messaging.s3_bullets_plain", { returnObjects: true });
  const s4Steps = t("messaging.s4_steps", { returnObjects: true });
  const s7Bullets = t("messaging.s7_bullets", { returnObjects: true });

  // §03 bullet list — item 2 has an embedded link
  const s3Items = [
    s3BulletsPlain[0],
    <span key="s3b2">
      {t("messaging.s3_bullet2_prefix")}
      <a
        href="https://www.twilio.com/en-us/legal/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#23378C] underline"
      >
        twilio.com/legal/privacy
      </a>
      {t("messaging.s3_bullet2_suffix")}
    </span>,
    s3BulletsPlain[1],
    s3BulletsPlain[2],
    s3BulletsPlain[3],
  ];

  // §06 bullet list — bold term + rest
  const s6Items = [
    <span key="s6b1"><strong>{t("messaging.s6_b1_bold")}</strong>{t("messaging.s6_b1_rest")}</span>,
    <span key="s6b2"><strong>{t("messaging.s6_b2_bold")}</strong>{t("messaging.s6_b2_rest")}</span>,
    <span key="s6b3"><strong>{t("messaging.s6_b3_bold")}</strong>{t("messaging.s6_b3_rest")}</span>,
    <span key="s6b4"><strong>{t("messaging.s6_b4_bold")}</strong>{t("messaging.s6_b4_rest")}</span>,
    <span key="s6b5"><strong>{t("messaging.s6_b5_bold")}</strong>{t("messaging.s6_b5_rest")}</span>,
    <span key="s6b6"><strong>{t("messaging.s6_b6_bold")}</strong>{t("messaging.s6_b6_rest")}</span>,
  ];

  // §09 bullet list — prefix/bold/suffix pattern
  const s9Items = [
    <span key="s9b1">{t("messaging.s9_b1_prefix")}<strong>{t("messaging.s9_b1_bold")}</strong>{t("messaging.s9_b1_suffix")}</span>,
    <span key="s9b2">{t("messaging.s9_b2_prefix")}<strong>{t("messaging.s9_b2_bold")}</strong>{t("messaging.s9_b2_suffix")}</span>,
    t("messaging.s9_b3"),
    <span key="s9b4">{t("messaging.s9_b4_prefix")}<strong>{t("messaging.s9_b4_bold")}</strong>{t("messaging.s9_b4_suffix")}</span>,
  ];

  return (
    <div className="bg-white py-14 sm:py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* ── HERO ── */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-gray-300 py-2 px-4">
              <MessageSquare className="text-orange-400 w-5 h-5" />
              <p className="font-sans text-sm sm:text-base font-semibold text-gray-700">
                {t("messaging.badge")}
              </p>
            </div>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
            {t("messaging.title")}
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-5 leading-relaxed">
            {t("messaging.hero_p")}
          </p>
          <div className="font-sans text-sm sm:text-base text-gray-500 flex flex-wrap justify-center gap-4 sm:gap-6">
            <span>{t("messaging.effective")}</span>
            <span>{t("messaging.lastUpdated")}</span>
          </div>
        </div>

        {/* ── PLATFORM STRIP ── */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 border-b border-gray-200 pb-10">
          {[
            {
              icon: (
                <img
                  src={twilioLogo0}
                  alt="Twilio"
                  className="w-4 h-4 object-contain"
                />
              ),
              label: "Twilio",
            },
            {
              icon: (
                <img
                  src="https://cdn.simpleicons.org/whatsapp/C2410C"
                  alt="WhatsApp"
                  className="w-4 h-4"
                />
              ),
              label: "WhatsApp Business",
            },
            {
              icon: <Phone className="w-4 h-4 text-orange-700" />,
              label: "SMS / MMS",
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
            <ShieldCheck className="w-4 h-4 text-orange-700" />
            CASL · CAN-SPAM · GDPR
          </div>
        </div>

        {/* Back link */}
        <a
          href="/privacy-policy"
          className="inline-flex items-center gap-2 font-sans text-sm text-gray-500 hover:text-[#23378C] transition-colors mb-12"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          {t("messaging.backLink")}
        </a>

        {/* ── TABLE OF CONTENTS ── */}
        <nav
          aria-label="Table of Contents"
          className="mb-12 sm:mb-16 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
        >
          <div className="px-5 sm:px-6 py-4 bg-gray-100 border-b border-gray-200 font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#23378C]">
            {t("messaging.toc_title")}
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {tocItems.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-2 px-5 sm:px-6 py-3.5 text-sm sm:text-base text-gray-600 border-b border-gray-200 hover:text-[#23378C] hover:bg-gray-100 transition-colors font-sans"
                >
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── CONTENT ── */}
        <div className="space-y-14 sm:space-y-16 text-black">
          {/* § 01 — Overview */}
          <section
            id="overview"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="01" />
            <SectionHeading>{t("messaging.s1_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              {t("messaging.s1_p1")}
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              {t("messaging.s1_p2_prefix")}
              <a href="/privacy-policy" className="text-[#23378C] underline">
                {t("messaging.s1_p2_link")}
              </a>
              {t("messaging.s1_p2_suffix")}
            </p>
            <Callout icon={Info} variant="info">
              {t("messaging.s1_callout_prefix")}
              <strong>{t("messaging.s1_callout_bold")}</strong>
              {t("messaging.s1_callout_suffix")}
              <Kw>STOP</Kw>.
            </Callout>
          </section>

          {/* § 02 — Scope & Channels */}
          <section
            id="scope"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="02" />
            <SectionHeading>{t("messaging.s2_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              {t("messaging.s2_p1")}
            </p>

            {/* Scrollable table on mobile */}
            <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
              <table className="w-full text-sm font-sans border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    {[
                      t("messaging.s2_col_channel"),
                      t("messaging.s2_col_uses"),
                      t("messaging.s2_col_optin"),
                      t("messaging.s2_col_optout"),
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200 whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {s2Rows.map((row) => {
                    const isVoice = row.tagColor === "blue";
                    const optoutCell = isVoice ? (
                      <span className="text-gray-700">{t("messaging.s2_voice_optout")}</span>
                    ) : row.channel === "WhatsApp Business" ? (
                      <span><Kw>STOP</Kw> or <Kw>Unsubscribe</Kw></span>
                    ) : (
                      <Kw>STOP</Kw>
                    );
                    return (
                      <tr
                        key={row.channel}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3 font-semibold text-black align-top whitespace-nowrap">
                          {row.channel}
                        </td>
                        <td className="px-4 py-3 text-gray-700 align-top">
                          {row.uses}
                        </td>
                        <td className="px-4 py-3 align-top whitespace-nowrap">
                          <span
                            className={`inline-block font-mono text-xs rounded px-2 py-0.5 ${
                              row.tagColor === "green"
                                ? "bg-gray-100 border border-gray-300 text-gray-700"
                                : "bg-[#23378C]/10 border border-[#23378C]/30 text-[#23378C]"
                            }`}
                          >
                            {row.tag}
                          </span>
                        </td>
                        <td className="px-4 py-3 align-top whitespace-nowrap">
                          {optoutCell}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("messaging.s2_p2")}
            </p>
          </section>

          {/* § 03 — Twilio as Subprocessor */}
          <section
            id="twilio"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="03" />
            <SectionHeading>{t("messaging.s3_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              {t("messaging.s3_p1")}
            </p>
            <Callout icon={Link} variant="info">
              {t("messaging.s3_callout")}
            </Callout>
            <BulletList items={s3Items} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card title={t("messaging.s3_card1")}>
                <a
                  href="https://www.twilio.com/en-us/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#23378C] underline"
                >
                  twilio.com/legal/privacy
                </a>
              </Card>
              <Card title={t("messaging.s3_card2")}>
                <a
                  href="https://www.twilio.com/en-us/legal/aup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#23378C] underline"
                >
                  twilio.com/legal/aup
                </a>
              </Card>
              <Card title={t("messaging.s3_card3")}>
                <a
                  href="https://www.twilio.com/en-us/legal/messaging-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#23378C] underline"
                >
                  twilio.com/legal/messaging-policy
                </a>
              </Card>
              <Card title={t("messaging.s3_card4")}>
                <a
                  href="https://www.whatsapp.com/legal/business-terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#23378C] underline"
                >
                  whatsapp.com/legal/business-terms
                </a>
              </Card>
            </div>
          </section>

          {/* § 04 — Opt-In */}
          <section
            id="opt-in"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="04" />
            <SectionHeading>{t("messaging.s4_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-7">
              {t("messaging.s4_p1_prefix")}
              <strong>{t("messaging.s4_p1_bold")}</strong>
              {t("messaging.s4_p1_suffix")}
            </p>

            {/* Numbered steps */}
            <div className="flex flex-col gap-3 mb-8">
              {s4Steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 border border-orange-200 text-orange-500 font-mono text-xs font-semibold flex items-center justify-center mt-0.5">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold text-black text-base sm:text-lg mb-1">
                      {step.title}
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
                      {step.body_prefix ? (
                        <>
                          {step.body_prefix}
                          <Kw>JOIN</Kw> or <Kw>YES</Kw>
                          {step.body_suffix}
                        </>
                      ) : (
                        step.body
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} variant="warn">
              {t("messaging.s4_callout_prefix")}
              <strong>{t("messaging.s4_callout_bold")}</strong>
              {t("messaging.s4_callout_suffix")}
            </Callout>

            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("messaging.s4_p2")}
            </p>
          </section>

          {/* § 05 — Opt-Out */}
          <section
            id="opt-out"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="05" />
            <SectionHeading>
              {t("messaging.s5_heading")}
            </SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-7">
              {t("messaging.s5_p1")}
            </p>

            {/* Opt-out keyword box */}
            <div className="bg-gray-50 border-2 border-[#23378C] rounded-2xl p-6 sm:p-8 mb-8 text-center">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-black mb-4">
                {t("messaging.s5_box_heading")}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-5">
                {["STOP", "CANCEL", "UNSUBSCRIBE", "QUIT", "END"].map((kw) => (
                  <span
                    key={kw}
                    className="font-mono text-base sm:text-lg font-medium bg-orange-50 border border-orange-200 text-orange-500 rounded-lg px-4 sm:px-5 py-2 tracking-widest"
                  >
                    {kw}
                  </span>
                ))}
              </div>
              <p className="font-sans text-sm sm:text-base text-gray-600">
                {t("messaging.s5_box_p")}
                <strong className="text-black">{t("messaging.s5_box_p_bold")}</strong>
                {t("messaging.s5_box_p_suffix")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Card title={t("messaging.s5_card1")}>
                {t("messaging.s5_card1_body")}
              </Card>
              <Card title={t("messaging.s5_card2")}>
                {t("messaging.s5_card2_body")}
              </Card>
              <Card title={t("messaging.s5_card3")}>
                {t("messaging.s5_card3_prefix")}
                <Kw>START</Kw> or <Kw>YES</Kw>
                {t("messaging.s5_card3_suffix")}
              </Card>
              <Card title={t("messaging.s5_card4")}>
                {t("messaging.s5_card4_prefix")}
                <a
                  href="mailto:privacy@360dmmc.com"
                  className="text-[#23378C] underline"
                >
                  privacy@360dmmc.com
                </a>
                {t("messaging.s5_card4_suffix")}
              </Card>
            </div>

            <Callout icon={Ban} variant="danger">
              {t("messaging.s5_callout")}
            </Callout>
          </section>

          {/* § 06 — Message Types */}
          <section
            id="message-types"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="06" />
            <SectionHeading>{t("messaging.s6_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              {t("messaging.s6_p1")}
            </p>
            <BulletList items={s6Items} />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("messaging.s6_p2")}
            </p>
          </section>

          {/* § 07 — Prohibited Uses */}
          <section
            id="prohibited"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="07" />
            <SectionHeading>{t("messaging.s7_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              {t("messaging.s7_p1")}
            </p>
            <BulletList items={s7Bullets} />
            <Callout icon={AlertTriangle} variant="warn">
              {t("messaging.s7_callout")}
            </Callout>
          </section>

          {/* § 08 — Data Collected */}
          <section
            id="data"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="08" />
            <SectionHeading>{t("messaging.s8_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-7">
              {t("messaging.s8_p1")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              <Card title={t("messaging.s8_card1")}>
                {t("messaging.s8_card1_body")}
              </Card>
              <Card title={t("messaging.s8_card2")}>
                {t("messaging.s8_card2_body")}
              </Card>
              <Card title={t("messaging.s8_card3")}>
                {t("messaging.s8_card3_body")}
              </Card>
              <Card title={t("messaging.s8_card4")}>
                {t("messaging.s8_card4_body")}
              </Card>
            </div>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("messaging.s8_p2")}
            </p>
          </section>

          {/* § 09 — Retention & Deletion */}
          <section
            id="retention"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="09" />
            <SectionHeading>{t("messaging.s9_heading")}</SectionHeading>
            <BulletList items={s9Items} />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              {t("messaging.s9_p1_prefix")}
              <a
                href="mailto:privacy@360dmmc.com"
                className="text-[#23378C] underline"
              >
                privacy@360dmmc.com
              </a>
              {t("messaging.s9_p1_suffix")}
            </p>
          </section>

          {/* § 10 — Applicable Laws */}
          <section
            id="laws"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="10" />
            <SectionHeading>{t("messaging.s10_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-7">
              {t("messaging.s10_p1")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Card title={t("messaging.s10_card1")}>{t("messaging.s10_card1_body")}</Card>
              <Card title={t("messaging.s10_card2")}>{t("messaging.s10_card2_body")}</Card>
              <Card title={t("messaging.s10_card3")}>{t("messaging.s10_card3_body")}</Card>
              <Card title={t("messaging.s10_card4")}>{t("messaging.s10_card4_body")}</Card>
              <Card title={t("messaging.s10_card5")}>{t("messaging.s10_card5_body")}</Card>
              <Card title={t("messaging.s10_card6")}>{t("messaging.s10_card6_body")}</Card>
            </div>
          </section>

          {/* § 11 — Contact */}
          <section id="contact">
            <SectionLabel num="11" />
            <SectionHeading>{t("messaging.s11_heading")}</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              {t("messaging.s11_p1")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <Card title={t("messaging.s11_card1")}>
                <a
                  href="mailto:privacy@360dmmc.com"
                  className="text-[#23378C] underline"
                >
                  privacy@360dmmc.com
                </a>
              </Card>
              <Card title={t("messaging.s11_card2")}>
                <a
                  href="mailto:info@360dmmc.com"
                  className="text-[#23378C] underline"
                >
                  info@360dmmc.com
                </a>
              </Card>
              <Card title={t("messaging.s11_card3")}>
                <a
                  href="https://360dmmc.com"
                  className="text-[#23378C] underline"
                >
                  360dmmc.com
                </a>
              </Card>
            </div>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-2">
              {t("messaging.s11_p2_prefix")}
              <strong>{t("messaging.s11_p2_bold1")}</strong>
              {t("messaging.s11_p2_infix")}
              <strong>{t("messaging.s11_p2_bold2")}</strong>
              {t("messaging.s11_p2_suffix")}
            </p>
            <Callout icon={Info} variant="info">
              {t("messaging.s11_callout_prefix")}
              <a href="/privacy-policy" className="text-[#23378C] underline">
                {t("messaging.s11_callout_link")}
              </a>
              {t("messaging.s11_callout_suffix")}
            </Callout>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MessagingPolicy;
