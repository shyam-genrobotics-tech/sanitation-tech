"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroImg from "../../../public/assets/home_banner_image.webp";
import HeroImg2 from "../../../public/assets/hero-image-2.webp";
import MobileImg from "../../../public/assets/home_banner_image_mobile.webp";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

function Hero1() {
  return (
    <section
      className="main_hero"
      id="hero1"
      style={{ position: "relative", minHeight: 360 }}
    >
      <picture>
        <source media="(max-width: 768px)" srcSet={MobileImg.src} />
        <source media="(max-width: 1024px)" srcSet={HeroImg2.src} />
        <source media="(min-width: 1025px)" srcSet={HeroImg.src} />
        <Image
          src={HeroImg}
          width={0}
          height={0}
          alt="main hero image"
          id="bg"
          sizes="(max-width: 768px) 100vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
        />
      </picture>
      <div className="context_area" id="hero_main">
        <h1 className="since-banner home">
          Innovating for Safer Cities,
           HealthierLives:<br />
          <span className="secondLine">
            Compliance-Driven Robotics for a Cleaner Future.
          </span>
        </h1>
        <div className="sub-content">
          <p>
            Pioneering intelligent robotic solutions for sanitation, waste
            management, and hazardous confined space operations, ensuring
            compliance with regulations, human safety, and dignity.
          </p>
          <button
            type="button"
            className="explore_btn"
            onClick={() => {
              const el = document.getElementById("solutions");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore more Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero1;
