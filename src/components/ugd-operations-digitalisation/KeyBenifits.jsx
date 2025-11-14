"use client"
import { useState } from "react";

import img1 from "@/assets/services/ugd-operations-digitalisation/benifits/Enhanced Efficiency.svg";
import img2 from "@/assets/services/ugd-operations-digitalisation/benifits/Complete Transparency.svg";
import img3 from "@/assets/services/ugd-operations-digitalisation/benifits/Improved Worker Safety Icn.svg";
import img4 from "@/assets/services/ugd-operations-digitalisation/benifits/Data-Driven Maintenance.svg";
import img5 from "@/assets/services/ugd-operations-digitalisation/benifits/Faster Complaint Resolution.svg";
import img6 from "@/assets/services/ugd-operations-digitalisation/benifits/Increased Accountability.svg";
import img7 from "@/assets/services/ugd-operations-digitalisation/benifits/Significant Cost Savings.svg";
import img8 from "@/assets/services/ugd-operations-digitalisation/benifits/Environmental & Health Impact.svg";
import Image from "next/image";

const benefits = [
  {
    image: img1,
    title: "Enhanced Efficiency",
    description:
      "Optimize resource allocation, reduce fuel costs, and increase the number of tasks completed daily.",
  },
  {
    image: img2,
    title: "Complete Transparency",
    description:
      "Gain a clear, real-time view of all field activities, from task assignment to completion.",
  },
  {
    image: img3,
    title: "Improved Worker Safety",
    description:
      "Eliminate manual entry into hazardous spaces and monitor safety compliance through the platform.",
  },
  {
    image: img4,
    title: "Data-Driven Maintenance",
    description:
      "Shift from reactive repairs to proactive, predictive maintenance based on real-world data and AI insights.",
  },
  {
    image: img5,
    title: "Faster Complaint Resolution",
    description:
      "Streamline the process from citizen complaint to resolution, enhancing public trust and satisfaction.",
  },
  {
    image: img6,
    title: "Increased Accountability",
    description:
      "Track team and asset performance with automated reports, ensuring a higher standard of service delivery.",
  },
  {
    image: img7,
    title: "Significant Cost Savings",
    description:
      "Reduce operational costs through optimized fuel consumption, efficient manpower allocation, and preventive maintenance.",
  },
  {
    image: img8,
    title: "Environmental & Health Impact",
    description:
      "Ensure regulatory compliance with automated logs and prevent sewer overflows to protect public health.",
  },
];

function KeyBenifits() {
  const [showAll, setShowAll] = useState(false);

  const displayedBenifits = showAll ? benefits : benefits.slice(0, 4);
  return (
    <section className="key_benifits_sec">
      <div className="container-fluid" style={{ padding: "0 20px" }}>
        <div className="lg:px-[2rem]">
          <h1>
            Key Benefits of a Digitalized <br /> Ecosystem
          </h1>
          <br />
          <div className="row">
            {displayedBenifits.map((item, indx7) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 mt-4" key={indx7}>
                  <div className="card benifits_card">
                    <Image
                      src={item?.image}
                      alt={item?.title}
                      width={120}
                      height={120}
                    />
                    <br />
                    <h4>{item?.title}</h4>
                    <p>{item?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {displayedBenifits.length > 3 && (
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
    </section>
  );
}

export default KeyBenifits;
