import React, { useState } from "react";
import FramerArrow from "./FramerArrow";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const ApplyForm = () => {
  const { t } = useTranslation();

  const positions = [
    { value: "Marketing Intern", label: t("careers.apply.pos_marketing") },
    { value: "Business Development Intern", label: t("careers.apply.pos_bizdev") },
    { value: "Web Development Intern", label: t("careers.apply.pos_webdev") },
    { value: "UX/UI Design Intern", label: t("careers.apply.pos_uxui") },
    { value: "AI/ML Intern", label: t("careers.apply.pos_aiml") },
    { value: "Data Analytics Intern", label: t("careers.apply.pos_data") },
  ];

  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    position: "",
    cover_letter: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      toast.error(t("careers.apply.toast_noResume"));
      return;
    }

    // NOTE:
    // HubSpot API cannot accept file directly.
    // For now we send filename so HR knows attachment exists.
    // Next step we will upload file properly.
    const hubspotData = {
      fields: [
        { name: "firstname", value: formData.firstname },
        { name: "email", value: formData.email },
        { name: "position", value: formData.position },
        { name: "cover_letter", value: formData.cover_letter },
        { name: "resume", value: formData.resume.name },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/242979007/6b21369d-2862-4b9f-8783-b1ede818addf",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hubspotData),
        },
      );

      if (res.ok) {
        toast.success(t("careers.apply.toast_success"));
        setFormData({
          firstname: "",
          email: "",
          position: "",
          cover_letter: "",
          resume: null,
        });
        e.target.reset();
      } else {
        toast.error(t("careers.apply.toast_failed"));
      }
    } catch (err) {
      toast.error(t("careers.apply.toast_network"));
    }
  };

  return (
    <section className="bg-white py-10 px-4 max-sm:mx-5">
      <div className="max-w-xl mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="font-heading text-4xl font-semibold text-[#222222]">
            {t("careers.apply.heading")}
          </h2>
          <p className="font-sans text-gray-600 mt-2">
            {t("careers.apply.subtext")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="font-sans text-sm font-medium">{t("careers.apply.labelName")}</label>
            <input
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              type="text"
              required
              placeholder={t("careers.apply.placeholderName")}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#23378C]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-sans text-sm font-medium">
              {t("careers.apply.labelEmail")}
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              placeholder={t("careers.apply.placeholderEmail")}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#23378C]"
            />
          </div>

          {/* Position */}
          <div>
            <label className="font-sans text-sm font-medium">{t("careers.apply.labelPosition")}</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
            >
              <option value="">{t("careers.apply.placeholderPosition")}</option>
              {positions.map((pos) => (
                <option key={pos.value} value={pos.value}>
                  {pos.label}
                </option>
              ))}
            </select>
          </div>

          {/* Resume */}
          <div>
            <label className="font-sans text-sm font-medium">
              {t("careers.apply.labelResume")}
            </label>
            <input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleChange}
              className="mt-1 w-full text-sm text-gray-600
              file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
              file:bg-[#23378C] file:text-white hover:file:opacity-90"
            />
          </div>

          {/* Message */}
          <div>
            <label className="font-sans text-sm font-medium">
              {t("careers.apply.labelCover")}
            </label>
            <textarea
              name="cover_letter"
              value={formData.cover_letter}
              onChange={handleChange}
              rows="4"
              placeholder={t("careers.apply.placeholderCover")}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#23378C]"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer group inline-flex items-center gap-2 rounded-full bg-[#23378C] px-8 py-3 text-[15px] font-semibold text-white hover:bg-black"
          >
            {t("careers.apply.submit")}
            <FramerArrow />
          </button>
        </form>
      </div>
    </section>
  );
};
