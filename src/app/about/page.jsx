import React from "react";
import Advisors from "@/components/about/Advisors";
import Banner from "@/components/about/Banner";
import CoreValues from "@/components/about/CoreValues";
import Founders from "@/components/about/Founders";
import Hero11 from "@/components/about/Hero11";
import Journey2 from "@/components/about/Journey2";
import MissionVision from "@/components/about/MissionVision";
import OurStory from "@/components/about/OurStory";
import Partners from "@/components/about/Partners";
import Team from "@/components/about/Team";
import WhyChoose from "@/components/Home/WhyChoose";
import ScrollToTop from "@/components/ScrollToTop";
import { createMetadata } from "@/utils/seo";
import Head from "next/head";

export function generateMetadata() {
  return createMetadata({
    title: "Genrobotics – Who We Are",
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
      <Hero11 />
      <Banner />
      <OurStory />
      <Journey2 />
      <MissionVision />
      <CoreValues />
      <Founders />
      <Team />
      <Advisors />
      <Partners />
      <WhyChoose />
      <ScrollToTop />
    </main>
  );
}

export default page;
