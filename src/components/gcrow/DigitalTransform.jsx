import React from "react";

function DigitalTransform() {
  return (
    <section className="DigitalTransform_">
      <div className="container-fluid">
        <div className="lg:px-[90] ">
          <h1>
            From Uncertainty to Accountability: The Digital Transformation
          </h1>
          <br />
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <div className="card tranform_card first">
                <h1>The Old Way: Operational Blindspots</h1>
                <p>
                  Without a digital system, managers grapple with uncertainty.
                  Manual logs are prone to errors, schedules are inefficient,
                  and proving compliance is a constant challenge. This lack of
                  real-time visibility leads to wasted resources and potential
                  public health risks.
                </p>
                <ul>
                  <li>Unreliable paper-based tracking</li>
                  <li>No real-time verification of completed work</li>
                  <li>
                    Difficulty in managing and deploying teams effectively
                  </li>
                  <li>Major hurdles in generating compliance reports</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <div className="card tranform_card second">
                <h1>The G Crow Way: Absolute Clarity</h1>
                <p>
                  G Crow replaces guesswork with certainty. It provides a single source of truth for all sanitation activities. Every task is tracked, verified with visual evidence, and logged automatically, creating a transparent, efficient, and fully accountable operation from the ground up. 
                </p>
                <ul>
                  <li>Live dashboard with GPS tracking</li>
                  <li>Timestamped photo evidence for every job</li>
                  <li>
                    Optimized scheduling and resource management
                  </li>
                  <li>Automated, audit-ready compliance reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalTransform;
