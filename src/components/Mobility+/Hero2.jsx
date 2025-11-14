"use client";
import React from "react";
import HeroImg from "../../../public/assets/mobility_banner_image.webp";
import MobileImg from "../../../public/assets/mobility_cover_sm.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "@/assets/products/mobilityPlus/mobility_logo.svg";
import HeroImgTab from "../../../public/assets/mobility_tabimage.webp";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

function Hero2() {
  return (
    <section className="main_hero">
      <picture>
        <source media="(max-width: 768px)" srcSet={MobileImg.src} />
        <source media="(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)" srcSet={HeroImgTab.src} />
        <source media="(min-width: 1025px)" srcSet={HeroImg.src} />
        <Image
          src={HeroImg}
          width={0}
          height={0}
          alt="main hero image"
          id="bmp_cover"
          priority
        />
      </picture>
      <div className="context_area" id="hero_main">
        <div className="sub_logo" id="BMP_logo">
          <LazyLoadImage
            src={Logo.src}
            width={0}
            height={0}
            alt="Mobility Plus logo"
            layout="responsive"
          />
        </div>
        <h1 className="since-banner home">
           
        Vehicle Integrated Robotic 
          <span className="secondLine break-line">
            Manhole Cleaning and Waste Management
          </span>
        </h1>
        <div className="sub-content">
          {/* <p>
               Pioneering intelligent robotic solutions for sanitation, waste
               management, and hazardous confined space operations,
               ensuring compliance with regulations, human safety, and dignity.
             </p> */}
          <a href="#mobility_form" className="explore_btn">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
