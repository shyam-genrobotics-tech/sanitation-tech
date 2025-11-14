"use client";
import React from "react";

import rec1 from "@/assets/products/bandicoot/recognitions/supreme_court_of_india.webp";
import rec2 from "@/assets/products/bandicoot/recognitions/swachh_survekshan_toolkit.webp";
import rec3 from "@/assets/products/bandicoot/recognitions/national_humanrights_commission.webp";
import rec4 from "@/assets/products/bandicoot/recognitions/amrut_certification.webp";
import rec5 from "@/assets/products/bandicoot/recognitions/sbm_ersu_listing.webp";
import rec6 from "@/assets/products/bandicoot/recognitions/nskfdc.webp";
import rec7 from "@/assets/products/bandicoot/recognitions/swachhata_startup_challenge.webp";
import rec8 from"@/assets/products/bandicoot/recognitions/ministry_of_social_justice_and_empowerment.webp";
import Image from "next/image";

import * as Lu from "react-icons/lu";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";

const recognitions = [
  {
    title: "Supreme Court Judgement",
    description:
      "As per SC Judgement (Writ Petition No. 324/2020), Bandicoot was cited for employing modern technology to eliminate Manual Scavenging.",
    logo: rec1,
  },
  {
    title: "Swachh Survekshan Toolkit",
    description:
      "Bandicoot listed as Special Equipment for eliminating Manual Scavenging in the Swachh Survekshan, Waste to Wealth Toolkit, 2023.",
    logo: rec2,
  },
  {
    title: "National Human Rights Commission",
    description:
      "Bandicoot acknowledged by the NHRC as a Recognized Technological Equipment to replace Manual Scavenging.",
    logo: rec3,
  },
  {
    title: "AMRUT Certification (MoHUA)",
    description:
      "Certified as the 'Most Promising Innovative Solution' under AMRUT for eliminating human entry into sewer systems.",
    logo: rec4,
  },
  {
    title: "SBM – ERSU Listing",
    description:
      "Listed as Special Purpose Machinery under Emergency Response Sanitation Unit (ERSU) by the Swachh Bharat Mission (SBM).",
    logo: rec5,
  },
  {
    title:
      "National Safai Karamcharis Finance & Development Corporation",//(NSKFDC)
    description:
      "Recognized in the FY 2021–22 Annual Report of NCSK as a key solution for eliminating manual scavenging.",
    logo: rec6,
  },
  {
    title: "Swachhata Startup Challenge 2022 – National Innovation Recognition",
    description:
      "Genrobotics was selected among the Top 10 Startups for Bandicoot, receiving the award jointly presented by MoHUA and the Asian Development Bank.",
    logo: rec7,
  },
  {
    title: "Ministry of Social Justice and Empowerment",
    description:
      "Highlighted in the National Action for Mechanised Sanitation Ecosystem (NAMASTE), under Point 6.1, for identification and adoption of robotic solutions like Bandicoot.",
    logo: rec8,
  },
];

function Recognitions() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <CustomNextArrow customId="reco_nxt" />,
    prevArrow: <CustomPrevArrow customId="reco_prev" />,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section className="recognitions_sec">
      <div className="container-fluid recognition_container">
        <div className="lg:px-[2rem]">
          <h1 className="recognition_title">Recognition & Compliance</h1>
          <br />
          <div className="robo_card_wrapper">
            <Slider {...settings}>
              {recognitions.map((product, index) => {
                return (
                  <div className="card robo_prod_card" key={index}>
                    <div className="prod_img" id="rec_img_">
                      <Image
                        src={product?.logo}
                        alt={product?.title}
                        width={0}
                        height={0}
                      />
                    </div>
                    <div className="product_content">
                      <div>
                        <h2>{product?.title}</h2>
                        <div className="description_wrapper">
                          <p>{product?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recognitions;
