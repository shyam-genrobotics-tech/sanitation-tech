import Image from "next/image";
import React from "react";

import banner from "@/assets/about/banner.webp";

function Banner() {
  return (
    <div className="about_banner_sec">
      <Image
        src={banner}
        width={0}
        height={0}
        alt="We are dedicated to designing and developing robotic solutions to address the most pressing social issues."
      />
      <div className="content">
        <h1>
          We are dedicated to designing and <span className="md:block">developing robotic solutions to address</span>  <span className="md:block">the most pressing social issues.</span>
        </h1>
      </div>
    </div>
  );
}

export default Banner;
