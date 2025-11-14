import Image from "next/image";
import React from "react";

import image1 from "@/assets/products/wilboar/operations/tank-farm-black-crude-oil 1.webp";
import image2 from "@/assets/products/wilboar/operations/DSCF0790 1.webp";
import image3 from "@/assets/products/wilboar/operations/Solid_waste_blocking_the_drainage_(6915329355) 1.webp";
import image4 from "@/assets/products/wilboar/operations/IMG_6226 1.webp";

const operationAreas = [
  {
    title: "Tanks",
    image: image1,
  },
  {
    title: "Canals",
    image: image2,
  },
  {
    title: "Drainage",
    image: image3,
  },
  {
    title: "STP Wells",
    image: image4,
  },
];

function Wilboar_Applications() {
  return (
    <section className="wilBoarApplications_">
      <div className="container-fluid applications_container">
        <div className="lg:px-[2rem]">
          <h1>Application Across Different Horizontal Confined Spaces</h1>
          <br />
          <div className="row">
            {operationAreas.map((area, idx) => (
              <div className="col-lg-3 col-md-6 col-sm-12 mt-4" key={idx}>
                <div className="card wilboar_app_card">
                  <Image
                    src={area.image}
                    alt={area.title}
                    className="card-img-top"
                    width={0}
                    height={0}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{area.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wilboar_Applications;
