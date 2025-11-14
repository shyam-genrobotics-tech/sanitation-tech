"use client"

import React from "react";

const capabilities = [
  {
    id: "01",
    title: "Subterranean Exploration",
    description:
      "Developing systems for navigating and inspecting underground tunnels, mines, and other complex subterranean environments.",
  },
  {
    id: "02",
    title: "Specialized Inspection Tasks",
    description:
      "Integrating advanced sensors (ultrasonic, thermal, etc.) for non-destructive testing and detailed structural integrity analysis.",
  },
  {
    id: "03",
    title: "Bespoke Cleaning Protocols",
    description:
      "Designing unique cleaning mechanisms, such as specialized jetting nozzles or chemical delivery systems, for specific industrial residues.",
  },
  {
    id: "04",
    title: "Underwater Operations",
    description:
      "Building fully submersible automated systems for inspection and maintenance of underwater infrastructure like dams and reservoirs.",
  },
  {
    id: "05",
    title: "Hazardous Material Handling",
    description:
      "Creating specialized end-effectors and containment systems for safely handling toxic, corrosive, or radioactive materials.",
  },
  {
    id: "06",
    title: "High-Altitude Maintenance",
    description:
      "Engineering systems like G-Beetle for cleaning and maintenance of high-rise building facades and other elevated structures.",
  },
];

function AreasofExpertise() {
  return (
    <section className="areas_of_expertise_sec">
      <div className="container-fluid">
        <div className="lg:px-[90]">
          <h1>Areas of Expertise</h1>

          <div className="content_sec">
            {/* Desktop: normal grid; Mobile: horizontal scroll */}
            <div
              className="row scroll_container"
              style={{
                overflowX: "auto",
                flexWrap: "nowrap",
                display: "flex",
                gap: "24px",
              }}
            >
              {capabilities.map((data, idx7) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center"
                  key={idx7}
                  style={{
                    minWidth: "320px", // card-like scroll for mobile
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
            {/* Responsive: flex grid for desktop, horizontal scroll for mobile */}
            <style jsx>{`
              @media (min-width: 768px) {
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
              @media (max-width: 767px) {
                .scroll_container {
                  flex-wrap: nowrap !important;
                  overflow-x: auto !important;
                  -webkit-overflow-scrolling: touch;
                  gap: 16px !important;
                  padding-bottom: 8px;
                }
                .scroll_container > div {
                  min-width: 280px !important;
                  max-width: 340px !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AreasofExpertise;
