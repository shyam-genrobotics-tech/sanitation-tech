"use client";
import React from "react";
// import HeroImg from "../../../public/assets/cover.png";
import HeroImg from "../../../public/assets/gmammoth_banner_image.webp";
import MobileImg from "../../../public/assets/gmammoth_banner.webp"
import HeroImgTab from "../../../public/assets/gmammoth_tabimage.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "@/assets/products/gmammoth/mommoth_logo.svg";
import MobileLogo from "@/assets/products/gmammoth/mammoth_logo.svg";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

function Hero4() {
  return (
    <section className="mammoth_hero main_hero">
      <picture>
        <source media="(max-width: 768px)" srcSet={MobileImg.src} />
        <source media="(min-width: 769px) and (max-width: 1024px) and (orientation: portrait)" srcSet={HeroImgTab.src} />
        <source media="(min-width: 1025px)" srcSet={HeroImg.src} />
        <Image
        src={HeroImg}
        width={0}
        height={0}
        alt="main hero image"
        priority
        id="bg"
      />
      </picture>
      
      <div className="context_area" id="mammoth_hero_context">
        <div className="sub_logo">
        <picture>
            <source media="(max-width: 1024px)" srcSet={MobileLogo.src} />
            <source media="(min-width: 1025px)" srcSet={Logo.src} />
            <LazyLoadImage
              src={Logo.src}
              width={0}
              height={0}
              alt="mammoth logo"
              layout="responsive"
            />
          </picture>
          
        </div>
        <h1 className="since-banner home lg:w-fit" id="mammoth_heading">
          The All-in-One Automated Solution for <span className="lg:block lg:w-fit">Comprehensive Urban Sanitation and </span> <span className="lg:block lg:w-fit">Maintenance</span>
        </h1>
        {/* <h2>Vehicle-Integrated Robotic Cleaning and Waste Disposal</h2> */}
        <div className="sub-content">
          {/* <p>
                   Pioneering intelligent robotic solutions for sanitation, waste
                   management, and hazardous confined space operations,
                   ensuring compliance with regulations, human safety, and dignity.
                 </p> */}
          <a href="#mammoth_form" className="explore_btn">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero4;
