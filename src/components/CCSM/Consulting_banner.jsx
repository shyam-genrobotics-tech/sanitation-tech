import React from "react";
import banner from "@/assets/services/consulting/banner.webp";
import Image from "next/image";

function Consulting_banner() {
  return (
    <section className="cunsoluting_banner_sec">
      <Image src={banner} alt="consulting banner" width={0} height={0} />
    </section>
  );
}

export default Consulting_banner;
