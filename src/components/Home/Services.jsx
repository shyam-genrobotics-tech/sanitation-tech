import React from "react";
import Services from "../common/Services";

const cardData = [
  {
    title: "Digitalisation of UGD Operations with Robotics & AI",
    description:
      "Transforming traditional underground drainage (UGD) operations into smart, data-driven workflows through the integration of advanced robotics and artificial intelligence.",
    linkText: "Learn More",
    linkUrl: "/services/ugd-operations-digitalisation",
  },
  {
    title: "Consulting for Confined Space Management",
    description:
      "Clients can leverage Genrobotics’ expertise in robotics and hazardous environment management through our specialized consulting services. We help develop and implement safe, efficient, and compliant strategies for confined space operations tailored to  our client's needs.",
    linkText: "Learn More",
    linkUrl: "/services/consulting-confined-space-management",
  },
  {
    title: "Customised Solutions for Unique Challenges",
    description:
      "When off-the-shelf solutions aren't enough, Genrobotics offers bespoke robotic system design and deployment. We engineer tailor-made solutions to address your most complex and niche industrial or environmental challenges.",
    linkText: "Learn More",
    linkUrl: "/services/customised-solutions",
  },
  // {
  //   title: "Emergency Response in Sanitation Accidents & Flood",
  //   description:
  //     "Genrobotics provides rapid robotic deployment for critical emergency situations, including sanitation accidents and urban flooding. Our robots can access dangerous areas, assess conditions, and perform vital tasks where human intervention is too risky.",
  //   linkText: "Learn More",
  //   linkUrl: "#",
  // },
];

function HomeServices() {
  return (
    <Services
      benefits={cardData}
      title="Our Services"
      description="We provides comprehensive services to help organizations and government bodies implement advanced robotic solutions for urban sanitation and confined space management, ensuring compliance and operational excellence."
    />
  );
}

export default HomeServices;
