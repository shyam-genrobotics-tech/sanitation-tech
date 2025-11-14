"use client";
import React from "react";
import FAQ from "../common/FAQ";
const faqs = [
  {
    question: "What is the typical timeline for a custom project?",
    answer:
      "The timeline varies greatly depending on the complexity of the challenge. A project can range from a few months for modifications to existing platforms to over a year for developing a completely new system from scratch. We provide a detailed project timeline after the initial discovery and consultation phase.",
  },
  {
    question: "Is there a minimum project size or budget for custom solutions?",
    answer:
      "While we specialize in complex challenges, we are open to discussing projects of various scales. The best approach is to contact us with your problem statement, and our team can evaluate the feasibility and provide a preliminary proposal.",
  },
  {
    question: "How involved will our team be in the development process?",
    answer:
      "We believe in a co-creation process. Your team's domain expertise is invaluable. We encourage active participation and regular feedback throughout the design, prototyping, and testing phases to ensure the final solution perfectly aligns with your operational needs.",
  },
  {
    question: "What happens after the custom solution is deployed?",
    answer:
      "Our partnership continues long after deployment. We provide comprehensive training for your staff, a warranty on the system, and various tiers of ongoing maintenance and support contracts to ensure your custom solution operates reliably for years to come.",
  },
];

function CustomisedSolutions_faq() {
  return (
    <>
     
      <FAQ faqData={faqs} />
    </>
  );
}

export default CustomisedSolutions_faq;
