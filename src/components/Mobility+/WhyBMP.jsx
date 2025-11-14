import Image from "next/image";
import React from "react";
import bg from "@/assets/products/mobilityPlus/why_mobilityplus_image.webp";
import mobileBg from "@/assets/products/mobilityPlus/why_mobility_mobile.webp";
function WhyBMP() {
  return (
    <section className="whyBMP_">
      <picture>
        <source media="(max-width: 768px)" srcSet={mobileBg.src} />
        {/* <source media="(max-width: 1024px)" srcSet={HeroImg2.src} /> */}
        <source media="(min-width: 1025px)" srcSet={bg.src} />
        <Image
          src={bg}
          width={0}
          height={0}
          alt="bandicoot mobility plus cover"
          id="bmp_cover"
        />
      </picture>
      <div className="content_">
        <h1>
          Why
          <span className="inline md:block">
            {" "}Bandicoot Mobility+?
          </span>
        </h1>
        <h3 className="sub_title">Enhanced Efficiency, Seamless Operations</h3>
        <div className="underline"></div>
        <p>
          Bandicoot Mobility+ takes robotic manhole cleaning to the next level
          by integrating the powerful Bandicoot robot with a dedicated vehicle
          and an advanced waste management system. This all-in-one solution
          streamlines the entire process, from transportation to cleaning and
          on-site waste disposal. By eliminating the need for separate
          transportation and manual loading/unloading of the robot and waste,
          Mobility+ significantly reduces transit times between cleaning
          locations, enhances operational speed, and improves overall
          efficiency. It's the perfect solution for municipalities and
          organizations looking for a comprehensive, mobile, and highly
          effective sanitation system.
        </p>
      </div>
    </section>
  );
}

export default WhyBMP;
