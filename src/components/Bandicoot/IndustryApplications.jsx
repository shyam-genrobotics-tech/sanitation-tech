import React from "react";

import icon1 from "@/assets/products/bandicoot/icons/muncipal_services.webp";
import icon2 from "@/assets/products/bandicoot/icons/oil_and_gas.webp";
import icon3 from "@/assets/products/bandicoot/icons/chemical_and_pharm.webp";
import icon4 from "@/assets/products/bandicoot/icons/distilleries.webp";
import icon5 from "@/assets/products/bandicoot/icons/aviation_and_airports.webp";
import icon6 from "@/assets/products/bandicoot/icons/hospitality_and_hotels.webp";
import Image from "next/image";

const sectors = [
  {
    name: "Municipal & Urban Services",
    icon: icon1,
  },
  {
    name: "Oil & Gas Industries",
    icon: icon2,
  },
  {
    name: "Chemical & Pharmaceutical Plants",
    icon: icon3,
  },
  {
    name: "Distillery & Beverage",
    icon: icon4,
  },
  {
    name: "Aviation & Airport",
    icon: icon5,
  },
  {
    name: "Hospitality & Tourism",
    icon: icon6,
  },
];

function IndustryApplications({ product }) {
  return (
    <section className="industry_apps">
      <div className="container-fluid industry_container">
        <div className="lg:px-[2rem] ">
          <h1 className="title__">Diverse Applications Across Industries</h1>
          <p className="sub__title">
            {product ?? ""}'s versatile design makes it suitable for a wide
            range of industries requiring safe and efficient confined space
            cleaning.
          </p>
          <br />
          <div className="row wrapper_">
            {sectors.map((data, index7) => {
              return (
                <div
                  className="col-lg-2 col-md-4 col-6 mt-3 cols_ind"
                  key={index7}
                >
                  <div className="image_wrapper">
                    <Image
                      src={data?.icon}
                      alt={data?.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p id="subs_indust">{data?.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryApplications;
