"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";

function RecentUpdates({ title, description, updates }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const settings = {
    centerPadding: "10px",
    slidesToShow: 1,
    arrows: true,
    dots: true,
    autoplay: inView,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow customId="update_next" />,
    prevArrow: <CustomPrevArrow customId="update_prev" />,
  };

  return (
    <section className="bandicoot_updates" ref={ref}>
      <div className="container-fluid">
        <div className="lg:px-[90]">
          <div className="gray_card">
            <div className="container">
              <div className="rob_pro_contents">
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <br />
              <style jsx global>{`
                @media screen and (max-width: 600px) {
                  /* Force height for all slides */
                  .slick-slide .milestone_card {
                    min-height: 600px !important;
                    height: 600px !important;
                  }
                  .slick-slide > div {
                    height: 100% !important;
                  }
                }
              `}</style>
              <Slider {...settings}>
                {updates.map((data, idx8) => {
                  return (
                    <div className="card milestone_card" key={idx8}>
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
                          <h1 className="title">{data?.title ?? ""}</h1>
                          <p>{data?.content ?? ""}</p>
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

export default RecentUpdates;
