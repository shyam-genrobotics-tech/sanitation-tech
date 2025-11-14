import React from "react";
import TabAsset from "@/assets/sanitation_tabimage.webp";
import MobileAsset from "@/assets/sanitation_mobileimage.webp";
import Asset from "@/assets/sanitation_image.webp";
import Image from "next/image";

function Sanitation() {
  return (
    <section className="sanitation_sec">
      <div className="lg:container-fluid">
        <div className="lg:px-[2rem]">
          <div className="image_wrapper">

             <picture>
            <source media="(max-width: 768px)" srcSet={MobileAsset.src} />
            <source media="(min-width: 769px) (max-width: 1024px)" srcSet={TabAsset.src} />
            <source media="(min-width: 1025px)" srcSet={Asset.src} />
            <Image
              src={Asset}
              width={0}
              height={0}
              alt="Sanitation section image"

            /></picture>  
            <div className="content_">
              <h1>Transforming Sanitation with Advanced Robotics & AI</h1>
              <div className="line__"></div>
              <p>
                To address these critical challenges, Genrobotics, India’s
                leading robotics company, has developed revolutionary robotic
                technologies dedicated to transforming sanitation. With a strong
                focus on safety, dignity, and efficiency, Genrobotics builds
                smart, human-assistive robots designed specifically for confined
                and hazardous environments. These innovations go beyond
                eliminating manual entry; they streamline the entire sanitation
                process, ensuring a safer, cleaner, and more dignified future.
              </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sanitation;
