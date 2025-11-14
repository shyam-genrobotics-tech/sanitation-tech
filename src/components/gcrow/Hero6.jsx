"use client";
import React from "react";
import HeroImg from "../../../public/assets/gcrow_banner_image.webp";
import HeroImgTab from "../../../public/assets/gcrow_tabimage.webp";
import MobileImg from "../../../public/assets/gcrow_banner.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "@/assets/products/gcrow/gcrow_logo.svg"
import MobileLogo from "@/assets/products/gcrow/gcrow_mobilelogo.svg"
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

function Hero6() {
  return (
    <section className="main_hero" id="hero6">
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
      <div className="context_area" id="hero_main">
        <div className="sub_logo" id="gcrow_logo">
        <picture>
            <source media="(max-width: 1024px)" srcSet={MobileLogo.src} />
            <source media="(min-width: 1025px)" srcSet={Logo.src} />
            <Image
            src={Logo}
            width={0}
            height={0}
            alt="G Crow logo"
            layout="responsive"
            id="gcrow_logo"
          />
          </picture>
        </div>
        <h1 className="since-banner home" id="gcrow_heading">
          Revolutionizing Sanitation Management
        </h1>
        <div className="sub-content mt-0 lg:mt-8">
          <p className="hidden md:block">
            G Crow is an innovative app that offers GPS tracking of sanitation
            robots, detailed performance reporting, and intuitive team
            management tools. It enables efficient monitoring of field-deployed
            robots, equipment, and their operators, enhancing operational
            efficiency and improving resource allocation for cleaner cities and
            greater citizen satisfaction.
          </p>
          <a href="#enquiry_form" role="button" className="explore_btn">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero6;
