"use client";
import Image from "next/image";
import React, { useState } from "react";

import * as Hi from "react-icons/hi";

function HowWorks({
  title,
  subTitle,
  description,
  video,
  robotOperationSteps,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="bandicoot_works">
      <div className="container-fluid work_container">
        <div className="lg:px-[2rem]">
          <div className="works_wrapper">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <h1
                  className="bandicoot_title_"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
              <div className="md:hidden col-lg-7 col-md-6 col-sm-12 mt-4">
                <div className="bandicoot_wroks_img_wrapper">
                  <iframe
                    width="100%"
                    height="400"
                    src={video}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12">
                <b>
                  <p
                    className="top_title"
                    dangerouslySetInnerHTML={{ __html: subTitle }}
                  />
                </b>
                <p
                  className="sub_title"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </div>
            </div>
            <br />
            <div className="row md:mt-4">
              <div className="hidden md:block col-lg-7 col-md-6 col-sm-12">
                <div className="bandicoot_wroks_img_wrapper">
                  <iframe
                    width="100%"
                    height="400"
                    src={video}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12">
                {/* <div className="robot-steps">
                  {robotOperationSteps.map((step, index) => (
                    <div key={index} className="step">
                      <p className="step-data">
                        <b>
                          {index + 1}. {step.title}:{" "}
                        </b>
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div> */}

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

export default HowWorks;
