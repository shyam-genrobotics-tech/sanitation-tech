import ComplexRisks from "@/components/CCSM/ComplexRisks";
import Consulting_banner from "@/components/CCSM/Consulting_banner";
import Consulting_faq from "@/components/CCSM/Consulting_faq";
import Consulting_form from "@/components/CCSM/Consulting_form";
import ConsultingServices from "@/components/CCSM/ConsultingServices";
import Hero7 from "@/components/CCSM/Hero7";
import WhyPartner from "@/components/CCSM/WhyPartner";
import ScrollToTop from "@/components/ScrollToTop";
import { createMetadata } from "@/utils/seo";
import Head from "next/head";
import React from "react";

export function generateMetadata() {
  return createMetadata({
    title: "Genrobotics – Consulting for Confined Space Management",
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
      <Hero7 />
      <ComplexRisks />
      <ConsultingServices />
      <WhyPartner />
      {/* <Consulting_banner /> */}
      <Consulting_faq />
      <Consulting_form />
      <ScrollToTop />
    </main>
  );
}

export default page;
