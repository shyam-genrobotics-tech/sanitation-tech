import React from "react";

import Image from "next/image";

import manifatureImg from "@/assets/products/bandicoot/manufacturing_plant_image.webp";

import aatmanirbhar from "@/assets/products/bandicoot/aatmanirbhar_logo.webp";
import makeinindia from "@/assets/products/bandicoot/make_in_india_logo.webp";

function MakeInIndia({ title, description, image, className = "" }) {
  return (
    <section className={`makeIn_india ${className}`}>
      <div className="container-fluid">
        <div className="lg:px-[2rem]">
          <div className="india_wrapper">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 mt-3">
              <h1 className="makeinindia_heading lg:hidden" dangerouslySetInnerHTML={{ __html: title }} />
                <div className="image_wrapper">
                  <Image
                    src={image ?? manifatureImg}
                    width={0}
                    height={0}
                    alt="Make In India - Bandicoot"
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 mt-3">
                <div className="makinindia_content">
                  <div>
                    <h1 dangerouslySetInnerHTML={{ __html: title }} className="hidden lg:inline"/>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
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

export default MakeInIndia;
