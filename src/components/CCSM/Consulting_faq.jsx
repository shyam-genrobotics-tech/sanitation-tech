import React from "react";
import FAQ from "../common/FAQ";

const consultingFaqs = [
  {
    question: "Will you assess our existing safety procedures?",
    answer:
      "Absolutely. Our process begins with a comprehensive audit of your current safety protocols and on-ground practices. We identify gaps and provide actionable recommendations for improvement.",
  },
  {
    question: "Which industries do you provide consulting for?",
    answer:
      "We provide consulting for a wide range of industries that involve confined space work, including Oil & Gas, Chemical Processing, Manufacturing, Public Utilities (water and sewage), and any other sector where workers are required to enter hazardous enclosed areas.",
  },
  {
    question: "Is this a one-time consulting service or is it ongoing?",
    answer:
      "We offer both. We can provide a one-time comprehensive assessment and plan, or we can engage in an ongoing partnership to provide continuous monitoring, periodic audits, and support to ensure long-term safety and compliance.",
  },
  {
    question:
      "Will you provide training for our employees after the consultation?",
    answer:
      "Yes, employee training is a crucial part of our service. We conduct detailed training sessions on the new SOPs, safe work practices, emergency response procedures, and the operation of any recommended automated equipment to ensure your team is fully competent and confident.",
  },
];

function Consulting_faq() {
  return (
    <>
     
      <FAQ faqData={consultingFaqs} />
    </>
  );
}

export default Consulting_faq;
