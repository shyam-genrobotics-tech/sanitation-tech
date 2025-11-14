"use client";

import React, { useState, useEffect } from "react";
import bg from "@/assets/services/ugd-operations-digitalisation/digitalisation_midsection_image.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


function UGDmanagement() {
  return (
    <section className="complex-risks_sec">
      <div className="container-fluid">
        <div className="lg:px-[2rem]">
            <div className="flex flex-col items-center text-center">
              <div className="md:hidden why_bandicoot_content mb-6 w-full max-w-[900px] text-center">
                <h1>The Inefficiencies of Traditional UGD Management</h1>
                <span className="block text-gray-600">
                  Moving from Reactive Response to Proactive Management
                </span>
                <hr className="my-3 mx-auto w-[60%] border-gray-400" />
              </div>

              <div className="bandicoot_image_wrapper mb-6">
                <LazyLoadImage
                  src={bg.src}
                  width={0}
                  height={0}
                  alt="UGD management image"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                  }}
                />
              </div>
              <div className="hidden md:block why_bandicoot_content mb-6 w-full max-w-[900px] text-center">
                <h1>The Inefficiencies of Traditional UGD Management</h1>
                <span className="block text-gray-600">
                  Moving from Reactive Response to Proactive Management
                </span>
                <hr className="my-3 mx-auto w-[60%] border-gray-400" />
              </div>
              <div className="why_bandicoot_content max-w-[900px] text-justify">
                <p>
                  Traditional management of Underground Drainage (UGD) systems
                  relies heavily on manual record-keeping, guesswork, and
                  reactive maintenance. This often leads to significant
                  inefficiencies:
                </p>
                <ul className="list-disc list-inside mt-3 text-left">
                  <li>
                    <strong>Lack of Real-time Data:</strong> Without live
                    monitoring, authorities are often unaware of blockages or
                    overflows until they become critical public issues.
                  </li>
                  <li>
                    <strong>Inefficient Resource Allocation:</strong> Field
                    teams are dispatched without precise information, leading to
                    wasted time, fuel, and manpower.
                  </li>
                  <li>
                    <strong>No Accountability:</strong> It is difficult to track
                    if cleaning tasks were completed, their duration, and the
                    performance of the crew.
                  </li>
                  <li>
                    <strong>Delayed Response Times:</strong> Citizen complaints
                    often get lost in bureaucratic processes, leading to public
                    dissatisfaction and health hazards.
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default UGDmanagement;

{/*"use client";
import React from "react";
import bg from "@/assets/services/ugd-operations-digitalisation/midsection-woman-writing-book 1.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function UGDmanagement() {
  return (
    <section className="complex-risks_sec">
      <div className="container-fluid">
        <div className="lg:px-[90]">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
              <div className="bandicoot_image_wrapper">
                <LazyLoadImage
                  src={bg.src}
                  width={0}
                  height={0}
                  alt="Bandicoot product image"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-3 p-0">
              <div className="why_bandicoot_content">
                <div className="hidden md:inline">
                  <h1>The Inefficiencies of Traditional UGD Management</h1>
                  <span>
                    Moving from Reactive Response to Proactive Management
                  </span>
                  <hr />
                </div>
                <p>
                  Traditional management of Underground Drainage (UGD) systems
                  relies heavily on manual record-keeping, guesswork, and
                  reactive maintenance. This often leads to significant
                  inefficiencies:
                </p>
                <ul>
                  <li>
                    <strong>Lack of Real-time Data:</strong> Without live
                    monitoring, authorities are often unaware of blockages or
                    overflows until they become critical public issues.
                  </li>
                  <li>
                    <strong>Inefficient Resource Allocation:</strong> Field
                    teams are dispatched without precise information, leading to
                    wasted time, fuel, and manpower.
                  </li>
                  <li>
                    <strong>No Accountability:</strong> It is difficult to track
                    if cleaning tasks were completed, their duration, and the
                    performance of the crew.
                  </li>
                  <li>
                    <strong>Delayed Response Times:</strong> Citizen complaints
                    often get lost in bureaucratic processes, leading to public
                    dissatisfaction and health hazards.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UGDmanagement;*/}
