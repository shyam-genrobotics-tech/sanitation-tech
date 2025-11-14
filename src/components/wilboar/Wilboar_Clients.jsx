"use client"
import React from "react";
import Clients from "../common/Clients";

import img1 from "@/assets/clients/indah_water.webp";
import img2 from "@/assets/clients/municipal_committee_of_leh.webp";
import img3 from "@/assets/clients/thiruvananthapuram_airport.svg";
import Slider from "react-slick";
import Image from "next/image";

const clients = [
  { image: img1, alt: "Indah Water" },
  { image: img2, alt: "Municipal Committee of Leh (MCL)" },
  { image: img3, alt: "Thiruvananthapuram Airport" },
];

function Wilboar_Clients() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="clients_sec">
      <div
        className={
          clients && clients.length > 5 ? "container-fluid clients-container" : "container clients-container"
        }
      >
        <div className="headings_ mb-4">
          <h1>Our Esteemed Clients</h1>
          <p className="text-justify">
            We are privileged to partner with a diverse range of organizations
            across various sectors, helping them achieve their sanitation and
            operational goals.
          </p>
        </div>
        <Slider {...settings}>
          {clients &&
            Array.isArray(clients) &&
            clients.length != 0 &&
            clients.map((data, index1) => {
              return (
                <div key={index1}>
                  <div className="client_wrapper">
                    <div className="logo-box">
                      <Image
                        src={data?.image.src}
                        width={0}
                        height={0}
                        alt={data?.alt}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
}

export default Wilboar_Clients;
