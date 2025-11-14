import React from "react";

import * as Ri from "react-icons/ri";

import icon1 from "@/assets/modals/Models-001.svg";
import icon2 from "@/assets/modals/Models-002.svg";
import icon3 from "@/assets/modals/Models-04-01-01.webp";
import icon4 from "@/assets/modals/Emergency Light.webp";
import Image from "next/image";

const engagementModels = [
  {
    model: "Model 1",
    title: "Solution Deployment with Operator Training",
    description:
      "We provide advanced robotic solutions with end-to-end training support for your existing workforce. This empowers your team to operate, manage, and maintain the systems independently—ensuring smooth integration, local ownership, and long-term operational autonomy while meeting all safety and compliance standards.",
    icons: icon1,
    linkText: "#home_enquiry",
  },
  {
    model: "Model 2",
    title: "Solution Deployment with Full Operations & Maintenance",
    description:
      "We offer our robotic solutions with end-to-end Operation & Maintenance support for clients who prefer a hands-off approach. From deployment to daily operation and maintenance, our expert team ensures smooth, compliant service—so you can focus on your core priorities while we handle the rest.",
    icons: icon2,
    linkText: "#home_enquiry",
  },
  {
    model: "Model 3",
    title: "Solution Rental with Full Operations & Maintenance",
    description:
      "For maximum flexibility, we offer our advanced robotic solutions on a rental basis, ideal for clients seeking short-term or project-specific deployments. This model includes full operational and maintenance support from our expert team, enabling clients to leverage our advanced technology without the need for long-term capital investment.",
    icons: icon3,
    linkText: "#home_enquiry",
  },
  {
    model: "Model 4",
    title: "Emergency Response Units for Sanitation Accidents and Floods",
    description:
      "We provide specialized Emergency Response services using our advanced robotic systems to manage critical situations safely. By deploying remote-controlled robots, we eliminate human risk, while our expert team works alongside authorities and industries to deliver fast, tech-enabled support when it’s needed most.",
    icons: icon4,
    linkText: "#home_enquiry",
  },
];

function Modals() {
  return (
    <section className="modals_sec">
      <div className="modals_container md:container-fluid">
        <div className="lg:px-[2rem]">
          <div className="rob_pro_contents">
            <h1>Our Flexible Engagement Models</h1>
            <p>
              We offer adaptable engagement models to suit your operational
              needs, ensuring you receive the maximum benefit from our advanced
              robotic solutions and achieve regulatory compliance seamlessly.
            </p>
          </div>
          <div className="row">
            {engagementModels.map((item, index2) => {
              return (
                <div className="col-lg-6 col-2xl-3 col-md-12 col-sm-12 mt-3" key={index2}>
                  <div className="card engagementCard">
                    <div className="title_wrapper">
                      <h1>{item?.model}</h1>
                      <Image
                        src={item?.icons}
                        alt={`modal icon ${index2}`}
                        width={0}
                        height={0}
                        className="modal_icons"
                      />
                      <h2>{item?.title}</h2>
                    </div>

                    <p>{item?.description}</p>
                    <br />
                    <a
                      className="link_btn"
                      href="#home_enquiry"
                      aria-label="Model Details"
                      aria-describedby="Details about the Model"
                    >
                      Learn More <Ri.RiArrowRightFill />
                    </a>
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

export default Modals;
