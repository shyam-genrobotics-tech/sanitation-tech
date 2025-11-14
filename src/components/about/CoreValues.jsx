import React from "react";

import icon1 from "@/assets/about/icons/Layer_1.svg";
import icon2 from "@/assets/about/icons/Layer_1 (1).svg";
import icon3 from "@/assets/about/icons/Layer_1 (2).svg";
import icon4 from "@/assets/about/icons/Layer_1 (3).svg";
import icon5 from "@/assets/about/icons/Layer_1 (4).svg";
import icon6 from "@/assets/about/icons/Layer_1 (5).svg";
import Image from "next/image";

const values = [
  {
    title: "Innovation",
    description:
      "Continuously explore and implement advanced technologies for impactful solutions.",
    image: icon1,
  },
  {
    title: "Empathy",
    description:
      "Understand and address the needs of our users and communities with compassion.",
    image: icon2,
  },
  {
    title: "Integrity",
    description:
      "Uphold the highest ethical standards in all our actions and commitments.",
    image: icon3,
  },
  {
    title: "Excellence",
    description:
      "Commit to the highest quality in our products, services, and operations.",
    image: icon4,
  },
  {
    title: "Social Responsibility",
    description:
      "Strive to make a positive and measurable difference in society and the environment.",
    image: icon5,
  },
  {
    title: "Collaboration",
    description:
      "Foster teamwork and partnerships to achieve shared goals effectively.",
    image: icon6,
  },
];

function CoreValues() {
  return (
    <section className="core_values">
      <div className="container-fluid values_container">
        <div className="lg:px-[2rem]">
          <h1>Our Core Values</h1>
          <div className="row px-[20px]">
            {values.map((value, index1) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 cust_col_"
                  key={index1}
                >
                  <div className="values_card card">
                    <div className="image_wrapper">
                      <Image
                        src={value.image}
                        alt={value.title}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
