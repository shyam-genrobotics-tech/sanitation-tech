import AreasofExpertise from "@/components/customised-solutions/AreasofExpertise";
import CreationProcess from "@/components/customised-solutions/CreationProcess";
import CustomisedSolutions_faq from "@/components/customised-solutions/CustomisedSolutions_faq";
import CustomisedSolutions_form from "@/components/customised-solutions/CustomisedSolutions_form";
import Hero8 from "@/components/customised-solutions/Hero8";
import KeyValues from "@/components/customised-solutions/KeyValues";
import StandardSolutions from "@/components/customised-solutions/StandardSolutions";
import ScrollToTop from "@/components/ScrollToTop";
import { createMetadata } from "@/utils/seo";
import Head from "next/head";
import React from "react";

export function generateMetadata() {
  return createMetadata({
    title: "Genrobotics – Customised Solutions",
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
      <Hero8 />
      <StandardSolutions />
      <CreationProcess />
      <KeyValues />
      <AreasofExpertise />
      <CustomisedSolutions_faq />
      <CustomisedSolutions_form />
      <ScrollToTop/>
    </main>
  );
}

export default page;
