"use client";
import React, { useEffect, useState } from "react";

import pm1 from "@/assets/recognitions/modi_with_bandicoot1.webp";
import pm2 from "@/assets/recognitions/modi_with_bandicoot2.webp";
import tn from "@/assets/recognitions/uttarpradesh_launch.webp";
import gt from "@/assets/recognitions/statewide_deployment1.webp";
import gt2 from "@/assets/recognitions/statewide_deployment2.webp";
import Uttarakhand from "@/assets/recognitions/maharashtra_launch1.webp";
import kl1 from "@/assets/recognitions/maharashtra_launch2.webp";
import kl2 from "@/assets/recognitions/tamilnadu_mobility_launch.webp";
import mh1 from "@/assets/recognitions/gujarat_launch1.webp";
import mh2 from "@/assets/recognitions/gujarat_launch2.webp";
import socialJustice from "@/assets/recognitions/ulhasnagar_launch1.webp";
import mhGold1 from "@/assets/recognitions/ulhasnagar_launch2.webp";
import mhGold2 from "@/assets/recognitions/uttarakhand_launch.webp";
import up1 from "@/assets/recognitions/dehradun_expo.webp";

import Image from "next/image";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";

const initiatives = [
  {
    title: " Bandicoot 2.0 Launched in the presence of Hon'ble Prime Minister",
    description:
      "A powerful validation of our mission, Bandicoot 2.0 was launched in the presence of Hon'ble Prime Minister Shri Narendra Modi and UN Secretary-General António Guterres at the Mahatma Gandhi International Sanitation Convention in 2018. This marked a national endorsement of using indigenous technology for the Swachh Bharat Mission.",
    image1: pm1,
    image2: pm2,
    mobileImage: pm1,
  },
  {
    title: "Uttar Pradesh: A New Era of Worker Safety",
    description:
      "UP Chief Minister Shri Yogi Adityanath launched Bandicoot for the end of manual scavenging. This milestone reflects the government’s commitment to worker safety and dignity by replacing hazardous manual methods with robotic technology.",
    image1: up1,
    image2: null,
    mobileImage: up1,
  },
  {
    title: "Kerala’s Pioneering Commitment: Statewide Deployment",
    description:
      "Hon’ble Chief Minister of Kerala, Shri Pinarayi Vijayan, inaugurated Bandicoot Robot in February 2018, marking the beginning of a new era in sanitation. He also signed a landmark MOU for the statewide deployment of Bandicoot robots, reaffirming Kerala’s commitment to eradicating manual scavenging and restoring safety and dignity for sanitation workers.",
    image1: kl1,
    image2: kl2,
    mobileImage: kl1,
  },
  {
    title: "Driving Dignity in Sanitation: Maharashtra Adopts Bandicoot Robots",
    description:
      "Hon’ble Deputy CM Devendra Fadnavis witnessed the Bandicoot Robot in action during TechWari at Mantralaya, reaffirming the state’s commitment to smart and safe sanitation. Now operational in cities like Nagpur, Sambhaji Nagar, and Ulhasnagar, the robots are accelerating the move toward eliminating manual scavenging.",
    image1: mhGold1,
    image2: mhGold2,
    mobileImage: mhGold2,
  },
  {
    title: "Tamil Nadu: Revolutionizing Urban Sanitation with Mobility",
    description:
      "Chennai’s urban sanitation got major upgrade with the launch of Bandicoot Mobility +, with its inauguration by Minister K.N. Nehru and Mayor Priya Rajan. This modern tech serves as a landmark moment in the success of Bandicoot robots already operating in 15 Tamil Nadu cities, boosting the state’s push for safe and sustainable sanitation.",
    image1: tn,
    image2: null,
    mobileImage: tn,
  },
  // {
  //   title: "Haryana’s Progressive Stance: Embracing Robotic Solutions",
  //   description:
  //     "Manohar Lal Khattar, Hon'ble Union Minister of Power, Housing, and Urban Affairs unveiled the Bandicoot's robotic technology in the Gurugram, marking a shift from conventional cleaning methods to a more efficient and dignified approach.",
  //   image1: haryana,
  //   image2: null,
  // },
  {
    title: "Gujarat’s Vision for Progress: Advanced Technology in Action",
    description:
      "Gujarat is taking a significant step in urban sanitation. With the deployment of Bandicoot, Chief Minister Bhupendra Patel showcased the state’s dedication to smart city development projects by Bandicoot’s success. So far, 20+ Bandicoot robots have been welcomed across the state, reflecting Gujarat’s proactive approach in adopting robotic solutions for safe and efficient sanitation.",
    image1: gt,
    image2: gt2,
    mobileImage: gt2,
  },
  {
    title: "Maharashtra’s Urban Development: Ulhasnagar Leads the Way",
    description:
      "Hon'ble Minister Urban Development of Maharashtra, Shri Eknath Shinde, inaugurated Bandicoot in Ulhasnagar under #MissionZeroManualScavenging. This initiative marks a major step in transforming sanitation and uplifting worker dignity.",
    image1: mh1,
    image2: mh2,
    mobileImage: mh1,
  },
  {
    title: "Uttarakhand: Smart Cities, Smarter Sanitation",
    description:
      "Bandicoot Robot was launched in Uttarakhand by Hon'ble Chief Minister Shri. Pushkar Singh Dhami as part of the Dehradun Smart City initiative—advancing the state’s mission to eliminate manual scavenging through modern technology.",
    image1: Uttarakhand,
    image2: null,
    mobileImage: Uttarakhand,
  },
  {
    title: " Innovation for Social Justice",
    description:
      "At the Chintan Shivir 2024 Expo in Dehradun, Bandicoot captured attention for its revolutionary role in eliminating manual scavenging. Hon’ble Union Minister Dr. Virendra Kumar, along with Sh. Ravinder Indraj Singh, Sh. Amit Yadav, IAS, and Sh. Prabhat Kumar Singh (MD, NSKFDC), visited the exhibit and lauded Bandicoot’s contribution to advancing dignity and safety in sanitation.",
    image1: socialJustice,
    image2: null,
    mobileImage: socialJustice,
  },
];

