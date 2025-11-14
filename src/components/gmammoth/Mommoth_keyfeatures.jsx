"use client"
import React, { useState } from "react";
import Image from "next/image";

import feature1 from "@/assets/products/gmammoth/features/automatic_grabber.webp";
import feature2 from "@/assets/products/gmammoth/features/suction_utility.webp";
import feature3 from "@/assets/products/gmammoth/features/jetting_utility.webp";
import feature4 from "@/assets/products/gmammoth/features/inspection_utility.webp";
import feature5 from "@/assets/products/gmammoth/features/tank_tipping_option.webp";
import feature6 from "@/assets/products/gmammoth/features/inbuilt_safety_valves.webp";
import feature7 from "@/assets/products/gmammoth/features/openable_rear_dish.webp";

const cleaningFeatures = [
  {
    title: "Automatic Grabber",
    description:
      "A portable automatic grabbing unit removes solid waste like silt and sludge from manholes.",
    image: feature1,
  },
  {
    title: "Suction Utility",
    description:
      "The suction unit efficiently extracts all loosened debris and wastewater after jetting.",
    image: feature2,
  },
  {
    title: "Jetting Utility",
    description:
      "The high-pressure jetting system clears stubborn blockages using strong water jets.",
    image: feature3,
  },
  {
    title: "Inspection Utility",
    description:
      "Smart monitoring of the entire process via a mobile application for data-driven decisions.",
    image: feature4,
  },
  {
    title: "Tank Tipping Option",
    description:
      "The storage tank features a hydraulic mechanism that lifts and tilts the tank upward, ensuring optimal height and angle for smooth and efficient waste disposal.",
    image: feature5,
  },
  {
    title: "Inbuilt Safety Valves",
    description:
      "Fitted with pressure-regulating valves at inlet and outlet to prevent backflow and ensure safe, controlled operation.",
    image: feature6,
  },
  {
    title: "Openable Rear Dish",
    description:
      "The rear end features an open-air discharge dish, enabling complete and contactless waste disposal, eliminating the need for any manual intervention.",
    image: feature7,
  },
];

function Mommoth_keyfeatures() {
  const [showAll, setShowAll] = useState(false);

  const displayedFeatures = showAll
    ? cleaningFeatures
    : cleaningFeatures.slice(0, 4);
  return (
    <section className="key_features gmammoth_features features_container">
      <div className="container-fluid">
        <div className="lg:px-[2rem]">
          <div className="title_area">
            <div>
              <h1>Key Features</h1>
              <p>
                From stubborn clogs to underground diagnostics, G Mammoth 4 in 1
                handles it all — efficiently.
              </p>
            </div>
          </div>
          <div className="feature_large">
            <div className="row">
              {displayedFeatures.map((data, idx) => (
                <div className="col-md-6 col-lg-3 col-sm-12 mt-3" key={idx}>
                  <div key={idx} className="card feature_card text-center">
                    <div className="image_wrapper">
                      <Image
                        src={data?.image}
                        width={0}
                        height={0}
                        alt={data.title}
                      />
                    </div>
                    <div className="feature_content">
                      <h3>{data?.title}</h3>
                      <p>{data?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {cleaningFeatures.length > 4 && (
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="show_more_btn"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mommoth_keyfeatures;
