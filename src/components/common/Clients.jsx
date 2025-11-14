"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";

function Clients({ clients }) {
  const settings = {
    dots: false,
    infinite: clients && clients.length > 5,
    slidesToShow: clients && clients.length > 5 ? 6 : clients.length,
    autoplay: clients && clients.length > 5,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    draggable: clients && clients.length > 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplaySpeed: 200,
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
    <section className="clients_sec">
      <div
        className={` clients-container ${
          clients && clients.length > 5 ? "md:container-fluid" : "md:container"
        } `}
      >
        <div className="headings_">
          <h1>Our Esteemed Clients</h1>
          <p>
            We are privileged to partner with a diverse range of organizations
            across various sectors, helping them achieve their sanitation and
            operational goals.
          </p>
        </div>
        <style jsx global>{`
          @media screen and (max-width: 600px) {
            /* Force height for all slides */
            .clients_slick .slick-slide {
              min-width: fit-content !important;
              width: fit-content !important;
            }
            .slick-slide > div {
              width: fit-content !important;
            }
          }
        `}</style>
        <div className="clients_slick">
          <Slider {...settings}>
            {clients &&
              Array.isArray(clients) &&
              clients.length !== 0 &&
              clients.map((data, index1) => {
                return (
                  <div
                    key={index1}
                    className="client_slide"
                    style={{
                      width: "fit-content",
                      display: "inline-block",
                    }}
                  >
                    <div
                      className="client_wrapper"
                      style={{
                        width: "fit-content",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="logo-box">
                        <Image
                          src={data?.image.src}
                          width={0}
                          height={0}
                          alt={data?.alt}
                          style={{ color: "transparent" }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Clients;
