"use client";
import React from "react";
import CleaningImg from "@/assets/cleaners_image.webp";
import Image from "next/image";

function Cleaning() {
  return (
    <section className="cleaners_sec">
      <div className="w-full cleaners_container">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="cleaning_img_wrapper">
              <Image
                src={CleaningImg.src}
                width={0}
                height={0}
                alt="sewage clearers"
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="contents_cleaning px-0 lg:px-12">
              <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Hidden Dangers of <br />
                <span className="Linesec" style={{ color: "#000000" }}>
                  Manually Cleaning Confined Space
                </span>
              </h2>
              <div className="cleaning_mobile_img_wrapper">
                <Image
                  src={CleaningImg.src}
                  width={0}
                  height={0}
                  alt="sewage clearers"
                  priority
                  className="w-full md:w-2/3 h-auto object-contain"
                />
              </div>
              <p className="cleaning_desc mt-3 text-base md:text-lg text-gray-700">
                Across the globe, countless cities rely on manual methods to
                maintain their urban drainage systems. This often forces
                sanitation workers to enter confined, hazardous spaces like
                manholes and sewers. Inside, they face life-threatening exposure
                to toxic gases, deadly pathogens, and the constant risk of
                physical injury. This critical work, essential for public
                health, is too often performed under unsafe and undignified
                conditions.
              </p>
              <p className="cleaning_desc mt-3 text-base md:text-lg text-gray-700">
                This isn't a localized issue; it's a global reality. Workers in
                numerous countries share this dangerous fate, risking their
                lives daily. The lack of safe, modern technology perpetuates a
                cycle of risk and social vulnerability.
              </p>
              <p className="cleaning_desc mt-3 text-base md:text-lg text-gray-700">
                Furthermore, without proper monitoring systems, there is often
                no reliable verification that cleaning has been completed
                effectively. This lack of oversight leaves critical
                infrastructure unchecked, increasing the risk of blockages,
                sewer overflows, and urban flooding—problems that plague cities
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cleaning;
