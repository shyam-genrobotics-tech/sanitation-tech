import React from "react";

function OurStory() {
  return (
    <section className="ourStory_sec">
      <div className="container-fluid story_container">
        <div className="lg:px-[90]">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 title_wrapper">
              <h1>Our Story</h1>
              <p id="sub_title">The Genesis of Change</p>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <p className="text-justify mt-4">
                Genrobotics was founded by a group of young engineers during
                their college days, united by a vision to use robotics and AI to
                solve real-world problems. What moved us most was the harsh
                reality faced by sanitation workers—people who, for generations,
                have been forced to enter manholes and sewers to clean them by
                hand. This inhumane practice, still present in many parts of the
                world, puts their lives at constant risk and robs them of
                dignity.
              </p>
              <p className="text-justify">
                Motivated by empathy and a strong desire to bring change, we
                developed Bandicoot—the world’s first robotic scavenger.
                Designed to clean manholes without human entry, Bandicoot marked
                a major step toward ending manual scavenging. Its success
                sparked a larger mission: to create robotic solutions that can
                take on the world’s most dangerous jobs and ensure safety,
                dignity, and a better quality of life for workers everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
