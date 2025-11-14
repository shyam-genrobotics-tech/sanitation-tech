import Image from "next/image";
import React from "react";

import ico1 from "@/assets/careers/icons/pioneering_technology_logo.svg";
import ico2 from "@/assets/careers/icons/meaningful_social_impact_logo.svg";
import ico3 from "@/assets/careers/icons/exceptional_growth_logo.svg";

function WhyGenrobotics() {
  return (
    <section className="WhyGenrobotics_sec">
      <h1 className="title">Why Choose Genrobotics?</h1>
      <p className="subtitle">Innovate. Impact. Inspire.</p>
      <div className="container">
        <div className="row px-[20px]">
          <div className="col-lg-4 col-md-6 col-sm-12 cust_col">
            <div className="card whyCard">
              <Image
                src={ico1}
                className="whycard_img"
                width={150}
                height={150}
                alt="Pioneering Technology"
              />
              <br />
              <h3>Pioneering Technology</h3>
              <p>
                Work at the forefront of robotics, AI, and IoT by developing
                innovative solutions that address critical real-world challenges
                and advance technological boundaries.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 cust_col">
            <div className="card whyCard">
              <Image
                src={ico2}
                className="whycard_img"
                width={150}
                height={150}
                alt="Meaningful Social Impact"
              />
              <br />
              <h3>Meaningful Social Impact</h3>
              <p>
                Contribute to our mission of eliminating manual scavenging and
                creating safer working conditions. Your work directly saves
                lives and restores human dignity.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 cust_col">
            <div className="card whyCard">
              <Image
                src={ico3}
                className="whycard_img"
                width={150}
                height={150}
                alt="Exceptional Growth"
              />
              <br />
              <h3>Exceptional Growth</h3>
              <p>
                We believe in nurturing talent. Benefit from a collaborative
                environment, continuous learning opportunities, and a clear path
                for career progression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyGenrobotics;
