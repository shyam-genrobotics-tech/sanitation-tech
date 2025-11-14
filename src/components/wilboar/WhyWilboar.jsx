"use client";
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import wilboarImg from "@/assets/products/wilboar/wilboar_in_leh.webp";

function WhyWilboar() {
  return (
    <section className="why_bandicoot_sec">
      <div className="container-fluid why_bandicoot_container">
        <div className="lg:px-[2rem]">
          <div className="flex flex-col items-center text-center">
            <div className="lg:hidden why_bandicoot_content">
              <h1>
                Why <span> Wilboar?</span>
              </h1>
              <p>A Leap Towards Safer & Smarter Sanitation</p>
              <hr />
            </div>
            <div className="lg:flex">
              <div className="bandicoot_image_wrapper mb-6 lg:flex-1">
                <LazyLoadImage
                  src={wilboarImg.src}
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
                    Why <span> Wilboar?</span>
                  </h1>
                  <p>A Leap Towards Safer & Smarter Sanitation</p>
                  <hr />
                </div>
                <p>
                  Confined spaces within sewer wells, canals, storm water drains
                  and STP wells are filled with hazardous waste and debris,
                  posing serious risks to human health and safety. The
                  challenging task of cleaning these environments requires safer
                  solutions that minimize human involvement.
                </p>
                <p className="mt-4">
                  Introducing Wilboar, the ideal solution for secure and
                  efficient cleaning of sewer wells, canals, storm water drains
                  and STP wells. Equipped with advanced technology, Wilboar
                  ensures maximum safety by eliminating the need for manual
                  entry and exposure to dangerous substances, revolutionizing
                  the maintenance of these critical infrastructure areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWilboar;

{
  /*"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import wilboarImg from "@/assets/products/wilboar/Wilboar_1 1.webp";

function WhyWilboar() {
  return (
    <section className="why_bandicoot_sec">
      <div className="container-fluid">
        <div className="lg:px-[80]">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="md:hidden">
                <h1 className="text-center">
                  Why Wilboar?
                </h1>
                <p className="text-center">Revolutionizing Industrial & Large-Scale Cleaning</p>
              </div>
              <div className="bandicoot_image_wrapper">
                <LazyLoadImage
                  src={wilboarImg.src}
                  width={0}
                  height={0}
                  alt="Wilboar product image"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="why_bandicoot_content">
                <div className="hidden md:block">
                  <h1>
                    Why <br /> Wilboar?
                  </h1>
                  <span>Revolutionizing Industrial & Large-Scale Cleaning</span>
                  <hr />
                </div>
                <p>
                  Confined spaces within sewer wells, canals, storm water drains and STP wells are
                  filled with hazardous waste and debris, posing serious risks
                  to human health and safety. The challenging task of cleaning
                  these environments requires safer solutions that minimize
                  human involvement.
                </p>
                <p>
                  Introducing Wilboar, the ideal solution for secure and
                  efficient cleaning of sewer wells, canals, storm water drains and STP wells.
                  Equipped with advanced technology, Wilboar ensures maximum
                  safety by eliminating the need for manual entry and exposure
                  to dangerous substances, revolutionizing the maintenance of
                  these critical infrastructure areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWilboar;*/
}
