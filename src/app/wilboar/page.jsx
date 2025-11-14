import Bandicot_makInIndia from "@/components/Bandicoot/Bandicot_makInIndia";
import Clients from "@/components/common/Clients";
import IndustryApplications from "@/components/Bandicoot/IndustryApplications";
import MissionRobo from "@/components/Bandicoot/MissionRobo";
import SanitaionWorkers from "@/components/wilboar/SanitaionWorkers";
import TrustUs from "@/components/Bandicoot/TrustUs";
import MakeInIndia from "@/components/common/MakeInIndia";
import Mobility_faq from "@/components/Mobility+/Mobility_faq";
import ScrollToTop from "@/components/ScrollToTop";
import Hero5 from "@/components/wilboar/Hero5";
import WhyWilboar from "@/components/wilboar/WhyWilboar";
import Wilboar_Applications from "@/components/wilboar/Wilboar_Applications";
import Wilboar_features from "@/components/wilboar/Wilboar_features";
import WilboarForm from "@/components/wilboar/WilboarForm";
import { createMetadata } from "@/utils/seo";
import React from "react";
import Wilboar_Clients from "@/components/wilboar/Wilboar_Clients";
import wilboarProduct from "@/assets/products/wilboar/JKR_3204 1.webp";
import Wilboar_faq from "@/components/wilboar/Wilboar_faq";

export function generateMetadata() {
  return createMetadata({
    title: "Genrobotics – Wilboar",
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
      <Hero5 />
      <WhyWilboar />
      <Wilboar_features />
      <Wilboar_Applications />
      <IndustryApplications product="Wilboar" />
      <Wilboar_Clients />
      <MakeInIndia
        image={wilboarProduct}
        title="Wilboar : <br />Make in India, for Global Impact"
        description="Wilboar is completely designed and manufactured in India, a testament to the 'Make in India' initiative. Through Wilboar, we champion the 'AatmaNirbhar Bharat Abhiyan' (Self-Reliant India campaign), empowering the nation with indigenous robotic technologies to eliminate manual scavenging.<br/> While rooted in India, the problem of hazardous sanitation work is a global concern. Wilboar's innovative solution holds a global perspective, offering a proven and adaptable technology that can be deployed worldwide to transform sanitation practices, protect workers, and improve public health in any nation facing similar challenges."
        className="wilboar_makeInIndia"
      />
      {/* <SanitaionWorkers /> */}
      <SanitaionWorkers />
      <MissionRobo />
      <Wilboar_faq />
      <WilboarForm />
      <ScrollToTop />
    </main>
  );
}

export default page;
