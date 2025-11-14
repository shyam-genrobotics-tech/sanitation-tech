"use client";
import React from "react";

import Slider from "react-slick";
import Image from "next/image";

import img64 from "@/assets/clients/hand_in_hand_india.webp";
import img65 from "@/assets/clients/bharat_petroleum.webp";
import img66 from "@/assets/clients/tata_trusts.webp";
import img67 from "@/assets/clients/tcs.webp";
import img68 from "@/assets/clients/larsen_toubro.webp";
import img69 from "@/assets/clients/csl.webp";
import img70 from "@/assets/clients/hindustan_petroleum.webp";
import img71 from "@/assets/clients/coal_india.webp";
import img72 from "@/assets/clients/aditya_birla.webp";
import Clients from "../common/Clients";

const partners = [
  { image: img64, alt: "Hand in hand india" },
  { image: img65, alt: "Bharat Petroleum" },
  { image: img66, alt: "TATA TRUSTS" },
  { image: img67, alt: "TCS TATA CONSULTANCY SERVICES" },
  { image: img68, alt: "Larsen & Toubro" },
  { image: img69, alt: "CSL" },
  { image: img70, alt: "Hindustan Petroleum (HP)" },
  { image: img71, alt: "Coal India" },
  { image: img72, alt: "Aditya Birla Hindalco" },
];

function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: true,
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
      <div className="container-fluid partners_container">
        <div className="headings_">
          <h1>Our Partners</h1>
        </div>
        <Slider {...settings}>
          {partners &&
            Array.isArray(partners) &&
            partners.length != 0 &&
            partners.map((data, index1) => {
              return (
                <div key={index1}>
                  <div className="client_wrapper">
                    <div className="logo-box">
                      <Image
                        src={data?.image}
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

export default Partners;
