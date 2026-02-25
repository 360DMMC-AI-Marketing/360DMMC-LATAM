import React, { useEffect } from "react";
import {
  Info,
  Scale,
  ChevronRight,
  Facebook,
  Instagram,
  ShieldCheck,
} from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | 360DMMC";
  }, []);

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

  return (
    <div className="bg-white py-14 sm:py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-gray-300 py-2 px-4">
              <Scale className="text-orange-400 w-5 h-5" />
              <p className="font-sans text-sm sm:text-base font-semibold text-gray-700">
                Legal Document
              </p>
            </div>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
            Privacy <span className="text-[#23378C]">Policy</span>
          </h1>
          <div className="font-sans text-sm sm:text-base text-gray-500 flex flex-wrap justify-center gap-4 sm:gap-6">
            <span>Effective: January 1, 2025</span>
            <span>Last Updated: February 2025</span>
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
            Meta Platform Terms Compliant
          </div>
        </div>

        {/* TABLE OF CONTENTS */}
        <nav
          aria-label="Table of Contents"
          className="mb-12 sm:mb-16 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
        >
          <div className="px-5 sm:px-6 py-4 bg-gray-100 border-b border-gray-200 font-sans text-lg sm:text-sm font-bold tracking-widest uppercase text-[#23378C]">
            Contents
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["#overview", "Overview"],
              ["#data-collected", "Data We Collect"],
              ["#meta-platforms", "Meta Platform Data"],
              ["#use-of-data", "How We Use Data"],
              ["#sharing", "Data Sharing"],
              ["#retention", "Data Retention"],
              ["#security", "Security"],
              ["#rights", "Your Rights"],
              ["#children", "Children's Privacy"],
              ["#cookies", "Cookies & Tracking"],
              ["#third-parties", "Third Parties"],
              ["#contact", "Contact Us"],
            ].map(([href, label]) => (
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
            <SectionHeading>Overview</SectionHeading>
            <p className="font-sans mb-5 text-base sm:text-lg text-gray-700 leading-relaxed">
              360DMMC Inc. ("360DMMC," "we," "us," or "our") is an AI consulting
              and digital transformation agency headquartered in Canada. We
              operate services including AI automation workflows, chatbots,
              voice AI systems, and digital marketing tools. This Privacy Policy
              explains how we collect, use, disclose, and protect personal
              information when you interact with our website (
              <a
                href="https://360dmmc.com"
                className="text-[#23378C] underline"
              >
                360dmmc.com
              </a>
              ), our applications, and any services we provide.
            </p>
            <p className="font-sans mb-7 text-base sm:text-lg text-gray-700 leading-relaxed">
              By using our services, you acknowledge that you have read and
              understood this Privacy Policy. If you do not agree with our
              practices, please refrain from using our services.
            </p>
            <Callout icon={Info}>
              This policy is also designed to comply with the{" "}
              <strong>Meta Platform Terms</strong> and data use policies
              governing our integration with Facebook, Instagram, and WhatsApp.
              We process Meta platform data only as permitted under those terms
              and applicable law.
            </Callout>
          </section>

          {/* SECTION 2 — Data We Collect */}
          <section
            id="data-collected"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="02" />
            <SectionHeading>Data We Collect</SectionHeading>
            <p className="font-sans mb-8 text-base sm:text-lg text-gray-700 leading-relaxed">
              We collect information you provide directly, information collected
              automatically, and — where applicable — information received from
              third-party platforms such as Meta.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                [
                  "Directly Provided",
                  "Name, email address, phone number, company information, and messages submitted through contact or inquiry forms.",
                ],
                [
                  "Automatically Collected",
                  "IP address, browser type, device identifiers, pages visited, referral source, and timestamps via cookies and analytics tools.",
                ],
                [
                  "From Meta Platforms",
                  "Profile data, messages, and interaction data received when users connect with us via Facebook, Instagram, or WhatsApp Business APIs.",
                ],
                [
                  "Business Clients",
                  "Information shared by clients to configure automation workflows, including business names, CRM records, and campaign data.",
                ],
              ].map(([title, text]) => (
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
            <SectionHeading>
              Meta Platform Data (Facebook, Instagram & WhatsApp)
            </SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-7 leading-relaxed">
              360DMMC uses the Meta Platform APIs — including the Facebook Graph
              API, Instagram Graph API, and WhatsApp Business API — to provide
              automation, messaging, and analytics services on behalf of our
              clients. We are subject to the{" "}
              <strong>Meta Platform Terms</strong> and process Meta platform
              data strictly in accordance with those terms.
            </p>
            <Callout icon={Scale}>
              <strong>Restricted Data Use.</strong> We only use data obtained
              from Meta platforms to deliver or improve the specific service or
              feature the user requested. We do not use such data to build user
              profiles for advertising, nor do we sell it to third parties.
            </Callout>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              Specifically, regarding Meta platform data, we commit to the
              following:
            </p>
            <BulletList
              items={[
                "We only request Meta permissions that are strictly necessary for the service we provide.",
                "We access and process Meta user data only as described in this policy and only with user authorization.",
                "We do not use Facebook, Instagram, or WhatsApp data to target advertising to individuals on Meta platforms or elsewhere.",
                "We do not transfer Meta platform data to data brokers, ad networks, or any entity that aggregates data for commercial advertising purposes.",
                "We do not use Meta platform data to profile individuals for any purpose other than the explicit service provided.",
                "We retain Meta platform data only as long as necessary to fulfill the purpose for which it was obtained and delete it upon client termination or user request.",
                "We do not sell, license, or otherwise commercialize Meta platform data.",
                "All service providers we engage who may access Meta platform data are contractually bound to the same or stricter restrictions as those described herein.",
                "We cooperate with Meta's monitoring, auditing, and enforcement activities as required by Meta Platform Terms.",
                "We maintain records of all in-effect versions of this Privacy Policy and will provide such records to Meta upon request.",
              ]}
            />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              Users who interact with us via WhatsApp should note that
              end-to-end encryption protects messages in transit on WhatsApp's
              platform. When messages are received by the WhatsApp Business API,
              they are processed through Meta's infrastructure and may be stored
              in accordance with WhatsApp's own policies. We receive message
              content only as permitted by the API and process it solely to
              deliver the requested service.
            </p>
          </section>

          {/* SECTION 4 — How We Use Your Data */}
          <section
            id="use-of-data"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="04" />
            <SectionHeading>How We Use Your Data</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              We use personal information only for the purposes described below.
              We do not use your data in ways that are inconsistent with the
              context in which it was collected.
            </p>
            <BulletList
              items={[
                "To provide, operate, and improve our services and AI automation tools.",
                "To respond to inquiries, support requests, and business communications.",
                "To configure and maintain automation workflows on behalf of clients.",
                "To analyze usage patterns and improve platform reliability and performance.",
                "To fulfill legal obligations and enforce our terms of service.",
                "To send service-related communications (not marketing without consent).",
                "To detect, prevent, and address technical issues, fraud, or security threats.",
              ]}
            />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              We do <strong>not</strong> sell your personal information. We do
              not use your data for behavioral advertising without your explicit
              consent.
            </p>
          </section>

          {/* SECTION 5 — Data Sharing & Disclosure */}
          <section
            id="sharing"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="05" />
            <SectionHeading>Data Sharing & Disclosure</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-7 leading-relaxed">
              We do not sell, rent, or trade personal information. We may share
              information only in the following limited circumstances:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                [
                  "Service Providers",
                  "Trusted vendors (e.g., cloud hosting, analytics, communication tools) who process data on our behalf under strict contractual obligations.",
                ],
                [
                  "Clients",
                  "Data processed as part of a client engagement is shared only with that client, solely for the services they have engaged us to perform.",
                ],
                [
                  "Legal Requirements",
                  "We may disclose data when required by law, court order, or government authority, or when necessary to protect our legal rights.",
                ],
                [
                  "Business Transfers",
                  "In the event of a merger, acquisition, or sale of assets, personal data may transfer to the successor entity under equivalent protections.",
                ],
              ].map(([title, text]) => (
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
              All third-party service providers who may access Meta platform
              data are contractually required to comply with Meta Platform Terms
              and applicable data protection laws before gaining access to any
              such data.
            </p>
          </section>

          {/* SECTION 6 — Data Retention & Deletion */}
          <section
            id="retention"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="06" />
            <SectionHeading>Data Retention & Deletion</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              We retain personal information only for as long as necessary to
              fulfill the purposes outlined in this policy, comply with legal
              obligations, resolve disputes, and enforce our agreements.
            </p>
            <BulletList
              items={[
                "Client project data is retained for the duration of the engagement and up to 12 months thereafter unless a shorter period is requested.",
                "Meta platform data is deleted within 30 days of service termination or upon user request, whichever is earlier.",
                "Website analytics data is retained for up to 24 months in aggregated, anonymized form.",
                "Communication records (emails, support tickets) are retained for up to 3 years for legal and operational purposes.",
              ]}
            />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              You may request deletion of your personal data at any time by
              contacting us at{" "}
              <a
                href="mailto:privacy@360dmmc.com"
                className="text-[#23378C] underline"
              >
                privacy@360dmmc.com
              </a>
              . We will process deletion requests within 30 days, subject to any
              legal retention requirements.
            </p>
          </section>

          {/* SECTION 7 — Security */}
          <section
            id="security"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="07" />
            <SectionHeading>Security</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              We implement industry-standard technical and organizational
              measures to protect your personal information from unauthorized
              access, disclosure, alteration, or destruction. Our security
              practices include:
            </p>
            <BulletList
              items={[
                "Encryption of data in transit using TLS 1.2 or higher.",
                "Encryption of sensitive data at rest.",
                "Role-based access controls limiting data access to authorized personnel only.",
                "Regular security assessments and vulnerability reviews.",
                "Incident response procedures with breach notification timelines compliant with applicable law.",
              ]}
            />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              No method of transmission over the internet or electronic storage
              is 100% secure. We will notify affected users of any data breach
              involving their personal information as required by applicable
              law.
            </p>
          </section>

          {/* SECTION 8 — Your Rights */}
          <section
            id="rights"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="08" />
            <SectionHeading>Your Rights</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-7 leading-relaxed">
              Depending on your jurisdiction, you may have the following rights
              regarding your personal information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                [
                  "Access",
                  "Request a copy of the personal data we hold about you.",
                ],
                [
                  "Correction",
                  "Request correction of inaccurate or incomplete data.",
                ],
                [
                  "Deletion",
                  "Request erasure of your personal data from our systems.",
                ],
                [
                  "Portability",
                  "Receive your data in a structured, machine-readable format.",
                ],
                [
                  "Objection",
                  "Object to processing of your data for certain purposes.",
                ],
                [
                  "Restriction",
                  "Request restriction of how we process your data.",
                ],
                [
                  "Withdraw Consent",
                  "Withdraw consent for processing at any time where consent is the legal basis.",
                ],
                [
                  "Complain",
                  "Lodge a complaint with a supervisory authority in your jurisdiction.",
                ],
              ].map(([name, desc]) => (
                <div
                  key={name}
                  className="border border-gray-200 rounded-lg p-4 sm:p-5 bg-gray-50"
                >
                  <p className="font-sans font-semibold text-black text-xs sm:text-sm uppercase tracking-wider mb-2">
                    {name}
                  </p>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:privacy@360dmmc.com"
                className="text-[#23378C] underline"
              >
                privacy@360dmmc.com
              </a>
              . We will respond within 30 days. We will not discriminate against
              you for exercising your privacy rights.
            </p>
          </section>

          {/* SECTION 9 — Children's Privacy */}
          <section
            id="children"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="09" />
            <SectionHeading>Children's Privacy</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              Our services are not directed to individuals under the age of 13
              (or 16 in jurisdictions where a higher age applies, such as the
              European Union under GDPR). We do not knowingly collect personal
              information from children.
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              If you believe we have inadvertently collected data from a child,
              please contact us immediately at{" "}
              <a
                href="mailto:privacy@360dmmc.com"
                className="text-[#23378C] underline"
              >
                privacy@360dmmc.com
              </a>{" "}
              and we will promptly delete that information. Where we process
              Meta platform data, we do not permit processing of data from users
              who do not meet Meta's minimum age requirements for the applicable
              platform.
            </p>
          </section>

          {/* SECTION 10 — Cookies & Tracking */}
          <section
            id="cookies"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="10" />
            <SectionHeading>Cookies & Tracking Technologies</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              Our website uses cookies and similar tracking technologies to
              operate, analyze, and improve our services. Types of cookies we
              use:
            </p>
            <ul className="space-y-0 mb-8">
              {[
                {
                  label: "Essential cookies",
                  desc: "Required for the website to function (e.g., session management, security).",
                },
                {
                  label: "Analytics cookies",
                  desc: "Help us understand how visitors interact with our website (e.g., Google Analytics).",
                },
                {
                  label: "Preference cookies",
                  desc: "Remember your settings and preferences for a better experience.",
                },
              ].map(({ label, desc }) => (
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
              You can control cookies through your browser settings. Disabling
              cookies may limit some functionality of our website. We do not use
              advertising or tracking cookies for behavioral ad targeting.
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              If we use the Meta Pixel or Meta Business Tools on our website, we
              disclose this use and ensure our cookie consent mechanism captures
              any required consent before such tools activate.
            </p>
          </section>

          {/* SECTION 11 — Third-Party Services & Links */}
          <section
            id="third-parties"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="11" />
            <SectionHeading>Third-Party Services & Links</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              Our services may integrate with or link to third-party platforms,
              including Meta's suite of products (Facebook, Instagram,
              WhatsApp). This Privacy Policy applies only to 360DMMC's
              processing activities. Third-party platforms operate under their
              own privacy policies, which we encourage you to review:
            </p>
            <ul className="space-y-0 mb-8">
              {[
                {
                  text: "Meta Privacy Policy: ",
                  link: "https://www.meta.com/en-gb/privacy_policy/",
                  label: "meta.com/privacy_policy",
                },
                {
                  text: "WhatsApp Privacy Policy: ",
                  link: "https://www.whatsapp.com/legal/privacy-policy",
                  label: "whatsapp.com/legal/privacy-policy",
                },
                {
                  text: "Instagram Privacy Policy: governed by Meta's Privacy Policy above.",
                  link: null,
                  label: null,
                },
              ].map(({ text, link, label }, i) => (
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
              We are not responsible for the data practices of third-party
              platforms. Our integration with Meta platforms is governed by
              Meta's Platform Terms, which we agree to and comply with as a
              condition of using their APIs.
            </p>
          </section>

          {/* SECTION 12 — International Data Transfers */}
          <section
            id="international"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="12" />
            <SectionHeading>International Data Transfers</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              360DMMC operates primarily in Canada. If you are located in the
              European Union, the United Kingdom, or another jurisdiction with
              data transfer restrictions, your information may be transferred to
              and processed in countries that do not provide the same level of
              data protection as your home country.
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              When we transfer personal data internationally, we rely on
              appropriate safeguards such as standard contractual clauses,
              adequacy decisions, or other legally recognized transfer
              mechanisms. EU/UK residents may contact us to learn more about the
              safeguards in place.
            </p>
          </section>

          {/* SECTION 13 — Changes to This Policy */}
          <section
            id="changes"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="13" />
            <SectionHeading>Changes to This Policy</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or for
              other operational reasons. When we make changes, we will update
              the "Last Updated" date at the top of this page.
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 mb-5 leading-relaxed">
              We retain all previous versions of this Privacy Policy and will
              provide them to Meta or relevant authorities upon request. For
              significant changes, we will notify affected users via email or a
              prominent notice on our website at least 30 days before the change
              takes effect.
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              Your continued use of our services after any changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          {/* SECTION 14 — Contact Us */}
          <section id="contact">
            <SectionLabel num="14" />
            <SectionHeading>Contact Us</SectionHeading>
            <p className="font-sans mb-8 text-base sm:text-lg text-gray-700 leading-relaxed">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or how we handle your personal information, please
              contact us:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                [
                  "Privacy Inquiries",
                  "privacy@360dmmc.com",
                  "mailto:privacy@360dmmc.com",
                ],
                [
                  "General Contact",
                  "info@360dmmc.com",
                  "mailto:info@360dmmc.com",
                ],
                ["Website", "360dmmc.com", "https://360dmmc.com"],
              ].map(([title, text, href]) => (
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
              We will respond to all privacy-related inquiries within{" "}
              <strong>30 days</strong>. For requests related to Meta platform
              data, we will prioritize responses in accordance with Meta's
              Platform Terms requirements.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
