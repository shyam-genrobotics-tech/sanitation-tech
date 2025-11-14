"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What types of manholes can Bandicoot clean?",
    answer:
      "Bandicoot is designed to clean various types of manholes, including standard circular manholes, rectangular manholes, and those with different depths and diameters commonly found in urban and industrial settings. Its adaptable robotic arm and versatile attachments allow it to handle diverse waste materials like sludge, silt, and solid debris.",
  },
  {
    question: "How does Bandicoot ensure operator safety?",
    answer:
      "Operator safety is paramount. Bandicoot eliminates the need for human entry into hazardous manholes. The entire operation is controlled remotely from a safe distance. Additionally, the robot is equipped with gas sensors to detect toxic gases and HD cameras for clear visibility, further enhancing safety and operational control.",
  },
  {
    question: "Is training provided for operating Bandicoot?",
    answer:
      "Yes, Genrobotics provides comprehensive training programs for operating and maintaining the Bandicoot robot. We focus on empowering existing sanitation workers by transforming them into skilled robotic operators, ensuring they can efficiently and safely use the technology.",
  },
  {
    question:
      "What is the cleaning efficiency of Bandicoot compared to manual methods?",
    answer:
      "Bandicoot significantly improves cleaning efficiency. It can clean manholes more thoroughly and in less time compared to manual methods. The robotic arm's precision and the system's ability to handle various types of waste contribute to a more effective and consistent cleaning outcome.",
  },
  {
    question: "Can Bandicoot be used in different weather conditions?",
    answer:
      "Bandicoot is designed with an IP68 waterproof rating, making it robust and capable of operating in wet and challenging weather conditions. This ensures its reliability and durability for year-round sanitation operations.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  // const faqSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "FAQPage",
  //   mainEntity: faqData.map((item) => ({
  //     "@type": "Question",
  //     name: item.question,
  //     acceptedAnswer: {
  //       "@type": "Answer",
  //       text: item.answer,
  //     },
  //   })),
  // };
  return (
    <section className="faq_sec">
      <div className="container faq_container">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion-wrapper">
          <div className="accordion">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="accordion-question"
                  onClick={() => toggleIndex(index)}
                >
                  <span>{item.question}</span>
                  <div className="accordion-icon">
                    {activeIndex === index ? "−" : "+"}
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="accordion-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
