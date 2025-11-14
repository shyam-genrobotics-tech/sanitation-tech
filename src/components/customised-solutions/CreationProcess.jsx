import React from "react";

import step1 from "@/assets/services/customised-solutions/creation/istockphoto-1127755383-612x612 1.webp";
import step2 from "@/assets/services/customised-solutions/creation/1T1A2272 1.webp";
import step3 from "@/assets/services/customised-solutions/creation/Manufacturing Plant HQ Image (1).webp";
import step4 from "@/assets/services/customised-solutions/creation/Bandicoot Operator 3-01 1.webp";
import KeyFeatures from "../common/KeyFeatures";
import Image from "next/image";

const featuresData = [
  {
    image: step1,
    title: "Discovery & Consultation",
    description:
      "We start by deeply understanding your unique problem, operational environment, and desired outcomes through collaborative workshops and on-site analysis.",
  },
  {
    image: step2,
    title: "Design & Prototyping",
    description:
      "Our R&D team designs a conceptual solution and develops functional prototypes for initial testing and feedback, ensuring the design meets your exact specifications.",
  },
  {
    image: step3,
    title: "Engineering & Manufacturing",
    description:
      "Upon concept approval, we proceed with detailed engineering and manufacturing of the bespoke automated system using high-quality materials and components.",
  },
  {
    image: step4,
    title: "Testing, Deployment & Support",
    description:
      "The final product undergoes rigorous testing before being deployed at your site. We provide comprehensive training and ongoing maintenance to ensure optimal performance.",
  },
];

function CreationProcess() {
  return (
    <section className="key_features creation_process">
      <div className="container-fluid">
        <div className="lg:px-[90]">
          <div className="title_area">
            <div>
              <h1>Our Co-Creation Process</h1>
              <p>Partnering with you from Concept to Completion</p>
            </div>
          </div>
          <div className="row px-[20px]">
            {featuresData.map((data, idx) => (
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3 lg:p-2" key={idx}>
                <div key={idx} className="card feature_card text-center" id="creation_process_card">
                  <div className="image_wrapper">
                    <Image
                      src={data?.image}
                      width={0}
                      height={0}
                      alt={data?.title}
                    />
                  </div>
                  <div className="feature_content">
                    <h3 className="mt-4">{data?.title}</h3>
                    <p>{data?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreationProcess;
