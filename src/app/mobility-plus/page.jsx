import React from "react";

import Hero2 from "@/components/Mobility+/Hero2";
import WhyBMP from "@/components/Mobility+/WhyBMP";
import Solutions from "@/components/Mobility+/Solutions";
import Usage from "@/components/Mobility+/Usage";
import Highlights from "@/components/Mobility+/Highlights";
import HowMobilityWorks from "@/components/Mobility+/HowMobilityWorks";
import IndustryApplications from "@/components/Bandicoot/IndustryApplications";
import Impact from "@/components/common/Impact";
import MobilityUpdates from "@/components/Mobility+/MobilityUpdates";
import Recognitions from "@/components/Bandicoot/Recognitions";
import Mobility_makeInIndia from "@/components/Mobility+/Mobility_makeInIndia";
import NationwideImpacts from "@/components/Bandicoot/NationwideImpacts";
import SanitaionWorkers from "@/components/wilboar/SanitaionWorkers";
import MissionRobo from "@/components/Bandicoot/MissionRobo";
import Clients from "@/components/common/Clients";
import MobilityKeyFeatures from "@/components/Mobility+/MobilityKeyFeatures";
import Mobility_faq from "@/components/Mobility+/Mobility_faq";
import MobilityForm from "@/components/Mobility+/MobilityForm";
import { createMetadata } from "@/utils/seo";
import Mobility_Clients from "@/components/Mobility+/Mobility_Clients";
import Mobility_impacts from "@/components/Mobility+/Mobility_impacts";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";

export function generateMetadata() {
  return createMetadata({
    title: "Bandicoot Mobility Plus - Sewer Cleaning Robot",
    description:
      "Genrobotics drives sustainable robotics innovation with advanced solutions such as Bandicoot, Bandicoot Mobility Plus, Bandicoot Mobility, GCrow, and Wilboar. Supported by industry leaders including ONGC, IOCL, BPCL, and ADANI—and bolstered by investments from Anand Mahendra and Sreedhar Vembu of Zoho—our cutting-edge systems embody excellence, efficiency, and eco-friendly technology.",
    url: "https://www.sanitation.genrobotics.com",
  });
}

function page() {
  return (
    <main>
      <Hero2 />
      <WhyBMP />
      <MobilityKeyFeatures />
      <Solutions />
      <Usage />
      <Highlights />
      <HowMobilityWorks />
      <IndustryApplications product="Bandicoot Mobility Plus" />
      <Mobility_impacts />
      <MobilityUpdates />
      <Recognitions />
      <Mobility_makeInIndia />
      <NationwideImpacts />
      <SanitaionWorkers />
      <MissionRobo />
      <Mobility_Clients />
      <Mobility_faq />
      <MobilityForm />
      <ScrollToTop />
    </main>
  );
}

export default page;
