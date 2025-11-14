import Image from "next/image";
import React from "react";
import founderBanner from "@/assets/about/1758688970545-964019894.webp";

const foundersList = [
  {
    name: "Nikhil N P",
    designation: "Co-Founder",
  },
  {
    name: "Vimal Govind M K",
    designation: "Co-Founder & CEO",
  },
  {
    name: "Rashid K",
    designation: "Co-Founder",
  },
  {
    name: "Arun George",
    designation: "Co-Founder",
  },
];
function Founders() {
  return (
    <section className="founders_">
      <div className="container-fluid">
        <div className="lg:px-[2rem]">
          <div className="banner_wrapper">
            <h1>Meet Our Founders</h1>

            <Image
              src={founderBanner}
              alt="Founders Banner"
              width={0}
              height={0}
            />

            <div className="founder_footer_content">
              <div className="padding_space">
                <div className="row">
                  {foundersList &&
                    foundersList.length != 0 &&
                    foundersList.map((list, idx66) => {
                      return (
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                          <div className="card founders_card">
                            <h2>{list?.name}</h2>
                            <p>{list?.designation}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <p className="footer_description">
                  Genrobotics is led by visionary leaders who are dedicated to
                  using robotics for positive change. Our team of engineers,
                  researchers, and experts combines technical skills with a
                  strong commitment to innovation. With a forward-thinking
                  approach, we work to create solutions that bring meaningful
                  and lasting improvements to industries around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founders;
