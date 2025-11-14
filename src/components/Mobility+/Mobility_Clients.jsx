import React from "react";
import Clients from "../common/Clients";
import img1 from "@/assets/clients/ahmedabad_airport.svg";
import img2 from "@/assets/clients/cmwssb.webp";
import img3 from "@/assets/clients/gudm.webp";
import img4 from "@/assets/clients/municipal_corporation_aurangabad.webp";

const clientData = [
  { image: img1, alt: "Ahmedabad Airport" },
  { image: img2, alt: "CMWSSB" },
  { image: img3, alt: "Gujarat Urban Development Mission" },
  { image: img4, alt: "Municipal Corporation Aurangabad" },
];

function Mobility_Clients() {
  return (
    <div>
      <Clients clients={clientData} />
    </div>
  );
}

export default Mobility_Clients;
