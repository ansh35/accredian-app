"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { faqData } from "../data/faqs";

export default function FAQSection() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<string | false>(false);

  return (
    <section
      id="faqs"
      className="w-full flex justify-center mt-16 md:py-12 xl:px-12 px-4"
    >
      <div className="w-full max-w-340">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Frequently Asked{" "}
          <span className="text-blue-600">Questions</span>
        </h2>

        <div className="flex gap-4 mt-8 md:mt-12 md:flex-row flex-col">
          {/* LEFT */}
          <div className="w-full md:flex-[0.3] relative">
            <div className="no-scrollbar md:max-w-sm md:px-4 py-2 flex flex-row md:flex-col gap-4 md:gap-5 overflow-x-auto">
              {faqData.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => {
                    setActive(i);
                    setOpen(false);
                  }}
                  className={`w-full max-w-70 rounded-md px-4 py-4 text-center whitespace-nowrap transition-all ${
                    active === i
                      ? "bg-white border border-gray-200 shadow-md text-blue-600"
                      : "border-2 border-neutral-300 text-neutral-500"
                  }`}
                >
                  <span className="text-sm lg:text-lg font-semibold">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            <button className="absolute md:hidden right-0 top-1/2 -translate-y-1/2 border bg-white rounded-full p-1 shadow-md">
              <ChevronRightIcon fontSize="small" />
            </button>
          </div>

          {/* RIGHT */}
          <div className="w-full md:flex-[0.7] md:px-4 flex flex-col gap-3">
            {faqData[active].faqs.map((faq, i) => (
              <Accordion
                key={i}
                expanded={open === `p${i}`}
                onChange={(_, expanded) =>
                  setOpen(expanded ? `p${i}` : false)
                }
                disableGutters
                elevation={0}
                sx={{
                  borderRadius: "8px",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    minHeight: "58px",
                    px: 2,
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                    },
                  }}
                >
                  <h3 className="text-lg font-semibold text-left">
                    {faq.question}
                  </h3>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    pt: 0,
                    px: 2,
                    pb: 2,
                  }}
                >
                  <p className="text-gray-600 leading-7">
                    {faq.answer}
                  </p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}