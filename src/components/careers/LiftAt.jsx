"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import life1 from "@/assets/careers/life/very_first_bandicoot.webp";
import life2 from "@/assets/careers/life/jaipur_launch.webp";
import life3 from "@/assets/careers/life/initial_team.webp";
import life4 from "@/assets/careers/life/bandicoot_at_leh.webp";
import life5 from "@/assets/careers/life/first_ggaiter_launch.webp";

function LiftAt() {
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
    <section className="lifeAt_sec overflow-hidden">
      <div className="wrapper_">
        <div className="title_wrapper">
          <h1>Life at Genrobotics</h1>
          <p>A glimpse into our world of innovation and camaraderie.</p>
        </div>

        <div className="slider_wrapper">
          <Slider {...settings}>
            <div>
              <div className="card sanitary_card">
                <Image
                  src={life1}
                  alt="Very First Bandicoot"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div>
              <div className="card sanitary_card">
                <Image
                  src={life2}
                  alt="Jaipur Launch"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div>
              <div className="card sanitary_card">
                <Image
                  src={life3}
                  alt="Initial Team"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div>
              <div className="card sanitary_card">
                <Image
                  src={life4}
                  alt="Bandicoot at Leh"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div>
              <div className="card sanitary_card">
                <Image
                  src={life5}
                  alt="Advanced Robotic Gait Trainer Launch"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default LiftAt;
