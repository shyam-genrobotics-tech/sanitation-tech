import React from "react";
import HowWorks from "../common/HowWorks";


const bandicootOperations = [
  {
    title: "Vehicle Positioning & Robot Deployment",
    description:
      "The Mobility+ vehicle is positioned near the manhole. The integrated system allows for easy and quick deployment of the Bandicoot robotic unit.",
  },
  {
    title: "Robotics Unit Operation",
    description:
      "The Bandicoot robot (Robotics Unit) is lowered into the manhole. Its robotic legs expand for stability and movement.",
  },
  {
    title: "Inspection & Cleaning",
    description:
      "HD cameras and gas sensors facilitate inspection. The robotic arm, with its bucket/grabber, efficiently collects waste.",
  },
  {
    title: "Automated Waste Transfer",
    description:
      "Collected waste is lifted by the robot and automatically transferred to the vehicle's integrated storage chamber via the dumper system.",
  },
  {
    title: "Waste Containment & Transportation",
    description:
      "Waste is securely contained within the vehicle for hygienic transportation to disposal sites.",
  },
  {
    title: "Remote Operation & Safety",
    description:
      "The entire operation, including robot control and waste dumping, is managed remotely, ensuring zero human entry and maximum operator safety.",
  },
  {
    title: "Detachable for Narrow Areas",
    description:
      "If needed, the core Bandicoot robot can be detached from the vehicle for use in narrow lanes or areas inaccessible to the vehicle itself, offering operational flexibility.",
  },
];

function HowMobilityWorks() {
  return (
    <HowWorks
      title="How Bandicoot </br> Mobility+ Works?"
      subTitle="An Integrated and Automated Cleaning Cycle"
      description="Bandicoot Mobility+ streamlines the entire manhole cleaning process through seamless vehicle integration and automation."
      video="https://www.youtube.com/embed/8CtmdQHt3_g"
      robotOperationSteps={bandicootOperations}
    />
  );
}

export default HowMobilityWorks;
