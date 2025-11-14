import React from "react";
import RecentUpdates from "../common/RecentUpdates";

import img1 from "@/assets/products/mobilityPlus/updates/gudm_mobility_robots.webp";
import img2 from "@/assets/products/mobilityPlus/updates/chennai_mobility_robots.webp";
import img3 from "@/assets/products/mobilityPlus/updates/aurangabad_mobility_robots.webp";
const recentUpdates = [
  {
    title: "Gujarat Leads with 10 Bandicoot Mobility+ Robots",
    content:
      "The Gujarat Urban Development Mission (GUDM) has deployed 10 Bandicoot Mobility+ robots across key municipalities to eliminate manual scavenging and enhance safety in sanitation. The robots have been allocated to key municipalities, enhancing efficiency in waste management and manhole cleaning, reflecting the state’s proactive commitment to smart, safe, and humane sanitation practices.",
    image: img1,
  },
  {
    title: "Chennai Deploys 3 Bandicoot Mobility+ Robots",
    content:
      "Chennai strengthens its commitment to smart sanitation with the launch of 3 Bandicoot Mobility+ Robots, inaugurated by Minister K.N. Nehru and Mayor Priya Rajan. This milestone builds on Tamil Nadu’s leadership in deploying Bandicoot technology, already active in over 15 cities across the state, advancing the cause of sustainable, human-friendly sanitation.",
    image: img2,
  },
  {
    title: "Chhatrapati Sambhajinagar Adopts 2 Bandicoot Mobility+ Units",
    content:
      "Formerly known as Aurangabad, Chhatrapati Sambhajinagar marks a key milestone in its sanitation transformation with the deployment of 2 Bandicoot Mobility+ Robots. The launch was graced by Commissioner Shri G. Srikanth IAS, City Engineer Shri Anirudh Dehankar, and Executive Engineer Shri Amol Kulkarni, signaling a powerful beginning toward safer, more connected, and accessible sanitation infrastructure.",
    image: img3,
  },
];

function MobilityUpdates() {
  return (
    <RecentUpdates
      title="RECENT UPDATES"
      description=""
      updates={recentUpdates}
    />
  );
}

export default MobilityUpdates;
