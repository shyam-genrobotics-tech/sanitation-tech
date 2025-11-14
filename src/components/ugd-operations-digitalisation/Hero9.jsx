"use client";
import React from "react";
import HeroImg from "../../../public/assets/digitalisation_banner_image.webp";
import HeroImgTab from "../../../public/assets/digitalisation_service_tabimage.webp";
import MobileImg from "@/assets/services/ugd-operations-digitalisation/ugd-service-banner.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

function Hero9() {
  return (
    <section className="main_hero" id="hero9">
      <picture>
        <source media="(max-width: 768px)" srcSet={MobileImg.src} />
        <source media="(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)" srcSet={HeroImgTab.src} />
        <source media="(min-width: 1025px)" srcSet={HeroImg.src} />
        <Image
          src={HeroImg}
          width={0}
          height={0}
          alt="main hero image"
          id="services_img"
          priority
        />
      </picture>
      <div className="context_area" id="service_heading">
        {/* <div className="sub_logo">
              <LazyLoadImage
                src={Logo.src}
                width={0}
                height={0}
                alt="bandicoot logo"
                layout="responsive"
              />
            </div> */}
        <h1 className="since-banner" id="gcrow-title" style={{ width: "100%" }}>
          The Complete Digitalisation of <br />
          UGD Operations
        </h1>
        <div className="sub-content">
          <p id="black-text">
            Integrating Advanced Hardware and Intelligent Software for a <span> Smarter, Safer Sanitation Ecosystem. </span>
          </p>
          {/* <button type="button" className="explore_btn">
                   Request a Demo
                 </button> */}
        </div>
      </div>
    </section>
  );
}

export default Hero9;
