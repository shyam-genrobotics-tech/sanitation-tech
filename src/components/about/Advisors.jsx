"use client";
import React from "react";

import adv1 from "@/assets/about/advisors/cropped/bhaskar_majumdar.webp";
import adv2 from "@/assets/about/advisors/cropped/sridhar_vembu.webp";
import adv3 from "@/assets/about/advisors/cropped/anand_mahindra.webp";
import adv4 from "@/assets/about/advisors/cropped/goenga.webp";
import adv5 from "@/assets/about/advisors/cropped/tony.webp";
import adv6 from "@/assets/about/advisors/cropped/anil_joshy.webp";
import adv7 from "@/assets/about/advisors/cropped/manoj_agarwal.webp";
import adv8 from "@/assets/about/advisors/cropped/rajan_anandan.webp";
import unicornIndia from "@/assets/about/advisors/unicorn_india_ventures.webp";
import zohoEdcite from "@/assets/about/advisors/zoho_edcite.webp";
import zoho from "@/assets/about/advisors/zoho.webp";
import tally from "@/assets/about/advisors/tally.webp";
import mahindra from "@/assets/about/advisors/mahindra.webp";
import seaFund from "@/assets/about/advisors/seafund.webp";
import peakXV from "@/assets/about/advisors/peak_xy.webp"

import Image from "next/image";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";

const advisors = [
  {
    name: "Bhaskar Majumdar",
    designation: "Founder and Managing Partner",
    organization: "Unicorn India Ventures",
    logo: unicornIndia,
    image: adv1,
  },
  {
    name: "Sridhar Vembu",
    designation: "Co Founder",
    organization: "Zoho Corporation",
    logo: zoho,
    image: adv2,
  },
  {
    name: "Anand Mahindra",
    designation: "Chairperson",
    organization: "Mahindra and Mahindra",
    logo: mahindra,
    image: adv3,
  },
  {
    name: "Nupur Goenka",
    designation: "Co-Founder",
    organization: "Tally Solutions",
    logo: tally,
    image: adv4,
  },
  {
    name: "Tony G. Thomas",
    designation: "Co-Founder",
    organization: "Zoho Corporation, Edcite",
    logo: zohoEdcite,
    image: adv5,
  },
  {
    name: "Anil Joshy",
    designation: "Founder and Managing Partner",
    organization: "Unicorn India Ventures",
    logo: unicornIndia,
    image: adv6,
  },
  {
    name: "Manoj Kumar Agarwal",
    designation: "Founder and Managing Partner",
    organization: "Unicorn India Ventures",
    logo: seaFund,
    image: adv7,
  },
  {
    name: "Rajan Anand",
    designation: "Founder and Managing Partner",
    organization: "Unicorn India Ventures",
    logo: peakXV,
    image: adv8,
  },
];

function Advisors() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    arrows: false,
    nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
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
    <section className="advisors_sec">
      <div className="container-fluid advisors_container">
        <div className="heading_wrapper">
          <h1>Our Investors</h1>
          <p>
            We’re backed by partners who believe in innovation with purpose, and
            in creating lasting change together
          </p>
        </div>
        <br />
        <Slider {...settings}>
          {advisors.map((adv, index22) => {
            return (
              <div className="advisors_grid">
                <div className="card advisors_card" key={index22}>
                  <div className="image_wrapper">
                    <Image
                      src={adv.image}
                      width={0}
                      height={0}
                      alt={adv.name}
                    />
                  </div>
                  <div className="adv_content">
                    {adv?.logo && (
                      <Image
                        src={adv?.logo}
                        alt={adv.organization}
                        width={0}
                        height={0}
                      />
                    )}
                    <h3>{adv.name}</h3>
                    <p>{adv.designation}</p>
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

export default Advisors;
