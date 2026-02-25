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

const MessagingPolicy = () => {
  useEffect(() => {
    document.title = "Messaging & SMS Policy | 360DMMC";
  }, []);

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

  return (
    <div className="bg-white py-14 sm:py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* ── HERO ── */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-gray-300 py-2 px-4">
              <MessageSquare className="text-orange-400 w-5 h-5" />
              <p className="font-sans text-sm sm:text-base font-semibold text-gray-700">
                Legal Document
              </p>
            </div>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
            Messaging &amp; <span className="text-[#23378C]">SMS Policy</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-5 leading-relaxed">
            This policy governs how 360DMMC Inc. and its clients send and
            receive messages via SMS, MMS, WhatsApp, and other messaging
            channels powered by Twilio. It fulfills opt-in/opt-out disclosure
            requirements for Twilio WhatsApp Business Account registration.
          </p>
          <div className="font-sans text-sm sm:text-base text-gray-500 flex flex-wrap justify-center gap-4 sm:gap-6">
            <span>Effective: January 1, 2025</span>
            <span>Last Updated: February 2025</span>
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
          View Full Privacy Policy
        </a>

        {/* ── TABLE OF CONTENTS ── */}
        <nav
          aria-label="Table of Contents"
          className="mb-12 sm:mb-16 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
        >
          <div className="px-5 sm:px-6 py-4 bg-gray-100 border-b border-gray-200 font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#23378C]">
            Contents
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["#overview", "Overview"],
              ["#scope", "Scope & Channels"],
              ["#twilio", "Twilio as Subprocessor"],
              ["#opt-in", "Opt-In (Consent)"],
              ["#opt-out", "Opt-Out (Stop)"],
              ["#message-types", "Message Types"],
              ["#prohibited", "Prohibited Uses"],
              ["#data", "Data Collected via Messaging"],
              ["#retention", "Retention & Deletion"],
              ["#laws", "Applicable Laws"],
              ["#contact", "Contact Us"],
            ].map(([href, label]) => (
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
            <SectionHeading>Overview</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              360DMMC Inc. is an AI consulting and digital transformation agency
              that builds and operates automated messaging systems on behalf of
              business clients. We use <strong>Twilio</strong> as our primary
              communications platform to send and receive messages across SMS,
              MMS, and WhatsApp Business API channels.
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              This Messaging &amp; SMS Policy explains how we collect consent,
              what types of messages we send, and how recipients can manage
              their preferences — including opting out at any time. This policy
              supplements our{" "}
              <a href="/privacy-policy" className="text-[#23378C] underline">
                Privacy Policy
              </a>{" "}
              and applies to all messaging activities conducted by 360DMMC or on
              behalf of 360DMMC's clients.
            </p>
            <Callout icon={Info} variant="info">
              By providing your phone number and opting in to our messaging
              services, you consent to receive the specific message types
              described in this policy.{" "}
              <strong>Message and data rates may apply.</strong> You can opt out
              at any time by replying <Kw>STOP</Kw>.
            </Callout>
          </section>

          {/* § 02 — Scope & Channels */}
          <section
            id="scope"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="02" />
            <SectionHeading>Scope &amp; Channels</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              This policy covers all messaging channels we operate via Twilio:
            </p>

            {/* Scrollable table on mobile */}
            <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
              <table className="w-full text-sm font-sans border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    {[
                      "Channel",
                      "Use Cases",
                      "Opt-In Required",
                      "Opt-Out Keyword",
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
                  {[
                    {
                      channel: "WhatsApp Business",
                      uses: "Service notifications, support replies, AI chatbot responses, appointment reminders, lead follow-up",
                      tag: { label: "Yes — Explicit", color: "green" },
                      optout: (
                        <span>
                          <Kw>STOP</Kw> or <Kw>Unsubscribe</Kw>
                        </span>
                      ),
                    },
                    {
                      channel: "SMS (Long Code / Toll-Free)",
                      uses: "Transactional alerts, appointment confirmations, OTP / verification codes, follow-up messages",
                      tag: { label: "Yes — Explicit", color: "green" },
                      optout: <Kw>STOP</Kw>,
                    },
                    {
                      channel: "MMS",
                      uses: "Rich media follow-up, image-based notifications",
                      tag: { label: "Yes — Explicit", color: "green" },
                      optout: <Kw>STOP</Kw>,
                    },
                    {
                      channel: "Voice (Twilio)",
                      uses: "AI receptionist calls, appointment reminders, outbound notifications",
                      tag: { label: "Varies by jurisdiction", color: "blue" },
                      optout: (
                        <span className="text-gray-700">
                          Spoken opt-out or written request
                        </span>
                      ),
                    },
                  ].map(({ channel, uses, tag, optout }) => (
                    <tr
                      key={channel}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-black align-top whitespace-nowrap">
                        {channel}
                      </td>
                      <td className="px-4 py-3 text-gray-700 align-top">
                        {uses}
                      </td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">
                        <span
                          className={`inline-block font-mono text-xs rounded px-2 py-0.5 ${
                            tag.color === "green"
                              ? "bg-gray-100 border border-gray-300 text-gray-700"
                              : "bg-[#23378C]/10 border border-[#23378C]/30 text-[#23378C]"
                          }`}
                        >
                          {tag.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">
                        {optout}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              Messaging is conducted by 360DMMC directly or on behalf of our
              business clients. In either case, this policy and its
              opt-in/opt-out requirements apply.
            </p>
          </section>

          {/* § 03 — Twilio as Subprocessor */}
          <section
            id="twilio"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="03" />
            <SectionHeading>Twilio as Messaging Subprocessor</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              We use <strong>Twilio Inc.</strong> (headquartered in San
              Francisco, CA, USA) to power our messaging infrastructure. Twilio
              acts as a <strong>data subprocessor</strong> — processing message
              content, phone numbers, and delivery metadata on our behalf and
              under our instructions.
            </p>
            <Callout icon={Link} variant="info">
              Our WhatsApp Business messaging is operated through a registered{" "}
              <strong>Meta Business Manager account</strong> and WhatsApp
              Business Account (WABA), connected to Twilio's WhatsApp Business
              Platform. This means our messaging practices are also subject to{" "}
              <strong>Meta's WhatsApp Business Terms of Service</strong> and{" "}
              <strong>WhatsApp's Business Messaging Policy</strong>.
            </Callout>
            <BulletList
              items={[
                "Twilio is contractually bound to process personal data only as directed by us, under a Data Processing Agreement (DPA) compliant with applicable law.",
                <span>
                  Twilio may monitor message content for spam detection, fraud
                  prevention, and compliance with its Acceptable Use Policy and
                  applicable telecommunications regulations — as described at{" "}
                  <a
                    href="https://www.twilio.com/en-us/legal/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#23378C] underline"
                  >
                    twilio.com/legal/privacy
                  </a>
                  .
                </span>,
                "Message data processed via Twilio may be stored in the United States or other countries where Twilio operates. Appropriate transfer safeguards are maintained.",
                "We do not authorize Twilio to use end-user messaging data for Twilio's own marketing purposes.",
                "Twilio's Acceptable Use Policy and Messaging Policy apply to all messages transmitted through their platform. We comply with these policies as a condition of using the service.",
              ]}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card title="Twilio Privacy Notice">
                <a
                  href="https://www.twilio.com/en-us/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#23378C] underline"
                >
                  twilio.com/legal/privacy
                </a>
              </Card>
              <Card title="Twilio Acceptable Use Policy">
                <a
                  href="https://www.twilio.com/en-us/legal/aup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#23378C] underline"
                >
                  twilio.com/legal/aup
                </a>
              </Card>
              <Card title="Twilio Messaging Policy">
                <a
                  href="https://www.twilio.com/en-us/legal/messaging-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#23378C] underline"
                >
                  twilio.com/legal/messaging-policy
                </a>
              </Card>
              <Card title="WhatsApp Business Terms">
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
            <SectionHeading>Opt-In: How We Obtain Consent</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-7">
              We require <strong>explicit, prior, informed consent</strong>{" "}
              before sending any message to a user. We never send unsolicited
              messages. Consent is collected through one or more of the
              following mechanisms:
            </p>

            {/* Numbered steps */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                {
                  num: "01",
                  title: "Web / Landing Page Form",
                  body: "Users provide their phone number via a web form that includes a clearly labeled checkbox or disclosure stating they consent to receive messages. The form specifies the type of messages and the sender (360DMMC or named client).",
                },
                {
                  num: "02",
                  title: "Client Onboarding or Sign-Up Flow",
                  body: "During account creation or service enrollment, users are presented with opt-in language for WhatsApp or SMS communications as part of the registration process. Opt-in is not pre-checked.",
                },
                {
                  num: "03",
                  title: "User-Initiated WhatsApp Message",
                  body: "When a user sends the first message to a WhatsApp Business number, this constitutes a user-initiated session. We may respond within the 24-hour WhatsApp session window. For ongoing proactive messaging, explicit opt-in is still required.",
                },
                {
                  num: "04",
                  title: "SMS Keyword Opt-In",
                  body: (
                    <span>
                      Users may text a specific keyword (e.g., <Kw>JOIN</Kw> or{" "}
                      <Kw>YES</Kw>) to a designated number to opt in to a
                      messaging program. A confirmation message is sent
                      immediately confirming enrollment.
                    </span>
                  ),
                },
                {
                  num: "05",
                  title: "In-Person or Verbal Consent (Documented)",
                  body: "For in-person onboarding, verbal consent may be collected if immediately documented in writing and confirmed via an opt-in confirmation message to the user's number.",
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 border border-orange-200 text-orange-500 font-mono text-xs font-semibold flex items-center justify-center mt-0.5">
                    {num}
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold text-black text-base sm:text-lg mb-1">
                      {title}
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} variant="warn">
              <strong>Consent records are retained.</strong> We maintain records
              of all opt-in events — including the method, timestamp, and scope
              of consent — for a minimum of <strong>12 months</strong> after the
              last communication with that contact, in compliance with Twilio's
              requirements and applicable law.
            </Callout>

            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              Consent obtained for one message type or program does not
              automatically extend to other programs. Each messaging program
              requires its own opt-in where required by law or Twilio's
              policies.
            </p>
          </section>

          {/* § 05 — Opt-Out */}
          <section
            id="opt-out"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="05" />
            <SectionHeading>
              Opt-Out: How to Stop Receiving Messages
            </SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-7">
              You have the right to stop receiving messages from us at any time.
              We honor all opt-out requests promptly and without penalty.
            </p>

            {/* Opt-out keyword box */}
            <div className="bg-gray-50 border-2 border-[#23378C] rounded-2xl p-6 sm:p-8 mb-8 text-center">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-black mb-4">
                To Stop Messages, Reply:
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
                These keywords work on both SMS and WhatsApp. Opt-out requests
                are processed within{" "}
                <strong className="text-black">24 hours</strong>. You will
                receive one final confirmation message acknowledging your
                opt-out.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Card title="After Opt-Out (Marketing)">
                We immediately stop all marketing, promotional, and
                non-essential messages to your number.
              </Card>
              <Card title="Transactional Messages">
                Critical account, safety, or legally required notifications may
                still be sent unless prohibited by applicable law.
              </Card>
              <Card title="Re-Opt-In">
                You may re-subscribe at any time by texting <Kw>START</Kw> or{" "}
                <Kw>YES</Kw>, or via a new opt-in form.
              </Card>
              <Card title="Written Request">
                You can also opt out by emailing{" "}
                <a
                  href="mailto:privacy@360dmmc.com"
                  className="text-[#23378C] underline"
                >
                  privacy@360dmmc.com
                </a>{" "}
                with your phone number and opt-out request.
              </Card>
            </div>

            <Callout icon={Ban} variant="danger">
              We <strong>never</strong> send messages after an opt-out. Ignoring
              opt-out requests violates Twilio's Acceptable Use Policy,
              WhatsApp's Business Policy, CASL, CAN-SPAM, and GDPR. Any such
              violation would result in immediate suspension of our messaging
              capabilities.
            </Callout>
          </section>

          {/* § 06 — Message Types */}
          <section
            id="message-types"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="06" />
            <SectionHeading>Message Types We Send</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              We send only the following categories of messages, consistent with
              the purpose for which consent was collected:
            </p>
            <BulletList
              items={[
                <span>
                  <strong>Service Notifications</strong> — Confirmations,
                  appointment reminders, system alerts, and status updates
                  related to services the user has requested.
                </span>,
                <span>
                  <strong>AI Chatbot / Receptionist Responses</strong> —
                  Automated replies from AI-powered systems in response to
                  user-initiated inquiries on WhatsApp or SMS.
                </span>,
                <span>
                  <strong>Lead Follow-Up</strong> — Automated follow-up messages
                  sent after a user has submitted a lead form or inquiry, where
                  consent was provided at the point of submission.
                </span>,
                <span>
                  <strong>Transactional Messages</strong> — Billing
                  confirmations, security alerts, OTPs, and other
                  transaction-driven messages.
                </span>,
                <span>
                  <strong>Marketing &amp; Promotional Messages</strong> — Sent
                  only to users who have explicitly opted in to promotional
                  communications. Always include a clear opt-out option.
                </span>,
                <span>
                  <strong>Support Conversations</strong> — Two-way messages
                  initiated by the user for customer support or assistance
                  purposes.
                </span>,
              ]}
            />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              We use WhatsApp Message Templates (pre-approved by Meta/WhatsApp)
              for business-initiated messages outside the 24-hour session
              window. Template messages are used only in compliance with
              WhatsApp's template messaging guidelines.
            </p>
          </section>

          {/* § 07 — Prohibited Uses */}
          <section
            id="prohibited"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="07" />
            <SectionHeading>Prohibited Uses</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              In compliance with Twilio's Acceptable Use Policy, WhatsApp's
              Business Messaging Policy, and applicable law, we strictly
              prohibit the following:
            </p>
            <BulletList
              items={[
                "Sending messages to users who have not provided explicit opt-in consent.",
                "Sending messages to users who have previously opted out.",
                "Sending spam, bulk unsolicited messages, or messages that violate anti-spam laws.",
                "Sending prohibited content including: illegal goods or services, hate speech, harassment, adult content to non-consenting users, phishing or fraudulent messaging.",
                "Using deceptive sender identification or impersonating another business or individual.",
                "Using messaging to facilitate illegal activities.",
                "Circumventing WhatsApp's session window restrictions by using unapproved workarounds.",
                "Sharing or selling contact lists with message content derived from Twilio or Meta platforms.",
              ]}
            />
            <Callout icon={AlertTriangle} variant="warn">
              360DMMC's clients who use our messaging infrastructure are
              contractually bound to the same prohibited use restrictions.
              Violations may result in immediate termination of messaging
              services and may be reported to Twilio and/or Meta.
            </Callout>
          </section>

          {/* § 08 — Data Collected */}
          <section
            id="data"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="08" />
            <SectionHeading>Data Collected via Messaging</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-7">
              When you interact with our messaging services, we may collect and
              process the following information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              <Card title="Phone Number">
                Your phone number is used to identify you as a message recipient
                and to route messages correctly.
              </Card>
              <Card title="Message Content">
                The content of messages you send to us, used solely to respond
                to your inquiry or deliver the requested service.
              </Card>
              <Card title="Delivery Metadata">
                Timestamps, delivery status (sent, delivered, read), and error
                codes — used for service reliability and compliance.
              </Card>
              <Card title="Opt-In Records">
                The method, date, and scope of your consent to receive messages
                — retained for compliance purposes.
              </Card>
            </div>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              We do not use messaging data to build behavioral profiles, target
              advertising, or sell to third parties. Message content is not used
              for any purpose other than delivering the service you requested.
            </p>
          </section>

          {/* § 09 — Retention & Deletion */}
          <section
            id="retention"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="09" />
            <SectionHeading>Retention &amp; Deletion</SectionHeading>
            <BulletList
              items={[
                <span>
                  Opt-in consent records are retained for a minimum of{" "}
                  <strong>12 months</strong> after the last communication with a
                  contact.
                </span>,
                <span>
                  Message content logs are retained for up to{" "}
                  <strong>12 months</strong> for operational and compliance
                  purposes, then deleted or anonymized.
                </span>,
                "Phone numbers of opted-out contacts are maintained on a suppression list to ensure future opt-out compliance — this record is not used for any other purpose.",
                <span>
                  Upon verified deletion request, all personal messaging data is
                  deleted within <strong>30 days</strong>, except where
                  retention is required by law.
                </span>,
              ]}
            />
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
              To request deletion of your messaging data, contact{" "}
              <a
                href="mailto:privacy@360dmmc.com"
                className="text-[#23378C] underline"
              >
                privacy@360dmmc.com
              </a>{" "}
              with your phone number and request details.
            </p>
          </section>

          {/* § 10 — Applicable Laws */}
          <section
            id="laws"
            className="pb-14 sm:pb-16 border-b border-gray-200"
          >
            <SectionLabel num="10" />
            <SectionHeading>Applicable Laws &amp; Standards</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-7">
              Our messaging practices are designed to comply with the following
              regulations and industry standards:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Card title="CASL (Canada)">
                Canada's Anti-Spam Legislation requires express or implied
                consent before sending commercial electronic messages. We comply
                with all CASL requirements including identification and
                unsubscribe mechanisms.
              </Card>
              <Card title="CAN-SPAM (US)">
                The Controlling the Assault of Non-Solicited Pornography And
                Marketing Act requires honest sender identification, opt-out
                mechanisms, and honoring opt-out requests within 10 business
                days.
              </Card>
              <Card title="GDPR (EU/UK)">
                For EU/UK contacts, we rely on explicit consent as the legal
                basis for messaging. Users have the right to withdraw consent at
                any time. We comply with GDPR data subject rights.
              </Card>
              <Card title="TCPA (US)">
                The Telephone Consumer Protection Act regulates automated SMS
                messages to US numbers. We obtain prior express written consent
                before sending marketing texts to US contacts.
              </Card>
              <Card title="CTIA Guidelines">
                We follow the Cellular Telecommunications Industry Association
                messaging guidelines for SMS best practices including opt-in,
                opt-out, and message frequency disclosures.
              </Card>
              <Card title="WhatsApp Business Policy">
                All WhatsApp messaging complies with Meta's WhatsApp Business
                Messaging Policy, Commerce Policy, and Business Solution Terms.
              </Card>
            </div>
          </section>

          {/* § 11 — Contact */}
          <section id="contact">
            <SectionLabel num="11" />
            <SectionHeading>Contact Us</SectionHeading>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              For questions about this Messaging Policy, to opt out of
              messaging, or to exercise your data rights, contact us:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <Card title="Messaging / Privacy">
                <a
                  href="mailto:privacy@360dmmc.com"
                  className="text-[#23378C] underline"
                >
                  privacy@360dmmc.com
                </a>
              </Card>
              <Card title="General Inquiries">
                <a
                  href="mailto:info@360dmmc.com"
                  className="text-[#23378C] underline"
                >
                  info@360dmmc.com
                </a>
              </Card>
              <Card title="Website">
                <a
                  href="https://360dmmc.com"
                  className="text-[#23378C] underline"
                >
                  360dmmc.com
                </a>
              </Card>
            </div>
            <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-2">
              We will respond to all messaging-related inquiries within{" "}
              <strong>30 days</strong>. Opt-out requests via SMS/WhatsApp reply
              are processed within <strong>24 hours</strong>.
            </p>
            <Callout icon={Info} variant="info">
              This policy is read in conjunction with our full{" "}
              <a href="/privacy-policy" className="text-[#23378C] underline">
                Privacy Policy
              </a>
              . In the event of conflict, the more protective provision applies.
            </Callout>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MessagingPolicy;
