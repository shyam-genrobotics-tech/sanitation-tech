"use client";
import React from "react";
import FAQ from "../common/FAQ";

const faqData = [
  {
    question: "How does Mobility+ improve upon the standard Bandicoot?",
    answer:
      "Mobility+ integrates the Bandicoot robot with a vehicle and automated waste handling systems. This significantly reduces deployment time, simplifies logistics, and allows for immediate on-site waste management, making operations faster and more convenient, especially for widespread cleaning tasks.",
  },
  {
    question: "Is the Bandicoot robot detachable from the Mobility+ vehicle?",
    answer:
      "Yes, a key feature of Mobility+ is the detachable Bandicoot robotic unit. This allows the robot to be deployed independently in narrow lanes or areas where the vehicle cannot access, offering maximum operational flexibility.",
  },
  {
    question:
      "What is the capacity of the integrated waste storage in Mobility+?",
    answer:
      "The waste storage capacity is designed to handle multiple manhole cleanings before needing to be emptied. Specific capacity details can be provided based on the chosen vehicle configuration.",
  },
];

function Mobility_faq() {
  return (
    <>
      <FAQ faqData={faqData} />
    </>
  );
}

export default Mobility_faq;
