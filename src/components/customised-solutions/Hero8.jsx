"use client";
import React from "react";
import HeroImg from "@/assets/services/customised-solutions/customised-solution-banner.webp";
import HeroImgTab from "../../../public/assets/customisedsolutions_servise3_tabimage.webp";
import MobileImg from "@/assets/services/customised-solutions/customised-solution-mobilebanner.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

function Hero8() {
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
        <h1 className="since-banner" id="black-text" style={{ width: "100%" }}>
          Customised Solutions for <br />
          Unique Challenges
        </h1>
        <div className="sub-content md:w-3/4">
          <p className="md:service_para" id="black-text">
            Engineering Tailor-Made Automated Systems for Your Most Complex
            Problems.
          </p>
          {/* <button type="button" className="explore_btn">
               Request a Demo
             </button> */}
        </div>
      </div>
    </section>
  );
}

export default Hero8;
