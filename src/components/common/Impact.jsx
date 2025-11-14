"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Impact({ count, stats, cols }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const isOddCount = Array.isArray(stats) && stats.length % 2 === 1;
  return (
    <section className="impact_sec impact_sec_bandicoot" ref={ref}>
      <div className="lg:container-fluid w-full">
        <div className="lg:px-[2rem]">
          <div className="impact-stats bandicoot_impact">
            <h1>Impact That Matters</h1>
            <div
              className={`grid grid-cols-2 md:grid-cols-${
                cols ?? 3
              } lg:grid-cols-${cols ?? 3} gap-y-10 text-center`}
            >
              {stats &&
                Array.isArray(stats) &&
                stats.length != 0 &&
                stats.map((stat, index) => {
                  const isLast = index === stats.length - 1;
                  const mobileCenterLastClass =
                    isOddCount && isLast
                      ? "col-span-2 md:col-span-1 lg:col-span-1 justify-self-center"
                      : "";
                  return (
                    <div
                      key={index}
                      className={`count_border_box ${mobileCenterLastClass}`}
                    >
                    <div className="count_text">
                      {inView && (
                        <CountUp end={stat.value} duration={2} suffix="%" />
                      )}
                    </div>
                    <p className="count_label">{stat.label}</p>
                    </div>
                  );
                })}
            </div>

            <p className="btm_text">
              Return on investment (ROI) IN {count ?? 32} Months
            </p>
            <p className="condition_based">under optimum conditions*</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
