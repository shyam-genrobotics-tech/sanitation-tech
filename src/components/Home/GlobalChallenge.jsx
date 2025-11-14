import React from "react";
import map from "@/assets/global_challenges.webp";
import Image from "next/image";
import Insidents from "./Insidents";

function GlobalChallenge() {
  return (
    <section className="global_challenge_sec">
      <div className="md:container-fluid">
        <div className="lg:px-[2rem] ">
          <div className="global_wrapper ">
            <div className="rob_pro_contents z-2 relative">
              <h1 className="pt-[50]">A Global Challenge, A Global Solution</h1>
              <p className="text-justify pt-2">
                The challenges of aging infrastructure, hazardous sanitation
                work, and urban flooding are not unique to India — they are
                pressing global issues affecting cities across continents. From
                Asia to Africa, from Latin America to parts of Europe, millions
                still face unsafe sanitation conditions and the growing threat
                of climate-induced urban flooding. By replacing manual labor in
                life-threatening environments with robotics and smart management
                systems, Genrobotics is redefining the future of urban
                sanitation. The result — a smarter, safer, and more sustainable
                city, where technology protects both public health and human
                dignity.
              </p>
            </div>

            <div className="news">
              <Image src={map} alt="World map" width={0} height={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalChallenge;
