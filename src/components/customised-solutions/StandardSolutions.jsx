"use client";

import React, { useState, useEffect } from "react";
import image from "@/assets/services/customised-solutions/standard_solutions_image.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Custom hook for screen width
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function StandardSolutions() {
  const width = useWindowWidth();
  const isTablet = width >= 769 && width <= 990;

  return (
    <section className="complex-risks_sec">
      <div className="container-fluid">
        <div className="lg:px-[2rem]">
          {isTablet ? (
            // Tablet layout (heading → image → paragraph)
            <div className="flex flex-col items-center text-center">
              <div className="why_bandicoot_content mb-6 w-full max-w-[900px] text-center">
                <h1>When Standard Solutions Aren't Enough</h1>
                <span className="block text-gray-600">
                  Addressing Niche and Complex Requirements
                </span>
                <hr className="my-3 mx-auto w-[60%] border-gray-400" />
              </div>

              <div className="bandicoot_image_wrapper mb-6">
                <LazyLoadImage
                  src={image.src}
                  width={0}
                  height={0}
                  alt="When Standard Solutions Aren't Enough"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                  }}
                />
              </div>

              <div className="why_bandicoot_content max-w-[900px] text-justify">
                <p>
                  Many industries face unique challenges that off-the-shelf
                  products cannot solve. These can range from operating in
                  uniquely shaped confined spaces to handling specific types of
                  hazardous materials or performing highly specialized
                  inspection tasks.
                </p>
                <p className="mt-3">
                  Attempting to adapt standard equipment for these niche
                  applications often leads to inefficiency, compromised safety,
                  and a failure to fully address the core problem. A
                  one-size-fits-all approach is simply not viable for the most
                  complex industrial and environmental challenges.
                </p>
              </div>
            </div>
          ) : (
            // Default layout (desktop & mobile)
            <div className="row px-[20px]">
              <div className="col-lg-6 col-md-12 col-sm-12 mt-3 p-0">
              <div className="md:hidden why_bandicoot_content">
                <h1>When Standard Solutions Aren't Enough</h1>
                <p className="text-center">
                  Addressing Niche and Complex Requirements
                </p>
              </div>
                <div className="bandicoot_image_wrapper">
                  <LazyLoadImage
                    src={image.src}
                    width={0}
                    height={0}
                    alt="When Standard Solutions Aren't Enough"
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "0.1s" },
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 mt-3 p-0">
                <div className="why_bandicoot_content">
                  <h1>When Standard Solutions Aren't Enough</h1>
                  <span>Addressing Niche and Complex Requirements</span>
                  <hr />
                  <p>
                    Many industries face unique challenges that off-the-shelf
                    products cannot solve. These can range from operating in
                    uniquely shaped confined spaces to handling specific types
                    of hazardous materials or performing highly specialized
                    inspection tasks.
                  </p>
                  <p>
                    Attempting to adapt standard equipment for these niche
                    applications often leads to inefficiency, compromised
                    safety, and a failure to fully address the core problem. A
                    one-size-fits-all approach is simply not viable for the most
                    complex industrial and environmental challenges.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default StandardSolutions;
