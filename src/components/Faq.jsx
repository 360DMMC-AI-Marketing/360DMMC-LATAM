import React, { useState } from "react";
import { Eye, EyeOff, Sparkle, User } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "How long do AI projects take?",
    answer:
      "Project timelines vary based on complexity. Simple automation projects can be completed in 2-4 weeks, while comprehensive AI transformations may take 2-3 months. We provide detailed timelines during our discovery phase.",
  },
  {
    id: "02",
    question: "Do we need an internal technical team?",
    answer:
      "No, you don't need an internal technical team. 360DMMC provides end-to-end implementation, training, and ongoing support. We work with your existing team regardless of their technical background.",
  },
  {
    id: "03",
    question: "Is this custom software or off-the-shelf tools?",
    answer:
      "We offer both. We leverage proven AI platforms and tools where appropriate, and build custom solutions when your needs require it. Our approach is always tailored to deliver the best ROI for your specific situation.",
  },
  {
    id: "04",
    question: "What happens as AI evolves?",
    answer:
      "AI technology evolves rapidly, and so do our solutions. We provide continuous optimization and updates to ensure your systems stay current. Our partnership model includes ongoing support and adaptation.",
  },
  {
    id: "05",
    question: "What industries do you work with?",
    answer:
      "We work with SMEs across various industries including retail, professional services, manufacturing, and more. Our AI solutions are adaptable to diverse business contexts.",
  },
  {
    id: "06",
    question: "What is the cost structure?",
    answer:
      "Pricing depends on the number of workflows, integrations, and level of support needed. All packages are built for SMB budgets and tied to measurable ROI so you always see value from the investment.",
  },
];

const Faq = () => {
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
                <p className="font-sans text-[16px]">FAQ</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="bg-white text-center font-heading font-semibold text-4xl ">
          Frequently Asked Questions
        </h1>
        <section className="bg-white px-6 pt-5 pb-15">
          <div className="mx-auto max-w-5xl">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.id} className="border-b border-black/15 py-6">
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
                        {faq.question}
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
                        {faq.answer}
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
