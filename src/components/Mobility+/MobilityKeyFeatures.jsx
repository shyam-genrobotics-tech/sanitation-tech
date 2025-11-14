"use client";
import React, { useState } from "react";

import key1 from "@/assets/products/mobilityPlus/features/hydraulic_loading_unloading.webp";
import key2 from "@/assets/products/mobilityPlus/features/hydraulic_vehicle_stabilizer.webp";
import key3 from "@/assets/products/mobilityPlus/features/detatchable_bandicoot_unit.webp";
import key4 from "@/assets/products/mobilityPlus/features/manhole_auto_positioning.webp";
import key5 from "@/assets/products/mobilityPlus/features/automated_waste_collection_tray.webp";
import key6 from "@/assets/products/mobilityPlus/features/smart_bin_lock_system.webp";
import key7 from "@/assets/products/mobilityPlus/features/integrated_waste_storage.webp";
import key8 from "@/assets/products/mobilityPlus/features/independent_power_source.webp";
import key9 from "@/assets/products/mobilityPlus/features/operator_sunshade.webp";
import key10 from "@/assets/products/mobilityPlus/features/hazards_warning_light.webp";

import Image from "next/image";

const featuresData = [
  {
    title: "Hydraulic <br /> Loading & Unloading",
    description:
      "The Bandicoot robot is seamlessly integrated with the vehicle for quick deployment and retrieval.",
    image: key1,
  },
  {
    title: "Hydraulic <br/> Vehicle Stabilizer",
    description:
      "Ensures the vehicle remains stable on uneven ground during robotic operations.",
    image: key2,
  },
  {
    title: "Detachable <br/> Bandicoot Unit",
    description:
      "Allows for robot deployment in narrow lanes and areas inaccessible to the vehicle.",
    image: key3,
  },
  {
    title: "Manhole <br/> Auto-Positioning",
    description:
      "Automated system with a reverse camera for precise positioning of the robot over the manhole, enhancing accuracy and improving operational efficiency.",
    image: key4,
  },
  {
    title: "Automated <br/> Waste Collection Tray",
    description:
      "The dedicated automated waste collection tray enables easy, human-intervention-free transfer of waste into the collection system.",
    image: key5,
  },
  {
    title: "Smart Bin <br/> Lock System",
    description:
      "Ensures secure and safe containment of collected waste during transit.",
    image: key6,
  },

  {
    title: "Integrated <br/> Waste Management",
    description:
      "Easy collection, storage, and automated dumping system for hygienic waste handling.",
    image: key7,
  },
  {
    title: "Independent <br/> Power Source",
    description:
      "Equipped with its own power source for uninterrupted operation without relying on external power.",
    image: key8,
  },
  {
    title: "Operator <br/> Sun Shade",
    description:
      "Provides protection for the operator from sun and rain, ensuring comfort during long hours.",
    image: key9,
  },
  {
    title: "Hazards <br/> Warning Light",
    description:
      "Alerts passersby and traffic about ongoing operations, enhancing public safety.",
    image: key10,
  },
];

const keySubFeature = `Explore the features of Bandicoot Mobility+ that powers faster deployment, precision cleaning better access, and safer operations.`;

function MobilityKeyFeatures() {
  const [showAll, setShowAll] = useState(false);

  const displayedFeatures = showAll ? featuresData : featuresData.slice(0, 4);

  console.log(displayedFeatures);

  return (
    <section className="key_features">
      <div className="md:container-fluid features_container">
        <div className="lg:px-[2rem]">
          <div className="title_area">
            <div>
              <h1>Key Features</h1>
              <p>{keySubFeature}</p>
            </div>
          </div>
          <div className="feature_large">
            <div className="flex flex-col items-center mt-10">
              <div
                className="grid gap-2 
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
                          alt="smaple image"
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
              {featuresData.length > 4 && (
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
      <p className="extra_feature_txt ">
        {" "}
        Mobility+ includes all the features of Bandicoot.{" "}
        <a href="/bandicoot#key_features">
          Click here to explore the features of Bandicoot
        </a>{" "}
      </p>
    </section>
  );
}

export default MobilityKeyFeatures;
