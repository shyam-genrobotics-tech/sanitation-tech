import React from "react";

const incidents = [
  {
    img: "canada.jpg",
    text: "99 Fatalities in Canada 2019",
  },
  {
    img: "uk.jpg",
    text: "4 Accident\nJun 10, 2023\nUK",
  },
  {
    img: "india.jpg",
    text: "1056 deaths till 2023, India",
  },
  {
    img: "philippines.jpg",
    text: "Three Workers died due to suffocation in sewer manhole at MANILA, Philippines.",
  },
  {
    img: "pennsylvania.jpg",
    text: "Two dead after falling into manhole while sewage cleaning at Pennsylvania.",
  },
  {
    img: "usa.jpg",
    text: "120 deaths 2002–2023 USA\nMan swept away while cleaning a manhole in USA.",
  },
  {
    img: "mombasa.jpg",
    text: "Three Mombasa County officials drown while unclogging a manhole.",
  },
  {
    img: "malaysia.jpg",
    text: "13 Accidents\nAug 21, 2022\nMalaysia",
  },
  {
    img: "ipoh.jpg",
    text: "Tragic end for two maintenance workers falling inside a manhole in Ipoh.",
  },
];

function Insidents() {
  return (
    <div className="incident-flex">
      {incidents.map((item, index) => (
        <div className="incident-card" key={index}>
          <img src={`/images/${item.img}`} alt="incident" />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Insidents;
