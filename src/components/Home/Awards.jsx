"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import img1 from "@/assets/awards/forbes_30_under_30.webp";
import img2 from "@/assets/awards/ai_gamechangers_award.webp";
import img3 from "@/assets/awards/swachhta_startup_challenge.webp";
import img4 from "@/assets/awards/young_changemaker_award.webp";
import img5 from "@/assets/awards/infosys_aarohan_social_innovation_award.webp";
import img6 from "@/assets/awards/amrut_technology_award.webp";
import img7 from "@/assets/awards/birac_social_impact_award.webp";
import img8 from "@/assets/awards/modi_with_bandicoot.webp";
import img11 from "@/assets/awards/pride_of_kerala_award.webp";
import img12 from "@/assets/awards/the_level_next_award.webp";
import img13 from "@/assets/awards/ficci_award_2019.webp";
import img14 from "@/assets/awards/asia_inspiration_award.webp";
import img15 from "@/assets/awards/anjali_mashelkar_inclusive_innovation_award.webp";

import Image from "next/image";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";

const awards = [
  {
    img: img2,
    title: "Ranked in Top 3 AI Startup by MeitY",
    subtitle: "For innovation in environmental robotics",
  },
  {
    img: img1,
    title: "Forbes 30 Under 30",
    subtitle: "Recognizing our visionary leadership",
  },
  {
    img: img3,
    title: "SWACHHATA STARTUP CHALLENGE",
    subtitle: "For innovation in environmental robotics.",
  },
  {
    img: img4,
    title: "Awarded for Driving Change in Urban Sanitation",
    subtitle: "Honored by Former Vice President Shri Venkaiah Naidu with the Young Changemaker Award 2020 for our contribution to safe sanitation through Bandicoot",
  },
  {
    img: img5,
    title: "INFOSYS AAROHAN SOCIAL INNOVATION AWARD",
    subtitle: "For the Revolutionary Product Bandicoot",
  },
  {
    img: img6,
    title: "AMRUT Tech Challenge Award 2020",
    subtitle:
      "Recognized by the Ministry of Housing and Urban Affairs for Bandicoot, a breakthrough solution to end manual sewer cleaning.",
  },
  {
    img: img7,
    title: "BIRAC Social Impact Award 2024",
    subtitle:
      "Presented by the Ministry of Science & Technology for the impactful innovations Bandicoot and Mobility+, eliminating manual scavenging and uplifting sanitation workers.",
  },
  {
    img: img8,
    title: "Honored with the National Startup Award 2020",
    subtitle:
      "Awarded in the ‘Campus-Initiated Startups’ category by the Ministry of Commerce and Industry, for Bandicoot — the world’s first robot designed to eliminate human entry into sewers.",
  },
  // {
  //   img: img9,
  //   title: "Young Changemaker Award 2020",
  //   subtitle: "For Promising Innovative Solution",
  // },
  {
    img: img11,
    title: "From Kerala, for the world",
    subtitle: "We’re proud to be honored with the ‘Pride of Kerala’ award — the state’s highest startup recognition — by the Kerala Startup Mission at Huddle Global 2022. Presented by CM Shri Pinarayi Vijayan.",
  },
  {
    img: img12,
    title: "The Level Next Award",
    subtitle:
      "Innovation is just the beginning — scaling impact is the mission. Grateful to receive the Level Next Award, honoring Genrobotics as one of India’s top scale-up champions.",
  },
  {
    img: img13,
    title: "FICCI Best Corporate Initiative Award",
    subtitle:
      "Our mission to end manual scavenging and modernize sanitation earned national recognition, with the FICCI Best Corporate Initiative Award 2019 at the India Sanitation Coalition.",
  },
  {
    img: img14,
    title: "Asia Inspiration Award",
    subtitle:
      "Grateful to IYC for honoring our work in transforming sanitation and replacing manual scavenging with dignity and technology.",
  },
  {
    img: img15,
    title: "Innovation with purpose gets honored",
    subtitle:
      "Thank you, Dr. R.A. Mashelkar and NSIC, for awarding us the Anjani Mashelkar Inclusive Innovation Award 2019 — for Bandicoot and the movement to end manual scavenging.",
  },
];

function Awards() {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 1024 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => {
      setActiveSliderIndex(current);
    },
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <section className="recognitions_sec">
      <div className="container-fluid awards_container">
        <div className="lg:px-[2rem] ">
          <div className="rec_wrapper">
            <h1 className="title">Awards & Recognitions</h1>
            <p className="subtitle">
              Discover the tangible difference Genrobotics' solutions
            </p>
            <br />
            <Slider {...settings}>
              {awards.map((item, idx4) => {
                return (
                  <div className="slider_wrapper_sub" key={idx4}>
                    <div
                      className={
                        idx4 == activeSliderIndex
                          ? "card slider_card slick-center"
                          : "card slider_card"
                      }
                    >
                      <div className="image_wrapper">
                        <Image
                          src={item?.img}
                          alt={item?.title}
                          fill
                          className="image_inner"
                        />
                      </div>
                      <h3>{item?.title}</h3>
                      <p>{item?.subtitle}</p>
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

export default Awards;
