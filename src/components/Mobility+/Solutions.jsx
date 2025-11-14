import Image from "next/image";
import React from "react";
// import banner from "@/assets/products/mobilityPlus/Mobility+ Seperate Units.jpg";
import banner from "@/assets/products/mobilityPlus/solutions_image.webp";

function Solutions() {
  return (
    <section className="solutions_sec">
      <Image src={banner} width={0} height={0} alt="mobility plus banner" />
      <div className="content_">
        <h1>The Complete Solution</h1>
        <p>
          Advanced, vehicle-integrated robotic unit designed to transform
          confined space cleaning and its waste management with efficiency,
          safety, and innovation.{" "}
        </p>
      </div>
    </section>
  );
}

export default Solutions;
