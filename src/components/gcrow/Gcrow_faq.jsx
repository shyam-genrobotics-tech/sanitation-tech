import React from "react";
import FAQ from "../common/FAQ";

const faqs = [
  {
    question: "Can G Crow integrate with our existing robotic fleet?",
    answer:
      "Yes, G Crow is designed to seamlessly integrate with most of the robotic systems, ensuring minimal disruption to your current operations.",
  },
  {
    question: "How secure is our operational data on G Crow?",
    answer:
      "G Crow employs enterprise-grade encryption and multi-layered security protocols to ensure your operational data remains fully protected and confidential.",
  },
  {
    question: "Is the platform easy for our field operators to use?",
    answer:
      "Absolutely. G Crow features an intuitive interface with simplified workflows, making it easy for field operators to adapt quickly with minimal training.",
  },
  {
    question: "What kind of support and training do you provide?",
    answer:
      "We offer comprehensive onboarding, training modules, and 24/7 customer support to ensure smooth platform adoption and continued assistance.",
  },
];

function Gcrow_faq() {
  return (
    <>
      <FAQ faqData={faqs} />
    </>
  );
}

export default Gcrow_faq;
