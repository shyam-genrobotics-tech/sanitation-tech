import React from "react";

const coreStrengths = [
  {
    title: "Unmatched Expertise",
    description:
      "Our team comprises seasoned safety professionals and robotics engineers with deep domain knowledge of confined space challenges.",
  },
  {
    title: "Technology-First Approach",
    description:
      "We don’t just advise—our clients receive tangible, proven automated solutions that address safety challenges at their core, delivering real, long-term impact.",
  },
  {
    title: "Holistic & Customized Solutions",
    description:
      "We understand that every industry is different. Our consulting is not one-size-fits-all; we provide customized strategies tailored to your specific operational environment.",
  },
];

function WhyPartner() {
  return (
    <section className="why_partner_">
      <div className="container-fluid" style={{padding: "0 20px !important"}}>
        <div className="md:px-[2rem]">
          <h1>Why Partner with Genrobotics?</h1>
          <br />
          <div className="row">
            {coreStrengths.map((strength, index) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12 mt-3" key={index}>
                  <div className="card partner_card">
                    <h2>{strength?.title}</h2>
                    <p>{strength?.description}</p>
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

export default WhyPartner;
