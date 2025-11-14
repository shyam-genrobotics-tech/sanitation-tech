"use client";
import React from "react";
import HeroImg from "../../../public/assets/bandicoot_banner_image.webp";
import MobileImg from "@/assets/products/bandicoot/bandicoot_banner.webp"
import { LazyLoadImage } from "react-lazy-load-image-component";
import bandicootLogo from "@/assets/products/bandicoot/Bandicoot-Logo.svg";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

function Hero2() {
  return (
    <section className="main_hero">
      <picture>
        <source media="(max-width: 768px)" srcSet={MobileImg.src} />
        {/* <source media="(max-width: 1024px)" srcSet={HeroImg2.src} /> */}
        <source media="(min-width: 1025px)" srcSet={HeroImg.src} />
        <Image
          src={HeroImg}
          width={0}
          height={0}
          alt="main hero image"
          id="bg"
          priority
        />
      </picture>
      <div className="context_area" id="hero_main">
        <div className="sub_logo">
          <LazyLoadImage
            src={bandicootLogo.src}
            width={0}
            height={0}
            alt="bandicoot logo"
            layout="responsive"
            id="bandicoot_logo"
          />
        </div>
        <h1 className="since-banner home">
          Engineered to Clean Any Type of Manhole, 
          <span className="secondLine break-line">
          Ensuring Safety and Dignity for Sanitation Workers.
          </span>
        </h1>
        <div className="sub-content">
          {/* <p>
            Pioneering intelligent robotic solutions for sanitation, waste
            management, and hazardous confined space operations,
            ensuring compliance with regulations, human safety, and dignity.
          </p> */}
          <a href="#bandicootFrom" className="explore_btn">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
