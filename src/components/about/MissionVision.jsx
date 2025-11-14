import Image from "next/image";
import React from "react";
import banner from "@/assets/about/cover.webp";

function MissionVision() {
  return (
    <section className="mission_vision">
      <div className="container-fluid mission_container">
        <div className="lg:px-[2rem]">
          <div className="banner_wrapper">
            <Image
              src={banner}
              alt="Genrobotics mission & Vision"
              width={0}
              height={0}
            />

            <div className="content_wrapper">
              <div className="card missionVisionCard vision_card">
                <h1>Our Vision</h1>
                <p>
                  To engineer intelligent robotic systems that transform the
                  standards of safety, efficiency, and sustainability in
                  industrial maintenance worldwide.
                </p>
              </div>
              <div className="card missionVisionCard mission_card">
                <h1>Our Mission</h1>
                <p>
                  Pioneering Robotics and AI solutions for challenging
                  environments — ensuring safety, reliability, and operational
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
