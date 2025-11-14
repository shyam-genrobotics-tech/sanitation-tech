"use client";
import React, { useState } from "react";
import Image from "next/image";

import feature1 from "@/assets/products/wilboar/features/remote_control_system.webp";
import feature2 from "@/assets/products/wilboar/features/customizable_end_effector.webp";
import feature3 from "@/assets/products/wilboar/features/multiterrain_rubberised_track.webp";
import feature4 from "@/assets/products/wilboar/features/heavy_duty_manoeuvrability.webp";
import feature5 from "@/assets/products/wilboar/features/IP68_night_vision_cameras_lights.webp";
import feature6 from "@/assets/products/wilboar/features/deployment_system.webp";
import feature7 from "@/assets/products/wilboar/features/integrated_sludge_suction_module.webp";
import KeyFeatures from "../common/KeyFeatures";

const features = [
  {
    title: "Remote Control <br /> System",
    description:
      "Safe and precise operation from a distance, keeping workers out of hazardous areas.",
    image: feature1,
  },
  {
    title: "Customizable <br /> End-Effector",
    description:
      "Adaptable tools including grinding systems and loaders for various tasks.",
    image: feature2,
  },
  {
    title: "Multi-Terrain <br /> Rubberised Track",
    description:
      "Ensures excellent traction and mobility on various challenging surfaces.",
    image: feature3,
  },
  {
    title: "Heavy Duty <br /> Manoeuvrability",
    description:
      "Robust build allows for powerful and effective movement in difficult terrains.",
    image: feature4,
  },
  {
    title: "IP68 Night Vision <br /> Cameras & Lights",
    description:
      "Provides clear vision in dark and submerged conditions for precise operations.",
    image: feature5,
  },
  {
    title: "Deployment <br /> System",
    description:
      "Integrated system for easy and safe deployment and retrieval of the rover.",
    image: feature6,
  },
  {
    title: "Integrated Sludge <br /> Suction Module",
    description:
      "Powerful suction system safely removes and transports slurry and hazardous waste.",
    image: feature7,
  },
];

function Wilboar_features() {
  const [showAll, setShowAll] = useState(false);

  const displayedFeatures = showAll ? features : features.slice(0, 4);
  return (
    <section className="key_features">
      <div className="container-fluid features_container">
        <div className="lg:px-[2rem]">
          <div className="title_area">
            <div>
              <h1>Key Features</h1>
              <p>
                From stubborn clogs to underground diagnostics, Wilboar handles
                it all — efficiently.
              </p>
            </div>
          </div>
          <div className="feature_large">
            <div className="flex flex-col items-center">
              <div
                className="grid gap-4 
                    grid-cols-1 
                    sm:grid-cols-3 
                    md:grid-cols-4
                    md:justify-items-center"
              >
                {displayedFeatures &&
                  Array.isArray(displayedFeatures) &&
                  displayedFeatures.map((data, idx) => (
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
                        <div className="head_title">
                          <h3
                            dangerouslySetInnerHTML={{
                              __html: data?.title.replace(/\n/g, "<br />"),
                            }}
                          />
                        </div>
                        <p>{data?.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
              {features.length > 4 && (
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
      </div>
    </section>
  );
}

export default Wilboar_features;
