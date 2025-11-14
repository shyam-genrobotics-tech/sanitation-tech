import React from "react";

function KeyValues() {
  return (
    <section className="key_values_sec">
      <div className="container-fluid">
        <div className="lg:px-[90]">
          <div className="key_values_title">
            <h1>The Genrobotics Advantage</h1>
            <p className="text-center">Key Values that We Deliver as your Partner in Confined Space Safety</p>
          </div>
          <br />
          <div className="row px-[20px]">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 lg:p-4">
              <div className="card value_card">
                <h3>Precision Engineering</h3>
                <p>
                  We engineer your solution from the ground up to solve your specific problem, ensuring maximum effectiveness where standard products fall short. Every detail is purpose-built to deliver meaningful impact in your unique environment.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 lg:p-4">
              <div className="card value_card">
                <h3>Collaborative Partnership</h3>
                <p>
                  Based on our assessment, we recommend the most suitable
                  automated solutions (including our Bandicoot and Wilboar
                  systems) to eliminate or minimize human entry, thereby
                  drastically reducing risk and improving efficiency.
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
              <div className="card value_card">
                <h3>Intellectual Property Co-ownership</h3>
                <p>
                  For truly unique innovations, we offer models for co-ownership
                  of the intellectual property, creating long-term value for
                  your organization.
                </p>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3 lg:p-4">
              <div className="card value_card">
                <h3>Unwavering Support</h3>
                <p>
                  Our commitment doesn't end at deployment. We provide dedicated
                  long-term support and maintenance to ensure your custom
                  solution continues to perform optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyValues;
