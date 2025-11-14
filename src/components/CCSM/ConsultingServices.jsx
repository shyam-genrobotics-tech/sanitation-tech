import React from "react";
import Services from "../common/Services";

const services = [
  {
    title: "Risk Assessment & Hazard Identification",
    description:
      "Our experts conduct thorough on-site assessments to identify all potential hazards associated with your confined spaces. We analyze existing procedures and provide a detailed risk profile to form the foundation of your safety strategy.",
    linkUrl: "#",
  },
  {
    title: "Technology & Automation Recommendation",
    description:
      "Based on our assessment, we recommend the most suitable automated solutions (including our Bandicoot and Wilboar systems) to eliminate or minimize human entry, thereby drastically reducing risk and improving efficiency.",
    linkUrl: "#",
  },
  {
    title: "SOP Development & Training",
    description:
      "We help you develop and implement robust Standard Operating Procedures (SOPs) for all confined space activities. We also provide comprehensive training for your workforce on these new procedures and the use of automated equipment.",
    linkUrl: "#",
  },
  {
    title: "Compliance & Audit Support",
    description:
      "Navigating safety regulations can be complex. We guide you in developing a compliance framework that meets local and international standards, and we assist in preparing for and conducting safety audits.",
    linkUrl: "#",
  },
];

function ConsultingServices() {
  return (
    <section className="key_values_sec">
      <div className="container-fluid">
        <div className="lg:px-[2rem]">
          <div className="key_values_title">
            <h1>
              The Genrobotics Advantage
            </h1>
            <p>Key Values that We Deliver as your Partner in Confined Space Safety</p>
          </div>
          <br />
          <div className="row">
            {services.map((data, index77) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3" key={index77}>
                  <div className="card value_card">
                    <h3>{data?.title}</h3>
                    <p>{data?.description}</p>
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

export default ConsultingServices;