function Milestones() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [isMobile, setIsMobile] = useState(false);

  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // adjust breakpoint if needed
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const settings = {
    slidesToShow: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    pauseOnHover: false,
    pauseOnFocus: true,
    autoplaySpeed: 2500,
    nextArrow: <CustomNextArrow customId="mileStones_nxt" />,
    prevArrow: <CustomPrevArrow customId="mileStones_prev" />,
  };
  return (
    <section className="mileStones_" ref={ref}>
      <div className="lg:container-fluid">
        <div className="lg:px-[2rem]">
          <div className="gray_card">
            <div className="container-fluid">
              <div className="rob_pro_contents">
                <h1>Milestones & Endorsements</h1>
                <p>
                  While leading the charge against manual scavenging, we have
                  earned the trust of national and state leaders, marking a
                  unified commitment to safety and dignity.
                </p>
              </div>
              <br />
              <div className="md:hidden">
                <style jsx global>{`
                  @media screen and (max-width: 768px) {
                  /* Force height for all slides */
                  .slick-slide .milestone_card{
                    min-height: 600px !important;
                    height: 600px !important;
                  }
                  .slick-slide > div {
                    height: 100% !important;
                  }
                  }
                  @media (min-width:769px) and (max-width: 1080px) {
                  /* Force height for all slides */
                  .slick-slide .milestone_card{
                    min-height: 700px !important;
                    height: 700px !important;
                  }
                  }
                  @media (min-width:1081px) and (max-width: 1440px) {
                  /* Force height for all slides */
                  .slick-slide .milestone_card{
                    min-height: 800px !important;
                    height: 800px !important;
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
                  {initiatives.map((item, idx) => {
                    return (
                      <div className="card milestone_card" key={idx}>
                        <div className="image_frames">
                          <div className="md:flex md:flex-row md:gap-4 md:p-4 flex flex-col h-full">
                            <div className="md:rounded-xl overflow-hidden flex-1 h-full">
                              <div className="image1_wrapper">
                                <Image
                                  src={item?.mobileImage}
                                  alt={item?.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </div>
                          <h2>{item?.title}</h2>
                          <p>{item?.description}</p>
                          <br />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="hidden md:block">
                <style jsx global>{`
                  /* Add gap between slick slides for desktop */
                  .mileStones_ .slick-slide {
                    padding-right: 24px; /* 24px gap for desktop */
                  }
                  .mileStones_ .slick-list {
                    margin-right: -24px;
                  }
                `}</style>
                <Slider {...settings}>
                  {initiatives.map((init, index27) => {
                    const imageSrc =
                      isMobile && index27 === 0 ? init?.image2 : init?.image1;
                    return (
                      <div className="card milestone_card" key={index27}>
                        <div className="image_frames">
                          <div className="flex flex-col md:flex-row gap-4 p-4 ">
                            <div className="flex-2 rounded-xl overflow-hidden">
                              <div className="image1_wrapper">
                                <Image
                                  src={imageSrc}
                                  alt={init?.title}
                                  width={0}
                                  height={0}
                                />
                              </div>
                            </div>

                            {init?.image2 && (
                              <div className="second-img flex-1 rounded-xl overflow-hidden">
                                <Image
                                  src={init?.image2}
                                  alt={init?.title}
                                  width={0}
                                  height={0}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                          <h2>{init?.title}</h2>
                          <p>{init?.description}</p>
                          <br />
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

export default Milestones;
