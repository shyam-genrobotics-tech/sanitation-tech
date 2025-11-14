import React from "react";
import Head from "next/head";

import Clients from "@/components/common/Clients";
import TrustUs from "@/components/Bandicoot/TrustUs";
import CaseStudies from "@/components/Home/CaseStudies";
import Cleaning from "@/components/Home/Cleaning";
import GlobalChallenge from "@/components/Home/GlobalChallenge";
import Hero1 from "@/components/Home/Hero1";
import ImpactStats from "@/components/Home/ImpactStats";
import Industries from "@/components/Home/Industries";
import Milestones from "@/components/Home/Milestones";
import Modals from "@/components/Home/Modals";
import RoboticsProducts from "@/components/Home/RoboticsProducts";
import Sanitation from "@/components/Home/Sanitation";
import HomeServices from "@/components/Home/Services";
import WhyChoose from "@/components/Home/WhyChoose";
import ScrollToTop from "@/components/ScrollToTop";
import { createMetadata } from "@/utils/seo";
import Clients_Main from "@/components/Home/Clients_Main";
import Recognitions from "@/components/Bandicoot/Recognitions";
import Awards from "@/components/Home/Awards";
import Testimonials from "@/components/Testimonials";
import Enquiry from "@/components/common/Enquiry";
import Home_form from "@/components/Home/Home_form";

// ✅ SEO metadata generator
export function generateMetadata() {
  return createMetadata({
    title: "Sanitation Robot for Urban Cleaning | Genrobotics",
    description:
      "Genrobotics’ sanitation robot automates sewer and drain cleaning, ensuring safer, smarter, and more efficient sanitation solutions. Book your demo today.",
    keywords:
      "Genrobotics, Bandicoot, Robotics, Sanitation, Innovation, manhole cleaning robot, sewer cleaning robot, sewer jetting machine",
    url: "https://sanitation.genrobotics.com/"
  });
}

// ✅ Website Schema
const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Genrobotic Innovations Pvt Ltd",
  "url": "https://sanitation.genrobotics.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://sanitation.genrobotics.com/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// ✅ Home Page Component
export default function Home() {
  return (
    <main>
      {/* --- SEO Structured Data --- */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>

      {/* --- Page Content --- */}
      <Hero1 />
      <Cleaning />
      <Sanitation />
      <ImpactStats />
      <Milestones />
      <RoboticsProducts />
      <Modals />
      <HomeServices />
      <WhyChoose />
      <Recognitions />
      <CaseStudies />
      <Industries />
      <Clients_Main />
      <Awards />
      {/* <TrustUs /> */}
      <Testimonials />
      <GlobalChallenge />
      <Home_form />
      <ScrollToTop />
    </main>
  );
}
