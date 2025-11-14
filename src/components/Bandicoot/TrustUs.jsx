"use client";
import React, { useEffect, useState } from "react";

import venkaiahNaidu from "@/assets/trust/venkaiahnaidu.webp";
import anandMahindra from "@/assets/trust/anand_mahindra.webp";
import anandSawant from "@/assets/trust/pramod_sawant.webp";
import Slider from "react-slick";
import Image from "next/image";

import 'animate.css';

const testimonials = [
  {
    id: 2,
    name: "Shri. Pramod Sawant",
    designation: "Hon'ble Chief Minister of Goa",
    quote:
      "Initiatives like this are a testament to India's technological leadership. I’m proud to see such innovations making a real impact in public service and human dignity.",
    image: anandSawant,
  },
  {
    id: 1,
    name: "Shri. Venkaiah Naidu",
    designation: "Hon'ble Former Vice President of India",
    quote:
      "I am happy about the team for inventing a robot to replace Manual Scavenging. As young professionals your commitment to use technology for the social good is worth emulation by others. Digital technology holds tremendous potential for betterment of the people and their lives.",
    image: venkaiahNaidu,
  },
  {
    id: 3,
    name: "Mr. Anand Mahindra",
    designation: "Chairman, Mahindra Group",
    quote:
      "Technology with purpose is the future. This is a brilliant example of using innovation to solve social challenges at scale.",
    image: anandMahindra,
  },
];

function TrustUs() {
  const [testimonial, setTestimonial] = useState(testimonials[1]);

  useEffect(() => {
    if (!testimonials) return;
    setTestimonial(testimonials[1]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonial((prev) => {
        const currentIndex = testimonials.findIndex((t) => t.id === prev.id);
        const nextIndex = (currentIndex + 1) % testimonials.length;
        return testimonials[nextIndex];
      });
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);
  

  return (
    <section className="trust-us-section">
      <div className="container">
        <h1 className="title_">Hear from those who trust us!</h1>
        <p className="description_">
          Bandicoot is not merely a technological advancement; it is a tool for
          social upliftment. By eliminating manual scavenging, we are restoring
          dignity to sanitation workers and providing them with safer,
          healthier, and more respectable employment opportunities{" "}
        </p>
        <br />
        <div className="wrapper">
          <div className="tumbnail">
            {testimonials.map((testimonialData, index) => (
              <div
                className={`tumbnail_item ${
                  testimonialData.id === testimonial?.id ? "active" : ""
                }`}
                key={index}
                onClick={() => setTestimonial(testimonialData)}
              >
                <Image
                  width={0}
                  height={0}
                  src={testimonialData.image}
                  alt={testimonialData.name}
                />
              </div>
            ))}
          </div>
          <div className="quotes">
            <div className="quotes_symbol"></div>
            <p className="animate__animated animate__bounce">{testimonial?.quote ?? ""}</p>
            <div className="regards_">
              <h4>{testimonial?.name ?? ""}</h4>
              <p>{testimonial?.designation ?? ""}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustUs;
