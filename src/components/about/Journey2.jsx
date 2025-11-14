import Image from "next/image";
import React from "react";
import journeyMap from "@/assets/about/1758170671263-729425691.webp";

function Journey2() {
  return (
    <section className="journey2_sec">
      <div className="container-fluid">
        <div className="lg:px-[90]">
          <Image src={journeyMap} width={0} height={0} alt="journey map" priority layout="resposive"/>
        </div>
      </div>
    </section>
  );
}

export default Journey2;
