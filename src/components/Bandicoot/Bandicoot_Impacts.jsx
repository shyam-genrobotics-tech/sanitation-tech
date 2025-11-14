import React from "react";
import Impact from "../common/Impact";

function Bandicoot_Impacts() {
  const stats = [
    {
      label: "Robotic Manhole Cleaning",
      value: 100,
    },
    {
      label: "Elimination of Manual Scavenging",
      value: 100,
    },
    {
      label: "Reduction in Operation Cost",
      value: 62,
    },
  ];
  return <Impact cols={3} count={18} stats={stats}/>;
}

export default Bandicoot_Impacts;
