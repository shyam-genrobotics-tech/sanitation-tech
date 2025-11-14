"use client";
import React from "react";
import Image from "next/image";

import img1 from "@/assets/products/bandicoot/workers/worker_1.webp";
import img2 from "@/assets/products/bandicoot/workers/worker_2.webp";
import img3 from "@/assets/products/bandicoot/workers/worker_3.webp";
import img4 from "@/assets/products/bandicoot/workers/worker_4.webp";
import img5 from "@/assets/products/bandicoot/workers/worker_5.webp";
import img6 from "@/assets/products/bandicoot/workers/worker_6.webp";
import img7 from "@/assets/products/bandicoot/workers/worker_7.webp";
import img8 from "@/assets/products/bandicoot/workers/worker_8.webp";
import img9 from "@/assets/products/bandicoot/workers/worker_9.webp";
import img10 from "@/assets/products/bandicoot/workers/worker_10.webp";
import img11 from "@/assets/products/bandicoot/workers/worker_11.webp";
import img12 from "@/assets/products/bandicoot/workers/worker_12.webp";

const workers = [
  { image: img1, alt: "Worker at Puri, Odissa" },
  { image: img2, alt: "Worker at Vishakapatanam" },
  { image: img3, alt: "Workers with bandicoot at Kolkata" },
  { image: img4, alt: "Robotic Scavenger at Kolakata" },
  { image: img5, alt: "Bandicoot at Kolakata" },
  { image: img6, alt: "Bandicoot at Thiruvananthapuram" },
  { image: img7, alt: "Workers operating Robotic Scavenger at Vishakapatanam" },
  { image: img8, alt: "Worker with Robotic Scavenger at Maharashtra" },
  { image: img9, alt: "Workers operating Bandicoot at Thiruvananthapuram" },
  { image: img10, alt: "Worker beside Robotic Scavenger" },
  { image: img11, alt: "Worker operating Robotic Scavenger" },
  { image: img12, alt: "Workers cleaning manhole using bandicoot" },
  ];

import Slider from "react-slick";

function SanitaionWorkers() {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
    <section className="sanitationWorkers">
      <h1>Transforming the Lives of Sanitation Workers</h1>
      <p className="sub_title">More Than Just a Robot</p>
      <br />
      <p className="sub_title2">
        Bandicoot is not merely a technological advancement; it is a tool for
        social upliftment. By eliminating manual scavenging, we are restoring
        dignity to sanitation workers and providing them with safer, healthier,
        and more respectable employment opportunities as 'Robotic Operators'. We
        provide comprehensive training to Sanitation workers, empowering them
        with the skills to operate and maintain these advanced robotic systems.
        This transition not only improves their quality of life but also
        integrates them into a technology-driven workforce, fostering a sense of
        pride and purpose.
      </p>
      <br />
      <div className="slider_wrapper">
        <Slider {...settings}>
          {workers.map((data, index) => {
            return (
              <div>
                <div className="card sanitary_card">
                  <Image
                    src={data.image}
                    alt={data?.alt}
                    width={0}
                    height={0}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default SanitaionWorkers;
