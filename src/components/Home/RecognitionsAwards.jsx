"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import img1 from "@/assets/awards/Forbes 30 UNDER 30 ASIA-01 1.png";
import img2 from "@/assets/awards/AI Game Changers' award GPAI 1.png";
import img3 from "@/assets/awards/SWACHHATA STARTUP CHALLENGE 2022-02 1.png";
import img4 from "@/assets/awards/YOUNG CHANGEMAKER AWARD.png";
import img5 from "@/assets/awards/INFOSYS AAROHAN SOCIAL INNOVATION AWARD.png";
import img6 from "@/assets/awards/AMRUT Technology Challenge 1.png";
import img7 from "@/assets/awards/Rectangle (1).png";
import img8 from "@/assets/awards/Modi-with-bandicoot-2.png";
import img9 from "@/assets/awards/Rectangle (3).png";
import img10 from "@/assets/awards/Rectangle (4).png";
import img11 from "@/assets/awards/Rectangle (5).png";
import img12 from "@/assets/awards/Rectangle (6).png";
import img13 from "@/assets/awards/Rectangle (7).png";
import img14 from "@/assets/awards/Rectangle (8).png";
import img15 from "@/assets/awards/Rectangle (9).png";

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
    title: "YOUNG CHANGEMAKER AWARD",
    subtitle: "For inventing the ‘Robotic Technology’",
  },
  {
    img: img5,
    title: "INFOSYS AAROHAN SOCIAL INNOVATION AWARD",
    subtitle: "For the Revolutionary Product Bandicoot",
  },
  {
    img: img6,
    title: "AMRUT TECHNOLOGY AWARD",
    subtitle: "For Promising Innovative Solution",
  },
  {
    img: img7,
    title: "BIRAC Innovator Award 2024",
    subtitle: "For inventing the ‘Robotic Technology’",
  },
  {
    img: img8,
    title: "National Startup Award",
    subtitle: "For the Revolutionary Product Bandicoot",
  },
  {
    img: img9,
    title: "Young Changemaker Award 2020",
    subtitle: "For Promising Innovative Solution",
  },
  {
    img: img10,
    title: "ET Startup Awards 2021",
    subtitle: "For inventing the ‘Robotic Technology’",
  },
  {
    img: img11,
    title: "Pride of Kerala Award",
    subtitle: "For the Revolutionary Product Bandicoot",
  },
  {
    img: img12,
    title: "Level NXT Award for the Best Startup",
    subtitle: "For Promising Innovative Solution",
  },
  {
    img: img13,
    title: "FICCI Award 2019",
    subtitle: "For inventing the ‘Robotic Technology’",
  },
  {
    img: img14,
    title: "Asia Inspiration Award 2018",
    subtitle: "For the Revolutionary Product Bandicoot",
  },
  {
    img: img15,
    title: "Anjani Mashelkar Inclusive Innovation Award",
    subtitle: "For Promising Innovative Solution",
  },
];

function RecognitionsAwards() {
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
    autoplaySpeed: 2000,
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
      <div className="container-fluid">
        <div className="lg:px-[90] ">
          <div className="rec_wrapper">
            <div>
              <h1 className="title">Awards & Recognitions</h1>
              {/* <p className="subtitle">
                Discover the tangible difference Genrobotics' solutions
              </p> */}
              <br />
              <div className="container">
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
                              width={0}
                              height={0}
                              alt={item?.title}
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
        </div>
      </div>
    </section>
  );
}

export default RecognitionsAwards;
