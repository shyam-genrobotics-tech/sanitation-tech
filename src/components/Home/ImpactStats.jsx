"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

const stats = [
  { value: 4, label: "Countries" },
  { value: 22, label: "States" },
  { value: 220, label: "Robots Deployed" },
  { value: 6000, label: "Workers Trained & Empowered" },
  { value: 2300000, label: "Confined Spaces Cleaned Safely" },
  { value: 1100000, label: "Hazardous Waste Safely Removed" },
];

export default function ImpactStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const indianFormat = (value) =>
    new Intl.NumberFormat("en-IN").format(value) + "+";
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 600); // adjust breakpoint if needed
  };

  checkScreenSize(); // initial check
  window.addEventListener("resize", checkScreenSize);

  return () => window.removeEventListener("resize", checkScreenSize);
}, []);
  return (
    <section ref={ref} className="impact_sec">
      <div className="container-fluid impact_container">
        <div className="lg:px-[2rem]">
          <div className="impact-stats">
            <h2 className="impact_title">Our Overall Impact Statistics</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="count_border_box">
                  <div className="count_text">
                    {inView && (
                      <CountUp
                        formattingFn={indianFormat}
                        end={stat.value}
                        duration={2}
                        suffix="+"
                      />
                    )}
                  </div>
                  <p className="count_label">{stat.label}</p>
                </div>
              ))}
            </div>
            {isMobile && inView && (
               <div className="mobile_button_wrapper">
                  <button className="impact_mobile_button">More About Us</button>
              </div>
       )}

          </div>
        </div>
      </div>
    </section>
  );
}
