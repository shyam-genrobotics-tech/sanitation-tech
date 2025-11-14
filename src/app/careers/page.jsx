import Journey from "@/components/about/Journey";
import Hero10 from "@/components/careers/Hero10";
import LiftAt from "@/components/careers/LiftAt";
import Openings from "@/components/careers/Openings";
import OurStrength from "@/components/careers/OurStrength";
import Signupsuggetion from "@/components/careers/Signupsuggetion";
import WhyGenrobotics from "@/components/careers/WhyGenrobotics";
import ScrollToTop from "@/components/ScrollToTop";
import { createMetadata } from "@/utils/seo";
import React from "react";

export function generateMetadata() {
  return createMetadata({
    title: "Genrobotics – Careers",
    description:
      "Genrobotics drives sustainable robotics innovation with advanced solutions such as Bandicoot, Bandicoot Mobility Plus, Bandicoot Mobility, GCrow, and Wilboar. Supported by industry leaders including ONGC, IOCL, BPCL, and ADANI—and bolstered by investments from Anand Mahendra and Sreedhar Vembu of Zoho—our cutting-edge systems embody excellence, efficiency, and eco-friendly technology.",
    url: "https://www.genrobotics.com",
    image:
      "https://images.prismic.io/gen-robotics/8acaddbf-43be-4848-9bcf-45d2a7de2b05_JKR_8841.webp?auto=compress,format",
  });
}

function page() {
  return (
    <main>
      <Hero10 />
      <WhyGenrobotics />
      <OurStrength />
      <Openings />
      <Signupsuggetion />
      <LiftAt />
      <ScrollToTop />
    </main>
  );
}

export default page;
