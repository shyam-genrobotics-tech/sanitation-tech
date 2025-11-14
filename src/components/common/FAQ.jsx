"use client";
import React, { useState } from "react";

function FAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <section className="faq_sec">
      <div className="container faq_container">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion-wrapper">
          <div className="accordion">
            {faqData &&
              Array.isArray(faqData) &&
              faqData.length != 0 &&
              faqData.map((item, index) => (
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
