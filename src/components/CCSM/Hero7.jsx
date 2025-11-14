"use client";
import React from "react";
import HeroImg from "../../../public/assets/expert_consulting_banner_image.webp";
import HeroImgTab from "../../../public/assets/expertconsulting_service2_tabimage.webp";
import MobileImg from "@/assets/services/consulting/confined-space-banner.webp"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

function Hero7() {
  return (
    <section className="main_hero" id="hero7">
      <picture>
        <source media="(max-width: 768px)" srcSet={MobileImg.src} />
        <source media="(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)" srcSet={HeroImgTab.src} />
        <source media="(min-width: 1025px)" srcSet={HeroImg.src} />
        <Image
          src={HeroImg}
          width={0}
          height={0}
          alt="main hero image"
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
        <h1 className="since-banner" id="white-text" style={{ width: "100%" }}>
          Expert Consulting for <br /> Confined Space Management
        </h1>
        <div className="sub-content md:w-3/4">
          <p>
            Ensuring Safety, Compliance, and Efficiency with Technology-Driven
            Strategies.
          </p>
          {/* <button type="button" className="explore_btn">
               Request a Demo
             </button> */}
        </div>
      </div>
    </section>
  );
}

export default Hero7;
