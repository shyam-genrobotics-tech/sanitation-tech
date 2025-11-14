"use client";
import React from "react";
import FAQ from "../common/FAQ";

const faqs = [
  {
    question: "What kind of hardware is needed for this service?",
    answer:
      "Our digitalisation service seamlessly integrates with our range of automated cleaning solutions like Bandicoot, Bandicoot Mobility+, Wilboar, etc. The specific hardware required depends on your unique sanitation infrastructure and cleaning needs. We conduct a detailed assessment to recommend the most suitable combination of systems.",
  },
  {
    question:
      "Can the G-Crow platform integrate with our existing municipal systems?",
    answer:
      "Yes, the G-Crow platform is designed with flexibility in mind. We offer API integration capabilities to connect with your existing complaint management systems, asset databases, or other municipal software to create a unified operational dashboard.",
  },
  {
    question: "How long does the implementation process take?",
    answer:
      "The implementation timeline varies depending on the scale of the project, the number of assets to be integrated, and the complexity of your existing systems. After our initial assessment, we provide a detailed project plan with clear timelines, typically ranging from a few weeks for smaller deployments to a few months for large-scale city-wide projects.",
  },
  {
    question: "What kind of training and support is provided to our staff?",
    answer:
      "We provide comprehensive on-site training for both field operators (on using the hardware and mobile app) and administrative staff (on using the G-Crow dashboard). Our support includes a dedicated helpdesk, regular system maintenance, and performance reviews to ensure you get the most out of our integrated solution.",
  },
];

function UGD_faq() {
  return (
    <>
     
      <FAQ faqData={faqs} />
    </>
  );
}

export default UGD_faq;
