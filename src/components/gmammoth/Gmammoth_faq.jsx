"use client";
import React from "react";
import FAQ from "../common/FAQ";

const gMammothFaqs = [
  {
    question: "What is G Mammoth 4-in-1 and what are its main functions?",
    answer:
      "G Mammoth is a versatile, all-in-one system designed for comprehensive urban and industrial maintenance. It integrates four key functions into a single unit: Automatic Grabbing for solid waste, High-Pressure Jetting to clear blockages, Powerful Suction to remove slurry, and a smart Inspection system for real-time monitoring.",
  },
  {
    question: "What makes the G Mammoth solution unique?",
    answer:
      "G Mammoth's uniqueness lies in its multi-functionality. Instead of requiring separate machines for different tasks (like a jetting truck, a suction machine, and a grabber), G Mammoth combines these capabilities. This significantly reduces operational costs, simplifies logistics, and improves the overall efficiency of sanitation and maintenance work.",
  },
  {
    question: "Who can benefit most from using G Mammoth?",
    answer:
      "G Mammoth is ideal for organizations that handle a wide variety of maintenance challenges. This includes Municipal Corporations, Smart City authorities, Public Works Departments, and large industrial estates that need a single, flexible solution for cleaning drains, manholes, and other confined spaces.",
  },
  {
    question: "How does technology enhance G Mammoth's operations?",
    answer:
      "G Mammoth leverages technology for smarter operations. It can be integrated with the G-Crow platform, which provides real-time GPS tracking, performance monitoring, and automated report generation. This data-driven approach allows for better planning, increased accountability, and proactive maintenance of infrastructure.",
  },
];

function Gmammoth_faq() {
  return (
    <>
      <FAQ faqData={gMammothFaqs} />
    </>
  );
}

export default Gmammoth_faq;
