"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import banner from "@/assets/services/ugd-operations-digitalisation/integrated_solutions_ecosystem.webp";
function IntegratedSolutions() {
  return (
    <section className="integrated_solution_sec">
      <LazyLoadImage
        src={banner.src}
        alt="Hardware + G-Crow Platform"
        width={0}
        height={0}
      />
      <div className="content_">
        <h1>Our Integrated Solution: Robotic Assets + G-Crow Platform</h1>
        <p id="sub_title">Creating a Smart, Transparent, and Accountable Ecosystem</p>
        <div className="line__"></div>
        <p>
          Genrobotics offers a comprehensive service to digitalize your entire
          UGD workflow. We achieve this by seamlessly integrating our advanced
          automated cleaning systems (like Bandicoot, Mobility+, Wilboar, etc)
          with our powerful G-Crow management platform. This service transforms
          sanitation management from a reactive, manual process into a
          proactive, data-driven operation. Municipalities can now monitor,
          manage, and optimize their entire sanitation network from a single
          dashboard, ensuring a cleaner and healthier urban environment.
        </p>
      </div>
    </section>
  );
}

export default IntegratedSolutions;
