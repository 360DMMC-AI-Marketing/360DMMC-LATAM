import React, { useState } from "react";
import FramerArrow from "./FramerArrow";
import { toast } from "react-toastify";

const positions = [
  "Marketing Intern",
  "Business Development Intern",
  "Web Development Intern",
  "UX/UI Design Intern",
  "AI/ML Intern",
  "Data Analytics Intern",
];

export const ApplyForm = () => {
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
      toast.error("Please upload your resume");
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
        toast.success(
          "Application submitted! We’ll review and contact you soon.",
        );
        setFormData({
          firstname: "",
          email: "",
          position: "",
          cover_letter: "",
          resume: null,
        });
        e.target.reset();
      } else {
        toast.error("Submission failed");
      }
    } catch (err) {
      toast.error("Network error");
    }
  };

  return (
    <section className="bg-white py-10 px-4 max-sm:mx-5">
      <div className="max-w-xl mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="font-heading text-4xl font-semibold text-[#222222]">
            Apply Now
          </h2>
          <p className="font-sans text-gray-600 mt-2">
            Fill out the form below to apply for an internship position.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="font-sans text-sm font-medium">Full Name *</label>
            <input
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              type="text"
              required
              placeholder="Your Full Name"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#23378C]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-sans text-sm font-medium">
              Email Address *
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              placeholder="Your Email Address"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#23378C]"
            />
          </div>

          {/* Position */}
          <div>
            <label className="font-sans text-sm font-medium">Position *</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
            >
              <option value="">Select a position</option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>

          {/* Resume */}
          <div>
            <label className="font-sans text-sm font-medium">
              Resume / CV *
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
              Why do you want to join us?
            </label>
            <textarea
              name="cover_letter"
              value={formData.cover_letter}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us briefly about yourself..."
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#23378C]"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer group inline-flex items-center gap-2 rounded-full bg-[#23378C] px-8 py-3 text-[15px] font-semibold text-white hover:bg-black"
          >
            Submit Application
            <FramerArrow />
          </button>
        </form>
      </div>
    </section>
  );
};
