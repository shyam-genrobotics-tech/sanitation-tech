"use client";
import React, { useEffect } from "react";

import * as Lu from "react-icons/lu";

import bandicootMobility from "@/assets/product-logos/product_mobility.webp";
import bandicootMobilityTitle from "@/assets/product-logos/mobility_card_logo.webp";
import bandicoot from "@/assets/product-logos/product_bandicoot.webp";
import bandicootTitle from "@/assets/product-logos/bandicoot_card_logo.webp";
import wilboar from "@/assets/product-logos/product_wilboar.webp";
import wilboarTitle from "@/assets/product-logos/wilboar_card_logo.webp";
import gmammoth from "@/assets/product-logos/product_mammoth.webp";
import gmammothTitle from "@/assets/product-logos/gmammoth_card_logo.webp";
import gCrowTitle from "@/assets/product-logos/product_gcrow.webp";
import gCrow from "@/assets/product-logos/gcrow_card_logo.webp";
import gMambaTitle from "@/assets/product-logos/product_gmamba.webp";
import gMamba from "@/assets/product-logos/gmamba_card_logo.webp";

import Image from "next/image";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";
import { setSessionStorageItem } from "@/utils/ClientUtils";
import { useRouter } from "next/navigation";

const products = [
  {
    titlImg: bandicootMobilityTitle,
    image: bandicootMobility,
    subTitle: "Manhole Cleaning with Waste Management",
    description:
      "A vehicle-integrated robotic system for comprehensive manhole cleaning, on-site waste collection, containment, and transportation in a sealed system.",
    imageAlt: "Bandicoot Mobility Plus vehicle-based manhole cleaning robot",
    link: "/mobility-plus",
  },
  {
    titlImg: bandicootTitle,
    image: bandicoot,
    subTitle: "Manhole Cleaning",
    description:
      "The world’s first robotic scavenger that automates manhole cleaning with robotic arm, 360-degree vision, and advanced toxic gas sensing.",
    imageAlt: "Bandicoot robotic scavenger standing on wheels",
    link: "/bandicoot",
  },
  {
    titlImg: wilboarTitle,
    image: wilboar,
    subTitle: "Process Tank | STP Well | Storm Water Drainage | Culvert",
    description:
      "Engineered for autonomous cleaning and inspection within hazardous industrial and other confined spaces like tanks, wells, canals, culverts, and closed drains.",
    imageAlt: "Wilboar robotic system with rotating sensors and components",
    link: "/wilboar",
  },
  {
    titlImg: gmammothTitle,
    image: gmammoth,
    subTitle: "Portable Automatic Grabber | Suction Combined Jetting | Inspection",
    description:
      "A versatile robotic system combining waste collection, debris removal, inspection, and high-pressure cleaning in a single unit for diverse urban challenges.",
    imageAlt: "Mammoth 4-in-1 orange truck with robotic equipment",
    link: "/g-mammoth",
  },
  {
    titlImg: gCrowTitle,
    image: gCrow,
    subTitle: "Digital Platform for Asset and Operations Management",
    description:
      "Our smart operations management platform digitizes sanitation workflows, providing live GPS tracking, visual confirmation, and automated reports for transparency and accountability.",
    imageAlt: "Digital Platform for Asset and Operations Management",
    link: "/g-crow",
  },
  {
    titlImg: gMambaTitle,
    image: gMamba,
    subTitle: "G Mamba",
    description:
      "A swift and smart robotic system for precise underground and pipeline inspections.",
    imageAlt: "g Mamba",
    link: "",
  },
];

function RoboticsProducts() {
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: inView,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <section className="robotic_products" id="solutions" ref={ref}>
      <div className="container-fluid robotics_container">
        <div className="lg:px-[2rem]">
          <div className="rob_pro_contents  robots_innerdiv">
            <h1>Our Solutions</h1>
            <p>
              Our core robotic
              systems are engineered to tackle the most challenging and hazardous
              cleaning tasks in sanitation and confined industrial spaces. Each
              product is designed for unparalleled safety, efficiency, and
              compliance.
            </p>
          </div>

          <div className="robo_card_wrapper ">
          <style jsx global>{`
                  @media screen and (max-width: 600px) {
                  /* Force height for all slides */
                  .slick-slide .robo_prod_card{
                    min-height: 600px !important;
                    height: 610px !important;
                  }
                  .slick-slide > div {
                    height: 100% !important;
                  }
                  }
                  /* Add gap between slick slides */
                  .mileStones_ .slick-slide {
                    padding-right: 16px; /* 16px gap to the right of each slide */
                  }
                  .mileStones_ .slick-list {
                    margin-right: -16px; /* to avoid overflow and keep items aligned */
                  }
                `}</style>
            <Slider {...settings}>
              {products.map((product, index) => {
                return (
                  <div key={index}>
                    <div className="card robo_prod_card">
                      <div className="prod_img">
                        <Image src={product?.image} alt={product?.imageAlt} />
                      </div>
                      <div className="product_content">
                        <div className="pro_title">
                          <Image
                            src={product?.titlImg}
                            alt={product?.imageAlt}
                          />
                        </div>
                        <br />
                        <h2>{product?.subTitle}</h2>
                        <div className="description_wrapper">
                          <p>{product?.description}</p>
                        </div>
                        <br />
                        <a
                          type="button"
                          className="details_btn"
                          href={product?.link && product.link.trim() !== "" ? product.link : "/"}
                        >
                          <span>More Details</span>
                          <i>
                            <Lu.LuSquareArrowOutUpRight />
                          </i>
                        </a>
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

export default RoboticsProducts;
