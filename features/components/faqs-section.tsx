"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  faqs: FAQItem[];
};

export default function FAQSection() {
  /*
   EASY TO EDIT:
   Just add/remove categories or questions here.
   Pulled from your uploaded DOM sections.
  */
  const faqData: FAQCategory[] = [
    {
      title: "About the Course",
      faqs: [
        {
          question:
            "What is the ideal team size for corporate training?",
          answer:
            "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
        },
        {
          question:
            "How do we get started with Accredian?",
          answer:
            "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
        },
      ],
    },
    {
      title: "About the Delivery",
      faqs: [
        {
          question:
            "Can the courses be customized for specific industries or teams?",
          answer:
            "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
        },
        {
          question:
            "Who are the instructors for these programs?",
          answer:
            "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
        },
        {
          question:
            "What formats are the programs delivered in?",
          answer:
            "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
        },
      ],
    },
    {
      title: "Miscellaneous",
      faqs: [
        {
          question:
            "Do you provide certification after completion?",
          answer:
            "Yes, eligible programs include completion certificates depending on the course structure.",
        },
        {
          question:
            "Can programs be scheduled for working professionals?",
          answer:
            "Yes. Weekend, evening, fast-track, and custom schedules can be arranged.",
        },
        {
          question:
            "Do you support enterprise-wide upskilling?",
          answer:
            "Yes, large-scale learning rollouts can be designed for teams, departments, or full organizations.",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFAQs = faqData[activeCategory].faqs;

  return (
    <section
      id="faqs"
      className="w-full flex justify-center mt-16 sm:mt-16 md:py-12 xl:px-12 px-4"
    >
      <div className="w-full max-w-[85rem]">
        {/* Heading */}
        <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
          Frequently Asked{" "}
          <span className="text-blue-600">
            Questions
          </span>
        </h2>

        <div className="flex gap-4 mt-8 md:mt-12 md:flex-row flex-col">
          {/* LEFT CATEGORY MENU */}
          <div className="w-full md:flex-[0.3] relative">
            <div className="no-scrollbar md:max-w-sm md:px-4 py-2 flex flex-row md:flex-col items-center gap-4 md:gap-6 max-w-[90vw] overflow-x-auto">
              {faqData.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => {
                    setActiveCategory(index);
                    setOpenIndex(0);
                  }}
                  className={`w-full max-w-[280px] rounded-md px-4 py-4 text-center transition ${
                    activeCategory === index
                      ? "bg-white border shadow-lg text-blue-600"
                      : "border-2 border-neutral-300 text-neutral-500"
                  }`}
                >
                  <span className="text-sm lg:text-lg font-semibold whitespace-nowrap">
                    {category.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile Arrow Decoration */}
            <button className="absolute md:hidden block z-20 right-0 top-1/2 -translate-y-1/2 drop-shadow-lg border bg-white rounded-full p-1">
              <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT FAQ LIST */}
          <div className="w-full md:flex-[0.7] md:px-4 flex flex-col gap-4">
            {currentFAQs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="bg-white border rounded-lg shadow-sm"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex justify-between items-center px-4 py-4 text-left gap-4"
                  >
                    <h3 className="text-lg font-semibold">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      className={`shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-gray-600 leading-7">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}