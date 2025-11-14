"use client";
import React from "react";
import FAQ from "../common/FAQ";

const faqs = [
  {
    question: "What types of waste can Wilboar handle?",
    answer:
      "Wilboar is primarily designed to remove thick mud, sludge, chemical-laden waste, and other solid debris for industrial purposes. It can handle waste in Oil & Gas tanks, Sewage Treatment Plants (STPs), and large drainage systems.",
  },
  {
    question: "Can Wilboar operate in hazardous, explosion-prone environments?",
    answer:
      "Yes. Wilboar is engineered with safety as a core principle. For environments requiring specific certifications like ATEX (Explosion-Proof), we provide specially customized, compliant models. Please contact our technical team to discuss your specific safety and compliance requirements.",
  },
  {
    question: "How does Wilboar adapt to different types of industrial waste?",
    answer:
      "Wilboar's key strength is its versatility, achieved through a customizable end-effector system. Depending on the job, we can equip it with various tools like heavy-duty grinders for solid waste, loaders for semi-solids, and high-pressure jetting nozzles for dislodging tough sludge. This allows it to handle a wide range of materials effectively.",
  },
  {
    question: "From how far can an operator control Wilboar?",
    answer:
      "Wilboar is operated using a remote control panel. This allows the operator to work from a completely safe distance from the hazardous area. Typically, its operational range is quite long, and the distance can be adjusted by extending the cable length if required.",
  },
  {
    question: "What is the main difference between Bandicoot and Wilboar?",
    answer:
      "The primary difference lies in their application and design. Bandicoot is optimized for vertical confined spaces like manholes in urban areas. In contrast, Wilboar is a heavy-duty robotic rover designed for cleaning larger, horizontal confined spaces such as industrial tanks, canals, drains, and Sewage Treatment Plants (STPs).",
  },
];

function Wilboar_faq() {
  return (
    <>
      <FAQ faqData={faqs} />
    </>
  );
}

export default Wilboar_faq;
