"use client";

import React, { useState, useEffect } from "react";
import image from "@/assets/careers/our_strength_image.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// ✅ Custom hook for screen width
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

function OurStrength() {
  const width = useWindowWidth();
  const isTablet = width >= 769 && width <= 990;

  return (
    <section className="our_strength">
      <div className="container-fluid">
        <div className="padding_space" id="our_strength_pad">
          {isTablet ? (
            // ✅ Tablet layout (heading → image → paragraph)
            <div className="flex flex-col items-center text-center">
              <div className="why_bandicoot_content mb-6 w-full max-w-[900px] text-center">
                <h1>Our Culture is Our Strength</h1>
                <p className="block text-gray-600">
                  Navigating Hazards and Regulations
                </p>
                <hr className="my-3 mx-auto w-[60%] border-gray-400" />
              </div>

              <div className="bandicoot_image_wrapper mb-6">
                <LazyLoadImage
                  src={image.src}
                  width={0}
                  height={0}
                  alt="Our Culture image"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                  }}
                />
              </div>

              <div className="why_bandicoot_content max-w-[900px] text-justify">
                <p>
                  We foster a culture rooted in innovation, collaboration, and
                  purpose. Our diverse team of thinkers, creators, and problem
                  solvers is united by a shared mission.
                </p>
                <ul className="list-disc list-inside mt-3 text-left">
                  <li>
                    <strong>Innovation-driven:</strong> We encourage curiosity
                    and experimentation to find the best solutions.
                  </li>
                  <li>
                    <strong>Purpose-led:</strong> Our social mission is at the
                    heart of everything we do.
                  </li>
                  <li>
                    <strong>Collaborative Spirit:</strong> We believe the best
                    ideas emerge when we work together.
                  </li>
                  <li>
                    <strong>Ownership & Accountability:</strong> We empower our
                    team members to take ownership of their work.
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            // ✅ Default layout (desktop & mobile)
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div className="bandicoot_image_wrapper">
                  <LazyLoadImage
                    src={image.src}
                    width={0}
                    height={0}
                    alt="Our Culture image"
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "0.1s" },
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div className="why_bandicoot_content text-left">
                  <h1>Our Culture is Our Strength</h1>
                  <p className="strength_subheading">Navigating Hazards and Regulations</p>
                  <hr />
                  <p>
                    We foster a culture rooted in innovation, collaboration, and
                    purpose. Our diverse team of thinkers, creators, and problem
                    solvers is united by a shared mission.
                  </p>
                  <ul className="list-disc list-inside mt-3">
                    <li>
                      <strong>Innovation-driven:</strong> We encourage curiosity
                      and experimentation to find the best solutions.
                    </li>
                    <li>
                      <strong>Purpose-led:</strong> Our social mission is at the
                      heart of everything we do.
                    </li>
                    <li>
                      <strong>Collaborative Spirit:</strong> We believe the best
                      ideas emerge when we work together.
                    </li>
                    <li>
                      <strong>Ownership & Accountability:</strong> We empower our
                      team members to take ownership of their work.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OurStrength;


{/*"use client";
import React from "react";
import image from "@/assets/careers/banner.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function OurStrength() {
  return (
    <section className="our_strength">
      <div className="container-fluid">
        <div className="lg:padding_space" id="our_strength_pad">
          <div className="row px-[20px]">
            <div className="col-lg-6 col-md-12 col-sm-12 mt-3 p-0 md:p-2">
            <div className="md:hidden why_bandicoot_content">
                <h1>Our Culture is Our Strength</h1>
                <p className="text-center">
                  Navigating Hazards and Regulations
                </p>
              </div>
              <div className="bandicoot_image_wrapper">
                <LazyLoadImage
                  src={image.src}
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
            <div className="col-lg-6 col-md-12 col-sm-12 mt-3 p-0 md:p-2">
              <div className="why_bandicoot_content px-0">
              <div className="hidden md:inline">
                  <h1>Our Culture is Our Strength</h1>
                  <span>
                    Navigating Hazards and Regulations
                  </span>
                  <hr />
                </div>
                <p>
                  We foster a culture rooted in innovation, collaboration, and
                  purpose. Our diverse team of thinkers, creators, and problem
                  solvers is united by a shared mission.
                </p>
                <ul>
                  <li>
                    <strong>Innovation-driven: </strong> We encourage curiosity
                    and experimentation to find the best solutions.
                  </li>
                  <li>
                    <strong>Purpose-led:</strong> Our social mission is at the
                    heart of everything we do.
                  </li>
                  <li>
                    <strong>Collaborative Spirit:</strong> We believe the best
                    ideas emerge when we work together.
                  </li>
                  <li>
                    <strong>Ownership & Accountability:</strong> We empower our
                    team members to take ownership of their work.
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

export default OurStrength;*/}
