import React from "react";

import BandicootUpdates from "@/components/Bandicoot/BandicootUpdates";
import BandicootWorks from "@/components/Bandicoot/BandicootWorks";
import Hero2 from "@/components/Bandicoot/Hero2";
import Impact from "@/components/common/Impact";
import IndustryApplications from "@/components/Bandicoot/IndustryApplications";
import KeyFeatures from "@/components/common/KeyFeatures";
import Recognitions from "@/components/Bandicoot/Recognitions";
import WhyBandicoot from "@/components/Bandicoot/WhyBandicoot";
import Bandicot_makInIndia from "@/components/Bandicoot/Bandicot_makInIndia";
import NationwideImpacts from "@/components/Bandicoot/NationwideImpacts";
import SanitaionWorkers from "@/components/wilboar/SanitaionWorkers";
import MissionRobo from "@/components/Bandicoot/MissionRobo";
import Clients from "@/components/common/Clients";
import FAQ from "@/components/Bandicoot/FAQ";
import BandicootForm from "@/components/Bandicoot/BandicootForm";

import feature1 from "@/assets/products/bandicoot/features/bandicoot_keyfeature_1.webp";
import feature2 from "@/assets/products/bandicoot/features/bandicoot_keyfeature_2.webp";
import feature3 from "@/assets/products/bandicoot/features/bandicoot_keyfeature_3.webp";
import feature4 from "@/assets/products/bandicoot/features/bandicoot_keyfeature_4.webp";
import feature5 from "@/assets/products/bandicoot/features/bandicoot_keyfeature_5.webp";
import feature6 from "@/assets/products/bandicoot/features/bandicoot_keyfeature_6.webp";
import feature7 from "@/assets/products/bandicoot/features/bandicoot_keyfeature_7.webp";
import feature8 from "@/assets/products/bandicoot/features/bandicoot_keyfeature_8.webp";
import feature9 from "@/assets/products/bandicoot/features/bandicoot_keyfeature_9.webp";

import TrustUs from "@/components/Bandicoot/TrustUs";
import { createMetadata } from "@/utils/seo";
import ScrollToTop from "@/components/ScrollToTop";
import BandicootClients from "@/components/Bandicoot/BandicootClients";
import Bandicoot_Impacts from "@/components/Bandicoot/Bandicoot_Impacts";
import Head from "next/head";

const featuresData = [
  {
    title: "Human-Like\nRobotic Arm",
    description:
      "6 degrees of freedom mimics human movements; can pick objects and shovel.",
    image: feature1,
  },
  {
    title: "Robotic\nLegs",
    description:
      "Provides stability and allows movement inside manholes for thorough cleaning.",
    image: feature2,
  },
  {
    title: "Operational\nDepth",
    description: "Can operate effectively up to a depth of 12 meters.",
    image: feature3,
  },
  {
    title: "Specially\nDesigned Bucket",
    description:
      "Efficiently collects and removes various types of waste from manholes.",
    image: feature4,
  },
  {
    title: "IP68\nWaterproof Design",
    description:
      "Ensures durability and reliable performance in harsh, wet environments.",
    image: feature5,
  },
  {
    title: "4 HD Cameras &\nGas Sensing",
    description:
      "Comprehensive vision and gas sensors for inspection and safety.",
    image: feature6,
  },
  {
    title: "Operational\nAssistant UI",
    description:
      "Easy-to-use control panel with operational assistance for efficient operation.",
    image: feature7,
  },
  {
    title: "Compact &\nAgile",
    description:
      "Suitable for small and narrow spaces, enhancing accessibility.",
    image: feature8,
  },
  {
    title: "Optimized for\nIndustrial Versatility",
    description:
      "Engineered with a body, offers exceptional durability while maintaining a lightweight form ensuring effortless handling across diverse industrial environments.",
    image: feature9,
  },
];

export function generateMetadata() {
  return createMetadata({
    title: "Bandicoot - Advanced Manhole Cleaning Robot",
    description:
      "Experience Bandicoot, India’s first robotic manhole cleaning robot by GenRobotics — designed to eliminate manual scavenging and ensure safe sanitation.",
    url: "https://www.sanitation.genrobotics.com/bandicoot"
  });
}

function page() {
  return (
    <main>
      <Hero2 />
      <WhyBandicoot />
      <KeyFeatures
        featuresData={featuresData}
        title="Key Features"
        subTitle="Bandicoot blends intelligent mobility with precision cleaning. Explore the features that power faster deployment,better access, and safer operations."
        className="bandicoot_key_features"
      />
      <IndustryApplications product="Bandicoot" />
      <BandicootWorks />
      <Bandicoot_Impacts />
      <BandicootUpdates />
      <Recognitions />
      <Bandicot_makInIndia />
      <NationwideImpacts />
      <SanitaionWorkers />
      <MissionRobo />
      <BandicootClients />
      <FAQ />
      <BandicootForm />
      <ScrollToTop />
    </main>
  );
}

export default page;
