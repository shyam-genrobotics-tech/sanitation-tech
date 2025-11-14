import React from "react";
import Image from "next/image";

import manifatureImg from "@/assets/products/bandicoot/manufacturing_plant_image.webp";

import aatmanirbhar from "@/assets/products/bandicoot/aatmanirbhar_logo.webp";
import makeinindia from "@/assets/products/bandicoot/make_in_india_logo.webp";

function Bandicot_makInIndia() {
  return (
    <section className="makeIn_india">
      <div className="container-fluid">
        <div className="lg:px-[90]">
          <div className="india_wrapper">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 mt3">
              <h1 className="makeinindia_heading lg:hidden"> Bandicoot 2.0:  <span className="block">Make in India, for Global Impact</span> </h1>
                <div className="image_wrapper">
                  <Image
                    src={manifatureImg}
                    width={0}
                    height={0}
                    alt="Make In India - Bandicoot"
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="makinindia_content">
                  <h1 className="hidden lg:inline">
                    Bandicoot 2.0: <br />
                    Make in India, for Global Impact
                  </h1>
                  <p>
                    Bandicoot 2.0 is completely designed and manufactured in
                    India, a testament to the "Make in India" initiative.
                    Through Bandicoot, we champion the "AatmaNirbhar Bharat
                    Abhiyan" (Self-Reliant India campaign), empowering the
                    nation with indigenous robotic technologies to eliminate
                    manual scavenging. <br /> While rooted in India, the problem
                    of hazardous sanitation work is a global concern.
                    Bandicoot's innovative solution holds a global perspective,
                    offering a proven and adaptable technology that can be
                    deployed worldwide to transform sanitation practices,
                    protect workers, and improve public health in any nation
                    facing similar challenges.
                  </p>
                  <div className="logos">
                    <Image
                      src={aatmanirbhar}
                      className="border-l border-l-[1px] border-l-solid"
                      alt="Aatma Nirbhar Bharat"
                      width={0}
                      height={0}
                    />
                    <Image
                      src={makeinindia}
                      width={0}
                      height={0}
                      id="make_india_logo"
                      alt="Make in India"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bandicot_makInIndia;
