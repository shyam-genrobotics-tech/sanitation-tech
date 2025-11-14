import React from "react";

import ico1 from "@/assets/icons/choose/Why Choose Genrobotics-05.svg";
import ico2 from "@/assets/icons/choose/Why Choose Genrobotics-04.svg";
import ico3 from "@/assets/icons/choose/Why Choose Genrobotics-03.svg";
import ico4 from "@/assets/icons/choose/Why Choose Genrobotics-02.svg";
import ico5 from "@/assets/icons/choose/Why Choose Genrobotics-01.svg";
import ico6 from "@/assets/icons/choose/Sustainability Icon-06 1.svg";
import Image from "next/image";

const features = [
  {
    icon: ico1,
    title: "AI-Powered Innovation",
    desc: "Leading the industry with advanced AI and robotics research and development.",
  },
  {
    icon: ico2,
    title: "Patented Technology",
    desc: "Proprietary and patented solutions ensuring superior performance and reliability.",
  },
  {
    icon: ico6,
    title: "Global Social Impact",
    desc: "Committed to eliminating manual scavenging and creating safer working conditions worldwide.",
  },
  {
    icon: ico5,
    title: "Sustainability Focus",
    desc: "Dedicated to developing eco-friendly and energy-efficient robotic solutions for a cleaner planet.",
  },
  {
    icon: ico3,
    title: "Proven Reliability",
    desc: "Built through years of optimisation, our robots are engineered for robust performance in the most challenging environments.",
  },
  {
    icon: ico4,
    title: "Expert Support",
    desc: "Comprehensive support and training to ensure seamless integration and operation with our dedicated support team.",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="md:container-fluid">
        <div className="lg:px-[90]">
          <h2 className="title">Why Choose Genrobotics?</h2>
          <br />
          <div className="feature-grid">
            {features.map((item, idx) => (
              <div className="feature-card" key={idx}>
                <Image
                  width={0}
                  height={0}
                  src={item.icon}
                  alt={item.title}
                  className="icon"
                />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
