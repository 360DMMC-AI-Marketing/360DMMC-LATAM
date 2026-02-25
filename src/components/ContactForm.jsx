import React, { useState } from "react";
import FramerArrow from "./FramerArrow";
import { Mail, MapPin } from "lucide-react";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🚨 Block submit if consent not checked
    if (!formData.consent) {
      toast.error("You must agree to receive messages before submitting.");
      return;
    }

    const hubspotData = {
      fields: [
        { name: "firstname", value: formData.name },
        { name: "email", value: formData.email },
        { name: "message", value: formData.message },
        { name: "phone", value: formData.phone },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/242979007/35792b95-df71-4dc7-99b3-631991d2395b",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hubspotData),
        },
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          consent: false,
        });
      } else {
        toast.error("Submission failed");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[500px] max-sm:w-full rounded-2xl max-sm:rounded-xl border border-gray-200 p-8 max-sm:p-5 flex flex-col gap-5 bg-white shadow-sm mt-10"
      >
        <h1 className="font-semibold text-center text-black text-4xl max-sm:text-xl">
          Schedule A Meeting
        </h1>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your email"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Share your message"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm resize-none outline-none focus:border-gray-400"
          />
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Phone Number</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Your phone number"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
          />
        </div>

        {/* Consent Section — REQUIRED BY TWILIO */}
        <div className="space-y-2">
          <label className="flex gap-3 ">
            {/* Hidden native checkbox */}
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="sr-only"
            />

            {/* Custom checkbox UI */}
            <div
              className={`mt-[3px] h-4 w-4 shrink-0 rounded border-[1.5px] border-gray-500 flex items-center justify-center transition-colors cursor-pointer ${
                formData.consent ? "bg-orange-400 border-none" : "bg-white"
              }`}
            >
              {formData.consent && (
                <svg
                  className="h-[10px] w-[10px] text-white"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="2,6 5,9 10,3" />
                </svg>
              )}
            </div>

            <div className="text-sm leading-5">
              <p>
                I agree to receive SMS/WhatsApp messages from 360DMMC. Message
                frequency varies. Reply STOP to unsubscribe.
              </p>
              <p className="text-gray-600 mt-1">
                Standard message and data rates may apply.
              </p>
              <p className="text-gray-600 mt-1">
                <a
                  href="/privacy-policy"
                  className="underline hover:text-orange-400 cursor-pointer"
                >
                  Privacy Policy
                </a>
                {" & "}
                <a
                  href="/messaging-policy"
                  className="underline hover:text-orange-400 cursor-pointer"
                >
                  Terms
                </a>
              </p>
            </div>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="cursor-pointer w-30 max-sm:w-full group inline-flex items-center justify-center gap-2 rounded-full bg-[#23378C] px-5 py-3 text-[15px] font-semibold text-white hover:bg-black transition-colors"
        >
          Submit
          <FramerArrow />
        </button>
      </form>
      <div className=" mt-10 text-lg font-bold md:hidden lg:hidden">
        {/* Top pill */}
        <div className="mb-8 flex max-sm:justify-center max-sm:items-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
            <span className="flex h-6 w-6 items-center justify-center  p-1">
              <Mail className="text-orange-500" size={20} />
            </span>
            <p className="font-sans text-[16px]">Get In Touch</p>
          </div>
        </div>
        <div className="flex text-md items-center gap-2 max-sm:gap-5 mb-3">
          <MapPin className="w-5 max-sm:w-9 text-gray-700"></MapPin>
          <p className="text-gray-700">
            1 East Erie Street, Suite 525-2501 Chicago, IL 60611
          </p>
        </div>
        <div className="flex text-md items-center gap-2 max-sm:gap-5 mb-3">
          <Mail className="w-5 text-gray-700"></Mail>
          <a
            target="_blank"
            href="mailto:Consult@360DMMC.com"
            className="text-gray-700 cursor-pointer underline underline-offset-1"
          >
            Consult@360DMMC.com
          </a>
        </div>
        <div className="flex text-md items-center gap-2 max-sm:gap-5 ">
          <img
            src="https://cdn.simpleicons.org/whatsapp/364153"
            alt="WhatsApp"
            class="w-5"
          />
          <p className="text-gray-700">+1 844 491-3441</p>
        </div>
      </div>
    </div>
  );
};
