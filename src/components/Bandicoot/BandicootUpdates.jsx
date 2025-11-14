"use client";
import React from "react";

import asst1 from "@/assets/products/bandicoot/updates/gujarat_bandicoot_robots.webp";
import asst2 from "@/assets/products/bandicoot/updates/indore_bandicoot_robots.webp";
import asst3 from "@/assets/products/bandicoot/updates/kolkata_bandicoot_robots.webp";
import asst4 from "@/assets/products/bandicoot/updates/visai_virar_bandicoot_robots.webp";
import asst5 from "@/assets/products/bandicoot/updates/dhule_bandicoot_robots.webp";
import asst6 from "@/assets/products/bandicoot/updates/coimbatore_bandicoot_robots.webp";
import Image from "next/image";

import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";

const updates = [
  {
    title: "Gujarat's Vision for Progress: 9 Bandicoot Robots in Action",
    content:
      "With 9 Bandicoot robots deployed across key municipalities, Gujarat is taking a major step toward eliminating manual scavenging and ensuring safety and dignity for sanitation workers. So far, over 20 Bandicoot robots have been launched across the state, reflecting the Gujarat Urban Development Mission’s proactive adoption of robotic solutions for efficient and humane sanitation.",
    image: asst1,
  },
  {
    title: "Indore Leads with 5 Bandicoot Robots",
    content:
      " India’s cleanest city for five consecutive years has now taken a futuristic leap in sanitation. With CSR support from BPCL, five Bandicoot Robots were launched on Gandhi Jayanti, eliminating human entry into manholes. The initiative was led by Hon’ble Commissioner Shri. Harshika Singh (IAS) and senior officials, reinforcing Indore’s unwavering commitment to innovation, safety, and human dignity.",
    image: asst2,
  },
  {
    title: "New Town Kolkata Adopts 3 Bandicoots for Modern Sanitation",
    content:
      "The Town Kolkata Development Authority (NKDA) introduced 3 Bandicoot Robots in a landmark launch attended by Shri. Debashish Sen IAS, Chairman NKDA, and Shri. Prashanta Barai, CEO NKDA. This milestone reflects Kolkata’s strong commitment to safe, human-centric sanitation solutions.",
    image: asst3,
  },
  {
    title: "Vasai Virar Integrates 3 Bandicoots into Its Fleet",
    content:
      "Joining Maharashtra’s wave of smart sanitation, Vasai Virar Municipal Corporation has inducted 3 Bandicoot Robots, aligning with cities like Nagpur and Pune. The official handover was led by Former Mayor Shri. Rajeev Patil, along with Hon’ble Commissioner Shri. Anilkumar Pawar, Shri. Charusheela Pandit, Shri. Nanasaheb Kamthe, and Genrobotics officials.",
    image: asst4,
  },
  {
    title: "Dhule Deploys 2 Bandicoots for Safer Sanitation",
    content:
      "Marking a new era for sanitation in Maharashtra, Dhule Municipal Corporation has introduced 2 Bandicoot Robotic Scavengers to eliminate manual manhole cleaning. The initiative not only enhances safety but also empowers sanitation workers by transitioning them into skilled robotic operators.",
    image: asst5,
  },
  {
    title: "Coimbatore Rolls Out 5 Robots Across City Zones",
    content:
      "In a determined move to end manual scavenging, Coimbatore City Municipal Corporation has deployed 5 Bandicoot Robots across all five zones. A successful trial in Ward 83, overseen by Corporation Commissioner Shri M. Sivaguru Prabhakaran, marked the beginning of a tech-driven transformation in manhole cleaning.",
    image: asst6,
  },
];

function BandicootUpdates() {
  const settings = {
    centerPadding: "10px",
    slidesToShow: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <CustomNextArrow customId=""/>,
    prevArrow: <CustomPrevArrow customId=""/>,
  };
  return (
    <section className="bandicoot_updates">
      <div className="container-fluid">
        <div className="lg:px-[2rem]">
          <div className="gray_card">
            <div className="container">
              <div className="rob_pro_contents">
                <h1>RECENT UPDATES</h1>
                {/* <p>
                  While leading the charge against manual scavenging, Genrobotics has
                  earned the trust of national and state leaders who have
                  launched our solutions across India, marking a unified
                  commitment to safety and dignity.
                </p> */}
              </div>
              <br />
              <style jsx global>{`
                  @media screen and (max-width: 600px) {
                  /* Force height for all slides */
                  .slick-slide .milestone_card{
                    min-height: 520px !important;
                    height: 520px !important;
                  }
                  .slick-slide > div {
                    height: 100% !important;
                  }
                `}</style>
              <Slider {...settings}>
                {updates.map((data, idx8) => {
                  return (
                    <div className="card milestone_card">
                      <div className="image_frames bandicoot_update_frame">
                        <div className="image_wrapper">
                          <Image
                            src={data.image}
                            width={0}
                            height={0}
                            alt="test"
                          />
                        </div>
                        <div className="py-[20] px-[20]">
                          <h1 className="title">{data.title}</h1>
                          <p>{data.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BandicootUpdates;
