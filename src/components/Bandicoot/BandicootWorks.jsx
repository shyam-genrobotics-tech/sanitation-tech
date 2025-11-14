"use client";
import Image from "next/image";
import React, { useState } from "react";

import * as Hi from "react-icons/hi";

const robotOperationSteps = [
  {
    title: "Stand Unit Deployment & Positioning",
    description:
      "The Bandicoot robot simplifies the complex and dangerous task of manhole cleaning into a safe and systematic process. The operator controls the robot from a safe distance using a user-friendly interface.",
  },
  {
    title: "Robotics Unit Insertion",
    description:
      "The multi-jointed robotic arm (Robotics Unit), equipped with a specialized bucket/grabber, is lowered into the manhole.",
  },
  {
    title: "Stabilization & Mobility",
    description:
      "Once inside, the robotic legs expand to provide stability and allow movement within the manhole for comprehensive cleaning.",
  },
  {
    title: "Inspection & Cleaning",
    description:
      "Integrated HD cameras provide a clear view, while sensors detect hazardous gases. The arm efficiently collects sludge, debris, and other waste.",
  },
  {
    title: "Waste Removal (Bucket System)",
    description:
      "Collected waste is lifted by the bucket system and deposited into a designated container or vehicle.",
  },
  {
    title: "Operator Safety",
    description:
      "The entire operation is controlled remotely, ensuring zero human entry and complete operator safety.",
  },
];

function BandicootWorks() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="bandicoot_works">
      <div className="container-fluid work_container">
        <div className="lg:px-[90]">
          <div className="works_wrapper">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <h1 className="bandicoot_title_">
                  How Bandicoot <span className="md:block">Works?</span>
                </h1>
              </div>
              <div className="hidden md:block col-12 col-lg-8 col-md-6 col-sm-12">
                <p className="top_title">
                  <b>A Simplified Cleaning Process using Robotics & AI</b>
                </p>
                <p className="sub_title">
                  The Bandicoot robot simplifies the complex and dangerous task
                  of manhole cleaning into a safe and systematic process. The
                  operator controls the robot from a safe distance using a
                  user-friendly interface.
                </p>
              </div>
            </div>
            <br />
            <div className="row md:mt-4">
              <div className="col-lg-7 col-md-12 col-sm-12 mt-4">
                <div className="bandicoot_wroks_img_wrapper">
                  <iframe
                    width="100%"
                    height="643"
                    src="https://www.youtube.com/embed/5K1nTDWUmxI"
                    title="BANDICOOT MINI WORKING VIDEO"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="md:hidden">
                  <p className="top_title">
                    <b>A Simplified Cleaning Process using Robotics & AI</b>
                  </p>
                  <p className="sub_title">
                    The Bandicoot robot simplifies the complex and dangerous
                    task of manhole cleaning into a safe and systematic process.
                    The operator controls the robot from a safe distance using a
                    user-friendly interface.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 mt-4">
                <div className="works_accordion">
                  {robotOperationSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`works_accordion_item ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      <div
                        className="works_accordion_header"
                        onClick={() => toggleIndex(index)}
                      >
                        <span className="works_accordion_title">
                          {index + 1}. {step.title}
                        </span>
                        <span className="works_accordion_icon">
                          {activeIndex === index ? (
                            <Hi.HiArrowSmUp />
                          ) : (
                            <Hi.HiArrowSmDown />
                          )}
                        </span>
                      </div>
                      <div className="works_accordion_content">
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BandicootWorks;
