"use client"
import React from "react";

const deploymentSteps = [
  {
    id: "01",
    title: "Assessment and Planning",
    description:
      "We begin by assessing your current infrastructure, challenges, and goals. Based on this, we create a tailored digitalisation plan.",
  },
  {
    id: "02",
    title: "Deployment and Integration",
    description:
      "We deploy the necessary automated hardware and fully integrate it with the G-Crow platform. Comprehensive training is provided to your team.",
  },
  {
    id: "03",
    title: "Optimization and Support",
    description:
      "We provide ongoing support and use data analytics to continuously optimize your operations for maximum efficiency and impact.",
  },
];

function Impelementation() {
  return (
    <section className="implementation_sec areas_of_expertise_sec">
      <div className="container-fluid implementation_container">
        <div className="lg:px-[90] ">
          <h1>Areas of Expertise</h1>

          <div className="content_sec">
            {/* Desktop view: normal grid, Mobile: horizontal scroll */}
            <div
              className="row scroll_container"
              style={{
                overflowX: "auto",
                flexWrap: "nowrap",
                display: "flex",
                gap: "24px",
              }}
            >
              {deploymentSteps.map((data, idx7) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center"
                  key={idx7}
                  style={{
                    minWidth: "320px", // makes it card-like on scroll for mobile
                    maxWidth: "360px",
                    flex: "0 0 auto",
                  }}
                >
                  <div className="card experties_card" style={{ width: "100%" }}>
                    <h1>{data?.id}</h1>
                    <h2>{data?.title}</h2>
                    <p>{data?.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Responsive CSS style for horizontal scroll on mobile */}
            <style jsx>{`
              @media (min-width: 1025px) {
                .scroll_container {
                  flex-wrap: wrap !important;
                  overflow-x: unset !important;
                  gap: 0 !important;
                }
                .scroll_container > div {
                  min-width: unset !important;
                  max-width: unset !important;
                }
              }
              @media (max-width: 1024px) {
                .scroll_container {
                  flex-wrap: nowrap !important;
                  overflow-x: auto !important;
                  -webkit-overflow-scrolling: touch;
                  gap: 16px !important;
                  padding-bottom: 8px;
                }
                .scroll_container > div {
                  min-width: 80vw !important;
                  max-width: 90vw !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impelementation;
