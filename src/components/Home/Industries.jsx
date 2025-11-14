import React from "react";
import Image from "next/image";

import icon1 from "@/assets/icons/industries/new/Municipal & Urban Services.svg";
import icon2 from "@/assets/icons/industries/new/Oil and Gas.svg";
import icon3 from "@/assets/icons/industries/new/Chemical & Pharmaceutical.svg";
import icon4 from "@/assets/icons/industries/new/Utilities and Infra.svg";
import icon5 from "@/assets/icons/industries/new/Disaster.svg";
import icon6 from "@/assets/icons/industries/new/Manufacturing.svg";

const caseStudyImages = [
  {
    image: icon1,
    alt: "Municipal & Urban Services",
  },
  {
    image: icon2,
    alt: "Oil & Gas Industries",
  },
  {
    image: icon3,
    alt: "Chemical & Pharmaceutical",
  },
  {
    image: icon4,
    alt: "Utilities & Infrastructure",
  },
  {
    image: icon5,
    alt: "Disaster Management",
  },
  {
    image: icon6,
    alt: "Manufacturing Industries",
  },
];

function Industries() {
  return (
    <section className="industries_sec">
      <div className="container-fluid">
        <h1 className="title__">Industries We Serve</h1>
<br />
        <div className="row wrapper_">
          {caseStudyImages.map((data, index7) => {
            return (
              <div
                className="col-lg-2 col-md-4 col-6 mb-4"
                key={index7}
                // 'col-6' gives 2 per row on mobile with Bootstrap
              >
                <div className="image_wrapper">
                  <Image
                    src={data?.image}
                    alt={data?.alt}
                    width={0}
                    height={0}
                  />
                </div>
                <p>{data?.alt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Industries;
