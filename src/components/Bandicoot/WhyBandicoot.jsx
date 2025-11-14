"use client"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import bandicootImg from "@/assets/products/bandicoot/why_bandicoot_image.webp";

function WhyBandicoot() {
  return (
    <section className="why_bandicoot_sec">
      <div className="container-fluid why_bandicoot_container">
        <div className="lg:px-[2rem]">
          <div className="flex flex-col items-center text-center">
            <div className="lg:hidden why_bandicoot_content">
              <h1>Why Bandicoot?</h1>
              <span>A Leap Towards Safer & Smarter Sanitation</span>
              <hr />
            </div>
            <div className="lg:flex">
              <div className="bandicoot_image_wrapper mb-6 lg:flex-1">
                <LazyLoadImage
                  src={bandicootImg.src}
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
                    Why <br /> Bandicoot?
                  </h1>
                  <p>A Leap Towards Safer & Smarter Sanitation</p>
                  <hr />
                </div>
                <p>
                  Manual scavenging, a hazardous and inhumane practice, has been
                  a long-standing issue in many parts of the world. Workers are
                  exposed to toxic gases, harmful pathogens, and risk their
                  lives every day. Bandicoot was developed to address this
                  critical problem by completely eliminating the need for human
                  entry into manholes. Our robotic solution offers a
                  comprehensive approach to manhole cleaning, from inspection
                  and removal of waste to ensuring the safety of the operator.
                  It's not just a machine; it's a commitment to social change,
                  worker dignity, and a cleaner environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyBandicoot;

{
  /*"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import bandicootImg from "@/assets/products/bandicoot/bandicoot-product.webp";

function WhyBandicoot() {
  return (
    <section className="why_bandicoot_sec">
      <div className="container-fluid">
        <div className="lg:px-[2rem]">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="md:hidden">
                <h1 className="text-center">
                  Why Bandicoot?
                </h1>
                <p className="text-center">A Leap Towards Safer & Smarter Sanitation</p>
              </div>
              <div className="bandicoot_image_wrapper">
                <LazyLoadImage
                  src={bandicootImg.src}
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
            <div className="col-lg-6 col-md-6 col-sm-12 p-0">
              <div className="why_bandicoot_content">
                <div className="hidden md:block">
                  <h1>
                    Why <br /> Bandicoot?
                  </h1>
                  <span>A Leap Towards Safer & Smarter Sanitation</span>
                  <hr />
                </div>
                <p>
                  Manual scavenging, a hazardous and inhumane practice, has been
                  a long-standing issue in many parts of the world. Workers are
                  exposed to toxic gases, harmful pathogens, and risk their
                  lives every day. Bandicoot was developed to address this
                  critical problem by completely eliminating the need for human
                  entry into manholes. Our robotic solution offers a
                  comprehensive approach to manhole cleaning, from inspection
                  and removal of waste to ensuring the safety of the operator.
                  It's not just a machine; it's a commitment to social change,
                  worker dignity, and a cleaner environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyBandicoot;*/
}
