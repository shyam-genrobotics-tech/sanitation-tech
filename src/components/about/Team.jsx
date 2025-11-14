"use client";
import React from "react";

import img1 from "@/assets/about/team/bbf39ef9a57c27c130fb6a85febf43b74ab61a3b.webp";
import img2 from "@/assets/about/team/8002508c570f72b6219c20cf0f0535b465836c41.webp";
import img3 from "@/assets/about/team/f293b1c2540ab01222cbdc5229cea64ca041ed92.webp";
import img4 from "@/assets/about/team/8e8bd40563975a2cb32aa911258862445b877a1a.webp";
import img5 from "@/assets/about/team/85b4d775b26b46f6a7b4442dd6e82759beab1e4f.webp";
import img6 from "@/assets/about/team/7a682c5c0ad888040a16e649c694b94cc7c5bde1.webp";
import img7 from "@/assets/about/team/9d3a96105a30771034b74aef929fbaae7797fdc8.webp";
import Image from "next/image";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";

const teamMembers = [
  {
    name: "JALEESH P",
    designation: "Chief Technical Officer",
    image: img1,
  },
  {
    name: "AFSAL MUTTIKKAL",
    designation: "Director of Healthcare Business",
    image: img2,
  },
  {
    name: "VIPIN GOVIND MK",
    designation: "Chief Marketing Officer",
    image: img3,
  },
  {
    name: "SUJODH K",
    designation: "Chief Software Officer",
    image: img4,
  },
  {
    name: "ABHILASH K",
    designation: "Chief Financial Officer",
    image: img5,
  },
  {
    name: "NISHA NAIR",
    designation: "HR Manager",
    image: img6,
  },
  {
    name: "ANANDHU PS",
    designation: "Purchase Manager",
    image: img7,
  },
];

function Team() {
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
    <section className="team_sec">
      <div className="wrapper_">
        <h1>Meet our Leadership</h1>
        <br />
        <Slider {...settings}>
          {teamMembers.map((member, indx3) => {
            return (
              <div className="team_card" key={indx3}>
                <div className="image_wrapper">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={0}
                    height={0}
                  />
                </div>
                <div className="content_area">
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Team;
