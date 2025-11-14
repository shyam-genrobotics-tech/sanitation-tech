import React from "react";
import Impact from "../common/Impact";

function Mobility_impacts() {
  const stats = [
    {
      label: "Robotic Manhole Cleaning",
      value: 100,
    },
    {
      label: "Robotic Waste Handling",
      value: 100,
    },
    {
      label: "Elimination of Manual Scavenging",
      value: 100,
    },
    {
      label: "Reduction in Operation Cost",
      value: 75,
    },
  ];
  return <Impact cols={4} count="28" stats={stats} />;
}

export default Mobility_impacts;
