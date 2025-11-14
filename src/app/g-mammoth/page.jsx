import React from "react";
import Hero4 from "@/components/gmammoth/Hero4";
import WhyMammoth from "@/components/gmammoth/WhyMammoth";
import Mommoth_keyfeatures from "@/components/gmammoth/Mommoth_keyfeatures";
import Impact from "@/components/common/Impact";
import Clients from "@/components/common/Clients";
import TrustUs from "@/components/Bandicoot/TrustUs";
import Bandicot_makInIndia from "@/components/Bandicoot/Bandicot_makInIndia";
import SanitaionWorkers from "@/components/wilboar/SanitaionWorkers";
import MissionRobo from "@/components/Bandicoot/MissionRobo";
import Mobility_faq from "@/components/Mobility+/Mobility_faq";
import GmammothForm from "@/components/gmammoth/GmammothForm";
import { createMetadata } from "@/utils/seo";
import MakeInIndia from "@/components/common/MakeInIndia";
import ScrollToTop from "@/components/ScrollToTop";
import GmammothClients from "@/components/gmammoth/GmammothClients";

import makeInIndiaProd from "@/assets/products/gmammoth/IMG_2575 1.webp";
import Gmammoth_faq from "@/components/gmammoth/Gmammoth_faq";
import Head from "next/head";

export function generateMetadata() {
  return createMetadata({
    title: "Genrobotics – G Mammoth",
    description:
      "Genrobotics drives sustainable robotics innovation with advanced solutions such as Bandicoot, Bandicoot Mobility Plus, Bandicoot Mobility, GCrow, and Wilboar. Supported by industry leaders including ONGC, IOCL, BPCL, and ADANI—and bolstered by investments from Anand Mahendra and Sreedhar Vembu of Zoho—our cutting-edge systems embody excellence, efficiency, and eco-friendly technology.",
    url: "https://www.genrobotics.com",
    image:
      "https://images.prismic.io/gen-robotics/8acaddbf-43be-4848-9bcf-45d2a7de2b05_JKR_8841.webp?auto=compress,format",
  });
}

const stats = [
  {
    label: "Robotic Manhole Cleaning",
    value: 100,
  },
  {
    label: "Elimination of Manual Scavenging",
    value: 100,
  },
  {
    label: "Reduction in Operation Cost",
    value: 60,
  },
];

function page() {
  return (
    <main>
      <Hero4 />
      <WhyMammoth />
      <Mommoth_keyfeatures />
      <Impact count={18} cols={3} stats={stats} /> 
      <GmammothClients />
      <MakeInIndia
        image={makeInIndiaProd}
        title="G Mammoth : <br /> Make in India, for Global Impact"
        description="G Mammoth is completely designed and manufactured in India, a testament to the 'Make in India' initiative. Through G Mammoth, we champion the 'AatmaNirbhar Bharat Abhiyan' (Self-Reliant India campaign), empowering the nation with indigenous robotic technologies to eliminate manual scavenging.<br/> While rooted in India, the problem of hazardous sanitation work is a global concern. G Mammoth's innovative solution holds a global perspective, offering a proven and adaptable technology that can be deployed worldwide to transform sanitation practices, protect workers, and improve public health in any nation facing similar challenges."
      />
      {/* <SanitaionWorkers /> */}
      <SanitaionWorkers />
      <MissionRobo />
      <Gmammoth_faq />
      <GmammothForm />
      <ScrollToTop />
    </main>
  );
}

export default page;
