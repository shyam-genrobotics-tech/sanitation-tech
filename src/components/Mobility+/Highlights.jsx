import Image from "next/image";
import React from "react";

import mobilityImage from "@/assets/products/mobilityPlus/upgrade_to_mobility_image.webp";

function Highlights() {
  return (
    <section className="highlights">
      <div className="mobility__">
        <h1>
          Upgrade Your <br />
          Bandicoot to Mobility+
        </h1>
        <p>
          Current Bandicoot users can now elevate their sanitation operations by
          upgrading to the Bandicoot Mobility+. This advanced vehicle-integrated
          model fully automates manhole cleaning and waste management, offering
          unparalleled efficiency and convenience.
        </p>
        <p>
          Benefit from faster deployment, integrated waste handling, and the
          ability to cover more ground with ease. Make the smart move to
          Mobility+ and experience the next generation of robotic sanitation
          solutions.
        </p>
      </div>

      <div className="mobility_truck_wrapper">
        <Image
          src={mobilityImage}
          width={0}
          height={0}
          alt="mobility truck"
          className="mobility_truck"
        />
      </div>
      <a href="#mobility_form" className="learn_more">
        Learn More About Upgrading
      </a>
    </section>
  );
}

export default Highlights;
