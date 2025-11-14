"use client";
import React from "react";
import MobileImg from "../../../public/assets/wilboar_banner.webp";
import HeroImg from "../../../public/assets/wilboar_banner_image.webp";
import HeroImgTab from "../../../public/assets/wilboar_tabimage.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "@/assets/products/wilboar/Wilboar.webp";
import MobileLogo from "@/assets/products/wilboar/wilboar-logo.svg";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

function Hero5() {
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
          priority
          id="bg"
        />
      </picture>
      <div className="context_area" id="hero_mainWilboar">
        <div className="sub_logo">
        <picture>
            <source media="(max-width: 1024px)" srcSet={MobileLogo.src} />
            <source media="(min-width: 1025px)" srcSet={Logo.src} />
            <LazyLoadImage
              src={Logo.src}
              width={0}
              height={0}
              alt="wiboar logo"
              layout="responsive"
            />
          </picture>
        </div>
        <h1 className="since-banner home" id="wilboar_" style={{ color: "black !important" }}>
          The Ultimate Robotic Rover for Cleaning & Inspection of Large Confined
          Spaces
        </h1>
        <div className="sub-content">
          {/* <p>
                Pioneering intelligent robotic solutions for sanitation, waste
                management, and hazardous confined space operations,
                ensuring compliance with regulations, human safety, and dignity.
              </p> */}

          <a href="#enquiry_form" className="explore_btn">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero5;
