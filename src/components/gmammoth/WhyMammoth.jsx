"use client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import bg from "@/assets/products/gmammoth/why_gmammoth.webp";

function WhyMammoth() {
  return (
    <section className="why_bandicoot_sec">
      <div className="container-fluid why_bandicoot_container">
        <div className="lg:px-[2rem]">
          <div className="flex flex-col items-center text-center">
            <div className="lg:hidden why_bandicoot_content">
              <h1>Why G Mammoth?</h1>
              <span>One Machine, Four Powerful Solutions</span>
              <hr />
            </div>
            <div className="lg:flex">
              <div className="bandicoot_image_wrapper mb-6 lg:flex-1">
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

              <div className="why_bandicoot_content max-w-[900px] lg:flex-1">
                <div className="hidden lg:block">
                  <h1>
                    Why <br /> G Mammoth?
                  </h1>
                  <p>One Machine, Four Powerful Solutions</p>
                  <hr />
                </div>
                <p>
                  Urban maintenance demands versatility. Cities face diverse
                  challenges, from blocked drains and accumulated waste to the
                  need for regular inspection and cleaning of public
                  infrastructure. Traditionally, this required multiple machines
                  and teams, leading to high costs and logistical complexities.
                </p>
                <p>
                  G Mammoth 4-in-1 is engineered to be the single answer to
                  these multifaceted problems. By integrating four critical
                  functions into one robust automated system, G Mammoth offers
                  unparalleled efficiency, reduces operational costs, and
                  minimizes the need for multiple pieces of equipment. It is the
                  ultimate tool for modern urban management, ensuring cities are
                  cleaner, safer, and more efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyMammoth;

{
  /*"use client";
import React from "react";
import bg from "@/assets/products/gmammoth/G Mammoth 4 in 1 -  1.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function WhyMammoth() {
  return (
    <section className="why_bandicoot_sec">
      <div className="container-fluid">
        <div className="lg:px-[100]">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="md:hidden">
                <h1 className="text-center">Why G Mammoth?</h1>
                <p className="text-center">
                  One Machine, Four Powerful Solutions
                </p>
              </div>
              <div className="bandicoot_image_wrapper">
                <LazyLoadImage
                  src={bg.src}
                  width={0}
                  height={0}
                  alt="G Mammoth image"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                  }}
                  id="why_gmammoth"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="why_bandicoot_content">
                <div className="hidden md:block">
                  <h1>
                    Why <br />G Mammoth?
                  </h1>
                  <span>One Machine, Four Powerful Solutions</span>
                  <hr />
                </div>
                <p>
                  Urban maintenance demands versatility. Cities face diverse
                  challenges, from blocked drains and accumulated waste to the
                  need for regular inspection and cleaning of public
                  infrastructure. Traditionally, this required multiple machines
                  and teams, leading to high costs and logistical complexities.
                </p>
                <p>
                  G Mammoth 4-in-1 is engineered to be the single answer to
                  these multifaceted problems. By integrating four critical
                  functions into one robust automated system, G Mammoth offers
                  unparalleled efficiency, reduces operational costs, and
                  minimizes the need for multiple pieces of equipment. It is the
                  ultimate tool for modern urban management, ensuring cities are
                  cleaner, safer, and more efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyMammoth;*/
}
