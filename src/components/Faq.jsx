import React, { useState } from "react";
import { Eye, EyeOff, Sparkle, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      <div className="bg-white">
        <div className="bg-white w-full ">
          <div className="mx-auto max-w-6xl text-center">
            {/* Top pill */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-1 rounded-xl border border-[#222222]/25 py-2 px-3 text-[12px] font-semibold tracking-wide">
                <span className="flex h-6 w-6 items-center justify-center  p-1">
                  <Sparkle className="text-orange-500" size={20} />
                </span>
                <p className="font-sans text-[16px]">{t("faq.pill")}</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="bg-white text-center font-heading font-semibold text-4xl ">
          {t("faq.heading")}
        </h1>
        <section className="bg-white px-6 pt-5 pb-15">
          <div className="mx-auto max-w-5xl">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-black/15 py-6">
                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="cursor-pointer flex w-full items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-6">
                      {/* <span className="text-lg font-semibold text-black">
                        {faq.id}/
                      </span> */}
                      <h3 className="text-lg font-semibold text-black">
                        {faq.q}
                      </h3>
                    </div>

                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-orange-500 text-white"
                          : "bg-black/10 text-black"
                      }`}
                    >
                      {isOpen ? <Eye size={18} /> : <EyeOff size={18} />}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-4xl font-sans font-medium text-md  text-black/80">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
export default Faq;
