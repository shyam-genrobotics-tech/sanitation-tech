import ScrollToTop from "@/components/ScrollToTop";
import Hero9 from "@/components/ugd-operations-digitalisation/Hero9";
import Impelementation from "@/components/ugd-operations-digitalisation/Impelementation";
import IntegratedSolutions from "@/components/ugd-operations-digitalisation/IntegratedSolutions";
import KeyBenifits from "@/components/ugd-operations-digitalisation/KeyBenifits";
import UGD_faq from "@/components/ugd-operations-digitalisation/UGD_faq";
import UGD_form from "@/components/ugd-operations-digitalisation/UGD_form";
import UGDmanagement from "@/components/ugd-operations-digitalisation/UGDmanagement";
import { createMetadata } from "@/utils/seo";
import Head from "next/head";
import React from "react";

export function generateMetadata() {
  return createMetadata({
    title: "Genrobotics – Digitalisation of UGD Operations",
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
      <Hero9 />
      <UGDmanagement />
      <IntegratedSolutions />
      <Impelementation />
      <KeyBenifits />
      <UGD_faq />
      <UGD_form />
      <ScrollToTop/>
    </main>
  );
}

export default page;
