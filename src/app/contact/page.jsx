import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactFormNew from "@/components/contact/ContactFormNew";
import Hero12 from "@/components/contact/Hero12";
import Location from "@/components/contact/Location";
import ScrollToTop from "@/components/ScrollToTop";
import { createMetadata } from "@/utils/seo";
import React from "react";

export function generateMetadata() {
  return createMetadata({
    title: "Genrobotics – Contact Us",
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
      <Hero12 />
      {/* <ContactForm />
      <Location /> */}
      <ContactDetails />
      <ContactFormNew />
      <ScrollToTop />
    </main>
  );
}

export default page;
