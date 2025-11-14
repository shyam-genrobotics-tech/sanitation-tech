import React from "react";

import Img1 from "@/assets/products/bandicoot/modi_with_bandicoot1.webp";
import Img2 from "@/assets/products/bandicoot/modi_with_bandicoot2.webp";
import bandicootIndia from "@/assets/products/bandicoot/bandicoot_india.webp";
import Image from "next/image";

function NationwideImpacts() {
  return (
    <section className="nationwide_impacts">
      <div className="container-fluid nationwide_impacts_container">
        <div className="lg:px-[2rem]">
          <div className="header_title">
            <h1>Nationwide Impact & Milestones</h1>
            <p>
              Bandicoot, our flagship product has made
              significant strides in transforming sanitation practices across
              India, marking important milestones in its journey.
            </p>
          </div>
          <div className="lg:px-[0rem]">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div className="gray_card flex flex-col-reverse">
                  <div>
                    <div className="impact_content">
                      <h2>7 Years of Bandicoot: A Journey of Innovation</h2>
                      <p className="text-justify">
                        Celebrating seven years of innovation and impact,
                        Bandicoot's journey was significantly boosted by its launch,
                        recognized and supported at the highest levels, including by
                        the Hon'ble Prime Minister of India, Shri Narendra Modi.
                        This endorsement highlighted the national importance of a
                        technological solution to manual scavenging.
                      </p>
                    </div>
                  </div>
                  <div className="img_wrapper">
                    <Image
                      src={Img1}
                      width={0}
                      height={0}
                      alt="modi with bandicoot"
                    />
                  </div>
                  <div className="img_wrapper hidden md:block">
                    <Image
                      src={Img2}
                      width={0}
                      height={0}
                      alt="modi with bandicoot"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div className="gray_card pt-4">
                  <div className="impact_content">
                    <h2>Expanding Our Reach: Deployment in 100+ Cities</h2>
                    <p className="text-justify">
                      Bandicoot robots are now operational in 100+ cities across 19 states and 3
                      Union Territories, bringing safer sanitation
                      practices and empowering local communities nationwide.
                    </p>
                  </div>
                  <Image
                    width={0}
                    height={0}
                    alt="Bandicoot India"
                    src={bandicootIndia}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NationwideImpacts;
