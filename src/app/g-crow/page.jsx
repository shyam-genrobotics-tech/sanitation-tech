import DigitalTransform from "@/components/gcrow/DigitalTransform";
import Gcrow_cover from "@/components/gcrow/Gcrow_cover";
import Gcrow_faq from "@/components/gcrow/Gcrow_faq";
import Gcrow_form from "@/components/gcrow/Gcrow_form";
import Gcrow_services from "@/components/gcrow/Gcrow_services";
import Hero6 from "@/components/gcrow/Hero6";
import KeyFeatures from "@/components/gcrow/KeyFeatures";
import ScrollToTop from "@/components/ScrollToTop";
import { createMetadata } from "@/utils/seo";
import Head from "next/head";
import React from "react";

export function generateMetadata() {
  return createMetadata({
    title: "Genrobotics – G Crow",
    description:
      "Genrobotics drives sustainable robotics innovation with advanced solutions such as Bandicoot, Bandicoot Mobility Plus, Bandicoot Mobility, GCrow, and Wilboar. Supported by industry leaders including ONGC, IOCL, BPCL, and ADANI—and bolstered by investments from Anand Mahendra and Sreedhar Vembu of Zoho—our cutting-edge systems embody excellence, efficiency, and eco-friendly technology.",
    url: "https://www.genrobotics.org",
    image:
      "https://images.prismic.io/gen-robotics/8acaddbf-43be-4848-9bcf-45d2a7de2b05_JKR_8841.webp?auto=compress,format",
  });
}

function page() {

  return (
    <main>

      <Hero6 />
      <DigitalTransform />
      <KeyFeatures />
      <Gcrow_cover />
      <Gcrow_services />
      <Gcrow_faq />
      <Gcrow_form />
      <ScrollToTop />
    </main>
  );
}

export default page;
