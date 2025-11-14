"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import venkaiahNaidu from "@/assets/trust/venkaiahnaidu.webp";
import anandMahindra from "@/assets/trust/anand_mahindra.webp";
import anandSawant from "@/assets/trust/pramod_sawant.webp";
import mhua from "@/assets/trust/mhua.webp";
import scm from "@/assets/trust/Smart Cities Mission.webp";
import mrpl from "@/assets/trust/MRPL1.webp";
import Image from "next/image";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";
import { FaPlay } from "react-icons/fa6";

const testimonialsData = [
  {
    id: 1,
    name: "Shri. Venkaiah Naidu",
    designation: "Hon'ble Former Vice President of India",
    quote:
      "I am happy about the team for inventing a robot to replace Manual Scavenging. As young professionals your commitment to use technology for the social good is worth emulation by others. Digital technology holds tremendous potential for betterment of the people and their lives.",
    image: venkaiahNaidu,
  },
  {
    id: 2,
    name: "Shri. Pramod Sawant",
    designation: "Hon'ble Chief Minister of Goa",
    quote:
      "Bandicoot Robot, a Make in India and Swachh Bharat initiative addresses Manual Scavenging. Goa Government  uses these robots for manhole cleaning. By employing Robotics and AI, the Government of Goa is prioritising the safety and rehabilitating workers into Robotic Operators.",
    image: anandSawant,
  },
  {
    id: 4,
    name: "Ministry of Housing and Urban Affairs ",
    designation: "",
    quote:
      "Bandicoot will enable zero human intervention in the cleaning process. The Bandicoot Robot has been developed as a Make in India initiative by Genrobotics and is an excellent example for other    cities    to   improve the working conditions of sanitation workers and completely eliminate Manual Scavenging.",
    image: mhua,
  },
  {
    id: 5,
    name: "Smart Cities Mission",
    designation: "",
    quote:
      "During the pandemic, Bandicoot Robots have been a blessing for the city as they enable sewer cleaning work to be conducted in a completely hygienic manner.",
    image: scm,
  },
  {
    id: 3,
    name: "Mr. Anand Mahindra",
    designation: "Chairman, Mahindra Group",
    quote:
      "There are many who worry about robots 'dehumanising' the society. This is one area in which I believe they will do precisely the opposite. We need more of these.",
    image: anandMahindra,
  },

  {
    id: 5,
    name: "MRPL",
    designation: "",
    quote:
      "Bandicoot Robot and accessories are very efficient  to use in the operating conditions of refineries with a compact design that helps for easy manoeuvring inside refinery plant areas.",
    image: mrpl,
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow customId="trust_nxt" />,
    prevArrow: <CustomPrevArrow customId="trust_prev" />,
  };
  return (
    <section className="trust-us-section">
      <div className="container">
        <h1 className="title_">Backed by Those Who Lead Change</h1>
        {/* <p className="description_">
          Bandicoot is not merely a technological advancement; it is a tool for
          social upliftment. By eliminating manual scavenging, we are restoring
          dignity to sanitation workers and providing them with safer,
          healthier, and more respectable employment opportunities{" "}
        </p> */}
        <br />
        <style jsx global>{`
          @media screen and (max-width: 600px) {
            /* Force height for all slides */
            .slick-slide .testimonial-card {
              min-height: 600px !important;
              height: 600px !important;
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
          {testimonialsData &&
            testimonialsData.map((data, idx55) => {
              return (
                <div>
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <Image
                        src={data?.image}
                        width={0}
                        height={0}
                        alt={data?.name}
                      />
                      {/* <div className="image-caption">
              <h4>Shivangi Mehta</h4>
              <p>Video Testimonial</p>
            </div> */}
                    </div>
                    <div className="testimonial-content">

                      <div className="wrapper__">
                      <div className="quote-mark"></div>
                        <p className="description">{`“${data?.quote}”`}</p>
                        <br />
                        <hr />
                        <div className="testmonial_person">
                          <div className="testimonial-mobile-image">
                            <Image
                              src={data?.image}
                              width={0}
                              height={0}
                              alt={data?.name}
                            />
                          </div>
                          <h3>{data?.name}</h3>
                          <span className="designation">
                            {data?.designation}
                          </span>
                        </div>
                      </div>
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

export default Testimonials;
